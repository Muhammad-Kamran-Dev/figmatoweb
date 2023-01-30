import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ButtonState from "./context/ButtonState";

function App() {
  return (
    <>
      <div className="App  bg-[#292524] max-h-min ">
        <div className="content-wrapper  max-w-[1472px] mx-auto py-10">
          <ButtonState>
            <Header />
            <MainSection />
          </ButtonState>
        </div>
      </div>
    </>
  );
}

export default App;
