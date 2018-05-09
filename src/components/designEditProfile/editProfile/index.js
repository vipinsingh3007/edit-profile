import React from 'react';
import { Row, Col } from 'antd';
import './index.css';

const ContentBox = props => <p className={`height-${props.value}`}>{props.children}</p>;


class EditProfile extends React.Component{

render(){
    return (<div className="EditProfile">
              <Row className="row" type="flex" justify="center">
                <Col span={16} push={2} className="col1">
                  <ContentBox value="100">
                    <span>Customer type</span><span style={{paddingLeft:"30px"}}>Residential</span>
                  </ContentBox>
                </Col>
                <Col span={2} pull={16} className="col2">col-6 col-pull-18</Col>
              </Row>
              <Row className="row" type="flex" justify="center">
                <Col span={16} push={2} className="col1">
                  <ContentBox value="100">
                    <div style={{display:'inline-block'}}>
                      <span>Name</span>
                      <span style={{paddingLeft:"85px"}}>Jhon Doe</span>
                    </div>
                    <div style={{float:'right'}}>
                      <span style={{marginRight:'25px'}}>Date of birth</span>
                      <span style={{marginRight:'120px'}}>4/07/1987</span>
                      <span style={{marginRight:'50px'}}><a style={{textDecoration:'underline'}}>Edit</a></span>
                    </div>
                  </ContentBox>
                </Col>
                <Col span={2} pull={16} className="col2">col-6 col-pull-18</Col>
              </Row>
              <Row className="row" type="flex" justify="center">
                <Col span={16} push={2} className="col1">
                  <ContentBox value="100">
                    <div style={{display:'inline-block'}}>
                      <span>Primary Phone</span>
                      <span style={{paddingLeft:"30px"}}>856.123.4321</span>
                      <span style={{paddingLeft:"30px"}}>Ext.</span>
                        <span style={{paddingLeft:"10px"}}>321</span>
                    </div>
                    <div style={{float:'right'}}>
                      <span style={{marginRight:'40px'}}>Cell Phone</span>
                      <span style={{marginRight:'100px'}}>849.339.3532</span>
                      <span style={{marginRight:'50px'}}><a style={{textDecoration:'underline'}}>Edit</a></span>
                    </div>
                  </ContentBox>
                </Col>
                <Col span={2} pull={16} className="col2">col-6 col-pull-18</Col>
              </Row>
              <Row className="row" type="flex" justify="center">
                <Col span={16} push={2} className="col1">
                  <ContentBox value="100">
                    <div style={{display:'inline-block'}}>
                      <span>Primary Email</span>
                      <span style={{paddingLeft:"40px"}}>jhon.doe@gmail.com</span>
                    </div>
                    <div style={{float:'right'}}>
                      <span style={{marginRight:'50px'}}>Alt Email</span>
                      <span style={{marginRight:'50px'}}>jhon.doe@xmail.com</span>
                      <span style={{marginRight:'50px'}}><a style={{textDecoration:'underline'}}>Edit</a></span>
                    </div>
                  </ContentBox>
                </Col>
                <Col span={2} pull={16} className="col2">col-6 col-pull-18</Col>
              </Row>
            </div>);
  }
}

export default EditProfile;
