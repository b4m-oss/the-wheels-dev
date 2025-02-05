class TwlsCardButton extends HTMLElement {
  static get observedAttributes() {
    return ["href", "title", "caption", "cta-label"];
  }

  constructor() {
    super();
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

    this.innerHTML = `
      <a class="card-button" href="${href}">
        <div class="label">
          <p><b>${title}</b></p>
          <p class="caption">${caption}</p>
        </div>
        <footer>
          <p>${ctaLabel}</p>
        </footer>
      </a>
    `;
  }

  updateStyles(newStyles: string) {
    const styleSheet = this.querySelector('style');
    if (styleSheet) {
      styleSheet.textContent = newStyles;
    }
  }
}

customElements.define("twls-card-button", TwlsCardButton);

export default TwlsCardButton;