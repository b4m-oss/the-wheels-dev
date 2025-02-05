class TwlsGlobalFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
        .global-footer {
          display: block;
          width: 100%;
          max-width: 118rem;
          margin: 0 auto;
          border-top: 1px solid var(--text-caption);
          padding-top: 2rem;
          padding-bottom: 2rem;
          margin-top: 7rem;
          *:not(a) {
            font-size: 1.3rem;
            width: 100%;
            margin-bottom: 0;
            color: var(--text-caption);
            text-align: center;
            max-width: none;
          }

          @media (480px <= width < 1200px) {
            border-top: 0;
            width: 100%;
            padding-left: 8.25%;
            padding-right: 8.25%;
            padding-top: 0;
            .inner {
              padding-top: 2rem;
              border-top: 1px solid var(--text-caption);
            }
          }

          @media (width < 480px) {
            width: 100%;

            max-width: none;
            padding-left: 6.25%;
            padding-right: 6.25%;
            padding-top: 1.3rem;
            padding-bottom: 1.3rem;
            * {
              font-size: 1.3rem;
              line-height: 1.9;
            }
          }
        }
        </style>
        <section class="global-footer">
          <div class="inner">
            <slot></slot>
          </div>
        </section>
      `;
    }
  }
}

customElements.define("twls-global-footer", TwlsGlobalFooter);

export default TwlsGlobalFooter; 