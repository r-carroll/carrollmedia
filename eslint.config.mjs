import { readFileSync } from 'node:fs'
import tseslint from 'typescript-eslint'

/* Design-system adherence. The rules come from the design project's
 * _adherence.oxlintrc.json, kept in design-system/ with prop lists updated
 * for this port. They are written as ESLint core rules, and oxlint does not
 * implement no-restricted-syntax, so ESLint runs them. */
const adherence = JSON.parse(readFileSync(new URL('./design-system/adherence.oxlintrc.json', import.meta.url), 'utf8'))

export default tseslint.config(
  { ignores: ['.next/**', 'legacy/**', 'node_modules/**', 'next-env.d.ts'] },
  {
    files: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', 'lib/**/*.ts'],
    languageOptions: { parser: tseslint.parser },
    linterOptions: { reportUnusedDisableDirectives: 'error' },
    rules: adherence.rules,
  },
  {
    /* Internals may import each other; pages go through the index. */
    files: ['components/**/*.{ts,tsx}'],
    rules: { 'no-restricted-imports': 'off' },
  },
  {
    /* ImageResponse cannot read CSS custom properties, so the share card
     * inlines token values. */
    files: ['app/opengraph-image.tsx'],
    rules: { 'no-restricted-syntax': 'off' },
  },
)
