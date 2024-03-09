import { setupComponents } from "./setupComponents";
import { getFileURL } from "./src/helpers/utils";

setupComponents();

class App extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const url = getFileURL("/briefcase.png");
    this.innerHTML = `
            <div class="app-container">
                <app-header></app-header>
                <div class="page-container">
                  <contest-page></contest-page>
                </div>
            </div>
        `;
  }
}

export default App;
