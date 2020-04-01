# challenge-frontend

## Demo
See [here](https://fblind-challenge-frontend.herokuapp.com/).

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


## The process

First thing I did:
- Read the challenge and thought about the solution, I started creating a mockup (before that spent some time finding inspiration in dribbble)
- The idea behind the design is trying to use some of the material design pattern and the design itself.

Second:
- Research a bit about modules for "App state-preservation/restoration" because I never did something like that in a vue app (found that vuex-persistedstate is very easy to use for this case)

Third:
- Created project and install dependencies (using vue cli as much as possible) starting with one script that I used to create vue projects (gitlab ci + heroku by default).

Fourth:
- Started coding.

Commonly I start creating components with hardcoded data, then try to put in css what I did in the mockup.
I tried to do everything with the most minimal features like an mvp, so the design is based in vuetify components, the pagination is a "show more" button, the restoration is using vuex-persistedstate with the default values, the project was created with a script with my basic config and vue cli, etc. I think all the remaining things can be added / removed in the next iterations.

One thing to mention is that the app use vuex as much as possible, today I'm using this methodology in my own work (all modules are small vue apps with its own store).

Another thing is I didn't understand this feature "Saving pictures in the picture gallery", so I think is not in the app. The features were based on "what to include" list and watching the example video.
