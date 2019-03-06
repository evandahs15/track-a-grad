import React from 'react'
import './editform.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfile, getWorkStatusList, updateProfile } from '../../api/users'
import Form from '../Form/Form'
import SignIn from '../SignIn/SignIn'

class EditForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    if (this.props.signIn) {
      this.props.dispatch(getProfile(this.props.signIn.userId))
      this.props.dispatch(getWorkStatusList())
    }
  }

  handleSubmit(profile) {
    this.props.dispatch(updateProfile(profile))
  }

  render() {
    if (!this.props.signIn) {
      return <Redirect to={'/signin'} />
    }
    return (
      <React.Fragment>
        {this.props.profile &&
        this.props.signIn &&
        this.props.profile.id === this.props.signIn.userId ? (
          <Form
            profile={this.props.profile}
            workStatuses={this.props.workStatuses}
            submit={this.handleSubmit}
          />
        ) : (
          <div>Loading...</div>
        )}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    workStatuses: state.workStatuses,
    signIn: state.signIn
  }
}

export default connect(mapStateToProps)(EditForm)
