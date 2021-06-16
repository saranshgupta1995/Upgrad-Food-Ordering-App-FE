const BASE = "https://jsonplaceholder.typicode.com/api";
// todos/1

const DEV_ENV = "dev";

const ENV = "";

const GET_CACHE = {};

const MOCKS = {};

if (ENV === DEV_ENV) {
}

const apiGet = url => fetch(url).then(resStream => resStream.json());

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
  }
};

export const post = {
  login: data => {
    return fetch.post(`${BASE}/restaurant/name`);
  },
  signup: data => {
    return apiPost(`${BASE}/customer/signup`, data);
  }
};
