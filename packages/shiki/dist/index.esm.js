import { loadWASM, createOnigScanner, createOnigString } from 'vscode-oniguruma'
import { INITIAL, Registry as Registry$1 } from 'vscode-textmate'

const themes = [
  'css-variables',
  'dark-plus',
  'dracula-soft',
  'dracula',
  'github-dark-dimmed',
  'github-dark',
  'github-light',
  'hc_light',
  'light-plus',
  'material-darker',
  'material-default',
  'material-lighter',
  'material-ocean',
  'material-palenight',
  'min-dark',
  'min-light',
  'monokai',
  'nord',
  'one-dark-pro',
  'poimandres',
  'rose-pine-dawn',
  'rose-pine-moon',
  'rose-pine',
  'shades-of-purple-super-dark',
  'shades-of-purple',
  'slack-dark',
  'slack-ochin',
  'solarized-dark',
  'solarized-light',
  'synthwave-84',
  'vitesse-dark',
  'vitesse-light'
]

const languages = [
  {
    id: 'abap',
    scopeName: 'source.abap',
    path: 'abap.tmLanguage.json',
    samplePath: 'abap.sample'
  },
  {
    id: 'actionscript-3',
    scopeName: 'source.actionscript.3',
    path: 'actionscript-3.tmLanguage.json',
    samplePath: 'actionscript-3.sample'
  },
  {
    id: 'ada',
    scopeName: 'source.ada',
    path: 'ada.tmLanguage.json',
    samplePath: 'ada.sample'
  },
  {
    id: 'apache',
    scopeName: 'source.apacheconf',
    path: 'apache.tmLanguage.json'
  },
  {
    id: 'apex',
    scopeName: 'source.apex',
    path: 'apex.tmLanguage.json',
    samplePath: 'apex.sample'
  },
  {
    id: 'apl',
    scopeName: 'source.apl',
    path: 'apl.tmLanguage.json',
    embeddedLangs: ['html', 'xml', 'css', 'javascript', 'json']
  },
  {
    id: 'applescript',
    scopeName: 'source.applescript',
    path: 'applescript.tmLanguage.json',
    samplePath: 'applescript.sample'
  },
  {
    id: 'asm',
    scopeName: 'source.asm.x86_64',
    path: 'asm.tmLanguage.json',
    samplePath: 'asm.sample'
  },
  {
    id: 'astro',
    scopeName: 'source.astro',
    path: 'astro.tmLanguage.json',
    samplePath: 'astro.sample',
    embeddedLangs: [
      'json',
      'javascript',
      'typescript',
      'tsx',
      'css',
      'less',
      'sass',
      'scss',
      'stylus'
    ]
  },
  {
    id: 'awk',
    scopeName: 'source.awk',
    path: 'awk.tmLanguage.json',
    samplePath: 'awk.sample'
  },
  {
    id: 'ballerina',
    scopeName: 'source.ballerina',
    path: 'ballerina.tmLanguage.json',
    samplePath: 'ballerina.sample'
  },
  {
    id: 'bat',
    scopeName: 'source.batchfile',
    path: 'bat.tmLanguage.json',
    samplePath: 'bat.sample',
    aliases: ['batch']
  },
  {
    id: 'berry',
    scopeName: 'source.berry',
    path: 'berry.tmLanguage.json',
    samplePath: 'berry.sample',
    aliases: ['be']
  },
  {
    id: 'bibtex',
    scopeName: 'text.bibtex',
    path: 'bibtex.tmLanguage.json'
  },
  {
    id: 'bicep',
    scopeName: 'source.bicep',
    path: 'bicep.tmLanguage.json',
    samplePath: 'bicep.sample'
  },
  {
    id: 'blade',
    scopeName: 'text.html.php.blade',
    path: 'blade.tmLanguage.json',
    samplePath: 'blade.sample',
    embeddedLangs: ['html', 'xml', 'sql', 'javascript', 'json', 'css']
  },
  {
    id: 'c',
    scopeName: 'source.c',
    path: 'c.tmLanguage.json',
    samplePath: 'c.sample'
  },
  {
    id: 'cadence',
    scopeName: 'source.cadence',
    path: 'cadence.tmLanguage.json',
    samplePath: 'cadence.sample',
    aliases: ['cdc']
  },
  {
    id: 'clarity',
    scopeName: 'source.clar',
    path: 'clarity.tmLanguage.json',
    samplePath: 'clarity.sample'
  },
  {
    id: 'clojure',
    scopeName: 'source.clojure',
    path: 'clojure.tmLanguage.json',
    samplePath: 'clojure.sample',
    aliases: ['clj']
  },
  {
    id: 'cmake',
    scopeName: 'source.cmake',
    path: 'cmake.tmLanguage.json',
    samplePath: 'cmake.sample'
  },
  {
    id: 'cobol',
    scopeName: 'source.cobol',
    path: 'cobol.tmLanguage.json',
    samplePath: 'cobol.sample',
    embeddedLangs: ['sql', 'html', 'java']
  },
  {
    id: 'codeql',
    scopeName: 'source.ql',
    path: 'codeql.tmLanguage.json',
    samplePath: 'codeql.sample',
    aliases: ['ql'],
    embeddedLangs: ['markdown']
  },
  {
    id: 'coffee',
    scopeName: 'source.coffee',
    path: 'coffee.tmLanguage.json',
    samplePath: 'coffee.sample',
    embeddedLangs: ['javascript']
  },
  {
    id: 'cpp',
    scopeName: 'source.cpp',
    path: 'cpp.tmLanguage.json',
    samplePath: 'cpp.sample',
    embeddedLangs: ['glsl', 'sql']
  },
  {
    id: 'crystal',
    scopeName: 'source.crystal',
    path: 'crystal.tmLanguage.json',
    samplePath: 'crystal.sample',
    embeddedLangs: ['html', 'sql', 'css', 'c', 'javascript', 'shellscript']
  },
  {
    id: 'csharp',
    scopeName: 'source.cs',
    path: 'csharp.tmLanguage.json',
    samplePath: 'csharp.sample',
    aliases: ['c#', 'cs']
  },
  {
    id: 'css',
    scopeName: 'source.css',
    path: 'css.tmLanguage.json',
    samplePath: 'css.sample'
  },
  {
    id: 'cue',
    scopeName: 'source.cue',
    path: 'cue.tmLanguage.json',
    samplePath: 'cue.sample'
  },
  {
    id: 'd',
    scopeName: 'source.d',
    path: 'd.tmLanguage.json',
    samplePath: 'd.sample'
  },
  {
    id: 'dart',
    scopeName: 'source.dart',
    path: 'dart.tmLanguage.json',
    samplePath: 'dart.sample'
  },
  {
    id: 'diff',
    scopeName: 'source.diff',
    path: 'diff.tmLanguage.json',
    samplePath: 'diff.sample'
  },
  {
    id: 'docker',
    scopeName: 'source.dockerfile',
    path: 'docker.tmLanguage.json',
    samplePath: 'docker.sample'
  },
  {
    id: 'dream-maker',
    scopeName: 'source.dm',
    path: 'dream-maker.tmLanguage.json'
  },
  {
    id: 'elixir',
    scopeName: 'source.elixir',
    path: 'elixir.tmLanguage.json',
    samplePath: 'elixir.sample',
    embeddedLangs: ['html']
  },
  {
    id: 'elm',
    scopeName: 'source.elm',
    path: 'elm.tmLanguage.json',
    samplePath: 'elm.sample',
    embeddedLangs: ['glsl']
  },
  {
    id: 'erb',
    scopeName: 'text.html.erb',
    path: 'erb.tmLanguage.json',
    samplePath: 'erb.sample',
    embeddedLangs: ['html', 'ruby']
  },
  {
    id: 'erlang',
    scopeName: 'source.erlang',
    path: 'erlang.tmLanguage.json',
    samplePath: 'erlang.sample',
    aliases: ['erl']
  },
  {
    id: 'fish',
    scopeName: 'source.fish',
    path: 'fish.tmLanguage.json',
    samplePath: 'fish.sample'
  },
  {
    id: 'fsharp',
    scopeName: 'source.fsharp',
    path: 'fsharp.tmLanguage.json',
    samplePath: 'fsharp.sample',
    aliases: ['f#', 'fs'],
    embeddedLangs: ['markdown']
  },
  {
    id: 'gherkin',
    scopeName: 'text.gherkin.feature',
    path: 'gherkin.tmLanguage.json'
  },
  {
    id: 'git-commit',
    scopeName: 'text.git-commit',
    path: 'git-commit.tmLanguage.json',
    embeddedLangs: ['diff']
  },
  {
    id: 'git-rebase',
    scopeName: 'text.git-rebase',
    path: 'git-rebase.tmLanguage.json',
    embeddedLangs: ['shellscript']
  },
  {
    id: 'glsl',
    scopeName: 'source.glsl',
    path: 'glsl.tmLanguage.json',
    samplePath: 'glsl.sample',
    embeddedLangs: ['c']
  },
  {
    id: 'gnuplot',
    scopeName: 'source.gnuplot',
    path: 'gnuplot.tmLanguage.json'
  },
  {
    id: 'go',
    scopeName: 'source.go',
    path: 'go.tmLanguage.json',
    samplePath: 'go.sample'
  },
  {
    id: 'graphql',
    scopeName: 'source.graphql',
    path: 'graphql.tmLanguage.json',
    embeddedLangs: ['javascript', 'typescript', 'jsx', 'tsx']
  },
  {
    id: 'groovy',
    scopeName: 'source.groovy',
    path: 'groovy.tmLanguage.json'
  },
  {
    id: 'hack',
    scopeName: 'source.hack',
    path: 'hack.tmLanguage.json',
    embeddedLangs: ['html', 'sql']
  },
  {
    id: 'haml',
    scopeName: 'text.haml',
    path: 'haml.tmLanguage.json',
    embeddedLangs: ['ruby', 'javascript', 'sass', 'coffee', 'markdown', 'css']
  },
  {
    id: 'handlebars',
    scopeName: 'text.html.handlebars',
    path: 'handlebars.tmLanguage.json',
    aliases: ['hbs'],
    embeddedLangs: ['html', 'css', 'javascript', 'yaml']
  },
  {
    id: 'haskell',
    scopeName: 'source.haskell',
    path: 'haskell.tmLanguage.json',
    aliases: ['hs']
  },
  {
    id: 'hcl',
    scopeName: 'source.hcl',
    path: 'hcl.tmLanguage.json',
    samplePath: 'hcl.sample'
  },
  {
    id: 'hlsl',
    scopeName: 'source.hlsl',
    path: 'hlsl.tmLanguage.json'
  },
  {
    id: 'html',
    scopeName: 'text.html.basic',
    path: 'html.tmLanguage.json',
    samplePath: 'html.sample',
    embeddedLangs: ['javascript', 'css']
  },
  {
    id: 'imba',
    scopeName: 'source.imba',
    path: 'imba.tmLanguage.json',
    samplePath: 'imba.sample'
  },
  {
    id: 'ini',
    scopeName: 'source.ini',
    path: 'ini.tmLanguage.json'
  },
  {
    id: 'java',
    scopeName: 'source.java',
    path: 'java.tmLanguage.json',
    samplePath: 'java.sample'
  },
  {
    id: 'javascript',
    scopeName: 'source.js',
    path: 'javascript.tmLanguage.json',
    samplePath: 'javascript.sample',
    aliases: ['js']
  },
  {
    id: 'jinja-html',
    scopeName: 'text.html.jinja',
    path: 'jinja-html.tmLanguage.json',
    embeddedLangs: ['html']
  },
  {
    id: 'json',
    scopeName: 'source.json',
    path: 'json.tmLanguage.json'
  },
  {
    id: 'json5',
    scopeName: 'source.json5',
    path: 'json5.tmLanguage.json',
    samplePath: 'json5.sample'
  },
  {
    id: 'jsonc',
    scopeName: 'source.json.comments',
    path: 'jsonc.tmLanguage.json'
  },
  {
    id: 'jsonnet',
    scopeName: 'source.jsonnet',
    path: 'jsonnet.tmLanguage.json'
  },
  {
    id: 'jssm',
    scopeName: 'source.jssm',
    path: 'jssm.tmLanguage.json',
    samplePath: 'jssm.sample',
    aliases: ['fsl']
  },
  {
    id: 'jsx',
    scopeName: 'source.js.jsx',
    path: 'jsx.tmLanguage.json'
  },
  {
    id: 'julia',
    scopeName: 'source.julia',
    path: 'julia.tmLanguage.json',
    embeddedLangs: ['cpp', 'python', 'javascript', 'r', 'sql']
  },
  {
    id: 'kotlin',
    scopeName: 'source.kotlin',
    path: 'kotlin.tmLanguage.json'
  },
  {
    id: 'latex',
    scopeName: 'text.tex.latex',
    path: 'latex.tmLanguage.json',
    embeddedLangs: [
      'tex',
      'css',
      'haskell',
      'html',
      'xml',
      'java',
      'lua',
      'julia',
      'ruby',
      'javascript',
      'typescript',
      'python',
      'yaml',
      'rust',
      'scala',
      'gnuplot'
    ]
  },
  {
    id: 'less',
    scopeName: 'source.css.less',
    path: 'less.tmLanguage.json',
    embeddedLangs: ['css']
  },
  {
    id: 'liquid',
    scopeName: 'text.html.liquid',
    path: 'liquid.tmLanguage.json',
    samplePath: 'liquid.sample',
    embeddedLangs: ['html', 'css', 'json', 'javascript']
  },
  {
    id: 'lisp',
    scopeName: 'source.lisp',
    path: 'lisp.tmLanguage.json'
  },
  {
    id: 'logo',
    scopeName: 'source.logo',
    path: 'logo.tmLanguage.json'
  },
  {
    id: 'lua',
    scopeName: 'source.lua',
    path: 'lua.tmLanguage.json',
    embeddedLangs: ['c']
  },
  {
    id: 'make',
    scopeName: 'source.makefile',
    path: 'make.tmLanguage.json',
    aliases: ['makefile']
  },
  {
    id: 'markdown',
    scopeName: 'text.html.markdown',
    path: 'markdown.tmLanguage.json',
    aliases: ['md'],
    embeddedLangs: [
      'css',
      'html',
      'ini',
      'java',
      'lua',
      'make',
      'perl',
      'r',
      'ruby',
      'php',
      'sql',
      'vb',
      'xml',
      'xsl',
      'yaml',
      'bat',
      'clojure',
      'coffee',
      'c',
      'cpp',
      'diff',
      'docker',
      'git-commit',
      'git-rebase',
      'go',
      'groovy',
      'pug',
      'javascript',
      'json',
      'jsonc',
      'less',
      'objective-c',
      'swift',
      'scss',
      'raku',
      'powershell',
      'python',
      'julia',
      'rust',
      'scala',
      'shellscript',
      'typescript',
      'tsx',
      'csharp',
      'fsharp',
      'dart',
      'handlebars',
      'erlang',
      'elixir',
      'latex',
      'bibtex'
    ]
  },
  {
    id: 'marko',
    scopeName: 'text.marko',
    path: 'marko.tmLanguage.json',
    embeddedLangs: ['css', 'less', 'scss', 'typescript']
  },
  {
    id: 'matlab',
    scopeName: 'source.matlab',
    path: 'matlab.tmLanguage.json'
  },
  {
    id: 'mdx',
    scopeName: 'text.html.markdown.jsx',
    path: 'mdx.tmLanguage.json',
    embeddedLangs: ['jsx', 'markdown']
  },
  {
    id: 'mermaid',
    scopeName: 'source.mermaid',
    path: 'mermaid.tmLanguage.json'
  },
  {
    id: 'nginx',
    scopeName: 'source.nginx',
    path: 'nginx.tmLanguage.json',
    embeddedLangs: ['lua']
  },
  {
    id: 'nim',
    scopeName: 'source.nim',
    path: 'nim.tmLanguage.json',
    embeddedLangs: ['c', 'html', 'xml', 'javascript', 'css', 'glsl', 'markdown']
  },
  {
    id: 'nix',
    scopeName: 'source.nix',
    path: 'nix.tmLanguage.json'
  },
  {
    id: 'objective-c',
    scopeName: 'source.objc',
    path: 'objective-c.tmLanguage.json',
    aliases: ['objc']
  },
  {
    id: 'objective-cpp',
    scopeName: 'source.objcpp',
    path: 'objective-cpp.tmLanguage.json'
  },
  {
    id: 'ocaml',
    scopeName: 'source.ocaml',
    path: 'ocaml.tmLanguage.json'
  },
  {
    id: 'pascal',
    scopeName: 'source.pascal',
    path: 'pascal.tmLanguage.json'
  },
  {
    id: 'perl',
    scopeName: 'source.perl',
    path: 'perl.tmLanguage.json',
    embeddedLangs: ['html', 'xml', 'css', 'javascript', 'sql']
  },
  {
    id: 'php',
    scopeName: 'source.php',
    path: 'php.tmLanguage.json',
    embeddedLangs: ['html', 'xml', 'sql', 'javascript', 'json', 'css']
  },
  {
    id: 'plsql',
    scopeName: 'source.plsql.oracle',
    path: 'plsql.tmLanguage.json'
  },
  {
    id: 'postcss',
    scopeName: 'source.css.postcss',
    path: 'postcss.tmLanguage.json'
  },
  {
    id: 'powershell',
    scopeName: 'source.powershell',
    path: 'powershell.tmLanguage.json',
    aliases: ['ps', 'ps1']
  },
  {
    id: 'prisma',
    scopeName: 'source.prisma',
    path: 'prisma.tmLanguage.json',
    samplePath: 'prisma.sample'
  },
  {
    id: 'prolog',
    scopeName: 'source.prolog',
    path: 'prolog.tmLanguage.json'
  },
  {
    id: 'proto',
    scopeName: 'source.proto',
    path: 'proto.tmLanguage.json',
    samplePath: 'proto.sample'
  },
  {
    id: 'pug',
    scopeName: 'text.pug',
    path: 'pug.tmLanguage.json',
    aliases: ['jade'],
    embeddedLangs: ['javascript', 'css', 'sass', 'scss', 'stylus', 'coffee', 'html']
  },
  {
    id: 'puppet',
    scopeName: 'source.puppet',
    path: 'puppet.tmLanguage.json'
  },
  {
    id: 'purescript',
    scopeName: 'source.purescript',
    path: 'purescript.tmLanguage.json'
  },
  {
    id: 'python',
    scopeName: 'source.python',
    path: 'python.tmLanguage.json',
    samplePath: 'python.sample',
    aliases: ['py']
  },
  {
    id: 'r',
    scopeName: 'source.r',
    path: 'r.tmLanguage.json'
  },
  {
    id: 'raku',
    scopeName: 'source.perl.6',
    path: 'raku.tmLanguage.json',
    aliases: ['perl6']
  },
  {
    id: 'razor',
    scopeName: 'text.aspnetcorerazor',
    path: 'razor.tmLanguage.json',
    embeddedLangs: ['html', 'csharp']
  },
  {
    id: 'rel',
    scopeName: 'source.rel',
    path: 'rel.tmLanguage.json',
    samplePath: 'rel.sample'
  },
  {
    id: 'riscv',
    scopeName: 'source.riscv',
    path: 'riscv.tmLanguage.json'
  },
  {
    id: 'rst',
    scopeName: 'source.rst',
    path: 'rst.tmLanguage.json',
    embeddedLangs: ['cpp', 'python', 'javascript', 'shellscript', 'yaml', 'cmake', 'ruby']
  },
  {
    id: 'ruby',
    scopeName: 'source.ruby',
    path: 'ruby.tmLanguage.json',
    samplePath: 'ruby.sample',
    aliases: ['rb'],
    embeddedLangs: ['html', 'xml', 'sql', 'css', 'c', 'javascript', 'shellscript', 'lua']
  },
  {
    id: 'rust',
    scopeName: 'source.rust',
    path: 'rust.tmLanguage.json',
    aliases: ['rs']
  },
  {
    id: 'sas',
    scopeName: 'source.sas',
    path: 'sas.tmLanguage.json',
    embeddedLangs: ['sql']
  },
  {
    id: 'sass',
    scopeName: 'source.sass',
    path: 'sass.tmLanguage.json'
  },
  {
    id: 'scala',
    scopeName: 'source.scala',
    path: 'scala.tmLanguage.json'
  },
  {
    id: 'scheme',
    scopeName: 'source.scheme',
    path: 'scheme.tmLanguage.json'
  },
  {
    id: 'scss',
    scopeName: 'source.css.scss',
    path: 'scss.tmLanguage.json',
    embeddedLangs: ['css']
  },
  {
    id: 'shaderlab',
    scopeName: 'source.shaderlab',
    path: 'shaderlab.tmLanguage.json',
    aliases: ['shader'],
    embeddedLangs: ['hlsl']
  },
  {
    id: 'shellscript',
    scopeName: 'source.shell',
    path: 'shellscript.tmLanguage.json',
    aliases: ['shell', 'bash', 'sh', 'zsh']
  },
  {
    id: 'smalltalk',
    scopeName: 'source.smalltalk',
    path: 'smalltalk.tmLanguage.json'
  },
  {
    id: 'solidity',
    scopeName: 'source.solidity',
    path: 'solidity.tmLanguage.json'
  },
  {
    id: 'sparql',
    scopeName: 'source.sparql',
    path: 'sparql.tmLanguage.json',
    samplePath: 'sparql.sample',
    embeddedLangs: ['turtle']
  },
  {
    id: 'sql',
    scopeName: 'source.sql',
    path: 'sql.tmLanguage.json'
  },
  {
    id: 'ssh-config',
    scopeName: 'source.ssh-config',
    path: 'ssh-config.tmLanguage.json'
  },
  {
    id: 'stata',
    scopeName: 'source.stata',
    path: 'stata.tmLanguage.json',
    samplePath: 'stata.sample',
    embeddedLangs: ['sql']
  },
  {
    id: 'stylus',
    scopeName: 'source.stylus',
    path: 'stylus.tmLanguage.json',
    aliases: ['styl']
  },
  {
    id: 'svelte',
    scopeName: 'source.svelte',
    path: 'svelte.tmLanguage.json',
    embeddedLangs: [
      'javascript',
      'typescript',
      'coffee',
      'stylus',
      'sass',
      'css',
      'scss',
      'less',
      'postcss',
      'pug',
      'markdown'
    ]
  },
  {
    id: 'swift',
    scopeName: 'source.swift',
    path: 'swift.tmLanguage.json'
  },
  {
    id: 'system-verilog',
    scopeName: 'source.systemverilog',
    path: 'system-verilog.tmLanguage.json'
  },
  {
    id: 'tasl',
    scopeName: 'source.tasl',
    path: 'tasl.tmLanguage.json',
    samplePath: 'tasl.sample'
  },
  {
    id: 'tcl',
    scopeName: 'source.tcl',
    path: 'tcl.tmLanguage.json'
  },
  {
    id: 'tex',
    scopeName: 'text.tex',
    path: 'tex.tmLanguage.json',
    embeddedLangs: ['r']
  },
  {
    id: 'toml',
    scopeName: 'source.toml',
    path: 'toml.tmLanguage.json'
  },
  {
    id: 'tsx',
    scopeName: 'source.tsx',
    path: 'tsx.tmLanguage.json',
    samplePath: 'tsx.sample'
  },
  {
    id: 'turtle',
    scopeName: 'source.turtle',
    path: 'turtle.tmLanguage.json',
    samplePath: 'turtle.sample'
  },
  {
    id: 'twig',
    scopeName: 'text.html.twig',
    path: 'twig.tmLanguage.json',
    embeddedLangs: ['css', 'javascript', 'php', 'python', 'ruby']
  },
  {
    id: 'typescript',
    scopeName: 'source.ts',
    path: 'typescript.tmLanguage.json',
    aliases: ['ts']
  },
  {
    id: 'v',
    scopeName: 'source.v',
    path: 'v.tmLanguage.json',
    samplePath: 'v.sample'
  },
  {
    id: 'vb',
    scopeName: 'source.asp.vb.net',
    path: 'vb.tmLanguage.json',
    aliases: ['cmd']
  },
  {
    id: 'verilog',
    scopeName: 'source.verilog',
    path: 'verilog.tmLanguage.json'
  },
  {
    id: 'vhdl',
    scopeName: 'source.vhdl',
    path: 'vhdl.tmLanguage.json'
  },
  {
    id: 'viml',
    scopeName: 'source.viml',
    path: 'viml.tmLanguage.json',
    aliases: ['vim', 'vimscript']
  },
  {
    id: 'vue-html',
    scopeName: 'text.html.vue-html',
    path: 'vue-html.tmLanguage.json',
    embeddedLangs: ['vue', 'javascript']
  },
  {
    id: 'vue',
    scopeName: 'source.vue',
    path: 'vue.tmLanguage.json',
    embeddedLangs: [
      'html',
      'markdown',
      'pug',
      'stylus',
      'sass',
      'css',
      'scss',
      'less',
      'javascript',
      'typescript',
      'jsx',
      'tsx',
      'json',
      'jsonc',
      'json5',
      'yaml',
      'toml',
      'graphql'
    ]
  },
  {
    id: 'wasm',
    scopeName: 'source.wat',
    path: 'wasm.tmLanguage.json'
  },
  {
    id: 'wenyan',
    scopeName: 'source.wenyan',
    path: 'wenyan.tmLanguage.json',
    aliases: ['\u6587\u8A00']
  },
  {
    id: 'xml',
    scopeName: 'text.xml',
    path: 'xml.tmLanguage.json',
    embeddedLangs: ['java']
  },
  {
    id: 'xsl',
    scopeName: 'text.xml.xsl',
    path: 'xsl.tmLanguage.json',
    embeddedLangs: ['xml']
  },
  {
    id: 'yaml',
    scopeName: 'source.yaml',
    path: 'yaml.tmLanguage.json'
  },
  {
    id: 'zenscript',
    scopeName: 'source.zenscript',
    path: 'zenscript.tmLanguage.json',
    samplePath: 'zenscript.sample'
  }
]

var FontStyle = /* @__PURE__ */ (FontStyle2 => {
  FontStyle2[(FontStyle2['NotSet'] = -1)] = 'NotSet'
  FontStyle2[(FontStyle2['None'] = 0)] = 'None'
  FontStyle2[(FontStyle2['Italic'] = 1)] = 'Italic'
  FontStyle2[(FontStyle2['Bold'] = 2)] = 'Bold'
  FontStyle2[(FontStyle2['Underline'] = 4)] = 'Underline'
  return FontStyle2
})(FontStyle || {})
class StackElementMetadata {
  static toBinaryStr(metadata) {
    let r = metadata.toString(2)
    while (r.length < 32) {
      r = '0' + r
    }
    return r
  }
  static printMetadata(metadata) {
    let languageId = StackElementMetadata.getLanguageId(metadata)
    let tokenType = StackElementMetadata.getTokenType(metadata)
    let fontStyle = StackElementMetadata.getFontStyle(metadata)
    let foreground = StackElementMetadata.getForeground(metadata)
    let background = StackElementMetadata.getBackground(metadata)
    console.log({
      languageId,
      tokenType,
      fontStyle,
      foreground,
      background
    })
  }
  static getLanguageId(metadata) {
    return (metadata & 255) /* LANGUAGEID_MASK */ >>> 0 /* LANGUAGEID_OFFSET */
  }
  static getTokenType(metadata) {
    return (metadata & 768) /* TOKEN_TYPE_MASK */ >>> 8 /* TOKEN_TYPE_OFFSET */
  }
  static getFontStyle(metadata) {
    return (metadata & 14336) /* FONT_STYLE_MASK */ >>> 11 /* FONT_STYLE_OFFSET */
  }
  static getForeground(metadata) {
    return (metadata & 8372224) /* FOREGROUND_MASK */ >>> 15 /* FOREGROUND_OFFSET */
  }
  static getBackground(metadata) {
    return (metadata & 4286578688) /* BACKGROUND_MASK */ >>> 24 /* BACKGROUND_OFFSET */
  }
  static containsBalancedBrackets(metadata) {
    return (metadata & 1024) /* BALANCED_BRACKETS_MASK */ !== 0
  }
  static set(metadata, languageId, tokenType, fontStyle, foreground, background) {
    let _languageId = StackElementMetadata.getLanguageId(metadata)
    let _tokenType = StackElementMetadata.getTokenType(metadata)
    let _fontStyle = StackElementMetadata.getFontStyle(metadata)
    let _foreground = StackElementMetadata.getForeground(metadata)
    let _background = StackElementMetadata.getBackground(metadata)
    let _containsBalancedBracketsBit = StackElementMetadata.containsBalancedBrackets(metadata)
      ? 1
      : 0
    if (languageId !== 0) {
      _languageId = languageId
    }
    if (tokenType !== 0 /* Other */) {
      _tokenType = tokenType === 8 /* MetaEmbedded */ ? 0 /* Other */ : tokenType
    }
    if (fontStyle !== -1 /* NotSet */) {
      _fontStyle = fontStyle
    }
    if (foreground !== 0) {
      _foreground = foreground
    }
    if (background !== 0) {
      _background = background
    }
    return (
      ((_languageId << 0) /* LANGUAGEID_OFFSET */ |
        (_tokenType << 8) /* TOKEN_TYPE_OFFSET */ |
        (_fontStyle << 11) /* FONT_STYLE_OFFSET */ |
        (_containsBalancedBracketsBit << 10) /* BALANCED_BRACKETS_OFFSET */ |
        (_foreground << 15) /* FOREGROUND_OFFSET */ |
        (_background << 24)) /* BACKGROUND_OFFSET */ >>>
      0
    )
  }
}

function trimEndSlash(str) {
  if (str.endsWith('/') || str.endsWith('\\')) return str.slice(0, -1)
  return str
}
function trimStartDot(str) {
  if (str.startsWith('./')) return str.slice(2)
  return str
}
function dirpathparts(str) {
  const parts = str.split(/[\/\\]/g)
  return parts.slice(0, parts.length - 1)
}
function join(...parts) {
  return parts.map(trimEndSlash).map(trimStartDot).join('/')
}
function groupBy(elements, keyGetter) {
  const map = /* @__PURE__ */ new Map()
  for (const element of elements) {
    const key = keyGetter(element)
    if (map.has(key)) {
      const group = map.get(key)
      group.push(element)
    } else {
      map.set(key, [element])
    }
  }
  return map
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Creates a JSON scanner on the given text.
 * If ignoreTrivia is set, whitespaces or comments are ignored.
 */
function createScanner(text, ignoreTrivia = false) {
  const len = text.length
  let pos = 0,
    value = '',
    tokenOffset = 0,
    token = 16 /* SyntaxKind.Unknown */,
    lineNumber = 0,
    lineStartOffset = 0,
    tokenLineStartOffset = 0,
    prevTokenLineStartOffset = 0,
    scanError = 0 /* ScanError.None */
  function scanHexDigits(count, exact) {
    let digits = 0
    let value = 0
    while (digits < count || !exact) {
      let ch = text.charCodeAt(pos)
      if (ch >= 48 /* CharacterCodes._0 */ && ch <= 57 /* CharacterCodes._9 */) {
        value = value * 16 + ch - 48 /* CharacterCodes._0 */
      } else if (ch >= 65 /* CharacterCodes.A */ && ch <= 70 /* CharacterCodes.F */) {
        value = value * 16 + ch - 65 /* CharacterCodes.A */ + 10
      } else if (ch >= 97 /* CharacterCodes.a */ && ch <= 102 /* CharacterCodes.f */) {
        value = value * 16 + ch - 97 /* CharacterCodes.a */ + 10
      } else {
        break
      }
      pos++
      digits++
    }
    if (digits < count) {
      value = -1
    }
    return value
  }
  function setPosition(newPosition) {
    pos = newPosition
    value = ''
    tokenOffset = 0
    token = 16 /* SyntaxKind.Unknown */
    scanError = 0 /* ScanError.None */
  }
  function scanNumber() {
    let start = pos
    if (text.charCodeAt(pos) === 48 /* CharacterCodes._0 */) {
      pos++
    } else {
      pos++
      while (pos < text.length && isDigit(text.charCodeAt(pos))) {
        pos++
      }
    }
    if (pos < text.length && text.charCodeAt(pos) === 46 /* CharacterCodes.dot */) {
      pos++
      if (pos < text.length && isDigit(text.charCodeAt(pos))) {
        pos++
        while (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++
        }
      } else {
        scanError = 3 /* ScanError.UnexpectedEndOfNumber */
        return text.substring(start, pos)
      }
    }
    let end = pos
    if (
      pos < text.length &&
      (text.charCodeAt(pos) === 69 /* CharacterCodes.E */ ||
        text.charCodeAt(pos) === 101) /* CharacterCodes.e */
    ) {
      pos++
      if (
        (pos < text.length && text.charCodeAt(pos) === 43) /* CharacterCodes.plus */ ||
        text.charCodeAt(pos) === 45 /* CharacterCodes.minus */
      ) {
        pos++
      }
      if (pos < text.length && isDigit(text.charCodeAt(pos))) {
        pos++
        while (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++
        }
        end = pos
      } else {
        scanError = 3 /* ScanError.UnexpectedEndOfNumber */
      }
    }
    return text.substring(start, end)
  }
  function scanString() {
    let result = '',
      start = pos
    while (true) {
      if (pos >= len) {
        result += text.substring(start, pos)
        scanError = 2 /* ScanError.UnexpectedEndOfString */
        break
      }
      const ch = text.charCodeAt(pos)
      if (ch === 34 /* CharacterCodes.doubleQuote */) {
        result += text.substring(start, pos)
        pos++
        break
      }
      if (ch === 92 /* CharacterCodes.backslash */) {
        result += text.substring(start, pos)
        pos++
        if (pos >= len) {
          scanError = 2 /* ScanError.UnexpectedEndOfString */
          break
        }
        const ch2 = text.charCodeAt(pos++)
        switch (ch2) {
          case 34 /* CharacterCodes.doubleQuote */:
            result += '"'
            break
          case 92 /* CharacterCodes.backslash */:
            result += '\\'
            break
          case 47 /* CharacterCodes.slash */:
            result += '/'
            break
          case 98 /* CharacterCodes.b */:
            result += '\b'
            break
          case 102 /* CharacterCodes.f */:
            result += '\f'
            break
          case 110 /* CharacterCodes.n */:
            result += '\n'
            break
          case 114 /* CharacterCodes.r */:
            result += '\r'
            break
          case 116 /* CharacterCodes.t */:
            result += '\t'
            break
          case 117 /* CharacterCodes.u */:
            const ch3 = scanHexDigits(4, true)
            if (ch3 >= 0) {
              result += String.fromCharCode(ch3)
            } else {
              scanError = 4 /* ScanError.InvalidUnicode */
            }
            break
          default:
            scanError = 5 /* ScanError.InvalidEscapeCharacter */
        }
        start = pos
        continue
      }
      if (ch >= 0 && ch <= 0x1f) {
        if (isLineBreak(ch)) {
          result += text.substring(start, pos)
          scanError = 2 /* ScanError.UnexpectedEndOfString */
          break
        } else {
          scanError = 6 /* ScanError.InvalidCharacter */
          // mark as error but continue with string
        }
      }
      pos++
    }
    return result
  }
  function scanNext() {
    value = ''
    scanError = 0 /* ScanError.None */
    tokenOffset = pos
    lineStartOffset = lineNumber
    prevTokenLineStartOffset = tokenLineStartOffset
    if (pos >= len) {
      // at the end
      tokenOffset = len
      return (token = 17) /* SyntaxKind.EOF */
    }
    let code = text.charCodeAt(pos)
    // trivia: whitespace
    if (isWhiteSpace(code)) {
      do {
        pos++
        value += String.fromCharCode(code)
        code = text.charCodeAt(pos)
      } while (isWhiteSpace(code))
      return (token = 15) /* SyntaxKind.Trivia */
    }
    // trivia: newlines
    if (isLineBreak(code)) {
      pos++
      value += String.fromCharCode(code)
      if (
        code === 13 /* CharacterCodes.carriageReturn */ &&
        text.charCodeAt(pos) === 10 /* CharacterCodes.lineFeed */
      ) {
        pos++
        value += '\n'
      }
      lineNumber++
      tokenLineStartOffset = pos
      return (token = 14) /* SyntaxKind.LineBreakTrivia */
    }
    switch (code) {
      // tokens: []{}:,
      case 123 /* CharacterCodes.openBrace */:
        pos++
        return (token = 1) /* SyntaxKind.OpenBraceToken */
      case 125 /* CharacterCodes.closeBrace */:
        pos++
        return (token = 2) /* SyntaxKind.CloseBraceToken */
      case 91 /* CharacterCodes.openBracket */:
        pos++
        return (token = 3) /* SyntaxKind.OpenBracketToken */
      case 93 /* CharacterCodes.closeBracket */:
        pos++
        return (token = 4) /* SyntaxKind.CloseBracketToken */
      case 58 /* CharacterCodes.colon */:
        pos++
        return (token = 6) /* SyntaxKind.ColonToken */
      case 44 /* CharacterCodes.comma */:
        pos++
        return (token = 5) /* SyntaxKind.CommaToken */
      // strings
      case 34 /* CharacterCodes.doubleQuote */:
        pos++
        value = scanString()
        return (token = 10) /* SyntaxKind.StringLiteral */
      // comments
      case 47 /* CharacterCodes.slash */:
        const start = pos - 1
        // Single-line comment
        if (text.charCodeAt(pos + 1) === 47 /* CharacterCodes.slash */) {
          pos += 2
          while (pos < len) {
            if (isLineBreak(text.charCodeAt(pos))) {
              break
            }
            pos++
          }
          value = text.substring(start, pos)
          return (token = 12) /* SyntaxKind.LineCommentTrivia */
        }
        // Multi-line comment
        if (text.charCodeAt(pos + 1) === 42 /* CharacterCodes.asterisk */) {
          pos += 2
          const safeLength = len - 1 // For lookahead.
          let commentClosed = false
          while (pos < safeLength) {
            const ch = text.charCodeAt(pos)
            if (
              ch === 42 /* CharacterCodes.asterisk */ &&
              text.charCodeAt(pos + 1) === 47 /* CharacterCodes.slash */
            ) {
              pos += 2
              commentClosed = true
              break
            }
            pos++
            if (isLineBreak(ch)) {
              if (
                ch === 13 /* CharacterCodes.carriageReturn */ &&
                text.charCodeAt(pos) === 10 /* CharacterCodes.lineFeed */
              ) {
                pos++
              }
              lineNumber++
              tokenLineStartOffset = pos
            }
          }
          if (!commentClosed) {
            pos++
            scanError = 1 /* ScanError.UnexpectedEndOfComment */
          }
          value = text.substring(start, pos)
          return (token = 13) /* SyntaxKind.BlockCommentTrivia */
        }
        // just a single slash
        value += String.fromCharCode(code)
        pos++
        return (token = 16) /* SyntaxKind.Unknown */
      // numbers
      case 45 /* CharacterCodes.minus */:
        value += String.fromCharCode(code)
        pos++
        if (pos === len || !isDigit(text.charCodeAt(pos))) {
          return (token = 16) /* SyntaxKind.Unknown */
        }
      // found a minus, followed by a number so
      // we fall through to proceed with scanning
      // numbers
      case 48 /* CharacterCodes._0 */:
      case 49 /* CharacterCodes._1 */:
      case 50 /* CharacterCodes._2 */:
      case 51 /* CharacterCodes._3 */:
      case 52 /* CharacterCodes._4 */:
      case 53 /* CharacterCodes._5 */:
      case 54 /* CharacterCodes._6 */:
      case 55 /* CharacterCodes._7 */:
      case 56 /* CharacterCodes._8 */:
      case 57 /* CharacterCodes._9 */:
        value += scanNumber()
        return (token = 11) /* SyntaxKind.NumericLiteral */
      // literals and unknown symbols
      default:
        // is a literal? Read the full word.
        while (pos < len && isUnknownContentCharacter(code)) {
          pos++
          code = text.charCodeAt(pos)
        }
        if (tokenOffset !== pos) {
          value = text.substring(tokenOffset, pos)
          // keywords: true, false, null
          switch (value) {
            case 'true':
              return (token = 8) /* SyntaxKind.TrueKeyword */
            case 'false':
              return (token = 9) /* SyntaxKind.FalseKeyword */
            case 'null':
              return (token = 7) /* SyntaxKind.NullKeyword */
          }
          return (token = 16) /* SyntaxKind.Unknown */
        }
        // some
        value += String.fromCharCode(code)
        pos++
        return (token = 16) /* SyntaxKind.Unknown */
    }
  }
  function isUnknownContentCharacter(code) {
    if (isWhiteSpace(code) || isLineBreak(code)) {
      return false
    }
    switch (code) {
      case 125 /* CharacterCodes.closeBrace */:
      case 93 /* CharacterCodes.closeBracket */:
      case 123 /* CharacterCodes.openBrace */:
      case 91 /* CharacterCodes.openBracket */:
      case 34 /* CharacterCodes.doubleQuote */:
      case 58 /* CharacterCodes.colon */:
      case 44 /* CharacterCodes.comma */:
      case 47 /* CharacterCodes.slash */:
        return false
    }
    return true
  }
  function scanNextNonTrivia() {
    let result
    do {
      result = scanNext()
    } while (
      result >= 12 /* SyntaxKind.LineCommentTrivia */ &&
      result <= 15 /* SyntaxKind.Trivia */
    )
    return result
  }
  return {
    setPosition: setPosition,
    getPosition: () => pos,
    scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
    getToken: () => token,
    getTokenValue: () => value,
    getTokenOffset: () => tokenOffset,
    getTokenLength: () => pos - tokenOffset,
    getTokenStartLine: () => lineStartOffset,
    getTokenStartCharacter: () => tokenOffset - prevTokenLineStartOffset,
    getTokenError: () => scanError
  }
}
function isWhiteSpace(ch) {
  return ch === 32 /* CharacterCodes.space */ || ch === 9 /* CharacterCodes.tab */
}
function isLineBreak(ch) {
  return ch === 10 /* CharacterCodes.lineFeed */ || ch === 13 /* CharacterCodes.carriageReturn */
}
function isDigit(ch) {
  return ch >= 48 /* CharacterCodes._0 */ && ch <= 57 /* CharacterCodes._9 */
}
var CharacterCodes
;(function (CharacterCodes) {
  CharacterCodes[(CharacterCodes['lineFeed'] = 10)] = 'lineFeed'
  CharacterCodes[(CharacterCodes['carriageReturn'] = 13)] = 'carriageReturn'
  CharacterCodes[(CharacterCodes['space'] = 32)] = 'space'
  CharacterCodes[(CharacterCodes['_0'] = 48)] = '_0'
  CharacterCodes[(CharacterCodes['_1'] = 49)] = '_1'
  CharacterCodes[(CharacterCodes['_2'] = 50)] = '_2'
  CharacterCodes[(CharacterCodes['_3'] = 51)] = '_3'
  CharacterCodes[(CharacterCodes['_4'] = 52)] = '_4'
  CharacterCodes[(CharacterCodes['_5'] = 53)] = '_5'
  CharacterCodes[(CharacterCodes['_6'] = 54)] = '_6'
  CharacterCodes[(CharacterCodes['_7'] = 55)] = '_7'
  CharacterCodes[(CharacterCodes['_8'] = 56)] = '_8'
  CharacterCodes[(CharacterCodes['_9'] = 57)] = '_9'
  CharacterCodes[(CharacterCodes['a'] = 97)] = 'a'
  CharacterCodes[(CharacterCodes['b'] = 98)] = 'b'
  CharacterCodes[(CharacterCodes['c'] = 99)] = 'c'
  CharacterCodes[(CharacterCodes['d'] = 100)] = 'd'
  CharacterCodes[(CharacterCodes['e'] = 101)] = 'e'
  CharacterCodes[(CharacterCodes['f'] = 102)] = 'f'
  CharacterCodes[(CharacterCodes['g'] = 103)] = 'g'
  CharacterCodes[(CharacterCodes['h'] = 104)] = 'h'
  CharacterCodes[(CharacterCodes['i'] = 105)] = 'i'
  CharacterCodes[(CharacterCodes['j'] = 106)] = 'j'
  CharacterCodes[(CharacterCodes['k'] = 107)] = 'k'
  CharacterCodes[(CharacterCodes['l'] = 108)] = 'l'
  CharacterCodes[(CharacterCodes['m'] = 109)] = 'm'
  CharacterCodes[(CharacterCodes['n'] = 110)] = 'n'
  CharacterCodes[(CharacterCodes['o'] = 111)] = 'o'
  CharacterCodes[(CharacterCodes['p'] = 112)] = 'p'
  CharacterCodes[(CharacterCodes['q'] = 113)] = 'q'
  CharacterCodes[(CharacterCodes['r'] = 114)] = 'r'
  CharacterCodes[(CharacterCodes['s'] = 115)] = 's'
  CharacterCodes[(CharacterCodes['t'] = 116)] = 't'
  CharacterCodes[(CharacterCodes['u'] = 117)] = 'u'
  CharacterCodes[(CharacterCodes['v'] = 118)] = 'v'
  CharacterCodes[(CharacterCodes['w'] = 119)] = 'w'
  CharacterCodes[(CharacterCodes['x'] = 120)] = 'x'
  CharacterCodes[(CharacterCodes['y'] = 121)] = 'y'
  CharacterCodes[(CharacterCodes['z'] = 122)] = 'z'
  CharacterCodes[(CharacterCodes['A'] = 65)] = 'A'
  CharacterCodes[(CharacterCodes['B'] = 66)] = 'B'
  CharacterCodes[(CharacterCodes['C'] = 67)] = 'C'
  CharacterCodes[(CharacterCodes['D'] = 68)] = 'D'
  CharacterCodes[(CharacterCodes['E'] = 69)] = 'E'
  CharacterCodes[(CharacterCodes['F'] = 70)] = 'F'
  CharacterCodes[(CharacterCodes['G'] = 71)] = 'G'
  CharacterCodes[(CharacterCodes['H'] = 72)] = 'H'
  CharacterCodes[(CharacterCodes['I'] = 73)] = 'I'
  CharacterCodes[(CharacterCodes['J'] = 74)] = 'J'
  CharacterCodes[(CharacterCodes['K'] = 75)] = 'K'
  CharacterCodes[(CharacterCodes['L'] = 76)] = 'L'
  CharacterCodes[(CharacterCodes['M'] = 77)] = 'M'
  CharacterCodes[(CharacterCodes['N'] = 78)] = 'N'
  CharacterCodes[(CharacterCodes['O'] = 79)] = 'O'
  CharacterCodes[(CharacterCodes['P'] = 80)] = 'P'
  CharacterCodes[(CharacterCodes['Q'] = 81)] = 'Q'
  CharacterCodes[(CharacterCodes['R'] = 82)] = 'R'
  CharacterCodes[(CharacterCodes['S'] = 83)] = 'S'
  CharacterCodes[(CharacterCodes['T'] = 84)] = 'T'
  CharacterCodes[(CharacterCodes['U'] = 85)] = 'U'
  CharacterCodes[(CharacterCodes['V'] = 86)] = 'V'
  CharacterCodes[(CharacterCodes['W'] = 87)] = 'W'
  CharacterCodes[(CharacterCodes['X'] = 88)] = 'X'
  CharacterCodes[(CharacterCodes['Y'] = 89)] = 'Y'
  CharacterCodes[(CharacterCodes['Z'] = 90)] = 'Z'
  CharacterCodes[(CharacterCodes['asterisk'] = 42)] = 'asterisk'
  CharacterCodes[(CharacterCodes['backslash'] = 92)] = 'backslash'
  CharacterCodes[(CharacterCodes['closeBrace'] = 125)] = 'closeBrace'
  CharacterCodes[(CharacterCodes['closeBracket'] = 93)] = 'closeBracket'
  CharacterCodes[(CharacterCodes['colon'] = 58)] = 'colon'
  CharacterCodes[(CharacterCodes['comma'] = 44)] = 'comma'
  CharacterCodes[(CharacterCodes['dot'] = 46)] = 'dot'
  CharacterCodes[(CharacterCodes['doubleQuote'] = 34)] = 'doubleQuote'
  CharacterCodes[(CharacterCodes['minus'] = 45)] = 'minus'
  CharacterCodes[(CharacterCodes['openBrace'] = 123)] = 'openBrace'
  CharacterCodes[(CharacterCodes['openBracket'] = 91)] = 'openBracket'
  CharacterCodes[(CharacterCodes['plus'] = 43)] = 'plus'
  CharacterCodes[(CharacterCodes['slash'] = 47)] = 'slash'
  CharacterCodes[(CharacterCodes['formFeed'] = 12)] = 'formFeed'
  CharacterCodes[(CharacterCodes['tab'] = 9)] = 'tab'
})(CharacterCodes || (CharacterCodes = {}))

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var ParseOptions
;(function (ParseOptions) {
  ParseOptions.DEFAULT = {
    allowTrailingComma: false
  }
})(ParseOptions || (ParseOptions = {}))
/**
 * Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 * Therefore always check the errors list to find out if the input was valid.
 */
function parse$1(text, errors = [], options = ParseOptions.DEFAULT) {
  let currentProperty = null
  let currentParent = []
  const previousParents = []
  function onValue(value) {
    if (Array.isArray(currentParent)) {
      currentParent.push(value)
    } else if (currentProperty !== null) {
      currentParent[currentProperty] = value
    }
  }
  const visitor = {
    onObjectBegin: () => {
      const object = {}
      onValue(object)
      previousParents.push(currentParent)
      currentParent = object
      currentProperty = null
    },
    onObjectProperty: name => {
      currentProperty = name
    },
    onObjectEnd: () => {
      currentParent = previousParents.pop()
    },
    onArrayBegin: () => {
      const array = []
      onValue(array)
      previousParents.push(currentParent)
      currentParent = array
      currentProperty = null
    },
    onArrayEnd: () => {
      currentParent = previousParents.pop()
    },
    onLiteralValue: onValue,
    onError: (error, offset, length) => {
      errors.push({ error, offset, length })
    }
  }
  visit(text, visitor, options)
  return currentParent[0]
}
/**
 * Parses the given text and invokes the visitor functions for each object, array and literal reached.
 */
function visit(text, visitor, options = ParseOptions.DEFAULT) {
  const _scanner = createScanner(text, false)
  // Important: Only pass copies of this to visitor functions to prevent accidental modification, and
  // to not affect visitor functions which stored a reference to a previous JSONPath
  const _jsonPath = []
  function toNoArgVisit(visitFunction) {
    return visitFunction
      ? () =>
          visitFunction(
            _scanner.getTokenOffset(),
            _scanner.getTokenLength(),
            _scanner.getTokenStartLine(),
            _scanner.getTokenStartCharacter()
          )
      : () => true
  }
  function toNoArgVisitWithPath(visitFunction) {
    return visitFunction
      ? () =>
          visitFunction(
            _scanner.getTokenOffset(),
            _scanner.getTokenLength(),
            _scanner.getTokenStartLine(),
            _scanner.getTokenStartCharacter(),
            () => _jsonPath.slice()
          )
      : () => true
  }
  function toOneArgVisit(visitFunction) {
    return visitFunction
      ? arg =>
          visitFunction(
            arg,
            _scanner.getTokenOffset(),
            _scanner.getTokenLength(),
            _scanner.getTokenStartLine(),
            _scanner.getTokenStartCharacter()
          )
      : () => true
  }
  function toOneArgVisitWithPath(visitFunction) {
    return visitFunction
      ? arg =>
          visitFunction(
            arg,
            _scanner.getTokenOffset(),
            _scanner.getTokenLength(),
            _scanner.getTokenStartLine(),
            _scanner.getTokenStartCharacter(),
            () => _jsonPath.slice()
          )
      : () => true
  }
  const onObjectBegin = toNoArgVisitWithPath(visitor.onObjectBegin),
    onObjectProperty = toOneArgVisitWithPath(visitor.onObjectProperty),
    onObjectEnd = toNoArgVisit(visitor.onObjectEnd),
    onArrayBegin = toNoArgVisitWithPath(visitor.onArrayBegin),
    onArrayEnd = toNoArgVisit(visitor.onArrayEnd),
    onLiteralValue = toOneArgVisitWithPath(visitor.onLiteralValue),
    onSeparator = toOneArgVisit(visitor.onSeparator),
    onComment = toNoArgVisit(visitor.onComment),
    onError = toOneArgVisit(visitor.onError)
  const disallowComments = options && options.disallowComments
  const allowTrailingComma = options && options.allowTrailingComma
  function scanNext() {
    while (true) {
      const token = _scanner.scan()
      switch (_scanner.getTokenError()) {
        case 4 /* ScanError.InvalidUnicode */:
          handleError(14 /* ParseErrorCode.InvalidUnicode */)
          break
        case 5 /* ScanError.InvalidEscapeCharacter */:
          handleError(15 /* ParseErrorCode.InvalidEscapeCharacter */)
          break
        case 3 /* ScanError.UnexpectedEndOfNumber */:
          handleError(13 /* ParseErrorCode.UnexpectedEndOfNumber */)
          break
        case 1 /* ScanError.UnexpectedEndOfComment */:
          if (!disallowComments) {
            handleError(11 /* ParseErrorCode.UnexpectedEndOfComment */)
          }
          break
        case 2 /* ScanError.UnexpectedEndOfString */:
          handleError(12 /* ParseErrorCode.UnexpectedEndOfString */)
          break
        case 6 /* ScanError.InvalidCharacter */:
          handleError(16 /* ParseErrorCode.InvalidCharacter */)
          break
      }
      switch (token) {
        case 12 /* SyntaxKind.LineCommentTrivia */:
        case 13 /* SyntaxKind.BlockCommentTrivia */:
          if (disallowComments) {
            handleError(10 /* ParseErrorCode.InvalidCommentToken */)
          } else {
            onComment()
          }
          break
        case 16 /* SyntaxKind.Unknown */:
          handleError(1 /* ParseErrorCode.InvalidSymbol */)
          break
        case 15 /* SyntaxKind.Trivia */:
        case 14 /* SyntaxKind.LineBreakTrivia */:
          break
        default:
          return token
      }
    }
  }
  function handleError(error, skipUntilAfter = [], skipUntil = []) {
    onError(error)
    if (skipUntilAfter.length + skipUntil.length > 0) {
      let token = _scanner.getToken()
      while (token !== 17 /* SyntaxKind.EOF */) {
        if (skipUntilAfter.indexOf(token) !== -1) {
          scanNext()
          break
        } else if (skipUntil.indexOf(token) !== -1) {
          break
        }
        token = scanNext()
      }
    }
  }
  function parseString(isValue) {
    const value = _scanner.getTokenValue()
    if (isValue) {
      onLiteralValue(value)
    } else {
      onObjectProperty(value)
      // add property name afterwards
      _jsonPath.push(value)
    }
    scanNext()
    return true
  }
  function parseLiteral() {
    switch (_scanner.getToken()) {
      case 11 /* SyntaxKind.NumericLiteral */:
        const tokenValue = _scanner.getTokenValue()
        let value = Number(tokenValue)
        if (isNaN(value)) {
          handleError(2 /* ParseErrorCode.InvalidNumberFormat */)
          value = 0
        }
        onLiteralValue(value)
        break
      case 7 /* SyntaxKind.NullKeyword */:
        onLiteralValue(null)
        break
      case 8 /* SyntaxKind.TrueKeyword */:
        onLiteralValue(true)
        break
      case 9 /* SyntaxKind.FalseKeyword */:
        onLiteralValue(false)
        break
      default:
        return false
    }
    scanNext()
    return true
  }
  function parseProperty() {
    if (_scanner.getToken() !== 10 /* SyntaxKind.StringLiteral */) {
      handleError(
        3 /* ParseErrorCode.PropertyNameExpected */,
        [],
        [2 /* SyntaxKind.CloseBraceToken */, 5 /* SyntaxKind.CommaToken */]
      )
      return false
    }
    parseString(false)
    if (_scanner.getToken() === 6 /* SyntaxKind.ColonToken */) {
      onSeparator(':')
      scanNext() // consume colon
      if (!parseValue()) {
        handleError(
          4 /* ParseErrorCode.ValueExpected */,
          [],
          [2 /* SyntaxKind.CloseBraceToken */, 5 /* SyntaxKind.CommaToken */]
        )
      }
    } else {
      handleError(
        5 /* ParseErrorCode.ColonExpected */,
        [],
        [2 /* SyntaxKind.CloseBraceToken */, 5 /* SyntaxKind.CommaToken */]
      )
    }
    _jsonPath.pop() // remove processed property name
    return true
  }
  function parseObject() {
    onObjectBegin()
    scanNext() // consume open brace
    let needsComma = false
    while (
      _scanner.getToken() !== 2 /* SyntaxKind.CloseBraceToken */ &&
      _scanner.getToken() !== 17 /* SyntaxKind.EOF */
    ) {
      if (_scanner.getToken() === 5 /* SyntaxKind.CommaToken */) {
        if (!needsComma) {
          handleError(4 /* ParseErrorCode.ValueExpected */, [], [])
        }
        onSeparator(',')
        scanNext() // consume comma
        if (_scanner.getToken() === 2 /* SyntaxKind.CloseBraceToken */ && allowTrailingComma) {
          break
        }
      } else if (needsComma) {
        handleError(6 /* ParseErrorCode.CommaExpected */, [], [])
      }
      if (!parseProperty()) {
        handleError(
          4 /* ParseErrorCode.ValueExpected */,
          [],
          [2 /* SyntaxKind.CloseBraceToken */, 5 /* SyntaxKind.CommaToken */]
        )
      }
      needsComma = true
    }
    onObjectEnd()
    if (_scanner.getToken() !== 2 /* SyntaxKind.CloseBraceToken */) {
      handleError(
        7 /* ParseErrorCode.CloseBraceExpected */,
        [2 /* SyntaxKind.CloseBraceToken */],
        []
      )
    } else {
      scanNext() // consume close brace
    }
    return true
  }
  function parseArray() {
    onArrayBegin()
    scanNext() // consume open bracket
    let isFirstElement = true
    let needsComma = false
    while (
      _scanner.getToken() !== 4 /* SyntaxKind.CloseBracketToken */ &&
      _scanner.getToken() !== 17 /* SyntaxKind.EOF */
    ) {
      if (_scanner.getToken() === 5 /* SyntaxKind.CommaToken */) {
        if (!needsComma) {
          handleError(4 /* ParseErrorCode.ValueExpected */, [], [])
        }
        onSeparator(',')
        scanNext() // consume comma
        if (_scanner.getToken() === 4 /* SyntaxKind.CloseBracketToken */ && allowTrailingComma) {
          break
        }
      } else if (needsComma) {
        handleError(6 /* ParseErrorCode.CommaExpected */, [], [])
      }
      if (isFirstElement) {
        _jsonPath.push(0)
        isFirstElement = false
      } else {
        _jsonPath[_jsonPath.length - 1]++
      }
      if (!parseValue()) {
        handleError(
          4 /* ParseErrorCode.ValueExpected */,
          [],
          [4 /* SyntaxKind.CloseBracketToken */, 5 /* SyntaxKind.CommaToken */]
        )
      }
      needsComma = true
    }
    onArrayEnd()
    if (!isFirstElement) {
      _jsonPath.pop() // remove array index
    }
    if (_scanner.getToken() !== 4 /* SyntaxKind.CloseBracketToken */) {
      handleError(
        8 /* ParseErrorCode.CloseBracketExpected */,
        [4 /* SyntaxKind.CloseBracketToken */],
        []
      )
    } else {
      scanNext() // consume close bracket
    }
    return true
  }
  function parseValue() {
    switch (_scanner.getToken()) {
      case 3 /* SyntaxKind.OpenBracketToken */:
        return parseArray()
      case 1 /* SyntaxKind.OpenBraceToken */:
        return parseObject()
      case 10 /* SyntaxKind.StringLiteral */:
        return parseString(true)
      default:
        return parseLiteral()
    }
  }
  scanNext()
  if (_scanner.getToken() === 17 /* SyntaxKind.EOF */) {
    if (options.allowEmptyContent) {
      return true
    }
    handleError(4 /* ParseErrorCode.ValueExpected */, [], [])
    return false
  }
  if (!parseValue()) {
    handleError(4 /* ParseErrorCode.ValueExpected */, [], [])
    return false
  }
  if (_scanner.getToken() !== 17 /* SyntaxKind.EOF */) {
    handleError(9 /* ParseErrorCode.EndOfFileExpected */, [], [])
  }
  return true
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var ScanError
;(function (ScanError) {
  ScanError[(ScanError['None'] = 0)] = 'None'
  ScanError[(ScanError['UnexpectedEndOfComment'] = 1)] = 'UnexpectedEndOfComment'
  ScanError[(ScanError['UnexpectedEndOfString'] = 2)] = 'UnexpectedEndOfString'
  ScanError[(ScanError['UnexpectedEndOfNumber'] = 3)] = 'UnexpectedEndOfNumber'
  ScanError[(ScanError['InvalidUnicode'] = 4)] = 'InvalidUnicode'
  ScanError[(ScanError['InvalidEscapeCharacter'] = 5)] = 'InvalidEscapeCharacter'
  ScanError[(ScanError['InvalidCharacter'] = 6)] = 'InvalidCharacter'
})(ScanError || (ScanError = {}))
var SyntaxKind
;(function (SyntaxKind) {
  SyntaxKind[(SyntaxKind['OpenBraceToken'] = 1)] = 'OpenBraceToken'
  SyntaxKind[(SyntaxKind['CloseBraceToken'] = 2)] = 'CloseBraceToken'
  SyntaxKind[(SyntaxKind['OpenBracketToken'] = 3)] = 'OpenBracketToken'
  SyntaxKind[(SyntaxKind['CloseBracketToken'] = 4)] = 'CloseBracketToken'
  SyntaxKind[(SyntaxKind['CommaToken'] = 5)] = 'CommaToken'
  SyntaxKind[(SyntaxKind['ColonToken'] = 6)] = 'ColonToken'
  SyntaxKind[(SyntaxKind['NullKeyword'] = 7)] = 'NullKeyword'
  SyntaxKind[(SyntaxKind['TrueKeyword'] = 8)] = 'TrueKeyword'
  SyntaxKind[(SyntaxKind['FalseKeyword'] = 9)] = 'FalseKeyword'
  SyntaxKind[(SyntaxKind['StringLiteral'] = 10)] = 'StringLiteral'
  SyntaxKind[(SyntaxKind['NumericLiteral'] = 11)] = 'NumericLiteral'
  SyntaxKind[(SyntaxKind['LineCommentTrivia'] = 12)] = 'LineCommentTrivia'
  SyntaxKind[(SyntaxKind['BlockCommentTrivia'] = 13)] = 'BlockCommentTrivia'
  SyntaxKind[(SyntaxKind['LineBreakTrivia'] = 14)] = 'LineBreakTrivia'
  SyntaxKind[(SyntaxKind['Trivia'] = 15)] = 'Trivia'
  SyntaxKind[(SyntaxKind['Unknown'] = 16)] = 'Unknown'
  SyntaxKind[(SyntaxKind['EOF'] = 17)] = 'EOF'
})(SyntaxKind || (SyntaxKind = {}))
/**
 * Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 * Therefore, always check the errors list to find out if the input was valid.
 */
const parse = parse$1
var ParseErrorCode
;(function (ParseErrorCode) {
  ParseErrorCode[(ParseErrorCode['InvalidSymbol'] = 1)] = 'InvalidSymbol'
  ParseErrorCode[(ParseErrorCode['InvalidNumberFormat'] = 2)] = 'InvalidNumberFormat'
  ParseErrorCode[(ParseErrorCode['PropertyNameExpected'] = 3)] = 'PropertyNameExpected'
  ParseErrorCode[(ParseErrorCode['ValueExpected'] = 4)] = 'ValueExpected'
  ParseErrorCode[(ParseErrorCode['ColonExpected'] = 5)] = 'ColonExpected'
  ParseErrorCode[(ParseErrorCode['CommaExpected'] = 6)] = 'CommaExpected'
  ParseErrorCode[(ParseErrorCode['CloseBraceExpected'] = 7)] = 'CloseBraceExpected'
  ParseErrorCode[(ParseErrorCode['CloseBracketExpected'] = 8)] = 'CloseBracketExpected'
  ParseErrorCode[(ParseErrorCode['EndOfFileExpected'] = 9)] = 'EndOfFileExpected'
  ParseErrorCode[(ParseErrorCode['InvalidCommentToken'] = 10)] = 'InvalidCommentToken'
  ParseErrorCode[(ParseErrorCode['UnexpectedEndOfComment'] = 11)] = 'UnexpectedEndOfComment'
  ParseErrorCode[(ParseErrorCode['UnexpectedEndOfString'] = 12)] = 'UnexpectedEndOfString'
  ParseErrorCode[(ParseErrorCode['UnexpectedEndOfNumber'] = 13)] = 'UnexpectedEndOfNumber'
  ParseErrorCode[(ParseErrorCode['InvalidUnicode'] = 14)] = 'InvalidUnicode'
  ParseErrorCode[(ParseErrorCode['InvalidEscapeCharacter'] = 15)] = 'InvalidEscapeCharacter'
  ParseErrorCode[(ParseErrorCode['InvalidCharacter'] = 16)] = 'InvalidCharacter'
})(ParseErrorCode || (ParseErrorCode = {}))

const isWebWorker = typeof self !== 'undefined' && typeof self.WorkerGlobalScope !== 'undefined'
const isNode =
  'process' in globalThis &&
  typeof process !== 'undefined' &&
  typeof process.release !== 'undefined' &&
  process.release.name === 'node'
const isBrowser = isWebWorker || !isNode
let CDN_ROOT = ''
let WASM = ''
const WASM_PATH = 'dist/'
function setCDN(root) {
  CDN_ROOT = root.endsWith('/') ? root : root + '/'
}
function setWasm(data) {
  WASM = data
}
let _onigurumaPromise = null
async function getOniguruma(wasmPath) {
  if (!_onigurumaPromise) {
    let loader
    if (isBrowser) {
      if (typeof WASM === 'string') {
        loader = loadWASM({
          data: await fetch(_resolvePath(join(...dirpathparts(wasmPath), 'onig.wasm')))
        })
      } else {
        loader = loadWASM({
          data: WASM
        })
      }
    } else {
      const path = require('path')
      const wasmPath2 = path.join(require.resolve('vscode-oniguruma'), '../onig.wasm')
      const fs = require('fs')
      const wasmBin = fs.readFileSync(wasmPath2).buffer
      loader = loadWASM(wasmBin)
    }
    _onigurumaPromise = loader.then(() => {
      return {
        createOnigScanner(patterns) {
          return createOnigScanner(patterns)
        },
        createOnigString(s) {
          return createOnigString(s)
        }
      }
    })
  }
  return _onigurumaPromise
}
function _resolvePath(filepath) {
  if (isBrowser) {
    return `${CDN_ROOT}${filepath}`
  } else {
    const path = require('path')
    if (path.isAbsolute(filepath)) {
      return filepath
    } else {
      return path.resolve(__dirname, '..', filepath)
    }
  }
}
async function _fetchAssets(filepath) {
  const path = _resolvePath(filepath)
  if (isBrowser) {
    return await fetch(path).then(r => r.text())
  } else {
    const fs = require('fs')
    return await fs.promises.readFile(path, 'utf-8')
  }
}
async function _fetchJSONAssets(filepath) {
  const errors = []
  const rawTheme = parse(await _fetchAssets(filepath), errors, {
    allowTrailingComma: true
  })
  if (errors.length) {
    throw errors[0]
  }
  return rawTheme
}
async function fetchTheme(themePath) {
  let theme = await _fetchJSONAssets(themePath)
  const shikiTheme = toShikiTheme(theme)
  if (shikiTheme.include) {
    const includedTheme = await fetchTheme(join(...dirpathparts(themePath), shikiTheme.include))
    if (includedTheme.settings) {
      shikiTheme.settings = includedTheme.settings.concat(shikiTheme.settings)
    }
    if (includedTheme.bg && !shikiTheme.bg) {
      shikiTheme.bg = includedTheme.bg
    }
    if (includedTheme.colors) {
      shikiTheme.colors = { ...includedTheme.colors, ...shikiTheme.colors }
    }
    delete shikiTheme.include
  }
  return shikiTheme
}
async function fetchGrammar(filepath) {
  return await _fetchJSONAssets(filepath)
}
function repairTheme(theme) {
  if (!theme.settings) theme.settings = []
  if (theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope) {
    return
  }
  theme.settings.unshift({
    settings: {
      foreground: theme.fg,
      background: theme.bg
    }
  })
}
function toShikiTheme(rawTheme) {
  const type = rawTheme.type || 'dark'
  const shikiTheme = {
    name: rawTheme.name,
    type,
    ...rawTheme,
    ...getThemeDefaultColors(rawTheme)
  }
  if (rawTheme.include) {
    shikiTheme.include = rawTheme.include
  }
  if (rawTheme.tokenColors) {
    shikiTheme.settings = rawTheme.tokenColors
    delete shikiTheme.tokenColors
  }
  repairTheme(shikiTheme)
  return shikiTheme
}
const VSCODE_FALLBACK_EDITOR_FG = { light: '#333333', dark: '#bbbbbb' }
const VSCODE_FALLBACK_EDITOR_BG = { light: '#fffffe', dark: '#1e1e1e' }
function getThemeDefaultColors(theme) {
  let fg, bg
  let settings = theme.settings ? theme.settings : theme.tokenColors
  const globalSetting = settings
    ? settings.find(s => {
        return !s.name && !s.scope
      })
    : void 0
  if (globalSetting?.settings?.foreground) {
    fg = globalSetting.settings.foreground
  }
  if (globalSetting?.settings?.background) {
    bg = globalSetting.settings.background
  }
  if (!fg && theme?.colors?.['editor.foreground']) {
    fg = theme.colors['editor.foreground']
  }
  if (!bg && theme?.colors?.['editor.background']) {
    bg = theme.colors['editor.background']
  }
  if (!fg) {
    fg = theme.type === 'light' ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark
  }
  if (!bg) {
    bg = theme.type === 'light' ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark
  }
  return {
    fg,
    bg
  }
}

class Resolver {
  constructor(onigLibPromise, onigLibName) {
    this.languagesPath = 'languages/'
    this.languageMap = {}
    this.scopeToLangMap = {}
    this._onigLibPromise = onigLibPromise
    this._onigLibName = onigLibName
  }
  get onigLib() {
    return this._onigLibPromise
  }
  getOnigLibName() {
    return this._onigLibName
  }
  getLangRegistration(langIdOrAlias) {
    return this.languageMap[langIdOrAlias]
  }
  async loadGrammar(scopeName) {
    const lang = this.scopeToLangMap[scopeName]
    if (!lang) {
      return null
    }
    if (lang.grammar) {
      return lang.grammar
    }
    const g = await fetchGrammar(
      languages.includes(lang) ? `${this.languagesPath}${lang.path}` : lang.path
    )
    lang.grammar = g
    return g
  }
  addLanguage(l) {
    this.languageMap[l.id] = l
    if (l.aliases) {
      l.aliases.forEach(a => {
        this.languageMap[a] = l
      })
    }
    this.scopeToLangMap[l.scopeName] = l
  }
}

function tokenizeWithTheme(theme, colorMap, fileContents, grammar, options) {
  let lines = fileContents.split(/\r\n|\r|\n/)
  let ruleStack = INITIAL
  let actual = []
  let final = []
  for (let i = 0, len = lines.length; i < len; i++) {
    let line = lines[i]
    if (line === '') {
      actual = []
      final.push([])
      continue
    }
    let resultWithScopes
    let tokensWithScopes
    let tokensWithScopesIndex
    if (options.includeExplanation) {
      resultWithScopes = grammar.tokenizeLine(line, ruleStack)
      tokensWithScopes = resultWithScopes.tokens
      tokensWithScopesIndex = 0
    }
    let result = grammar.tokenizeLine2(line, ruleStack)
    let tokensLength = result.tokens.length / 2
    for (let j = 0; j < tokensLength; j++) {
      let startIndex = result.tokens[2 * j]
      let nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length
      if (startIndex === nextStartIndex) {
        continue
      }
      let metadata = result.tokens[2 * j + 1]
      let foreground = StackElementMetadata.getForeground(metadata)
      let foregroundColor = colorMap[foreground]
      let fontStyle = StackElementMetadata.getFontStyle(metadata)
      let explanation = []
      if (options.includeExplanation) {
        let offset = 0
        while (startIndex + offset < nextStartIndex) {
          let tokenWithScopes = tokensWithScopes[tokensWithScopesIndex]
          let tokenWithScopesText = line.substring(
            tokenWithScopes.startIndex,
            tokenWithScopes.endIndex
          )
          offset += tokenWithScopesText.length
          explanation.push({
            content: tokenWithScopesText,
            scopes: explainThemeScopes(theme, tokenWithScopes.scopes)
          })
          tokensWithScopesIndex++
        }
      }
      actual.push({
        content: line.substring(startIndex, nextStartIndex),
        color: foregroundColor,
        fontStyle,
        explanation
      })
    }
    final.push(actual)
    actual = []
    ruleStack = result.ruleStack
  }
  return final
}
function explainThemeScopes(theme, scopes) {
  let result = []
  for (let i = 0, len = scopes.length; i < len; i++) {
    let parentScopes = scopes.slice(0, i)
    let scope = scopes[i]
    result[i] = {
      scopeName: scope,
      themeMatches: explainThemeScope(theme, scope, parentScopes)
    }
  }
  return result
}
function matchesOne(selector, scope) {
  let selectorPrefix = selector + '.'
  if (selector === scope || scope.substring(0, selectorPrefix.length) === selectorPrefix) {
    return true
  }
  return false
}
function matches(selector, selectorParentScopes, scope, parentScopes) {
  if (!matchesOne(selector, scope)) {
    return false
  }
  let selectorParentIndex = selectorParentScopes.length - 1
  let parentIndex = parentScopes.length - 1
  while (selectorParentIndex >= 0 && parentIndex >= 0) {
    if (matchesOne(selectorParentScopes[selectorParentIndex], parentScopes[parentIndex])) {
      selectorParentIndex--
    }
    parentIndex--
  }
  if (selectorParentIndex === -1) {
    return true
  }
  return false
}
function explainThemeScope(theme, scope, parentScopes) {
  let result = [],
    resultLen = 0
  for (let i = 0, len = theme.settings.length; i < len; i++) {
    let setting = theme.settings[i]
    let selectors
    if (typeof setting.scope === 'string') {
      selectors = setting.scope.split(/,/).map(scope2 => scope2.trim())
    } else if (Array.isArray(setting.scope)) {
      selectors = setting.scope
    } else {
      continue
    }
    for (let j = 0, lenJ = selectors.length; j < lenJ; j++) {
      let rawSelector = selectors[j]
      let rawSelectorPieces = rawSelector.split(/ /)
      let selector = rawSelectorPieces[rawSelectorPieces.length - 1]
      let selectorParentScopes = rawSelectorPieces.slice(0, rawSelectorPieces.length - 1)
      if (matches(selector, selectorParentScopes, scope, parentScopes)) {
        result[resultLen++] = setting
        j = lenJ
      }
    }
  }
  return result
}

const defaultElements = {
  pre({ className, style, children }) {
    return `<pre class="${className}" style="${style}">${children}</pre>`
  },
  code({ children }) {
    return `<code>${children}</code>`
  },
  line({ className, children }) {
    return `<span class="${className}">${children}</span>`
  },
  token({ style, children }) {
    return `<span style="${style}">${children}</span>`
  }
}
function renderToHtml(lines, options = {}) {
  const bg = options.bg || '#fff'
  const optionsByLineNumber = groupBy(options.lineOptions ?? [], option => option.line)
  const userElements = options.elements || {}
  function h(type = '', props = {}, children) {
    const element = userElements[type] || defaultElements[type]
    if (element) {
      children = children.filter(Boolean)
      return element({
        ...props,
        children: type === 'code' ? children.join('\n') : children.join('')
      })
    }
    return ''
  }
  return h(
    'pre',
    { className: 'shiki ' + (options.themeName || ''), style: `background-color: ${bg}` },
    [
      options.langId ? `<div class="language-id">${options.langId}</div>` : '',
      h(
        'code',
        {},
        lines.map((line, index) => {
          const lineNumber = index + 1
          const lineOptions = optionsByLineNumber.get(lineNumber) ?? []
          const lineClasses = getLineClasses(lineOptions).join(' ')
          return h(
            'line',
            {
              className: lineClasses,
              lines,
              line,
              index
            },
            line.map((token, index2) => {
              const cssDeclarations = [`color: ${token.color || options.fg}`]
              if (token.fontStyle & FontStyle.Italic) {
                cssDeclarations.push('font-style: italic')
              }
              if (token.fontStyle & FontStyle.Bold) {
                cssDeclarations.push('font-weight: bold')
              }
              if (token.fontStyle & FontStyle.Underline) {
                cssDeclarations.push('text-decoration: underline')
              }
              return h(
                'token',
                {
                  style: cssDeclarations.join('; '),
                  tokens: line,
                  token,
                  index: index2
                },
                [escapeHtml(token.content)]
              )
            })
          )
        })
      )
    ]
  )
}
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}
function escapeHtml(html) {
  return html.replace(/[&<>"']/g, chr => htmlEscapes[chr])
}
function getLineClasses(lineOptions) {
  const lineClasses = /* @__PURE__ */ new Set(['line'])
  for (const lineOption of lineOptions) {
    for (const lineClass of lineOption.classes ?? []) {
      lineClasses.add(lineClass)
    }
  }
  return Array.from(lineClasses)
}

class Registry extends Registry$1 {
  constructor(_resolver) {
    super(_resolver)
    this._resolver = _resolver
    this.themesPath = 'themes/'
    this._resolvedThemes = {}
    this._resolvedGrammars = {}
    this._langGraph = /* @__PURE__ */ new Map()
    this._langMap = languages.reduce((acc, lang) => {
      acc[lang.id] = lang
      return acc
    }, {})
  }
  getTheme(theme) {
    if (typeof theme === 'string') {
      return this._resolvedThemes[theme]
    } else {
      return theme
    }
  }
  async loadTheme(theme) {
    if (typeof theme === 'string') {
      if (!this._resolvedThemes[theme]) {
        this._resolvedThemes[theme] = await fetchTheme(`${this.themesPath}${theme}.json`)
      }
      return this._resolvedThemes[theme]
    } else {
      theme = toShikiTheme(theme)
      if (theme.name) {
        this._resolvedThemes[theme.name] = theme
      }
      return theme
    }
  }
  async loadThemes(themes) {
    return await Promise.all(themes.map(theme => this.loadTheme(theme)))
  }
  getLoadedThemes() {
    return Object.keys(this._resolvedThemes)
  }
  getGrammar(name) {
    return this._resolvedGrammars[name]
  }
  async loadLanguage(lang) {
    const embeddedLanguages = lang.embeddedLangs?.reduce(async (acc, l, idx) => {
      if (!this.getLoadedLanguages().includes(l) && this._resolver.getLangRegistration(l)) {
        await this._resolver.loadGrammar(this._resolver.getLangRegistration(l).scopeName)
        acc[this._resolver.getLangRegistration(l).scopeName] = idx + 2
        return acc
      }
    }, {})
    const grammarConfig = {
      embeddedLanguages,
      balancedBracketSelectors: lang.balancedBracketSelectors || ['*'],
      unbalancedBracketSelectors: lang.unbalancedBracketSelectors || []
    }
    const g = await this.loadGrammarWithConfiguration(lang.scopeName, 1, grammarConfig)
    this._resolvedGrammars[lang.id] = g
    if (lang.aliases) {
      lang.aliases.forEach(la => {
        this._resolvedGrammars[la] = g
      })
    }
  }
  async loadLanguages(langs) {
    for (const lang of langs) {
      this.resolveEmbeddedLanguages(lang)
    }
    const langsGraphArray = Array.from(this._langGraph.values())
    for (const lang of langsGraphArray) {
      this._resolver.addLanguage(lang)
    }
    for (const lang of langsGraphArray) {
      await this.loadLanguage(lang)
    }
  }
  getLoadedLanguages() {
    return Object.keys(this._resolvedGrammars)
  }
  resolveEmbeddedLanguages(lang) {
    if (!this._langGraph.has(lang.id)) {
      this._langGraph.set(lang.id, lang)
    }
    if (lang.embeddedLangs) {
      for (const embeddedLang of lang.embeddedLangs) {
        this._langGraph.set(embeddedLang, this._langMap[embeddedLang])
      }
    }
  }
}

function resolveLang(lang) {
  return typeof lang === 'string'
    ? languages.find(l => l.id === lang || l.aliases?.includes(lang))
    : lang
}
function resolveOptions(options) {
  let _languages = languages
  let _themes = options.themes || []
  let _wasmPath = options.paths?.wasm
    ? options.paths.wasm.endsWith('/')
      ? options.paths.wasm
      : options.paths.wasm + '/'
    : WASM_PATH
  if (options.langs) {
    _languages = options.langs.map(resolveLang)
  }
  if (options.theme) {
    _themes.unshift(options.theme)
  }
  if (!_themes.length) {
    _themes = ['nord']
  }
  return { _languages, _themes, _wasmPath }
}
async function getHighlighter(options) {
  const { _languages, _themes, _wasmPath } = resolveOptions(options)
  const _resolver = new Resolver(getOniguruma(_wasmPath), 'vscode-oniguruma')
  const _registry = new Registry(_resolver)
  if (options.paths?.themes) {
    _registry.themesPath = options.paths.themes.endsWith('/')
      ? options.paths.themes
      : options.paths.themes + '/'
  }
  if (options.paths?.languages) {
    _resolver.languagesPath = options.paths.languages.endsWith('/')
      ? options.paths.languages
      : options.paths.languages + '/'
  }
  const themes = await _registry.loadThemes(_themes)
  const _defaultTheme = themes[0]
  let _currentTheme
  await _registry.loadLanguages(_languages)
  let COLOR_REPLACEMENTS = {
    '#000001': 'var(--shiki-color-text)',
    '#000002': 'var(--shiki-color-background)',
    '#000004': 'var(--shiki-token-constant)',
    '#000005': 'var(--shiki-token-string)',
    '#000006': 'var(--shiki-token-comment)',
    '#000007': 'var(--shiki-token-keyword)',
    '#000008': 'var(--shiki-token-parameter)',
    '#000009': 'var(--shiki-token-function)',
    '#000010': 'var(--shiki-token-string-expression)',
    '#000011': 'var(--shiki-token-punctuation)',
    '#000012': 'var(--shiki-token-link)'
  }
  function setColorReplacements(map) {
    COLOR_REPLACEMENTS = map
  }
  function fixCssVariablesTheme(theme, colorMap) {
    theme.bg = COLOR_REPLACEMENTS[theme.bg] || theme.bg
    theme.fg = COLOR_REPLACEMENTS[theme.fg] || theme.fg
    colorMap.forEach((val, i) => {
      colorMap[i] = COLOR_REPLACEMENTS[val] || val
    })
  }
  function getTheme(theme) {
    const _theme = theme ? _registry.getTheme(theme) : _defaultTheme
    if (!_theme) {
      throw Error(`No theme registration for ${theme}`)
    }
    if (!_currentTheme || _currentTheme.name !== _theme.name) {
      _registry.setTheme(_theme)
      _currentTheme = _theme
    }
    const _colorMap = _registry.getColorMap()
    if (_theme.type === 'css') {
      fixCssVariablesTheme(_theme, _colorMap)
    }
    return { _theme, _colorMap }
  }
  function getGrammar(lang) {
    const _grammar = _registry.getGrammar(lang)
    if (!_grammar) {
      throw Error(`No language registration for ${lang}`)
    }
    return { _grammar }
  }
  function codeToThemedTokens(code, lang = 'text', theme, options2 = { includeExplanation: true }) {
    if (isPlaintext(lang)) {
      const lines = code.split(/\r\n|\r|\n/)
      return [...lines.map(line => [{ content: line }])]
    }
    const { _grammar } = getGrammar(lang)
    const { _theme, _colorMap } = getTheme(theme)
    return tokenizeWithTheme(_theme, _colorMap, code, _grammar, options2)
  }
  function codeToHtml(code, arg1 = 'text', arg2) {
    let options2
    if (typeof arg1 === 'object') {
      options2 = arg1
    } else {
      options2 = {
        lang: arg1,
        theme: arg2
      }
    }
    const tokens = codeToThemedTokens(code, options2.lang, options2.theme, {
      includeExplanation: false
    })
    const { _theme } = getTheme(options2.theme)
    return renderToHtml(tokens, {
      fg: _theme.fg,
      bg: _theme.bg,
      lineOptions: options2?.lineOptions,
      themeName: _theme.name
    })
  }
  async function loadTheme(theme) {
    await _registry.loadTheme(theme)
  }
  async function loadLanguage(lang) {
    const _lang = resolveLang(lang)
    _resolver.addLanguage(_lang)
    await _registry.loadLanguage(_lang)
  }
  function getLoadedThemes() {
    return _registry.getLoadedThemes()
  }
  function getLoadedLanguages() {
    return _registry.getLoadedLanguages()
  }
  function getBackgroundColor(theme) {
    const { _theme } = getTheme(theme)
    return _theme.bg
  }
  function getForegroundColor(theme) {
    const { _theme } = getTheme(theme)
    return _theme.fg
  }
  return {
    codeToThemedTokens,
    codeToHtml,
    getTheme: theme => {
      return getTheme(theme)._theme
    },
    loadTheme,
    loadLanguage,
    getBackgroundColor,
    getForegroundColor,
    getLoadedThemes,
    getLoadedLanguages,
    setColorReplacements
  }
}
function isPlaintext(lang) {
  return !lang || ['plaintext', 'txt', 'text'].includes(lang)
}

function setOnigasmWASM(path) {
  setWasm(path)
}

export {
  languages as BUNDLED_LANGUAGES,
  themes as BUNDLED_THEMES,
  FontStyle,
  getHighlighter,
  fetchTheme as loadTheme,
  renderToHtml,
  setCDN,
  setOnigasmWASM,
  setWasm,
  toShikiTheme
}
