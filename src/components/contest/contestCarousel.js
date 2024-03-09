import { decodePropsObj, getFileURL } from "../../helpers/utils";

class ContestCarousel extends HTMLElement {
  constructor() {
    super();
  }

  get items() {
    return decodePropsObj(this.getAttribute("items"));
  }

  get activeIndex() {
    return this.getAttribute("activeIndex");
  }

  set activeIndex(val) {
    this.setAttribute("activeIndex", val);
  }

  static get observedAttributes() {
    return ["items", "activeIndex"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  getActiveImage() {
    return this.items[this.activeIndex];
  }

  getBullets() {
    let bullets = "";
    this.items.forEach((item, i) => {
      const bullet = `<div class="bullet" active="${
        i === +this.activeIndex
      }"></div>`;
      bullets = bullets + bullet;
    });
    return bullets;
  }

  handleNavigation(index) {
    const isValidNavigation = index >= 0 && index < this.items.length;
    if (isValidNavigation) {
      this.activeIndex = index;
      this.render();
    }
  }

  arrowLeft = getFileURL("/contest/left-arrow.png");
  arrowRight = getFileURL("/contest/right-arrow.png");

  render() {
    this.innerHTML = `
      <div class="carousel-container">
        <img src="${this.getActiveImage()}" alt="contest image" />

        <div id="carousel-left-arrow" class="nav-arrow nav-arrow-left" disabled="${
          +this.activeIndex === 0
        }">
          <div class="nav-circle">
            <img src="${this.arrowLeft}" alt="previous slide" />
          </div>
        </div>

        <div id="carousel-right-arrow" class="nav-arrow nav-arrow-right" disabled="${
          +this.activeIndex === this.items.length - 1
        }">
          <div class="nav-circle">
            <img src="${this.arrowRight}" alt="next slide" />
          </div>
        </div>

        <div class="bullets-container">
          ${this.getBullets()}
        </div>
      </div>
    `;

    const leftArrowEl = document.getElementById("carousel-left-arrow");
    const rightArrowEl = document.getElementById("carousel-right-arrow");
    const bullets = document.querySelectorAll(".bullet");
    bullets.forEach((el, i) => {
      bullets[i].addEventListener("click", () => this.handleNavigation(i));
    });

    leftArrowEl.onclick = () => this.handleNavigation(+this.activeIndex - 1);
    rightArrowEl.onclick = () => this.handleNavigation(+this.activeIndex + 1);
  }
}

export default ContestCarousel;
