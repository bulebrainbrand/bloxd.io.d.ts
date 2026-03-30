this project is not offical bloxd.io repo.

## how to use

Use `npm i bloxd.io.d.ts -D` in terminal(need node.js)

and add this option in tsconfig.json

```json
{
  "compileOptions": {
    "types": ["bloxd.io.d.ts"]
  }
}
```

## why use this

This package include bloxd.io api docment and d.ts.
It useful typecheck(as typescript),lint and killing typo(most important).

## how to contribute

- add more api type in src.
- add more docment.
- check code.
- use this package

## repo structure

```
src/
  api-type-def/ # api functions type define
    clientOption/ # clientOption apis define
      clientOptions/ # clientOption function overload define(by clientOption name)
      index.ts # marge clientOptions overload

    entitySetting/ # entitySetting define
      entitySettings/ # entitySetting function overload(by entitySetting name)
      index.ts # marge entitySetting overload
    mobSetting/ # making now...

    normal/ # define other apis

    index.ts # marge api
  type/ # use type define e.g.`PlayerId`
  index.ts # top level file

dist/ # tsc result and npm package install target
```
