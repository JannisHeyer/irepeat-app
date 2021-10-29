import { Navbar } from "./navbar";
import { Header } from "./Header";

export const Layout = (props) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <main>{props.children}</main>
        <Navbar />
      </div>
    </>
  );
};
export default Layout;
