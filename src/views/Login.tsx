import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";
import type { LoginFormData } from "../types";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import axios from "../config/axios";

export default function Login() {

  const initialValues : LoginFormData = {
    email: '',
    password: '',
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValues
  });

  const handleLogin = async (formData: LoginFormData) => {
    try {
      const { data } = await axios.post('/auth/login', formData);
      toast.success(data);
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data || error.message);
      }
    }
  }

  return (
    <>
      <h1 className="text-white text-4xl font-bold">Login</h1>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
        noValidate
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: "The E-mail is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid E-mail format",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "The Password is required",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Iniciar Sesión"
        />
      </form>

      <nav className="mt-10">
        <Link
          className="text-center text-white text-lg block"
          to="/auth/register"
        >
          Go to Register
        </Link>
      </nav>
    </>
  );
}