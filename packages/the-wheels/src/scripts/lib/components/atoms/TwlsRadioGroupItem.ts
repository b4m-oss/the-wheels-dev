class TwlsRadioGroupItem extends HTMLElement {
  static get observedAttributes() {
    return ["label", "name", "checked"];
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
    const label = this.getAttribute("label") || "";
    const name = this.getAttribute("name") || "";
    const isChecked = this.hasAttribute("checked");

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <label class="twls-radio-group-item">
          <input type="radio" name="${name}" ${isChecked ? 'checked' : ''} />
          <span>${label}</span>
        </label>
      `;
    }
  }
}

customElements.define("twls-radio-group-item", TwlsRadioGroupItem);

export default TwlsRadioGroupItem; 