//DZIAŁA

import React from "react";
import { createRoot } from 'react-dom/client';

import Menu from "./components/Menu";
import Nav from "./components/Nav";

const root = createRoot(document.querySelector('#root'));

const pen = { data1: "O mnie", data2: "Dane kontaktowe" };
const App = () => {
    return (
        <>
            <Menu {...pen}/>
            <Nav />
        </>

    )
}

root.render(<App />);