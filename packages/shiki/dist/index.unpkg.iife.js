!(function (e) {
  'use strict'
  const t = [
    {
      id: 'abap',
      scopeName: 'source.abap',
      path: 'abap.tmLanguage.json',
      displayName: 'ABAP',
      samplePath: 'abap.sample'
    },
    {
      id: 'actionscript-3',
      scopeName: 'source.actionscript.3',
      path: 'actionscript-3.tmLanguage.json',
      displayName: 'ActionScript',
      samplePath: 'actionscript-3.sample'
    },
    {
      id: 'ada',
      scopeName: 'source.ada',
      path: 'ada.tmLanguage.json',
      displayName: 'Ada',
      samplePath: 'ada.sample'
    },
    {
      id: 'apache',
      scopeName: 'source.apacheconf',
      path: 'apache.tmLanguage.json',
      displayName: 'Apache Conf'
    },
    {
      id: 'apex',
      scopeName: 'source.apex',
      path: 'apex.tmLanguage.json',
      displayName: 'Apex',
      samplePath: 'apex.sample'
    },
    {
      id: 'apl',
      scopeName: 'source.apl',
      path: 'apl.tmLanguage.json',
      displayName: 'APL',
      embeddedLangs: ['html', 'xml', 'css', 'javascript', 'json']
    },
    {
      id: 'applescript',
      scopeName: 'source.applescript',
      path: 'applescript.tmLanguage.json',
      displayName: 'AppleScript',
      samplePath: 'applescript.sample'
    },
    {
      id: 'ara',
      scopeName: 'source.ara',
      path: 'ara.tmLanguage.json',
      displayName: 'Ara',
      samplePath: 'ara.sample'
    },
    {
      id: 'asm',
      scopeName: 'source.asm.x86_64',
      path: 'asm.tmLanguage.json',
      displayName: 'Assembly',
      samplePath: 'asm.sample'
    },
    {
      id: 'astro',
      scopeName: 'source.astro',
      path: 'astro.tmLanguage.json',
      displayName: 'Astro',
      samplePath: 'astro.sample',
      embeddedLangs: [
        'json',
        'javascript',
        'typescript',
        'stylus',
        'sass',
        'css',
        'scss',
        'less',
        'postcss',
        'tsx'
      ]
    },
    {
      id: 'awk',
      scopeName: 'source.awk',
      path: 'awk.tmLanguage.json',
      displayName: 'AWK',
      samplePath: 'awk.sample'
    },
    {
      id: 'ballerina',
      scopeName: 'source.ballerina',
      path: 'ballerina.tmLanguage.json',
      displayName: 'Ballerina',
      samplePath: 'ballerina.sample'
    },
    {
      id: 'bat',
      scopeName: 'source.batchfile',
      path: 'bat.tmLanguage.json',
      displayName: 'Batch',
      samplePath: 'bat.sample',
      aliases: ['batch']
    },
    {
      id: 'beancount',
      scopeName: 'text.beancount',
      path: 'beancount.tmLanguage.json',
      displayName: 'Beancount',
      samplePath: 'beancount.sample'
    },
    {
      id: 'berry',
      scopeName: 'source.berry',
      path: 'berry.tmLanguage.json',
      displayName: 'Berry',
      samplePath: 'berry.sample',
      aliases: ['be']
    },
    {
      id: 'bibtex',
      scopeName: 'text.bibtex',
      path: 'bibtex.tmLanguage.json',
      displayName: 'BibTeX'
    },
    {
      id: 'bicep',
      scopeName: 'source.bicep',
      path: 'bicep.tmLanguage.json',
      displayName: 'Bicep',
      samplePath: 'bicep.sample'
    },
    {
      id: 'blade',
      scopeName: 'text.html.php.blade',
      path: 'blade.tmLanguage.json',
      displayName: 'Blade',
      samplePath: 'blade.sample',
      embeddedLangs: ['html', 'xml', 'sql', 'javascript', 'json', 'css']
    },
    {
      id: 'c',
      scopeName: 'source.c',
      path: 'c.tmLanguage.json',
      displayName: 'C',
      samplePath: 'c.sample'
    },
    {
      id: 'cadence',
      scopeName: 'source.cadence',
      path: 'cadence.tmLanguage.json',
      displayName: 'Cadence',
      samplePath: 'cadence.sample',
      aliases: ['cdc']
    },
    {
      id: 'clarity',
      scopeName: 'source.clar',
      path: 'clarity.tmLanguage.json',
      displayName: 'Clarity',
      samplePath: 'clarity.sample'
    },
    {
      id: 'clojure',
      scopeName: 'source.clojure',
      path: 'clojure.tmLanguage.json',
      displayName: 'Clojure',
      samplePath: 'clojure.sample',
      aliases: ['clj']
    },
    {
      id: 'cmake',
      scopeName: 'source.cmake',
      path: 'cmake.tmLanguage.json',
      displayName: 'CMake',
      samplePath: 'cmake.sample'
    },
    {
      id: 'cobol',
      scopeName: 'source.cobol',
      path: 'cobol.tmLanguage.json',
      displayName: 'COBOL',
      samplePath: 'cobol.sample',
      embeddedLangs: ['sql', 'html', 'java']
    },
    {
      id: 'codeql',
      scopeName: 'source.ql',
      path: 'codeql.tmLanguage.json',
      displayName: 'CodeQL',
      samplePath: 'codeql.sample',
      aliases: ['ql'],
      embeddedLangs: ['markdown']
    },
    {
      id: 'coffee',
      scopeName: 'source.coffee',
      path: 'coffee.tmLanguage.json',
      displayName: 'CoffeeScript',
      samplePath: 'coffee.sample',
      embeddedLangs: ['javascript']
    },
    {
      id: 'cpp',
      scopeName: 'source.cpp',
      path: 'cpp.tmLanguage.json',
      displayName: 'C++',
      samplePath: 'cpp.sample',
      embeddedLangs: ['glsl', 'sql']
    },
    {
      id: 'crystal',
      scopeName: 'source.crystal',
      path: 'crystal.tmLanguage.json',
      displayName: 'Crystal',
      samplePath: 'crystal.sample',
      embeddedLangs: ['html', 'sql', 'css', 'c', 'javascript', 'shellscript']
    },
    {
      id: 'csharp',
      scopeName: 'source.cs',
      path: 'csharp.tmLanguage.json',
      displayName: 'C#',
      samplePath: 'csharp.sample',
      aliases: ['c#', 'cs']
    },
    {
      id: 'css',
      scopeName: 'source.css',
      path: 'css.tmLanguage.json',
      displayName: 'CSS',
      samplePath: 'css.sample'
    },
    {
      id: 'cue',
      scopeName: 'source.cue',
      path: 'cue.tmLanguage.json',
      displayName: 'CUE',
      samplePath: 'cue.sample'
    },
    {
      id: 'cypher',
      scopeName: 'source.cypher',
      path: 'cypher.tmLanguage.json',
      displayName: 'Cypher',
      samplePath: 'cypher.sample',
      aliases: ['cql']
    },
    {
      id: 'd',
      scopeName: 'source.d',
      path: 'd.tmLanguage.json',
      displayName: 'D',
      samplePath: 'd.sample'
    },
    {
      id: 'dart',
      scopeName: 'source.dart',
      path: 'dart.tmLanguage.json',
      displayName: 'Dart',
      samplePath: 'dart.sample'
    },
    {
      id: 'dax',
      scopeName: 'source.dax',
      path: 'dax.tmLanguage.json',
      displayName: 'DAX',
      samplePath: 'dax.sample'
    },
    {
      id: 'diff',
      scopeName: 'source.diff',
      path: 'diff.tmLanguage.json',
      displayName: 'Diff',
      samplePath: 'diff.sample'
    },
    {
      id: 'docker',
      scopeName: 'source.dockerfile',
      path: 'docker.tmLanguage.json',
      displayName: 'Docker',
      samplePath: 'docker.sample',
      aliases: ['dockerfile']
    },
    {
      id: 'dream-maker',
      scopeName: 'source.dm',
      path: 'dream-maker.tmLanguage.json',
      displayName: 'Dream Maker'
    },
    {
      id: 'elixir',
      scopeName: 'source.elixir',
      path: 'elixir.tmLanguage.json',
      displayName: 'Elixir',
      samplePath: 'elixir.sample',
      embeddedLangs: ['html']
    },
    {
      id: 'elm',
      scopeName: 'source.elm',
      path: 'elm.tmLanguage.json',
      displayName: 'Elm',
      samplePath: 'elm.sample',
      embeddedLangs: ['glsl']
    },
    {
      id: 'erb',
      scopeName: 'text.html.erb',
      path: 'erb.tmLanguage.json',
      displayName: 'ERB',
      samplePath: 'erb.sample',
      embeddedLangs: ['html', 'ruby']
    },
    {
      id: 'erlang',
      scopeName: 'source.erlang',
      path: 'erlang.tmLanguage.json',
      displayName: 'Erlang',
      samplePath: 'erlang.sample',
      aliases: ['erl']
    },
    {
      id: 'fish',
      scopeName: 'source.fish',
      path: 'fish.tmLanguage.json',
      displayName: 'Fish',
      samplePath: 'fish.sample'
    },
    {
      id: 'fsharp',
      scopeName: 'source.fsharp',
      path: 'fsharp.tmLanguage.json',
      displayName: 'F#',
      samplePath: 'fsharp.sample',
      aliases: ['f#', 'fs'],
      embeddedLangs: ['markdown']
    },
    {
      id: 'gdresource',
      scopeName: 'source.gdresource',
      path: 'gdresource.tmLanguage.json',
      displayName: 'GDResource',
      samplePath: 'gdresource.sample',
      embeddedLangs: ['gdshader', 'gdscript']
    },
    {
      id: 'gdscript',
      scopeName: 'source.gdscript',
      path: 'gdscript.tmLanguage.json',
      displayName: 'GDScript',
      samplePath: 'gdscript.sample'
    },
    {
      id: 'gdshader',
      scopeName: 'source.gdshader',
      path: 'gdshader.tmLanguage.json',
      displayName: 'GDShader',
      samplePath: 'gdshader.sample'
    },
    {
      id: 'gherkin',
      scopeName: 'text.gherkin.feature',
      path: 'gherkin.tmLanguage.json',
      displayName: 'Gherkin'
    },
    {
      id: 'git-commit',
      scopeName: 'text.git-commit',
      path: 'git-commit.tmLanguage.json',
      displayName: 'Git Commit Message',
      embeddedLangs: ['diff']
    },
    {
      id: 'git-rebase',
      scopeName: 'text.git-rebase',
      path: 'git-rebase.tmLanguage.json',
      displayName: 'Git Rebase Message',
      embeddedLangs: ['shellscript']
    },
    {
      id: 'glimmer-js',
      scopeName: 'source.gjs',
      path: 'glimmer-js.tmLanguage.json',
      displayName: 'Glimmer JS',
      aliases: ['gjs'],
      embeddedLangs: ['javascript', 'handlebars']
    },
    {
      id: 'glimmer-ts',
      scopeName: 'source.gts',
      path: 'glimmer-ts.tmLanguage.json',
      displayName: 'Glimmer TS',
      aliases: ['gts'],
      embeddedLangs: ['typescript', 'handlebars']
    },
    {
      id: 'glsl',
      scopeName: 'source.glsl',
      path: 'glsl.tmLanguage.json',
      displayName: 'GLSL',
      samplePath: 'glsl.sample',
      embeddedLangs: ['c']
    },
    {
      id: 'gnuplot',
      scopeName: 'source.gnuplot',
      path: 'gnuplot.tmLanguage.json',
      displayName: 'Gnuplot'
    },
    {
      id: 'go',
      scopeName: 'source.go',
      path: 'go.tmLanguage.json',
      displayName: 'Go',
      samplePath: 'go.sample'
    },
    {
      id: 'graphql',
      scopeName: 'source.graphql',
      path: 'graphql.tmLanguage.json',
      displayName: 'GraphQL',
      embeddedLangs: ['javascript', 'typescript', 'jsx', 'tsx']
    },
    {
      id: 'groovy',
      scopeName: 'source.groovy',
      path: 'groovy.tmLanguage.json',
      displayName: 'Groovy'
    },
    {
      id: 'hack',
      scopeName: 'source.hack',
      path: 'hack.tmLanguage.json',
      displayName: 'Hack',
      embeddedLangs: ['html', 'sql']
    },
    {
      id: 'haml',
      scopeName: 'text.haml',
      path: 'haml.tmLanguage.json',
      displayName: 'Ruby Haml',
      embeddedLangs: ['ruby', 'javascript', 'sass', 'coffee', 'markdown', 'css']
    },
    {
      id: 'handlebars',
      scopeName: 'text.html.handlebars',
      path: 'handlebars.tmLanguage.json',
      displayName: 'Handlebars',
      aliases: ['hbs'],
      embeddedLangs: ['html', 'css', 'javascript', 'yaml']
    },
    {
      id: 'haskell',
      scopeName: 'source.haskell',
      path: 'haskell.tmLanguage.json',
      displayName: 'Haskell',
      aliases: ['hs']
    },
    {
      id: 'hcl',
      scopeName: 'source.hcl',
      path: 'hcl.tmLanguage.json',
      displayName: 'HashiCorp HCL',
      samplePath: 'hcl.sample'
    },
    {
      id: 'hjson',
      scopeName: 'source.hjson',
      path: 'hjson.tmLanguage.json',
      displayName: 'Hjson',
      samplePath: 'hjson.sample'
    },
    { id: 'hlsl', scopeName: 'source.hlsl', path: 'hlsl.tmLanguage.json', displayName: 'HLSL' },
    {
      id: 'html',
      scopeName: 'text.html.basic',
      path: 'html.tmLanguage.json',
      displayName: 'HTML',
      samplePath: 'html.sample',
      embeddedLangs: ['javascript', 'css']
    },
    {
      id: 'http',
      scopeName: 'source.http',
      path: 'http.tmLanguage.json',
      displayName: 'HTTP',
      samplePath: 'http.sample',
      embeddedLangs: ['shellscript', 'json', 'xml', 'graphql']
    },
    {
      id: 'imba',
      scopeName: 'source.imba',
      path: 'imba.tmLanguage.json',
      displayName: 'Imba',
      samplePath: 'imba.sample'
    },
    {
      id: 'ini',
      scopeName: 'source.ini',
      path: 'ini.tmLanguage.json',
      displayName: 'INI',
      aliases: ['properties']
    },
    {
      id: 'java',
      scopeName: 'source.java',
      path: 'java.tmLanguage.json',
      displayName: 'Java',
      samplePath: 'java.sample'
    },
    {
      id: 'javascript',
      scopeName: 'source.js',
      path: 'javascript.tmLanguage.json',
      displayName: 'JavaScript',
      samplePath: 'javascript.sample',
      aliases: ['js']
    },
    {
      id: 'jinja-html',
      scopeName: 'text.html.jinja',
      path: 'jinja-html.tmLanguage.json',
      displayName: 'Jinja',
      embeddedLangs: ['html']
    },
    {
      id: 'jison',
      scopeName: 'source.jison',
      path: 'jison.tmLanguage.json',
      displayName: 'Jison',
      samplePath: 'jison.sample',
      embeddedLangs: ['javascript']
    },
    { id: 'json', scopeName: 'source.json', path: 'json.tmLanguage.json', displayName: 'JSON' },
    {
      id: 'json5',
      scopeName: 'source.json5',
      path: 'json5.tmLanguage.json',
      displayName: 'JSON5',
      samplePath: 'json5.sample'
    },
    {
      id: 'jsonc',
      scopeName: 'source.json.comments',
      path: 'jsonc.tmLanguage.json',
      displayName: 'JSON with Comments'
    },
    {
      id: 'jsonl',
      scopeName: 'source.json.lines',
      path: 'jsonl.tmLanguage.json',
      displayName: 'JSON Lines'
    },
    {
      id: 'jsonnet',
      scopeName: 'source.jsonnet',
      path: 'jsonnet.tmLanguage.json',
      displayName: 'Jsonnet'
    },
    {
      id: 'jssm',
      scopeName: 'source.jssm',
      path: 'jssm.tmLanguage.json',
      displayName: 'JSSM',
      samplePath: 'jssm.sample',
      aliases: ['fsl']
    },
    { id: 'jsx', scopeName: 'source.js.jsx', path: 'jsx.tmLanguage.json', displayName: 'JSX' },
    {
      id: 'julia',
      scopeName: 'source.julia',
      path: 'julia.tmLanguage.json',
      displayName: 'Julia',
      embeddedLangs: ['cpp', 'python', 'javascript', 'r', 'sql']
    },
    {
      id: 'kotlin',
      scopeName: 'source.kotlin',
      path: 'kotlin.tmLanguage.json',
      displayName: 'Kotlin',
      samplePath: 'kotlin.sample'
    },
    {
      id: 'kusto',
      scopeName: 'source.kusto',
      path: 'kusto.tmLanguage.json',
      displayName: 'Kusto',
      samplePath: 'kusto.sample',
      aliases: ['kql']
    },
    {
      id: 'latex',
      scopeName: 'text.tex.latex',
      path: 'latex.tmLanguage.json',
      displayName: 'LaTeX',
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
      displayName: 'Less',
      embeddedLangs: ['css']
    },
    {
      id: 'liquid',
      scopeName: 'text.html.liquid',
      path: 'liquid.tmLanguage.json',
      displayName: 'Liquid',
      samplePath: 'liquid.sample',
      embeddedLangs: ['html', 'css', 'json', 'javascript']
    },
    { id: 'lisp', scopeName: 'source.lisp', path: 'lisp.tmLanguage.json', displayName: 'Lisp' },
    { id: 'logo', scopeName: 'source.logo', path: 'logo.tmLanguage.json', displayName: 'Logo' },
    {
      id: 'lua',
      scopeName: 'source.lua',
      path: 'lua.tmLanguage.json',
      displayName: 'Lua',
      embeddedLangs: ['c']
    },
    {
      id: 'make',
      scopeName: 'source.makefile',
      path: 'make.tmLanguage.json',
      displayName: 'Makefile',
      aliases: ['makefile']
    },
    {
      id: 'markdown',
      scopeName: 'text.html.markdown',
      path: 'markdown.tmLanguage.json',
      displayName: 'Markdown',
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
      displayName: 'Marko',
      embeddedLangs: ['css', 'less', 'scss', 'javascript']
    },
    {
      id: 'matlab',
      scopeName: 'source.matlab',
      path: 'matlab.tmLanguage.json',
      displayName: 'MATLAB'
    },
    {
      id: 'mdx',
      scopeName: 'source.mdx',
      path: 'mdx.tmLanguage.json',
      displayName: 'MDX',
      embeddedLangs: [
        'tsx',
        'toml',
        'yaml',
        'c',
        'clojure',
        'coffee',
        'cpp',
        'csharp',
        'css',
        'diff',
        'docker',
        'elixir',
        'elm',
        'erlang',
        'go',
        'graphql',
        'haskell',
        'html',
        'ini',
        'java',
        'javascript',
        'json',
        'julia',
        'kotlin',
        'less',
        'lua',
        'make',
        'markdown',
        'objective-c',
        'perl',
        'python',
        'r',
        'ruby',
        'rust',
        'scala',
        'scss',
        'shellscript',
        'sql',
        'xml',
        'swift',
        'typescript'
      ]
    },
    {
      id: 'mermaid',
      scopeName: 'source.mermaid',
      path: 'mermaid.tmLanguage.json',
      displayName: 'Mermaid'
    },
    {
      id: 'narrat',
      scopeName: 'source.narrat',
      path: 'narrat.tmLanguage.json',
      displayName: 'Narrat Language',
      samplePath: 'narrat.sample',
      aliases: ['nar']
    },
    {
      id: 'nextflow',
      scopeName: 'source.nextflow',
      path: 'nextflow.tmLanguage.json',
      displayName: 'Nextflow',
      samplePath: 'nextflow.sample',
      aliases: ['nf']
    },
    {
      id: 'nginx',
      scopeName: 'source.nginx',
      path: 'nginx.tmLanguage.json',
      displayName: 'Nginx',
      embeddedLangs: ['lua']
    },
    {
      id: 'nim',
      scopeName: 'source.nim',
      path: 'nim.tmLanguage.json',
      displayName: 'Nim',
      embeddedLangs: ['c', 'html', 'xml', 'javascript', 'css', 'glsl', 'markdown']
    },
    { id: 'nix', scopeName: 'source.nix', path: 'nix.tmLanguage.json', displayName: 'Nix' },
    {
      id: 'objective-c',
      scopeName: 'source.objc',
      path: 'objective-c.tmLanguage.json',
      displayName: 'Objective-C',
      aliases: ['objc']
    },
    {
      id: 'objective-cpp',
      scopeName: 'source.objcpp',
      path: 'objective-cpp.tmLanguage.json',
      displayName: 'Objective-C++'
    },
    { id: 'ocaml', scopeName: 'source.ocaml', path: 'ocaml.tmLanguage.json', displayName: 'OCaml' },
    {
      id: 'pascal',
      scopeName: 'source.pascal',
      path: 'pascal.tmLanguage.json',
      displayName: 'Pascal'
    },
    {
      id: 'perl',
      scopeName: 'source.perl',
      path: 'perl.tmLanguage.json',
      displayName: 'Perl',
      embeddedLangs: ['html', 'xml', 'css', 'javascript', 'sql']
    },
    {
      id: 'php',
      scopeName: 'source.php',
      path: 'php.tmLanguage.json',
      displayName: 'PHP',
      embeddedLangs: ['html', 'xml', 'sql', 'javascript', 'json', 'css']
    },
    {
      id: 'plsql',
      scopeName: 'source.plsql.oracle',
      path: 'plsql.tmLanguage.json',
      displayName: 'PL/SQL'
    },
    {
      id: 'postcss',
      scopeName: 'source.css.postcss',
      path: 'postcss.tmLanguage.json',
      displayName: 'PostCSS'
    },
    {
      id: 'powerquery',
      scopeName: 'source.powerquery',
      path: 'powerquery.tmLanguage.json',
      displayName: 'PowerQuery',
      samplePath: 'powerquery.sample'
    },
    {
      id: 'powershell',
      scopeName: 'source.powershell',
      path: 'powershell.tmLanguage.json',
      displayName: 'PowerShell',
      aliases: ['ps', 'ps1']
    },
    {
      id: 'prisma',
      scopeName: 'source.prisma',
      path: 'prisma.tmLanguage.json',
      displayName: 'Prisma',
      samplePath: 'prisma.sample'
    },
    {
      id: 'prolog',
      scopeName: 'source.prolog',
      path: 'prolog.tmLanguage.json',
      displayName: 'Prolog'
    },
    {
      id: 'proto',
      scopeName: 'source.proto',
      path: 'proto.tmLanguage.json',
      displayName: 'Protocol Buffer 3',
      samplePath: 'proto.sample'
    },
    {
      id: 'pug',
      scopeName: 'text.pug',
      path: 'pug.tmLanguage.json',
      displayName: 'Pug',
      aliases: ['jade'],
      embeddedLangs: ['javascript', 'css', 'sass', 'scss', 'stylus', 'coffee', 'html']
    },
    {
      id: 'puppet',
      scopeName: 'source.puppet',
      path: 'puppet.tmLanguage.json',
      displayName: 'Puppet'
    },
    {
      id: 'purescript',
      scopeName: 'source.purescript',
      path: 'purescript.tmLanguage.json',
      displayName: 'PureScript'
    },
    {
      id: 'python',
      scopeName: 'source.python',
      path: 'python.tmLanguage.json',
      displayName: 'Python',
      samplePath: 'python.sample',
      aliases: ['py']
    },
    { id: 'r', scopeName: 'source.r', path: 'r.tmLanguage.json', displayName: 'R' },
    {
      id: 'raku',
      scopeName: 'source.perl.6',
      path: 'raku.tmLanguage.json',
      displayName: 'Perl 6',
      aliases: ['perl6']
    },
    {
      id: 'razor',
      scopeName: 'text.aspnetcorerazor',
      path: 'razor.tmLanguage.json',
      displayName: 'ASP.NET Razor',
      embeddedLangs: ['html', 'csharp']
    },
    {
      id: 'reg',
      scopeName: 'source.reg',
      path: 'reg.tmLanguage.json',
      displayName: 'Windows Registry Script',
      samplePath: 'reg.sample'
    },
    {
      id: 'rel',
      scopeName: 'source.rel',
      path: 'rel.tmLanguage.json',
      displayName: 'Rel',
      samplePath: 'rel.sample'
    },
    {
      id: 'riscv',
      scopeName: 'source.riscv',
      path: 'riscv.tmLanguage.json',
      displayName: 'RISC-V'
    },
    {
      id: 'rst',
      scopeName: 'source.rst',
      path: 'rst.tmLanguage.json',
      displayName: 'reStructuredText',
      embeddedLangs: ['cpp', 'python', 'javascript', 'shellscript', 'yaml', 'cmake', 'ruby']
    },
    {
      id: 'ruby',
      scopeName: 'source.ruby',
      path: 'ruby.tmLanguage.json',
      displayName: 'Ruby',
      samplePath: 'ruby.sample',
      aliases: ['rb'],
      embeddedLangs: ['html', 'xml', 'sql', 'css', 'c', 'javascript', 'shellscript', 'lua']
    },
    {
      id: 'rust',
      scopeName: 'source.rust',
      path: 'rust.tmLanguage.json',
      displayName: 'Rust',
      aliases: ['rs']
    },
    {
      id: 'sas',
      scopeName: 'source.sas',
      path: 'sas.tmLanguage.json',
      displayName: 'SAS',
      embeddedLangs: ['sql']
    },
    { id: 'sass', scopeName: 'source.sass', path: 'sass.tmLanguage.json', displayName: 'Sass' },
    { id: 'scala', scopeName: 'source.scala', path: 'scala.tmLanguage.json', displayName: 'Scala' },
    {
      id: 'scheme',
      scopeName: 'source.scheme',
      path: 'scheme.tmLanguage.json',
      displayName: 'Scheme'
    },
    {
      id: 'scss',
      scopeName: 'source.css.scss',
      path: 'scss.tmLanguage.json',
      displayName: 'SCSS',
      embeddedLangs: ['css']
    },
    {
      id: 'shaderlab',
      scopeName: 'source.shaderlab',
      path: 'shaderlab.tmLanguage.json',
      displayName: 'ShaderLab',
      aliases: ['shader'],
      embeddedLangs: ['hlsl']
    },
    {
      id: 'shellscript',
      scopeName: 'source.shell',
      path: 'shellscript.tmLanguage.json',
      displayName: 'Shell',
      aliases: ['bash', 'console', 'sh', 'shell', 'zsh']
    },
    {
      id: 'smalltalk',
      scopeName: 'source.smalltalk',
      path: 'smalltalk.tmLanguage.json',
      displayName: 'Smalltalk'
    },
    {
      id: 'solidity',
      scopeName: 'source.solidity',
      path: 'solidity.tmLanguage.json',
      displayName: 'Solidity'
    },
    {
      id: 'sparql',
      scopeName: 'source.sparql',
      path: 'sparql.tmLanguage.json',
      displayName: 'SPARQL',
      samplePath: 'sparql.sample',
      embeddedLangs: ['turtle']
    },
    { id: 'sql', scopeName: 'source.sql', path: 'sql.tmLanguage.json', displayName: 'SQL' },
    {
      id: 'ssh-config',
      scopeName: 'source.ssh-config',
      path: 'ssh-config.tmLanguage.json',
      displayName: 'SSH Config'
    },
    {
      id: 'stata',
      scopeName: 'source.stata',
      path: 'stata.tmLanguage.json',
      displayName: 'Stata',
      samplePath: 'stata.sample',
      embeddedLangs: ['sql']
    },
    {
      id: 'stylus',
      scopeName: 'source.stylus',
      path: 'stylus.tmLanguage.json',
      displayName: 'Stylus',
      aliases: ['styl']
    },
    {
      id: 'svelte',
      scopeName: 'source.svelte',
      path: 'svelte.tmLanguage.json',
      displayName: 'Svelte',
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
    { id: 'swift', scopeName: 'source.swift', path: 'swift.tmLanguage.json', displayName: 'Swift' },
    {
      id: 'system-verilog',
      scopeName: 'source.systemverilog',
      path: 'system-verilog.tmLanguage.json',
      displayName: 'SystemVerilog'
    },
    {
      id: 'tasl',
      scopeName: 'source.tasl',
      path: 'tasl.tmLanguage.json',
      displayName: 'Tasl',
      samplePath: 'tasl.sample'
    },
    { id: 'tcl', scopeName: 'source.tcl', path: 'tcl.tmLanguage.json', displayName: 'Tcl' },
    {
      id: 'tex',
      scopeName: 'text.tex',
      path: 'tex.tmLanguage.json',
      displayName: 'TeX',
      embeddedLangs: ['r']
    },
    { id: 'toml', scopeName: 'source.toml', path: 'toml.tmLanguage.json', displayName: 'TOML' },
    {
      id: 'tsx',
      scopeName: 'source.tsx',
      path: 'tsx.tmLanguage.json',
      displayName: 'TSX',
      samplePath: 'tsx.sample'
    },
    {
      id: 'turtle',
      scopeName: 'source.turtle',
      path: 'turtle.tmLanguage.json',
      displayName: 'Turtle',
      samplePath: 'turtle.sample'
    },
    {
      id: 'twig',
      scopeName: 'text.html.twig',
      path: 'twig.tmLanguage.json',
      displayName: 'Twig',
      embeddedLangs: ['css', 'javascript', 'php', 'python', 'ruby']
    },
    {
      id: 'typescript',
      scopeName: 'source.ts',
      path: 'typescript.tmLanguage.json',
      displayName: 'TypeScript',
      aliases: ['ts']
    },
    {
      id: 'v',
      scopeName: 'source.v',
      path: 'v.tmLanguage.json',
      displayName: 'V',
      samplePath: 'v.sample'
    },
    {
      id: 'vb',
      scopeName: 'source.asp.vb.net',
      path: 'vb.tmLanguage.json',
      displayName: 'Visual Basic',
      aliases: ['cmd']
    },
    {
      id: 'verilog',
      scopeName: 'source.verilog',
      path: 'verilog.tmLanguage.json',
      displayName: 'Verilog'
    },
    { id: 'vhdl', scopeName: 'source.vhdl', path: 'vhdl.tmLanguage.json', displayName: 'VHDL' },
    {
      id: 'viml',
      scopeName: 'source.viml',
      path: 'viml.tmLanguage.json',
      displayName: 'Vim Script',
      aliases: ['vim', 'vimscript']
    },
    {
      id: 'vue-html',
      scopeName: 'text.html.vue-html',
      path: 'vue-html.tmLanguage.json',
      displayName: 'Vue HTML',
      embeddedLangs: ['vue', 'javascript']
    },
    {
      id: 'vue',
      scopeName: 'source.vue',
      path: 'vue.tmLanguage.json',
      displayName: 'Vue',
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
      id: 'vyper',
      scopeName: 'source.vyper',
      path: 'vyper.tmLanguage.json',
      displayName: 'Vyper',
      samplePath: 'vyper.sample',
      aliases: ['vy']
    },
    {
      id: 'wasm',
      scopeName: 'source.wat',
      path: 'wasm.tmLanguage.json',
      displayName: 'WebAssembly'
    },
    {
      id: 'wenyan',
      scopeName: 'source.wenyan',
      path: 'wenyan.tmLanguage.json',
      displayName: 'Wenyan',
      aliases: ['文言']
    },
    {
      id: 'wgsl',
      scopeName: 'source.wgsl',
      path: 'wgsl.tmLanguage.json',
      displayName: 'WGSL',
      samplePath: 'wgsl.sample'
    },
    {
      id: 'wolfram',
      scopeName: 'source.wolfram',
      path: 'wolfram.tmLanguage.json',
      displayName: 'Wolfram',
      samplePath: 'wolfram.sample'
    },
    {
      id: 'xml',
      scopeName: 'text.xml',
      path: 'xml.tmLanguage.json',
      displayName: 'XML',
      embeddedLangs: ['java']
    },
    {
      id: 'xsl',
      scopeName: 'text.xml.xsl',
      path: 'xsl.tmLanguage.json',
      displayName: 'XSL',
      embeddedLangs: ['xml']
    },
    {
      id: 'yaml',
      scopeName: 'source.yaml',
      path: 'yaml.tmLanguage.json',
      displayName: 'YAML',
      aliases: ['yml']
    },
    {
      id: 'zenscript',
      scopeName: 'source.zenscript',
      path: 'zenscript.tmLanguage.json',
      displayName: 'ZenScript',
      samplePath: 'zenscript.sample'
    }
  ]
  var s = (e => (
    (e[(e.NotSet = -1)] = 'NotSet'),
    (e[(e.None = 0)] = 'None'),
    (e[(e.Italic = 1)] = 'Italic'),
    (e[(e.Bold = 2)] = 'Bold'),
    (e[(e.Underline = 4)] = 'Underline'),
    e
  ))(s || {})
  class n {
    static toBinaryStr(e) {
      let t = e.toString(2)
      for (; t.length < 32; ) t = '0' + t
      return t
    }
    static printMetadata(e) {
      let t = n.getLanguageId(e),
        s = n.getTokenType(e),
        a = n.getFontStyle(e),
        r = n.getForeground(e),
        o = n.getBackground(e)
      console.log({ languageId: t, tokenType: s, fontStyle: a, foreground: r, background: o })
    }
    static getLanguageId(e) {
      return (255 & e) >>> 0
    }
    static getTokenType(e) {
      return (768 & e) >>> 8
    }
    static getFontStyle(e) {
      return (14336 & e) >>> 11
    }
    static getForeground(e) {
      return (8372224 & e) >>> 15
    }
    static getBackground(e) {
      return (4286578688 & e) >>> 24
    }
    static containsBalancedBrackets(e) {
      return 0 != (1024 & e)
    }
    static set(e, t, s, a, r, o) {
      let i = n.getLanguageId(e),
        c = n.getTokenType(e),
        l = n.getFontStyle(e),
        u = n.getForeground(e),
        p = n.getBackground(e)
      return (
        0 !== t && (i = t),
        0 !== s && (c = 8 === s ? 0 : s),
        -1 !== a && (l = a),
        0 !== r && (u = r),
        0 !== o && (p = o),
        ((i << 0) |
          (c << 8) |
          (l << 11) |
          ((n.containsBalancedBrackets(e) ? 1 : 0) << 10) |
          (u << 15) |
          (p << 24)) >>>
          0
      )
    }
  }
  function a(e) {
    return e.endsWith('/') || e.endsWith('\\') ? e.slice(0, -1) : e
  }
  function r(e) {
    return e.startsWith('./') ? e.slice(2) : e
  }
  function o(e) {
    const t = e.split(/[\/\\]/g)
    return t.slice(0, t.length - 1)
  }
  function i(...e) {
    return e.map(a).map(r).join('/')
  }
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self && self
  var c,
    l = { exports: {} }
  ;(c = () => {
    return (
      (e = {
        770: function (e, t, s) {
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e }
            }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.setDefaultDebugCall =
              t.createOnigScanner =
              t.createOnigString =
              t.loadWASM =
              t.OnigScanner =
              t.OnigString =
                void 0)
          const a = n(s(418))
          let r = null,
            o = !1
          class i {
            static _utf8ByteLength(e) {
              let t = 0
              for (let s = 0, n = e.length; s < n; s++) {
                const a = e.charCodeAt(s)
                let r = a,
                  o = !1
                if (a >= 55296 && a <= 56319 && s + 1 < n) {
                  const t = e.charCodeAt(s + 1)
                  t >= 56320 &&
                    t <= 57343 &&
                    ((r = (65536 + ((a - 55296) << 10)) | (t - 56320)), (o = !0))
                }
                ;(t += r <= 127 ? 1 : r <= 2047 ? 2 : r <= 65535 ? 3 : 4), o && s++
              }
              return t
            }
            constructor(e) {
              const t = e.length,
                s = i._utf8ByteLength(e),
                n = s !== t,
                a = n ? new Uint32Array(t + 1) : null
              n && (a[t] = s)
              const r = n ? new Uint32Array(s + 1) : null
              n && (r[s] = t)
              const o = new Uint8Array(s)
              let c = 0
              for (let s = 0; s < t; s++) {
                const i = e.charCodeAt(s)
                let l = i,
                  u = !1
                if (i >= 55296 && i <= 56319 && s + 1 < t) {
                  const t = e.charCodeAt(s + 1)
                  t >= 56320 &&
                    t <= 57343 &&
                    ((l = (65536 + ((i - 55296) << 10)) | (t - 56320)), (u = !0))
                }
                n &&
                  ((a[s] = c),
                  u && (a[s + 1] = c),
                  l <= 127
                    ? (r[c + 0] = s)
                    : l <= 2047
                    ? ((r[c + 0] = s), (r[c + 1] = s))
                    : l <= 65535
                    ? ((r[c + 0] = s), (r[c + 1] = s), (r[c + 2] = s))
                    : ((r[c + 0] = s), (r[c + 1] = s), (r[c + 2] = s), (r[c + 3] = s))),
                  l <= 127
                    ? (o[c++] = l)
                    : l <= 2047
                    ? ((o[c++] = 192 | ((1984 & l) >>> 6)), (o[c++] = 128 | ((63 & l) >>> 0)))
                    : l <= 65535
                    ? ((o[c++] = 224 | ((61440 & l) >>> 12)),
                      (o[c++] = 128 | ((4032 & l) >>> 6)),
                      (o[c++] = 128 | ((63 & l) >>> 0)))
                    : ((o[c++] = 240 | ((1835008 & l) >>> 18)),
                      (o[c++] = 128 | ((258048 & l) >>> 12)),
                      (o[c++] = 128 | ((4032 & l) >>> 6)),
                      (o[c++] = 128 | ((63 & l) >>> 0))),
                  u && s++
              }
              ;(this.utf16Length = t),
                (this.utf8Length = s),
                (this.utf16Value = e),
                (this.utf8Value = o),
                (this.utf16OffsetToUtf8 = a),
                (this.utf8OffsetToUtf16 = r)
            }
            createString(e) {
              const t = e._omalloc(this.utf8Length)
              return e.HEAPU8.set(this.utf8Value, t), t
            }
          }
          class c {
            constructor(e) {
              if (((this.id = ++c.LAST_ID), !r)) throw new Error('Must invoke loadWASM first.')
              ;(this._onigBinding = r), (this.content = e)
              const t = new i(e)
              ;(this.utf16Length = t.utf16Length),
                (this.utf8Length = t.utf8Length),
                (this.utf16OffsetToUtf8 = t.utf16OffsetToUtf8),
                (this.utf8OffsetToUtf16 = t.utf8OffsetToUtf16),
                this.utf8Length < 1e4 && !c._sharedPtrInUse
                  ? (c._sharedPtr || (c._sharedPtr = r._omalloc(1e4)),
                    (c._sharedPtrInUse = !0),
                    r.HEAPU8.set(t.utf8Value, c._sharedPtr),
                    (this.ptr = c._sharedPtr))
                  : (this.ptr = t.createString(r))
            }
            convertUtf8OffsetToUtf16(e) {
              return this.utf8OffsetToUtf16
                ? e < 0
                  ? 0
                  : e > this.utf8Length
                  ? this.utf16Length
                  : this.utf8OffsetToUtf16[e]
                : e
            }
            convertUtf16OffsetToUtf8(e) {
              return this.utf16OffsetToUtf8
                ? e < 0
                  ? 0
                  : e > this.utf16Length
                  ? this.utf8Length
                  : this.utf16OffsetToUtf8[e]
                : e
            }
            dispose() {
              this.ptr === c._sharedPtr
                ? (c._sharedPtrInUse = !1)
                : this._onigBinding._ofree(this.ptr)
            }
          }
          ;(t.OnigString = c), (c.LAST_ID = 0), (c._sharedPtr = 0), (c._sharedPtrInUse = !1)
          class l {
            constructor(e) {
              if (!r) throw new Error('Must invoke loadWASM first.')
              const t = [],
                s = []
              for (let n = 0, a = e.length; n < a; n++) {
                const a = new i(e[n])
                ;(t[n] = a.createString(r)), (s[n] = a.utf8Length)
              }
              const n = r._omalloc(4 * e.length)
              r.HEAPU32.set(t, n / 4)
              const a = r._omalloc(4 * e.length)
              r.HEAPU32.set(s, a / 4)
              const o = r._createOnigScanner(n, a, e.length)
              for (let s = 0, n = e.length; s < n; s++) r._ofree(t[s])
              r._ofree(a),
                r._ofree(n),
                0 === o &&
                  (function (e) {
                    throw new Error(e.UTF8ToString(e._getLastOnigError()))
                  })(r),
                (this._onigBinding = r),
                (this._ptr = o)
            }
            dispose() {
              this._onigBinding._freeOnigScanner(this._ptr)
            }
            findNextMatchSync(e, t, s) {
              let n = o,
                a = 0
              if (
                ('number' == typeof s
                  ? (8 & s && (n = !0), (a = s))
                  : 'boolean' == typeof s && (n = s),
                'string' == typeof e)
              ) {
                e = new c(e)
                const s = this._findNextMatchSync(e, t, n, a)
                return e.dispose(), s
              }
              return this._findNextMatchSync(e, t, n, a)
            }
            _findNextMatchSync(e, t, s, n) {
              const a = this._onigBinding
              let r
              if (
                ((r = s
                  ? a._findNextOnigScannerMatchDbg(
                      this._ptr,
                      e.id,
                      e.ptr,
                      e.utf8Length,
                      e.convertUtf16OffsetToUtf8(t),
                      n
                    )
                  : a._findNextOnigScannerMatch(
                      this._ptr,
                      e.id,
                      e.ptr,
                      e.utf8Length,
                      e.convertUtf16OffsetToUtf8(t),
                      n
                    )),
                0 === r)
              )
                return null
              const o = a.HEAPU32
              let i = r / 4
              const c = o[i++],
                l = o[i++]
              let u = []
              for (let t = 0; t < l; t++) {
                const s = e.convertUtf8OffsetToUtf16(o[i++]),
                  n = e.convertUtf8OffsetToUtf16(o[i++])
                u[t] = { start: s, end: n, length: n - s }
              }
              return { index: c, captureIndices: u }
            }
          }
          t.OnigScanner = l
          let u = !1,
            p = null
          ;(t.loadWASM = function (e) {
            if (u) return p
            let t, s, n, o
            if (
              ((u = !0),
              (function (e) {
                return 'function' == typeof e.instantiator
              })(e))
            )
              (t = e.instantiator), (s = e.print)
            else {
              let n
              !(function (e) {
                return void 0 !== e.data
              })(e)
                ? (n = e)
                : ((n = e.data), (s = e.print)),
                (t = (function (e) {
                  return 'undefined' != typeof Response && e instanceof Response
                })(n)
                  ? 'function' == typeof WebAssembly.instantiateStreaming
                    ? (function (e) {
                        return t => WebAssembly.instantiateStreaming(e, t)
                      })(n)
                    : (function (e) {
                        return async t => {
                          const s = await e.arrayBuffer()
                          return WebAssembly.instantiate(s, t)
                        }
                      })(n)
                  : (function (e) {
                      return t => WebAssembly.instantiate(e, t)
                    })(n))
            }
            return (
              (p = new Promise((e, t) => {
                ;(n = e), (o = t)
              })),
              (function (e, t, s, n) {
                ;(0, a.default)({
                  print: t,
                  instantiateWasm: (t, s) => {
                    if ('undefined' == typeof performance) {
                      const e = () => Date.now()
                      ;(t.env.emscripten_get_now = e),
                        (t.wasi_snapshot_preview1.emscripten_get_now = e)
                    }
                    return e(t).then(e => s(e.instance), n), {}
                  }
                }).then(e => {
                  ;(r = e), s()
                })
              })(t, s, n, o),
              p
            )
          }),
            (t.createOnigString = function (e) {
              return new c(e)
            }),
            (t.createOnigScanner = function (e) {
              return new l(e)
            }),
            (t.setDefaultDebugCall = function (e) {
              o = e
            })
        },
        418: e => {
          var t =
            ('undefined' != typeof document && document.currentScript && document.currentScript.src,
            function (e) {
              var t,
                s,
                n = void 0 !== (e = e || {}) ? e : {}
              n.ready = new Promise(function (e, n) {
                ;(t = e), (s = n)
              })
              var a,
                r = Object.assign({}, n),
                o = !1
              ;(a = function (e) {
                let t
                return 'function' == typeof readbuffer
                  ? new Uint8Array(readbuffer(e))
                  : ((t = read(e, 'binary')),
                    (function (e, t) {
                      e || w(t)
                    })('object' == typeof t),
                    t)
              }),
                'undefined' != typeof scriptArgs && scriptArgs,
                'undefined' != typeof onig_print &&
                  ('undefined' == typeof console && (console = {}),
                  (console.log = onig_print),
                  (console.warn = console.error =
                    'undefined' != typeof printErr ? printErr : onig_print))
              var i,
                c,
                l = n.print || console.log.bind(console),
                u = n.printErr || console.warn.bind(console)
              Object.assign(n, r),
                (r = null),
                n.arguments && n.arguments,
                n.thisProgram && n.thisProgram,
                n.quit && n.quit,
                n.wasmBinary && (i = n.wasmBinary),
                n.noExitRuntime,
                'object' != typeof WebAssembly && w('no native wasm support detected')
              var p,
                h,
                d,
                m = !1,
                g = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0
              function f(e, t, s) {
                for (var n = t + s, a = t; e[a] && !(a >= n); ) ++a
                if (a - t > 16 && e.buffer && g) return g.decode(e.subarray(t, a))
                for (var r = ''; t < a; ) {
                  var o = e[t++]
                  if (128 & o) {
                    var i = 63 & e[t++]
                    if (192 != (224 & o)) {
                      var c = 63 & e[t++]
                      if (
                        (o =
                          224 == (240 & o)
                            ? ((15 & o) << 12) | (i << 6) | c
                            : ((7 & o) << 18) | (i << 12) | (c << 6) | (63 & e[t++])) < 65536
                      )
                        r += String.fromCharCode(o)
                      else {
                        var l = o - 65536
                        r += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l))
                      }
                    } else r += String.fromCharCode(((31 & o) << 6) | i)
                  } else r += String.fromCharCode(o)
                }
                return r
              }
              function y(e) {
                ;(p = e),
                  (n.HEAP8 = new Int8Array(e)),
                  (n.HEAP16 = new Int16Array(e)),
                  (n.HEAP32 = new Int32Array(e)),
                  (n.HEAPU8 = h = new Uint8Array(e)),
                  (n.HEAPU16 = new Uint16Array(e)),
                  (n.HEAPU32 = d = new Uint32Array(e)),
                  (n.HEAPF32 = new Float32Array(e)),
                  (n.HEAPF64 = new Float64Array(e))
              }
              n.INITIAL_MEMORY
              var b = [],
                _ = [],
                N = []
              function k(e) {
                b.unshift(e)
              }
              function L(e) {
                N.unshift(e)
              }
              var S = 0,
                v = null
              function w(e) {
                n.onAbort && n.onAbort(e),
                  u((e = 'Aborted(' + e + ')')),
                  (m = !0),
                  (e += '. Build with -sASSERTIONS for more info.')
                var t = new WebAssembly.RuntimeError(e)
                throw (s(t), t)
              }
              var C,
                j,
                P = 'data:application/octet-stream;base64,'
              function A(e) {
                return e.startsWith(P)
              }
              function x(e) {
                try {
                  if (e == C && i) return new Uint8Array(i)
                  if (a) return a(e)
                  throw 'both async and sync fetching of the wasm failed'
                } catch (e) {
                  w(e)
                }
              }
              function T(e) {
                for (; e.length > 0; ) e.shift()(n)
              }
              function R(e) {
                try {
                  return c.grow((e - p.byteLength + 65535) >>> 16), y(c.buffer), 1
                } catch (e) {}
              }
              A((C = 'onig.wasm')) ||
                (C = (function (e) {
                  return n.locateFile ? n.locateFile(e, '') : '' + e
                })(C)),
                (j = 'undefined' != typeof dateNow ? dateNow : () => performance.now())
              var I = [null, [], []]
              function E(e, t) {
                var s = I[e]
                0 === t || 10 === t ? ((1 === e ? l : u)(f(s, 0)), (s.length = 0)) : s.push(t)
              }
              var O,
                M = {
                  emscripten_get_now: j,
                  emscripten_memcpy_big: function (e, t, s) {
                    h.copyWithin(e, t, t + s)
                  },
                  emscripten_resize_heap: function (e) {
                    var t,
                      s = h.length,
                      n = 2147483648
                    if ((e >>>= 0) > n) return !1
                    for (var a = 1; a <= 4; a *= 2) {
                      var r = s * (1 + 0.2 / a)
                      if (
                        ((r = Math.min(r, e + 100663296)),
                        R(Math.min(n, (t = Math.max(e, r)) + ((65536 - (t % 65536)) % 65536))))
                      )
                        return !0
                    }
                    return !1
                  },
                  fd_write: function (e, t, s, n) {
                    for (var a = 0, r = 0; r < s; r++) {
                      var o = d[t >> 2],
                        i = d[(t + 4) >> 2]
                      t += 8
                      for (var c = 0; c < i; c++) E(e, h[o + c])
                      a += i
                    }
                    return (d[n >> 2] = a), 0
                  }
                }
              function B(e) {
                function s() {
                  O ||
                    ((O = !0),
                    (n.calledRun = !0),
                    m ||
                      (T(_),
                      t(n),
                      n.onRuntimeInitialized && n.onRuntimeInitialized(),
                      (function () {
                        if (n.postRun)
                          for (
                            'function' == typeof n.postRun && (n.postRun = [n.postRun]);
                            n.postRun.length;

                          )
                            L(n.postRun.shift())
                        T(N)
                      })()))
                }
                S > 0 ||
                  ((function () {
                    if (n.preRun)
                      for (
                        'function' == typeof n.preRun && (n.preRun = [n.preRun]);
                        n.preRun.length;

                      )
                        k(n.preRun.shift())
                    T(b)
                  })(),
                  S > 0 ||
                    (n.setStatus
                      ? (n.setStatus('Running...'),
                        setTimeout(function () {
                          setTimeout(function () {
                            n.setStatus('')
                          }, 1),
                            s()
                        }, 1))
                      : s()))
              }
              if (
                ((function () {
                  var e = { env: M, wasi_snapshot_preview1: M }
                  function t(e, t) {
                    var s = e.exports
                    ;(n.asm = s),
                      y((c = n.asm.memory).buffer),
                      n.asm.__indirect_function_table,
                      (function (e) {
                        _.unshift(e)
                      })(n.asm.__wasm_call_ctors),
                      (function (e) {
                        if (
                          (S--,
                          n.monitorRunDependencies && n.monitorRunDependencies(S),
                          0 == S && v)
                        ) {
                          var t = v
                          ;(v = null), t()
                        }
                      })()
                  }
                  function a(e) {
                    t(e.instance)
                  }
                  function r(t) {
                    return (
                      i || !o || 'function' != typeof fetch
                        ? Promise.resolve().then(function () {
                            return x(C)
                          })
                        : fetch(C, { credentials: 'same-origin' })
                            .then(function (e) {
                              if (!e.ok) throw "failed to load wasm binary file at '" + C + "'"
                              return e.arrayBuffer()
                            })
                            .catch(function () {
                              return x(C)
                            })
                    )
                      .then(function (t) {
                        return WebAssembly.instantiate(t, e)
                      })
                      .then(function (e) {
                        return e
                      })
                      .then(t, function (e) {
                        u('failed to asynchronously prepare wasm: ' + e), w(e)
                      })
                  }
                  if (
                    (S++,
                    n.monitorRunDependencies && n.monitorRunDependencies(S),
                    n.instantiateWasm)
                  )
                    try {
                      return n.instantiateWasm(e, t)
                    } catch (e) {
                      u('Module.instantiateWasm callback failed with error: ' + e), s(e)
                    }
                  ;(i ||
                  'function' != typeof WebAssembly.instantiateStreaming ||
                  A(C) ||
                  'function' != typeof fetch
                    ? r(a)
                    : fetch(C, { credentials: 'same-origin' }).then(function (t) {
                        return WebAssembly.instantiateStreaming(t, e).then(a, function (e) {
                          return (
                            u('wasm streaming compile failed: ' + e),
                            u('falling back to ArrayBuffer instantiation'),
                            r(a)
                          )
                        })
                      })
                  ).catch(s)
                })(),
                (n.___wasm_call_ctors = function () {
                  return (n.___wasm_call_ctors = n.asm.__wasm_call_ctors).apply(null, arguments)
                }),
                (n.___errno_location = function () {
                  return (n.___errno_location = n.asm.__errno_location).apply(null, arguments)
                }),
                (n._omalloc = function () {
                  return (n._omalloc = n.asm.omalloc).apply(null, arguments)
                }),
                (n._ofree = function () {
                  return (n._ofree = n.asm.ofree).apply(null, arguments)
                }),
                (n._getLastOnigError = function () {
                  return (n._getLastOnigError = n.asm.getLastOnigError).apply(null, arguments)
                }),
                (n._createOnigScanner = function () {
                  return (n._createOnigScanner = n.asm.createOnigScanner).apply(null, arguments)
                }),
                (n._freeOnigScanner = function () {
                  return (n._freeOnigScanner = n.asm.freeOnigScanner).apply(null, arguments)
                }),
                (n._findNextOnigScannerMatch = function () {
                  return (n._findNextOnigScannerMatch = n.asm.findNextOnigScannerMatch).apply(
                    null,
                    arguments
                  )
                }),
                (n._findNextOnigScannerMatchDbg = function () {
                  return (n._findNextOnigScannerMatchDbg = n.asm.findNextOnigScannerMatchDbg).apply(
                    null,
                    arguments
                  )
                }),
                (n.stackSave = function () {
                  return (n.stackSave = n.asm.stackSave).apply(null, arguments)
                }),
                (n.stackRestore = function () {
                  return (n.stackRestore = n.asm.stackRestore).apply(null, arguments)
                }),
                (n.stackAlloc = function () {
                  return (n.stackAlloc = n.asm.stackAlloc).apply(null, arguments)
                }),
                (n.dynCall_jiji = function () {
                  return (n.dynCall_jiji = n.asm.dynCall_jiji).apply(null, arguments)
                }),
                (n.UTF8ToString = function (e, t) {
                  return e ? f(h, e, t) : ''
                }),
                (v = function e() {
                  O || B(), O || (v = e)
                }),
                n.preInit)
              )
                for (
                  'function' == typeof n.preInit && (n.preInit = [n.preInit]);
                  n.preInit.length > 0;

                )
                  n.preInit.pop()()
              return B(), e.ready
            })
          e.exports = t
        }
      }),
      (t = {}),
      (function s(n) {
        var a = t[n]
        if (void 0 !== a) return a.exports
        var r = (t[n] = { exports: {} })
        return e[n].call(r.exports, r, r.exports, s), r.exports
      })(770)
    )
    var e, t
  }),
    (l.exports = c())
  var u,
    p,
    h,
    d,
    m = l.exports
  function g(e, t = !1) {
    const s = e.length
    let n = 0,
      a = '',
      r = 0,
      o = 16,
      i = 0,
      c = 0,
      l = 0,
      u = 0,
      p = 0
    function h(t, s) {
      let a = 0,
        r = 0
      for (; a < t || !s; ) {
        let t = e.charCodeAt(n)
        if (t >= 48 && t <= 57) r = 16 * r + t - 48
        else if (t >= 65 && t <= 70) r = 16 * r + t - 65 + 10
        else {
          if (!(t >= 97 && t <= 102)) break
          r = 16 * r + t - 97 + 10
        }
        n++, a++
      }
      return a < t && (r = -1), r
    }
    function d() {
      if (((a = ''), (p = 0), (r = n), (c = i), (u = l), n >= s)) return (r = s), (o = 17)
      let t = e.charCodeAt(n)
      if (f(t)) {
        do {
          n++, (a += String.fromCharCode(t)), (t = e.charCodeAt(n))
        } while (f(t))
        return (o = 15)
      }
      if (y(t))
        return (
          n++,
          (a += String.fromCharCode(t)),
          13 === t && 10 === e.charCodeAt(n) && (n++, (a += '\n')),
          i++,
          (l = n),
          (o = 14)
        )
      switch (t) {
        case 123:
          return n++, (o = 1)
        case 125:
          return n++, (o = 2)
        case 91:
          return n++, (o = 3)
        case 93:
          return n++, (o = 4)
        case 58:
          return n++, (o = 6)
        case 44:
          return n++, (o = 5)
        case 34:
          return (
            n++,
            (a = (function () {
              let t = '',
                a = n
              for (;;) {
                if (n >= s) {
                  ;(t += e.substring(a, n)), (p = 2)
                  break
                }
                const r = e.charCodeAt(n)
                if (34 === r) {
                  ;(t += e.substring(a, n)), n++
                  break
                }
                if (92 !== r) {
                  if (r >= 0 && r <= 31) {
                    if (y(r)) {
                      ;(t += e.substring(a, n)), (p = 2)
                      break
                    }
                    p = 6
                  }
                  n++
                } else {
                  if (((t += e.substring(a, n)), n++, n >= s)) {
                    p = 2
                    break
                  }
                  switch (e.charCodeAt(n++)) {
                    case 34:
                      t += '"'
                      break
                    case 92:
                      t += '\\'
                      break
                    case 47:
                      t += '/'
                      break
                    case 98:
                      t += '\b'
                      break
                    case 102:
                      t += '\f'
                      break
                    case 110:
                      t += '\n'
                      break
                    case 114:
                      t += '\r'
                      break
                    case 116:
                      t += '\t'
                      break
                    case 117:
                      const e = h(4, !0)
                      e >= 0 ? (t += String.fromCharCode(e)) : (p = 4)
                      break
                    default:
                      p = 5
                  }
                  a = n
                }
              }
              return t
            })()),
            (o = 10)
          )
        case 47:
          const c = n - 1
          if (47 === e.charCodeAt(n + 1)) {
            for (n += 2; n < s && !y(e.charCodeAt(n)); ) n++
            return (a = e.substring(c, n)), (o = 12)
          }
          if (42 === e.charCodeAt(n + 1)) {
            n += 2
            const t = s - 1
            let r = !1
            for (; n < t; ) {
              const t = e.charCodeAt(n)
              if (42 === t && 47 === e.charCodeAt(n + 1)) {
                ;(n += 2), (r = !0)
                break
              }
              n++, y(t) && (13 === t && 10 === e.charCodeAt(n) && n++, i++, (l = n))
            }
            return r || (n++, (p = 1)), (a = e.substring(c, n)), (o = 13)
          }
          return (a += String.fromCharCode(t)), n++, (o = 16)
        case 45:
          if (((a += String.fromCharCode(t)), n++, n === s || !b(e.charCodeAt(n)))) return (o = 16)
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return (
            (a += (function () {
              let t = n
              if (48 === e.charCodeAt(n)) n++
              else for (n++; n < e.length && b(e.charCodeAt(n)); ) n++
              if (n < e.length && 46 === e.charCodeAt(n)) {
                if ((n++, !(n < e.length && b(e.charCodeAt(n))))) return (p = 3), e.substring(t, n)
                for (n++; n < e.length && b(e.charCodeAt(n)); ) n++
              }
              let s = n
              if (n < e.length && (69 === e.charCodeAt(n) || 101 === e.charCodeAt(n)))
                if (
                  (n++,
                  ((n < e.length && 43 === e.charCodeAt(n)) || 45 === e.charCodeAt(n)) && n++,
                  n < e.length && b(e.charCodeAt(n)))
                ) {
                  for (n++; n < e.length && b(e.charCodeAt(n)); ) n++
                  s = n
                } else p = 3
              return e.substring(t, s)
            })()),
            (o = 11)
          )
        default:
          for (; n < s && m(t); ) n++, (t = e.charCodeAt(n))
          if (r !== n) {
            switch (((a = e.substring(r, n)), a)) {
              case 'true':
                return (o = 8)
              case 'false':
                return (o = 9)
              case 'null':
                return (o = 7)
            }
            return (o = 16)
          }
          return (a += String.fromCharCode(t)), n++, (o = 16)
      }
    }
    function m(e) {
      if (f(e) || y(e)) return !1
      switch (e) {
        case 125:
        case 93:
        case 123:
        case 91:
        case 34:
        case 58:
        case 44:
        case 47:
          return !1
      }
      return !0
    }
    return {
      setPosition: function (e) {
        ;(n = e), (a = ''), (r = 0), (o = 16), (p = 0)
      },
      getPosition: () => n,
      scan: t
        ? function () {
            let e
            do {
              e = d()
            } while (e >= 12 && e <= 15)
            return e
          }
        : d,
      getToken: () => o,
      getTokenValue: () => a,
      getTokenOffset: () => r,
      getTokenLength: () => n - r,
      getTokenStartLine: () => c,
      getTokenStartCharacter: () => r - u,
      getTokenError: () => p
    }
  }
  function f(e) {
    return 32 === e || 9 === e
  }
  function y(e) {
    return 10 === e || 13 === e
  }
  function b(e) {
    return e >= 48 && e <= 57
  }
  !(function (e) {
    ;(e[(e.lineFeed = 10)] = 'lineFeed'),
      (e[(e.carriageReturn = 13)] = 'carriageReturn'),
      (e[(e.space = 32)] = 'space'),
      (e[(e._0 = 48)] = '_0'),
      (e[(e._1 = 49)] = '_1'),
      (e[(e._2 = 50)] = '_2'),
      (e[(e._3 = 51)] = '_3'),
      (e[(e._4 = 52)] = '_4'),
      (e[(e._5 = 53)] = '_5'),
      (e[(e._6 = 54)] = '_6'),
      (e[(e._7 = 55)] = '_7'),
      (e[(e._8 = 56)] = '_8'),
      (e[(e._9 = 57)] = '_9'),
      (e[(e.a = 97)] = 'a'),
      (e[(e.b = 98)] = 'b'),
      (e[(e.c = 99)] = 'c'),
      (e[(e.d = 100)] = 'd'),
      (e[(e.e = 101)] = 'e'),
      (e[(e.f = 102)] = 'f'),
      (e[(e.g = 103)] = 'g'),
      (e[(e.h = 104)] = 'h'),
      (e[(e.i = 105)] = 'i'),
      (e[(e.j = 106)] = 'j'),
      (e[(e.k = 107)] = 'k'),
      (e[(e.l = 108)] = 'l'),
      (e[(e.m = 109)] = 'm'),
      (e[(e.n = 110)] = 'n'),
      (e[(e.o = 111)] = 'o'),
      (e[(e.p = 112)] = 'p'),
      (e[(e.q = 113)] = 'q'),
      (e[(e.r = 114)] = 'r'),
      (e[(e.s = 115)] = 's'),
      (e[(e.t = 116)] = 't'),
      (e[(e.u = 117)] = 'u'),
      (e[(e.v = 118)] = 'v'),
      (e[(e.w = 119)] = 'w'),
      (e[(e.x = 120)] = 'x'),
      (e[(e.y = 121)] = 'y'),
      (e[(e.z = 122)] = 'z'),
      (e[(e.A = 65)] = 'A'),
      (e[(e.B = 66)] = 'B'),
      (e[(e.C = 67)] = 'C'),
      (e[(e.D = 68)] = 'D'),
      (e[(e.E = 69)] = 'E'),
      (e[(e.F = 70)] = 'F'),
      (e[(e.G = 71)] = 'G'),
      (e[(e.H = 72)] = 'H'),
      (e[(e.I = 73)] = 'I'),
      (e[(e.J = 74)] = 'J'),
      (e[(e.K = 75)] = 'K'),
      (e[(e.L = 76)] = 'L'),
      (e[(e.M = 77)] = 'M'),
      (e[(e.N = 78)] = 'N'),
      (e[(e.O = 79)] = 'O'),
      (e[(e.P = 80)] = 'P'),
      (e[(e.Q = 81)] = 'Q'),
      (e[(e.R = 82)] = 'R'),
      (e[(e.S = 83)] = 'S'),
      (e[(e.T = 84)] = 'T'),
      (e[(e.U = 85)] = 'U'),
      (e[(e.V = 86)] = 'V'),
      (e[(e.W = 87)] = 'W'),
      (e[(e.X = 88)] = 'X'),
      (e[(e.Y = 89)] = 'Y'),
      (e[(e.Z = 90)] = 'Z'),
      (e[(e.asterisk = 42)] = 'asterisk'),
      (e[(e.backslash = 92)] = 'backslash'),
      (e[(e.closeBrace = 125)] = 'closeBrace'),
      (e[(e.closeBracket = 93)] = 'closeBracket'),
      (e[(e.colon = 58)] = 'colon'),
      (e[(e.comma = 44)] = 'comma'),
      (e[(e.dot = 46)] = 'dot'),
      (e[(e.doubleQuote = 34)] = 'doubleQuote'),
      (e[(e.minus = 45)] = 'minus'),
      (e[(e.openBrace = 123)] = 'openBrace'),
      (e[(e.openBracket = 91)] = 'openBracket'),
      (e[(e.plus = 43)] = 'plus'),
      (e[(e.slash = 47)] = 'slash'),
      (e[(e.formFeed = 12)] = 'formFeed'),
      (e[(e.tab = 9)] = 'tab')
  })(u || (u = {})),
    (function (e) {
      e.DEFAULT = { allowTrailingComma: !1 }
    })(p || (p = {})),
    (function (e) {
      ;(e[(e.None = 0)] = 'None'),
        (e[(e.UnexpectedEndOfComment = 1)] = 'UnexpectedEndOfComment'),
        (e[(e.UnexpectedEndOfString = 2)] = 'UnexpectedEndOfString'),
        (e[(e.UnexpectedEndOfNumber = 3)] = 'UnexpectedEndOfNumber'),
        (e[(e.InvalidUnicode = 4)] = 'InvalidUnicode'),
        (e[(e.InvalidEscapeCharacter = 5)] = 'InvalidEscapeCharacter'),
        (e[(e.InvalidCharacter = 6)] = 'InvalidCharacter')
    })(h || (h = {})),
    (function (e) {
      ;(e[(e.OpenBraceToken = 1)] = 'OpenBraceToken'),
        (e[(e.CloseBraceToken = 2)] = 'CloseBraceToken'),
        (e[(e.OpenBracketToken = 3)] = 'OpenBracketToken'),
        (e[(e.CloseBracketToken = 4)] = 'CloseBracketToken'),
        (e[(e.CommaToken = 5)] = 'CommaToken'),
        (e[(e.ColonToken = 6)] = 'ColonToken'),
        (e[(e.NullKeyword = 7)] = 'NullKeyword'),
        (e[(e.TrueKeyword = 8)] = 'TrueKeyword'),
        (e[(e.FalseKeyword = 9)] = 'FalseKeyword'),
        (e[(e.StringLiteral = 10)] = 'StringLiteral'),
        (e[(e.NumericLiteral = 11)] = 'NumericLiteral'),
        (e[(e.LineCommentTrivia = 12)] = 'LineCommentTrivia'),
        (e[(e.BlockCommentTrivia = 13)] = 'BlockCommentTrivia'),
        (e[(e.LineBreakTrivia = 14)] = 'LineBreakTrivia'),
        (e[(e.Trivia = 15)] = 'Trivia'),
        (e[(e.Unknown = 16)] = 'Unknown'),
        (e[(e.EOF = 17)] = 'EOF')
    })(d || (d = {}))
  const _ = function (e, t = [], s = p.DEFAULT) {
    let n = null,
      a = []
    const r = []
    function o(e) {
      Array.isArray(a) ? a.push(e) : null !== n && (a[n] = e)
    }
    return (
      (function (e, t, s = p.DEFAULT) {
        const n = g(e, !1),
          a = []
        function r(e) {
          return e
            ? () =>
                e(
                  n.getTokenOffset(),
                  n.getTokenLength(),
                  n.getTokenStartLine(),
                  n.getTokenStartCharacter()
                )
            : () => !0
        }
        function o(e) {
          return e
            ? () =>
                e(
                  n.getTokenOffset(),
                  n.getTokenLength(),
                  n.getTokenStartLine(),
                  n.getTokenStartCharacter(),
                  () => a.slice()
                )
            : () => !0
        }
        function i(e) {
          return e
            ? t =>
                e(
                  t,
                  n.getTokenOffset(),
                  n.getTokenLength(),
                  n.getTokenStartLine(),
                  n.getTokenStartCharacter()
                )
            : () => !0
        }
        function c(e) {
          return e
            ? t =>
                e(
                  t,
                  n.getTokenOffset(),
                  n.getTokenLength(),
                  n.getTokenStartLine(),
                  n.getTokenStartCharacter(),
                  () => a.slice()
                )
            : () => !0
        }
        const l = o(t.onObjectBegin),
          u = c(t.onObjectProperty),
          h = r(t.onObjectEnd),
          d = o(t.onArrayBegin),
          m = r(t.onArrayEnd),
          f = c(t.onLiteralValue),
          y = i(t.onSeparator),
          b = r(t.onComment),
          _ = i(t.onError),
          N = s && s.disallowComments,
          k = s && s.allowTrailingComma
        function L() {
          for (;;) {
            const e = n.scan()
            switch (n.getTokenError()) {
              case 4:
                S(14)
                break
              case 5:
                S(15)
                break
              case 3:
                S(13)
                break
              case 1:
                N || S(11)
                break
              case 2:
                S(12)
                break
              case 6:
                S(16)
            }
            switch (e) {
              case 12:
              case 13:
                N ? S(10) : b()
                break
              case 16:
                S(1)
                break
              case 15:
              case 14:
                break
              default:
                return e
            }
          }
        }
        function S(e, t = [], s = []) {
          if ((_(e), t.length + s.length > 0)) {
            let e = n.getToken()
            for (; 17 !== e; ) {
              if (-1 !== t.indexOf(e)) {
                L()
                break
              }
              if (-1 !== s.indexOf(e)) break
              e = L()
            }
          }
        }
        function v(e) {
          const t = n.getTokenValue()
          return e ? f(t) : (u(t), a.push(t)), L(), !0
        }
        function w() {
          switch (n.getToken()) {
            case 11:
              const e = n.getTokenValue()
              let t = Number(e)
              isNaN(t) && (S(2), (t = 0)), f(t)
              break
            case 7:
              f(null)
              break
            case 8:
              f(!0)
              break
            case 9:
              f(!1)
              break
            default:
              return !1
          }
          return L(), !0
        }
        function C() {
          return 10 !== n.getToken()
            ? (S(3, [], [2, 5]), !1)
            : (v(!1),
              6 === n.getToken() ? (y(':'), L(), A() || S(4, [], [2, 5])) : S(5, [], [2, 5]),
              a.pop(),
              !0)
        }
        function j() {
          l(), L()
          let e = !1
          for (; 2 !== n.getToken() && 17 !== n.getToken(); ) {
            if (5 === n.getToken()) {
              if ((e || S(4, [], []), y(','), L(), 2 === n.getToken() && k)) break
            } else e && S(6, [], [])
            C() || S(4, [], [2, 5]), (e = !0)
          }
          return h(), 2 !== n.getToken() ? S(7, [2], []) : L(), !0
        }
        function P() {
          d(), L()
          let e = !0,
            t = !1
          for (; 4 !== n.getToken() && 17 !== n.getToken(); ) {
            if (5 === n.getToken()) {
              if ((t || S(4, [], []), y(','), L(), 4 === n.getToken() && k)) break
            } else t && S(6, [], [])
            e ? (a.push(0), (e = !1)) : a[a.length - 1]++, A() || S(4, [], [4, 5]), (t = !0)
          }
          return m(), e || a.pop(), 4 !== n.getToken() ? S(8, [4], []) : L(), !0
        }
        function A() {
          switch (n.getToken()) {
            case 3:
              return P()
            case 1:
              return j()
            case 10:
              return v(!0)
            default:
              return w()
          }
        }
        if ((L(), 17 === n.getToken())) return !!s.allowEmptyContent || (S(4, [], []), !1)
        if (!A()) return S(4, [], []), !1
        17 !== n.getToken() && S(9, [], [])
      })(
        e,
        {
          onObjectBegin: () => {
            const e = {}
            o(e), r.push(a), (a = e), (n = null)
          },
          onObjectProperty: e => {
            n = e
          },
          onObjectEnd: () => {
            a = r.pop()
          },
          onArrayBegin: () => {
            const e = []
            o(e), r.push(a), (a = e), (n = null)
          },
          onArrayEnd: () => {
            a = r.pop()
          },
          onLiteralValue: o,
          onError: (e, s, n) => {
            t.push({ error: e, offset: s, length: n })
          }
        },
        s
      ),
      a[0]
    )
  }
  var N
  !(function (e) {
    ;(e[(e.InvalidSymbol = 1)] = 'InvalidSymbol'),
      (e[(e.InvalidNumberFormat = 2)] = 'InvalidNumberFormat'),
      (e[(e.PropertyNameExpected = 3)] = 'PropertyNameExpected'),
      (e[(e.ValueExpected = 4)] = 'ValueExpected'),
      (e[(e.ColonExpected = 5)] = 'ColonExpected'),
      (e[(e.CommaExpected = 6)] = 'CommaExpected'),
      (e[(e.CloseBraceExpected = 7)] = 'CloseBraceExpected'),
      (e[(e.CloseBracketExpected = 8)] = 'CloseBracketExpected'),
      (e[(e.EndOfFileExpected = 9)] = 'EndOfFileExpected'),
      (e[(e.InvalidCommentToken = 10)] = 'InvalidCommentToken'),
      (e[(e.UnexpectedEndOfComment = 11)] = 'UnexpectedEndOfComment'),
      (e[(e.UnexpectedEndOfString = 12)] = 'UnexpectedEndOfString'),
      (e[(e.UnexpectedEndOfNumber = 13)] = 'UnexpectedEndOfNumber'),
      (e[(e.InvalidUnicode = 14)] = 'InvalidUnicode'),
      (e[(e.InvalidEscapeCharacter = 15)] = 'InvalidEscapeCharacter'),
      (e[(e.InvalidCharacter = 16)] = 'InvalidCharacter')
  })(N || (N = {}))
  const k = 'undefined' != typeof self && void 0 !== self.WorkerGlobalScope,
    L =
      'process' in globalThis &&
      'undefined' != typeof process &&
      void 0 !== process.release &&
      'node' === process.release.name,
    S = k || !L
  let v = 'https://unpkg.com/shiki@0.14.3/',
    w = ''
  const C = 'dist/'
  function j(e) {
    w = e
  }
  let P = null
  function A(e) {
    if (S) return `${v}${e}`
    {
      const t = require('path')
      return t.isAbsolute(e) ? e : t.resolve(__dirname, '..', e)
    }
  }
  async function x(e) {
    const t = [],
      s = await (async function (e) {
        const t = A(e)
        if (S) return await fetch(t).then(e => e.text())
        {
          const e = require('fs')
          return await e.promises.readFile(t, 'utf-8')
        }
      })(e)
    let n
    try {
      n = JSON.parse(s)
    } catch (e) {
      if (((n = _(s, t, { allowTrailingComma: !0 })), t.length)) throw t[0]
    }
    return n
  }
  async function T(e) {
    const t = R(await x(e))
    if (t.include) {
      const s = await T(i(...o(e), t.include))
      s.settings && (t.settings = s.settings.concat(t.settings)),
        s.bg && !t.bg && (t.bg = s.bg),
        s.colors && (t.colors = { ...s.colors, ...t.colors }),
        delete t.include
    }
    return t
  }
  function R(e) {
    const t = e.type || 'dark',
      s = { name: e.name, type: t, ...e, ...O(e) }
    var n
    return (
      e.include && (s.include = e.include),
      e.tokenColors && ((s.settings = e.tokenColors), delete s.tokenColors),
      (n = s).settings || (n.settings = []),
      (n.settings[0] && n.settings[0].settings && !n.settings[0].scope) ||
        n.settings.unshift({ settings: { foreground: n.fg, background: n.bg } }),
      s
    )
  }
  const I = { light: '#333333', dark: '#bbbbbb' },
    E = { light: '#fffffe', dark: '#1e1e1e' }
  function O(e) {
    let t,
      s,
      n = e.settings ? e.settings : e.tokenColors
    const a = n ? n.find(e => !e.name && !e.scope) : void 0
    return (
      a?.settings?.foreground && (t = a.settings.foreground),
      a?.settings?.background && (s = a.settings.background),
      !t && e?.colors?.['editor.foreground'] && (t = e.colors['editor.foreground']),
      !s && e?.colors?.['editor.background'] && (s = e.colors['editor.background']),
      t || (t = 'light' === e.type ? I.light : I.dark),
      s || (s = 'light' === e.type ? E.light : E.dark),
      { fg: t, bg: s }
    )
  }
  class M {
    constructor(e, t) {
      ;(this.languagesPath = 'languages/'),
        (this.languageMap = {}),
        (this.scopeToLangMap = {}),
        (this._onigLibPromise = e),
        (this._onigLibName = t)
    }
    get onigLib() {
      return this._onigLibPromise
    }
    getOnigLibName() {
      return this._onigLibName
    }
    getLangRegistration(e) {
      return this.languageMap[e]
    }
    async loadGrammar(e) {
      const s = this.scopeToLangMap[e]
      if (!s) return null
      if (s.grammar) return s.grammar
      const n = await (async function (e) {
        return await x(e)
      })(t.includes(s) ? `${this.languagesPath}${s.path}` : s.path)
      return (s.grammar = n), n
    }
    addLanguage(e) {
      ;(this.languageMap[e.id] = e),
        e.aliases &&
          e.aliases.forEach(t => {
            this.languageMap[t] = e
          }),
        (this.scopeToLangMap[e.scopeName] = e)
    }
  }
  var B = { exports: {} }
  !(function (e, t) {
    var s, n
    e.exports =
      ((s = {
        350: (e, t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.UseOnigurumaFindOptions = t.DebugFlags = void 0),
            (t.DebugFlags = {
              InDebugMode: 'undefined' != typeof process && !!process.env.VSCODE_TEXTMATE_DEBUG
            }),
            (t.UseOnigurumaFindOptions = !1)
        },
        36: (e, t) => {
          var s
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.toOptionalTokenType = t.EncodedTokenAttributes = void 0),
            ((s = t.EncodedTokenAttributes || (t.EncodedTokenAttributes = {})).toBinaryStr =
              function (e) {
                let t = e.toString(2)
                for (; t.length < 32; ) t = '0' + t
                return t
              }),
            (s.print = function (e) {
              const t = s.getLanguageId(e),
                n = s.getTokenType(e),
                a = s.getFontStyle(e),
                r = s.getForeground(e),
                o = s.getBackground(e)
              console.log({
                languageId: t,
                tokenType: n,
                fontStyle: a,
                foreground: r,
                background: o
              })
            }),
            (s.getLanguageId = function (e) {
              return (255 & e) >>> 0
            }),
            (s.getTokenType = function (e) {
              return (768 & e) >>> 8
            }),
            (s.containsBalancedBrackets = function (e) {
              return 0 != (1024 & e)
            }),
            (s.getFontStyle = function (e) {
              return (30720 & e) >>> 11
            }),
            (s.getForeground = function (e) {
              return (16744448 & e) >>> 15
            }),
            (s.getBackground = function (e) {
              return (4278190080 & e) >>> 24
            }),
            (s.set = function (e, t, n, a, r, o, i) {
              let c = s.getLanguageId(e),
                l = s.getTokenType(e),
                u = s.containsBalancedBrackets(e) ? 1 : 0,
                p = s.getFontStyle(e),
                h = s.getForeground(e),
                d = s.getBackground(e)
              return (
                0 !== t && (c = t),
                8 !== n && (l = n),
                null !== a && (u = a ? 1 : 0),
                -1 !== r && (p = r),
                0 !== o && (h = o),
                0 !== i && (d = i),
                ((c << 0) | (l << 8) | (u << 10) | (p << 11) | (h << 15) | (d << 24)) >>> 0
              )
            }),
            (t.toOptionalTokenType = function (e) {
              return e
            })
        },
        996: (e, t, s) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.BasicScopeAttributesProvider = t.BasicScopeAttributes = void 0)
          const n = s(878)
          class a {
            constructor(e, t) {
              ;(this.languageId = e), (this.tokenType = t)
            }
          }
          t.BasicScopeAttributes = a
          class r {
            constructor(e, t) {
              ;(this._getBasicScopeAttributes = new n.CachedFn(e => {
                const t = this._scopeToLanguage(e),
                  s = this._toStandardTokenType(e)
                return new a(t, s)
              })),
                (this._defaultAttributes = new a(e, 8)),
                (this._embeddedLanguagesMatcher = new o(Object.entries(t || {})))
            }
            getDefaultAttributes() {
              return this._defaultAttributes
            }
            getBasicScopeAttributes(e) {
              return null === e ? r._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(e)
            }
            _scopeToLanguage(e) {
              return this._embeddedLanguagesMatcher.match(e) || 0
            }
            _toStandardTokenType(e) {
              const t = e.match(r.STANDARD_TOKEN_TYPE_REGEXP)
              if (!t) return 8
              switch (t[1]) {
                case 'comment':
                  return 1
                case 'string':
                  return 2
                case 'regex':
                  return 3
                case 'meta.embedded':
                  return 0
              }
              throw new Error('Unexpected match for standard token type!')
            }
          }
          ;(t.BasicScopeAttributesProvider = r),
            (r._NULL_SCOPE_METADATA = new a(0, 0)),
            (r.STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/)
          class o {
            constructor(e) {
              if (0 === e.length) (this.values = null), (this.scopesRegExp = null)
              else {
                this.values = new Map(e)
                const t = e.map(([e, t]) => n.escapeRegExpCharacters(e))
                t.sort(),
                  t.reverse(),
                  (this.scopesRegExp = new RegExp(`^((${t.join(')|(')}))($|\\.)`, ''))
              }
            }
            match(e) {
              if (!this.scopesRegExp) return
              const t = e.match(this.scopesRegExp)
              return t ? this.values.get(t[1]) : void 0
            }
          }
        },
        947: (e, t, s) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.LineTokens =
              t.BalancedBracketSelectors =
              t.StateStack =
              t.AttributedScopeStack =
              t.Grammar =
              t.createGrammar =
                void 0)
          const n = s(350),
            a = s(36),
            r = s(736),
            o = s(44),
            i = s(792),
            c = s(583),
            l = s(878),
            u = s(996),
            p = s(47)
          function h(e, t, s, n, a) {
            const o = r.createMatchers(t, d),
              c = i.RuleFactory.getCompiledRuleId(s, n, a.repository)
            for (const s of o)
              e.push({
                debugSelector: t,
                matcher: s.matcher,
                ruleId: c,
                grammar: a,
                priority: s.priority
              })
          }
          function d(e, t) {
            if (t.length < e.length) return !1
            let s = 0
            return e.every(e => {
              for (let n = s; n < t.length; n++) if (m(t[n], e)) return (s = n + 1), !0
              return !1
            })
          }
          function m(e, t) {
            if (!e) return !1
            if (e === t) return !0
            const s = t.length
            return e.length > s && e.substr(0, s) === t && '.' === e[s]
          }
          t.createGrammar = function (e, t, s, n, a, r, o, i) {
            return new g(e, t, s, n, a, r, o, i)
          }
          class g {
            constructor(e, t, s, n, a, o, i, c) {
              if (
                ((this._rootScopeName = e),
                (this.balancedBracketSelectors = o),
                (this._onigLib = c),
                (this._basicScopeAttributesProvider = new u.BasicScopeAttributesProvider(s, n)),
                (this._rootId = -1),
                (this._lastRuleId = 0),
                (this._ruleId2desc = [null]),
                (this._includedGrammars = {}),
                (this._grammarRepository = i),
                (this._grammar = f(t, null)),
                (this._injections = null),
                (this._tokenTypeMatchers = []),
                a)
              )
                for (const e of Object.keys(a)) {
                  const t = r.createMatchers(e, d)
                  for (const s of t)
                    this._tokenTypeMatchers.push({ matcher: s.matcher, type: a[e] })
                }
            }
            get themeProvider() {
              return this._grammarRepository
            }
            dispose() {
              for (const e of this._ruleId2desc) e && e.dispose()
            }
            createOnigScanner(e) {
              return this._onigLib.createOnigScanner(e)
            }
            createOnigString(e) {
              return this._onigLib.createOnigString(e)
            }
            getMetadataForScope(e) {
              return this._basicScopeAttributesProvider.getBasicScopeAttributes(e)
            }
            _collectInjections() {
              const e = [],
                t = this._rootScopeName,
                s = (e => (e === this._rootScopeName ? this._grammar : this.getExternalGrammar(e)))(
                  t
                )
              if (s) {
                const n = s.injections
                if (n) for (let t in n) h(e, t, n[t], this, s)
                const a = this._grammarRepository.injections(t)
                a &&
                  a.forEach(t => {
                    const s = this.getExternalGrammar(t)
                    if (s) {
                      const t = s.injectionSelector
                      t && h(e, t, s, this, s)
                    }
                  })
              }
              return e.sort((e, t) => e.priority - t.priority), e
            }
            getInjections() {
              if (
                null === this._injections &&
                ((this._injections = this._collectInjections()),
                n.DebugFlags.InDebugMode && this._injections.length > 0)
              ) {
                console.log(`Grammar ${this._rootScopeName} contains the following injections:`)
                for (const e of this._injections) console.log(`  - ${e.debugSelector}`)
              }
              return this._injections
            }
            registerRule(e) {
              const t = ++this._lastRuleId,
                s = e(i.ruleIdFromNumber(t))
              return (this._ruleId2desc[t] = s), s
            }
            getRule(e) {
              return this._ruleId2desc[i.ruleIdToNumber(e)]
            }
            getExternalGrammar(e, t) {
              if (this._includedGrammars[e]) return this._includedGrammars[e]
              if (this._grammarRepository) {
                const s = this._grammarRepository.lookup(e)
                if (s)
                  return (this._includedGrammars[e] = f(s, t && t.$base)), this._includedGrammars[e]
              }
            }
            tokenizeLine(e, t, s = 0) {
              const n = this._tokenize(e, t, !1, s)
              return {
                tokens: n.lineTokens.getResult(n.ruleStack, n.lineLength),
                ruleStack: n.ruleStack,
                stoppedEarly: n.stoppedEarly
              }
            }
            tokenizeLine2(e, t, s = 0) {
              const n = this._tokenize(e, t, !0, s)
              return {
                tokens: n.lineTokens.getBinaryResult(n.ruleStack, n.lineLength),
                ruleStack: n.ruleStack,
                stoppedEarly: n.stoppedEarly
              }
            }
            _tokenize(e, t, s, n) {
              let r
              if (
                (-1 === this._rootId &&
                  (this._rootId = i.RuleFactory.getCompiledRuleId(
                    this._grammar.repository.$self,
                    this,
                    this._grammar.repository
                  )),
                t && t !== b.NULL)
              )
                (r = !1), t.reset()
              else {
                r = !0
                const e = this._basicScopeAttributesProvider.getDefaultAttributes(),
                  s = this.themeProvider.getDefaults(),
                  n = a.EncodedTokenAttributes.set(
                    0,
                    e.languageId,
                    e.tokenType,
                    null,
                    s.fontStyle,
                    s.foregroundId,
                    s.backgroundId
                  ),
                  o = this.getRule(this._rootId).getName(null, null)
                let i
                ;(i = o ? y.createRootAndLookUpScopeName(o, n, this) : y.createRoot('unknown', n)),
                  (t = new b(null, this._rootId, -1, -1, !1, null, i, i))
              }
              e += '\n'
              const c = this.createOnigString(e),
                l = c.content.length,
                u = new _(s, e, this._tokenTypeMatchers, this.balancedBracketSelectors),
                h = p._tokenizeString(this, c, r, 0, t, u, !0, n)
              return (
                o.disposeOnigString(c),
                { lineLength: l, lineTokens: u, ruleStack: h.stack, stoppedEarly: h.stoppedEarly }
              )
            }
          }
          function f(e, t) {
            return (
              ((e = l.clone(e)).repository = e.repository || {}),
              (e.repository.$self = {
                $vscodeTextmateLocation: e.$vscodeTextmateLocation,
                patterns: e.patterns,
                name: e.scopeName
              }),
              (e.repository.$base = t || e.repository.$self),
              e
            )
          }
          t.Grammar = g
          class y {
            constructor(e, t, s) {
              ;(this.parent = e), (this.scopePath = t), (this.tokenAttributes = s)
            }
            static createRoot(e, t) {
              return new y(null, new c.ScopeStack(null, e), t)
            }
            static createRootAndLookUpScopeName(e, t, s) {
              const n = s.getMetadataForScope(e),
                a = new c.ScopeStack(null, e),
                r = s.themeProvider.themeMatch(a),
                o = y.mergeAttributes(t, n, r)
              return new y(null, a, o)
            }
            get scopeName() {
              return this.scopePath.scopeName
            }
            equals(e) {
              return y._equals(this, e)
            }
            static _equals(e, t) {
              for (;;) {
                if (e === t) return !0
                if (!e && !t) return !0
                if (!e || !t) return !1
                if (e.scopeName !== t.scopeName || e.tokenAttributes !== t.tokenAttributes)
                  return !1
                ;(e = e.parent), (t = t.parent)
              }
            }
            static mergeAttributes(e, t, s) {
              let n = -1,
                r = 0,
                o = 0
              return (
                null !== s && ((n = s.fontStyle), (r = s.foregroundId), (o = s.backgroundId)),
                a.EncodedTokenAttributes.set(e, t.languageId, t.tokenType, null, n, r, o)
              )
            }
            pushAttributed(e, t) {
              if (null === e) return this
              if (-1 === e.indexOf(' ')) return y._pushAttributed(this, e, t)
              const s = e.split(/ /g)
              let n = this
              for (const e of s) n = y._pushAttributed(n, e, t)
              return n
            }
            static _pushAttributed(e, t, s) {
              const n = s.getMetadataForScope(t),
                a = e.scopePath.push(t),
                r = s.themeProvider.themeMatch(a),
                o = y.mergeAttributes(e.tokenAttributes, n, r)
              return new y(e, a, o)
            }
            getScopeNames() {
              return this.scopePath.getSegments()
            }
          }
          t.AttributedScopeStack = y
          class b {
            constructor(e, t, s, n, a, r, o, i) {
              ;(this.parent = e),
                (this.ruleId = t),
                (this.beginRuleCapturedEOL = a),
                (this.endRule = r),
                (this.nameScopesList = o),
                (this.contentNameScopesList = i),
                (this._stackElementBrand = void 0),
                (this.depth = this.parent ? this.parent.depth + 1 : 1),
                (this._enterPos = s),
                (this._anchorPos = n)
            }
            equals(e) {
              return null !== e && b._equals(this, e)
            }
            static _equals(e, t) {
              return (
                e === t ||
                (!!this._structuralEquals(e, t) &&
                  e.contentNameScopesList.equals(t.contentNameScopesList))
              )
            }
            static _structuralEquals(e, t) {
              for (;;) {
                if (e === t) return !0
                if (!e && !t) return !0
                if (!e || !t) return !1
                if (e.depth !== t.depth || e.ruleId !== t.ruleId || e.endRule !== t.endRule)
                  return !1
                ;(e = e.parent), (t = t.parent)
              }
            }
            clone() {
              return this
            }
            static _reset(e) {
              for (; e; ) (e._enterPos = -1), (e._anchorPos = -1), (e = e.parent)
            }
            reset() {
              b._reset(this)
            }
            pop() {
              return this.parent
            }
            safePop() {
              return this.parent ? this.parent : this
            }
            push(e, t, s, n, a, r, o) {
              return new b(this, e, t, s, n, a, r, o)
            }
            getEnterPos() {
              return this._enterPos
            }
            getAnchorPos() {
              return this._anchorPos
            }
            getRule(e) {
              return e.getRule(this.ruleId)
            }
            toString() {
              const e = []
              return this._writeString(e, 0), '[' + e.join(',') + ']'
            }
            _writeString(e, t) {
              return (
                this.parent && (t = this.parent._writeString(e, t)),
                (e[
                  t++
                ] = `(${this.ruleId}, TODO-${this.nameScopesList}, TODO-${this.contentNameScopesList})`),
                t
              )
            }
            withContentNameScopesList(e) {
              return this.contentNameScopesList === e
                ? this
                : this.parent.push(
                    this.ruleId,
                    this._enterPos,
                    this._anchorPos,
                    this.beginRuleCapturedEOL,
                    this.endRule,
                    this.nameScopesList,
                    e
                  )
            }
            withEndRule(e) {
              return this.endRule === e
                ? this
                : new b(
                    this.parent,
                    this.ruleId,
                    this._enterPos,
                    this._anchorPos,
                    this.beginRuleCapturedEOL,
                    e,
                    this.nameScopesList,
                    this.contentNameScopesList
                  )
            }
            hasSameRuleAs(e) {
              let t = this
              for (; t && t._enterPos === e._enterPos; ) {
                if (t.ruleId === e.ruleId) return !0
                t = t.parent
              }
              return !1
            }
          }
          ;(t.StateStack = b),
            (b.NULL = new b(null, 0, 0, 0, !1, null, null, null)),
            (t.BalancedBracketSelectors = class {
              constructor(e, t) {
                ;(this.allowAny = !1),
                  (this.balancedBracketScopes = e.flatMap(e =>
                    '*' === e
                      ? ((this.allowAny = !0), [])
                      : r.createMatchers(e, d).map(e => e.matcher)
                  )),
                  (this.unbalancedBracketScopes = t.flatMap(e =>
                    r.createMatchers(e, d).map(e => e.matcher)
                  ))
              }
              get matchesAlways() {
                return this.allowAny && 0 === this.unbalancedBracketScopes.length
              }
              get matchesNever() {
                return 0 === this.balancedBracketScopes.length && !this.allowAny
              }
              match(e) {
                for (const t of this.unbalancedBracketScopes) if (t(e)) return !1
                for (const t of this.balancedBracketScopes) if (t(e)) return !0
                return this.allowAny
              }
            })
          class _ {
            constructor(e, t, s, a) {
              ;(this.balancedBracketSelectors = a),
                (this._emitBinaryTokens = e),
                (this._tokenTypeOverrides = s),
                n.DebugFlags.InDebugMode ? (this._lineText = t) : (this._lineText = null),
                (this._tokens = []),
                (this._binaryTokens = []),
                (this._lastTokenEndIndex = 0)
            }
            produce(e, t) {
              this.produceFromScopes(e.contentNameScopesList, t)
            }
            produceFromScopes(e, t) {
              if (this._lastTokenEndIndex >= t) return
              if (this._emitBinaryTokens) {
                let s = e.tokenAttributes,
                  r = !1
                if (
                  (this.balancedBracketSelectors?.matchesAlways && (r = !0),
                  this._tokenTypeOverrides.length > 0 ||
                    (this.balancedBracketSelectors &&
                      !this.balancedBracketSelectors.matchesAlways &&
                      !this.balancedBracketSelectors.matchesNever))
                ) {
                  const t = e.getScopeNames()
                  for (const e of this._tokenTypeOverrides)
                    e.matcher(t) &&
                      (s = a.EncodedTokenAttributes.set(
                        s,
                        0,
                        a.toOptionalTokenType(e.type),
                        null,
                        -1,
                        0,
                        0
                      ))
                  this.balancedBracketSelectors && (r = this.balancedBracketSelectors.match(t))
                }
                if (
                  (r && (s = a.EncodedTokenAttributes.set(s, 0, 8, r, -1, 0, 0)),
                  this._binaryTokens.length > 0 &&
                    this._binaryTokens[this._binaryTokens.length - 1] === s)
                )
                  return void (this._lastTokenEndIndex = t)
                if (n.DebugFlags.InDebugMode) {
                  const s = e.getScopeNames()
                  console.log(
                    '  token: |' +
                      this._lineText.substring(this._lastTokenEndIndex, t).replace(/\n$/, '\\n') +
                      '|'
                  )
                  for (let e = 0; e < s.length; e++) console.log('      * ' + s[e])
                }
                return (
                  this._binaryTokens.push(this._lastTokenEndIndex),
                  this._binaryTokens.push(s),
                  void (this._lastTokenEndIndex = t)
                )
              }
              const s = e.getScopeNames()
              if (n.DebugFlags.InDebugMode) {
                console.log(
                  '  token: |' +
                    this._lineText.substring(this._lastTokenEndIndex, t).replace(/\n$/, '\\n') +
                    '|'
                )
                for (let e = 0; e < s.length; e++) console.log('      * ' + s[e])
              }
              this._tokens.push({ startIndex: this._lastTokenEndIndex, endIndex: t, scopes: s }),
                (this._lastTokenEndIndex = t)
            }
            getResult(e, t) {
              return (
                this._tokens.length > 0 &&
                  this._tokens[this._tokens.length - 1].startIndex === t - 1 &&
                  this._tokens.pop(),
                0 === this._tokens.length &&
                  ((this._lastTokenEndIndex = -1),
                  this.produce(e, t),
                  (this._tokens[this._tokens.length - 1].startIndex = 0)),
                this._tokens
              )
            }
            getBinaryResult(e, t) {
              this._binaryTokens.length > 0 &&
                this._binaryTokens[this._binaryTokens.length - 2] === t - 1 &&
                (this._binaryTokens.pop(), this._binaryTokens.pop()),
                0 === this._binaryTokens.length &&
                  ((this._lastTokenEndIndex = -1),
                  this.produce(e, t),
                  (this._binaryTokens[this._binaryTokens.length - 2] = 0))
              const s = new Uint32Array(this._binaryTokens.length)
              for (let e = 0, t = this._binaryTokens.length; e < t; e++)
                s[e] = this._binaryTokens[e]
              return s
            }
          }
          t.LineTokens = _
        },
        965: (e, t, s) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.parseInclude =
              t.TopLevelRepositoryReference =
              t.TopLevelReference =
              t.RelativeReference =
              t.SelfReference =
              t.BaseReference =
              t.ScopeDependencyProcessor =
              t.ExternalReferenceCollector =
              t.TopLevelRepositoryRuleReference =
              t.TopLevelRuleReference =
                void 0)
          const n = s(878)
          class a {
            constructor(e) {
              this.scopeName = e
            }
            toKey() {
              return this.scopeName
            }
          }
          t.TopLevelRuleReference = a
          class r {
            constructor(e, t) {
              ;(this.scopeName = e), (this.ruleName = t)
            }
            toKey() {
              return `${this.scopeName}#${this.ruleName}`
            }
          }
          t.TopLevelRepositoryRuleReference = r
          class o {
            constructor() {
              ;(this._references = []),
                (this._seenReferenceKeys = new Set()),
                (this.visitedRule = new Set())
            }
            get references() {
              return this._references
            }
            add(e) {
              const t = e.toKey()
              this._seenReferenceKeys.has(t) ||
                (this._seenReferenceKeys.add(t), this._references.push(e))
            }
          }
          function i(e, t, s, n) {
            const r = s.lookup(e.scopeName)
            if (!r) {
              if (e.scopeName === t) throw new Error(`No grammar provided for <${t}>`)
              return
            }
            const o = s.lookup(t)
            e instanceof a
              ? l({ baseGrammar: o, selfGrammar: r }, n)
              : c(e.ruleName, { baseGrammar: o, selfGrammar: r, repository: r.repository }, n)
            const i = s.injections(e.scopeName)
            if (i) for (const e of i) n.add(new a(e))
          }
          function c(e, t, s) {
            t.repository && t.repository[e] && u([t.repository[e]], t, s)
          }
          function l(e, t) {
            e.selfGrammar.patterns &&
              Array.isArray(e.selfGrammar.patterns) &&
              u(e.selfGrammar.patterns, { ...e, repository: e.selfGrammar.repository }, t),
              e.selfGrammar.injections &&
                u(
                  Object.values(e.selfGrammar.injections),
                  { ...e, repository: e.selfGrammar.repository },
                  t
                )
          }
          function u(e, t, s) {
            for (const o of e) {
              if (s.visitedRule.has(o)) continue
              s.visitedRule.add(o)
              const e = o.repository ? n.mergeObjects({}, t.repository, o.repository) : t.repository
              Array.isArray(o.patterns) && u(o.patterns, { ...t, repository: e }, s)
              const i = o.include
              if (!i) continue
              const p = f(i)
              switch (p.kind) {
                case 0:
                  l({ ...t, selfGrammar: t.baseGrammar }, s)
                  break
                case 1:
                  l(t, s)
                  break
                case 2:
                  c(p.ruleName, { ...t, repository: e }, s)
                  break
                case 3:
                case 4:
                  const n =
                    p.scopeName === t.selfGrammar.scopeName
                      ? t.selfGrammar
                      : p.scopeName === t.baseGrammar.scopeName
                      ? t.baseGrammar
                      : void 0
                  if (n) {
                    const a = { baseGrammar: t.baseGrammar, selfGrammar: n, repository: e }
                    4 === p.kind ? c(p.ruleName, a, s) : l(a, s)
                  } else
                    4 === p.kind ? s.add(new r(p.scopeName, p.ruleName)) : s.add(new a(p.scopeName))
              }
            }
          }
          ;(t.ExternalReferenceCollector = o),
            (t.ScopeDependencyProcessor = class {
              constructor(e, t) {
                ;(this.repo = e),
                  (this.initialScopeName = t),
                  (this.seenFullScopeRequests = new Set()),
                  (this.seenPartialScopeRequests = new Set()),
                  this.seenFullScopeRequests.add(this.initialScopeName),
                  (this.Q = [new a(this.initialScopeName)])
              }
              processQueue() {
                const e = this.Q
                this.Q = []
                const t = new o()
                for (const s of e) i(s, this.initialScopeName, this.repo, t)
                for (const e of t.references)
                  if (e instanceof a) {
                    if (this.seenFullScopeRequests.has(e.scopeName)) continue
                    this.seenFullScopeRequests.add(e.scopeName), this.Q.push(e)
                  } else {
                    if (this.seenFullScopeRequests.has(e.scopeName)) continue
                    if (this.seenPartialScopeRequests.has(e.toKey())) continue
                    this.seenPartialScopeRequests.add(e.toKey()), this.Q.push(e)
                  }
              }
            })
          class p {
            constructor() {
              this.kind = 0
            }
          }
          t.BaseReference = p
          class h {
            constructor() {
              this.kind = 1
            }
          }
          t.SelfReference = h
          class d {
            constructor(e) {
              ;(this.ruleName = e), (this.kind = 2)
            }
          }
          t.RelativeReference = d
          class m {
            constructor(e) {
              ;(this.scopeName = e), (this.kind = 3)
            }
          }
          t.TopLevelReference = m
          class g {
            constructor(e, t) {
              ;(this.scopeName = e), (this.ruleName = t), (this.kind = 4)
            }
          }
          function f(e) {
            if ('$base' === e) return new p()
            if ('$self' === e) return new h()
            const t = e.indexOf('#')
            if (-1 === t) return new m(e)
            if (0 === t) return new d(e.substring(1))
            {
              const s = e.substring(0, t),
                n = e.substring(t + 1)
              return new g(s, n)
            }
          }
          ;(t.TopLevelRepositoryReference = g), (t.parseInclude = f)
        },
        391: function (e, t, s) {
          var n =
              (this && this.__createBinding) ||
              (Object.create
                ? function (e, t, s, n) {
                    void 0 === n && (n = s),
                      Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                          return t[s]
                        }
                      })
                  }
                : function (e, t, s, n) {
                    void 0 === n && (n = s), (e[n] = t[s])
                  }),
            a =
              (this && this.__exportStar) ||
              function (e, t) {
                for (var s in e)
                  'default' === s || Object.prototype.hasOwnProperty.call(t, s) || n(t, e, s)
              }
          Object.defineProperty(t, '__esModule', { value: !0 }), a(s(947), t)
        },
        47: (e, t, s) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.LocalStackElement = t._tokenizeString = void 0)
          const n = s(350),
            a = s(44),
            r = s(792),
            o = s(878)
          class i {
            constructor(e, t) {
              ;(this.stack = e), (this.stoppedEarly = t)
            }
          }
          function c(e, t, s, a, c, p, d, m) {
            const g = t.content.length
            let f = !1,
              y = -1
            if (d) {
              const o = (function (e, t, s, a, o, i) {
                let c = o.beginRuleCapturedEOL ? 0 : -1
                const l = []
                for (let t = o; t; t = t.pop()) {
                  const s = t.getRule(e)
                  s instanceof r.BeginWhileRule && l.push({ rule: s, stack: t })
                }
                for (let p = l.pop(); p; p = l.pop()) {
                  const { ruleScanner: l, findOptions: d } = u(
                      p.rule,
                      e,
                      p.stack.endRule,
                      s,
                      a === c
                    ),
                    m = l.findNextMatchSync(t, a, d)
                  if (
                    (n.DebugFlags.InDebugMode &&
                      (console.log('  scanning for while rule'), console.log(l.toString())),
                    !m)
                  ) {
                    n.DebugFlags.InDebugMode &&
                      console.log(
                        '  popping ' + p.rule.debugName + ' - ' + p.rule.debugWhileRegExp
                      ),
                      (o = p.stack.pop())
                    break
                  }
                  if (m.ruleId !== r.whileRuleId) {
                    o = p.stack.pop()
                    break
                  }
                  m.captureIndices &&
                    m.captureIndices.length &&
                    (i.produce(p.stack, m.captureIndices[0].start),
                    h(e, t, s, p.stack, i, p.rule.whileCaptures, m.captureIndices),
                    i.produce(p.stack, m.captureIndices[0].end),
                    (c = m.captureIndices[0].end),
                    m.captureIndices[0].end > a && ((a = m.captureIndices[0].end), (s = !1)))
                }
                return { stack: o, linePos: a, anchorPosition: c, isFirstLine: s }
              })(e, t, s, a, c, p)
              ;(c = o.stack), (a = o.linePos), (s = o.isFirstLine), (y = o.anchorPosition)
            }
            const b = Date.now()
            for (; !f; ) {
              if (0 !== m && Date.now() - b > m) return new i(c, !0)
              _()
            }
            return new i(c, !1)
            function _() {
              n.DebugFlags.InDebugMode &&
                (console.log(''),
                console.log(`@@scanNext ${a}: |${t.content.substr(a).replace(/\n$/, '\\n')}|`))
              const i = (function (e, t, s, a, r, i) {
                const c = (function (e, t, s, a, r, i) {
                    const c = r.getRule(e),
                      { ruleScanner: u, findOptions: p } = l(c, e, r.endRule, s, a === i)
                    let h = 0
                    n.DebugFlags.InDebugMode && (h = o.performanceNow())
                    const d = u.findNextMatchSync(t, a, p)
                    if (n.DebugFlags.InDebugMode) {
                      const e = o.performanceNow() - h
                      e > 5 &&
                        console.warn(
                          `Rule ${c.debugName} (${c.id}) matching took ${e} against '${t}'`
                        ),
                        console.log(`  scanning for (linePos: ${a}, anchorPosition: ${i})`),
                        console.log(u.toString()),
                        d &&
                          console.log(
                            `matched rule id: ${d.ruleId} from ${d.captureIndices[0].start} to ${d.captureIndices[0].end}`
                          )
                    }
                    return d ? { captureIndices: d.captureIndices, matchedRuleId: d.ruleId } : null
                  })(e, t, s, a, r, i),
                  u = e.getInjections()
                if (0 === u.length) return c
                const p = (function (e, t, s, a, r, o, i) {
                  let c,
                    u = Number.MAX_VALUE,
                    p = null,
                    h = 0
                  const d = o.contentNameScopesList.getScopeNames()
                  for (let o = 0, m = e.length; o < m; o++) {
                    const m = e[o]
                    if (!m.matcher(d)) continue
                    const g = t.getRule(m.ruleId),
                      { ruleScanner: f, findOptions: y } = l(g, t, null, a, r === i),
                      b = f.findNextMatchSync(s, r, y)
                    if (!b) continue
                    n.DebugFlags.InDebugMode &&
                      (console.log(`  matched injection: ${m.debugSelector}`),
                      console.log(f.toString()))
                    const _ = b.captureIndices[0].start
                    if (
                      !(_ >= u) &&
                      ((u = _), (p = b.captureIndices), (c = b.ruleId), (h = m.priority), u === r)
                    )
                      break
                  }
                  return p ? { priorityMatch: -1 === h, captureIndices: p, matchedRuleId: c } : null
                })(u, e, t, s, a, r, i)
                if (!p) return c
                if (!c) return p
                const h = c.captureIndices[0].start,
                  d = p.captureIndices[0].start
                return d < h || (p.priorityMatch && d === h) ? p : c
              })(e, t, s, a, c, y)
              if (!i)
                return (
                  n.DebugFlags.InDebugMode && console.log('  no more matches.'),
                  p.produce(c, g),
                  void (f = !0)
                )
              const u = i.captureIndices,
                d = i.matchedRuleId,
                m = !!(u && u.length > 0) && u[0].end > a
              if (d === r.endRuleId) {
                const r = c.getRule(e)
                n.DebugFlags.InDebugMode &&
                  console.log('  popping ' + r.debugName + ' - ' + r.debugEndRegExp),
                  p.produce(c, u[0].start),
                  (c = c.withContentNameScopesList(c.nameScopesList)),
                  h(e, t, s, c, p, r.endCaptures, u),
                  p.produce(c, u[0].end)
                const o = c
                if (((c = c.parent), (y = o.getAnchorPos()), !m && o.getEnterPos() === a))
                  return (
                    n.DebugFlags.InDebugMode &&
                      console.error(
                        '[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing'
                      ),
                    (c = o),
                    p.produce(c, g),
                    void (f = !0)
                  )
              } else {
                const o = e.getRule(d)
                p.produce(c, u[0].start)
                const i = c,
                  l = o.getName(t.content, u),
                  b = c.contentNameScopesList.pushAttributed(l, e)
                if (
                  ((c = c.push(d, a, y, u[0].end === g, null, b, b)), o instanceof r.BeginEndRule)
                ) {
                  const a = o
                  n.DebugFlags.InDebugMode &&
                    console.log('  pushing ' + a.debugName + ' - ' + a.debugBeginRegExp),
                    h(e, t, s, c, p, a.beginCaptures, u),
                    p.produce(c, u[0].end),
                    (y = u[0].end)
                  const r = a.getContentName(t.content, u),
                    l = b.pushAttributed(r, e)
                  if (
                    ((c = c.withContentNameScopesList(l)),
                    a.endHasBackReferences &&
                      (c = c.withEndRule(a.getEndWithResolvedBackReferences(t.content, u))),
                    !m && i.hasSameRuleAs(c))
                  )
                    return (
                      n.DebugFlags.InDebugMode &&
                        console.error(
                          '[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing'
                        ),
                      (c = c.pop()),
                      p.produce(c, g),
                      void (f = !0)
                    )
                } else if (o instanceof r.BeginWhileRule) {
                  const a = o
                  n.DebugFlags.InDebugMode && console.log('  pushing ' + a.debugName),
                    h(e, t, s, c, p, a.beginCaptures, u),
                    p.produce(c, u[0].end),
                    (y = u[0].end)
                  const r = a.getContentName(t.content, u),
                    l = b.pushAttributed(r, e)
                  if (
                    ((c = c.withContentNameScopesList(l)),
                    a.whileHasBackReferences &&
                      (c = c.withEndRule(a.getWhileWithResolvedBackReferences(t.content, u))),
                    !m && i.hasSameRuleAs(c))
                  )
                    return (
                      n.DebugFlags.InDebugMode &&
                        console.error(
                          '[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing'
                        ),
                      (c = c.pop()),
                      p.produce(c, g),
                      void (f = !0)
                    )
                } else {
                  const a = o
                  if (
                    (n.DebugFlags.InDebugMode &&
                      console.log('  matched ' + a.debugName + ' - ' + a.debugMatchRegExp),
                    h(e, t, s, c, p, a.captures, u),
                    p.produce(c, u[0].end),
                    (c = c.pop()),
                    !m)
                  )
                    return (
                      n.DebugFlags.InDebugMode &&
                        console.error(
                          '[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping'
                        ),
                      (c = c.safePop()),
                      p.produce(c, g),
                      void (f = !0)
                    )
                }
              }
              u[0].end > a && ((a = u[0].end), (s = !1))
            }
          }
          function l(e, t, s, a, r) {
            return n.UseOnigurumaFindOptions
              ? { ruleScanner: e.compile(t, s), findOptions: p(a, r) }
              : { ruleScanner: e.compileAG(t, s, a, r), findOptions: 0 }
          }
          function u(e, t, s, a, r) {
            return n.UseOnigurumaFindOptions
              ? { ruleScanner: e.compileWhile(t, s), findOptions: p(a, r) }
              : { ruleScanner: e.compileWhileAG(t, s, a, r), findOptions: 0 }
          }
          function p(e, t) {
            let s = 0
            return e || (s |= 1), t || (s |= 4), s
          }
          function h(e, t, s, n, r, o, i) {
            if (0 === o.length) return
            const l = t.content,
              u = Math.min(o.length, i.length),
              p = [],
              h = i[0].end
            for (let t = 0; t < u; t++) {
              const u = o[t]
              if (null === u) continue
              const m = i[t]
              if (0 === m.length) continue
              if (m.start > h) break
              for (; p.length > 0 && p[p.length - 1].endPos <= m.start; )
                r.produceFromScopes(p[p.length - 1].scopes, p[p.length - 1].endPos), p.pop()
              if (
                (p.length > 0
                  ? r.produceFromScopes(p[p.length - 1].scopes, m.start)
                  : r.produce(n, m.start),
                u.retokenizeCapturedWithRuleId)
              ) {
                const t = u.getName(l, i),
                  o = n.contentNameScopesList.pushAttributed(t, e),
                  p = u.getContentName(l, i),
                  h = o.pushAttributed(p, e),
                  d = n.push(u.retokenizeCapturedWithRuleId, m.start, -1, !1, null, o, h),
                  g = e.createOnigString(l.substring(0, m.end))
                c(e, g, s && 0 === m.start, m.start, d, r, !1, 0), a.disposeOnigString(g)
                continue
              }
              const g = u.getName(l, i)
              if (null !== g) {
                const t = (
                  p.length > 0 ? p[p.length - 1].scopes : n.contentNameScopesList
                ).pushAttributed(g, e)
                p.push(new d(t, m.end))
              }
            }
            for (; p.length > 0; )
              r.produceFromScopes(p[p.length - 1].scopes, p[p.length - 1].endPos), p.pop()
          }
          t._tokenizeString = c
          class d {
            constructor(e, t) {
              ;(this.scopes = e), (this.endPos = t)
            }
          }
          t.LocalStackElement = d
        },
        974: (e, t) => {
          function s(e, t) {
            throw new Error(
              'Near offset ' + e.pos + ': ' + t + ' ~~~' + e.source.substr(e.pos, 50) + '~~~'
            )
          }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.parseJSON = void 0),
            (t.parseJSON = function (e, t, o) {
              let i = new n(e),
                c = new a(),
                l = 0,
                u = null,
                p = [],
                h = []
              function d() {
                p.push(l), h.push(u)
              }
              function m() {
                ;(l = p.pop()), (u = h.pop())
              }
              function g(e) {
                s(i, e)
              }
              for (; r(i, c); ) {
                if (0 === l) {
                  if ((null !== u && g('too many constructs in root'), 3 === c.type)) {
                    ;(u = {}), o && (u.$vscodeTextmateLocation = c.toLocation(t)), d(), (l = 1)
                    continue
                  }
                  if (2 === c.type) {
                    ;(u = []), d(), (l = 4)
                    continue
                  }
                  g('unexpected token in root')
                }
                if (2 === l) {
                  if (5 === c.type) {
                    m()
                    continue
                  }
                  if (7 === c.type) {
                    l = 3
                    continue
                  }
                  g('expected , or }')
                }
                if (1 === l || 3 === l) {
                  if (1 === l && 5 === c.type) {
                    m()
                    continue
                  }
                  if (1 === c.type) {
                    let e = c.value
                    if (
                      ((r(i, c) && 6 === c.type) || g('expected colon'),
                      r(i, c) || g('expected value'),
                      (l = 2),
                      1 === c.type)
                    ) {
                      u[e] = c.value
                      continue
                    }
                    if (8 === c.type) {
                      u[e] = null
                      continue
                    }
                    if (9 === c.type) {
                      u[e] = !0
                      continue
                    }
                    if (10 === c.type) {
                      u[e] = !1
                      continue
                    }
                    if (11 === c.type) {
                      u[e] = parseFloat(c.value)
                      continue
                    }
                    if (2 === c.type) {
                      let t = []
                      ;(u[e] = t), d(), (l = 4), (u = t)
                      continue
                    }
                    if (3 === c.type) {
                      let s = {}
                      o && (s.$vscodeTextmateLocation = c.toLocation(t)),
                        (u[e] = s),
                        d(),
                        (l = 1),
                        (u = s)
                      continue
                    }
                  }
                  g('unexpected token in dict')
                }
                if (5 === l) {
                  if (4 === c.type) {
                    m()
                    continue
                  }
                  if (7 === c.type) {
                    l = 6
                    continue
                  }
                  g('expected , or ]')
                }
                if (4 === l || 6 === l) {
                  if (4 === l && 4 === c.type) {
                    m()
                    continue
                  }
                  if (((l = 5), 1 === c.type)) {
                    u.push(c.value)
                    continue
                  }
                  if (8 === c.type) {
                    u.push(null)
                    continue
                  }
                  if (9 === c.type) {
                    u.push(!0)
                    continue
                  }
                  if (10 === c.type) {
                    u.push(!1)
                    continue
                  }
                  if (11 === c.type) {
                    u.push(parseFloat(c.value))
                    continue
                  }
                  if (2 === c.type) {
                    let e = []
                    u.push(e), d(), (l = 4), (u = e)
                    continue
                  }
                  if (3 === c.type) {
                    let e = {}
                    o && (e.$vscodeTextmateLocation = c.toLocation(t)),
                      u.push(e),
                      d(),
                      (l = 1),
                      (u = e)
                    continue
                  }
                  g('unexpected token in array')
                }
                g('unknown state')
              }
              return 0 !== h.length && g('unclosed constructs'), u
            })
          class n {
            constructor(e) {
              ;(this.source = e),
                (this.pos = 0),
                (this.len = e.length),
                (this.line = 1),
                (this.char = 0)
            }
          }
          class a {
            constructor() {
              ;(this.value = null),
                (this.type = 0),
                (this.offset = -1),
                (this.len = -1),
                (this.line = -1),
                (this.char = -1)
            }
            toLocation(e) {
              return { filename: e, line: this.line, char: this.char }
            }
          }
          function r(e, t) {
            ;(t.value = null),
              (t.type = 0),
              (t.offset = -1),
              (t.len = -1),
              (t.line = -1),
              (t.char = -1)
            let n,
              a = e.source,
              r = e.pos,
              o = e.len,
              i = e.line,
              c = e.char
            for (;;) {
              if (r >= o) return !1
              if (((n = a.charCodeAt(r)), 32 !== n && 9 !== n && 13 !== n)) {
                if (10 !== n) break
                r++, i++, (c = 0)
              } else r++, c++
            }
            if (((t.offset = r), (t.line = i), (t.char = c), 34 === n)) {
              for (t.type = 1, r++, c++; ; ) {
                if (r >= o) return !1
                if (((n = a.charCodeAt(r)), r++, c++, 92 !== n)) {
                  if (34 === n) break
                } else r++, c++
              }
              t.value = a
                .substring(t.offset + 1, r - 1)
                .replace(/\\u([0-9A-Fa-f]{4})/g, (e, t) => String.fromCodePoint(parseInt(t, 16)))
                .replace(/\\(.)/g, (t, n) => {
                  switch (n) {
                    case '"':
                      return '"'
                    case '\\':
                      return '\\'
                    case '/':
                      return '/'
                    case 'b':
                      return '\b'
                    case 'f':
                      return '\f'
                    case 'n':
                      return '\n'
                    case 'r':
                      return '\r'
                    case 't':
                      return '\t'
                    default:
                      s(e, 'invalid escape sequence')
                  }
                  throw new Error('unreachable')
                })
            } else if (91 === n) (t.type = 2), r++, c++
            else if (123 === n) (t.type = 3), r++, c++
            else if (93 === n) (t.type = 4), r++, c++
            else if (125 === n) (t.type = 5), r++, c++
            else if (58 === n) (t.type = 6), r++, c++
            else if (44 === n) (t.type = 7), r++, c++
            else if (110 === n) {
              if (((t.type = 8), r++, c++, (n = a.charCodeAt(r)), 117 !== n)) return !1
              if ((r++, c++, (n = a.charCodeAt(r)), 108 !== n)) return !1
              if ((r++, c++, (n = a.charCodeAt(r)), 108 !== n)) return !1
              r++, c++
            } else if (116 === n) {
              if (((t.type = 9), r++, c++, (n = a.charCodeAt(r)), 114 !== n)) return !1
              if ((r++, c++, (n = a.charCodeAt(r)), 117 !== n)) return !1
              if ((r++, c++, (n = a.charCodeAt(r)), 101 !== n)) return !1
              r++, c++
            } else if (102 === n) {
              if (((t.type = 10), r++, c++, (n = a.charCodeAt(r)), 97 !== n)) return !1
              if ((r++, c++, (n = a.charCodeAt(r)), 108 !== n)) return !1
              if ((r++, c++, (n = a.charCodeAt(r)), 115 !== n)) return !1
              if ((r++, c++, (n = a.charCodeAt(r)), 101 !== n)) return !1
              r++, c++
            } else
              for (t.type = 11; ; ) {
                if (r >= o) return !1
                if (
                  ((n = a.charCodeAt(r)),
                  !(
                    46 === n ||
                    (n >= 48 && n <= 57) ||
                    101 === n ||
                    69 === n ||
                    45 === n ||
                    43 === n
                  ))
                )
                  break
                r++, c++
              }
            return (
              (t.len = r - t.offset),
              null === t.value && (t.value = a.substr(t.offset, t.len)),
              (e.pos = r),
              (e.line = i),
              (e.char = c),
              !0
            )
          }
        },
        787: function (e, t, s) {
          var n =
              (this && this.__createBinding) ||
              (Object.create
                ? function (e, t, s, n) {
                    void 0 === n && (n = s),
                      Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                          return t[s]
                        }
                      })
                  }
                : function (e, t, s, n) {
                    void 0 === n && (n = s), (e[n] = t[s])
                  }),
            a =
              (this && this.__exportStar) ||
              function (e, t) {
                for (var s in e)
                  'default' === s || Object.prototype.hasOwnProperty.call(t, s) || n(t, e, s)
              }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.parseRawGrammar = t.INITIAL = t.Registry = void 0)
          const r = s(391),
            o = s(50),
            i = s(652),
            c = s(583),
            l = s(965)
          a(s(44), t),
            (t.Registry = class {
              constructor(e) {
                ;(this._options = e),
                  (this._syncRegistry = new i.SyncRegistry(
                    c.Theme.createFromRawTheme(e.theme, e.colorMap),
                    e.onigLib
                  )),
                  (this._ensureGrammarCache = new Map())
              }
              dispose() {
                this._syncRegistry.dispose()
              }
              setTheme(e, t) {
                this._syncRegistry.setTheme(c.Theme.createFromRawTheme(e, t))
              }
              getColorMap() {
                return this._syncRegistry.getColorMap()
              }
              loadGrammarWithEmbeddedLanguages(e, t, s) {
                return this.loadGrammarWithConfiguration(e, t, { embeddedLanguages: s })
              }
              loadGrammarWithConfiguration(e, t, s) {
                return this._loadGrammar(
                  e,
                  t,
                  s.embeddedLanguages,
                  s.tokenTypes,
                  new r.BalancedBracketSelectors(
                    s.balancedBracketSelectors || [],
                    s.unbalancedBracketSelectors || []
                  )
                )
              }
              loadGrammar(e) {
                return this._loadGrammar(e, 0, null, null, null)
              }
              async _loadGrammar(e, t, s, n, a) {
                const r = new l.ScopeDependencyProcessor(this._syncRegistry, e)
                for (; r.Q.length > 0; )
                  await Promise.all(r.Q.map(e => this._loadSingleGrammar(e.scopeName))),
                    r.processQueue()
                return this._grammarForScopeName(e, t, s, n, a)
              }
              async _loadSingleGrammar(e) {
                return (
                  this._ensureGrammarCache.has(e) ||
                    this._ensureGrammarCache.set(e, this._doLoadSingleGrammar(e)),
                  this._ensureGrammarCache.get(e)
                )
              }
              async _doLoadSingleGrammar(e) {
                const t = await this._options.loadGrammar(e)
                if (t) {
                  const s =
                    'function' == typeof this._options.getInjections
                      ? this._options.getInjections(e)
                      : void 0
                  this._syncRegistry.addGrammar(t, s)
                }
              }
              async addGrammar(e, t = [], s = 0, n = null) {
                return (
                  this._syncRegistry.addGrammar(e, t),
                  await this._grammarForScopeName(e.scopeName, s, n)
                )
              }
              _grammarForScopeName(e, t = 0, s = null, n = null, a = null) {
                return this._syncRegistry.grammarForScopeName(e, t, s, n, a)
              }
            }),
            (t.INITIAL = r.StateStack.NULL),
            (t.parseRawGrammar = o.parseRawGrammar)
        },
        736: (e, t) => {
          function s(e) {
            return !!e && !!e.match(/[\w\.:]+/)
          }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.createMatchers = void 0),
            (t.createMatchers = function (e, t) {
              const n = [],
                a = (function (e) {
                  let t = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,
                    s = t.exec(e)
                  return {
                    next: () => {
                      if (!s) return null
                      const n = s[0]
                      return (s = t.exec(e)), n
                    }
                  }
                })(e)
              let r = a.next()
              for (; null !== r; ) {
                let e = 0
                if (2 === r.length && ':' === r.charAt(1)) {
                  switch (r.charAt(0)) {
                    case 'R':
                      e = 1
                      break
                    case 'L':
                      e = -1
                      break
                    default:
                      console.log(`Unknown priority ${r} in scope selector`)
                  }
                  r = a.next()
                }
                let t = i()
                if ((n.push({ matcher: t, priority: e }), ',' !== r)) break
                r = a.next()
              }
              return n
              function o() {
                if ('-' === r) {
                  r = a.next()
                  const e = o()
                  return t => !!e && !e(t)
                }
                if ('(' === r) {
                  r = a.next()
                  const e = (function () {
                    const e = []
                    let t = i()
                    for (; t && (e.push(t), '|' === r || ',' === r); ) {
                      do {
                        r = a.next()
                      } while ('|' === r || ',' === r)
                      t = i()
                    }
                    return t => e.some(e => e(t))
                  })()
                  return ')' === r && (r = a.next()), e
                }
                if (s(r)) {
                  const e = []
                  do {
                    e.push(r), (r = a.next())
                  } while (s(r))
                  return s => t(e, s)
                }
                return null
              }
              function i() {
                const e = []
                let t = o()
                for (; t; ) e.push(t), (t = o())
                return t => e.every(e => e(t))
              }
            })
        },
        44: (e, t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.disposeOnigString = void 0),
            (t.disposeOnigString = function (e) {
              'function' == typeof e.dispose && e.dispose()
            })
        },
        50: (e, t, s) => {
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.parseRawGrammar = void 0)
          const n = s(69),
            a = s(350),
            r = s(974)
          t.parseRawGrammar = function (e, t = null) {
            return null !== t && /\.json$/.test(t)
              ? ((s = e), (o = t), a.DebugFlags.InDebugMode ? r.parseJSON(s, o, !0) : JSON.parse(s))
              : (function (e, t) {
                  return a.DebugFlags.InDebugMode
                    ? n.parseWithLocation(e, t, '$vscodeTextmateLocation')
                    : n.parsePLIST(e)
                })(e, t)
            var s, o
          }
        },
        69: (e, t) => {
          function s(e, t, s) {
            const n = e.length
            let a = 0,
              r = 1,
              o = 0
            function i(t) {
              if (null === s) a += t
              else for (; t > 0; ) 10 === e.charCodeAt(a) ? (a++, r++, (o = 0)) : (a++, o++), t--
            }
            function c(e) {
              null === s ? (a = e) : i(e - a)
            }
            function l() {
              for (; a < n; ) {
                let t = e.charCodeAt(a)
                if (32 !== t && 9 !== t && 13 !== t && 10 !== t) break
                i(1)
              }
            }
            function u(t) {
              return e.substr(a, t.length) === t && (i(t.length), !0)
            }
            function p(t) {
              let s = e.indexOf(t, a)
              c(-1 !== s ? s + t.length : n)
            }
            function h(t) {
              let s = e.indexOf(t, a)
              if (-1 !== s) {
                let n = e.substring(a, s)
                return c(s + t.length), n
              }
              {
                let t = e.substr(a)
                return c(n), t
              }
            }
            n > 0 && 65279 === e.charCodeAt(0) && (a = 1)
            let d = 0,
              m = null,
              g = [],
              f = [],
              y = null
            function b(e, t) {
              g.push(d), f.push(m), (d = e), (m = t)
            }
            function _() {
              if (0 === g.length) return N('illegal state stack')
              ;(d = g.pop()), (m = f.pop())
            }
            function N(t) {
              throw new Error('Near offset ' + a + ': ' + t + ' ~~~' + e.substr(a, 50) + '~~~')
            }
            const k = function () {
                if (null === y) return N('missing <key>')
                let e = {}
                null !== s && (e[s] = { filename: t, line: r, char: o }),
                  (m[y] = e),
                  (y = null),
                  b(1, e)
              },
              L = function () {
                if (null === y) return N('missing <key>')
                let e = []
                ;(m[y] = e), (y = null), b(2, e)
              },
              S = function () {
                let e = {}
                null !== s && (e[s] = { filename: t, line: r, char: o }), m.push(e), b(1, e)
              },
              v = function () {
                let e = []
                m.push(e), b(2, e)
              }
            function w() {
              if (1 !== d) return N('unexpected </dict>')
              _()
            }
            function C() {
              return 1 === d || 2 !== d ? N('unexpected </array>') : void _()
            }
            function j(e) {
              if (1 === d) {
                if (null === y) return N('missing <key>')
                ;(m[y] = e), (y = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function P(e) {
              if (isNaN(e)) return N('cannot parse float')
              if (1 === d) {
                if (null === y) return N('missing <key>')
                ;(m[y] = e), (y = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function A(e) {
              if (isNaN(e)) return N('cannot parse integer')
              if (1 === d) {
                if (null === y) return N('missing <key>')
                ;(m[y] = e), (y = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function x(e) {
              if (1 === d) {
                if (null === y) return N('missing <key>')
                ;(m[y] = e), (y = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function T(e) {
              if (1 === d) {
                if (null === y) return N('missing <key>')
                ;(m[y] = e), (y = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function R(e) {
              if (1 === d) {
                if (null === y) return N('missing <key>')
                ;(m[y] = e), (y = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function I() {
              let e = h('>'),
                t = !1
              return (
                47 === e.charCodeAt(e.length - 1) && ((t = !0), (e = e.substring(0, e.length - 1))),
                { name: e.trim(), isClosed: t }
              )
            }
            function E(e) {
              if (e.isClosed) return ''
              let t = h('</')
              return (
                p('>'),
                t
                  .replace(/&#([0-9]+);/g, function (e, t) {
                    return String.fromCodePoint(parseInt(t, 10))
                  })
                  .replace(/&#x([0-9a-f]+);/g, function (e, t) {
                    return String.fromCodePoint(parseInt(t, 16))
                  })
                  .replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function (e) {
                    switch (e) {
                      case '&amp;':
                        return '&'
                      case '&lt;':
                        return '<'
                      case '&gt;':
                        return '>'
                      case '&quot;':
                        return '"'
                      case '&apos;':
                        return "'"
                    }
                    return e
                  })
              )
            }
            for (; a < n && (l(), !(a >= n)); ) {
              const c = e.charCodeAt(a)
              if ((i(1), 60 !== c)) return N('expected <')
              if (a >= n) return N('unexpected end of input')
              const h = e.charCodeAt(a)
              if (63 === h) {
                i(1), p('?>')
                continue
              }
              if (33 === h) {
                if ((i(1), u('--'))) {
                  p('--\x3e')
                  continue
                }
                p('>')
                continue
              }
              if (47 === h) {
                if ((i(1), l(), u('plist'))) {
                  p('>')
                  continue
                }
                if (u('dict')) {
                  p('>'), w()
                  continue
                }
                if (u('array')) {
                  p('>'), C()
                  continue
                }
                return N('unexpected closed tag')
              }
              let g = I()
              switch (g.name) {
                case 'dict':
                  1 === d
                    ? k()
                    : 2 === d
                    ? S()
                    : ((m = {}), null !== s && (m[s] = { filename: t, line: r, char: o }), b(1, m)),
                    g.isClosed && w()
                  continue
                case 'array':
                  1 === d ? L() : 2 === d ? v() : ((m = []), b(2, m)), g.isClosed && C()
                  continue
                case 'key':
                  ;(O = E(g)),
                    1 !== d ? N('unexpected <key>') : null !== y ? N('too many <key>') : (y = O)
                  continue
                case 'string':
                  j(E(g))
                  continue
                case 'real':
                  P(parseFloat(E(g)))
                  continue
                case 'integer':
                  A(parseInt(E(g), 10))
                  continue
                case 'date':
                  x(new Date(E(g)))
                  continue
                case 'data':
                  T(E(g))
                  continue
                case 'true':
                  E(g), R(!0)
                  continue
                case 'false':
                  E(g), R(!1)
                  continue
              }
              if (!/^plist/.test(g.name)) return N('unexpected opened tag ' + g.name)
            }
            var O
            return m
          }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.parsePLIST = t.parseWithLocation = void 0),
            (t.parseWithLocation = function (e, t, n) {
              return s(e, t, n)
            }),
            (t.parsePLIST = function (e) {
              return s(e, null, null)
            })
        },
        652: (e, t, s) => {
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.SyncRegistry = void 0)
          const n = s(391)
          t.SyncRegistry = class {
            constructor(e, t) {
              ;(this._onigLibPromise = t),
                (this._grammars = new Map()),
                (this._rawGrammars = new Map()),
                (this._injectionGrammars = new Map()),
                (this._theme = e)
            }
            dispose() {
              for (const e of this._grammars.values()) e.dispose()
            }
            setTheme(e) {
              this._theme = e
            }
            getColorMap() {
              return this._theme.getColorMap()
            }
            addGrammar(e, t) {
              this._rawGrammars.set(e.scopeName, e),
                t && this._injectionGrammars.set(e.scopeName, t)
            }
            lookup(e) {
              return this._rawGrammars.get(e)
            }
            injections(e) {
              return this._injectionGrammars.get(e)
            }
            getDefaults() {
              return this._theme.getDefaults()
            }
            themeMatch(e) {
              return this._theme.match(e)
            }
            async grammarForScopeName(e, t, s, a, r) {
              if (!this._grammars.has(e)) {
                let o = this._rawGrammars.get(e)
                if (!o) return null
                this._grammars.set(
                  e,
                  n.createGrammar(e, o, t, s, a, r, this, await this._onigLibPromise)
                )
              }
              return this._grammars.get(e)
            }
          }
        },
        792: (e, t, s) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.CompiledRule =
              t.RegExpSourceList =
              t.RegExpSource =
              t.RuleFactory =
              t.BeginWhileRule =
              t.BeginEndRule =
              t.IncludeOnlyRule =
              t.MatchRule =
              t.CaptureRule =
              t.Rule =
              t.ruleIdToNumber =
              t.ruleIdFromNumber =
              t.whileRuleId =
              t.endRuleId =
                void 0)
          const n = s(878),
            a = s(965),
            r = /\\(\d+)/,
            o = /\\(\d+)/g
          ;(t.endRuleId = -1),
            (t.whileRuleId = -2),
            (t.ruleIdFromNumber = function (e) {
              return e
            }),
            (t.ruleIdToNumber = function (e) {
              return e
            })
          class i {
            constructor(e, t, s, a) {
              ;(this.$location = e),
                (this.id = t),
                (this._name = s || null),
                (this._nameIsCapturing = n.RegexSource.hasCaptures(this._name)),
                (this._contentName = a || null),
                (this._contentNameIsCapturing = n.RegexSource.hasCaptures(this._contentName))
            }
            get debugName() {
              const e = this.$location
                ? `${n.basename(this.$location.filename)}:${this.$location.line}`
                : 'unknown'
              return `${this.constructor.name}#${this.id} @ ${e}`
            }
            getName(e, t) {
              return this._nameIsCapturing && null !== this._name && null !== e && null !== t
                ? n.RegexSource.replaceCaptures(this._name, e, t)
                : this._name
            }
            getContentName(e, t) {
              return this._contentNameIsCapturing && null !== this._contentName
                ? n.RegexSource.replaceCaptures(this._contentName, e, t)
                : this._contentName
            }
          }
          t.Rule = i
          class c extends i {
            constructor(e, t, s, n, a) {
              super(e, t, s, n), (this.retokenizeCapturedWithRuleId = a)
            }
            dispose() {}
            collectPatterns(e, t) {
              throw new Error('Not supported!')
            }
            compile(e, t) {
              throw new Error('Not supported!')
            }
            compileAG(e, t, s, n) {
              throw new Error('Not supported!')
            }
          }
          t.CaptureRule = c
          class l extends i {
            constructor(e, t, s, n, a) {
              super(e, t, s, null),
                (this._match = new m(n, this.id)),
                (this.captures = a),
                (this._cachedCompiledPatterns = null)
            }
            dispose() {
              this._cachedCompiledPatterns &&
                (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null))
            }
            get debugMatchRegExp() {
              return `${this._match.source}`
            }
            collectPatterns(e, t) {
              t.push(this._match)
            }
            compile(e, t) {
              return this._getCachedCompiledPatterns(e).compile(e)
            }
            compileAG(e, t, s, n) {
              return this._getCachedCompiledPatterns(e).compileAG(e, s, n)
            }
            _getCachedCompiledPatterns(e) {
              return (
                this._cachedCompiledPatterns ||
                  ((this._cachedCompiledPatterns = new g()),
                  this.collectPatterns(e, this._cachedCompiledPatterns)),
                this._cachedCompiledPatterns
              )
            }
          }
          t.MatchRule = l
          class u extends i {
            constructor(e, t, s, n, a) {
              super(e, t, s, n),
                (this.patterns = a.patterns),
                (this.hasMissingPatterns = a.hasMissingPatterns),
                (this._cachedCompiledPatterns = null)
            }
            dispose() {
              this._cachedCompiledPatterns &&
                (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null))
            }
            collectPatterns(e, t) {
              for (const s of this.patterns) e.getRule(s).collectPatterns(e, t)
            }
            compile(e, t) {
              return this._getCachedCompiledPatterns(e).compile(e)
            }
            compileAG(e, t, s, n) {
              return this._getCachedCompiledPatterns(e).compileAG(e, s, n)
            }
            _getCachedCompiledPatterns(e) {
              return (
                this._cachedCompiledPatterns ||
                  ((this._cachedCompiledPatterns = new g()),
                  this.collectPatterns(e, this._cachedCompiledPatterns)),
                this._cachedCompiledPatterns
              )
            }
          }
          t.IncludeOnlyRule = u
          class p extends i {
            constructor(e, t, s, n, a, r, o, i, c, l) {
              super(e, t, s, n),
                (this._begin = new m(a, this.id)),
                (this.beginCaptures = r),
                (this._end = new m(o || '￿', -1)),
                (this.endHasBackReferences = this._end.hasBackReferences),
                (this.endCaptures = i),
                (this.applyEndPatternLast = c || !1),
                (this.patterns = l.patterns),
                (this.hasMissingPatterns = l.hasMissingPatterns),
                (this._cachedCompiledPatterns = null)
            }
            dispose() {
              this._cachedCompiledPatterns &&
                (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null))
            }
            get debugBeginRegExp() {
              return `${this._begin.source}`
            }
            get debugEndRegExp() {
              return `${this._end.source}`
            }
            getEndWithResolvedBackReferences(e, t) {
              return this._end.resolveBackReferences(e, t)
            }
            collectPatterns(e, t) {
              t.push(this._begin)
            }
            compile(e, t) {
              return this._getCachedCompiledPatterns(e, t).compile(e)
            }
            compileAG(e, t, s, n) {
              return this._getCachedCompiledPatterns(e, t).compileAG(e, s, n)
            }
            _getCachedCompiledPatterns(e, t) {
              if (!this._cachedCompiledPatterns) {
                this._cachedCompiledPatterns = new g()
                for (const t of this.patterns)
                  e.getRule(t).collectPatterns(e, this._cachedCompiledPatterns)
                this.applyEndPatternLast
                  ? this._cachedCompiledPatterns.push(
                      this._end.hasBackReferences ? this._end.clone() : this._end
                    )
                  : this._cachedCompiledPatterns.unshift(
                      this._end.hasBackReferences ? this._end.clone() : this._end
                    )
              }
              return (
                this._end.hasBackReferences &&
                  (this.applyEndPatternLast
                    ? this._cachedCompiledPatterns.setSource(
                        this._cachedCompiledPatterns.length() - 1,
                        t
                      )
                    : this._cachedCompiledPatterns.setSource(0, t)),
                this._cachedCompiledPatterns
              )
            }
          }
          t.BeginEndRule = p
          class h extends i {
            constructor(e, s, n, a, r, o, i, c, l) {
              super(e, s, n, a),
                (this._begin = new m(r, this.id)),
                (this.beginCaptures = o),
                (this.whileCaptures = c),
                (this._while = new m(i, t.whileRuleId)),
                (this.whileHasBackReferences = this._while.hasBackReferences),
                (this.patterns = l.patterns),
                (this.hasMissingPatterns = l.hasMissingPatterns),
                (this._cachedCompiledPatterns = null),
                (this._cachedCompiledWhilePatterns = null)
            }
            dispose() {
              this._cachedCompiledPatterns &&
                (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null)),
                this._cachedCompiledWhilePatterns &&
                  (this._cachedCompiledWhilePatterns.dispose(),
                  (this._cachedCompiledWhilePatterns = null))
            }
            get debugBeginRegExp() {
              return `${this._begin.source}`
            }
            get debugWhileRegExp() {
              return `${this._while.source}`
            }
            getWhileWithResolvedBackReferences(e, t) {
              return this._while.resolveBackReferences(e, t)
            }
            collectPatterns(e, t) {
              t.push(this._begin)
            }
            compile(e, t) {
              return this._getCachedCompiledPatterns(e).compile(e)
            }
            compileAG(e, t, s, n) {
              return this._getCachedCompiledPatterns(e).compileAG(e, s, n)
            }
            _getCachedCompiledPatterns(e) {
              if (!this._cachedCompiledPatterns) {
                this._cachedCompiledPatterns = new g()
                for (const t of this.patterns)
                  e.getRule(t).collectPatterns(e, this._cachedCompiledPatterns)
              }
              return this._cachedCompiledPatterns
            }
            compileWhile(e, t) {
              return this._getCachedCompiledWhilePatterns(e, t).compile(e)
            }
            compileWhileAG(e, t, s, n) {
              return this._getCachedCompiledWhilePatterns(e, t).compileAG(e, s, n)
            }
            _getCachedCompiledWhilePatterns(e, t) {
              return (
                this._cachedCompiledWhilePatterns ||
                  ((this._cachedCompiledWhilePatterns = new g()),
                  this._cachedCompiledWhilePatterns.push(
                    this._while.hasBackReferences ? this._while.clone() : this._while
                  )),
                this._while.hasBackReferences &&
                  this._cachedCompiledWhilePatterns.setSource(0, t || '￿'),
                this._cachedCompiledWhilePatterns
              )
            }
          }
          t.BeginWhileRule = h
          class d {
            static createCaptureRule(e, t, s, n, a) {
              return e.registerRule(e => new c(t, e, s, n, a))
            }
            static getCompiledRuleId(e, t, s) {
              return (
                e.id ||
                  t.registerRule(a => {
                    if (((e.id = a), e.match))
                      return new l(
                        e.$vscodeTextmateLocation,
                        e.id,
                        e.name,
                        e.match,
                        d._compileCaptures(e.captures, t, s)
                      )
                    if (void 0 === e.begin) {
                      e.repository && (s = n.mergeObjects({}, s, e.repository))
                      let a = e.patterns
                      return (
                        void 0 === a && e.include && (a = [{ include: e.include }]),
                        new u(
                          e.$vscodeTextmateLocation,
                          e.id,
                          e.name,
                          e.contentName,
                          d._compilePatterns(a, t, s)
                        )
                      )
                    }
                    return e.while
                      ? new h(
                          e.$vscodeTextmateLocation,
                          e.id,
                          e.name,
                          e.contentName,
                          e.begin,
                          d._compileCaptures(e.beginCaptures || e.captures, t, s),
                          e.while,
                          d._compileCaptures(e.whileCaptures || e.captures, t, s),
                          d._compilePatterns(e.patterns, t, s)
                        )
                      : new p(
                          e.$vscodeTextmateLocation,
                          e.id,
                          e.name,
                          e.contentName,
                          e.begin,
                          d._compileCaptures(e.beginCaptures || e.captures, t, s),
                          e.end,
                          d._compileCaptures(e.endCaptures || e.captures, t, s),
                          e.applyEndPatternLast,
                          d._compilePatterns(e.patterns, t, s)
                        )
                  }),
                e.id
              )
            }
            static _compileCaptures(e, t, s) {
              let n = []
              if (e) {
                let a = 0
                for (const t in e) {
                  if ('$vscodeTextmateLocation' === t) continue
                  const e = parseInt(t, 10)
                  e > a && (a = e)
                }
                for (let e = 0; e <= a; e++) n[e] = null
                for (const a in e) {
                  if ('$vscodeTextmateLocation' === a) continue
                  const r = parseInt(a, 10)
                  let o = 0
                  e[a].patterns && (o = d.getCompiledRuleId(e[a], t, s)),
                    (n[r] = d.createCaptureRule(
                      t,
                      e[a].$vscodeTextmateLocation,
                      e[a].name,
                      e[a].contentName,
                      o
                    ))
                }
              }
              return n
            }
            static _compilePatterns(e, t, s) {
              let n = []
              if (e)
                for (let r = 0, o = e.length; r < o; r++) {
                  const o = e[r]
                  let i = -1
                  if (o.include) {
                    const e = a.parseInclude(o.include)
                    switch (e.kind) {
                      case 0:
                      case 1:
                        i = d.getCompiledRuleId(s[o.include], t, s)
                        break
                      case 2:
                        let n = s[e.ruleName]
                        n && (i = d.getCompiledRuleId(n, t, s))
                        break
                      case 3:
                      case 4:
                        const a = e.scopeName,
                          r = 4 === e.kind ? e.ruleName : null,
                          c = t.getExternalGrammar(a, s)
                        if (c)
                          if (r) {
                            let e = c.repository[r]
                            e && (i = d.getCompiledRuleId(e, t, c.repository))
                          } else i = d.getCompiledRuleId(c.repository.$self, t, c.repository)
                    }
                  } else i = d.getCompiledRuleId(o, t, s)
                  if (-1 !== i) {
                    const e = t.getRule(i)
                    let s = !1
                    if (
                      ((e instanceof u || e instanceof p || e instanceof h) &&
                        e.hasMissingPatterns &&
                        0 === e.patterns.length &&
                        (s = !0),
                      s)
                    )
                      continue
                    n.push(i)
                  }
                }
              return { patterns: n, hasMissingPatterns: (e ? e.length : 0) !== n.length }
            }
          }
          t.RuleFactory = d
          class m {
            constructor(e, t) {
              if (e) {
                const t = e.length
                let s = 0,
                  n = [],
                  a = !1
                for (let r = 0; r < t; r++)
                  if ('\\' === e.charAt(r) && r + 1 < t) {
                    const t = e.charAt(r + 1)
                    'z' === t
                      ? (n.push(e.substring(s, r)), n.push('$(?!\\n)(?<!\\n)'), (s = r + 2))
                      : ('A' !== t && 'G' !== t) || (a = !0),
                      r++
                  }
                ;(this.hasAnchor = a),
                  0 === s
                    ? (this.source = e)
                    : (n.push(e.substring(s, t)), (this.source = n.join('')))
              } else (this.hasAnchor = !1), (this.source = e)
              this.hasAnchor
                ? (this._anchorCache = this._buildAnchorCache())
                : (this._anchorCache = null),
                (this.ruleId = t),
                (this.hasBackReferences = r.test(this.source))
            }
            clone() {
              return new m(this.source, this.ruleId)
            }
            setSource(e) {
              this.source !== e &&
                ((this.source = e),
                this.hasAnchor && (this._anchorCache = this._buildAnchorCache()))
            }
            resolveBackReferences(e, t) {
              let s = t.map(t => e.substring(t.start, t.end))
              return (
                (o.lastIndex = 0),
                this.source.replace(o, (e, t) => n.escapeRegExpCharacters(s[parseInt(t, 10)] || ''))
              )
            }
            _buildAnchorCache() {
              let e,
                t,
                s,
                n,
                a = [],
                r = [],
                o = [],
                i = []
              for (e = 0, t = this.source.length; e < t; e++)
                (s = this.source.charAt(e)),
                  (a[e] = s),
                  (r[e] = s),
                  (o[e] = s),
                  (i[e] = s),
                  '\\' === s &&
                    e + 1 < t &&
                    ((n = this.source.charAt(e + 1)),
                    'A' === n
                      ? ((a[e + 1] = '￿'), (r[e + 1] = '￿'), (o[e + 1] = 'A'), (i[e + 1] = 'A'))
                      : 'G' === n
                      ? ((a[e + 1] = '￿'), (r[e + 1] = 'G'), (o[e + 1] = '￿'), (i[e + 1] = 'G'))
                      : ((a[e + 1] = n), (r[e + 1] = n), (o[e + 1] = n), (i[e + 1] = n)),
                    e++)
              return { A0_G0: a.join(''), A0_G1: r.join(''), A1_G0: o.join(''), A1_G1: i.join('') }
            }
            resolveAnchors(e, t) {
              return this.hasAnchor && this._anchorCache
                ? e
                  ? t
                    ? this._anchorCache.A1_G1
                    : this._anchorCache.A1_G0
                  : t
                  ? this._anchorCache.A0_G1
                  : this._anchorCache.A0_G0
                : this.source
            }
          }
          t.RegExpSource = m
          class g {
            constructor() {
              ;(this._items = []),
                (this._hasAnchors = !1),
                (this._cached = null),
                (this._anchorCache = { A0_G0: null, A0_G1: null, A1_G0: null, A1_G1: null })
            }
            dispose() {
              this._disposeCaches()
            }
            _disposeCaches() {
              this._cached && (this._cached.dispose(), (this._cached = null)),
                this._anchorCache.A0_G0 &&
                  (this._anchorCache.A0_G0.dispose(), (this._anchorCache.A0_G0 = null)),
                this._anchorCache.A0_G1 &&
                  (this._anchorCache.A0_G1.dispose(), (this._anchorCache.A0_G1 = null)),
                this._anchorCache.A1_G0 &&
                  (this._anchorCache.A1_G0.dispose(), (this._anchorCache.A1_G0 = null)),
                this._anchorCache.A1_G1 &&
                  (this._anchorCache.A1_G1.dispose(), (this._anchorCache.A1_G1 = null))
            }
            push(e) {
              this._items.push(e), (this._hasAnchors = this._hasAnchors || e.hasAnchor)
            }
            unshift(e) {
              this._items.unshift(e), (this._hasAnchors = this._hasAnchors || e.hasAnchor)
            }
            length() {
              return this._items.length
            }
            setSource(e, t) {
              this._items[e].source !== t && (this._disposeCaches(), this._items[e].setSource(t))
            }
            compile(e) {
              if (!this._cached) {
                let t = this._items.map(e => e.source)
                this._cached = new f(
                  e,
                  t,
                  this._items.map(e => e.ruleId)
                )
              }
              return this._cached
            }
            compileAG(e, t, s) {
              return this._hasAnchors
                ? t
                  ? s
                    ? (this._anchorCache.A1_G1 ||
                        (this._anchorCache.A1_G1 = this._resolveAnchors(e, t, s)),
                      this._anchorCache.A1_G1)
                    : (this._anchorCache.A1_G0 ||
                        (this._anchorCache.A1_G0 = this._resolveAnchors(e, t, s)),
                      this._anchorCache.A1_G0)
                  : s
                  ? (this._anchorCache.A0_G1 ||
                      (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, s)),
                    this._anchorCache.A0_G1)
                  : (this._anchorCache.A0_G0 ||
                      (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, s)),
                    this._anchorCache.A0_G0)
                : this.compile(e)
            }
            _resolveAnchors(e, t, s) {
              let n = this._items.map(e => e.resolveAnchors(t, s))
              return new f(
                e,
                n,
                this._items.map(e => e.ruleId)
              )
            }
          }
          t.RegExpSourceList = g
          class f {
            constructor(e, t, s) {
              ;(this.regExps = t), (this.rules = s), (this.scanner = e.createOnigScanner(t))
            }
            dispose() {
              'function' == typeof this.scanner.dispose && this.scanner.dispose()
            }
            toString() {
              const e = []
              for (let t = 0, s = this.rules.length; t < s; t++)
                e.push('   - ' + this.rules[t] + ': ' + this.regExps[t])
              return e.join('\n')
            }
            findNextMatchSync(e, t, s) {
              const n = this.scanner.findNextMatchSync(e, t, s)
              return n ? { ruleId: this.rules[n.index], captureIndices: n.captureIndices } : null
            }
          }
          t.CompiledRule = f
        },
        583: (e, t, s) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.ThemeTrieElement =
              t.ThemeTrieElementRule =
              t.ColorMap =
              t.fontStyleToString =
              t.ParsedThemeRule =
              t.parseTheme =
              t.StyleAttributes =
              t.ScopeStack =
              t.Theme =
                void 0)
          const n = s(878)
          class a {
            constructor(e, t, s) {
              ;(this._colorMap = e),
                (this._defaults = t),
                (this._root = s),
                (this._cachedMatchRoot = new n.CachedFn(e => this._root.match(e)))
            }
            static createFromRawTheme(e, t) {
              return this.createFromParsedTheme(c(e), t)
            }
            static createFromParsedTheme(e, t) {
              return (function (e, t) {
                e.sort((e, t) => {
                  let s = n.strcmp(e.scope, t.scope)
                  return 0 !== s
                    ? s
                    : ((s = n.strArrCmp(e.parentScopes, t.parentScopes)),
                      0 !== s ? s : e.index - t.index)
                })
                let s = 0,
                  r = '#000000',
                  o = '#ffffff'
                for (; e.length >= 1 && '' === e[0].scope; ) {
                  let t = e.shift()
                  ;-1 !== t.fontStyle && (s = t.fontStyle),
                    null !== t.foreground && (r = t.foreground),
                    null !== t.background && (o = t.background)
                }
                let c = new u(t),
                  l = new i(s, c.getId(r), c.getId(o)),
                  d = new h(new p(0, null, -1, 0, 0), [])
                for (let t = 0, s = e.length; t < s; t++) {
                  let s = e[t]
                  d.insert(
                    0,
                    s.scope,
                    s.parentScopes,
                    s.fontStyle,
                    c.getId(s.foreground),
                    c.getId(s.background)
                  )
                }
                return new a(c, l, d)
              })(e, t)
            }
            getColorMap() {
              return this._colorMap.getColorMap()
            }
            getDefaults() {
              return this._defaults
            }
            match(e) {
              if (null === e) return this._defaults
              const t = e.scopeName,
                s = this._cachedMatchRoot.get(t).find(t =>
                  (function (e, t) {
                    if (null === t) return !0
                    let s = 0,
                      n = t[s]
                    for (; e; ) {
                      if (o(e.scopeName, n)) {
                        if ((s++, s === t.length)) return !0
                        n = t[s]
                      }
                      e = e.parent
                    }
                    return !1
                  })(e.parent, t.parentScopes)
                )
              return s ? new i(s.fontStyle, s.foreground, s.background) : null
            }
          }
          t.Theme = a
          class r {
            constructor(e, t) {
              ;(this.parent = e), (this.scopeName = t)
            }
            static from(...e) {
              let t = null
              for (let s = 0; s < e.length; s++) t = new r(t, e[s])
              return t
            }
            push(e) {
              return new r(this, e)
            }
            getSegments() {
              let e = this
              const t = []
              for (; e; ) t.push(e.scopeName), (e = e.parent)
              return t.reverse(), t
            }
            toString() {
              return this.getSegments().join(' ')
            }
          }
          function o(e, t) {
            return t === e || (e.startsWith(t) && '.' === e[t.length])
          }
          t.ScopeStack = r
          class i {
            constructor(e, t, s) {
              ;(this.fontStyle = e), (this.foregroundId = t), (this.backgroundId = s)
            }
          }
          function c(e) {
            if (!e) return []
            if (!e.settings || !Array.isArray(e.settings)) return []
            let t = e.settings,
              s = [],
              a = 0
            for (let e = 0, r = t.length; e < r; e++) {
              let r,
                o = t[e]
              if (!o.settings) continue
              if ('string' == typeof o.scope) {
                let e = o.scope
                ;(e = e.replace(/^[,]+/, '')), (e = e.replace(/[,]+$/, '')), (r = e.split(','))
              } else r = Array.isArray(o.scope) ? o.scope : ['']
              let i = -1
              if ('string' == typeof o.settings.fontStyle) {
                i = 0
                let e = o.settings.fontStyle.split(' ')
                for (let t = 0, s = e.length; t < s; t++)
                  switch (e[t]) {
                    case 'italic':
                      i |= 1
                      break
                    case 'bold':
                      i |= 2
                      break
                    case 'underline':
                      i |= 4
                      break
                    case 'strikethrough':
                      i |= 8
                  }
              }
              let c = null
              'string' == typeof o.settings.foreground &&
                n.isValidHexColor(o.settings.foreground) &&
                (c = o.settings.foreground)
              let u = null
              'string' == typeof o.settings.background &&
                n.isValidHexColor(o.settings.background) &&
                (u = o.settings.background)
              for (let t = 0, n = r.length; t < n; t++) {
                let n = r[t].trim().split(' '),
                  o = n[n.length - 1],
                  p = null
                n.length > 1 && ((p = n.slice(0, n.length - 1)), p.reverse()),
                  (s[a++] = new l(o, p, e, i, c, u))
              }
            }
            return s
          }
          ;(t.StyleAttributes = i), (t.parseTheme = c)
          class l {
            constructor(e, t, s, n, a, r) {
              ;(this.scope = e),
                (this.parentScopes = t),
                (this.index = s),
                (this.fontStyle = n),
                (this.foreground = a),
                (this.background = r)
            }
          }
          ;(t.ParsedThemeRule = l),
            (t.fontStyleToString = function (e) {
              if (-1 === e) return 'not set'
              let t = ''
              return (
                1 & e && (t += 'italic '),
                2 & e && (t += 'bold '),
                4 & e && (t += 'underline '),
                8 & e && (t += 'strikethrough '),
                '' === t && (t = 'none'),
                t.trim()
              )
            })
          class u {
            constructor(e) {
              if (
                ((this._lastColorId = 0),
                (this._id2color = []),
                (this._color2id = Object.create(null)),
                Array.isArray(e))
              ) {
                this._isFrozen = !0
                for (let t = 0, s = e.length; t < s; t++)
                  (this._color2id[e[t]] = t), (this._id2color[t] = e[t])
              } else this._isFrozen = !1
            }
            getId(e) {
              if (null === e) return 0
              e = e.toUpperCase()
              let t = this._color2id[e]
              if (t) return t
              if (this._isFrozen) throw new Error(`Missing color in color map - ${e}`)
              return (t = ++this._lastColorId), (this._color2id[e] = t), (this._id2color[t] = e), t
            }
            getColorMap() {
              return this._id2color.slice(0)
            }
          }
          t.ColorMap = u
          class p {
            constructor(e, t, s, n, a) {
              ;(this.scopeDepth = e),
                (this.parentScopes = t),
                (this.fontStyle = s),
                (this.foreground = n),
                (this.background = a)
            }
            clone() {
              return new p(
                this.scopeDepth,
                this.parentScopes,
                this.fontStyle,
                this.foreground,
                this.background
              )
            }
            static cloneArr(e) {
              let t = []
              for (let s = 0, n = e.length; s < n; s++) t[s] = e[s].clone()
              return t
            }
            acceptOverwrite(e, t, s, n) {
              this.scopeDepth > e ? console.log('how did this happen?') : (this.scopeDepth = e),
                -1 !== t && (this.fontStyle = t),
                0 !== s && (this.foreground = s),
                0 !== n && (this.background = n)
            }
          }
          t.ThemeTrieElementRule = p
          class h {
            constructor(e, t = [], s = {}) {
              ;(this._mainRule = e), (this._children = s), (this._rulesWithParentScopes = t)
            }
            static _sortBySpecificity(e) {
              return 1 === e.length || e.sort(this._cmpBySpecificity), e
            }
            static _cmpBySpecificity(e, t) {
              if (e.scopeDepth === t.scopeDepth) {
                const s = e.parentScopes,
                  n = t.parentScopes
                let a = null === s ? 0 : s.length,
                  r = null === n ? 0 : n.length
                if (a === r)
                  for (let e = 0; e < a; e++) {
                    const t = s[e].length,
                      a = n[e].length
                    if (t !== a) return a - t
                  }
                return r - a
              }
              return t.scopeDepth - e.scopeDepth
            }
            match(e) {
              if ('' === e)
                return h._sortBySpecificity(
                  [].concat(this._mainRule).concat(this._rulesWithParentScopes)
                )
              let t,
                s,
                n = e.indexOf('.')
              return (
                -1 === n
                  ? ((t = e), (s = ''))
                  : ((t = e.substring(0, n)), (s = e.substring(n + 1))),
                this._children.hasOwnProperty(t)
                  ? this._children[t].match(s)
                  : h._sortBySpecificity(
                      [].concat(this._mainRule).concat(this._rulesWithParentScopes)
                    )
              )
            }
            insert(e, t, s, n, a, r) {
              if ('' === t) return void this._doInsertHere(e, s, n, a, r)
              let o,
                i,
                c,
                l = t.indexOf('.')
              ;-1 === l ? ((o = t), (i = '')) : ((o = t.substring(0, l)), (i = t.substring(l + 1))),
                this._children.hasOwnProperty(o)
                  ? (c = this._children[o])
                  : ((c = new h(this._mainRule.clone(), p.cloneArr(this._rulesWithParentScopes))),
                    (this._children[o] = c)),
                c.insert(e + 1, i, s, n, a, r)
            }
            _doInsertHere(e, t, s, a, r) {
              if (null !== t) {
                for (let o = 0, i = this._rulesWithParentScopes.length; o < i; o++) {
                  let i = this._rulesWithParentScopes[o]
                  if (0 === n.strArrCmp(i.parentScopes, t))
                    return void i.acceptOverwrite(e, s, a, r)
                }
                ;-1 === s && (s = this._mainRule.fontStyle),
                  0 === a && (a = this._mainRule.foreground),
                  0 === r && (r = this._mainRule.background),
                  this._rulesWithParentScopes.push(new p(e, t, s, a, r))
              } else this._mainRule.acceptOverwrite(e, s, a, r)
            }
          }
          t.ThemeTrieElement = h
        },
        878: (e, t) => {
          function s(e) {
            return Array.isArray(e)
              ? (function (e) {
                  let t = []
                  for (let n = 0, a = e.length; n < a; n++) t[n] = s(e[n])
                  return t
                })(e)
              : 'object' == typeof e
              ? (function (e) {
                  let t = {}
                  for (let n in e) t[n] = s(e[n])
                  return t
                })(e)
              : e
          }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.performanceNow =
              t.CachedFn =
              t.escapeRegExpCharacters =
              t.isValidHexColor =
              t.strArrCmp =
              t.strcmp =
              t.RegexSource =
              t.basename =
              t.mergeObjects =
              t.clone =
                void 0),
            (t.clone = function (e) {
              return s(e)
            }),
            (t.mergeObjects = function (e, ...t) {
              return (
                t.forEach(t => {
                  for (let s in t) e[s] = t[s]
                }),
                e
              )
            }),
            (t.basename = function e(t) {
              const s = ~t.lastIndexOf('/') || ~t.lastIndexOf('\\')
              return 0 === s
                ? t
                : ~s == t.length - 1
                ? e(t.substring(0, t.length - 1))
                : t.substr(1 + ~s)
            })
          let n = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g
          function a(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
          }
          ;(t.RegexSource = class {
            static hasCaptures(e) {
              return null !== e && ((n.lastIndex = 0), n.test(e))
            }
            static replaceCaptures(e, t, s) {
              return e.replace(n, (e, n, a, r) => {
                let o = s[parseInt(n || a, 10)]
                if (!o) return e
                {
                  let e = t.substring(o.start, o.end)
                  for (; '.' === e[0]; ) e = e.substring(1)
                  switch (r) {
                    case 'downcase':
                      return e.toLowerCase()
                    case 'upcase':
                      return e.toUpperCase()
                    default:
                      return e
                  }
                }
              })
            }
          }),
            (t.strcmp = a),
            (t.strArrCmp = function (e, t) {
              if (null === e && null === t) return 0
              if (!e) return -1
              if (!t) return 1
              let s = e.length,
                n = t.length
              if (s === n) {
                for (let n = 0; n < s; n++) {
                  let s = a(e[n], t[n])
                  if (0 !== s) return s
                }
                return 0
              }
              return s - n
            }),
            (t.isValidHexColor = function (e) {
              return !!(
                /^#[0-9a-f]{6}$/i.test(e) ||
                /^#[0-9a-f]{8}$/i.test(e) ||
                /^#[0-9a-f]{3}$/i.test(e) ||
                /^#[0-9a-f]{4}$/i.test(e)
              )
            }),
            (t.escapeRegExpCharacters = function (e) {
              return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&')
            }),
            (t.CachedFn = class {
              constructor(e) {
                ;(this.fn = e), (this.cache = new Map())
              }
              get(e) {
                if (this.cache.has(e)) return this.cache.get(e)
                const t = this.fn(e)
                return this.cache.set(e, t), t
              }
            }),
            (t.performanceNow =
              'undefined' == typeof performance
                ? function () {
                    return Date.now()
                  }
                : function () {
                    return performance.now()
                  })
        }
      }),
      (n = {}),
      (function e(t) {
        var a = n[t]
        if (void 0 !== a) return a.exports
        var r = (n[t] = { exports: {} })
        return s[t].call(r.exports, r, r.exports, e), r.exports
      })(787))
  })(B)
  var G = B.exports
  function F(e, t) {
    let s = []
    for (let n = 0, a = t.length; n < a; n++) {
      let a = t.slice(0, n),
        r = t[n]
      s[n] = { scopeName: r, themeMatches: U(e, r, a) }
    }
    return s
  }
  function D(e, t) {
    let s = e + '.'
    return e === t || t.substring(0, s.length) === s
  }
  function $(e, t, s, n) {
    if (!D(e, s)) return !1
    let a = t.length - 1,
      r = n.length - 1
    for (; a >= 0 && r >= 0; ) D(t[a], n[r]) && a--, r--
    return -1 === a
  }
  function U(e, t, s) {
    let n = [],
      a = 0
    for (let r = 0, o = e.settings.length; r < o; r++) {
      let o,
        i = e.settings[r]
      if ('string' == typeof i.scope) o = i.scope.split(/,/).map(e => e.trim())
      else {
        if (!Array.isArray(i.scope)) continue
        o = i.scope
      }
      for (let e = 0, r = o.length; e < r; e++) {
        let c = o[e].split(/ /)
        $(c[c.length - 1], c.slice(0, c.length - 1), t, s) && ((n[a++] = i), (e = r))
      }
    }
    return n
  }
  var W = [
      'black',
      'red',
      'green',
      'yellow',
      'blue',
      'magenta',
      'cyan',
      'white',
      'brightBlack',
      'brightRed',
      'brightGreen',
      'brightYellow',
      'brightBlue',
      'brightMagenta',
      'brightCyan',
      'brightWhite'
    ],
    q = { 1: 'bold', 2: 'dim', 3: 'italic', 4: 'underline', 7: 'reverse', 9: 'strikethrough' }
  function H(e, t) {
    const s = e.indexOf('', t)
    if (-1 !== s && '[' === e[s + 1]) {
      const t = e.indexOf('m', s)
      return { sequence: e.substring(s + 2, t).split(';'), startPosition: s, position: t + 1 }
    }
    return { position: e.length }
  }
  function z(e) {
    const t = e.shift()
    if ('2' === t) {
      const t = e.splice(0, 3).map(e => Number.parseInt(e))
      if (3 !== t.length || t.some(e => Number.isNaN(e))) return
      return { type: 'rgb', rgb: t }
    }
    if ('5' === t) {
      const t = e.shift()
      if (t) return { type: 'table', index: Number(t) }
    }
  }
  function V(e) {
    const t = []
    for (; e.length > 0; ) {
      const s = e.shift()
      if (!s) continue
      const n = Number.parseInt(s)
      if (!Number.isNaN(n))
        if (0 === n) t.push({ type: 'resetAll' })
        else if (n <= 9) {
          q[n] && t.push({ type: 'setDecoration', value: q[n] })
        } else if (n <= 29) {
          const e = q[n - 20]
          e && t.push({ type: 'resetDecoration', value: e })
        } else if (n <= 37)
          t.push({ type: 'setForegroundColor', value: { type: 'named', name: W[n - 30] } })
        else if (38 === n) {
          const s = z(e)
          s && t.push({ type: 'setForegroundColor', value: s })
        } else if (39 === n) t.push({ type: 'resetForegroundColor' })
        else if (n <= 47)
          t.push({ type: 'setBackgroundColor', value: { type: 'named', name: W[n - 40] } })
        else if (48 === n) {
          const s = z(e)
          s && t.push({ type: 'setBackgroundColor', value: s })
        } else
          49 === n
            ? t.push({ type: 'resetBackgroundColor' })
            : n >= 90 && n <= 97
            ? t.push({ type: 'setForegroundColor', value: { type: 'named', name: W[n - 90 + 8] } })
            : n >= 100 &&
              n <= 107 &&
              t.push({ type: 'setBackgroundColor', value: { type: 'named', name: W[n - 100 + 8] } })
    }
    return t
  }
  var K = {
    black: '#000000',
    red: '#bb0000',
    green: '#00bb00',
    yellow: '#bbbb00',
    blue: '#0000bb',
    magenta: '#ff00ff',
    cyan: '#00bbbb',
    white: '#eeeeee',
    brightBlack: '#555555',
    brightRed: '#ff5555',
    brightGreen: '#00ff00',
    brightYellow: '#ffff55',
    brightBlue: '#5555ff',
    brightMagenta: '#ff55ff',
    brightCyan: '#55ffff',
    brightWhite: '#ffffff'
  }
  function J(e = K) {
    function t(t) {
      return e[t]
    }
    function s(e) {
      return `#${e.map(e => Math.max(0, Math.min(e, 255)).toString(16).padStart(2, '0')).join('')}`
    }
    let n
    function a(e) {
      return (function () {
        if (n) return n
        n = []
        for (let e = 0; e < W.length; e++) n.push(t(W[e]))
        let e = [0, 95, 135, 175, 215, 255]
        for (let t = 0; t < 6; t++)
          for (let a = 0; a < 6; a++) for (let r = 0; r < 6; r++) n.push(s([e[t], e[a], e[r]]))
        let a = 8
        for (let e = 0; e < 24; e++, a += 10) n.push(s([a, a, a]))
        return n
      })()[e]
    }
    return {
      value: function (e) {
        switch (e.type) {
          case 'named':
            return t(e.name)
          case 'rgb':
            return s(e.rgb)
          case 'table':
            return a(e.index)
        }
      }
    }
  }
  function Q(e, t) {
    const n = t.split(/\r?\n/),
      a = J(
        Object.fromEntries(
          W.map(t => [t, e.colors[`terminal.ansi${t[0].toUpperCase()}${t.substring(1)}`]])
        )
      ),
      r = (function () {
        let e = null,
          t = null,
          s = new Set()
        return {
          parse(n) {
            const a = []
            let r = 0
            do {
              const o = H(n, r),
                i = o.sequence ? n.substring(r, o.startPosition) : n.substring(r)
              if (
                (i.length > 0 &&
                  a.push({ value: i, foreground: e, background: t, decorations: new Set(s) }),
                o.sequence)
              ) {
                const n = V(o.sequence)
                for (const a of n)
                  'resetAll' === a.type
                    ? ((e = null), (t = null), s.clear())
                    : 'resetForegroundColor' === a.type
                    ? (e = null)
                    : 'resetBackgroundColor' === a.type
                    ? (t = null)
                    : 'resetDecoration' === a.type && s.delete(a.value)
                for (const a of n)
                  'setForegroundColor' === a.type
                    ? (e = a.value)
                    : 'setBackgroundColor' === a.type
                    ? (t = a.value)
                    : 'setDecoration' === a.type && s.add(a.value)
              }
              r = o.position
            } while (r < n.length)
            return a
          }
        }
      })()
    return n.map(t =>
      r.parse(t).map(t => {
        let n
        ;(n = t.decorations.has('reverse')
          ? t.background
            ? a.value(t.background)
            : e.bg
          : t.foreground
          ? a.value(t.foreground)
          : e.fg),
          t.decorations.has('dim') &&
            (n = (function (e) {
              const t = e.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/)
              if (t) {
                if (t[3]) {
                  const e = Math.round(Number.parseInt(t[3], 16) / 2)
                    .toString(16)
                    .padStart(2, '0')
                  return `#${t[1]}${t[2]}${e}`
                }
                return t[2]
                  ? `#${t[1]}${t[2]}80`
                  : `#${Array.from(t[1])
                      .map(e => `${e}${e}`)
                      .join('')}80`
              }
              const s = e.match(/var\((--shiki-color-ansi-[\w-]+)\)/)
              if (s) return `var(${s[1]}-dim)`
              return e
            })(n))
        let r = s.None
        return (
          t.decorations.has('bold') && (r |= s.Bold),
          t.decorations.has('italic') && (r |= s.Italic),
          t.decorations.has('underline') && (r |= s.Underline),
          { content: t.value, color: n, fontStyle: r }
        )
      })
    )
  }
  const X = {
    pre: ({ className: e, style: t, children: s }) =>
      `<pre class="${e}" style="${t}" tabindex="0">${s}</pre>`,
    code: ({ children: e }) => `<code>${e}</code>`,
    line: ({ className: e, children: t }) => `<span class="${e}">${t}</span>`,
    token: ({ style: e, children: t }) => `<span style="${e}">${t}</span>`
  }
  function Y(e, t = {}) {
    const n = t.bg || '#fff',
      a = (function (e, t) {
        const s = new Map()
        for (const n of e) {
          const e = t(n)
          s.has(e) ? s.get(e).push(n) : s.set(e, [n])
        }
        return s
      })(t.lineOptions ?? [], e => e.line),
      r = t.elements || {}
    function o(e = '', t = {}, s) {
      const n = r[e] || X[e]
      return n
        ? ((s = s.filter(Boolean)), n({ ...t, children: 'code' === e ? s.join('\n') : s.join('') }))
        : ''
    }
    return o(
      'pre',
      { className: 'shiki ' + (t.themeName || ''), style: `background-color: ${n}` },
      [
        t.langId ? `<div class="language-id">${t.langId}</div>` : '',
        o(
          'code',
          {},
          e.map((n, r) => {
            const i = r + 1,
              c = (function (e) {
                const t = new Set(['line'])
                for (const s of e) for (const e of s.classes ?? []) t.add(e)
                return Array.from(t)
              })(a.get(i) ?? []).join(' ')
            return o(
              'line',
              { className: c, lines: e, line: n, index: r },
              n.map((e, a) => {
                const r = [`color: ${e.color || t.fg}`]
                return (
                  e.fontStyle & s.Italic && r.push('font-style: italic'),
                  e.fontStyle & s.Bold && r.push('font-weight: bold'),
                  e.fontStyle & s.Underline && r.push('text-decoration: underline'),
                  o('token', { style: r.join('; '), tokens: n, token: e, index: a }, [
                    ((i = e.content), i.replace(/[&<>"']/g, e => Z[e]))
                  ])
                )
                var i
              })
            )
          })
        )
      ]
    )
  }
  const Z = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  class ee extends G.Registry {
    constructor(e) {
      super(e),
        (this._resolver = e),
        (this.themesPath = 'themes/'),
        (this._resolvedThemes = {}),
        (this._resolvedGrammars = {}),
        (this._langGraph = new Map()),
        (this._langMap = t.reduce((e, t) => ((e[t.id] = t), e), {}))
    }
    getTheme(e) {
      return 'string' == typeof e ? this._resolvedThemes[e] : e
    }
    async loadTheme(e) {
      return 'string' == typeof e
        ? (this._resolvedThemes[e] ||
            (this._resolvedThemes[e] = await T(`${this.themesPath}${e}.json`)),
          this._resolvedThemes[e])
        : ((e = R(e)).name && (this._resolvedThemes[e.name] = e), e)
    }
    async loadThemes(e) {
      return await Promise.all(e.map(e => this.loadTheme(e)))
    }
    getLoadedThemes() {
      return Object.keys(this._resolvedThemes)
    }
    getGrammar(e) {
      return this._resolvedGrammars[e]
    }
    async loadLanguage(e) {
      const t = e.embeddedLangs?.reduce(async (e, t, s) => {
          if (!this.getLoadedLanguages().includes(t) && this._resolver.getLangRegistration(t))
            return (
              await this._resolver.loadGrammar(this._resolver.getLangRegistration(t).scopeName),
              (e[this._resolver.getLangRegistration(t).scopeName] = s + 2),
              e
            )
        }, {}),
        s = {
          embeddedLanguages: t,
          balancedBracketSelectors: e.balancedBracketSelectors || ['*'],
          unbalancedBracketSelectors: e.unbalancedBracketSelectors || []
        },
        n = await this.loadGrammarWithConfiguration(e.scopeName, 1, s)
      ;(this._resolvedGrammars[e.id] = n),
        e.aliases &&
          e.aliases.forEach(e => {
            this._resolvedGrammars[e] = n
          })
    }
    async loadLanguages(e) {
      for (const t of e) this.resolveEmbeddedLanguages(t)
      const t = Array.from(this._langGraph.values())
      for (const e of t) this._resolver.addLanguage(e)
      for (const e of t) await this.loadLanguage(e)
    }
    getLoadedLanguages() {
      return Object.keys(this._resolvedGrammars)
    }
    resolveEmbeddedLanguages(e) {
      if ((this._langGraph.has(e.id) || this._langGraph.set(e.id, e), e.embeddedLangs))
        for (const t of e.embeddedLangs) this._langGraph.set(t, this._langMap[t])
    }
  }
  function te(e) {
    return 'string' == typeof e ? t.find(t => t.id === e || t.aliases?.includes(e)) : e
  }
  ;(e.BUNDLED_LANGUAGES = t),
    (e.BUNDLED_THEMES = [
      'andromeda',
      'ayu-dark',
      'ayu-light',
      'ayu-mirage',
      'cobalt2',
      'css-variables',
      'dark-plus',
      'dracula-soft',
      'dracula',
      'github-dark-dimmed',
      'github-dark',
      'github-light',
      'hc_light',
      'light-plus',
      'material-theme-darker',
      'material-theme-lighter',
      'material-theme-ocean',
      'material-theme-palenight',
      'material-theme',
      'min-dark',
      'min-light',
      'monokai',
      'night-owl-light',
      'night-owl',
      'noctis-azureus',
      'noctis-bordo',
      'noctis-hibernus',
      'noctis-lilac',
      'noctis-lux',
      'noctis-minimus',
      'noctis-obscuro',
      'noctis-sereno',
      'noctis-uva',
      'noctis-viola',
      'noctis',
      'nord',
      'one-dark-pro',
      'palenight-mild-contrast',
      'palenight-operator',
      'palenight',
      'pico8',
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
      'tokyo-night-light',
      'tokyo-night-storm',
      'tokyo-night',
      'vitesse-dark',
      'vitesse-light',
      'winter-is-coming-dark',
      'winter-is-coming-light',
      'winter-is-coming'
    ]),
    (e.FontStyle = s),
    (e.getHighlighter = async function (e) {
      const {
          _languages: s,
          _themes: a,
          _wasmPath: r
        } = (function (e) {
          let s = t,
            n = e.themes || [],
            a = e.paths?.wasm ? (e.paths.wasm.endsWith('/') ? e.paths.wasm : e.paths.wasm + '/') : C
          return (
            e.langs && (s = e.langs.map(te)),
            e.theme && n.unshift(e.theme),
            n.length || (n = ['nord']),
            { _languages: s, _themes: n, _wasmPath: a }
          )
        })(e),
        c = new M(
          (async function (e) {
            if (!P) {
              let t
              if (S)
                t =
                  'string' == typeof w
                    ? m.loadWASM({ data: await fetch(A(i(...o(e), 'onig.wasm'))) })
                    : m.loadWASM({ data: w })
              else {
                const e = require('path').join(require.resolve('vscode-oniguruma'), '../onig.wasm'),
                  s = require('fs').readFileSync(e).buffer
                t = m.loadWASM(s)
              }
              P = t.then(() => ({
                createOnigScanner: e => m.createOnigScanner(e),
                createOnigString: e => m.createOnigString(e)
              }))
            }
            return P
          })(r),
          'vscode-oniguruma'
        ),
        l = new ee(c)
      e.paths?.themes &&
        (l.themesPath = e.paths.themes.endsWith('/') ? e.paths.themes : e.paths.themes + '/'),
        e.paths?.languages &&
          (c.languagesPath = e.paths.languages.endsWith('/')
            ? e.paths.languages
            : e.paths.languages + '/')
      const u = (await l.loadThemes(a))[0]
      let p
      await l.loadLanguages(s)
      let h = (function () {
        const e = {
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
        for (let t = 0; t < W.length; t++) {
          const s = `#A${t.toString().padStart(5, '0')}`,
            n = W[t].replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
          e[s] = `var(--shiki-color-ansi-${n})`
        }
        return e
      })()
      function d(e) {
        const t = e ? l.getTheme(e) : u
        if (!t) throw Error(`No theme registration for ${e}`)
        ;(p && p.name === t.name) || (l.setTheme(t), (p = t))
        const s = l.getColorMap()
        return (
          'css' === t.type &&
            (function (e, t) {
              ;(e.bg = h[e.bg] || e.bg),
                (e.fg = h[e.fg] || e.fg),
                Object.entries(e.colors).forEach(([t, s]) => {
                  e.colors[t] = h[s] || s
                }),
                t.forEach((e, s) => {
                  t[s] = h[e] || e
                })
            })(t, s),
          { _theme: t, _colorMap: s }
        )
      }
      function g(e, t = 'text', s, a = { includeExplanation: !0 }) {
        if (
          (function (e) {
            return !e || ['plaintext', 'txt', 'text'].includes(e)
          })(t)
        ) {
          return [...e.split(/\r\n|\r|\n/).map(e => [{ content: e }])]
        }
        const { _grammar: r } = (function (e) {
            const t = l.getGrammar(e)
            if (!t) throw Error(`No language registration for ${e}`)
            return { _grammar: t }
          })(t),
          { _theme: o, _colorMap: i } = d(s)
        return (function (e, t, s, a, r) {
          let o = s.split(/\r\n|\r|\n/),
            i = G.INITIAL,
            c = [],
            l = []
          for (let s = 0, u = o.length; s < u; s++) {
            let u,
              p,
              h,
              d = o[s]
            if ('' === d) {
              ;(c = []), l.push([])
              continue
            }
            r.includeExplanation && ((u = a.tokenizeLine(d, i)), (p = u.tokens), (h = 0))
            let m = a.tokenizeLine2(d, i),
              g = m.tokens.length / 2
            for (let s = 0; s < g; s++) {
              let a = m.tokens[2 * s],
                o = s + 1 < g ? m.tokens[2 * s + 2] : d.length
              if (a === o) continue
              let i = m.tokens[2 * s + 1],
                l = t[n.getForeground(i)],
                u = n.getFontStyle(i),
                f = []
              if (r.includeExplanation) {
                let t = 0
                for (; a + t < o; ) {
                  let s = p[h],
                    n = d.substring(s.startIndex, s.endIndex)
                  ;(t += n.length), f.push({ content: n, scopes: F(e, s.scopes) }), h++
                }
              }
              c.push({ content: d.substring(a, o), color: l, fontStyle: u, explanation: f })
            }
            l.push(c), (c = []), (i = m.ruleStack)
          }
          return l
        })(o, i, e, r, a)
      }
      function f(e, t) {
        const { _theme: s } = d(t)
        return Q(s, e)
      }
      return {
        codeToThemedTokens: g,
        codeToHtml: function (e, t = 'text', s) {
          let n
          n = 'object' == typeof t ? t : { lang: t, theme: s }
          const a = g(e, n.lang, n.theme, { includeExplanation: !1 }),
            { _theme: r } = d(n.theme)
          return Y(a, { fg: r.fg, bg: r.bg, lineOptions: n?.lineOptions, themeName: r.name })
        },
        ansiToThemedTokens: f,
        ansiToHtml: function (e, t) {
          const s = f(e, t?.theme),
            { _theme: n } = d(t?.theme)
          return Y(s, { fg: n.fg, bg: n.bg, lineOptions: t?.lineOptions, themeName: n.name })
        },
        getTheme: e => d(e)._theme,
        loadTheme: async function (e) {
          await l.loadTheme(e)
        },
        loadLanguage: async function (e) {
          const t = te(e)
          c.addLanguage(t), await l.loadLanguage(t)
        },
        getBackgroundColor: function (e) {
          const { _theme: t } = d(e)
          return t.bg
        },
        getForegroundColor: function (e) {
          const { _theme: t } = d(e)
          return t.fg
        },
        getLoadedThemes: function () {
          return l.getLoadedThemes()
        },
        getLoadedLanguages: function () {
          return l.getLoadedLanguages()
        },
        setColorReplacements: function (e) {
          h = e
        }
      }
    }),
    (e.loadTheme = T),
    (e.renderToHtml = Y),
    (e.setCDN = function (e) {
      v = e.endsWith('/') ? e : e + '/'
    }),
    (e.setOnigasmWASM = function (e) {
      j(e)
    }),
    (e.setWasm = j),
    (e.toShikiTheme = R)
})((this.shiki = this.shiki || {}))
