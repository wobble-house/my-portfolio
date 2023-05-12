'use client'
import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
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
