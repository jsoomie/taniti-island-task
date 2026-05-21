import { BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <PageLoader>
          <main>
            <Routing />
          </main>
        </PageLoader>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
