import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href="#home" key = "homelink">home</a>
    <a href="#about" key = "aboutlink">about</a>
    <a href="#projects" key = "projectslink">projects</a>
             </nav>;
}

export default NavBar;
