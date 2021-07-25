import Form from "react-bootstrap/Form";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import { Avatar, Image } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './Login.css';

const Loginss = (props) => {
  const loginHandler = () => {
    console.log(props);
    props.history.push("./Main");   
  };

  return (
    <div className="container-new">
    <div className="child">
    <div className="avtar">
    <div className="center">

    <Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </div>
    </div>
        
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={loginHandler}>
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default Loginss;
