import React,{Component} from 'react';

export default class Home extends Component{
  render(){
    return <div>
      Menu
      <a onClick={this.toHome}>toHome</a>
    </div>
  }
  toHome = ()=>{
    console.log('current:menu',this.props);
  }
}