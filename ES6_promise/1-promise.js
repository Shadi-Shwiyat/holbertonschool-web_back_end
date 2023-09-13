export default function getFullResponseFromAPI(boolean) {
  const myPromise = new Promise((resolve, reject) => {
    if (boolean === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return myPromise;
}
