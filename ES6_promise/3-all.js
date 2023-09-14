import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhotoResponse, userResponse]) => {
      console.log(uploadPhotoResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(() => {
      console.error(new Error('Signup system offline'));
    });
}
