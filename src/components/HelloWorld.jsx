import { Link } from "react-router-dom";

import logo from '../assets/logo.svg';
import '../App.css';

export default function HelloWorld(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {props.msg}
                </p>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">a</a> */}
                <Link className="App-link" to="/about">关于</Link>
            </header>
        </div>
    );
}
