# FHIR TS

FHIR, now in native TypeScript.

## Introduction

Fast Healthcare Interoperability Resources, more commonly known as FHIR, is the worldwide industry standard for sending
healthcare data between independent, unconnected systems. If you work in the field of health tech, you're very likely
familiar with FHIR, and FHIR usage is growing more and more daily. Unfortunately, the FHIR TypeScript ecosystem is a
little bit lacking, to put it lightly. The goal of this project is to create an ecosystem of first-class TypeScript
tooling for working with FHIR, and to accelerate the usage of FHIR even further into the health tech sector.

## A Word of Caution

This is still a very heavy work-in-progress, and likely won't be completed for a few more weeks. Feel free to poke
around in the source code, but I don't recommend using anything from this repo at this time. This disclaimer will be
removed the moment I feel things in this repo are ready for production usage.

## Getting Started

This entire project's documentation can be found at its official website: [fhir-ts.dev](https://www.fhir-ts.dev). In
addition to the website, each package has its own `README.md` containing all of the necessary documentation to get
started with that particular package.

## Packages

This repo publishes the following public packages:

- [`@fhir-ts/codegen`](./packages/codegen/README.md) - A CLI that generates TypeScript typings from FHIR implementation
  guides.

Additionally, this repo uses the following private packages internally:

- [`@fhir-ts/eslint-config`](./packages/eslint-config/README.md) - Contains the project's ESLint config.
- [`@fhir-ts/typescript-config`](./packages/typescript-config/README.md) - Contains the project's TypeScript configs.

More packages will be coming in the near future, so stay tuned!

## Contributing

Contributions to this project are always welcome, and even encouraged, however keep in mind that fhir-ts governance is
based off of Zig's model: BDFN (Benevolent Dictator For Now). This means that James Kienle has final say on the design
and implementation of everything until this project reaches a more mature stage.

### Technology

This project is locally developed on [Bun](https://bun.sh/), as Bun greatly reduces the amount of configuration needed
to get started with a TypeScript project. This project uses Bun as a JavaScript runtime, package manager, realtime
TypeScript transpiler, and test runner. That's a lot of bun!

Speaking of TypeScript, this project is obviously built entirely with [TypeScript](https://www.typescriptlang.org/),
thus the name, fhir-ts. You can find all of the TypeScript configuration files in `./packages/typescript/config`.

TypeScript configuration files? As in, more than one? That's right! We have more than one tsconfig because this project
is a monorepo! Everything related to fhir-ts is stored inside of one, unified repo, and it's managed via the
[Turborepo](https://turbo.build/repo/docs) build system, allowing for automatic task scheduling to maximize build speed
and create a better developer experience while working with the repo.

There's probably more technology to talk about, but I'm not sure what's worth adding here

### Code Standards

Every file in this repo should adhere to the following standards:

- The file should be formatted via Prettier and our custom config at `./prettierrc`.
- The file should have no spelling errors. Our custom dictionary for words that aren't a standard part of English can
  be found at `./cspell.json`.
- The file should have no ESLint errors, and minimal warnings. Our custom ESLint config can be found at
  './packages/eslint-config/eslint.config.js`.
- Once James creates a code of conduct, the file should adhere to the code of conduct (HURRY UP JAMES).

### Setting Up the Repo

We recommend you do all of this in a terminal window, but however you get it done is up to you!

1. Install Bun 1.2.5
2. Clone the repo
3. CD into the newly cloned repo
4. Run the command `bun install`

### Helpful Tips for Local Development

- All packages can be built via `bun run build`
- Prettier formatting can be checked via `bun run format:check`
- Incorrectly files can be automatically formatted via `bun run format:fix`
- Linting can be checked via `bun run lint:check`
- Some lint rules are auto-fixable, and can be fixed via `bun run lint:fix`
- Unit tests should be ran via `bun run test` not `bun test`. We have a npm script wrapper around Bun's test command
  that automatically sets up reporting and coverage, and it only works if you use that command.
- TypeScript typings can be checked via `bun run typecheck`

## License

Everything in this repo is licensed under the [MIT license](./LICENSE.md) and Copyright © James Kienle 2025.

This repo uses various 3rd party packages hosted on [NPM](https://www.npmjs.com/). Each of these packages are subject
to their own license agreements. The fhir-ts org has made every reasonable effort to only use 3rd party dependencies
that use the following licenses:

- Apache-2.0
- BSD-2-Clause
- BSD-3-Clause
- CC-BY-3.0
- CC0-1.0
- ISC
- MIT
- Python-2.0

This repo's dependency licenses can be scanned at any time by running `bun run licenses:summary` from the repo root.
Additionally, licenses are checked via the [`license-checker`](https://www.npmjs.com/package/license-checker) package
against the above license list during CI.

## Trademark Attribution

FHIR® is a registered trademark of Health Level Seven® (HL7®) International.
