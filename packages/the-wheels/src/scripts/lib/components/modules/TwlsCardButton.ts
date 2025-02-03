class TwlsCardButton extends HTMLElement {
  static get observedAttributes() {
    return ["href", "title", "caption", "cta-label"];
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
    const href = this.getAttribute("href") || "#";
    const title = this.getAttribute("title") || "";
    const caption = this.getAttribute("caption") || "";
    const ctaLabel = this.getAttribute("cta-label") || "詳細へ";
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <a class="twls-card-button" href="${href}">
          <div class="label">
            <p><b>${title}</b></p>
            ${caption ? `<p class="caption">${caption}</p>` : ""}
          </div>
          <footer>
            <p>${ctaLabel}</p>
          </footer>
        </a>
      `;
    }
  }
}

customElements.define("twls-card-button", TwlsCardButton);

export default TwlsCardButton;
