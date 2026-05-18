import { HashRouter } from "react-router-dom";
import {
  Routing,
  Navbar,
  Footer,
  PageLoader,
  ScrollToTop,
} from "./components/";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <PageLoader>
          <main>
            <Routing />
          </main>
        </PageLoader>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
