import firebase from './Firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const profilePictures = getStorage(firebase)

export async function uploadImage(pfpUri, uid) {

    const response = await fetch(pfpUri)
    let blob = await response.blob()

    console.log('check')

    const storageRef = ref(profilePictures, '/images/' + uid)
    await uploadBytesResumable(storageRef, blob).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });

    return await getDownloadURL(storageRef)
}