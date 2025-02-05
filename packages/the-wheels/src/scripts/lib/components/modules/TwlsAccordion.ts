class TwlsAccordion extends HTMLElement {
  private static readonly EVENTS = {
    TOGGLE: 'twls-accordion-toggle',
    OPENED: 'twls-accordion-opened',
    CLOSED: 'twls-accordion-closed'
  };

  static get observedAttributes() {
    return ["tab-label"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  private render() {
    const tabLabel = this.getAttribute("tab-label") || "";

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <details class="twls-accordion-item">
          <summary class="twls-accordion-tab">${tabLabel}</summary>
          <div class="twls-accordion-detail">
            <slot></slot>
          </div>
        </details>
      `;
    }
  }

  private setupEventListeners() {
    const details = this.shadowRoot?.querySelector('details');
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