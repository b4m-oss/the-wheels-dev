class TwlsGlobalHeader extends HTMLElement {
  static get observedAttributes() {
    return ["title", "caption"];
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
    const title = this.getAttribute("title") || "";
    const caption = this.getAttribute("caption");

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <div class="twls-container">
          <div class="global-header">
            <p class="title">
              <a href="/">${title}</a>
            </p>
            ${caption ? `<p class="caption">${caption}</p>` : ""}
          </div>
        </div>
      `;
    }
  }
}

customElements.define("twls-global-header", TwlsGlobalHeader);

export default TwlsGlobalHeader; 