import { contestItemData } from "../components/contest/contestItem";
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
    this.innerHTML = `
      <div class="contest-page-container">
        <div class="primary-section">
          <contest-item contestItem="${data}"></contest-item>
          <services-section></services-section>
        </div>
        <div class="secondary-section"></div>
      </div>
    `;
  }
}

export default ContestPage;
