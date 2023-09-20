import { useGetAllCollectionsQuery } from "../services/collections";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import CategoryElement from "../components/CategoryElement";
import Collections from "../components/Collections";
import Loader from "../components/Loader";
import React from "react";
import SectionTop from "../components/SectionTop";
import SectionTopBottom from "../components/SectionTopBottom";

const CollectionsPage = () => {
  const { data: collections, isLoading } = useGetAllCollectionsQuery();

  useSetPageTitle("Collections");
  return isLoading || !collections ? (
    <Loader />
  ) : (
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
              <CategoryElement
                type="collections"
                key={collection.id}
                {...collection}
              />
            ))}
        </Collections>
      </div>
    </main>
  );
};

export default CollectionsPage;
