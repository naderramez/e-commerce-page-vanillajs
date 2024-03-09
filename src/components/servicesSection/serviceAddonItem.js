import { getFileURL } from "../../helpers/utils";

class ServiceAddonItem extends HTMLElement {
  constructor() {
    super();
  }

  get description() {
    return this.getAttribute("description");
  }

  get days() {
    return this.getAttribute("days");
  }

  get price() {
    return this.getAttribute("price");
  }

  get isSelected() {
    return this.getAttribute("isSelected");
  }

  static get observedAttributes() {
    return ["description", "days", "price", "isSelected"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  checkedIcon = getFileURL("/services/checked.png");
  unCheckedIcon = getFileURL("/services/not-checked.png");

  toggleServiceSelectionEvent = new CustomEvent("toggle-service-selection", {
    bubbles: true,
    cancelable: true,
  });

  fireToggleSelectionEvent() {
    let event = new CustomEvent("toggle-service-selection", {
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    const checkedOrUncheckedIcon =
      this.isSelected === "true" ? this.checkedIcon : this.unCheckedIcon;
    const daysLabel = +this.days > 1 ? "days" : "day";

    this.innerHTML = `
      <div class="service-addon-item-container">
        <div class="addon-main">
          <img src="${checkedOrUncheckedIcon}" alt="checker" />
          <p>${this.description}</p>
        </div>

        <div class="addon-meta">
          <span class="addon-meta-badge">$${this.price}</span>
          <span class="addon-meta-badge">${this.days} ${daysLabel}</span>
        </div>
      </div>
    `;

    const checker = this.querySelector("img");
    checker.addEventListener("click", this.fireToggleSelectionEvent);
  }
}

export default ServiceAddonItem;
