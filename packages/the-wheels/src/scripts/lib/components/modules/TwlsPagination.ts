class TwlsPagination extends HTMLElement {
  // button: HTMLElement | null = null
  // content: HTMLElement | null = null
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
      <nav class="pagination">
        <div class="pager-container">
          <button type="button" class="pager-button-oldest">
            <twls-icon-chevron-end width="12" height="12" rotate="180"></twls-icon-chevron-end>
          </button>
          <button type="button" class="pager-button-prev">
            <twls-icon-chevron width="12" height="12" rotate="180"></twls-icon-chevron>
          </button>
          <twls-dropdown>
            <button class="pager-counter trigger">
              <span class="pager-count-current">3ページ目</span>
              <span class="pager-count-divider">/</span>
              <span class="pager-count-total">全48ページ</span>
            </button>
            <div class="content">
              <ul>
                <li><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
                <li><a href="">5</a></li>
                <li><a href="">6</a></li>
                <li><a href="">7</a></li>
                <li><a href="">8</a></li>
                <li><a href="">9</a></li>
                <li><a href="">10</a></li>
                <li><a href="">11</a></li>
                <li><a href="">12</a></li>
                <li><a href="">13</a></li>
                <li><a href="">14</a></li>
                <li><a href="">15</a></li>
                <li><a href="">16</a></li>
                <li><a href="">17</a></li>
                <li><a href="">18</a></li>
                <li><a href="">19</a></li>
                <li><a href="">20</a></li>
                <li><a href="">21</a></li>
                <li><a href="">22</a></li>
                <li><a href="">23</a></li>
                <li><a href="">24</a></li>
                <li><a href="">25</a></li>
                <li><a href="">26</a></li>
                <li><a href="">27</a></li>
                <li><a href="">28</a></li>
                <li><a href="">29</a></li>
                <li><a href="">30</a></li>
                <li><a href="">31</a></li>
                <li><a href="">32</a></li>
                <li><a href="">33</a></li>
                <li><a href="">34</a></li>
                <li><a href="">35</a></li>
                <li><a href="">36</a></li>
                <li><a href="">37</a></li>
                <li><a href="">38</a></li>
                <li><a href="">39</a></li>
                <li><a href="">40</a></li>
                <li><a href="">41</a></li>
                <li><a href="">42</a></li>
                <li><a href="">43</a></li>
              </ul>
            </div>
          </twls-dropdown>
          
          <button type="button" class="pager-button-next">
              <twls-icon-chevron width="12" height="12" rotate="0"></twls-icon-chevron>
          </button>
          <button type="button" class="pager-button-latest">
            <twls-icon-chevron-end width="12" height="12" rotate="0"></twls-icon-chevron-end>
          </button>
        </div>
        <div class="pager-item-counter">
          <span class="pager-item-count-current">31~40件</span>
          <span class="pager-item-count-divider">/</span>
          <span class="pager-item-count-total">全476件</span>
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