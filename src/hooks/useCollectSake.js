import { useState, useEffect } from "react";

const useCollectedSake = () => {
  const [collectedSake, setCollectedSake] = useState(new Set());

  const addSake = (sid) => {
    let list = collectedSake.add(sid)
    window.localStorage.setItem(
      "collected_sake",
      JSON.stringify(Array.from(list))
    );
    console.log("ADD", sid)
  };

  const removeSake = (sid) => {
    let list = collectedSake.delete(sid)
    window.localStorage.setItem(
      "collected_sake",
      JSON.stringify(Array.from(list))
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