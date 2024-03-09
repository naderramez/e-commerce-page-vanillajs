import { getFileURL } from "../../helpers/utils";

const serviceItems = [
  {
    isSelected: true,
    description:
      "Eiusmod velit reprehenderit laboris tempor cillum. Laboris incididunt duis est duis tempor dolore ad excepteur eiusmod. Velit quis aute deserunt cillum velit occaecat aute est eu occaecat Lorem. Laboris est reprehenderit fugiat adipisicing irure. Enim commodo dolore voluptate sint est mollit nisi proident anim aute eiusmod. Nostrud consectetur consectetur labore consequat eu minim laboris do laborum elit. Dolor magna laborum sint aute id enim voluptate.",
    price: 100,
    days: 2,
  },
  {
    isSelected: false,
    description:
      "Eiusmod velit reprehenderit laboris tempor cillum. Laboris incididunt duis est duis tempor dolore ad excepteur eiusmod. Velit quis aute deserunt cillum velit occaecat aute est eu occaecat Lorem. Laboris est reprehenderit fugiat adipisicing irure. Enim commodo dolore voluptate sint est mollit nisi proident anim aute eiusmod. Nostrud consectetur consectetur labore consequat eu minim laboris do laborum elit. Dolor magna laborum sint aute id enim voluptate.",
    price: 100,
    days: 2,
  },
  {
    isSelected: false,
    description:
      "Eiusmod velit reprehenderit laboris tempor cillum. Laboris incididunt duis est duis tempor dolore ad excepteur eiusmod. Velit quis aute deserunt cillum velit occaecat aute est eu occaecat Lorem. Laboris est reprehenderit fugiat adipisicing irure. Enim commodo dolore voluptate sint est mollit nisi proident anim aute eiusmod. Nostrud consectetur consectetur labore consequat eu minim laboris do laborum elit. Dolor magna laborum sint aute id enim voluptate.",
    price: 100,
    days: 2,
  },
];

class ServiceAddons extends HTMLElement {
  constructor() {
    super();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  checkmarkIcon = getFileURL("/services/checkmark.png");

  getServiceItems() {
    let serviceItemsHTML = "";
    serviceItems.forEach((item) => {
      const { description, days, price, isSelected } = item;
      const itemHTML = `<service-addon-item description="${description}" days="${days}" price="${price}" isSelected="${isSelected}"></service-addon-item>`;
      serviceItemsHTML = serviceItemsHTML + itemHTML;
    });
    return serviceItemsHTML;
  }

  getIsAllSelectedVal() {
    const isAllSelected = serviceItems.every(
      (item) => item.isSelected === true
    );
    return isAllSelected;
  }

  handleServiceToggleSelection(idx) {
    serviceItems[idx].isSelected = !serviceItems[idx].isSelected;
    this.render();
  }

  toggleSelectAll = () => {
    const isAllSelected = this.getIsAllSelectedVal();
    serviceItems.forEach((item) => {
      item.isSelected = !isAllSelected;
    });
    this.render();
  };

  render() {
    this.innerHTML = `
      <div class="service-addons-container">
        <div class="flex justify-between">
          <h3>Service Add-Ons</h3>
          <div id="select-all-btn" class="select-all-container" isAllSelected="${this.getIsAllSelectedVal()}">
            <img src="${this.checkmarkIcon}" alt="checkmark" />
            <span>Select All</span>
          </div>
        </div>

        <div class="service-items-container">${this.getServiceItems()}</div>
      </div>
    `;

    const serviceItemsElements =
      document.querySelectorAll("service-addon-item");
    serviceItemsElements.forEach((el, i) => {
      el.addEventListener("toggle-service-selection", () =>
        this.handleServiceToggleSelection(i)
      );
    });

    const selectAllBtn = document.getElementById("select-all-btn");
    selectAllBtn.addEventListener("click", this.toggleSelectAll);
  }
}

export default ServiceAddons;
