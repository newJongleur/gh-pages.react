import React from 'react';
import HelloWorld from '../components/HelloWorld'

export default class HomeView extends React.Component {
    render() {
        return (
            <>
                <HelloWorld msg='首页' />
            </>
        );
    }
}
