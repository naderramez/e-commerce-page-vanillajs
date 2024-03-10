import { contestItemData } from "../components/contest/contestItem";
import { info } from "../components/infoCard";
import { sellerData } from "../components/sellerCard";
import { encodePropsObj } from "../helpers/utils";

class ContestPage extends HTMLElement {
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // const data = encodeURIComponent(JSON.stringify(contestItemData));
    const data = encodePropsObj(contestItemData);
    const encodedSellerData = encodePropsObj(sellerData);
    const encodedInfoData = encodePropsObj(info);
    this.innerHTML = `
      <div class="contest-page-container">
        <div class="primary-and-secondary-container">
          <div class="primary-section">
            <contest-item contestItem="${data}"></contest-item>
            <services-section></services-section>
          </div>
          <div class="secondary-section">
            <seller-card sellerData="${encodedSellerData}"></seller-card>
            <info-card infoData="${encodedInfoData}"></info-card>
            <share-card></share-card>
          </div>
        </div>

        <div>
          <suggested-services-section></suggested-services-section>
        </div>
      </div>
    `;
  }
}

export default ContestPage;
