import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor() {
        super();

        this.state={
            click: false,
            count: 0
        }

    }


    render() {
        return (
            <div>
                <h1>Class Component</h1>

                {
                    this.state.click && <h3>Conditinal rendering using Class Component</h3>
                }

                <button onClick={ ()=> this.setState({click : !this.state.click}) }>{this.state.click ? <p>HIDE</p> : <p>SHOW</p>}</button>

                <br/>
                <button onClick={()=> this.setState({count : this.state.count+1}) }>Button clicked {this.state.count} times</button>

            </div>
        )
    }
}
