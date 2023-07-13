import { useState, useEffect } from "react";

const useCollectedSake = () => {
  const [collectedSake, setCollectedSake] = useState(new Set());

  const addSake = (sid) => {
    collectedSake.add(sid)
    window.localStorage.setItem(
      "collected_sake",
      JSON.stringify(Array.from(collectedSake))
    );
    console.log("ADD", sid)
  };

  const removeSake = (sid) => {
    collectedSake.delete(sid)
    window.localStorage.setItem(
      "collected_sake",
      JSON.stringify(Array.from(collectedSake))
    );
    console.log("REV", sid)
  };

  const getSake = () => window.localStorage.getItem("collected_sake");

  useEffect(() => {
    let collection = window.localStorage.getItem("collected_sake");
    if (collection) {
      let sakeArr = JSON.parse(collection);
      setCollectedSake(new Set([...sakeArr]));
    }
  }, []);
  return {
    getSake,
    addSake,
    removeSake,
  };
};

export default useCollectedSake;