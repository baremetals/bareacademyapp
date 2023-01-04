import React from "react";
import { Entities } from 'types';
// import { Entities } from "src/types";

export interface SearchEntity {
  searchValue: string;
  entities: Entities[];
  setFilteredEntities: React.Dispatch<React.SetStateAction<Entities[]>>;
}

export const useSearch = ({
  searchValue,
  entities,
  setFilteredEntities,
}: SearchEntity) => {
  const handleSearch = async () => {
    if (searchValue !== "") {
      const filteredData = entities?.filter((ent) => {
        const entity = ent?.attributes as Entities;
        return Object.values(entity)
          .join(" ")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredEntities(filteredData);
    }
  };

  return handleSearch;
};
