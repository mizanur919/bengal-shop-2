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
const LoginDetails = ({ csrfToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = async () => {
    const data = await signIn({ redirect: false, callbackUrl: "/" });
    router.push(data.url);
  };

  const signinUser = async (e) => {
    e.preventDefault();
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    if (res?.error) {
      return setMessage(res.error);
    } else {
      return router.push("/");
    }
  };

  // const signupUser = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("/api/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   let data = await res.json();
  //   if (data.message) {
  //     setMessage(data.message);
  //   }
  //   if (data.message === "Registered successfully") {
  //     let options = { redirect: false, email, password };
  //     const res = await signIn("credentials", options);
  //     //return router.push("/");
  //   }
  // };

  if (!session) {
    return (
      <div className="container my-20 text-center">
        <h1 className="text-4xl mb-20">Log In</h1>
        <form action="" className="flex flex-col gap-5 w-64 sm:w-96 mx-auto">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
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
            className="bg-green-two px-3 text-base py-2 mt-2 mb-4 rounded-sm text-white w-64 mx-auto"
            onClick={(e) => signinUser(e)}
          >
            Sign In
          </button>
        </form>
        <Link href={"/registration"}>New here ? Create a account</Link>
        <p className="mt-6 mb-3">or</p>
        <button
          className="bg-green-two px-4 py-2 text-white"
          onClick={() =>
            signIn("google", { redirect: false, callbackUrl: "/" })
          }
        >
          <span className="flex gap-5 items-center py-2 text-center">
            <AiFillGoogleCircle className="text-2xl" />
            Continue With Google
          </span>
        </button>
      </div>
    );
  }
  return (
    <div className="container my-10 text-center">
      <button
        className="bg-green-two px-4 py-2 text-white"
        onClick={() => router.push("/account")}
      >
        <span className="flex gap-5 items-center py-2 px-3">
          Go To Account
          <HiArrowNarrowRight className="text-2xl" />
        </span>
      </button>
    </div>
  );
};

export default LoginDetails;
