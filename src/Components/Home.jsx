import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Footer from "./Footer";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Home;
