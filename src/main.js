import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faEye,
  faCamera,
  faCheck,
  faGear,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";

library.add(faHome);
library.add(faEye);
library.add(faCamera);
library.add(faCheck);
library.add(faGear);
library.add(faCloud);
library.add(faCheck);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
