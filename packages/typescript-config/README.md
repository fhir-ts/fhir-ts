# @fhir-ts/typescript-config

An internal package that contains all TypeScript configuration files for the fhir-ts monorepo.

## Installation

```bash
# NPM
npm install @fhir-ts/typescript-config typescript --save-dev

# Yarn
yarn add @fhir-ts/typescript-config typescript -d

# PNPM
pnpm add @fhir-ts/typescript-config typescript -d

# Bun
bun add @fhir-ts/typescript-config typescript -d
```

## Usage

To use this package, create a `tsconfig.json` file in your package's root and use one of the following snippets:

### Base Config

This `tsconfig` should only be used for extending other config variants.

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@fhir-ts/typescript-config/base"
}
```

### Library Config

This `tsconfig` should be used for creating a shared, isomorphic library within a monorepo.

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@fhir-ts/typescript-config/library"
}
```
