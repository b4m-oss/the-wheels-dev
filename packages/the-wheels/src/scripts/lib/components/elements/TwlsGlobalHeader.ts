class TwlsGlobalHeader extends HTMLElement {
  static get observedAttributes() {
    return ["title", "titleHref", "caption"];
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
    const title = this.getAttribute("title") || "";
    const titleHref = this.getAttribute("titleHref") || "/";
    const caption = this.getAttribute("caption");

    this.innerHTML = `
      <div class="global-header">
        <p class="title">
          <a href="${titleHref}">${title}</a>
        </p>
        ${caption ? `<p class="caption">${caption}</p>` : ""}
      </div>
    `;
  }
}

customElements.define("twls-global-header", TwlsGlobalHeader);

export default TwlsGlobalHeader; 