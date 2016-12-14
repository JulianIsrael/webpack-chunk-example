let target;
import React from 'react';
import { Link } from 'react-router/es6';
import {render} from 'react-dom';
import './toolbar.scss';

export default () => (
  <nav className="navbar" role="navigation">
    <Link to="/">Home</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/about">About</Link>
    <a onClick={clickOp}> Hola </a>
  </nav>
);

// This is what we want
const clickOp = (e) =>{
  System.import('../../blades/Blade1')
    .then(Blade1 => {
      if(!target){
        target = document.createElement('div');
        document.getElementById('root').appendChild(target);
      }
      render(<Blade1.default />,target);
    })
}
