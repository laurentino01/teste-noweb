import { About } from "./about/About";
import { Categories } from "./categories/Categories";
import { Footer } from "./footer/Footer";
import { Hero } from "./hero/hero";
import { Products } from "./products/Products";
import { Telesales } from "./telesales/Telesales";

//version 1.0.0
export const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Categories />
      <About />
      <Telesales />
      <Footer />
    </div>
  );
};
