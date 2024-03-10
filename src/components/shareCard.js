import { getFileURL } from "../helpers/utils";

const linkedIn = getFileURL("/share-card/linkedin.png");
const facebook = getFileURL("/share-card/facebook.png");
const whatsapp = getFileURL("/share-card/whatsapp.png");
const twitter = getFileURL("/share-card/twitter.png");
const other = getFileURL("/share-card/copy.png");

const shareIcons = [linkedIn, facebook, whatsapp, twitter, other];

class ShareCard extends HTMLElement {
  constructor() {
    super();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  renderShareIcons() {
    let shareElements = "";
    shareIcons.forEach((icon) => {
      const shareEl = `<img src="${icon}" alt="share" />`;
      shareElements = shareElements + shareEl;
    });
    return shareElements;
  }

  render() {
    this.innerHTML = `
      <div class="card-container">
        <strong>Share & Earn</strong>
        <div class="flex" style="column-gap: 10px; margin-top: 20px">${this.renderShareIcons()}</div>
      </div>
    `;
  }
}

export default ShareCard;
