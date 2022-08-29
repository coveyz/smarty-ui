import { App } from "vue";
import Button from "./Button";
import "uno.css";

// export default Button;

export { Button };

export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
