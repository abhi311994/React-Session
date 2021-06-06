import React, { Component } from 'react'
// import UpdatedComponent from './SimpleHoc'
import withCounter from './withCounter'

class ClickCounter extends Component {
            // constructor(props) {
            //     super(props)
            
            //     this.state = {
            //         count : 0
            //     }
            // }
    
    // handleIncrement = () => {
    //     this.setState((prevState)=>{
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
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


// export default ClickCounter
// export default UpdatedComponent(ClickCounter)
export default withCounter(ClickCounter)
