// DZIAŁA

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

root.render(<App />);