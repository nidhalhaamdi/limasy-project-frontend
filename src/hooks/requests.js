const API_URL = '/api';

// USER

async function httpSubmitSignUp(data) {
  try {
    const response =  await fetch(`${API_URL}/user/signup`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const res = await response.json();
    localStorage.setItem("token", res.token);
    return await res;
  } catch (err) {
    return {
      ok: false
    };
  }  
}

async function httpSubmitSignIn(data) {
  try {
    const response = await fetch(`${API_URL}/user/signin`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const res = await response.json();
    localStorage.setItem("token", res.token);
    return await res;
  } catch (err) {
    return {
      ok: false
    };
  }  
}

async function httpGetUser() {
  try {
    const response = await fetch(`${API_URL}/user/profile`, {
      headers: {
        "Authorization": localStorage.getItem("token"),
      }
    });
    const res = response.json();
    return res.user;
  } catch (err) {
    return {
      ok: false
    };
  }
}

// CURRENT

async function httpGetCurrents() {
  const response = await fetch(`${API_URL}/current`);
  return await response.json();
}

// POWER

async function httpPowerOnLine1(data) {
  try {
    return await fetch(`${API_URL}/power/line1`, {
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

async function httpPowerOffLine1(data) {
  try {
    return await fetch(`${API_URL}/power/line1`, {
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

async function httpPowerOnLine2(data) {
  try {
    return await fetch(`${API_URL}/power/line2`, {
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

async function httpPowerOffLine2(data) {
  try {
    return await fetch(`${API_URL}/power/line2`, {
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

async function httpPowerOnLine3(data) {
  try {
    return await fetch(`${API_URL}/power/line3`, {
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

async function httpPowerOffLine3(data) {
  try {
    return await fetch(`${API_URL}/power/line3`, {
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
  httpPowerOnLine1,
  httpPowerOffLine1,
  httpPowerOnLine2,
  httpPowerOffLine2,
  httpPowerOnLine3,
  httpPowerOffLine3,
};