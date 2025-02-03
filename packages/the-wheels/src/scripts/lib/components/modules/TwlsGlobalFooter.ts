class TwlsGlobalFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <section id="global-footer">
          <div class="inner">
            <slot></slot>
          </div>
        </section>
      `;
    }
  }
}

customElements.define("twls-global-footer", TwlsGlobalFooter);

export default TwlsGlobalFooter; 