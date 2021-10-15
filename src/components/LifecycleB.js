import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'fatma'
        }
        console.log('lifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('lifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('lifecycleB componentDidMount')
    } 


    shouldComponentUpdate() {
        console.log('lifecycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('lifecycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('lifecycleB componentDidUpdate')
    }

    render() {
        console.log('lifecycleB render')
        return (
            <div>
                lifecycle B
            </div>
        )
    }
}
export default LifecycleB
