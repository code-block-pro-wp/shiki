import { IGrammar, IRawTheme } from 'vscode-textmate'

type Theme =
  | 'andromeda'
  | 'ayu-dark'
  | 'ayu-light'
  | 'ayu-mirage'
  | 'cobalt2'
  | 'css-variables'
  | 'dark-plus'
  | 'dracula-soft'
  | 'dracula'
  | 'github-dark-dimmed'
  | 'github-dark'
  | 'github-light'
  | 'hc_light'
  | 'light-plus'
  | 'material-theme-darker'
  | 'material-theme-lighter'
  | 'material-theme-ocean'
  | 'material-theme-palenight'
  | 'material-theme'
  | 'min-dark'
  | 'min-light'
  | 'monokai'
  | 'night-owl-light'
  | 'night-owl'
  | 'noctis-azureus'
  | 'noctis-bordo'
  | 'noctis-hibernus'
  | 'noctis-lilac'
  | 'noctis-lux'
  | 'noctis-minimus'
  | 'noctis-obscuro'
  | 'noctis-sereno'
  | 'noctis-uva'
  | 'noctis-viola'
  | 'noctis'
  | 'nord'
  | 'one-dark-pro'
  | 'palenight-mild-contrast'
  | 'palenight-operator'
  | 'palenight'
  | 'pico8'
  | 'poimandres'
  | 'rose-pine-dawn'
  | 'rose-pine-moon'
  | 'rose-pine'
  | 'shades-of-purple-super-dark'
  | 'shades-of-purple'
  | 'slack-dark'
  | 'slack-ochin'
  | 'solarized-dark'
  | 'solarized-light'
  | 'synthwave-84'
  | 'tokyo-night-light'
  | 'tokyo-night-storm'
  | 'tokyo-night'
  | 'vitesse-dark'
  | 'vitesse-light'
  | 'winter-is-coming-dark'
  | 'winter-is-coming-light'
  | 'winter-is-coming'
declare const themes: Theme[]

declare enum FontStyle {
  NotSet = -1,
  None = 0,
  Italic = 1,
  Bold = 2,
  Underline = 4
}

interface IThemedTokenScopeExplanation {
  scopeName: string
  themeMatches: any[]
}
interface IThemedTokenExplanation {
  content: string
  scopes: IThemedTokenScopeExplanation[]
}
/**
 * A single token with color, and optionally with explanation.
 *
 * For example:
 *
 * {
 *   "content": "shiki",
 *   "color": "#D8DEE9",
 *   "explanation": [
 *     {
 *       "content": "shiki",
 *       "scopes": [
 *         {
 *           "scopeName": "source.js",
 *           "themeMatches": []
 *         },
 *         {
 *           "scopeName": "meta.objectliteral.js",
 *           "themeMatches": []
 *         },
 *         {
 *           "scopeName": "meta.object.member.js",
 *           "themeMatches": []
 *         },
 *         {
 *           "scopeName": "meta.array.literal.js",
 *           "themeMatches": []
 *         },
 *         {
 *           "scopeName": "variable.other.object.js",
 *           "themeMatches": [
 *             {
 *               "name": "Variable",
 *               "scope": "variable.other",
 *               "settings": {
 *                 "foreground": "#D8DEE9"
 *               }
 *             },
 *             {
 *               "name": "[JavaScript] Variable Other Object",
 *               "scope": "source.js variable.other.object",
 *               "settings": {
 *                 "foreground": "#D8DEE9"
 *               }
 *             }
 *           ]
 *         }
 *       ]
 *     }
 *   ]
 * }
 *
 */
interface IThemedToken {
  /**
   * The content of the token
   */
  content: string
  /**
   * 6 or 8 digit hex code representation of the token's color
   */
  color?: string
  /**
   * Font style of token. Can be None/Italic/Bold/Underline
   */
  fontStyle?: FontStyle
  /**
   * Explanation of
   *
   * - token text's matching scopes
   * - reason that token text is given a color (one matching scope matches a rule (scope -> color) in the theme)
   */
  explanation?: IThemedTokenExplanation[]
}

interface HighlighterOptions {
  /**
   * The theme to load upfront.
   *
   * Default to: 'nord'
   */
  theme?: IThemeRegistration
  /**
   * A list of themes to load upfront.
   */
  themes?: IThemeRegistration[]
  /**
   * A list of languages to load upfront.
   *
   * Default to all the bundled languages.
   */
  langs?: (Lang | ILanguageRegistration)[]
  /**
   * Paths for loading themes and langs. Relative to the package's root.
   */
  paths?: IHighlighterPaths
}
interface Highlighter {
  /**
   * Convert code to HTML tokens.
   * `lang` and `theme` must have been loaded.
   * @deprecated Please use the `codeToHtml(code, options?)` overload instead.
   */
  codeToHtml(
    code: string,
    lang?: StringLiteralUnion<Lang>,
    theme?: StringLiteralUnion<Theme>,
    options?: CodeToHtmlOptions
  ): string
  /**
   * Convert code to HTML tokens.
   * `lang` and `theme` must have been loaded.
   */
  codeToHtml(code: string, options?: CodeToHtmlOptions): string
  /**
   * Convert code to themed tokens for custom processing.
   * `lang` and `theme` must have been loaded.
   * You may customize the bundled HTML / SVG renderer or write your own
   * renderer for another render target.
   */
  codeToThemedTokens(
    code: string,
    lang?: StringLiteralUnion<Lang>,
    theme?: StringLiteralUnion<Theme>,
    options?: ThemedTokenizerOptions
  ): IThemedToken[][]
  /**
   * Convert ansi-escaped text to HTML tokens.
   * `theme` must have been loaded.
   */
  ansiToHtml(ansi: string, options?: AnsiToHtmlOptions): string
  /**
   * Convert ansi-escaped text to themed tokens for custom processing.
   * `theme` must have been loaded.
   * You may customize the bundled HTML / SVG renderer or write your own
   * renderer for another render target.
   */
  ansiToThemedTokens(ansi: string, theme?: StringLiteralUnion<Theme>): IThemedToken[][]
  /**
   * Get the loaded theme
   */
  getTheme(theme?: IThemeRegistration): IShikiTheme
  /**
   * Load a theme
   */
  loadTheme(theme: IThemeRegistration): Promise<void>
  /**
   * Load a language
   */
  loadLanguage(lang: ILanguageRegistration | Lang): Promise<void>
  /**
   * Get all loaded themes
   */
  getLoadedThemes(): Theme[]
  /**
   * Get all loaded languages
   */
  getLoadedLanguages(): Lang[]
  /**
   * Get the foreground color for theme. Can be used for CSS `color`.
   */
  getForegroundColor(theme?: StringLiteralUnion<Theme>): string
  /**
   * Get the background color for theme. Can be used for CSS `background-color`.
   */
  getBackgroundColor(theme?: StringLiteralUnion<Theme>): string
  setColorReplacements(map: Record<string, string>): void
}
interface IHighlighterPaths {
  /**
   * @default 'themes/'
   */
  themes?: string
  /**
   * @default 'languages/'
   */
  languages?: string
  /**
   * @default 'dist/'
   */
  wasm?: string
}
type ILanguageRegistration = {
  id: string
  scopeName: string
  displayName?: string
  aliases?: string[]
  samplePath?: string
  /**
   * A list of languages the current language embeds.
   * If manually specifying languages to load, make sure to load the embedded
   * languages for each parent language.
   */
  embeddedLangs?: Lang[]
  balancedBracketSelectors?: string[]
  unbalancedBracketSelectors?: string[]
} & {
  path: string
  grammar?: IGrammar
}
type IThemeRegistration = IShikiTheme | StringLiteralUnion<Theme>
interface IShikiTheme extends IRawTheme {
  /**
   * @description theme name
   */
  name: string
  /**
   * @description light/dark theme
   */
  type: 'light' | 'dark' | 'css'
  /**
   * @description tokenColors of the theme file
   */
  settings: any[]
  /**
   * @description text default foreground color
   */
  fg: string
  /**
   * @description text default background color
   */
  bg: string
  /**
   * @description relative path of included theme
   */
  include?: string
  /**
   *
   * @description color map of the theme file
   */
  colors?: Record<string, string>
}
interface Nothing {}
/**
 * type StringLiteralUnion<'foo'> = 'foo' | string
 * This has auto completion whereas `'foo' | string` doesn't
 * Adapted from https://github.com/microsoft/TypeScript/issues/29729
 */
type StringLiteralUnion<T extends U, U = string> = T | (U & Nothing)
interface CodeToHtmlOptions {
  lang?: StringLiteralUnion<Lang>
  theme?: StringLiteralUnion<Theme>
  lineOptions?: LineOption[]
}
interface AnsiToHtmlOptions {
  theme?: StringLiteralUnion<Theme>
  lineOptions?: LineOption[]
}
interface HtmlRendererOptions {
  langId?: string
  fg?: string
  bg?: string
  lineOptions?: LineOption[]
  elements?: ElementsOptions
  themeName?: string
}
interface LineOption {
  /**
   * 1-based line number.
   */
  line: number
  classes?: string[]
}
interface ElementProps {
  children: string
  [key: string]: unknown
}
interface PreElementProps extends ElementProps {
  className: string
  style: string
}
interface CodeElementProps extends ElementProps {}
interface LineElementProps extends ElementProps {
  className: string
  lines: IThemedToken[][]
  line: IThemedToken[]
  index: number
}
interface TokenElementProps extends ElementProps {
  style: string
  tokens: IThemedToken[]
  token: IThemedToken
  index: number
}
interface ElementsOptions {
  pre?: (props: PreElementProps) => string
  code?: (props: CodeElementProps) => string
  line?: (props: LineElementProps) => string
  token?: (props: TokenElementProps) => string
}
interface ThemedTokenizerOptions {
  /**
   * Whether to include explanation of each token's matching scopes and
   * why it's given its color. Default to false to reduce output verbosity.
   */
  includeExplanation?: boolean
}

type Lang =
  | 'abap'
  | 'actionscript-3'
  | 'ada'
  | 'apache'
  | 'apex'
  | 'apl'
  | 'applescript'
  | 'ara'
  | 'asm'
  | 'astro'
  | 'awk'
  | 'ballerina'
  | 'bat'
  | 'batch'
  | 'beancount'
  | 'berry'
  | 'be'
  | 'bibtex'
  | 'bicep'
  | 'blade'
  | 'c'
  | 'cadence'
  | 'cdc'
  | 'clarity'
  | 'clojure'
  | 'clj'
  | 'cmake'
  | 'cobol'
  | 'codeql'
  | 'ql'
  | 'coffee'
  | 'cpp'
  | 'crystal'
  | 'csharp'
  | 'c#'
  | 'cs'
  | 'css'
  | 'cue'
  | 'cypher'
  | 'cql'
  | 'd'
  | 'dart'
  | 'dax'
  | 'diff'
  | 'docker'
  | 'dockerfile'
  | 'dream-maker'
  | 'elixir'
  | 'elm'
  | 'erb'
  | 'erlang'
  | 'erl'
  | 'fish'
  | 'fsharp'
  | 'f#'
  | 'fs'
  | 'gdresource'
  | 'gdscript'
  | 'gdshader'
  | 'gherkin'
  | 'git-commit'
  | 'git-rebase'
  | 'glimmer-js'
  | 'gjs'
  | 'glimmer-ts'
  | 'gts'
  | 'glsl'
  | 'gnuplot'
  | 'go'
  | 'graphql'
  | 'groovy'
  | 'hack'
  | 'haml'
  | 'handlebars'
  | 'hbs'
  | 'haskell'
  | 'hs'
  | 'hcl'
  | 'hjson'
  | 'hlsl'
  | 'html'
  | 'http'
  | 'imba'
  | 'ini'
  | 'properties'
  | 'java'
  | 'javascript'
  | 'js'
  | 'jinja-html'
  | 'jison'
  | 'json'
  | 'json5'
  | 'jsonc'
  | 'jsonl'
  | 'jsonnet'
  | 'jssm'
  | 'fsl'
  | 'jsx'
  | 'julia'
  | 'kotlin'
  | 'kusto'
  | 'kql'
  | 'latex'
  | 'less'
  | 'liquid'
  | 'lisp'
  | 'logo'
  | 'lua'
  | 'make'
  | 'makefile'
  | 'markdown'
  | 'md'
  | 'marko'
  | 'matlab'
  | 'mdc'
  | 'mdx'
  | 'mermaid'
  | 'mojo'
  | 'narrat'
  | 'nar'
  | 'nextflow'
  | 'nf'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'objective-c'
  | 'objc'
  | 'objective-cpp'
  | 'ocaml'
  | 'pascal'
  | 'perl'
  | 'php'
  | 'plsql'
  | 'postcss'
  | 'powerquery'
  | 'powershell'
  | 'ps'
  | 'ps1'
  | 'prisma'
  | 'prolog'
  | 'proto'
  | 'pug'
  | 'jade'
  | 'puppet'
  | 'purescript'
  | 'python'
  | 'py'
  | 'r'
  | 'raku'
  | 'perl6'
  | 'razor'
  | 'reg'
  | 'rel'
  | 'riscv'
  | 'rst'
  | 'ruby'
  | 'rb'
  | 'rust'
  | 'rs'
  | 'sas'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'shaderlab'
  | 'shader'
  | 'shellscript'
  | 'bash'
  | 'sh'
  | 'shell'
  | 'zsh'
  | 'shellsession'
  | 'console'
  | 'smalltalk'
  | 'solidity'
  | 'sparql'
  | 'splunk'
  | 'spl'
  | 'sql'
  | 'ssh-config'
  | 'stata'
  | 'stylus'
  | 'styl'
  | 'svelte'
  | 'swift'
  | 'system-verilog'
  | 'tasl'
  | 'tcl'
  | 'tex'
  | 'toml'
  | 'tsx'
  | 'turtle'
  | 'twig'
  | 'typescript'
  | 'ts'
  | 'v'
  | 'vb'
  | 'cmd'
  | 'verilog'
  | 'vhdl'
  | 'viml'
  | 'vim'
  | 'vimscript'
  | 'vue-html'
  | 'vue'
  | 'vyper'
  | 'vy'
  | 'wasm'
  | 'wenyan'
  | '文言'
  | 'wgsl'
  | 'wolfram'
  | 'xml'
  | 'xsl'
  | 'yaml'
  | 'yml'
  | 'zenscript'
  | 'zig'
declare const languages: ILanguageRegistration[]

declare function getHighlighter(options: HighlighterOptions): Promise<Highlighter>

declare function renderToHtml(lines: IThemedToken[][], options?: HtmlRendererOptions): string

declare global {
  interface Response {
    json(): Promise<any>
    text(): Promise<any>
  }
}

/**
 * Set the route for loading the assets
 * URL should end with `/`
 *
 * For example:
 * ```ts
 * setCDN('https://unpkg.com/shiki/') // use unpkg
 * setCDN('/assets/shiki/') // serve by yourself
 * ```
 */
declare function setCDN(root: string): void
/**
 * Explicitly set the source for loading the oniguruma web assembly module.
 *  *
 * Accepts ArrayBuffer or Response (usage of string is deprecated)
 */
declare function setWasm(data: string | ArrayBuffer | Response): void
/**
 * @param themePath related path to theme.json
 */
declare function fetchTheme(themePath: string): Promise<IShikiTheme>
declare function toShikiTheme(rawTheme: IRawTheme): IShikiTheme

/** @deprecated use setWasm instead, will be removed in a future version */
declare function setOnigasmWASM(path: string | ArrayBuffer): void

export {
  languages as BUNDLED_LANGUAGES,
  themes as BUNDLED_THEMES,
  FontStyle,
  Highlighter,
  HighlighterOptions,
  HtmlRendererOptions,
  ILanguageRegistration,
  IShikiTheme,
  IThemeRegistration,
  IThemedToken,
  Lang,
  Theme,
  getHighlighter,
  fetchTheme as loadTheme,
  renderToHtml,
  setCDN,
  setOnigasmWASM,
  setWasm,
  toShikiTheme
}
