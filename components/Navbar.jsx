import styled from "styled-components";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Main</a>
            </Link>
          </li>
          <li>
            <Link href="/createCard">
              <a>Add Cards</a>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <a>Categories</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
