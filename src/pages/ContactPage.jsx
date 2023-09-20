import { useSetPageTitle } from "../hooks/useSetPageTitle";
import Contact from "../components/Contact";
import React from "react";

const ContactPage = () => {
  useSetPageTitle("Contact");
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
