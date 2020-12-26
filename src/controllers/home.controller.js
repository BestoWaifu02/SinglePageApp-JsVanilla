import views from "../views/home.html";

export default () => {
  //Estamos mandando template strin pero como tenemos webpack podemos mandarle archivos de html
  /*   const views = `
       
          `; */

  const divElement = document.createElement("div");
  divElement.classList = "text-white";
  divElement.innerHTML = views;

  //Un problema es que se manda a llamar este evento de un boton que tendria que estar creado en el DOM pero ese boton esta en nuestras views, Lo mandamos buscar en el divElement que es nuestro codigo de html que tiene el boton
  const btnClick = divElement.querySelector("#btnClick");
  btnClick.addEventListener("click", () => {
    alert("Click");
  });
  return divElement;
};
