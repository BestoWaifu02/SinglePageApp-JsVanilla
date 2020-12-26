//Dar archivo de entrada y salida(la funcion de webpack es convertir a codigo JS)

//La carpeta SRC es para los desarrolladores ya que ahi se trabaja todo y la carpeta dist es para produccion ya que es la que se le entrega al nevegador para que este la interprete

const htmlWebpack = require("html-webpack-plugin");

module.exports = {
  //Entrada (indicamos el archivo de JS a convertir)
  entry: "./src/main.js",
  //Lugar de salida de ese archivo JS que se va a convertir ademas de agrgar una RUTA la cual es con el __dirname + dist que sera la carpeta y el archivo de salida se llamar bundle
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    //Cada objeto es una configuracion de loaders
    //En este caso CSS-Loader nos permite decirle a webpack que entienda archivos de css con webpack
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //Regla para que webpack entienda SASS
      {
        test: /\.s[a c]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      //Objeto para cargar html dentro de JS
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  //Con el plugib de htmlwebpack tambien creara un nuevo archivo html pero al cual se pasara coba argumento el que tenemos en src
  plugins: [
    new htmlWebpack({
      template: "./src/index.html",
    }),
  ],
};
