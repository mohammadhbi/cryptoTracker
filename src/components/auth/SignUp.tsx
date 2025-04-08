import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required").min(3, "Minimum 3 characters"),
  password: yup.string().required("Password is required").min(6, "Minimum 6 characters").max(12, "Maximum 12 characters"),
}).required();

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate(); 

  const onSubmit = async (data) => { 
    try {
      const response = await axios.post("http://localhost:3000/signup", data); 
      console.log(response.data.message); 
      navigate("/coins");
    } catch (error) {
      console.error("🟥 Error:", error);
      console.error("📦 Response:", error.response);
      
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" {...register("email")} placeholder="* Email Address *" />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input type="password" {...register("password")} placeholder="* Password *" /> {/* type="password" */}
        <p>{errors.password?.message}</p>
      </div>
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default SignUp;