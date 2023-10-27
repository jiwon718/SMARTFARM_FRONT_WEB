import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app as firebaseApp } from "./firebase";
import { store } from "../..";
import { showSnackbar } from "../../modules/common";

const messaging = getMessaging(firebaseApp);

// Request notification permission & FCM token
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

//FCM foreground
export function onForegroundMessage() {
    onMessage(messaging, (payload) => {
        console.log("Received forground message: ", payload);
        store.dispatch(showSnackbar(payload.notification.body));
    });
}