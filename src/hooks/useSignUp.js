import { useCallback, useState } from "react";

import {
  httpSubmitSignUp,
} from './requests';

function useSignUp(onSuccessSound, onFailureSound) {
  const [isPendingSignUp, setPendingSignUp] = useState(false);

  const submitSignUp = useCallback(async (e) => {
    e.preventDefault();
    setPendingSignUp(true);

    const formData = new FormData(e.target);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");

    const data = {
        firstName,
        lastName,
        email,
        password,
    };

    const response = await httpSubmitSignUp(data);

    if (response) {
      setTimeout(() => {
        setPendingSignUp(false);
        onSuccessSound();
      }, 800);
    } else {
      onFailureSound();
    }
  }, [onSuccessSound, onFailureSound]);

  return {
    isPendingSignUp,
    submitSignUp,
  };
}

export default useSignUp;