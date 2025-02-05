class TwlsMessagePanel extends HTMLElement {
  static get observedAttributes() {
    return ["html-class"];
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

  private render() {
    const htmlClass = this.getAttribute("html-class") || "";

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <div class="twls-message-panel ${htmlClass}">
          <header class="twls-message-panel_header">
            <slot name="header"></slot>
          </header>
          <div class="twls-message-panel_content">
            <slot name="content"></slot>
          </div>
        </div>
      `;
    }
  }
}

customElements.define("twls-message-panel", TwlsMessagePanel);

export default TwlsMessagePanel;