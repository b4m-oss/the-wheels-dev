class TwlsRadioGroupItem extends HTMLElement {
  static get observedAttributes() {
    return ["label", "name", "checked"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', this.handleClick.bind(this));
  }

  attributeChangedCallback() {
    this.render();
  }

  handleClick() {
    const radioButtons = document.querySelectorAll(`input[name="${this.getAttribute('name')}"]`);
    radioButtons.forEach((radio) => {
      const inputElement = radio as HTMLInputElement;
      if (inputElement !== this.querySelector('input')) {
        inputElement.checked = false;
      }
    });
  }

  render() {
    const label = this.getAttribute("label") || "";
    const name = this.getAttribute("name") || "";
    const isChecked = this.hasAttribute("checked");

    this.innerHTML = `
      <label class="radio-group-item">
        <input type="radio" name="${name}" ${isChecked ? 'checked' : ''} />
        <span>${label}</span>
      </label>
    `;
  }
}

customElements.define("twls-radio-group-item", TwlsRadioGroupItem);

export default TwlsRadioGroupItem; 