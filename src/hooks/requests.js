const API_URL = '/api';

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
    httpGetCurrents,
    httpPowerOn,
    httpPowerOff,
};