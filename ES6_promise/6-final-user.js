import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const responseArray = [];

  try {
    await signUpUser(firstName, lastName)
      .then(async (response) => {
        responseArray.push({ status: 'fulfilled', value: response });
        await uploadPhoto(fileName);
      });
  } catch (error) {
    responseArray.push({ status: 'rejected', value: error.toString() });
  }
  return responseArray;
}
