import { createRoot } from "react-dom/client";
import  App from "./App";
import React from "react";

import { Provider } from 'react-redux';
import { Store } from "redux";
import { store } from "./redux/Store";

const container: any = document.getElementById("app");
const root = createRoot(container)
root.render(

 <Provider store={ store}>

<App />

</Provider>
    
   

   

);