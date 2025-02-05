class TwlsIconArrow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    const width = this.getAttribute("width") || "16";
    const height = this.getAttribute("height") || "16";
    const fill = this.getAttribute("fill") || "currentColor";
    const rotate = this.getAttribute("rotate") || "0";

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <svg width="${width}" height="${height}" viewBox="0 0 82 89" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(${rotate}deg); aspect-ratio: 82 / 89;">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0589 1.75736L80.2426 39.9411C82.5858 42.2843 82.5858 46.0833 80.2426 48.4264L42.0589 86.6102C39.7157 88.9533 35.9167 88.9533 33.5736 86.6102C31.2304 84.267 31.2304 80.468 33.5736 78.1249L61.5147 50.1838H6C2.68629 50.1838 0 47.4975 0 44.1838C0 40.8701 2.68629 38.1838 6 38.1838H61.5147L33.5736 10.2426C31.2304 7.8995 31.2304 4.10051 33.5736 1.75736C35.9167 -0.585787 39.7157 -0.585787 42.0589 1.75736Z" fill="${fill}" />
      </svg>
      `;
    }
  }
}

customElements.define("twls-icon-arrow", TwlsIconArrow);

export default TwlsIconArrow;