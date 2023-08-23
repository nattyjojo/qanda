import FooterContributor from "./components/footerContributors";
import "./index.css";
import "./variables.css";
import imageLinks from "./images/imageLink";
import Header from "./components/Header";
import "./Header.css";
import './main.css'
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <FooterContributor />
    </>
  );
}

export default App;