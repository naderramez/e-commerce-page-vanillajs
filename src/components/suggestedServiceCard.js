import { decodePropsObj, getFileURL } from "../helpers/utils";

const filledStar = getFileURL("/filled-star.png");
const heartEmpty = getFileURL("/contest/heart-empty.png");
const heartFilled = getFileURL("/contest/heart-filled.png");
const shoppingCart = getFileURL("/shopping-cart.png");
const tag = getFileURL("/tag.png");

class SuggestedServiceCard extends HTMLElement {
  constructor() {
    super();
  }

  get serviceData() {
    return decodePropsObj(this.getAttribute("serviceData"));
  }

  static get observedAttributes() {
    return ["serviceData"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const heartImg =
      this.serviceData.isFavorite === true ? heartFilled : heartEmpty;
    this.innerHTML = `
      <div class="service-item-container">
        <div class="service-image-container">
          <img src="${this.serviceData.image}" alt="service image" height="254px" width="100%" />
          <div class="heart-circle-container">
            <div class="heart-circle">
              <img src="${heartImg}" alt="heart" />
            </div>
          </div>
        </div>

        <div class="service-item-data-container">
          <h3>${this.serviceData.title}</h3>

          <div class="flex" style="column-gap: 6px;">
            <div class="flex" style="column-gap: 6px;">
              <img src="${filledStar}" alt="star" />
              <span>${this.serviceData.rating}</span>
            </div>

            <div class="flex" style="column-gap: 6px;">
              <img src="${shoppingCart}" alt="shopping cart" />
              <span>${this.serviceData.numberOfRatings}</span>
            </div>
          </div>

          <div class="flex justify-between" style="margin-top: 10px;">
            <div class="flex items-center" style="column-gap: 6px;">
              <img src="${this.serviceData.sellerImage}" alt="${this.serviceData.sellerName} image" />
              <strong>${this.serviceData.sellerName}</strong>
            </div>

            <div class="flex items-center" style="column-gap: 6px;">
              <img src="${tag}" alt="tag" />
              <strong>$${this.serviceData.price}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default SuggestedServiceCard;
