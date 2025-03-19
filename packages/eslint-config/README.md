# @fhir-ts/typescript-config

An internal package that contains ESLint configuration for the fhir-ts monorepo.

## Installation

```bash
# NPM
npm install @fhir-ts/eslint-config eslint typescript --save-dev

# Yarn
yarn add @fhir-ts/eslint-config eslint typescript -d

# PNPM
pnpm add @fhir-ts/eslint-config eslint typescript -d

# Bun
bun add @fhir-ts/eslint-config eslint typescript -d
```

## Usage

To use this package, create a `eslint.config.js` file in your package's root and use the following snippet:

```js
import fhirTsEslint from '@fhir-ts/eslint-config';
import { defineConfig } from 'eslint/config';

const config = defineConfig([fhirTsEslint]);

export default config;
```
