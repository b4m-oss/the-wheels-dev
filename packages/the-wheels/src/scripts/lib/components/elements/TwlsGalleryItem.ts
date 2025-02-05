class TwlsGalleryItem extends HTMLElement {
  static get observedAttributes() {
    return ["title"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  // attributeChangedCallback() {
  //   this.render();
  // }

  render() {
    const title = this.getAttribute("title") || "";
    const content = this.innerHTML; // Light DOMのコンテンツを取得

    this.innerHTML = `
      <div class="gallery-item">
        <dt class="title">${title}</dt>
        <dd>
          ${content} <!-- Light DOMのコンテンツを挿入 -->
        </dd>
      </div>
    `;
  }
}

customElements.define("twls-gallery-item", TwlsGalleryItem);

export default TwlsGalleryItem; 