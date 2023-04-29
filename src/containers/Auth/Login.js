import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService'
import { userLoginSuccess } from '../../store/actions/userActions'
class Login extends Component {
    // This is the constructor with "props" as parameter.
    constructor(props) {
        // It calls the parent constructor using "super(props)" before setting state.
        super(props);
        // This initializes the component's state with an object that has properties 'username', 'password' and 'isShowPassword'.
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
    }
    // Defines a function 'handleOnChangeUsername' which takes an event object as its parameter.
    handleOnChangeUsername = (event) => {
        // Calls the setState function to update the 'username' state with the current input value.
        this.setState({
            username: event.target.value
        })
        // Logs the current input value in the console.
        // console.log(event.target.value)
    }

    // Defines a function 'handleOnChangePassword' which takes an event object as its parameter.
    handleOnChangePassword = (event) => {
        // Calls the setState function to update the 'password' state with the current input value.
        this.setState({
            password: event.target.value
        })
        // Logs the current input value in the console.
        // console.log(event.target.value)
    }

    handleLogin = async () => {
        // console.log('username: ', this.state.username, 'password: ', this.state.password)
        // console.log('all state: ', this.state)

        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode == 0) {
                //todo
                this.props.userLoginSuccess(data.user)
                console.log('Login sucessfully')
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
    }
    // Defines a function 'handleShowHidePassword' with no parameters.
    handleShowHidePassword = () => {
        // Calls the setState function and updates the value of 'isShowPassword' to be the opposite of its current value.
        // This toggles the 'isShowPassword' state between true and false, depending on its previous value.
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        //JSX
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>
                            Login
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>
                                Username:
                            </label>
                            <input
                                type='text'     // Specifies the input type as text.
                                className='form-control'     // Sets the class name of the input element to 'form-control'.
                                value={this.state.username}     // Takes in the 'username' state as its value.
                                placeholder='Enter your username'     // Shows the given string as a placeholder inside the input field.
                                onChange={(event) => { this.handleOnChangeUsername(event) }}     // Calls the 'handleOnChangeUsername' function on every onChange event inside the input field.
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>
                                Password:
                            </label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    value={this.state.password}
                                    placeholder='Enter your password'
                                    onChange={(event) => { this.handleOnChangePassword(event) }} />
                                <span onClick={() => { this.handleShowHidePassword() }}>
                                    <i className={this.state.isShowPassword ? 'far fa-eye' : 'fas fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        {/* add more notification */}
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>
                                Log in
                            </button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>
                                Forgot your password?
                            </span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>
                                Or login with:
                            </span>
                        </div>
                        <div>
                            <div className='col-12 social-login'>
                                <i className="fab fa-google-plus-g google"></i>
                                <i className="fab fa-facebook-f facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
//Redux
// Defines a function mapStateToProps that takes in the Redux store state object and returns an object with the value of `language`.
// This will make the language property in the app state available for reading as a prop called `language`.
const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};
// Defines a function mapDispatchToProps, which dispatches actions based on what event is triggered.
// When the navigate function is called, it will dispatch a push action with the path passed as an argument.
// When adminLoginSuccess is called, it will dispatch an adminLoginSuccess action with the adminInfo passed as an argument.
// When adminLoginFail is called, it will dispatch an adminLoginFail action without any arguments.
const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};
// Passes the Login component as an argument to the higher-order component returned by 'connect()'.
// The mapStateToProps and mapDispatchToProps handlers are connected to this component, allowing them to be accessed as props.
export default connect(mapStateToProps, mapDispatchToProps)(Login);
