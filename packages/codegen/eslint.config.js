import fhirTsEslint from '@fhir-ts/eslint-config';
import { defineConfig } from 'eslint/config';

const config = defineConfig([fhirTsEslint]);

export default config;
