## TODO

1. Fix jest test setup, add linting
2. Add npm publishing scripts (public NPM, Artifactory) and guide, and remove dist from VCS
3. write proper readme on how to install, configure and consume.
4. add storybook readme addon
5. update build script (update-scss-imports) to work on other OS too.
6. complete ITCSS setup, include theming guide.
7. clean up package.json (browserlist still necessary?) and set dependency versions correctly.
8. create an npx script to scaffold this out for new component library projects.

## Consume

1. run `npm install github:jberndsen/storybook-experiment`
2. add `@import '~storybook-experiment/dist/styles/global';` to top of main index.scss file.
3. Directly the components you wish to use, i.e. `import { HelloWorld } from 'storybook-experiment';`

## Available Scripts

In this project directory, you can run:

### `npm run storybook`

Runs the Storybook component browser locally.<br>
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Runs Jest. Currently work in progress.

### `npm run build-storybook`

Creates a static website displaying the Storybook components in the folder `/storybook-static`. Useful for hosting somewhere to share your component library with other teams.

### `npm run build`

Creates a dist folder containing compiled components to be used in your other React projects.
