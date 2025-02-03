class TwlsRadioGroup extends HTMLElement {
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
        <form class="twls-radio-group">
          <slot></slot>
        </form>
      `;
    }
  }
}

customElements.define("twls-radio-group", TwlsRadioGroup);

export default TwlsRadioGroup; 