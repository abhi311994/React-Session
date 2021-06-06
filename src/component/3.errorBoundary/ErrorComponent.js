import React, { Component } from 'react'

class ErrorComponent extends Component {
    constructor(props) {
        super(props)
        if (this.props.status === 'ErrorCame'){
            throw new Error("Can't Run")
        }
    }
    
    render() {
        return (
            <div>
                {this.props.status}
            </div>
        )
    }
}

export default ErrorComponent
