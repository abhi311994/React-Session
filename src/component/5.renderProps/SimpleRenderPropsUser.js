import React, { Component } from 'react'

export class SimpleRenderPropsUser extends Component {
    render() {
        return (
            <div>
                {this.props.render('Abhi')}
            </div>
        )
    }
}

export default SimpleRenderPropsUser
