import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const AccountDetails = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(data.url);
  };
  if (session) {
    return (
      <div className="container my-20 flex flex-col justify-center">
        <h1 className="text-3xl text-center">Welcome To Bengal Shop</h1>
        <p className="text-center text-lg mt-5">{session.user.name}</p>
        <button
          className="bg-green-two px-4 py-2 text-white w-48 mx-auto mt-10"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div className="container my-20 flex flex-col justify-center">
      <h1 className="text-3xl text-center">You have to sign in first</h1>
      <button
        className="bg-green-two px-4 py-2 text-white w-48 mx-auto mt-10"
        onClick={() => router.push("/login")}
      >
        Sign In
      </button>
    </div>
  );
};

export default AccountDetails;
