
import FooterContributor from "./components/footerContributors";
import "./index.css";
import "./variables.css";
import imageLinks from "./images/imageLink";
import Header from "./components/Header";
import "./Header.css";
import './main.css'
import Main from "./components/Main";
import anchors from "./components/footer/anchors";


function App() {
  return (
    <>
      <Header />
      <FooterContributor />
      <footer>
        <h6 className="footerTitle">Contributors</h6>
        <main>
          <section>
            <FooterContributor
              repoHRef={anchors[0].Repo}
              imgHref={anchors[0].photo}
              name={anchors[0].name}
              linkedinREf={anchors[0].Repo}
            />
            <FooterContributor
              repoHRef={anchors[0].Repo}
              imgHref={anchors[0].photo}
              name={anchors[0].name}
              linkedinREf={anchors[0].Repo}
            />
          </section>
          <hr></hr>
          <section>
            <FooterContributor
              repoHRef={anchors[0].Repo}
              imgHref={anchors[0].photo}
              name={anchors[0].name}
              linkedinREf={anchors[0].Repo}
            />
            <FooterContributor
              repoHRef={anchors[0].Repo}
              imgHref={anchors[0].photo}
              name={anchors[0].name}
              linkedinREf={anchors[0].Repo}
            />
          </section>
        </main>
        <hr></hr>
        <p> &copy; 2023 All Rights Reserved </p>
      </footer>
    </>
  );
}

export default App;