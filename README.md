# React Authentication:


### Initial Installation:-

1. Visit: concole.firease.google.com
2. Create project (Skip goolge analytics)
3. Register app (create config)
4. Install firebase : npm install firebase
5. Add config file to your project
6. __DANGER__: Do not publish or make firebase config to public by pushing code to github.

### Integration:-

7. Visit: Go to docs > Build > Authentication > web > Get started
8. Export app from firebase.init.js file: export default app
9. Login.jsx: Inport gitAuth from firebase/auth
10. Create auth:  const auth = getAuth(app) 

### Provider Setup:-
11. import googleAuthProvider and create a new provider: const provider = new GoogleAuthProvider();
12. Use signInWithPopUp in event-handler function and pass auth and provider as parameters.
13. Activate sign-in method from firebase (google, faceook, github)

### More auth provider:-

14. Activate the auth provider (create app, provide redirect url, client id, client secret)


### SignIn with gitHub:-

1. Got to github and open profile then open setting > developers setting
2. Click new gitHub application > Give a project name
3. Give homepage URL
4. Use callback url from firebase.
5. Mandatory steps: Name + homepage URL + callback URL
6. Then create the app.
7. Then copy the client id and paste it in firebase.
8. Generate new clint secret and copy it and paste it in firebase.
9. Finally enable the github auth method.
