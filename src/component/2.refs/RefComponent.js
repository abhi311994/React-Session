import React, { Component } from 'react'
import Input from './Input'
import RefComp from './RefComp'
import RefForward from './RefForward'

class RefComponent extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef()
        this.handleFocus = this.handleFocus.bind(this)
        this.forwardRef = React.createRef()
    }
    
    handleFocus() {
        this.componentRef.current.focusInput()
    }

    handleForwardFocus = () => {
        this.forwardRef.current.focus()
    }

    render() {
        return (
            <div>
                <RefComp />
                <Input ref={this.componentRef}/>
                <button onClick={this.handleFocus}>FOUCS Component Input</button>
                <br></br>
                <RefForward ref={this.forwardRef}/>
                <button onClick={this.handleForwardFocus}>FOUCS Forward Ref Input</button>
            </div>
        )
    }
}

export default RefComponent
