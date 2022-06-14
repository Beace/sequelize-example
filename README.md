# sequelize-example

Testing the [sequelize@7.x.x](https://github.com/sequelize/sequelize) in typescript.

## test steps

1. clone and checkout the main branch

```
git clone https://github.com/sequelize/sequelize.git
```

2. modify the `package.json`

```json
"exports": {
  ".": {
    "import": "./lib/index.mjs",
    "require": "./lib/index.js",
    "types": "./types/index.d.ts"
  },
  "./_non-semver-use-at-your-own-risk_/*": {
    "default": "./lib/*",
    "types": "./types/*.d.ts"
  },
  "./package.json": "./package.json"
}
```

3. npm link in sequelize project root path

```
npm link
```

4. test sequelize typescript compile

```
cd sequelize-example && yarn
yarn build:purejs
yarn build:commonjs
yarn build:nodenext
yarn build:internal
```