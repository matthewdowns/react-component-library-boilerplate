# react-component-library-boilerplate

Optimized template repository for React component libraries.

![GitHub package.json version](https://img.shields.io/github/package-json/v/matthewdowns/react-component-library-boilerplate)
![David](https://img.shields.io/david/matthewdowns/react-component-library-boilerplate)
[![Node.js CI](https://github.com/matthewdowns/react-component-library-boilerplate/actions/workflows/node.js.yml/badge.svg)](https://github.com/matthewdowns/react-component-library-boilerplate/actions/workflows/node.js.yml)
[![CodeQL](https://github.com/matthewdowns/react-component-library-boilerplate/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/matthewdowns/react-component-library-boilerplate/actions/workflows/codeql-analysis.yml)




## Introduction

This template will give you a jumpstart on designing, testing, and publishing your very own React component library!

Click on the [Use this template](https://github.com/matthewdowns/react-component-library-boilerplate/generate) button to generate your own repository from this one.




## Usage

### Prerequisites

* [Node.js](https://nodejs.org)

### Commands

Run `npm install` first to install package dependencies.

* `npm start` - Shortcut for `npm run styleguide:serve`
* `npm run lint` - Run the ESLint linter to check for warnings and errors
* `npm run build` - Build the component library to the _dist_ folder
* `npm test` - Run the Jest testing suite to verify that the components will behave correctly
* `npm run storybook:serve` - Run the Styleguidist server for component visualization
* `npm run storybook:build` - Build a static Styleguidist site to the _docs_ folder




## Publishing

Package publishing is handled automatically via [GitHub Actions](https://github.com/features/actions). You can view the publishing workflow [here](https://github.com/matthewdowns/react-component-library-boilerplate/.github/workflows/publish.yml).

### How to trigger the publish workflow

First, create a new branch - _release/vx.x.x_ - and run the `npm version {major,minor,patch,etc.} command to update the package.json version automatically.

For example, if the lastest tag version is _v1.0.4_, then I would create a new branch off of _main_ called _v1.0.5_, and then run `npm version patch` to upgrade the packge version from _1.0.4_ to _1.0.5_. 

> Please note that the _package.json_ version should **never** include the "v" prefix, according to the [semantic versioning specification](https://semver.org/spec/v2.0.0#is-v123-a-semantic-version). However, it does specifies that tags on GitHub or other version control systems can be prefixed with a "v".

After you've pushed the branch to GitHub, you can [create a new release](https://github.com/matthewdowns/react-component-library-boilerplate/releases/new), where the _Choose a tag_ dropdown lets you specify the tag version (remember to include a "v" prefix) as well as the _target_, which would be your release branch.

At this point, the publish workflow should be running - you can see the status of all actions on the repository [here](https://github.com/matthewdowns/react-component-library-boilerplate/actions).




## License

Distributed under the MIT License. See [LICENSE](https://github.com/matthewdowns/react-component-library-boilerplate/tree/main/LICENSE) for more information.




## Contact

Matthew Downs

Email: [matthew.downsc@gmail.com](mailto:matthew.downsc@gmail.com)

Twitter: [@mdownsxy](https://twitter.com/mdownsxy) 

Project Link: [https://github.com/matthewdowns/react-component-library-boilerplate](https://github.com/matthewdowns/react-component-library-boilerplate)
