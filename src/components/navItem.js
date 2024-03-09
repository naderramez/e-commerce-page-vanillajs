class NavItem extends HTMLElement {
  constructor() {
    super();
  }

  get navIconSrc() {
    return this.getAttribute("navIconSrc");
  }

  get navlabel() {
    return this.getAttribute("navlabel");
  }

  get isActive() {
    return this.getAttribute("isActive");
  }

  static get observedAttributes() {
    return ["navIconSrc", "navlabel", "isActive"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="nav-link-item-container" isActive="${this.isActive}">
                <img src="${this.navIconSrc}" alt="${this.navlabel}" />
                <b>${this.navlabel}</b>
            </div> 
        `;
  }
}

export default NavItem;
