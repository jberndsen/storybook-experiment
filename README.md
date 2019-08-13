This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Consume

1. npm install git+ssh://git@bitbucket.org/{user}/{repository}.git
2. add `@import '~storybook-experiment/src/styles/styles';` to top of main index.scss file.
3. directly import components from node_modules using ~ (tilde) something (update me once discovered);

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the Storybook component browser locally.<br>
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build-storybook`

Creates a static website displaying the Storybook components in the folder `/storybook-static`.

## How this repository was created.

1. npx create-react-app my-guide --typescript --use-npm
2. cd my-guide
3. npx -p @storybook/cli sb init
4. npm install node-sass -S
5. rename all .css files to .scss and refactor import statements
6. Manually added the ITCSS file structure in `src/styles`
7. Added the `global-scss-loader.scss` and magic import statement in the `.storybook` config.
8. Removed default App stuff created by create-react-app.
