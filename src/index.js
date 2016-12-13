import React, {Component} from 'react';
import {render} from 'react-dom';

// those chunks will be moved to folders in comming steps
class Chunk1 extends Component {
  constructor(props){
    super(props);
      this.state = {chuck2: []};
      this.pressed = this.pressed.bind(this);
  }

  pressed (e) {
    this.setState({chuck2: this.getChunk()});
  }

  getChunk(){
    return (
      [<Chunk2 key={0} />]
    )
  }

  render(){
    return (
      <div> <button onClick={this.pressed}> Click here to open the other chunk </button> {this.state.chuck2} </div>
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
