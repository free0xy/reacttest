import React,{Component} from 'react';
import config from './config.json';

import styles from './main.css';

class Greeter extends Component{
    render(){
        return(
            <div className={styles.red}>
                {config.greetText}
            </div>
        );
    }
}
export default Greeter
/*

let config = require('./config.json');
module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
}*/
