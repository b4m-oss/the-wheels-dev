class TwlsAccordion extends HTMLElement {
  private static readonly EVENTS = {
    TOGGLE: 'twls-accordion-toggle',
    OPENED: 'twls-accordion-opened',
    CLOSED: 'twls-accordion-closed'
  };

  static get observedAttributes() {
    return ["tab-label"];
  }

  tabLabel: string | null = null;
  content: string | null = null;

  constructor() {
    super();
    this.tabLabel = this.getAttribute("tab-label") || "";

    if (!this.tabLabel) {
      console.warn("Accordion label is not found.");
    }
  }

  connectedCallback() {
    requestAnimationFrame(() => {
      const contentElement = this.querySelector(".content");
      this.content = contentElement ? contentElement.innerHTML : null;
  
      if (!this.content) {
        console.warn("Accordion content is not found.");
      }
  
      console.log(this.content);
  
      this.render();
      this.setupEventListeners();
    });
  }

  private render() {
    this.innerHTML = `
      <details class="accordion-item">
        <summary class="accordion-tab">${this.tabLabel || ""}</summary>
        <div class="accordion-detail">
          ${this.content || ""}
        </div>
      </details>
    `;
  }

  private setupEventListeners() {
    const details = this.querySelector('details');
    if (details) {
      details.addEventListener('toggle', (e) => {
        const isOpen = (e.target as HTMLDetailsElement).open;

        // toggle前のイベント発火（キャンセル可能）
        const canToggle = this.dispatchEvent(new CustomEvent(TwlsAccordion.EVENTS.TOGGLE, {
          cancelable: true,
          detail: { isOpen }
        }));

        if (!canToggle) {
          // キャンセルされた場合は状態を元に戻す
          e.preventDefault();
          return;
        }

        // toggle後のイベント発火
        this.dispatchEvent(new CustomEvent(
          isOpen ? TwlsAccordion.EVENTS.OPENED : TwlsAccordion.EVENTS.CLOSED,
          { detail: { isOpen } }
        ));
      });
    }
  }
}

customElements.define("twls-accordion", TwlsAccordion);

export default TwlsAccordion;