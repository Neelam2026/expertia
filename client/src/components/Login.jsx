
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


export const Login=()=>{
   const emailRef = useRef();
   const passwordRef = useRef();
   const { login } = useAuth();
   const [error, setError] = useState("");
   const navigate = useNavigate();

   async function handleSubmit(e) {
      e.preventDefault();
      try {
         setError("");
         await login(emailRef.current.value, passwordRef.current.value);
         navigate("/");
      } catch (e) {
         console.log({ e });
         setError(e.message);
      }
   }

   const [values, setValues] = React.useState({
      password: "",
      showPassword: false,
   });


   return (
    <div style={{paddingTop:"6%"}}>
      <div
         style={{
            width: "30%",
            margin: "auto",
            padding:"3%",
            borderRadius:"2%",
           boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
           
          
         }}
      >
        

         {/*Bootstrap  */}
         <Container style={{marginTop:"9%"}}>
         
            <Card>
               {/* <h2>Log In</h2> */}
               {error && <Alert variant="danger">{error}</Alert>}

               <Card.Body>
              
                  <h2 className="text-center mb-4" >Log In</h2>
                  <Form onSubmit={handleSubmit}>
                     <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                     </Form.Group>
                     <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           type="password"
                           ref={passwordRef}
                           required
                        />
                     </Form.Group>
                     <Button
                        className="w-100"
                        type="submit"
                        style={{
                           backgroundColor: "rgb(12, 70, 70)",
                           border: "none",
                           marginTop: "5%"
                        }}
                     >
                        Log In
                     </Button>
                  </Form>
               </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
               Need an account? <Link to="/register">Sign Up</Link>
            </div>
         </Container>
      </div>
      </div>
   );
}
