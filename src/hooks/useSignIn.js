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
    
    if (response) {
      setTimeout(() => {
        setPendingSignIn(false);
        onSuccessSound();
      }, 800);      
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