import React, { Component } from 'react'
import { NavLink, HashRouter } from 'react-router-dom'
import $ from 'jquery'
import '../css/nav.css'

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch("http://mock.shtodream.cn/mock/5ee344c09a69db61e52e87e2/ydyd/ydydNav", {
            method: 'post'
        }).then((response) => {
            return response.json()
        }).then((res) => {
            this.setState({
                data: res
            })
        })
        var navHeight = $('.nav_logo').css('height')
        console.log(navHeight)
        $(window).resize(function(){
            navHeight = $('.nav_logo').css('height')
            $('#nav').css("height",navHeight)
            $('.nav_right').css("height",navHeight)
            console.log(navHeight)
        })
        
        $('#nav').css("height",navHeight)
        $('.nav_right').css("height",navHeight)
    }
    render() {
        let arrNav = this.state.data
        return (
            <HashRouter>
                <nav>
                    <div className='nav'>
                        <div className='nav_logo'>
                            <NavLink to='/'><img src="src/img/nav_logo.png" alt="" /></NavLink>
                        </div>
                        <ul id='nav'>
                            {arrNav ? Object.keys(arrNav).map((items) => {
                                return (
                                    <li key={items} className='nav_one'>
                                        <NavLink to=''>{arrNav[items].firstNav.name}</NavLink>
                                        <ul>
                                            {arrNav[items].secondNav ? Object.keys(arrNav[items].secondNav).map((ite) => {
                                                return (
                                                    <li key={ite} className='nav_two'>
                                                        <NavLink to=''>{arrNav[items].secondNav[ite].name}</NavLink>
                                                    </li>
                                                )
                                            }) : null}
                                        </ul>
                                    </li>
                                )
                            }) : null}
                        </ul>
                        <div className='nav_right'>
                            <NavLink to='/'>园长入口</NavLink>
                            <img src="src/img/nav_logo_right.png" alt="" />
                        </div>
                    </div>
                </nav>
            </HashRouter>
        )
    }
}
