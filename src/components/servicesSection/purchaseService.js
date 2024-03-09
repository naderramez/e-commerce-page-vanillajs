import { getFileURL } from "../../helpers/utils";

class PurchaseService extends HTMLElement {
  constructor() {
    super();
  }

  get price() {
    return this.getAttribute("price");
  }

  get quantity() {
    return this.getAttribute("quantity");
  }

  set quantity(val) {
    this.setAttribute("quantity", val);
  }

  static get observedAttributes() {
    return ["price", "quantity"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  incrementQuantity = () => {
    this.quantity = +this.quantity + 1;
  };

  decrementQuantity = () => {
    if (+this.quantity > 1) {
      this.quantity = +this.quantity - 1;
    }
  };

  getTotalPurchaseCost() {
    const total = +this.quantity * +this.price;
    return total;
  }

  minusIcon = getFileURL("/services/minus.png");
  plusIcon = getFileURL("/services/plus.png");

  render() {
    this.innerHTML = `
      <div class="purchase-service-container">
        <h3>Purchase Service</h3>
        <div class="purchase-card">
          <div class="purchase-data">
            <div class="purchase-quantity">
              <img id="decrement-purchase-quantity" src="${
                this.minusIcon
              }" alt="decrement quantity" />
              <span>${this.quantity}</span>
              <img id="increment-purchase-quantity" src="${
                this.plusIcon
              }" alt="increment quantity" />
            </div>

            <div class="purchase-price">$${this.getTotalPurchaseCost()}</div>
          </div>

          <div class="purchase-btn">
            <button>Purchase</button>
          </div>
        </div>
      </div>
    `;

    const minusBtn = document.getElementById("decrement-purchase-quantity");
    const plusBtn = document.getElementById("increment-purchase-quantity");

    minusBtn.addEventListener("click", this.decrementQuantity);
    plusBtn.addEventListener("click", this.incrementQuantity);
  }
}

export default PurchaseService;
