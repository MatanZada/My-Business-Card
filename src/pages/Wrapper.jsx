import React from "react";
import ProfileImg from "../components/ProfileImg";
import Details from "../components/Details";
import ButtonLink from "../components/ButtonLink";
import About from "../components/About";
import FooterIcon from "../components/FooterIcon";

export default function Wrapper() {
  return (
    <div>
      <ProfileImg />
      <Details />
      <ButtonLink />
      <About />
      <FooterIcon />
    </div>
  );
}
