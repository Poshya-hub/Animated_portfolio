import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/";
import "./index.scss";
import './bg.css';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <span className="tags top-tags">&lt;body&gt;</span>
        <span className="tags bottom-tags">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
