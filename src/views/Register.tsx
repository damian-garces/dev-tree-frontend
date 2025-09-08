import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <h1 className="text-white text-4xl font-bold">Create Account</h1>

      <nav className="mt-10">
          <Link className="text-center text-white text-lg block"
            to="/auth/login">
              Go to Login
          </Link>
      </nav>
    </>
  );
}