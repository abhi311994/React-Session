import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import ErrorComponent from './ErrorComponent'

class Error extends Component {
    render() {
        return (
            <div>
                    <ErrorComponent status="Success"/>
                    <ErrorComponent status="Warning"/>
                
                <ErrorBoundary>    
                    <ErrorComponent status="ErrorCame"/>
                </ErrorBoundary>
            </div>
        )
    }
}

export default Error
