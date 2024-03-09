import { getFileURL } from "../helpers/utils";

const navItems = [
  {
    label: "Auctions",
    iconSrc: getFileURL("/cart.png"),
    isActive: true,
  },
  {
    label: "Contests",
    iconSrc: getFileURL("/trophy.png"),
    isActive: false,
  },
  {
    label: "Project",
    iconSrc: getFileURL("/briefcase.png"),
    isActive: false,
  },
  {
    label: "Portfolios",
    iconSrc: getFileURL("/image.png"),
    isActive: false,
  },
  {
    label: "Freelancers",
    iconSrc: getFileURL("/users.png"),
    isActive: false,
  },
  {
    label: "Forum",
    iconSrc: getFileURL("/chats.png"),
    isActive: false,
  },
];

class NavBar extends HTMLElement {
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
    const navItemsArr = navItems.map(
      (item) =>
        `<nav-item navIconSrc="${item.iconSrc}" navLabel="${item.label}" isActive="${item.isActive}"></nav-item>`
    );
    this.innerHTML = `
      <div class="navbar-container">${navItemsArr.join("")}</div>
    `;
  }
}

export default NavBar;
