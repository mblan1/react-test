import { Link } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import Greeting from './components/Greeting';

function App() {
    return (
        <>
            <Greeting name={'Lan'} />
            <Button />
            <Link to="/home">Home</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/test">Input Hook</Link>
        </>
    );
}

export default App;
