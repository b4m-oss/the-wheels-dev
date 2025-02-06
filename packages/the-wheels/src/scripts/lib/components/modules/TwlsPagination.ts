class TwlsPagination extends HTMLElement {
  // button: HTMLElement | null = null
  // content: HTMLElement | null = null
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
      <nav class="pagination">
        <div class="pager-bubble"></div>
        <div class="pager-container">
          <button type="button" class="pager-button-oldest">oldest</button>
          <button type="button" class="pager-button-prev">prev</button>
          <div class="pager-counter">
            <span class="pager-count-current">1</span>
            <span class="pager-count-divider">/</span>
            <span class="pager-count-total">48</span>
          </div>
          <button type="button" class="pager-button-next">>next</button>
          <button type="button" class="pager-button-latest">latest</button>
        </div>
        <div class="pager-item-counter>
          <span class="pager-item-count-current">1~10</span>
          <span class="pager-item-count-divider">/</span>
          <span class="pager-item-count-total">476</span>
        </div>
      </nav>
    `
  }

  connectedCallback() {

    this.render()
  }

  // toggleMenu() {
  //     if (this.content?.classList.contains('open')) {
  //         this.closeMenu();
  //     } else {
  //         this.openMenu();
  //     }
  // }

  // openMenu() {
  //     this.content?.classList.add('open');
  //     this.adjustPosition();
  // }

  // closeMenu() {
  //     this.content?.classList.remove('open');
  // }

  // adjustPosition() {
  //     if (!this.content?.classList.contains('open')) return;

  //     const rect = this.content?.getBoundingClientRect();
  //     const viewportWidth = window.innerWidth;
  //     const viewportHeight = window.innerHeight;

  //     if (rect.right > viewportWidth) {
  //         this.content.style.left = `-${rect.right - viewportWidth}px`;
  //     } else {
  //         this.content.style.left = '0';
  //     }

  //     if (rect.bottom > viewportHeight) {
  //         this.content.style.top = `-${rect.height}px`;
  //     } else {
  //         this.content.style.top = '100%';
  //     }
  // }
}

customElements.define("twls-pagination", TwlsPagination);

export default TwlsPagination; 