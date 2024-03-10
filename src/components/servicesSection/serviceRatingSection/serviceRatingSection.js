import { getFileURL } from "../../../helpers/utils";

class ServiceRatingSection extends HTMLElement {
  constructor() {
    super();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  filledStar = getFileURL("/filled-star.png");
  emptyStar = getFileURL("/empty-star.png");

  render() {
    this.innerHTML = `
      <div class="service-rating-section">
        <div class="service-rating-section-title">
          <img src="${this.filledStar}" alt="star" />
          <span>4.6 Service Rating . 46 Ratings</span>
        </div>
        <rating-metrics></rating-metrics>
        <review-section></review-section>
      </div>
    `;
  }
}

export default ServiceRatingSection;
