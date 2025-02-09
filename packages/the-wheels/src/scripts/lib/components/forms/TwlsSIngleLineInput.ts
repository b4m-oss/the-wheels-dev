class TwlsSingleLineInput extends HTMLElement {
  labelText = "";
  type = "";
  name = "";
  initialValue = "";
  placeholder = "";
  minlength = "";
  maxlength = "";
  //   min = "";
  //   max = "";
  isRequired = false;
  assistMessages: HTMLElement | null = null;
  inputElement: HTMLInputElement | null = null;
  textCounter: HTMLElement | null = null;

  static get observedAttributes() {
    return [
      "labelText",
      "name",
      "type",
      "initialValue",
      "placeholder",
      "minlength",
      "maxlength",
      //   "min",
      //   "max",
      "isRequired",
    ];
  }

  constructor() {
    super();

    this.labelText = this.getAttribute("labelText") || "";
    this.type = this.getAttribute("type") || "text";
    this.name = this.getAttribute("name") || "";
    this.initialValue = this.getAttribute("initialValue") || "";
    this.placeholder = this.getAttribute("placeholder") || "";
    this.minlength = this.getAttribute("minlength") || "";
    this.maxlength = this.getAttribute("maxlength") || "";
    // this.min = this.getAttribute("min") || "";
    // this.max = this.getAttribute("max") || "";
    this.isRequired = this.hasAttribute("isRequired");

    this.assistMessages = this.querySelector(
      ".assist-messages"
    ) as HTMLElement | null;

    this.render();
  }

  connectedCallback() {
    this.inputElement = this.querySelector(
      ".input-field"
    ) as HTMLInputElement | null;
    this.textCounter = this.querySelector(
      ".text-counter .current-count"
    ) as HTMLElement | null;

    if (this.inputElement) {
      this.inputElement.addEventListener("input", this.handleInput.bind(this));
    }
  }

  render() {
    this.innerHTML = `
          <label>
            <span class="label-text">${this.labelText}</span>
            <input
              type="${this.type}"
              name="${this.name}"
              minlength="${this.minlength}"
              maxlength="${this.maxlength}"
              ${this.isRequired ? "required" : ""}
              placeholder="${this.placeholder}"
              class="input-field"
              value="${this.initialValue}"
            />
            <span class="text-counter"><span class="current-count">${this.countText()}</span><span class="divider">/</span><span class="max-count">${
      this.maxlength
    }</span></span>
            <div class="assist-messages">
              ${this.assistMessages?.innerHTML || ""}
            </div>
          </label>
        `;
  }

  handleInput(event: Event) {
    if (!this.textCounter) return;
    const inputEvent = event as InputEvent;
    const value = (inputEvent.target as HTMLInputElement).value;
    this.textCounter.textContent = String(value.length);

    this.dispatchEvent(
      new CustomEvent("input-change", {
        detail: { value },
        bubbles: true,
        composed: true,
      })
    );
  }

  countText() {
    return this.initialValue.length;
  }
}

customElements.define("twls-single-line-input", TwlsSingleLineInput);
export default TwlsSingleLineInput;
