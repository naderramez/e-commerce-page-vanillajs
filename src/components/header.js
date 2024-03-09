import { getFileURL } from "../helpers/utils";

class Header extends HTMLElement {
  constructor() {
    super();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  kafafLogo = getFileURL("/kafaf-logo.png");

  unreadChatsIcon = getFileURL("/unread-chats.png");
  notificationsIcon = getFileURL("/notifications.png");
  userProfileIcon = getFileURL("/user-profile.png");

  render() {
    this.innerHTML = `
      <div class="app-header">
        <div>
          <img src="${this.kafafLogo}" />
        </div>

        <nav-bar></nav-bar>

        <div class="user-settings-container">
          <img src="${this.unreadChatsIcon}" alt="unread chats" />
          <img src="${this.notificationsIcon}" alt="notifications bell" />
          <img src="${this.userProfileIcon}" alt="profile image" />
        </div>
      </div>
    `;
  }
}

export default Header;
