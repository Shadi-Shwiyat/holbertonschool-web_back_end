import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let uploadPhotoResponse;

  uploadPhoto()
    .then((response) => {
      uploadPhotoResponse = response.body;
      return createUser();
    })
    .then((response) => {
      console.log(uploadPhotoResponse, response.firstName, response.lastName);
    })
    .catch(() => {
      console.error(new Error('Signup system offline'));
    });
}
