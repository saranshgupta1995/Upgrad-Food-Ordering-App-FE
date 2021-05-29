const BASE = "https://jsonplaceholder.typicode.com/api";
// todos/1

const DEV_ENV = "dev";

const ENV = "";

const GET_CACHE = {};

const MOCKS = {};

if (ENV === DEV_ENV) {
}

export const get = {
  findRestaurentByName: name => {
    return fetch(`${BASE}/restaurant/name/${name}`).then(responseStream =>
      responseStream.json().then(data => {
        return data;
      })
    );
  }
};
