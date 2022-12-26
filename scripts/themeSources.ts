/**
 * All themes in vscode are copied over, with some transformations
 */

/**
 * Remove these themes bundled in vscode
 */
export const vscodeThemesToRemove = [
  // Included in dark_plus
  'dark_vs',
  'dark_plus_experimental',
  // Included in light_plus
  'light_vs',
  'light_plus_experimental',
  'Red-color-theme',
  'dimmed-monokai-color-theme',
  'kimbie-dark-color-theme',
  'quietlight-color-theme',
  'abyss-color-theme',
  'hc_black',
  'tomorrow-night-blue-color-theme'
]

/**
 * Rename these themes bundled in vscode
 */
export const vscodeThemesToRename = {
  dark_plus: 'dark-plus',
  light_plus: 'light-plus',
  'monokai-color-theme': 'monokai',
  'solarized-dark-color-theme': 'solarized-dark',
  'solarized-light-color-theme': 'solarized-light'
}

/**
 * All theme sources on github.com.
 *
 * To add one:
 * - Insert `[name, url]` to the list sorted by `name`
 * - Run `pnpm update:themes`, examine the changes
 */
export const githubThemeSources: [string, string][] = [
  [
    'nord',
    'https://github.com/arcticicestudio/nord-visual-studio-code/blob/develop/themes/nord-color-theme.json'
  ],
  ['min-light', 'https://github.com/misolori/min-theme/blob/master/themes/min-light.json'],
  ['min-dark', 'https://github.com/misolori/min-theme/blob/master/themes/min-dark.json'],
  [
    'slack-ochin',
    'https://github.com/slack-theme/visual-studio-code/blob/master/themes/ochin.json'
  ],
  [
    'slack-dark',
    'https://github.com/slack-theme/visual-studio-code/blob/master/themes/dark-mode.json'
  ],
  [
    'poimandres',
    'https://github.com/drcmda/poimandres-theme/blob/main/themes/poimandres-color-theme.json'
  ],
  ['rose-pine', 'https://github.com/rose-pine/vscode/blob/main/themes/rose-pine-color-theme.json'],
  [
    'rose-pine-dawn',
    'https://github.com/rose-pine/vscode/blob/main/themes/rose-pine-dawn-color-theme.json'
  ],
  [
    'rose-pine-moon',
    'https://github.com/rose-pine/vscode/blob/main/themes/rose-pine-moon-color-theme.json'
  ],
  [
    'shades-of-purple',
    'https://github.com/ahmadawais/shades-of-purple-vscode/blob/master/themes/shades-of-purple-color-theme.json'
  ],
  [
    'shades-of-purple-super-dark',
    'https://github.com/ahmadawais/shades-of-purple-vscode/blob/master/themes/shades-of-purple-color-theme-super-dark.json'
  ],
  [
    'synthwave-84',
    'https://github.com/robb0wen/synthwave-vscode/blob/master/themes/synthwave-color-theme.json'
  ],
  ['noctis', 'https://github.com/liviuschera/noctis/blob/master/themes/noctis.json'],
  ['noctis-azureus', 'https://github.com/liviuschera/noctis/blob/master/themes/azureus.json'],
  ['noctis-bordo', 'https://github.com/liviuschera/noctis/blob/master/themes/bordo.json'],
  ['noctis-hibernus', 'https://github.com/liviuschera/noctis/blob/master/themes/hibernus.json'],
  ['noctis-lilac', 'https://github.com/liviuschera/noctis/blob/master/themes/lilac.json'],
  ['noctis-lux', 'https://github.com/liviuschera/noctis/blob/master/themes/lux.json'],
  ['noctis-minimus', 'https://github.com/liviuschera/noctis/blob/master/themes/minimus.json'],
  ['noctis-obscuro', 'https://github.com/liviuschera/noctis/blob/master/themes/obscuro.json'],
  ['noctis-sereno', 'https://github.com/liviuschera/noctis/blob/master/themes/sereno.json'],
  ['noctis-uva', 'https://github.com/liviuschera/noctis/blob/master/themes/uva.json'],
  ['noctis-viola', 'https://github.com/liviuschera/noctis/blob/master/themes/viola.json'],
  [
    'tokyo-night',
    'https://github.com/enkia/tokyo-night-vscode-theme/blob/master/themes/tokyo-night-color-theme.json'
  ],
  [
    'tokyo-night-storm',
    'https://github.com/enkia/tokyo-night-vscode-theme/blob/master/themes/tokyo-night-storm-color-theme.json'
  ],
  [
    'tokyo-night-light',
    'https://github.com/enkia/tokyo-night-vscode-theme/blob/master/themes/tokyo-night-light-color-theme.json'
  ],
  ['colbalt2', 'https://github.com/wesbos/cobalt2-vscode/blob/master/theme/cobalt2.json'],
  [
    'palenight',
    'https://github.com/whizkydee/vscode-palenight-theme/blob/master/themes/palenight.json'
  ],
  ['ayu-dark', 'https://github.com/ayu-theme/vscode-ayu/blob/master/ayu-dark.json'],
  ['ayu-mirage', 'https://github.com/ayu-theme/vscode-ayu/blob/master/ayu-mirage.json'],
  ['ayu-light', 'https://github.com/ayu-theme/vscode-ayu/blob/master/ayu-light.json'],
  [
    'winter-is-coming',
    'https://github.com/johnpapa/vscode-winteriscoming/blob/master/themes/WinterIsComing-dark-blue-color-theme.json'
  ],
  [
    'winter-is-coming-dark',
    'https://github.com/johnpapa/vscode-winteriscoming/blob/master/themes/WinterIsComing-dark-color-theme.json'
  ],
  [
    'winter-is-coming-light',
    'https://github.com/johnpapa/vscode-winteriscoming/blob/master/themes/WinterIsComing-light-color-theme.json'
  ],
  [
    'night-owl',
    'https://github.com/sdras/night-owl-vscode-theme/blob/main/themes/Night%20Owl-color-theme.json'
  ],
  [
    'night-owl-light',
    'https://github.com/sdras/night-owl-vscode-theme/blob/main/themes/Night%20Owl-Light-color-theme.json'
  ]
]

/**
 * Themes from VS Code marketplace
 * Some themes have compilation step and do not include the built theme on GitHub,
 * so pull from VS Code marketplace instead.
 *
 * Key is publisher + extId
 * Value is a list. Each item represents a file to extract from the downloaded VSIX.
 * If given a single path `extension/foo/bar.json`, extract `bar.json` to `tmp/themes/bar.json`
 * If given ['baz.json', `extension/foo/bar.json`], extract `bar.json` to `tmp/themes/baz.json`
 */
export const marketplaceThemeSources: { [extPublisherAndId: string]: [string, string][] } = {
  'equinusocio.vsc-material-theme': [
    ['material-darker.json', 'extension/build/themes/Material-Theme-Darker.json'],
    ['material-default.json', 'extension/build/themes/Material-Theme-Default.json'],
    ['material-lighter.json', 'extension/build/themes/Material-Theme-Lighter.json'],
    ['material-ocean.json', 'extension/build/themes/Material-Theme-Ocean.json'],
    ['material-palenight.json', 'extension/build/themes/Material-Theme-Palenight.json']
  ],
  'dracula-theme.theme-dracula': [
    ['dracula.json', 'extension/theme/dracula.json'],
    ['dracula-soft.json', 'extension/theme/dracula-soft.json']
  ],
  'GitHub.github-vscode-theme': [
    ['github-dark-dimmed.json', 'extension/themes/dark-dimmed.json'],
    ['github-dark.json', 'extension/themes/dark-default.json'],
    ['github-light.json', 'extension/themes/light-default.json']
  ],
  'antfu.theme-vitesse': [
    ['vitesse-dark.json', 'extension/themes/vitesse-dark.json'],
    ['vitesse-light.json', 'extension/themes/vitesse-light.json']
  ],
  'zhuangtongfa.material-theme': [['one-dark-pro.json', 'extension/themes/OneDark-Pro.json']]
}
