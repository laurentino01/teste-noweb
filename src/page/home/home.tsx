import { Categories } from "./categories/Categories";
import { Hero } from "./hero/hero";
import { Products } from "./products/Products";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Categories />
    </div>
  );
};
