import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <StyledMainHeader>
        <Header pageTitle="iRepeat" />
      </StyledMainHeader>
      <div>
        <p>Work in progress...</p>
      </div>
      <Navbar />
    </>
  );
}
const StyledMainHeader = styled.div`
  &::first-letter {
    color: #70abaf;
  }
`;
