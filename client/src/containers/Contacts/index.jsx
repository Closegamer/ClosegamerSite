import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';
import ContactForm from './contactForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminActions from '../../ducks/admin';

export class Contacts extends Component {
  handleSubmit = values => {
    console.log('handleSubmit values: ', values);

    this.props.adminActions.userSendMessage(null, null, null);
    // this.props.history.push('/');
  };

  render() {
    return (
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='9' xs='12' className='bannerTop-container'>
            <div className='banner728x90custom'></div>
          </MDBCol>
          <MDBCol xl='3' xs='12'></MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol xl='9' xs='12' className='contentArea-container'>
            <h3>Контактная форма</h3>
            <MDBRow>
              <MDBCol size={4}>
                <ContactForm onSubmit={this.handleSubmit} />
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol xl='3' xs='12' className='bannerRight-container'>
            <MDBRow>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='banner240x400'></div>
              </MDBCol>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='banner240x400'></div>
              </MDBCol>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='banner240x400'></div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol xl='9' xs='12' className='bannerBottom-container'>
            <div className='banner728x90custom'></div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  adminActions: bindActionCreators({ ...adminActions }, dispatch)
});

export default connect(mapDispatchToProps)(Contacts);
