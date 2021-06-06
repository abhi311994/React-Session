import React from 'react'

function MemoComp(props) {
    console.log('*******Memo')
    return (
        <div>
            {/* Memo component {props.name} */}
            Memo component {props.name.name} {props.person.fname}
        </div>
    )
}

export default React.memo(MemoComp)
