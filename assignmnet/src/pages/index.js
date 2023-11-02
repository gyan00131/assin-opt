import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  const redirectToAccountPage = () => {
    router.push("/account");
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={redirectToAccountPage}>Go to Account Page</button>
    </div>
  );
};

export default HomePage;
