import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";

library.add(faPhone);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
