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
    const currentPageItemCount = this.getAttribute("currentPageCount") || null;
    const totalItemCount = this.getAttribute("totalItemCount") || null;
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
                ${prevLabel ? prevLabel : ''}
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
              <span class="pager-count-current">${currentPageNum}ページ目</span>
            ` : ``}              
              <span class="pager-count-divider">/</span>
            ${totalPageNum ? `
              <span class="pager-count-total">全${totalPageNum}ページ</span>
              ` : ``}
            </button>
            <div class="content">
              <ul class="pager-all-list">
                <li class="pager-all-item"><a href="">1</a></li>
                <li class="pager-all-item"><a href="">2</a></li>
                <li class="pager-all-item"><a href="">3</a></li>
                <li class="pager-all-item"><a href="">4</a></li>
                <li class="pager-all-item"><a href="">5</a></li>
                <li class="pager-all-item"><a href="">6</a></li>
                <li class="pager-all-item"><a href="">7</a></li>
                <li class="pager-all-item"><a href="">8</a></li>
                <li class="pager-all-item"><a href="">9</a></li>
                <li class="pager-all-item"><a href="">10</a></li>
                <li class="pager-all-item"><a href="">11</a></li>
                <li class="pager-all-item"><a href="">12</a></li>
                <li class="pager-all-item"><a href="">13</a></li>
                <li class="pager-all-item"><a href="">14</a></li>
                <li class="pager-all-item"><a href="">15</a></li>
                <li class="pager-all-item"><a href="">16</a></li>
                <li class="pager-all-item"><a href="">17</a></li>
                <li class="pager-all-item"><a href="">18</a></li>
                <li class="pager-all-item"><a href="">19</a></li>
                <li class="pager-all-item"><a href="">20</a></li>
                <li class="pager-all-item"><a href="">21</a></li>
                <li class="pager-all-item"><a href="">22</a></li>
                <li class="pager-all-item"><a href="">23</a></li>
                <li class="pager-all-item"><a href="">24</a></li>
                <li class="pager-all-item"><a href="">25</a></li>
                <li class="pager-all-item"><a href="">26</a></li>
                <li class="pager-all-item"><a href="">27</a></li>
                <li class="pager-all-item"><a href="">28</a></li>
                <li class="pager-all-item"><a href="">29</a></li>
                <li class="pager-all-item"><a href="">30</a></li>
                <li class="pager-all-item"><a href="">31</a></li>
                <li class="pager-all-item"><a href="">32</a></li>
                <li class="pager-all-item"><a href="">33</a></li>
                <li class="pager-all-item"><a href="">34</a></li>
                <li class="pager-all-item"><a href="">35</a></li>
                <li class="pager-all-item"><a href="">36</a></li>
                <li class="pager-all-item"><a href="">37</a></li>
                <li class="pager-all-item"><a href="">38</a></li>
                <li class="pager-all-item"><a href="">39</a></li>
                <li class="pager-all-item"><a href="">40</a></li>
                <li class="pager-all-item"><a href="">41</a></li>
                <li class="pager-all-item"><a href="">42</a></li>
                <li class="pager-all-item"><a href="">43</a></li>
                <li class="pager-all-item"><a href="">44</a></li>
                <li class="pager-all-item"><a href="">45</a></li>
                <li class="pager-all-item"><a href="">46</a></li>
                <li class="pager-all-item"><a href="">47</a></li>
                <li class="pager-all-item"><a href="">48</a></li>
              </ul>
            </div>
          </twls-dropdown>
          ${nextLink ? `
          <button type="button" class="pager-button-next">
            <a href="${nextLink}">
              ${nextLabel ? nextLabel : ''}
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