import { React,PureComponent } from 'react';
import HelloWorld from '../components/HelloWorld'

export default class HomeView extends PureComponent {
    render() {
        return (
            <>
                <HelloWorld msg='首页' />
            </>
        );
    }
}
