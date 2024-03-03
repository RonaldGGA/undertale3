import Landing from "./containers/landing/Landing";
import GameInfo from "./containers/GameInfo/GameInfo";
import { NavBar, NewFeaturesBar } from "./components/exports";
import Awards from "./containers/Awards/Awards";
import Questions from "./containers/Questions/Questions";
import Footer from "./containers/Footer/Footer";

// import Carrousel from "./containers/carrousel";
function App() {
  //  const images =[story, humor, combat]
  return (
    <div className="app">
      <NewFeaturesBar />
      <NavBar />
      <Landing />
      <GameInfo />
      <Awards />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
