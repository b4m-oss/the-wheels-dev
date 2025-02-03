class TwlsButton extends HTMLElement {
  static get observedAttributes() {
    return ["label", "type", "class", "is-full", "disabled"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const label = this.getAttribute("label") || "";
    const type = this.getAttribute("type") || "button";
    const buttonClass = this.getAttribute("class") || "";
    const isFull = this.hasAttribute("is-full");
    const isDisabled = this.hasAttribute("disabled");

    // data-* 属性の収集
    const dataAttributes = Array.from(this.attributes)
      .filter(attr => attr.name.startsWith("data-"))
      .reduce((acc, attr) => {
        acc[attr.name] = attr.value;
        return acc;
      }, {} as { [key: string]: string });

    // data属性の文字列化
    const dataAttributesString = Object.entries(dataAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <button
          type="${type}"
          class="twls-button ${buttonClass}${isFull ? ' full' : ''}"
          ${isDisabled ? 'disabled' : ''}
          ${dataAttributesString}
        >
          ${label}
        </button>
      `;
    }
  }
}

customElements.define("twls-button", TwlsButton);

export default TwlsButton; 