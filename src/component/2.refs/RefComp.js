import React, { Component } from 'react'

export class RefComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text: ''
        }
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = ele => {
            this.cbRef = ele
        }
    }

    componentDidMount() {
        console.log(this.inputRef)
        // this.inputRef.current.focus()
        if(this.cbRef) {
            console.log('CBREF' , this.cbRef )
            this.cbRef.focus()
        }
    }

    
    render() {
        return (
            <div>
                <input 
                type="text" 
                id="first" 
                onChange={e=>this.setState({text:e.target.value})} 
                ref={this.inputRef}
                />
                <button onClick={() => {alert(this.inputRef.current.value)}}>Click Me</button>
                <br></br>
                <input 
                type="text" 
                id="last"  
                ref={this.setCbRef}
                />
                <button onClick={() => {alert(this.cbRef.value)}}>Click Me</button>
            </div>
        )
    }
}

export default RefComp
