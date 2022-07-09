import { useCallback, useState } from "react";

import {
  httpSubmitSignIn,
} from './requests';

function useSignIn(onSuccessSound, onFailureSound) {
  const [isPendingSignIn, setPendingSignIn] = useState(false);

  const submitSignIn = useCallback(async (e) => {
    e.preventDefault();
    setPendingSignIn(true);

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const data = {
      email,
      password,
    };

    const response = await httpSubmitSignIn(data);

    const success = response.ok;
    if (success) {
      setTimeout(() => {
        setPendingSignIn(false);
        onSuccessSound();
      }, 800);
      localStorage.setItem("token", response.token);
    } else {
      onFailureSound();
    }
  }, [onSuccessSound, onFailureSound]);

  return {
    isPendingSignIn,
    submitSignIn,
  };
}

export default useSignIn;