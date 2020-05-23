import React from "react";
import { SearchResultListItem } from "@code4ro/taskforce-fe-components";
import PropTypes from "prop-types";
import Fuse from "fuse.js";
import "./styles.scss";

const SearchResults = ({ query, data = [], readMore }) => {
  /**
   * remove diacritics and turn all to lowercase
   */
  const normalize = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const docs = data[0].accordion.map((accordion) => {
    return {
      fullSlug: `/${data[0].slug}/${accordion.slug}`,
      title: accordion.title,
      searchText: accordion.content,
    };
  });

  // set the threshold based on the number of words in the query.
  // multiple words should generate a fuzzier search
  let threshold;
  const words = query.split(" ").length;
  switch (words) {
    case 1:
      threshold = 0.2;
      break;
    case 2:
      threshold = 0.4;
      break;
    default:
      threshold = 0.5;
  }

  const options = {
    shouldSort: true,
    threshold,
    distance: 100000,
    minMatchCharLength: 1,
    keys: ["title", "searchText"],
  };

  const searchQuery = normalize(query);
  const fuse = new Fuse(docs, options);
  const results = fuse.search(searchQuery);

  return (
    <div className="search-results-container">
      <h1 className="results-description">
        Rezultatele căutării pentru {`"${query}"`}:
      </h1>
      {results.map(({ item: doc }) => {
        return (
          <div className="list-item" key={doc.title}>
            <SearchResultListItem title={doc.title}>
              <span
                className="read-more"
                onClick={() => readMore(doc.fullSlug)}
              >
                Citește mai mult
              </span>
            </SearchResultListItem>
          </div>
        );
      })}
    </div>
  );
};

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  readMore: PropTypes.func,
};

export default SearchResults;
