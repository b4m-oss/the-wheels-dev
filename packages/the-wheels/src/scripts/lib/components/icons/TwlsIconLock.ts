class TwlsIconLock extends HTMLElement {
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
        <svg width="${width}" height="${height}" viewBox="0 0 65 87" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(${rotate}deg); aspect-ratio: 65 / 87;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8333 32.625V21.75C10.8333 9.7378 20.5338 0 32.5 0C44.466 0 54.1667 9.7378 54.1667 21.75V32.625H65V87H0V32.625H10.8333ZM21.6667 21.75C21.6667 15.7439 26.5169 10.875 32.5 10.875C38.4831 10.875 43.3333 15.7439 43.3333 21.75V32.625H21.6667V21.75ZM27.0833 70.6875V48.9375H37.9167V70.6875H27.0833Z" fill="${fill}"/>
        </svg>
      `;
    }
  }
}

customElements.define("twls-icon-lock", TwlsIconLock);

export default TwlsIconLock;