import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="cat" breed="Egyptian Mau" />
      <Pet name="Snowball" animal="bunny" breed="Rex" />
      <Pet name="Michelangelo" animal="turtle" breed="Yellow-Bellied Slider" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
