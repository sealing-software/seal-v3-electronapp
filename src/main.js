import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faEye,
  faCamera,
  faCheck,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";

library.add(faHome);
library.add(faEye);
library.add(faCamera);
library.add(faCheck);
library.add(faGear);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
