import React from 'react';
import { render } from 'react-dom';

render(
    <>
        <h1>App</h1>
        <marquee>Hello</marquee>
    </>
    ,
    document.querySelector('#app')
);