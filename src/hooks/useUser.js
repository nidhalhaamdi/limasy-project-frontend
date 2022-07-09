import { useCallback, useEffect, useState } from "react";

import {
  httpGetUser,
} from './requests';

function useUser() {
  const [user, setUser] = useState({});

  const getUser = useCallback(async () => {
    const response = await httpGetUser();
    setUser(response.user);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return {
    user
  };
}

export default useUser;