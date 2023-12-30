// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  changeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let messageFile
    let btnFile

    if (isLogin) {
      messageFile = <Message content="Welcome User" />
      btnFile = <Login changeStatus={this.changeStatus} />
    } else {
      messageFile = <Message content="Please Login" />
      btnFile = <Logout changeStatus={this.changeStatus} />
    }
    return (
      <div className="login-bg">
        <div className="login-card">
          {messageFile}
          {btnFile}
        </div>
      </div>
    )
  }
}
export default Home
