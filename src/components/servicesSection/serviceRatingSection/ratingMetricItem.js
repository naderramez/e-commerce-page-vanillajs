import { getFileURL } from "../../../helpers/utils";

class RatingMetricItem extends HTMLElement {
  constructor() {
    super();
  }

  get title() {
    return this.getAttribute("title");
  }

  get averageRating() {
    return this.getAttribute("averageRating");
  }

  get currentRating() {
    return this.getAttribute("currentRating");
  }

  static get observedAttributes() {
    return ["title", "averageRating", "currentRating"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  filledStar = getFileURL("/filled-star.png");
  emptyStar = getFileURL("/empty-star.png");

  renderStars() {
    let stars = "";
    const numOfFilledStars = Math.floor(+this.currentRating);
    for (let i = 0; i < 5; i++) {
      const starNumber = i + 1;
      const starIconSrc =
        numOfFilledStars < starNumber ? this.emptyStar : this.filledStar;
      const starEl = `<img src="${starIconSrc}" alt="star" />`;
      stars = stars + starEl;
    }

    return stars;
  }

  render() {
    this.innerHTML = `
      <div class="metric-item-container">
        <div class="metric-title">
          <span>${this.title}</span>
          <img src="${this.filledStar}" alt="star" />
          <span>${this.averageRating}</span>
        </div>

        <div class="metric-star-rating">${this.renderStars()}</div>

        <div class="metric-bar-rating">
          <div class="metric-bar">
            <div class="metric-bar-filled" style="width: ${
              (+this.currentRating / 5) * 100
            }%"></div>
          </div>

          <span>${this.currentRating}</span>
        </div>
      </div>
    `;
  }
}

export default RatingMetricItem;
