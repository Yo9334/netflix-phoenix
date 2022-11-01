import "./App.css";
import logo from "./assets/logo.png";
import Section from "./components/Section";
import data from "./data.json";

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Netflix" />
      </header>

      <main>
        {data.map((element) => {
          return (
            <Section category={element.category} tabImgs={element.images} />
          );
        })}
      </main>
    </>
  );
}

export default App;
