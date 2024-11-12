import Link from "next/link";
import "../style/header.css";

function Header() {
  return (
    <div className="header">
      {/*left */}
      <div>
        <h1 className="logo">RZ</h1>
      </div>
      {/*right */}
      <div className="header-right-div">
        <ul className="header-links">
            <li>
                <Link className="nav-link" href={"/"}>Home</Link>
            </li>
            <li>
                <Link  className="nav-link" href={"/about"}>About</Link>
            </li>
            <li>
                <Link className="nav-link" href={"/contact"}>Contact</Link>
            </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
