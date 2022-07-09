import { 
  useCallback, 
  useState 
} from "react";

import { 
  httpPowerOn, 
  httpPowerOff 
} from "./requests";

function usePower(onSuccessSound, onFailureSound) {
  const [isPendingPowerOn, setPendingPowerOn] = useState(false);
  const [isPendingPowerOff, setPendingPowerOff] = useState(false);

  const submitPowerOn = useCallback(async (e) => {
    e.preventDefault();
    setPendingPowerOn(true);
    const data = { "data": "1" };
    const response = await httpPowerOn(data);

    const success = response.ok;
    if (success) {
      setTimeout(() => {
        setPendingPowerOn(false);
        onSuccessSound();
      }, 800);
    } else {
      onFailureSound();
    }
  }, [onSuccessSound, onFailureSound]);

  const submitPowerOff = useCallback(async (e) => {
    e.preventDefault();
    setPendingPowerOff(true);
    const data = { "data": "0" };
    const response = await httpPowerOff(data);

    const success = response.ok;
    if (success) {
      setTimeout(() => {
        setPendingPowerOff(false);
        onSuccessSound();
      }, 800);
    } else {
      onFailureSound();
    }
  }, [onSuccessSound, onFailureSound]);

  return {
    isPendingPowerOn,
    isPendingPowerOff,
    submitPowerOn,
    submitPowerOff,
  };
}

export default usePower;