This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TODO

1. Fix jest test setup
2. Add npm publishing scripts (public NPM, Artifactory) and remove dist from VCS
3. write proper readme on how to install, configure and consume.
4. add storybook readme addon
5. update build script (update-scss-imports) to work on other OS too.
6. complete ITCSS setup, include theming guide.
7. create an npx script to scaffold this out for new component library projects.

## Consume

1. npm install git+ssh://git@bitbucket.org/{user}/{repository}.git
2. add `@import '~storybook-experiment/src/styles/styles';` to top of main index.scss file.
3. directly import components from node_modules using ~ (tilde) something (update me once discovered);

## Available Scripts

In this project directory, you can run:

### `npm run storybook`

Runs the Storybook component browser locally.<br>
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Runs Jest.

### `npm run build-storybook`

Creates a static website displaying the Storybook components in the folder `/storybook-static`.

### `npm run build`

Creates a dist folder containing compiled components to be used in your other React projects.
