import React from "react";

const Menu = (props) => {
    const { data1, data2 } = props;
    return (
        <ul>
            <li><a href="/">{ data1 }</a></li>
            <li><a href="/contact">{ data2 }</a></li>
        </ul>
    )
}

export default Menu;