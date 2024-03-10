import { decodePropsObj, getFileURL } from "../helpers/utils";

const sellerOnlineImage = getFileURL("/seller-online.png");
const verifiedBadge = getFileURL("/public/verified.png");

export const sellerData = {
  image: sellerOnlineImage,
  name: "Jane Smith",
  city: "Cairo",
  country: "Egypt",
  rating: 4.1,
  numberOfRatings: 500,
  review:
    "Ad nisi nisi anim nostrud. Qui adipisicing consequat voluptate cupidatat ullamco. Velit proident minim nulla ullamco ea cupidatat cillum tempor sit ex.",
};

class SellerCard extends HTMLElement {
  constructor() {
    super();
  }

  get sellerData() {
    return decodePropsObj(this.getAttribute("sellerData"));
  }

  static get observedAttributes() {
    return ["sellerData"];
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
    const numOfFilledStars = Math.floor(+this.sellerData.rating);
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
      <div class="card-container seller-card-container">
        <strong>Seller</strong>

        <div class="seller-data-container">
          <img src="${this.sellerData.image}" alt="seller pic" />

          <div class="flex" style="column-gap: 6px;">
            <strong>${this.sellerData.name}</strong>
            <img src="${verifiedBadge}" alt="verified badge" />
          </div>

          <div class="flex" style="column-gap: 6px;">
            <div>${this.renderStars()}</div>
            <div>${this.sellerData.rating} (${
      this.sellerData.numberOfRatings
    })</div>
          </div>

          <p>${this.sellerData.review}</p>

          <button class="primary-btn" style="width: 100%;">Contact Me</button>
        </div>
      </div>
    `;
  }
}

export default SellerCard;
