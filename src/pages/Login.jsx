import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const submit = (data) =>{
        
    console.log(data)
     axios
         .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login",data)
         .then(resp => {
            localStorage.setItem("token", resp.data.token)
            navigate("/")
         })
         .catch(error =>{
            console.error(error)
            if(error.response.status === 401){
                alert("Necesitas estar registrado")
            }
         })
  }

  return (
    <main className="login_container">
      <Form onSubmit={ handleSubmit(submit)}>
        <Form.Group className="mb-3" style={{display:"flex",flexDirection:"column",gap:"1rem"}} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email"
           placeholder="Enter email" 
           {...register("email")}
           />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            {...register("password")}
            />
          </Form.Group>
        </Form.Group>
        <Button type="submit" style={{width:"70%",display:"flex",justifyContent:"center",alignItems:"center"}}>Enviar</Button>
      </Form>
    </main>
  );
};
export default Login;
