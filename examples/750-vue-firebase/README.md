# vue2-firebase

## TODO:
This project will _not_ work out-of-the box. You need to do some configuration first.
- Go to the [firebase console](https://console.firebase.google.com/) and create your own project. 
- Add an application inside this project.
- Also setup Cloud Firestore.
- Copy and paste the `firebaseConfig` section in the file `db.js` like so:

```
// TODO: Paste your own firebaseConfig data here
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_DOMAIN",
    databaseURL: "YOUR_URL",
    projectId: "YOUR_PROJECTID",
    storageBucket: "YOUR_BUCKET",
    messagingSenderId: "YOUR_SENDERID",
    appId: "YOUR_APPID"
};
```

After that, you can do an `npm install` like normal and the application will work. It will create and store a `cities` path in your Cloud Firestore.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
