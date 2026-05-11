import Image from "next/image";
import Navbar from "./Components/Navbar";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

export default function Home() {
  return (
    <div>
   <Navbar/>
   <Banner/>
   <Category/>
    </div>
  );
}
