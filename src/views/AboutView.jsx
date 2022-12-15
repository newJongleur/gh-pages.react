import { React, PureComponent } from 'react';
import { Link } from "react-router-dom";
import '../assets/About.css'

export default class AboutView extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="about">
                    <h1>这是一个关于页面</h1>
                    <Link to="/">首页</Link>
                </div>
            </>
        );
    }
}
