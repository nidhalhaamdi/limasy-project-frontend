import { useCallback, useState } from "react";

function useSignOut(onSuccessSound) {
  const [isPendingSignOut, setPendingSignOut] = useState(false);

  const submitSignOut = useCallback(() => {
    setPendingSignOut(true);

    setTimeout(() => {
      setPendingSignOut(false);
      onSuccessSound();
    }, 800);

    localStorage.removeItem("token");
  }, [onSuccessSound]);

  return {
    isPendingSignOut,
    submitSignOut,
  };
}

export default useSignOut;