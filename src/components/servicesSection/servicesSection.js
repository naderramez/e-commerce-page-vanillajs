class ServicesSection extends HTMLElement {
  constructor() {
    super();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <service-addons></service-addons>
      <purchase-service quantity="1" price="100"></purchase-service>
    `;
  }
}

export default ServicesSection;
