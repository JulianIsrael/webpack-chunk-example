import React, {Component} from 'react';
import {render} from 'react-dom';

// those chunks will be moved to folders in comming steps
class Chunk1 extends Component {

  render(){
    return (
      <div> <button> Click here to open the other chunk </button> </div>
    );
  }

}

class Chunk2 extends Component {

  render(){
    return (
      <div> <button> I'm the other Chunk </button> </div>
    );
  }
}

render(<Chunk1 />, document.getElementById("content"));
