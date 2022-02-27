# Who's Who

[![GitHub contributors](https://img.shields.io/github/contributors/code4romania/whos-who.svg?style=for-the-badge)](https://github.com/code4romania/whos-who/graphs/contributors) [![GitHub last commit](https://img.shields.io/github/last-commit/code4romania/whos-who.svg?style=for-the-badge)](https://github.com/code4romania/whos-who/commits/develop) [![License: MPL 2.0](https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg?style=for-the-badge)](https://opensource.org/licenses/MPL-2.0)

**Objective:** Inform the public on what are the attributions of various institutions during the crisis situation.

[Contributing](#contributing) | [Built with](#built-with) | [Repos and projects](#repos-and-projects) | [Deployment](#local-deployment) | [Feedback](#feedback) | [License](#license) | [About Code4Ro](#about-code4ro)

## Contributing

This project is built by amazing volunteers and you can be one of them! Here's a list of ways in [which you can contribute to this project](https://github.com/code4romania/.github/blob/master/CONTRIBUTING.md). If you want to make any change to this repository, please **make a fork first**.

Help us out by testing this project in the [staging environment](https://whos-who-git-develop.code4ro.now.sh). If you see something that doesn't quite work the way you expect it to, open an Issue. Make sure to describe what you _expect to happen_ and _what is actually happening_ in detail.

If you would like to suggest new functionality, open an Issue and mark it as a **[Feature request]**. Please be specific about why you think this functionality will be of use. If you can, please include some visual description of what you would like the UI to look like, if you are suggesting new UI elements.

Also, this is [the workflow we follow](https://github.com/code4romania/.github/blob/master/WORKFLOW.md).

## Built With

### Programming languages

- JavaScript

### Frontend framework

- [React (16.13.\*)](https://reactjs.org/)
- [Bulma (0.8.\*)](https://bulma.io/)

### Package managers

- Frontend - [NPM](https://docs.npmjs.com/)

## Repos and projects

- Uses reusable components from: <https://www.npmjs.com/package/@code4ro/taskforce-fe-components>
- Uses graphical assets from: <https://github.com/code4romania/covid-assets>

## Development

- Fork this repo
- Clone your fork
- Open the directory where you have cloned the repo

## Local Deployment

### System Requirements

- Node.js 10 or later

### Install node dependencies

```sh
npm install
```

### Run the app in the development mode

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

You will also see any lint errors in the console.

### Run the tests

```sh
npm test
```

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build the app

```sh
npm run build
```

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Using lingui

1. Wrapping texts using `<Trans>` component.

```js
import { Trans } from "@lingui/macro";

<Trans>Hello world</Trans>;
```

2. Extracting messages

`npm run extract`

3. Add translations to `messages.json` for each language from the `locales` folder.

```json
// en/messages.json
{
  "Știri oficiale": {
    "translation": "Official news"
    // ...
  }
}

// ro/messages.json
{
  "Știri oficiale": {
    "translation": "Știri oficiale"
    // ...
  }
}
```

4. Compiling messages

`npm run compile`

See more details on the official lingui [page](https://lingui.js.org/tutorials/react.html)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### `npm run build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>

## Feedback

- Request a new feature on GitHub.
- Vote for popular feature requests.
- File a bug in GitHub Issues.
- Email us with other feedback contact@code4.ro

## License

This project is licensed under the MPL 2.0 License - see the [LICENSE](LICENSE) file for details

## About Code4Ro

Started in 2016, Code for Romania is a civic tech NGO, official member of the Code for All network. We have a community of over 500 volunteers (developers, ux/ui, communications, data scientists, graphic designers, devops, it security and more) who work pro-bono for developing digital solutions to solve social problems. #techforsocialgood. If you want to learn more details about our projects [visit our site](https://www.code4.ro/en/) or if you want to talk to one of our staff members, please e-mail us at contact@code4.ro.

Last, but not least, we rely on donations to ensure the infrastructure, logistics and management of our community that is widely spread across 11 timezones, coding for social change to make Romania and the world a better place. If you want to support us, [you can do it here](https://code4.ro/en/donate/).
