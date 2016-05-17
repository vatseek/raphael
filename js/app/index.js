import React from 'react'
import ReactDOM from 'react-dom'
import Raphael from 'raphael'
import '../../lib/transform/raphael.free_transform.js'
import App from './components/app'

var paper = Raphael(10, 50, 320, 200);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

var circle = paper.circle(50, 40, 10);
circle.attr("fill", "#f00");
circle.attr("stroke", "#fff");