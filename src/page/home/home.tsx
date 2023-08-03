import { About } from "./about/About";
import { Categories } from "./categories/Categories";
import { Hero } from "./hero/hero";
import { Products } from "./products/Products";
import { Telesales } from "./telesales/Telesales";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Categories />
      <About />
      <Telesales />
    </div>
  );
};
