import {
  decodePropsObj,
  encodePropsObj,
  getFileURL,
} from "../../helpers/utils";

const image1 = getFileURL("/contest/contest-img-1.png");
const image2 = getFileURL("/contest/contest-img-2.png");
const image3 = getFileURL("/contest/contest-img-3.png");

export const contestItemData = {
  category: "Design / Logo Design",
  title:
    "Cillum minim aliqua sit ullamco duis qui commodo mollit ex et aliqua minim labore. Esse dolor dolore ut enim officia veniam. Ipsum dolor ea proident sint est ad ad. Commodo sunt commodo enim nulla ex in duis. Amet consequat ea ullamco aliqua enim anim velit do incididunt et sit laborum sit aliqua. Consequat ipsum ut dolore cillum elit.",
  rating: 4.1,
  numberOfRatings: 500,
  isFavorite: false,
  items: [image1, image2, image3],
  activeIndex: 0,
};

class ContestItem extends HTMLElement {
  constructor() {
    super();
  }

  get contestItem() {
    // return this.getAttribute("contestItem");
    // return JSON.parse(decodeURIComponent(this.getAttribute("contestItem")));
    return decodePropsObj(this.getAttribute("contestItem"));
  }

  static get observedAttributes() {
    return ["contestItem"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const {
      category,
      title,
      rating,
      numberOfRatings,
      isFavorite,
      items,
      activeIndex,
    } = this.contestItem;
    console.log("items", items);
    const encodedItems = encodePropsObj(items);
    this.innerHTML = `
      <div class="carousel-item">
        <contest-header category="${category}" title="${title}" rating="${rating}" numberOfRatings="${numberOfRatings}" isFavorite="${isFavorite}"></contest-header>
        <contest-carousel items="${encodedItems}" activeIndex="${activeIndex}"></contest-carousel>
        <div class="description-container">
          <h3>Description</h3>
          <p>Dolor in nulla est in esse ipsum nulla anim magna ad laboris occaecat. Dolore amet excepteur id dolor eu ea magna tempor. Nostrud ut eu laborum laborum sit veniam eu quis sint ut esse elit. Consequat enim enim consectetur labore incididunt ut nisi voluptate. Qui ea Lorem ullamco occaecat fugiat dolor incididunt ipsum labore. Sunt qui veniam non laborum dolore consequat sunt pariatur. Sint aliqua pariatur mollit consectetur cupidatat incididunt ipsum mollit dolor dolor amet officia dolore.

Voluptate aliquip velit fugiat cupidatat reprehenderit cupidatat elit. Minim eu adipisicing commodo non consequat ea commodo excepteur reprehenderit cupidatat quis duis. Aliquip occaecat adipisicing deserunt ea sit.

Deserunt dolore Lorem incididunt excepteur est velit culpa fugiat duis occaecat cupidatat ad do. Id fugiat pariatur non tempor mollit tempor aliqua ut nulla labore. Lorem et aute aliquip minim cupidatat eiusmod excepteur anim. Duis ipsum tempor occaecat irure dolor consectetur. Velit quis elit ea tempor. Aliqua occaecat et nostrud ullamco.</p>
        </div>
      </div>
    `;
  }
}

export default ContestItem;
