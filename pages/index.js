import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/cat/1");
  }, []);
  return <div className="container"></div>;
};

export default Home;
