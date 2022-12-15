import { Link } from "react-router-dom";

import logo from '../assets/logo.svg';
import '../assets/HelloWorld.css';

export default (props) => {
    return (
        <>
            <header className="HW-header">
                <img src={logo} className="HW-logo" alt="logo" />
                <p>
                    {props.msg}
                </p>
                <Link to="/about">关于</Link>
            </header>
        </>
    );
}
