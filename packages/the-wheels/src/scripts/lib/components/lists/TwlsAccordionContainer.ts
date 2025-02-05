class TwlsAccordionContainer extends HTMLElement {
  private static readonly EVENTS = {
    CHILD_ADDED: 'twls-accordion-container-child-added',
    CHILD_REMOVED: 'twls-accordion-container-child-removed'
  };

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  private render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <div class="twls-accordion">
          <slot></slot>
        </div>
      `;
    }
  }

  private setupEventListeners() {
    // スロットの変更を監視
    const slot = this.shadowRoot?.querySelector('slot');
    slot?.addEventListener('slotchange', (e) => {
      const elements = (e.target as HTMLSlotElement).assignedElements();
      
      // 子要素の追加を通知
      elements.forEach(element => {
        this.dispatchEvent(new CustomEvent(TwlsAccordionContainer.EVENTS.CHILD_ADDED, {
          detail: { element }
        }));
      });
    });
  }
}

customElements.define("twls-accordion-container", TwlsAccordionContainer);

export default TwlsAccordionContainer; 