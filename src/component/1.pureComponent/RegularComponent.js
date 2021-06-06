import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        console.log("Regular------")
        return (
            <div>
                Regular Component {this.props.name.name} {this.props.name.last}
                {/* Regular Component {this.props.name} */}
            </div>
        )
    }
}

export default RegularComponent
