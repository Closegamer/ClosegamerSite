import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';

export class Admin extends Component {
  render() {
    return (
      <MDBContainer className='main-container adminka-main-container' fluid>
        <MDBRow>
          <MDBCol xl='9' xs='12' className='contentArea-container'>
            <h3>Панель администратора</h3>
          </MDBCol>
          <MDBCol xl='3' xs='12' className='bannerRight-container'>
            <MDBRow>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='widgetRightCard'>Пользователи</div>
              </MDBCol>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='widgetRightCard'>Статьи</div>
              </MDBCol>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='widgetRightCard'>Курсы</div>
              </MDBCol>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='widgetRightCard'>Партнеры</div>
              </MDBCol>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='widgetRightCard'>Реклама</div>
              </MDBCol>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='widgetRightCard'>Контакты</div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Admin;
