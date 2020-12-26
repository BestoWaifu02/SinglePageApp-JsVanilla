import view from "../views/404.html";

export default () => {
  const content = document.createElement("div");
  content.innerHTML = view;
  return content;
};
