import React from 'react'

// class RefForward extends Component {
//     render() {
//         return (
//             <div>
//                 <input type="text" />
//             </div>
//         )
//     }
// }

const RefForward = React.forwardRef((props,ref) => {
    return (
        <input type="text" ref={ref}/>
    )
})

export default RefForward
