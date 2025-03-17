import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

const app = createApp(App);

app.use(ElementPlus, { locale: zhCn }); // 全局注册element-plus 语言包设置为中文

app.mount("#app");
