import React,{Component} from 'react';

export default class Home extends Component{
  render(){
    return <div>
      Home
      <a onClick={this.toMenu}>toMenu</a>
    </div>
  }
  toMenu = ()=>{
    console.log('current:home',this.props);
  }
}