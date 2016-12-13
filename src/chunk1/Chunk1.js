import React, {Component} from 'react';

import Chunk2 from '../chunk2/Chunk2';

class Chunk1 extends Component {

  constructor(props){
    super(props);
      this.state = {chuck2: []};
      this.pressed = this.pressed.bind(this);
  }

  pressed (e) {
    this.setState({chuck2: [<Chunk2 key={0} />]});
  }

  render(){
    return (
      <div> <button onClick={this.pressed}> Click here to open the other chunk </button> {this.state.chuck2} </div>
    );
  }

}

export default Chunk1;
