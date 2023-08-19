import React, { useEffect, useState } from "react";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import SectionTop from "../components/SectionTop";
import Collections from "../components/Collections";
import CategoryElement from "../components/CategoryElement";
import SectionTopBottom from "../components/SectionTopBottom";

const CollectionsPage = () => {
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    const response = await fetch("http://localhost:3000/collections");
    const result = await response.json();
    setCollections(result);
  };
  useEffect(() => {
    getCollections();
  }, []);
  useSetPageTitle("Collections");
  return (
    <main>
      <div className="container">
        <SectionTop title="Collections" />
        <SectionTopBottom>
          <p style={{ maxWidth: "56rem" }}>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime.
          </p>
        </SectionTopBottom>
        <Collections>
          {collections &&
            collections.map((collection) => (
              <CategoryElement key={collection.id} {...collection} />
            ))}
        </Collections>
      </div>
    </main>
  );
};

export default CollectionsPage;
