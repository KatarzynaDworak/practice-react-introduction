import React from 'react';
import { createRoot } from 'react-dom/client';
import MenuItem from './components/MenuItem';

const root = createRoot(document.querySelector('#root'));

const App = () => {
    return (
        <div>
            <MenuItem />
        </div>
    );
}

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="/contact">kontakt</a></li>
            </ul>
        </nav>  
    )
}

root.render(<App />);