# greenwood-jsx

A demonstration repo for deploying a full-stack [**Greenwood**](https://www.greenwoodjs.dev/) app using [using WCC + JSX](https://github.com/ProjectEvergreen/greenwood/tree/master/packages/plugin-import-jsx).

> _It is based on [this](https://github.com/ProjectEvergreen/greenwood-demo-adapter-vercel) demo repo._

## Setup

To run locally:

1. Clone the repo
1. Run `npm ci`

You can now run these npm scripts
- `npm run dev` - Start the demo with Greenwood local dev server
- `npm run start` - Start the demo with a production Greenwood build

## TODO

1. [ ] [Greenwood JSX plugin is missing a dependency on escodegen](https://github.com/ProjectEvergreen/greenwood/blob/master/packages/plugin-import-jsx/src/index.js#L6) (is not defined in _package.json_)
1. [ ] [_.tsx_ support](https://github.com/ProjectEvergreen/wcc/issues/164)