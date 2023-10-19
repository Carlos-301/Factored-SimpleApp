import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

    function handleUserChange(e) {
      setFormValues({...formValues ,email: e.target.value});
      if (!e.target.value.includes("@") && !e.target.value.includes(".")){
        paintRed('formUser')
      }
      else{
        document.getElementById('formUser').style.borderColor = 'green';
        document.getElementById('formUser').style.borderBlockColor = 'green';
      }
    }

    const handlePasswordChange = ((e) => { 
      setFormValues({...formValues, password: e.target.value})
      if (!(formValues.password.length > 8) ){
        paintRed('formBasicPassword')
      }
      else{
        document.getElementById('formBasicPassword').style.borderColor = 'green';
        document.getElementById('formBasicPassword').style.borderBlockColor = 'green';
      }
      });
   
  const [state,setState] = useState(0);

  const validationStates = (() => {
    const emailState = formValues.email.includes("@") && formValues.email.includes(".")
    if (emailState ){
        setState(1)
        }
    if (!emailState )
    {
        paintRed('formUser')
    }        ;
    return {emailState}
    })


    const paintRed = ((e) => {
      document.getElementById(e).style.borderColor = 'red';
      document.getElementById(e).style.borderBlockColor = 'red';
    })

    const showHome = (() => {
      const passwordState = formValues.password.length > 8
      console.log(passwordState)
      if (passwordState){
        navigate("/home")
      }
    })

  return(
    <div>
      {state === 0 ?(
        <Container> 
        <h1>Acceder</h1>
        <Form>
        <Form.Group className="mb-6" controlId="formUser">
        <Form.Control type="user" placeholder="Enter username"
        onChange={handleUserChange} value={formValues.email}/>
        </Form.Group>
        <Container>
          <Row>
            <Col> 
            Crear cuenta
            </Col>
            <Col> 
            <p> Olvidaste el correo electronico? </p>
            </Col>
          </Row> 
          </Container>
        
        <Button variant="primary" onClick={validationStates}>
          Siguiente
        </Button>
        </Form>
    </Container>
) : (
  <Form>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label >{formValues.email}</Form.Label>
    <Form.Control type="password" placeholder="Password"
    onChange={ handlePasswordChange} value={formValues.password} />
    { <Form.Text
    className="text-muted">Your password should be have numbers and letters and
    should be at least 9 char long </Form.Text>}
    </Form.Group>

    <Button variant="primary" onClick={showHome}>
      Acceder
    </Button>
    </Form>

      ) 
      }
      
      </div>
        
  )

}

export default Login;
