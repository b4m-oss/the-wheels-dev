class TwlsDropdown extends HTMLElement {
  button: HTMLElement | null = null
  content: HTMLElement | null = null
  constructor() {
    super();
    this.button = null;
    this.content = null;
  }

  connectedCallback() {
    const button = this.querySelector('.trigger') as HTMLElement
    this.button = button ? button : null;
    const content = this.querySelector('.content') as HTMLElement

    this.content = content ? content : null;

    if(!this.button) console.warn('[The Wheels: warning] Dropdown trigger is not found.')
    if(!this.content) console.warn('[The Wheels: warning] Dropdown content is not found.')

    this.content?.classList.add('menu');
    this.button?.addEventListener('click', (event) => {
        event.stopPropagation();
        this.toggleMenu();
    });

    document.addEventListener('click', (event) => {
        if (!this.contains(<Node>event.target)) {
            this.closeMenu();
        }
    });

    window.addEventListener('resize', () => this.adjustPosition());
  }

  toggleMenu() {
      if (this.content?.classList.contains('open')) {
          this.closeMenu();
      } else {
          this.openMenu();
      }
  }

  openMenu() {
      this.content?.classList.add('open');
      this.adjustPosition();
  }

  closeMenu() {
      this.content?.classList.remove('open');
  }

  adjustPosition() {
      if (!this.content?.classList.contains('open')) return;

      const rect = this.content?.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (rect.right > viewportWidth) {
          this.content.style.left = `-${rect.right - viewportWidth}px`;
      } else {
          this.content.style.left = '0';
      }

      if (rect.bottom > viewportHeight) {
          this.content.style.top = `-${rect.height}px`;
      } else {
          this.content.style.top = '100%';
      }
  }
}

customElements.define("twls-dropdown", TwlsDropdown);

export default TwlsDropdown; 