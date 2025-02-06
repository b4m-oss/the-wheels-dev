class TwlsAccordionContainer extends HTMLElement {
  private static readonly EVENTS = {
    CHILD_ADDED: 'twls-accordion-container-child-added',
    CHILD_REMOVED: 'twls-accordion-container-child-removed'
  };

  content: string | null = null;

  constructor() {
    super();
    this.content = this.innerHTML;
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  private render() {
    this.innerHTML = `
      <div class="accordion">
        ${this.content}
      </div>
    `;
  }

  private setupEventListeners() {
    // 子要素の追加や削除を監視するためのMutationObserverを設定
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            this.dispatchEvent(new CustomEvent(TwlsAccordionContainer.EVENTS.CHILD_ADDED, {
              detail: { element: node }
            }));
          });
  
          mutation.removedNodes.forEach((node) => {
            this.dispatchEvent(new CustomEvent(TwlsAccordionContainer.EVENTS.CHILD_REMOVED, {
              detail: { element: node }
            }));
          });
        }
      });
    });
  
    observer.observe(this, { childList: true });
  }
}

customElements.define("twls-accordion-container", TwlsAccordionContainer);

export default TwlsAccordionContainer;