import React from "react";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const {documents: posts} = useFetchDocuments("posts");

  return (
    <div>
        <h2>Search</h2>
        <p>{search}</p>
    </div>
  );
};

export default Search;