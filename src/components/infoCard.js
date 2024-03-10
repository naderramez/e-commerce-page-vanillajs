import { decodePropsObj, getFileURL } from "../helpers/utils";

const dollar = getFileURL("/info-card/dollar.png");
const clock = getFileURL("/info-card/clock.png");
const basket = getFileURL("/info-card/basket.png");
const users = getFileURL("/info-card/users.png");
const percent = getFileURL("/info-card/percent.png");
const listDashes = getFileURL("/info-card/list-dashes.png");

export const info = [
  {
    icon: dollar,
    label: "Price",
    value: "$10",
  },
  {
    icon: clock,
    label: "Delivery Duration",
    value: "1 day",
  },
  {
    icon: basket,
    label: "In Progress Orders",
    value: "2",
  },
  {
    icon: users,
    label: "Customers",
    value: "2",
  },
  {
    icon: percent,
    label: "Sales",
    value: "$25",
  },
  {
    icon: listDashes,
    label: "Category",
    value: "Design",
  },
  {
    icon: listDashes,
    label: "Subcategory",
    value: "Logo Design",
  },
];

class InfoCard extends HTMLElement {
  constructor() {
    super();
  }

  get infoData() {
    return decodePropsObj(this.getAttribute("infoData"));
  }

  static get observedAttributes() {
    return ["infoData"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  renderInfoItems() {
    let infoElements = "";
    this.infoData.forEach((info) => {
      const infoEl = `
        <div class="flex justify-between">
          <div class="flex" style="column-gap: 8px">
            <img src="${info.icon}" alt="${info.label}" />
            <span>${info.label}</span>
          </div>

          <span>${info.value}</span>
        </div>
      `;
      infoElements = infoElements + infoEl;
    });
    return infoElements;
  }

  render() {
    this.innerHTML = `
      <div class="card-container">
        <strong>Info</strong>
        <div class="flex" style="flex-direction: column; row-gap: 10px; margin-top: 20px">${this.renderInfoItems()}</div>
      </div>
    `;
  }
}

export default InfoCard;
