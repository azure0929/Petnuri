import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from 'recoil';
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import {Toaster} from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
