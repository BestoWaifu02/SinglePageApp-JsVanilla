import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import { router } from "./router/index.routes";
//Capturamos el evento al comento de que cambie el hash (que serian las urls o las direcciones #/Products)
router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
