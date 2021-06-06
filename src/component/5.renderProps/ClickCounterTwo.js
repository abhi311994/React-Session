import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         count : 0
    //     }
    // }

    // handleIncrement = () => {
    //     const incValue = this.props.incValue ? this.props.incValue : 1
    //     this.setState((prevState)=>{
    //         return {
    //             count: prevState.count + incValue
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                {/* <button onClick={this.handleIncrement}>{this.props.name} Click {this.state.count} Times</button> */}
                <button onClick={this.props.handleIncrement}>Click {this.props.count} Times</button>
            </div>
        )
    }
}


export default ClickCounterTwo
