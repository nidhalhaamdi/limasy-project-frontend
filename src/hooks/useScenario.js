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
  
  function useScenario(onSuccessSound, onFailureSound) {
    const [isPendingScenario1, setPendingScenario1] = useState(false);
  
    const submitScenario1 = useCallback(async (e) => {
      e.preventDefault();
      setPendingScenario1(true);
      
      const data = { "data": "1" };
      await httpPowerOnLine1(data);
      await httpPowerOnLine2(data);
      const response = await httpPowerOnLine3(data);
  
      const success = response.ok;
      if (success) {
        setTimeout(() => {
          setPendingScenario1(false);
          onSuccessSound();
        }, 800);
      } else {
        onFailureSound();
      }

      setTimeout(async () => {
        const data = { "data": "0" };
        await httpPowerOffLine2(data);
      }, 1000*10);

      setTimeout(async () => {
        const data = { "data": "0" };
        await httpPowerOffLine3(data);
      }, 1000*20);

      setTimeout(async () => {
        const data = { "data": "0" };
        await httpPowerOffLine1(data);
      }, 1000*30);

    }, [onSuccessSound, onFailureSound]);
  
    return {
      isPendingScenario1,
      submitScenario1,
    };
  }
  
  export default useScenario;