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

    const modalContent = this.querySelector('[slot="modal-content"]')?.outerHTML || "";
    const modalFooter = this.querySelector('[slot="modal-footer"]')?.outerHTML || "";
    const modalInitiater = this.querySelector('[slot="modal-initiater"]')?.outerHTML || "";

    this.innerHTML = `
      <dialog 
        class="modal" 
        id="${modalId}"
        title="${modalTitle}"
      >
        <header class="modal-header" id="${modalId}-title">
          ${modalTitle}
        </header>
        <section class="modal-content" id="${modalId}-content">
          ${modalContent}
        </section>
        <footer class="modal-footer">
          ${modalFooter}
        </footer>
      </dialog>
      <div class="modal-trigger-container">
        ${modalInitiater}
      </div>
    `;

    this.modalDialog = this.querySelector('dialog');
  }

  private setupEventListeners() {
    // モーダルを開くトリガーの設定
    const openers = this.querySelectorAll('.twls-modal-opener');
    openers.forEach(opener => {
      if (opener instanceof HTMLElement) {
        opener.addEventListener('click', () => this.openModal());
      }
    });

    // モーダルを閉じるトリガーの設定
    const closers = this.querySelectorAll('.twls-modal-closer');
    closers.forEach(closer => {
      if (closer instanceof HTMLElement) {
        closer.addEventListener('click', () => this.closeModal());
      }
    });

    // バックドロップをクリックしてモーダルを閉じる設定
    if (this.modalDialog) {
      this.modalDialog.addEventListener('click', (event) => {
        if (event.target === this.modalDialog) {
          this.closeModal();
        }
      });
    }
  }

  private removeEventListeners() {
    // 必要に応じてイベントリスナーのクリーンアップを実装
    const openers = this.querySelectorAll('.twls-modal-opener');
    openers.forEach(opener => {
      if (opener instanceof HTMLElement) {
        opener.removeEventListener('click', () => this.openModal());
      }
    });

    const closers = this.querySelectorAll('.twls-modal-closer');
    closers.forEach(closer => {
      if (closer instanceof HTMLElement) {
        closer.removeEventListener('click', () => this.closeModal());
      }
    });

    if (this.modalDialog) {
      this.modalDialog.removeEventListener('click', (event) => {
        if (event.target === this.modalDialog) {
          this.closeModal();
        }
      });
    }
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