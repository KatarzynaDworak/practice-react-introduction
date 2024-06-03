import React from 'react';
import { createRoot } from 'react-dom/client';
import MenuItem from '../03/components/MenuItem';

const root = createRoot(document.querySelector('#root'));

const Menu = () => {
    return (
        <ul>
            <li><a href="/">home</a></li>
            <li><a href="/contact">kontakt</a></li>
        </ul>
    )
}

const Nav = () => {
    return (
        <nav>
            <Menu></Menu>
        </nav>  
    )
}

root.render(<Nav />);