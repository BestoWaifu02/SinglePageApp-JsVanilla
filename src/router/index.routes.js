//Ya no importamos el controlador porque tenemos un index que tiene un objeto que tiene todas las rutas y esto es para tener un orden en cuanto a rutas
//import Home from "../controllers/home.controller";

import { pages } from "../controllers/index";
let content = document.getElementById("root");

const router = async (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/": {
      return content.appendChild(pages.home());
    }

    case "#/Posts": {
      return content.appendChild(await pages.posts());
    }

    case "#/Products": {
      return console.log("products");
    }
    default: {
      return content.appendChild(pages.notFound());
    }
  }
};
/* Exportamos la funcion que va a identificar la ruta */
export { router };
