const template = document.createElement('template');
template.innerHTML = `
  <style>
    .twls-card-button {
      display: block;
      text-decoration: none;
      --bw-normal: 1;
      // width: 100%;
      max-width: 640px;
      padding: 0;
      padding-block: 0;
      border: calc(var(--bw-normal) * 1px) solid var(--text-caption);
      border-radius: 0.9rem;
      background: transparent;

      &:hover {
        --bw-hover: 4;
        text-decoration: none;
        border: calc(var(--bw-hover) * 1px) solid var(--text-main);

        .label {
          padding-top: calc(
            2.3rem - calc((var(--bw-hover) - var(--bw-normal)) * 1px)
          );
          padding-left: calc(
            2.7rem - calc((var(--bw-hover) - var(--bw-normal)) * 1px)
          );
          padding-right: calc(
            2.7rem - calc((var(--bw-hover) - var(--bw-normal)) * 1px)
          );

          p b {
            color: var(--text-hightlight) !important;
          }
        }

        footer {
          padding-right: calc(
            2rem - calc((var(--bw-hover) - var(--bw-normal)) * 1px)
          );
          padding-bottom: calc(
            1.2rem - calc((var(--bw-hover) - var(--bw-normal)) * 1px)
          );
        }

        .nav-icon {
          position: relative;
          right: -0.2em;
          transition: all 2s ease;
        }
      }

      .label {
        padding-left: 2.7rem;
        padding-right: 2.7rem;
        padding-top: 2.3rem;
        padding-bottom: 1.2rem;

        *:first-child {
          margin-bottom: 1.25rem;
        }

        p b {
          font-size: 2.7rem;
          line-height: var(--heading-lh);
          font-weight: 600;
          color: var(--text-main);
        }
        .caption {
          font-size: 1.4rem;
          color: var(--text-caption);
        }
        @media (width < 480px) {
          padding-left: 1.8rem;
          padding-right: 1.8rem;
          p b {
            letter-spacing: -.05em;
          }
        }
      }
      footer {
        display: flex;
        flex-flow: row;
        justify-content: end;
        align-items: center;
        gap: 1rem;
        padding-top: 1.2rem;
        padding-right: 2rem;
        padding-bottom: 1.2rem;
        position: relative;
        p {
          line-height: 1;
          max-width: none;
          width: 100%;
          margin-top: 0;
          margin-bottom: 0;
          text-align: right;
        }
      }
    }
  </style>
  <a class="twls-card-button" href="#">
    <div class="label">
      <p><b></b></p>
      <p class="caption"></p>
    </div>
    <footer>
      <p></p>
    </footer>
  </a>
`;

class TwlsCardButton extends HTMLElement {
  static get observedAttributes() {
    return ["href", "title", "caption", "cta-label"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const href = this.getAttribute("href") || "#";
    const title = this.getAttribute("title") || "";
    const caption = this.getAttribute("caption") || "";
    const ctaLabel = this.getAttribute("cta-label") || "詳細へ";

    const link = this.shadowRoot?.querySelector('a');
    link?.setAttribute('href', href);
    const titleElement = this.shadowRoot?.querySelector('.label p b');
    if (titleElement) {
      titleElement.textContent = title;
    }

    const captionElement = this.shadowRoot?.querySelector('.caption');
    if (captionElement) {
      captionElement.textContent = caption;
    }

    const ctaElement = this.shadowRoot?.querySelector('footer p');
    if (ctaElement) {
      ctaElement.textContent = ctaLabel;
    }
  }

  updateStyles(newStyles: string) {
    const styleSheet = this.shadowRoot?.querySelector('style');
    if (styleSheet) {
      styleSheet.textContent = newStyles;
    }
  }
}

customElements.define("twls-card-button", TwlsCardButton);

export default TwlsCardButton;