class TwlsModal extends HTMLElement {
  private modalDialog: HTMLDialogElement | null = null;

  // カスタムイベントの定義
  private static readonly EVENTS = {
    OPEN: 'twls-modal-open',
    CLOSE: 'twls-modal-close',
    OPENED: 'twls-modal-opened',
    CLOSED: 'twls-modal-closed'
  };

  static get observedAttributes() {
    return ["modal-id", "modal-title"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  attributeChangedCallback() {
    this.render();
  }

  private render() {
    const modalId = this.getAttribute("modal-id") || "";
    const modalTitle = this.getAttribute("modal-title") || "";

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <dialog 
          class="twls-modal" 
          id="${modalId}"
          title="${modalTitle}"
        >
          <header class="modal-header" id="${modalId}-title">
            ${modalTitle}
          </header>
          <section class="modal-content" id="${modalId}-content">
            <slot name="modal-content"></slot>
          </section>
          <footer class="modal-footer">
            <slot name="modal-footer"></slot>
          </footer>
        </dialog>
        <div class="modal-trigger-container">
          <slot name="modal-initiater"></slot>
        </div>
      `;

      this.modalDialog = this.shadowRoot.querySelector('dialog');
    }
  }

  private setupEventListeners() {
    // モーダルを開くトリガーの設定
    const triggerSlot = this.shadowRoot?.querySelector('slot[name="modal-initiater"]');
    triggerSlot?.addEventListener('slotchange', (e) => {
      const nodes = (e.target as HTMLSlotElement).assignedNodes();
      nodes.forEach(node => {
        if (node instanceof HTMLElement) {
          const openers = node.querySelectorAll('.twls-modal-opener');
          openers.forEach(opener => {
            if (opener instanceof HTMLElement) {
              opener.addEventListener('click', () => this.openModal());
            }
          });
        }
      });
    });

    // モーダルを閉じるトリガーの設定
    const footerSlot = this.shadowRoot?.querySelector('slot[name="modal-footer"]');
    footerSlot?.addEventListener('slotchange', (e) => {
      const nodes = (e.target as HTMLSlotElement).assignedNodes();
      nodes.forEach(node => {
        if (node instanceof HTMLElement) {
          const closers = node.querySelectorAll('.twls-modal-closer');
          closers.forEach(closer => {
            if (closer instanceof HTMLElement) {
              closer.addEventListener('click', () => this.closeModal());
            }
          });
        }
      });
    });
  }

  private removeEventListeners() {
    // 必要に応じてイベントリスナーのクリーンアップを実装
  }

  private openModal() {
    if (this.modalDialog) {
      // オープン前のイベント発火
      const canOpen = this.dispatchEvent(new CustomEvent(TwlsModal.EVENTS.OPEN, {
        cancelable: true
      }));

      if (canOpen) {
        this.modalDialog.showModal();
        // オープン後のイベント発火
        this.dispatchEvent(new CustomEvent(TwlsModal.EVENTS.OPENED));
      }
    }
  }

  private closeModal() {
    if (this.modalDialog) {
      // クローズ前のイベント発火
      const canClose = this.dispatchEvent(new CustomEvent(TwlsModal.EVENTS.CLOSE, {
        cancelable: true
      }));

      if (canClose) {
        this.modalDialog.close();
        // クローズ後のイベント発火
        this.dispatchEvent(new CustomEvent(TwlsModal.EVENTS.CLOSED));
      }
    }
  }
}

customElements.define("twls-modal", TwlsModal);

export default TwlsModal; 