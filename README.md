# Sourcey

A friendly desktop git client for OS X, Linux and Windows.

## What is this?

The idea is to make a desktop GUI client for git which works the same across platforms.
The project will have first class support for OS X and Linux, and will support Windows where possible. If you want to change this and make Windows a first-class supported platform, get in touch as I'll need someone to be an active maintainer as I don't have access to a Windows system for testing and development.

### Notable Technologies

Sourcey makes use of:

- [Electron](http://electron.atom.io/)
- [Bootstrap](http://getbootstrap.com/)
- [React](http://facebook.github.io/react/)
- [Nodegit](http://www.nodegit.org/)
- [Chokidar](https://github.com/paulmillr/chokidar)
- Plus [many](package.json) [more](src/package.json) Open Source projects!

## Installing

The `builds` directory should include prebuilt versions of the latest releases available.

## Developing

If you want to hack/contribute to the Sourcey project then you should follow these steps:

0. [Install Node and NPM](https://nodejs.org/download/). Personally I favour the ['N'](https://github.com/tj/n) node manager.
1. Clone the Sourcey repo.
2. Change directory into the project repo.
3. Run `npm install` to install project dependencies.
4. `cd src && npm install && cd ..` to install source dependencies.

Now you have a development version of the project installed, you can make use of the following npm scripts:

- `npm start` will start a development version reading directly from `src`

## Contributing

Sourcey follows the gitflow principles where possible. If you want to contribute, please work on a feature branch prefixed `feature/` with a short descriptive feature name (e.g. `feature/added_commit_btn`).

Submit a PR when you're ready to merge into `develop` - not `master`.
