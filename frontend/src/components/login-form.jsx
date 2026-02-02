import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';
import { CircleCheck } from 'lucide-react'

export function LoginForm({
  className,
  ...props
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const data = {email, password};
  
  const handleSubmit = async (e)=> {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, data);

      if(res.status === 200){ 
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("name", res.data.name);
        setSuccess("Login successful");
        toast.success("Welcome to dashboard", {
          duration: 4000,
          position: 'top-right',
        })
        navigate("/admin-dashboard");
      }
      
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Invalid Credentials");
      toast.error("Invalid Credentials", {
        duration: 4000,
        position: 'top-right',
      })
      setLoading(false);
    };
  }


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-1">
            <img src="/basc-logo.png" alt="" className="w-10"/>
            <div className="flex flex-col">
               <CardTitle >Login to your account </CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </div>
          </div>
          
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} autoComplete="off">
            {error !== "" && (
              <div className="mb-4 text-sm text-red-600">
                {error}
              </div>
            )}
            {success !== "" && (
              <div className="mb-4 text-sm text-green-600">
                {success}
              </div>
            )}
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email<span className="text-red-600">*</span></FieldLabel>
                <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password<span className="text-red-600">*</span></FieldLabel>
                  {/* <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a> */}
                </div>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              </Field>
              <Field>
                <Button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to="/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
