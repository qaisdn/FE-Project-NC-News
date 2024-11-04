import NavCSS from "../Components/styles/NavBar.module.css";
export default function Nav() {
  return (
    <nav>
      <ul className={NavCSS.navBarUl}>
        <li className={NavCSS.navBarLi}>
          <a href="/">Home</a>
          <a href="/articles">Articles</a>
        </li>
      </ul>
    </nav>
  );
}
