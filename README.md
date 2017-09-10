# mondegreen

## Front End Framework
### Semantic UI
Information
<https://react.semantic-ui.com/introduction>

```
import { insertcomponent } from 'semantic-ui-react';

```

## github
### Forking the repo

1. Make sure you’re logged into GitHub with your account.
2. Find the GitHub repository with which you’d like to work.
3. Click the Fork button on the upper right-hand side of the repository’s page.


### Setting up Upsteam with remote repo (main repo)

After you have your local repo setup from your forked repo, you will need to setup upstream ability to update your branch with changes in the master repo

```
git remote add upstream https://github.com/Gruebes/mondegreen.git
```
### Pulling from Upstream

```
git pull upstream master
```

## Commandline
### Installing

After forking the project and setting up Upstream, run the following commands

in the root of your project (when the express server.js and package.json are in view)

```
npm install
```

move to client directory to install FE dependencies

```
cd client
```

now inside your client dir run

```
npm install
```

move back to your root and run the app

```
cd .. npm start
```

The react app will now open up in your browser at localhost://3000


### Running the app
From your root, run

```
npm start
```
