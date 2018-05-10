import React from 'react';
import { Row, Col } from 'antd';
import './index.css';
import customerType from './../../../images/customerType.png';
import email from './../../../images/email.png';
import loginID from './../../../images/loginID.png';
import mailingAddress from './../../../images/mailingAddress.png';
import name from './../../../images/name.png';
import password from './../../../images/password.png';
import phone from './../../../images/phone.png';

const ContentBox = props => <p className={`height-${props.value}`}>{props.children}</p>;


class EditProfile extends React.Component{

render(){
    return (<div className="EditProfile">
              <Row className="row" type="flex" justify="center">
                <Col span={16} push={2} className="col1" >
                  <ContentBox value="100">
                    <span>Customer type</span><span style={{paddingLeft:"30px"}} className="valFont">Residential</span>
                  </ContentBox>
                </Col>
                <Col span={2} pull={16} className="col2">
                  <ContentBox>
                      <img src={customerType} alt="Customer's type"/>
                  </ContentBox>
                </Col>
              </Row>

              <Row className="row" type="flex" justify="center">
                <Col span={16} push={2} className="col1">
                  <ContentBox value="100">
                    <div style={{display:'inline-block'}}>
                      <span>Name</span>
                      <span style={{paddingLeft:"85px"}} className="valFont">Jhon Doe</span>
                    </div>
                    <div style={{float:'right'}}>
                      <span style={{marginRight:'25px'}}>Date of birth</span>
                      <span style={{marginRight:'120px'}} className="valFont">4/07/1987</span>
                      <span className="edit">Edit</span>
                    </div>
                  </ContentBox>
                </Col>
                <Col span={2} pull={16} className="col2">
                <ContentBox>
                  <img src={name} alt="Customer's name" />
                </ContentBox>
                </Col>
              </Row>

              <Row className="row" type="flex" justify="center">
                <Col span={16} push={2} className="col1">
                  <ContentBox value="100">
                    <div style={{display:'inline-block'}}>
                      <span>Primary Phone</span>
                      <span style={{paddingLeft:"30px"}} className="valFont">856.123.4321</span>
                      <span style={{paddingLeft:"30px"}}>Ext.</span>
                        <span style={{paddingLeft:"10px"}} className="valFont">321</span>
                    </div>
                    <div style={{float:'right'}}>
                      <span style={{marginRight:'40px'}}>Cell Phone</span>
                      <span style={{marginRight:'100px'}} className="valFont">849.339.3532</span>
                      <span className="edit">Edit</span>
                    </div>
                  </ContentBox>
                </Col>
                <Col span={2} pull={16} className="col2">
                <ContentBox>
                    <img src={phone} alt="Customer's phone" />
                </ContentBox>
                </Col>
              </Row>

              <Row className="row" type="flex" justify="center">
                <Col span={16} push={2} className="col1">
                  <ContentBox value="100">
                    <div style={{display:'inline-block'}}>
                      <span>Primary Email</span>
                      <span style={{paddingLeft:"40px"}} className="valFont">jhon.doe@gmail.com</span>
                    </div>
                    <div style={{float:'right'}}>
                      <span style={{marginRight:'50px'}}>Alt Email</span>
                      <span style={{marginRight:'50px'}} className="valFont">jhon.doe@xmail.com</span>
                      <span className="edit">Edit</span>
                    </div>
                  </ContentBox>
                </Col>
                <Col span={2} pull={16} className="col2">
                <ContentBox>

                    <img src={email} alt="Customer's email" />
                </ContentBox>
                </Col>
              </Row>

              <Row className="row" type="flex" justify="center">
                <Col span={16} push={2} className="col1">
                  <ContentBox value="100">
                    <div style={{display:'inline-block'}}>
                      <span>Mailing Address</span>
                      <span style={{paddingLeft:"21px"}} className="valFont">50 Higuera Street, San luis Obispo,CA,93401</span>
                    </div>
                    <div style={{float:'right'}}>
                      <span className="edit">Edit</span>
                    </div>
                  </ContentBox>
                </Col>
                <Col span={2} pull={16} className="col2">
                  <ContentBox>

                      <img src={mailingAddress} alt="Customer's mailingAddress" />
                  </ContentBox>
                </Col>
              </Row>

              <Row className="row" type="flex" justify="center">
                <Col span={16} push={2} className="col1">
                  <ContentBox value="100">
                    <div style={{display:'inline-block'}}>
                      <span>Login ID</span>
                      <span style={{paddingLeft:"69px"}} className="valFont">jhon.doe</span>
                    </div>
                    <div style={{float:'right'}}>
                      <span className="edit">Edit</span>
                    </div>
                  </ContentBox>
                </Col>
                <Col span={2} pull={16} className="col2">
                  <ContentBox>
                      <img src={loginID} alt="Customer's loginID" />
                  </ContentBox>
                </Col>
              </Row>

              <Row className="row" type="flex" justify="center">
                <Col span={16} push={2} className="col1">
                  <ContentBox value="100">
                    <div style={{display:'inline-block'}}>
                      <span>Current Password</span>
                      <span style={{paddingLeft:"12px"}} className="valFont">****************</span>
                    </div>
                    <div style={{float:'right'}}>
                    <span style={{marginRight:'30px'}}>Security Hint</span>
                    <span style={{marginRight:'55px'}} className="valFont">****************</span>
                    <span className="edit">Edit</span>
                    </div>
                  </ContentBox>
                </Col>
                <Col span={2} pull={16} className="col2">
                <ContentBox>
                      <img src={password} alt="Customer's password" />
                </ContentBox>
                </Col>
              </Row>
            </div>);
  }
}

export default EditProfile;
