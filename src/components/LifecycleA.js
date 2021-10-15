import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'fatma'
        }
        console.log('lifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('lifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('lifecycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('lifecycle A shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifecycle A getSnapshotBeforeUpdate')
        return null 
    }
    componentDidUpdate(){
        console.log('lifecycle A componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'dkdkdkkdkd'
        })
    }
    render() {
        console.log('lifecycleA render')
        return (
            <div>
                <div>
                    lifecycle A
                </div>
                <button onClick={this.changeState}>change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
