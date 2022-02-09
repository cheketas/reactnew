import React, {useState} from 'react'
class ClassCounter extends React.Component{
    constructor (props){
        super(props);
        this.state ={
            count: 0,
        }
        this.alert = this.alert.bind(this);
    }
    alert(){
        this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <div>
                <button onClick={this.alert}>{this.state.count}</button>
            </div>
        )
    }
}
export default ClassCounter;