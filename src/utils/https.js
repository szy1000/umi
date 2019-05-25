function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

// export default  class Https {
//   static async get(url, params = {}){
//     const response = await fetch(url, params);
//     checkStatus(response);
//     return await response.json();
//   }
// }

export default async function get(url, params = {}) {
  const response = await fetch(url, params);
  checkStatus(response);
  return await response.json();
}
