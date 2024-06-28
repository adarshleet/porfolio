import Heading from "@/components/about/Heading";
import More from "@/components/about/More";
import Page from "components/utility/Page";
import Projects from "components/about/About";
import React from "react";

function designs() {
  return (
    <Page
      currentPage="About"
      meta={{ desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default designs;
