import { getFileURL } from "../../../helpers/utils";

class ReviewItem extends HTMLElement {
  constructor() {
    super();
  }

  get image() {
    return this.getAttribute("image");
  }

  get name() {
    return this.getAttribute("name");
  }

  get rating() {
    return this.getAttribute("rating");
  }

  get review() {
    return this.getAttribute("review");
  }

  static get observedAttributes() {
    return ["image", "name", "rating", "review"];
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
    const numOfFilledStars = Math.floor(+this.rating);
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
      <div class="review-item-container">
        <div>
          <img src="${this.image}" alt="profile image" />
        </div>

        <div class="review-item-data-container">
          <h3>${this.name}</h3>
          <div class="review-stars-container">${this.renderStars()}</div>
          <p>${this.review}</p>
        </div>
      </div>
    `;
  }
}

export default ReviewItem;
