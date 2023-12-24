import ChangeColorProvider from "./components/changeColor/ChangeColorProvider";
import ColorContext from "./context/ColorContext";

function App() {
  return (
    <div className="App">
      <ColorContext>
        <ChangeColorProvider></ChangeColorProvider>
      </ColorContext>
    </div>
  );
}

export default App;
