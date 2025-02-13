let unsubscribe;

const authStateChangedHandler = (user) => {
  if (user) {
    // User is signed in...
  } else {
    // User is signed out...
  }
};

const setupAuthListener = () => {
  unsubscribe = onAuthStateChanged(auth, authStateChangedHandler);
};

const cleanupAuthListener = () => {
  if (unsubscribe) {
    unsubscribe();
  }
};

// Call setupAuthListener when you need to listen for auth changes.
setupAuthListener();

// Call cleanupAuthListener when you no longer need to listen for auth changes. 
// This is crucial when components unmount or the application closes.
// For example, in a React component, you might do this in the componentWillUnmount lifecycle method.
cleanupAuthListener();