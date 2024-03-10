import { encodePropsObj, getFileURL } from "../helpers/utils";

const serviceImage = getFileURL("/service-img.png");
const sellerImage = getFileURL("/services/jane-smith.png");

const servicesItemsArr = [
  {
    image: serviceImage,
    isFavorite: false,
    title:
      "Adipisicing enim ut culpa proident fugiat fugiat qui pariatur do nisi magna. Mollit ea et occaecat dolore eu nulla ea aute deserunt. Dolor cupidatat do non do dolore ipsum nisi velit exercitation aute dolor quis.",
    rating: 4.9,
    numberOfRatings: 300,
    sellerImage,
    sellerName: "Jane Smith",
    price: 10,
  },
  {
    image: serviceImage,
    isFavorite: false,
    title:
      "Adipisicing enim ut culpa proident fugiat fugiat qui pariatur do nisi magna. Mollit ea et occaecat dolore eu nulla ea aute deserunt. Dolor cupidatat do non do dolore ipsum nisi velit exercitation aute dolor quis.",
    rating: 4.9,
    numberOfRatings: 300,
    sellerImage,
    sellerName: "Jane Smith",
    price: 10,
  },
  {
    image: serviceImage,
    isFavorite: false,
    title:
      "Adipisicing enim ut culpa proident fugiat fugiat qui pariatur do nisi magna. Mollit ea et occaecat dolore eu nulla ea aute deserunt. Dolor cupidatat do non do dolore ipsum nisi velit exercitation aute dolor quis.",
    rating: 4.9,
    numberOfRatings: 300,
    sellerImage,
    sellerName: "Jane Smith",
    price: 10,
  },
  {
    image: serviceImage,
    isFavorite: true,
    title:
      "Adipisicing enim ut culpa proident fugiat fugiat qui pariatur do nisi magna. Mollit ea et occaecat dolore eu nulla ea aute deserunt. Dolor cupidatat do non do dolore ipsum nisi velit exercitation aute dolor quis.",
    rating: 4.9,
    numberOfRatings: 300,
    sellerImage,
    sellerName: "Jane Smith",
    price: 10,
  },
];

class SuggestedServicesSection extends HTMLElement {
  constructor() {
    super();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  renderServiceItems() {
    let serviceItemsElements = "";
    servicesItemsArr.forEach((item) => {
      const encodedItem = encodePropsObj(item);
      const itemEl = `
        <suggested-service-card serviceData="${encodedItem}"></suggested-service-card>
      `;
      serviceItemsElements = serviceItemsElements + itemEl;
    });
    return serviceItemsElements;
  }

  render() {
    this.innerHTML = `
      <div class="suggested-services-container">
        <h3>Suggested Services</h3>
        <div class="suggested-services-items-container">${this.renderServiceItems()}</div>
      </div>
    `;
  }
}

export default SuggestedServicesSection;
