import {
  useSession,
  signIn,
  signOut,
  getSession,
  getCsrfToken,
} from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import HomeLayout from "../../layouts/HomeLayout";

const Registration = ({ csrfToken }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const { data: session } = useSession();
  const router = useRouter();

  const signupUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    let data = await res.json();
    if (data.message) {
      setMessage(data.message);
    }
    if (data.message === "Registered successfully") {
      let options = { redirect: false, name, email, password };
      const res = await signIn("credentials", options);
      return router.push("/account");
    }
  };

  return (
    <HomeLayout>
      <div className="container my-20 text-center">
        <h1 className="text-4xl mb-20">Registration</h1>
        <form action="" className="flex flex-col gap-5 w-64 sm:w-96 mx-auto">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <input
            className="border-2 border-gray-three px-2 py-3 text-base rounded-md"
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-2 border-gray-three px-2 py-3 text-base rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-2 border-gray-three px-2 py-3 text-base rounded-md"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500">{message}</p>
          <button
            className="bg-green-two px-3 text-base py-2 mt-3 rounded-md text-white"
            onClick={(e) => signupUser(e)}
          >
            Sign Up
          </button>

          <Link href={"/login"}>Already have an account ? Sign in</Link>
        </form>
      </div>
    </HomeLayout>
  );
};

export default Registration;
