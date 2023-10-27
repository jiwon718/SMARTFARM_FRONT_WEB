import { getMessaging, getToken } from "firebase/messaging";
import { app as firebaseApp } from "./firebase";

const messaging = getMessaging(firebaseApp);

export function requestPermission() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            getToken(messaging, {
                vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY
            }).then((currentToken) => {
                if (currentToken) {
                    console.log(currentToken);
                }
            })
        }
    });
}