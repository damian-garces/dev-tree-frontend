import { Link } from "react-router-dom";
import { useForm } from  'react-hook-form'
import ErrorMessage from "../components/ErrorMessage";
import type { RegisterFormData } from "../types";
import axios, { isAxiosError } from "axios";

export default function Register() {

  const initialValues :  RegisterFormData = {
    name: '',
    email: '',
    handle: '',
    password: '',
    password_confirmation: '',
  };


  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: initialValues
  });

  const password = watch('password');

  const handleRegister = async (formData: RegisterFormData) => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, formData);
      console.log('Registration successful:', data);
      reset();
    } catch (error) {
      if (isAxiosError(error)) {
        console.error('Registration error:', error.response?.data.error || error.message);
      }
    }
  }

  return (
    <>
      <h1 className="text-white text-4xl font-bold">Create Account</h1>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="name" className="text-2xl text-slate-500">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("name", { required: "The name is required" })}
          />

          {
            errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>
          }
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", { 
              required: "The email is required",
              pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
              } 
            })}
          />

          {
            errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>
          }
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="handle" className="text-2xl text-slate-500">
            Handle
          </label>
          <input
            id="handle"
            type="text"
            placeholder="Your Handle"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("handle", { required: "The handle is required" })}
          />

          {
            errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>
          }
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Your Password"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", { 
              required: "The password is required",
              minLength: { value: 8, message: "The password must be at least 8 characters long" }
            })}
          />

          {
            errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>
          }
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label
            htmlFor="password_confirmation"
            className="text-2xl text-slate-500"
          >
            Repetir Password
          </label>
          <input
            id="password_confirmation"
            type="password"
            placeholder="Repeat Your Password"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password_confirmation", { 
              required: "The password confirmation is required",
              validate: (value) => value === password || "The passwords do not match"
            })}
          />

          {
            errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          }
        </div>

        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Crear Cuenta"
        />
      </form>

      <nav className="mt-10">
        <Link className="text-center text-white text-lg block" to="/auth/login">
          Go to Login
        </Link>
      </nav>
    </>
  );
}
