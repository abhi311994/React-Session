import React, { Component } from 'react'
import withCounter from './withCounter'
// import UpdatedComponent from './SimpleHoc'

class HoverCounter extends Component {
            // constructor(props) {
            //     super(props)
            
            //     this.state = {
            //         count : 0
            //     }
            // }

    // handleIncrement = () => {
    //     this.setState((prevState) => {
    //         return {
    //             count : prevState.count + 1
    //         }
    //     })
    // }  

            // handleIncrement = () => {
            //     const incVal = this.props.incValue ? this.props.incValue : 1
            //     this.setState((prevState) => {
            //         return {
            //             count : prevState.count + incVal
            //         }
            //     })
            // }  
    
    render() {
        return (
            <div>
                {/* <h1 onMouseEnter={this.handleIncrement}>{this.props.name} Hovered {this.state.count} Times</h1> */}
                <h1 onMouseEnter={this.props.handleIncrement}>{this.props.name} Hovered {this.props.count} Times</h1>
            </div>
        )
    }
}

// export default HoverCounter
// export default UpdatedComponent(HoverCounter)
export default withCounter(HoverCounter)