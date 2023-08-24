import { createApp } from "vue";
import App from "@/app/App.vue";
import { createPinia } from "pinia";
import router from "@/app/router";
import PrimeVue from "primevue/config";

//Components
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import MultiSelect from "primevue/multiselect";
import Calendar from "primevue/calendar";
import InputSwitch from "primevue/inputswitch";
import Message from "primevue/message";
import primeVueSettings from "./shared/utils/primeVueSettings";
import MyButton from "@/shared/UI/MyButton.vue";

const app = createApp(App);
const pinia = createPinia();

app.component("InputText", InputText);
app.component("Dropdown", Dropdown);
app.component("Textarea", Textarea);
app.component("MultiSelect", MultiSelect);
app.component("Calendar", Calendar);
app.component("InputSwitch", InputSwitch);
app.component("Message", Message);
app.component("MyButton", MyButton);

app.use(pinia);
app.use(router);
app.use(PrimeVue, primeVueSettings);

app.mount("#app");
