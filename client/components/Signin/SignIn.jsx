import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import './signin.css'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signIn} from '../../actions/auth'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      hash: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const user = this.state
    this.props.dispatch(signIn(user))
    this.setState({
      email: '',
      hash: ''
    })
    e.preventDefault()
  }

  render () {
    if (this.props.SignedIn) {
      return <Redirect to='/graduatefeed' />
    }

    const {email, hash} = this.state

    return (
      <React.Fragment>
        <div className="signinBlock">
          <div className="container">
            <img className="logo" src='../../images/trackergrad-logo.png' alt="tracker"/>
            <div className="titleWrapper">
              <span className="subtitle">Welcome to</span>
              <span className="title">Your GradProfile</span>
            </div>
            <div>
              <TextField
                id="standard-dense"
                label="Email"
                margin="dense"
                className="input"
              />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                className="input"
              />
            </div>
            <div className="loginWrapper">
              <a href="/graduatefeed" className="loginButton">Login</a>
            </div>
            <div className="link">
              <a href="/registration">Register</a>
            </div>
          </div>
        </div>
        <img className="backgroundImage" src='../../images/backimage.png' alt="tracker"/>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    signin: state.signIn
  }
}
export default connect(mapStateToProps)(SignIn)
