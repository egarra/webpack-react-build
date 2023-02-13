import React from "react";
import ReactDOM from "react-dom";
import styles from './index.css'

import { Header } from "./components/Header/Header";
const App = () => {
    let num: number;
    console.log(styles);
    num = 4;
    return (
        <>
            <h1 className={styles.headTitle}>Hello World {num}</h1>
            <Header/>
        </>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root)