const API_URL = '/api';

async function httpSubmitSignUp(data) {
  try {
    return await fetch(`${API_URL}/user/signup`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  } catch (err) {
    return {
      ok: false
    };
  }  
}

async function httpSubmitSignIn(data) {
  try {
    return await fetch(`${API_URL}/user/signin`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  } catch (err) {
    return {
      ok: false
    };
  }  
}

async function httpGetUser() {
  try {
    return await fetch(`${API_URL}/user/profile`, {
      headers: {
        "Authorization": localStorage.getItem("token"),
      }
    });
  } catch (err) {
    return {
      ok: false
    };
  }
}

async function httpGetCurrents() {
  const response = await fetch(`${API_URL}/current`);
  return await response.json();
}

async function httpPowerOn(data) {
  try {
    return await fetch(`${API_URL}/power`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  } catch (err) {
    return {
      ok: false
    };
  }
}

async function httpPowerOff(data) {
  try {
    return await fetch(`${API_URL}/power`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  } catch (err) {
    return {
      ok: false
    };
  }
}

export {
  httpSubmitSignUp,
  httpSubmitSignIn,
  httpGetUser,
  httpGetCurrents,
  httpPowerOn,
  httpPowerOff,
};