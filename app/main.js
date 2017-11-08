import React from 'react';
import {render} from 'react-dom';
import Greeter from './greeter';

import '../css/style.css';

render(
    <Greeter />,
    document.getElementById('root')
)

/*
const greeter = require('./greeter.js');
document.querySelector('#root').appendChild(greeter());*/
