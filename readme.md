This repository is **unofficial** and is not affiliated with the official bloxd.io team.

This repository provides TypeScript declaration files (`.d.ts`) for the bloxd.io Code API.

## Usage

Run the following command in your terminal (requires Node.js):

`npm i bloxd.io.d.ts -D`

## Why use this?

This npm package includes the `d.ts` files for the bloxd.io Code API, which allows your development environment to understand bloxd.io-specific functions and objects.  
This is helpful for:

- **TypeScript support**
- **Preventing API call errors (in runtime.but not 100%)**
- **Enabling IDE IntelliSense (Autocomplete)**

## How to Contribute

- Adding new or missing API functions
- Improving documentation (JSDoc, etc.)
- Reporting and fixing bugs
- Using this package and providing feedback

## Repository Structure

```text
src/
  api-type-def/   # API function definitions
    clientOption/ # clientOption definitions
      clientOptions/ # Individual function definitions for clientOption
      index.ts    # Merged definitions

    entitySetting/ # entitySetting definitions
      entitySettings/ # Individual function definitions for entitySetting
      index.ts    # Merged definitions

    mobSetting/    # mobSetting definitions
      mobSettings/ # Type definitions per mobSetting
      index.ts    # Function definitions

    normal/        # Other general API function definitions
    index.ts       # Main entry point for merging all definitions

  type/            # Type definitions (e.g., `PlayerId`)
  index.ts         # Final entry point for exports and global declarations

dist/              # Compiled tsc output (the actual npm package)
```
