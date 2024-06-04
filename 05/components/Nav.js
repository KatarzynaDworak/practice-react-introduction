import React from "react";
import Menu from "./Menu";

const shop = { data1: "Usługi", data2: "Promocje" };
const Nav = () => {
    return (
        <nav>
            <Menu {...shop}/>
        </nav>  
    )
}

export default Nav;