import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// 1. przy wykorzystaniu funkcji:
// const App = () => {
//     return (
//     <header>
//         Moja pierwsza strona w React
//     </header>
//     );
// }

// 2. przy wykorzystaniu klasy z ES2015

class Header extends React.Component {
    render() {
        return <header>Moja pierwsza strona w React
        </header>
    }
}
const App = () => {
        return ( 
        <div>
            <Header />
        </div>
        );
 }

root.render(<App />);