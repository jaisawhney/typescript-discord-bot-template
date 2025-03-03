import { defineConfig } from 'drizzle-kit/utils';

export default defineConfig({
    schema: './src/db/schema.ts',
    out: './drizzle',
    dialect: 'sqlite',
});
