import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import PromoPage from "./pages/PromoPage/PromoPage.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import ObjectsPage from "./pages/ObjectsPage/ObjectsPage.tsx";
import ObjectDetailPage from "./pages/ObjectDetailPage/ObjectDetailPage.tsx";
import {useEffect} from "react";
import { invoke } from "@tauri-apps/api/core";

function App() {
    useEffect(() => {
        invoke('tauri', {cmd: 'create'})
            .then((response: any) => console.log(response))
            .catch((error: any) => console.log(error))

        return () => {
            invoke('tauri', {cmd: 'close'})
                .then((response: any) => console.log(response))
                .catch((error: any) => console.log(error))
        }
    })

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
