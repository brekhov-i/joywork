import { createApp } from "vue";
import App from "@/app/App.vue";
import router from "@/app/router";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import MultiSelect from "primevue/multiselect";
import Calendar from "primevue/calendar";
import InputSwitch from "primevue/inputswitch";
import Message from "primevue/message";
import primeVueSettings from "./shared/utils/primeVueSettings";

const app = createApp(App);
const pinia = createPinia();

app.component("InputText", InputText);
app.component("Dropdown", Dropdown);
app.component("Textarea", Textarea);
app.component("MultiSelect", MultiSelect);
app.component("Calendar", Calendar);
app.component("InputSwitch", InputSwitch);
app.component("Message", Message);

app.use(router);
app.use(pinia);
app.use(PrimeVue, primeVueSettings);

app.mount("#app");
