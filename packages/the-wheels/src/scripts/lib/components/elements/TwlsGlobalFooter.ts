class TwlsGlobalFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const content = this.innerHTML
    this.innerHTML = `
      <section class="global-footer">
        ${content}
      </section>
    `;
  }
}

customElements.define("twls-global-footer", TwlsGlobalFooter);

export default TwlsGlobalFooter; 