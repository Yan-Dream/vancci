import React, { Component } from 'react'
import reactDom from 'react-dom'
import Nav from './nav/nav.jsx'
class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
            </div>
        )
    }
}
reactDom.render(
    <App/>,
    document.getElementById('root')
)
