import React, { Component } from 'react'
import '../styles/UserDetails.css'
import create from '../create.svg'
class UserDetails extends Component {
    render() {
        return (
            <div className="UserDetails">
                <div className="form-header">
                    <div className="form-header-description">
                        <p className="form-register-now">Register Now</p>
                        <p className="form-register-fill">Fill up the user details</p>
                    </div>
                    <div className="image-svg">
                        <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="white"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </div>     
                </div>
                <form className="form-container">
                    <label>
                        <p className="form-text">Enter your first name:</p>
                        <input type="text" spellCheck="false"/>
                    </label>
                    <label>
                        <p className="form-text">Enter your second name:</p>
                        <input type="text" spellCheck="false"/>
                    </label>
                    <label>
                        <p className="form-text">Enter your email:</p>
                        <input type="text" spellCheck="false"/>
                    </label>
                    <label>
                        <input type="submit" value="Submit"/>
                    </label>
                </form>
            </div>
        )
    }
}

export default UserDetails