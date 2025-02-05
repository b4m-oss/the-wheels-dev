class TwlsIconSun extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    const width = this.getAttribute("width") || "16";
    const height = this.getAttribute("height") || "16";
    const fill = this.getAttribute("fill") || "currentColor";
    const rotate = this.getAttribute("rotate") || "0";

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <svg width="${width}" height="${height}" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(${rotate}deg); aspect-ratio: 104 / 104;">
          <path d="M52 77.6C66.1385 77.6 77.6 66.1385 77.6 52C77.6 37.8615 66.1385 26.4 52 26.4C37.8615 26.4 26.4 37.8615 26.4 52C26.4 66.1385 37.8615 77.6 52 77.6Z" fill="#231F20"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 52C20 48.4624 17.1378 45.6 13.6005 45.6H7.19947C3.66216 45.6 0.800003 48.4624 0.800003 52C0.800003 55.5376 3.66216 58.4 7.19947 58.4H13.5989C17.1378 58.4 20 55.5376 20 52Z" fill="${fill}" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.908 75.1802L15.4467 79.6435C12.9844 82.1044 12.9844 86.0935 15.4467 88.5544C17.9073 91.0152 21.8961 91.0152 24.3583 88.5544L28.8212 84.0926C31.2818 81.6317 31.2818 77.6411 28.8212 75.1802C26.3574 72.7177 22.3702 72.7177 19.908 75.1802Z" fill="${fill}" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M52 84C48.4624 84 45.6 86.8622 45.6 90.3995V96.8005C45.6 100.338 48.4624 103.2 52 103.2C55.5376 103.2 58.4 100.338 58.4 96.8005L58.3936 90.3995C58.4 86.8622 55.5312 84 52 84Z" fill="${fill}" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M84.0884 75.1849C81.6315 72.7172 77.6412 72.7172 75.1796 75.1786C72.7179 77.64 72.7179 81.6315 75.1796 84.0929L79.6379 88.5492C82.0995 91.0232 86.0898 91.0106 88.5514 88.5492C91.013 86.0878 91.0193 82.1042 88.5514 79.6365L84.0884 75.1849Z" fill="${fill}" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M96.8091 45.6L90.391 45.6128C86.8641 45.6 84 48.4624 84 52C83.9872 55.5376 86.8641 58.4 90.391 58.4H96.7963C100.349 58.4128 103.2 55.5376 103.2 52C103.206 48.4688 100.349 45.6 96.8091 45.6Z" fill="${fill}" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M84.0893 28.8209L88.5465 24.3642C91.0273 21.8971 91.0084 17.9146 88.5465 15.4523C86.0894 12.9837 82.1003 12.9837 79.6385 15.446L75.1797 19.9137C72.7179 22.3635 72.7179 26.3507 75.1797 28.8131C77.629 31.2896 81.6322 31.277 84.0893 28.8209Z" fill="${fill}" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M52 19.9998C55.5312 20.0255 58.4 17.1356 58.4 13.6085V7.20426C58.4 3.65153 55.5376 0.800061 52 0.800061C48.4624 0.787253 45.6 3.65153 45.6 7.19305L45.6128 13.6101C45.6 17.1356 48.4624 19.9998 52 19.9998Z" fill="${fill}" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9213 28.8206C22.3697 31.2831 26.3438 31.2831 28.8111 28.8143C31.2894 26.3692 31.2768 22.3665 28.8237 19.9087L24.3694 15.4504C21.8974 12.9738 17.9233 12.9927 15.4623 15.4504C12.9824 17.9082 12.9824 21.8983 15.4434 24.3623L19.9213 28.8206Z" fill="${fill}" />
        </svg>
      `;
    }
  }
}

customElements.define("twls-icon-sun", TwlsIconSun);

export default TwlsIconSun;