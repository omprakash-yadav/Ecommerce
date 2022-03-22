import React, { Component } from 'react'
import Joi from 'joi-browser';
import Form from './common/Form';


class LoginForm extends Form {
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {}

    };
    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }


    doSubmit = () => {
        //cal the server
        console.log("submited")

    }
    render() {
        return (
            <div className="w-50 m-auto">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', "Username")}
                    {this.renderInput('password', "password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;