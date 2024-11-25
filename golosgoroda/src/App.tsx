import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import PromoPage from "./pages/PromoPage/PromoPage.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import ObjectsPage from "./pages/ObjectsPage/ObjectsPage.tsx";
import ObjectDetailPage from "./pages/ObjectDetailPage/ObjectDetailPage.tsx";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
          <Header/>
          <Routes>
              <Route path={"/"} element={<PromoPage/>}/>
              <Route path={"/objects"} element={<ObjectsPage/>}/>
              <Route path={"/objects/:id"} element={<ObjectDetailPage/>}/>
          </Routes>
          <Footer/>
      </div>
    </Router>
  )
}

export default App
