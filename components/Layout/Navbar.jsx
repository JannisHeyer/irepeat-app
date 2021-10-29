import styled from "styled-components";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <p>Main</p>
            </Link>
          </li>
          <li>
            <Link href="/createCard">
              <p>Add Cards</p>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <p>Categories</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
