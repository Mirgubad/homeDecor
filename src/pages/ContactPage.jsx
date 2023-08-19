import React from "react";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import Contact from "../components/Contact";

const ContactPage = () => {
  useSetPageTitle("Contact");
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
