import Fuse from "fuse.js";

const useSearch = () => {
  return (keyword, sakeList) => {
    const fuseOptions = {
      // isCaseSensitive: false,
      includeScore: false,
      shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      fieldNormWeight: 2,
      keys: ["area", "brewery_name", "name"],
    };
    const fuse = new Fuse(sakeList, fuseOptions);
    let searchResult = fuse.search(keyword);
    searchResult = searchResult.map(row=>row.item);
    return searchResult;
  };
};

export default useSearch;
