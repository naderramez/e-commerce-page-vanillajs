import App from "./app.js";

customElements.define("app-root", App);

document.querySelector("#app").innerHTML = `<app-root></app-root>`;
