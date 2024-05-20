import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext);
  return <div>This is home {auth.name}</div>;
};

export default Home;
