import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

export class Recovery extends Component {
  state = {
    isLoading: true,
    error: '',
    user: null
  };

  componentDidMount() {
    const { match } = this.props;
    if (match.params.token) {
      axios
        .get(`/api/users/reset-user-password/${match.params.token}`)
        .then(response => {
          if (response.data.success) {
            this.setState({
              isLoading: false,
              error: '',
              user: response.data.user
            });
          } else {
            this.setState({ isLoading: false, error: response.data.error });
          }
        })
        .catch(error => {
          this.setState({
            isLoading: false,
            error: error.response.data.error
          });
        });
    }
  }

  render() {
    const { match } = this.props;
    if (!match.params.token) {
      return <div>Ссылка плохая</div>;
    }

    const { error, user, isLoading } = this.state;

    if (isLoading) {
      return <div>спинер</div>;
    }

    if (!!error) {
      return <div>{error}</div>;
    }

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
            <h3>Восстановление пароля</h3>
            <h2>Пользователь: {user.email}</h2>
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

const mapStateToProps = ({ auth }) => ({
  user: auth.user.nick
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recovery);
