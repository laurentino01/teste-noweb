import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/appRoutes";
import { Header } from "./page/home/header/Header";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};
