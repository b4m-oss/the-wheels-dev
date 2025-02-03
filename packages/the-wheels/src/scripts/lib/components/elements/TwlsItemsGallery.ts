class TwlsItemsGallery extends HTMLElement {
  static get observedAttributes() {
    return ["title"];
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

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <div class="twls-items-gallery">
          <dt class="title">${title}</dt>
          <dd>
            <slot></slot>
          </dd>
        </div>
      `;
    }
  }
}

customElements.define("twls-items-gallery", TwlsItemsGallery);

export default TwlsItemsGallery; 