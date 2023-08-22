import Fuse from "fuse.js";

const useSearch = () => {
  return (keyword, sakeList) => {
    const fuseOptions = {
      includeScore: false,
      shouldSort: true,
      minMatchCharLength: 1,
      fieldNormWeight: 1,
      keys: ["area", "maker", "name"],
      // isCaseSensitive: false,
      // includeMatches: false,
      // findAllMatches: false,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
    };
    const fuse = new Fuse(sakeList, fuseOptions);
    let searchResult = fuse.search(keyword);
    searchResult = searchResult.map((row) => row.item);
    return searchResult;
  };
};

export default useSearch;
