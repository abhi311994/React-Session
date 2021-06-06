import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("Pure ===== ")
        return (
            <div>
                Pure Component {this.props.name.name} {this.props.name.last} {this.props.person.fname}
                {/* Pure Component {this.props.name} */}
            </div>
        )
    }
}

export default PureComp
