class TwlsRadioGroup extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const children = Array.from(this.children);
    this.innerHTML = `
      <form class="radio-group">
      </form>
    `;
    const form = this.querySelector('form');
    children.forEach(child => form?.appendChild(child));
  }
}

customElements.define("twls-radio-group", TwlsRadioGroup);

export default TwlsRadioGroup; 