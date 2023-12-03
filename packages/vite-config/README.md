# @pwa/vite-config

goal: abstract vite config for PWAs making it as reusable as possible

## TODO

- convert module into TS
  - the files in this package are loaded by the vite server (in node env) via vite.config.ts
  - it doesnt seem to like importing from "TSM" style packages
  - this may be fixed by turning this into a valid NPM package with local build process that creates /dist when installing the package
  - not sure really, but yeah;
    - change all .js to .ts and rewrite all files as TS (add types)
    - configure TS build .ts into .js in /dist folder
    - figure out when to run that ts build command in terms of monorepo (we dont want to actually publish packages to npm)
