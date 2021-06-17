const BASE = "http://localhost:8080/api";

const DEV_ENV = "dev";

const ENV = "";

const GET_CACHE = {};

const MOCKS = {};

if (ENV === DEV_ENV) {
}

const apiGet = url => fetch(BASE+url,{
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache"
  }
}).then(resStream => resStream.json());

const apiPost = (url, data) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  });

export const get = {
  findRestaurentByName: name => {
    return fetch(`${BASE}/restaurant/name/${name}`).then(responseStream =>
      responseStream.json().then(data => {
        return data;
      })
    );
  },
  allPaymentMethods: () => apiGet('/payment'),
  allRestaurants: () => apiGet('/restaurant'),
};

export const post = {
  login: data => {
    return apiPost("customer/login");
  },
  signup: data => {
    return apiPost(`${BASE}/customer/signup`, data);
  }
};
