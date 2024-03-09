import ContestCarousel from "./src/components/contest/contestCarousel";
import ContestHeader from "./src/components/contest/contestHeader";
import ContestItem from "./src/components/contest/contestItem";
import Header from "./src/components/header";
import NavBar from "./src/components/navBar";
import NavItem from "./src/components/navItem";
import PurchaseService from "./src/components/servicesSection/purchaseService";
import ServiceAddonItem from "./src/components/servicesSection/serviceAddonItem";
import ServiceAddons from "./src/components/servicesSection/serviceAddons";
import ServiceRatingSection from "./src/components/servicesSection/serviceRatingSection/serviceRatingSection";
import ServicesSection from "./src/components/servicesSection/servicesSection";
import ContestPage from "./src/pages/contestPage";

export const setupComponents = () => {
  customElements.define("nav-item", NavItem);
  customElements.define("app-header", Header);
  customElements.define("nav-bar", NavBar);
  customElements.define("contest-page", ContestPage);
  customElements.define("contest-item", ContestItem);
  customElements.define("contest-header", ContestHeader);
  customElements.define("contest-carousel", ContestCarousel);
  customElements.define("service-addon-item", ServiceAddonItem);
  customElements.define("service-addons", ServiceAddons);
  customElements.define("services-section", ServicesSection);
  customElements.define("purchase-service", PurchaseService);
  customElements.define("service-rating-section", ServiceRatingSection);
};
