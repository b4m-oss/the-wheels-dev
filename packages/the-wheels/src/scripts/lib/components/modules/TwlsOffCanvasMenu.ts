class TwlsOffCanvasMenu extends HTMLElement {
  private isOpen = false;

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  private render() {
    this.innerHTML = `
      <div class="backdrop"></div>
      <div class="off-canvas">
        <button class="close-button">Close</button>
        <div class="menu-content">
          ${this.innerHTML} <!-- Light DOMの内容をそのまま挿入 -->
        </div>
      </div>
      <button class="toggle-button">Menu</button>
    `;
  }

  private setupEventListeners() {
    const toggleButton = this.querySelector('.toggle-button');
    const closeButton = this.querySelector('.close-button');
    const backdrop = this.querySelector('.backdrop');
    const offCanvas = this.querySelector('.off-canvas');

    toggleButton?.addEventListener('click', () => this.toggleMenu(offCanvas, backdrop));
    closeButton?.addEventListener('click', () => this.toggleMenu(offCanvas, backdrop));
    backdrop?.addEventListener('click', () => this.toggleMenu(offCanvas, backdrop));
  }

  private toggleMenu(offCanvas: Element | null, backdrop: Element | null) {
    if (offCanvas && backdrop) {
      this.isOpen = !this.isOpen;
      offCanvas.classList.toggle('open', this.isOpen);
      backdrop.classList.toggle('visible', this.isOpen);
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
    }
  }
}

customElements.define("twls-off-canvas-menu", TwlsOffCanvasMenu);

export default TwlsOffCanvasMenu;