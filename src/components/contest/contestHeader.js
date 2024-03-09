import { getFileURL } from "../../helpers/utils";

class ContestHeader extends HTMLElement {
  constructor() {
    super();
  }

  get category() {
    return this.getAttribute("category");
  }

  get title() {
    return this.getAttribute("title");
  }

  get rating() {
    return this.getAttribute("rating");
  }

  get numberOfRatings() {
    return this.getAttribute("numberOfRatings");
  }

  get isFavorite() {
    return this.getAttribute("isFavorite");
  }

  static get observedAttributes() {
    return ["category", "title", "rating", "numberOfRatings", "isFavorite"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  emptyStar = getFileURL("/contest/empty-star.png");
  filledStar = getFileURL("/contest/filled-star.png");
  shareIcon = getFileURL("/contest/share.png");
  heartEmpty = getFileURL("/contest/heart-empty.png");
  heartFilled = getFileURL("/contest/heart-filled.png");

  getStars(ratingVal) {
    const numberOfFilledStars = Math.floor(ratingVal);
    let stars = "";
    for (let i = 0; i < 5; i++) {
      const starNum = i + 1;
      const starImgSrc =
        numberOfFilledStars >= starNum ? this.filledStar : this.emptyStar;
      const star = `
        <img src="${starImgSrc}" alt="star" />
      `;
      stars = stars + star;
    }
    return stars;
  }

  render() {
    const stars = this.getStars(this.rating);
    const heartIcon =
      this.isFavorite === "true" ? this.heartFilled : this.heartEmpty;
    this.innerHTML = `
      <div class="contest-header-container">
        <h3>${this.category}</h3>
        <h1>${this.title}</h1>
        <div class="flex justify-between">
          <div>${stars} ${this.rating} (${this.numberOfRatings})</div>
          <div class="flex items-center">
            <img src="${this.shareIcon}" alt="share" />
            <img src="${heartIcon}" alt="favorite" />
          </div>
        </div>
      </div>
    `;
  }
}

export default ContestHeader;
