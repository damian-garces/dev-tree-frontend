import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1 className="text-white text-4xl font-bold">Login</h1>
      
      <nav className="mt-10">
          <Link className="text-center text-white text-lg block"
            to="/auth/register">Go to Register
          </Link>
      </nav>
    </>
  );
}