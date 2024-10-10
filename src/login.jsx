
import { Container, FloatingLabel, Form, Row,Col,Button } from "react-bootstrap";


export default function Login(){
    return(
        <>
          <Container>
            <Row className="justify-content-center">
                <Col lg={12}>
                <h1 className="text-center text-info">Login Here!</h1>
                </Col>
                
             
                <Col lg={12} className="p-3">
                <FloatingLabel label="Email" className="m-3">
                    <Form.Control name="email" type="email" placeholder="your emailid"/>
                </FloatingLabel>
                </Col>
                <Col lg={12} className="p-3">
                <FloatingLabel label="Password" className="m-3">
                    <Form.Control name="password" type="password" placeholder="your password"/>
                </FloatingLabel>
                </Col>
                <Col lg={12} className="mt-3 p-3" align="center">
                <Button variant="success">
                  Login
                </Button>
                </Col>
            </Row>
            </Container>
        
        </>
    )
}