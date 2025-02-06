class TwlsMessagePanel extends HTMLElement {
  
  header: null | string = null
  content: null | string = null
  htmlClasses: string[] = []

  static get observedAttributes() {
    return ["html-class"];
  }

  constructor() {
    super();
    const header = this.querySelector('[slot="header"]') ? (this.querySelector('[slot="header"]') as HTMLElement).innerHTML : null
    const content = this.querySelector('[slot="content"]') ? (this.querySelector('[slot="content"]') as HTMLElement).innerHTML : null
    this.header = header
    this.content = content
    this.htmlClasses = [this.getAttribute("html-class") as string]
    console.log(this)
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  private render() {
    this.innerHTML = `
      <div class="message-panel ${this.htmlClasses.join(' ')}">
        ${this.header ? `<header class="message-panel-header">${this.header}</header>` : ''}
        <div class="message-panel-content">
          ${this.content}
        </div>
      </div>
    `;
  }
}

customElements.define("twls-message-panel", TwlsMessagePanel);

export default TwlsMessagePanel;