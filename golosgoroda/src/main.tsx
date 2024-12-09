import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {registerSW} from "virtual:pwa-register";
import {Provider} from "react-redux";
import {store} from "./store.ts";

createRoot(document.getElementById('root')!).render(
    <>
        <Provider store={store}>
            <App />
        </Provider>,
    </>
)

if ("serviceWorker" in navigator) {
    registerSW()
}
