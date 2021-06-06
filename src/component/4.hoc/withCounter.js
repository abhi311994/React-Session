import React, { Component } from 'react'

const withCounter = (WrappedFunction) => {
    class WithCounter extends Component {
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
                <WrappedFunction 
                    count={this.state.count} 
                    handleIncrement={this.handleIncrement} 
                    {...this.props}
                />
            )
        }
    }
    return WithCounter
}

export default withCounter