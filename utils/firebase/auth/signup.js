'use client'
import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, getAdditionalUserInfo } from "firebase/auth";
import addData from "../firestore/addData";

const auth = getAuth(firebase_app);

export default async function signUp({email, password, data}) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password).then((user) => {
        data.uid = user.user.uid;
        addData("users", user.user.uid, data)});
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function signUpGoogle() {
    const provider = new GoogleAuthProvider();
    let result = null,
        error = null;
    try {
        provider.addScope('profile');
        provider.addScope('email');
        await signInWithRedirect(auth, provider);
        result = await getRedirectResult(auth)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
      
          // The signed-in user info.
          const user = result.user;
          let data = {}
          data.uid = user.user.uid;
          data.email = user.user.email
          data.firstName = ""
          data.lastName = ""
          data.companyName = ""
            addData("users", user.user.uid, data)
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}