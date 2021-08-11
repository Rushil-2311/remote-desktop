import React from 'react'
import { Card,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import company from './company.jpeg'
const Main = () => {
    return (
        <div>
          <Card>
  <Card.Header>Hey, Nice to see you</Card.Header>
  <Card.Body>
    <img src={company} alt="" style={{width:"400px",marginBottom:"30px"}} />
    <Card.Title>This is my remote desktop project</Card.Title>
    <Card.Text>
      you can click below link to move in my project
    </Card.Text>
    <Button variant="primary">
    <a href="https://remotedesktop.google.com">GO To RemoteDesktop</a>
    </Button>
  </Card.Body>
  <Card.Body>
    <img src={company} alt="" style={{width:"400px",marginBottom:"30px"}} />
    <Card.Title>This is my remote desktop project</Card.Title>
    <Card.Text>
      you can click below link to move in my project
    </Card.Text>
    <Button variant="primary">
    <a href="https://remotedesktop.google.com">GO To RemoteDesktop</a>
    </Button>
  </Card.Body>
  <Card.Body>
    <img src={company} alt="" style={{width:"400px",marginBottom:"30px"}} />
    <Card.Title>This is my remote desktop project</Card.Title>
    <Card.Text>
      you can click below link to move in my project
    </Card.Text>
    <Button variant="primary">
    <a href="https://remotedesktop.google.com">GO To RemoteDesktop</a>
    </Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Main
