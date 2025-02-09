class TwlsPagination extends HTMLElement {
  // button: HTMLElement | null = null
  // content: HTMLElement | null = null
  constructor() {
    super();
  }

  render() {
    const oldestLink = this.getAttribute("oldestLink") || null;
    const latestLink = this.getAttribute("latestLink") || null;
    const prevLink = this.getAttribute("prevLink") || null;
    const nextLink = this.getAttribute("nextLink") || null;
    const prevLabel = this.getAttribute("prevLabel") || null;
    const nextLabel = this.getAttribute("nextLabel") || null;
    const currentPageNum = this.getAttribute("currentPageNum") || null;
    const totalPageNum = this.getAttribute("totalPageNum") || null;
    const currentPageItemCount = this.getAttribute("currentPageItemCount") || null;
    const totalItemCount = this.getAttribute("totalItemCount") || null;
    const content = this.innerHTML;
    this.innerHTML = `
      <nav class="pagination">
        <div class="pager-container">
          ${oldestLink ? `
            <a href="${oldestLink}" class="pager-button-oldest">
              <twls-icon-chevron-end width="12" height="12" rotate="180"></twls-icon-chevron-end>
            </a>
          ` : ""}
          ${prevLink ? `
            <button type="button" class="pager-button-prev">
              <a href="${prevLink}">
                <twls-icon-chevron width="12" height="12" rotate="180"></twls-icon-chevron>
                ${prevLabel ? `<span class="label-next">${prevLabel}</span>` : ''}
              </a>
            </button>
            `:`
            <button type="button" class="pager-button-prev" disabled>
              <twls-icon-chevron width="12" height="12" rotate="180"></twls-icon-chevron>
            </button>
          ` }
          <twls-dropdown>
            <button class="pager-counter trigger">
            ${currentPageNum ? `
              <span class="pager-count-current">${currentPageNum}<span class="label-counter">ページ目</span></span>
            ` : ``}              
              <span class="pager-count-divider">/</span>
            ${totalPageNum ? `
              <span class="pager-count-total"><span class="label-counter">全</span>${totalPageNum}<span class="label-counter">ページ</span></span>
              ` : ``}
            </button>
            <div class="content">
              ${content}
            </div>
          </twls-dropdown>
          ${nextLink ? `
          <button type="button" class="pager-button-next">
            <a href="${nextLink}">
              ${nextLabel ? `<span class="label-next">${nextLabel}</span>` : ''}
              <twls-icon-chevron width="12" height="12" rotate="0"></twls-icon-chevron>
            </a>
          </button>
            `:`
            <button type="button" class="pager-button-next" disabled>
              <twls-icon-chevron width="12" height="12" rotate="0"></twls-icon-chevron>
            </button>
          ` }
          ${latestLink ? `
            <a href="${latestLink}" class="pager-button-latestest">
              <twls-icon-chevron-end width="12" height="12" rotate="0"></twls-icon-chevron-end>
            </a>
          ` : ""}
        </div>
        <div class="pager-item-counter">
          ${currentPageItemCount ? `
            <span class="pager-item-count-current">31~40件</span>
          ` : ``}
          <span class="pager-item-count-divider">/</span>
          ${totalItemCount ? `
            <span class="pager-item-count-total">${totalItemCount}件</span>
          ` : ``}
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