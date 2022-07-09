import { useCallback, useEffect, useState } from "react";

import { httpGetCurrents } from "./requests";

function useCurrent() {
  const [currents, setCurrents] = useState([]);

  const getCurrents = useCallback(async () => {
    const fetchedCurrents = await httpGetCurrents();
    fetchedCurrents.reverse();
    setCurrents(fetchedCurrents);
  }, []);

  useEffect(() => {
    getCurrents();
  }, [getCurrents]);

  return {
    currents
  };
}

export default useCurrent;