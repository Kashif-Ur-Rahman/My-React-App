import AllProducts from './AllProducts.jsx';
import './App.css';
import MsgBox from "./MsgBox.jsx";

function App() {
    return (
        <div>
             <MsgBox userName= "KasHii" textColor= "Yellow" />
            <h1>Hello, KASHII</h1>
            <h2>My First Component</h2>
            <AllProducts />
           
            <p>This is Basic React JS Project</p>
            <button>Learn More</button>
        </div>
    );
}

export default App;
