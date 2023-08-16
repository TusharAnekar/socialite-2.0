import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import "./pageWrapper.css"

export function PageWrapper({ children }) {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="cont-1">
        <div>{children}</div>
        <Navbar />
      </div>
    </div>
  );
}
