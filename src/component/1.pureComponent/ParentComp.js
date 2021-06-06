import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            xyz : {
                name: 'ABhishek',
                last:'singh'
            },
            count:0
        }
        this.person = {
            fname: "times"
        }
    }

    handleCount = () => {
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        })
    }

    componentDidMount() {
        const abc = {...this.state.xyz}
        this.timer = setInterval(() =>{
            
        //     abc.name = 'ABhi'
        //     abc.last = 'SINGH'
        //     this.setState({xyz:abc})

            this.setState((prevState) => {
                return{
                    xyz: {
                        ...prevState.xyz,
                        name : 'Bitto'
                    }
                }
            })
            
        },6000)

        // this.timer = setInterval(() =>{
        //     this.setState({
        //                 name : 'Bitto'
        //     })
        // },2000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render() {
        console.log("Parent")
        return (
            <div>
                <button onClick={this.handleCount}>COUNT {this.state.count}</button>
                <PureComp name={this.state.xyz || EMPTY_ARRAY} person={this.person}/>
                <RegularComponent name={this.state.xyz} />
                <MemoComp name={this.state.xyz} person={this.person}/>

                {/* <PureComp name={this.state.name || EMPTY_ARRAY}/>
                <RegularComponent name={this.state.name} />
                <MemoComp name={this.state.name} /> */}

            </div>
        )
    }
}
const EMPTY_ARRAY = {};
export default ParentComp
