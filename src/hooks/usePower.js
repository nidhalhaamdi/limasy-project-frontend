import { 
  useCallback, 
  useState 
} from "react";

import { 
  httpPowerOnLine1, 
  httpPowerOffLine1 ,
  httpPowerOnLine2, 
  httpPowerOffLine2,
  httpPowerOnLine3, 
  httpPowerOffLine3,
} from "./requests";

function usePower(onSuccessSound, onFailureSound) {
  const [isPendingPowerOn1, setPendingPowerOn1] = useState(false);
  const [isPendingPowerOff1, setPendingPowerOff1] = useState(false);

  const [isPendingPowerOn2, setPendingPowerOn2] = useState(false);
  const [isPendingPowerOff2, setPendingPowerOff2] = useState(false);

  const [isPendingPowerOn3, setPendingPowerOn3] = useState(false);
  const [isPendingPowerOff3, setPendingPowerOff3] = useState(false);

  const submitPowerOnLine1 = useCallback(async (e) => {
    e.preventDefault();
    setPendingPowerOn1(true);
    const data = { "data": "1" };
    const response = await httpPowerOnLine1(data);

    const success = response.ok;
    if (success) {
      setTimeout(() => {
        setPendingPowerOn1(false);
        onSuccessSound();
      }, 800);
    } else {
      onFailureSound();
    }
  }, [onSuccessSound, onFailureSound]);

  const submitPowerOffLine1 = useCallback(async (e) => {
    e.preventDefault();
    setPendingPowerOff1(true);
    const data = { "data": "0" };
    const response = await httpPowerOffLine1(data);

    const success = response.ok;
    if (success) {
      setTimeout(() => {
        setPendingPowerOff1(false);
        onSuccessSound();
      }, 800);
    } else {
      onFailureSound();
    }
  }, [onSuccessSound, onFailureSound]);

  const submitPowerOnLine2 = useCallback(async (e) => {
    e.preventDefault();
    setPendingPowerOn2(true);
    const data = { "data": "1" };
    const response = await httpPowerOnLine2(data);

    const success = response.ok;
    if (success) {
      setTimeout(() => {
        setPendingPowerOn2(false);
        onSuccessSound();
      }, 800);
    } else {
      onFailureSound();
    }
  }, [onSuccessSound, onFailureSound]);

  const submitPowerOffLine2 = useCallback(async (e) => {
    e.preventDefault();
    setPendingPowerOff2(true);
    const data = { "data": "0" };
    const response = await httpPowerOffLine2(data);

    const success = response.ok;
    if (success) {
      setTimeout(() => {
        setPendingPowerOff2(false);
        onSuccessSound();
      }, 800);
    } else {
      onFailureSound();
    }
  }, [onSuccessSound, onFailureSound]);

  const submitPowerOnLine3 = useCallback(async (e) => {
    e.preventDefault();
    setPendingPowerOn3(true);
    const data = { "data": "1" };
    const response = await httpPowerOnLine3(data);

    const success = response.ok;
    if (success) {
      setTimeout(() => {
        setPendingPowerOn3(false);
        onSuccessSound();
      }, 800);
    } else {
      onFailureSound();
    }
  }, [onSuccessSound, onFailureSound]);

  const submitPowerOffLine3 = useCallback(async (e) => {
    e.preventDefault();
    setPendingPowerOff3(true);
    const data = { "data": "0" };
    const response = await httpPowerOffLine3(data);

    const success = response.ok;
    if (success) {
      setTimeout(() => {
        setPendingPowerOff3(false);
        onSuccessSound();
      }, 800);
    } else {
      onFailureSound();
    }
  }, [onSuccessSound, onFailureSound]);

  return {
    isPendingPowerOn1,
    isPendingPowerOff1,
    isPendingPowerOn2,
    isPendingPowerOff2,
    isPendingPowerOn3,
    isPendingPowerOff3,
    submitPowerOnLine1,
    submitPowerOffLine1,
    submitPowerOnLine2,
    submitPowerOffLine2,
    submitPowerOnLine3,
    submitPowerOffLine3,
  };
}

export default usePower;