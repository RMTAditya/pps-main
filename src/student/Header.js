import React,{Component} from 'react'
import {FaUserCircle} from 'react-icons/fa'
import './Header.css'
import Modal from '../modal/Modal';
import Create from '../createpost/Create';
import MyProfile from '../myprofile/MyProfile'
class Header extends Component {
  constructor() {
    super();
    this.state = {
      showCreate: false,
      showProfile:false
    };
    this.showCreateModal = this.showCreateModal.bind(this);
    this.hideCreateModal = this.hideCreateModal.bind(this);
    this.showMyProfileModal = this.showMyProfileModal.bind(this);
    this.hideMyProfileModal = this.hideMyProfileModal.bind(this);
  }

  showCreateModal = () => {
    this.setState({ showCreate: true });
  };

  hideCreateModal = () => {
    this.setState({ showCreate: false });
  };
  showMyProfileModal = () => {
    this.setState({ showProfile: true });
  };

  hideMyProfileModal = () => {
    this.setState({ showProfile: false });
  };
  render() {
  return (
    <div>
      <Modal show={this.state.showCreate} handleClose={this.hideCreateModal}>
          <Create/>
        </Modal>
      <Modal show={this.state.showProfile} handleClose={this.hideMyProfileModal}>
        <MyProfile/>
      </Modal>
      <div className='header'>
        <div className="left">
        <div className="logo">
          <FaUserCircle size={40}/>
        </div>
        <div className="username">
          <button onClick={this.showMyProfileModal}>RMTAditya</button>
        </div>
        </div>
        <div className="right">
          <button onClick={this.showCreateModal}>create post</button>
          <button>my posts</button>
          <button>logout</button>
        </div>
      </div>
    </div>
  )
}
}
export default Header