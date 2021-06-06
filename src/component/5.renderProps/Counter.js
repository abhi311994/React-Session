import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
    }

    handleIncrement = () => {
        const incVal = this.props.incValue ? this.props.incValue : 1
        this.setState((prevState) => {
            return {
                count : prevState.count + incVal
            }
        })
    }  

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.render(this.state.count,this.handleIncrement)}
            </div>
        )
    }
}

export default Counter
