// Firebase
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/config";

// Actions
import { authAction } from "./authSlice";

// API
// import uploadUserAvatarToServer from "../../api/uploadUserAvatarToServer";





// REGISTRATION
export const authRegister =
    ({ login,
        email,
        password, avatar }) =>
        async (dispatch, getState) => {
            try {
                // Create user
                await createUserWithEmailAndPassword(auth, email, password);

                // Upload photo to server
                // const imageUrl = await uploadUserAvatarToServer(avatar);

                // Add user data
                await updateProfile(auth.currentUser, {
                    displayName: login,
                    // photoURL: imageUrl,
                });
                // Get updated user
                const user = await auth.currentUser;

                // Create payload
                const payload = {
                    userId: user?.uid,
                    userName: user?.displayName,
                    // userAvatar: user?.photoURL,
                    userEmail: user?.email,
                };

                dispatch(authAction.updateUserProfile(payload));
            } catch (error) {
                alert(error.message);
            }
        };

// LOGIN
export const authLogin =
    ({ email, password }) =>
        async (dispatch, getState) => {
            try {
                const { user } = await signInWithEmailAndPassword(auth, email, password);
                // Create payload
                const payload = {
                    userId: user?.uid,
                    userName: user?.displayName,
                    userAvatar: user?.photoURL,
                    userEmail: user?.email,
                };

                dispatch(authAction.updateUserProfile(payload));
            } catch (error) {
                alert(error.message);
            }
        };

// LOGOUT
export const authLogout = () => async (dispatch, getState) => {
    try {
        await signOut(auth);

        dispatch(authAction.authStateChange(false));
    } catch (error) {
        alert(error.message);
    }
};

// CHANGE USER AUTH STATE
export const authStateChangeUser = () => async (dispatch, getState) => {
    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const payload = {
                    userId: user?.uid,
                    userName: user?.displayName,
                    // userAvatar: user?.photoURL,
                    userEmail: user?.email,
                };

                dispatch(authAction.updateUserProfile(payload));
                dispatch(authAction.authStateChange(true));
            } else {
                const payload = {
                    userId: null,
                    userName: null,
                    // userAvatar: null,
                    userEmail: null,
                };

                dispatch(authAction.updateUserProfile(payload));
                dispatch(authAction.authStateChange(false));
            }
        });
    } catch (error) {
        alert(error.message);
    }
};




