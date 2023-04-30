!(function (e) {
  'use strict'
  const t = [
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
    { id: 'ada', scopeName: 'source.ada', path: 'ada.tmLanguage.json', samplePath: 'ada.sample' },
    { id: 'apache', scopeName: 'source.apacheconf', path: 'apache.tmLanguage.json' },
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
    { id: 'ara', scopeName: 'source.ara', path: 'ara.tmLanguage.json', samplePath: 'ara.sample' },
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
        'stylus',
        'sass',
        'css',
        'scss',
        'less',
        'postcss',
        'tsx'
      ]
    },
    { id: 'awk', scopeName: 'source.awk', path: 'awk.tmLanguage.json', samplePath: 'awk.sample' },
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
    { id: 'bibtex', scopeName: 'text.bibtex', path: 'bibtex.tmLanguage.json' },
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
    { id: 'c', scopeName: 'source.c', path: 'c.tmLanguage.json', samplePath: 'c.sample' },
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
    { id: 'css', scopeName: 'source.css', path: 'css.tmLanguage.json', samplePath: 'css.sample' },
    { id: 'cue', scopeName: 'source.cue', path: 'cue.tmLanguage.json', samplePath: 'cue.sample' },
    { id: 'd', scopeName: 'source.d', path: 'd.tmLanguage.json', samplePath: 'd.sample' },
    {
      id: 'dart',
      scopeName: 'source.dart',
      path: 'dart.tmLanguage.json',
      samplePath: 'dart.sample'
    },
    { id: 'dax', scopeName: 'source.dax', path: 'dax.tmLanguage.json', samplePath: 'dax.sample' },
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
      samplePath: 'docker.sample',
      aliases: ['dockerfile']
    },
    { id: 'dream-maker', scopeName: 'source.dm', path: 'dream-maker.tmLanguage.json' },
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
      id: 'gdresource',
      scopeName: 'source.gdresource',
      path: 'gdresource.tmLanguage.json',
      samplePath: 'gdresource.sample',
      embeddedLangs: ['gdshader', 'gdscript']
    },
    {
      id: 'gdscript',
      scopeName: 'source.gdscript',
      path: 'gdscript.tmLanguage.json',
      samplePath: 'gdscript.sample'
    },
    {
      id: 'gdshader',
      scopeName: 'source.gdshader',
      path: 'gdshader.tmLanguage.json',
      samplePath: 'gdshader.sample'
    },
    { id: 'gherkin', scopeName: 'text.gherkin.feature', path: 'gherkin.tmLanguage.json' },
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
    { id: 'gnuplot', scopeName: 'source.gnuplot', path: 'gnuplot.tmLanguage.json' },
    { id: 'go', scopeName: 'source.go', path: 'go.tmLanguage.json', samplePath: 'go.sample' },
    {
      id: 'graphql',
      scopeName: 'source.graphql',
      path: 'graphql.tmLanguage.json',
      embeddedLangs: ['javascript', 'typescript', 'jsx', 'tsx']
    },
    { id: 'groovy', scopeName: 'source.groovy', path: 'groovy.tmLanguage.json' },
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
    { id: 'hcl', scopeName: 'source.hcl', path: 'hcl.tmLanguage.json', samplePath: 'hcl.sample' },
    { id: 'hlsl', scopeName: 'source.hlsl', path: 'hlsl.tmLanguage.json' },
    {
      id: 'html',
      scopeName: 'text.html.basic',
      path: 'html.tmLanguage.json',
      samplePath: 'html.sample',
      embeddedLangs: ['javascript', 'css']
    },
    {
      id: 'http',
      scopeName: 'source.http',
      path: 'http.tmLanguage.json',
      samplePath: 'http.sample',
      embeddedLangs: ['shellscript', 'json', 'xml', 'graphql']
    },
    {
      id: 'imba',
      scopeName: 'source.imba',
      path: 'imba.tmLanguage.json',
      samplePath: 'imba.sample'
    },
    { id: 'ini', scopeName: 'source.ini', path: 'ini.tmLanguage.json', aliases: ['properties'] },
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
      id: 'jison',
      scopeName: 'source.jison',
      path: 'jison.tmLanguage.json',
      samplePath: 'jison.sample',
      embeddedLangs: ['javascript']
    },
    { id: 'json', scopeName: 'source.json', path: 'json.tmLanguage.json' },
    {
      id: 'json5',
      scopeName: 'source.json5',
      path: 'json5.tmLanguage.json',
      samplePath: 'json5.sample'
    },
    { id: 'jsonc', scopeName: 'source.json.comments', path: 'jsonc.tmLanguage.json' },
    { id: 'jsonnet', scopeName: 'source.jsonnet', path: 'jsonnet.tmLanguage.json' },
    {
      id: 'jssm',
      scopeName: 'source.jssm',
      path: 'jssm.tmLanguage.json',
      samplePath: 'jssm.sample',
      aliases: ['fsl']
    },
    { id: 'jsx', scopeName: 'source.js.jsx', path: 'jsx.tmLanguage.json' },
    {
      id: 'julia',
      scopeName: 'source.julia',
      path: 'julia.tmLanguage.json',
      embeddedLangs: ['cpp', 'python', 'javascript', 'r', 'sql']
    },
    {
      id: 'kotlin',
      scopeName: 'source.kotlin',
      path: 'kotlin.tmLanguage.json',
      samplePath: 'kotlin.sample'
    },
    {
      id: 'kusto',
      scopeName: 'source.kusto',
      path: 'kusto.tmLanguage.json',
      samplePath: 'kusto.sample',
      aliases: ['kql']
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
    { id: 'lisp', scopeName: 'source.lisp', path: 'lisp.tmLanguage.json' },
    { id: 'logo', scopeName: 'source.logo', path: 'logo.tmLanguage.json' },
    { id: 'lua', scopeName: 'source.lua', path: 'lua.tmLanguage.json', embeddedLangs: ['c'] },
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
      embeddedLangs: ['css', 'less', 'scss', 'javascript']
    },
    { id: 'matlab', scopeName: 'source.matlab', path: 'matlab.tmLanguage.json' },
    {
      id: 'mdx',
      scopeName: 'source.mdx',
      path: 'mdx.tmLanguage.json',
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
    { id: 'mermaid', scopeName: 'source.mermaid', path: 'mermaid.tmLanguage.json' },
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
    { id: 'nix', scopeName: 'source.nix', path: 'nix.tmLanguage.json' },
    {
      id: 'objective-c',
      scopeName: 'source.objc',
      path: 'objective-c.tmLanguage.json',
      aliases: ['objc']
    },
    { id: 'objective-cpp', scopeName: 'source.objcpp', path: 'objective-cpp.tmLanguage.json' },
    { id: 'ocaml', scopeName: 'source.ocaml', path: 'ocaml.tmLanguage.json' },
    { id: 'pascal', scopeName: 'source.pascal', path: 'pascal.tmLanguage.json' },
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
    { id: 'plsql', scopeName: 'source.plsql.oracle', path: 'plsql.tmLanguage.json' },
    { id: 'postcss', scopeName: 'source.css.postcss', path: 'postcss.tmLanguage.json' },
    {
      id: 'powerquery',
      scopeName: 'source.powerquery',
      path: 'powerquery.tmLanguage.json',
      samplePath: 'powerquery.sample'
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
    { id: 'prolog', scopeName: 'source.prolog', path: 'prolog.tmLanguage.json' },
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
    { id: 'puppet', scopeName: 'source.puppet', path: 'puppet.tmLanguage.json' },
    { id: 'purescript', scopeName: 'source.purescript', path: 'purescript.tmLanguage.json' },
    {
      id: 'python',
      scopeName: 'source.python',
      path: 'python.tmLanguage.json',
      samplePath: 'python.sample',
      aliases: ['py']
    },
    { id: 'r', scopeName: 'source.r', path: 'r.tmLanguage.json' },
    { id: 'raku', scopeName: 'source.perl.6', path: 'raku.tmLanguage.json', aliases: ['perl6'] },
    {
      id: 'razor',
      scopeName: 'text.aspnetcorerazor',
      path: 'razor.tmLanguage.json',
      embeddedLangs: ['html', 'csharp']
    },
    { id: 'reg', scopeName: 'source.reg', path: 'reg.tmLanguage.json', samplePath: 'reg.sample' },
    { id: 'rel', scopeName: 'source.rel', path: 'rel.tmLanguage.json', samplePath: 'rel.sample' },
    { id: 'riscv', scopeName: 'source.riscv', path: 'riscv.tmLanguage.json' },
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
    { id: 'rust', scopeName: 'source.rust', path: 'rust.tmLanguage.json', aliases: ['rs'] },
    { id: 'sas', scopeName: 'source.sas', path: 'sas.tmLanguage.json', embeddedLangs: ['sql'] },
    { id: 'sass', scopeName: 'source.sass', path: 'sass.tmLanguage.json' },
    { id: 'scala', scopeName: 'source.scala', path: 'scala.tmLanguage.json' },
    { id: 'scheme', scopeName: 'source.scheme', path: 'scheme.tmLanguage.json' },
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
      aliases: ['bash', 'console', 'sh', 'shell', 'zsh']
    },
    { id: 'smalltalk', scopeName: 'source.smalltalk', path: 'smalltalk.tmLanguage.json' },
    { id: 'solidity', scopeName: 'source.solidity', path: 'solidity.tmLanguage.json' },
    {
      id: 'sparql',
      scopeName: 'source.sparql',
      path: 'sparql.tmLanguage.json',
      samplePath: 'sparql.sample',
      embeddedLangs: ['turtle']
    },
    { id: 'sql', scopeName: 'source.sql', path: 'sql.tmLanguage.json' },
    { id: 'ssh-config', scopeName: 'source.ssh-config', path: 'ssh-config.tmLanguage.json' },
    {
      id: 'stata',
      scopeName: 'source.stata',
      path: 'stata.tmLanguage.json',
      samplePath: 'stata.sample',
      embeddedLangs: ['sql']
    },
    { id: 'stylus', scopeName: 'source.stylus', path: 'stylus.tmLanguage.json', aliases: ['styl'] },
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
    { id: 'swift', scopeName: 'source.swift', path: 'swift.tmLanguage.json' },
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
    { id: 'tcl', scopeName: 'source.tcl', path: 'tcl.tmLanguage.json' },
    { id: 'tex', scopeName: 'text.tex', path: 'tex.tmLanguage.json', embeddedLangs: ['r'] },
    { id: 'toml', scopeName: 'source.toml', path: 'toml.tmLanguage.json' },
    { id: 'tsx', scopeName: 'source.tsx', path: 'tsx.tmLanguage.json', samplePath: 'tsx.sample' },
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
    { id: 'v', scopeName: 'source.v', path: 'v.tmLanguage.json', samplePath: 'v.sample' },
    { id: 'vb', scopeName: 'source.asp.vb.net', path: 'vb.tmLanguage.json', aliases: ['cmd'] },
    { id: 'verilog', scopeName: 'source.verilog', path: 'verilog.tmLanguage.json' },
    { id: 'vhdl', scopeName: 'source.vhdl', path: 'vhdl.tmLanguage.json' },
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
    { id: 'wasm', scopeName: 'source.wat', path: 'wasm.tmLanguage.json' },
    { id: 'wenyan', scopeName: 'source.wenyan', path: 'wenyan.tmLanguage.json', aliases: ['文言'] },
    {
      id: 'wgsl',
      scopeName: 'source.wgsl',
      path: 'wgsl.tmLanguage.json',
      samplePath: 'wgsl.sample'
    },
    {
      id: 'wolfram',
      scopeName: 'source.wolfram',
      path: 'wolfram.tmLanguage.json',
      samplePath: 'wolfram.sample'
    },
    { id: 'xml', scopeName: 'text.xml', path: 'xml.tmLanguage.json', embeddedLangs: ['java'] },
    { id: 'xsl', scopeName: 'text.xml.xsl', path: 'xsl.tmLanguage.json', embeddedLangs: ['xml'] },
    { id: 'yaml', scopeName: 'source.yaml', path: 'yaml.tmLanguage.json', aliases: ['yml'] },
    {
      id: 'zenscript',
      scopeName: 'source.zenscript',
      path: 'zenscript.tmLanguage.json',
      samplePath: 'zenscript.sample'
    }
  ]
  var n = (e => (
    (e[(e.NotSet = -1)] = 'NotSet'),
    (e[(e.None = 0)] = 'None'),
    (e[(e.Italic = 1)] = 'Italic'),
    (e[(e.Bold = 2)] = 'Bold'),
    (e[(e.Underline = 4)] = 'Underline'),
    e
  ))(n || {})
  class s {
    static toBinaryStr(e) {
      let t = e.toString(2)
      for (; t.length < 32; ) t = '0' + t
      return t
    }
    static printMetadata(e) {
      let t = s.getLanguageId(e),
        n = s.getTokenType(e),
        r = s.getFontStyle(e),
        a = s.getForeground(e),
        o = s.getBackground(e)
      console.log({ languageId: t, tokenType: n, fontStyle: r, foreground: a, background: o })
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
    static set(e, t, n, r, a, o) {
      let i = s.getLanguageId(e),
        c = s.getTokenType(e),
        l = s.getFontStyle(e),
        u = s.getForeground(e),
        h = s.getBackground(e)
      return (
        0 !== t && (i = t),
        0 !== n && (c = 8 === n ? 0 : n),
        -1 !== r && (l = r),
        0 !== a && (u = a),
        0 !== o && (h = o),
        ((i << 0) |
          (c << 8) |
          (l << 11) |
          ((s.containsBalancedBrackets(e) ? 1 : 0) << 10) |
          (u << 15) |
          (h << 24)) >>>
          0
      )
    }
  }
  function r(e) {
    return e.endsWith('/') || e.endsWith('\\') ? e.slice(0, -1) : e
  }
  function a(e) {
    return e.startsWith('./') ? e.slice(2) : e
  }
  function o(e) {
    const t = e.split(/[\/\\]/g)
    return t.slice(0, t.length - 1)
  }
  function i(...e) {
    return e.map(r).map(a).join('/')
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
        770: function (e, t, n) {
          var s =
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
          const r = s(n(418))
          let a = null,
            o = !1
          class i {
            static _utf8ByteLength(e) {
              let t = 0
              for (let n = 0, s = e.length; n < s; n++) {
                const r = e.charCodeAt(n)
                let a = r,
                  o = !1
                if (r >= 55296 && r <= 56319 && n + 1 < s) {
                  const t = e.charCodeAt(n + 1)
                  t >= 56320 &&
                    t <= 57343 &&
                    ((a = (65536 + ((r - 55296) << 10)) | (t - 56320)), (o = !0))
                }
                ;(t += a <= 127 ? 1 : a <= 2047 ? 2 : a <= 65535 ? 3 : 4), o && n++
              }
              return t
            }
            constructor(e) {
              const t = e.length,
                n = i._utf8ByteLength(e),
                s = n !== t,
                r = s ? new Uint32Array(t + 1) : null
              s && (r[t] = n)
              const a = s ? new Uint32Array(n + 1) : null
              s && (a[n] = t)
              const o = new Uint8Array(n)
              let c = 0
              for (let n = 0; n < t; n++) {
                const i = e.charCodeAt(n)
                let l = i,
                  u = !1
                if (i >= 55296 && i <= 56319 && n + 1 < t) {
                  const t = e.charCodeAt(n + 1)
                  t >= 56320 &&
                    t <= 57343 &&
                    ((l = (65536 + ((i - 55296) << 10)) | (t - 56320)), (u = !0))
                }
                s &&
                  ((r[n] = c),
                  u && (r[n + 1] = c),
                  l <= 127
                    ? (a[c + 0] = n)
                    : l <= 2047
                    ? ((a[c + 0] = n), (a[c + 1] = n))
                    : l <= 65535
                    ? ((a[c + 0] = n), (a[c + 1] = n), (a[c + 2] = n))
                    : ((a[c + 0] = n), (a[c + 1] = n), (a[c + 2] = n), (a[c + 3] = n))),
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
                  u && n++
              }
              ;(this.utf16Length = t),
                (this.utf8Length = n),
                (this.utf16Value = e),
                (this.utf8Value = o),
                (this.utf16OffsetToUtf8 = r),
                (this.utf8OffsetToUtf16 = a)
            }
            createString(e) {
              const t = e._omalloc(this.utf8Length)
              return e.HEAPU8.set(this.utf8Value, t), t
            }
          }
          class c {
            constructor(e) {
              if (((this.id = ++c.LAST_ID), !a)) throw new Error('Must invoke loadWASM first.')
              ;(this._onigBinding = a), (this.content = e)
              const t = new i(e)
              ;(this.utf16Length = t.utf16Length),
                (this.utf8Length = t.utf8Length),
                (this.utf16OffsetToUtf8 = t.utf16OffsetToUtf8),
                (this.utf8OffsetToUtf16 = t.utf8OffsetToUtf16),
                this.utf8Length < 1e4 && !c._sharedPtrInUse
                  ? (c._sharedPtr || (c._sharedPtr = a._omalloc(1e4)),
                    (c._sharedPtrInUse = !0),
                    a.HEAPU8.set(t.utf8Value, c._sharedPtr),
                    (this.ptr = c._sharedPtr))
                  : (this.ptr = t.createString(a))
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
              if (!a) throw new Error('Must invoke loadWASM first.')
              const t = [],
                n = []
              for (let s = 0, r = e.length; s < r; s++) {
                const r = new i(e[s])
                ;(t[s] = r.createString(a)), (n[s] = r.utf8Length)
              }
              const s = a._omalloc(4 * e.length)
              a.HEAPU32.set(t, s / 4)
              const r = a._omalloc(4 * e.length)
              a.HEAPU32.set(n, r / 4)
              const o = a._createOnigScanner(s, r, e.length)
              for (let n = 0, s = e.length; n < s; n++) a._ofree(t[n])
              a._ofree(r),
                a._ofree(s),
                0 === o &&
                  (function (e) {
                    throw new Error(e.UTF8ToString(e._getLastOnigError()))
                  })(a),
                (this._onigBinding = a),
                (this._ptr = o)
            }
            dispose() {
              this._onigBinding._freeOnigScanner(this._ptr)
            }
            findNextMatchSync(e, t, n) {
              let s = o,
                r = 0
              if (
                ('number' == typeof n
                  ? (8 & n && (s = !0), (r = n))
                  : 'boolean' == typeof n && (s = n),
                'string' == typeof e)
              ) {
                e = new c(e)
                const n = this._findNextMatchSync(e, t, s, r)
                return e.dispose(), n
              }
              return this._findNextMatchSync(e, t, s, r)
            }
            _findNextMatchSync(e, t, n, s) {
              const r = this._onigBinding
              let a
              if (
                ((a = n
                  ? r._findNextOnigScannerMatchDbg(
                      this._ptr,
                      e.id,
                      e.ptr,
                      e.utf8Length,
                      e.convertUtf16OffsetToUtf8(t),
                      s
                    )
                  : r._findNextOnigScannerMatch(
                      this._ptr,
                      e.id,
                      e.ptr,
                      e.utf8Length,
                      e.convertUtf16OffsetToUtf8(t),
                      s
                    )),
                0 === a)
              )
                return null
              const o = r.HEAPU32
              let i = a / 4
              const c = o[i++],
                l = o[i++]
              let u = []
              for (let t = 0; t < l; t++) {
                const n = e.convertUtf8OffsetToUtf16(o[i++]),
                  s = e.convertUtf8OffsetToUtf16(o[i++])
                u[t] = { start: n, end: s, length: s - n }
              }
              return { index: c, captureIndices: u }
            }
          }
          t.OnigScanner = l
          let u = !1,
            h = null
          ;(t.loadWASM = function (e) {
            if (u) return h
            let t, n, s, o
            if (
              ((u = !0),
              (function (e) {
                return 'function' == typeof e.instantiator
              })(e))
            )
              (t = e.instantiator), (n = e.print)
            else {
              let s
              !(function (e) {
                return void 0 !== e.data
              })(e)
                ? (s = e)
                : ((s = e.data), (n = e.print)),
                (t = (function (e) {
                  return 'undefined' != typeof Response && e instanceof Response
                })(s)
                  ? 'function' == typeof WebAssembly.instantiateStreaming
                    ? (function (e) {
                        return t => WebAssembly.instantiateStreaming(e, t)
                      })(s)
                    : (function (e) {
                        return async t => {
                          const n = await e.arrayBuffer()
                          return WebAssembly.instantiate(n, t)
                        }
                      })(s)
                  : (function (e) {
                      return t => WebAssembly.instantiate(e, t)
                    })(s))
            }
            return (
              (h = new Promise((e, t) => {
                ;(s = e), (o = t)
              })),
              (function (e, t, n, s) {
                ;(0, r.default)({
                  print: t,
                  instantiateWasm: (t, n) => {
                    if ('undefined' == typeof performance) {
                      const e = () => Date.now()
                      ;(t.env.emscripten_get_now = e),
                        (t.wasi_snapshot_preview1.emscripten_get_now = e)
                    }
                    return e(t).then(e => n(e.instance), s), {}
                  }
                }).then(e => {
                  ;(a = e), n()
                })
              })(t, n, s, o),
              h
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
                n,
                s = void 0 !== (e = e || {}) ? e : {}
              s.ready = new Promise(function (e, s) {
                ;(t = e), (n = s)
              })
              var r,
                a = Object.assign({}, s),
                o = !1
              ;(r = function (e) {
                let t
                return 'function' == typeof readbuffer
                  ? new Uint8Array(readbuffer(e))
                  : ((t = read(e, 'binary')),
                    (function (e, t) {
                      e || N(t)
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
                l = s.print || console.log.bind(console),
                u = s.printErr || console.warn.bind(console)
              Object.assign(s, a),
                (a = null),
                s.arguments && s.arguments,
                s.thisProgram && s.thisProgram,
                s.quit && s.quit,
                s.wasmBinary && (i = s.wasmBinary),
                s.noExitRuntime,
                'object' != typeof WebAssembly && N('no native wasm support detected')
              var h,
                p,
                d,
                m = !1,
                g = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0
              function f(e, t, n) {
                for (var s = t + n, r = t; e[r] && !(r >= s); ) ++r
                if (r - t > 16 && e.buffer && g) return g.decode(e.subarray(t, r))
                for (var a = ''; t < r; ) {
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
                        a += String.fromCharCode(o)
                      else {
                        var l = o - 65536
                        a += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l))
                      }
                    } else a += String.fromCharCode(((31 & o) << 6) | i)
                  } else a += String.fromCharCode(o)
                }
                return a
              }
              function _(e) {
                ;(h = e),
                  (s.HEAP8 = new Int8Array(e)),
                  (s.HEAP16 = new Int16Array(e)),
                  (s.HEAP32 = new Int32Array(e)),
                  (s.HEAPU8 = p = new Uint8Array(e)),
                  (s.HEAPU16 = new Uint16Array(e)),
                  (s.HEAPU32 = d = new Uint32Array(e)),
                  (s.HEAPF32 = new Float32Array(e)),
                  (s.HEAPF64 = new Float64Array(e))
              }
              s.INITIAL_MEMORY
              var b = [],
                y = [],
                k = []
              function L(e) {
                b.unshift(e)
              }
              function v(e) {
                k.unshift(e)
              }
              var S = 0,
                w = null
              function N(e) {
                s.onAbort && s.onAbort(e),
                  u((e = 'Aborted(' + e + ')')),
                  (m = !0),
                  (e += '. Build with -sASSERTIONS for more info.')
                var t = new WebAssembly.RuntimeError(e)
                throw (n(t), t)
              }
              var C,
                j,
                x = 'data:application/octet-stream;base64,'
              function A(e) {
                return e.startsWith(x)
              }
              function P(e) {
                try {
                  if (e == C && i) return new Uint8Array(i)
                  if (r) return r(e)
                  throw 'both async and sync fetching of the wasm failed'
                } catch (e) {
                  N(e)
                }
              }
              function T(e) {
                for (; e.length > 0; ) e.shift()(s)
              }
              function R(e) {
                try {
                  return c.grow((e - h.byteLength + 65535) >>> 16), _(c.buffer), 1
                } catch (e) {}
              }
              A((C = 'onig.wasm')) ||
                (C = (function (e) {
                  return s.locateFile ? s.locateFile(e, '') : '' + e
                })(C)),
                (j = 'undefined' != typeof dateNow ? dateNow : () => performance.now())
              var I = [null, [], []]
              function E(e, t) {
                var n = I[e]
                0 === t || 10 === t ? ((1 === e ? l : u)(f(n, 0)), (n.length = 0)) : n.push(t)
              }
              var O,
                B = {
                  emscripten_get_now: j,
                  emscripten_memcpy_big: function (e, t, n) {
                    p.copyWithin(e, t, t + n)
                  },
                  emscripten_resize_heap: function (e) {
                    var t,
                      n = p.length,
                      s = 2147483648
                    if ((e >>>= 0) > s) return !1
                    for (var r = 1; r <= 4; r *= 2) {
                      var a = n * (1 + 0.2 / r)
                      if (
                        ((a = Math.min(a, e + 100663296)),
                        R(Math.min(s, (t = Math.max(e, a)) + ((65536 - (t % 65536)) % 65536))))
                      )
                        return !0
                    }
                    return !1
                  },
                  fd_write: function (e, t, n, s) {
                    for (var r = 0, a = 0; a < n; a++) {
                      var o = d[t >> 2],
                        i = d[(t + 4) >> 2]
                      t += 8
                      for (var c = 0; c < i; c++) E(e, p[o + c])
                      r += i
                    }
                    return (d[s >> 2] = r), 0
                  }
                }
              function M(e) {
                function n() {
                  O ||
                    ((O = !0),
                    (s.calledRun = !0),
                    m ||
                      (T(y),
                      t(s),
                      s.onRuntimeInitialized && s.onRuntimeInitialized(),
                      (function () {
                        if (s.postRun)
                          for (
                            'function' == typeof s.postRun && (s.postRun = [s.postRun]);
                            s.postRun.length;

                          )
                            v(s.postRun.shift())
                        T(k)
                      })()))
                }
                S > 0 ||
                  ((function () {
                    if (s.preRun)
                      for (
                        'function' == typeof s.preRun && (s.preRun = [s.preRun]);
                        s.preRun.length;

                      )
                        L(s.preRun.shift())
                    T(b)
                  })(),
                  S > 0 ||
                    (s.setStatus
                      ? (s.setStatus('Running...'),
                        setTimeout(function () {
                          setTimeout(function () {
                            s.setStatus('')
                          }, 1),
                            n()
                        }, 1))
                      : n()))
              }
              if (
                ((function () {
                  var e = { env: B, wasi_snapshot_preview1: B }
                  function t(e, t) {
                    var n = e.exports
                    ;(s.asm = n),
                      _((c = s.asm.memory).buffer),
                      s.asm.__indirect_function_table,
                      (function (e) {
                        y.unshift(e)
                      })(s.asm.__wasm_call_ctors),
                      (function (e) {
                        if (
                          (S--,
                          s.monitorRunDependencies && s.monitorRunDependencies(S),
                          0 == S && w)
                        ) {
                          var t = w
                          ;(w = null), t()
                        }
                      })()
                  }
                  function r(e) {
                    t(e.instance)
                  }
                  function a(t) {
                    return (
                      i || !o || 'function' != typeof fetch
                        ? Promise.resolve().then(function () {
                            return P(C)
                          })
                        : fetch(C, { credentials: 'same-origin' })
                            .then(function (e) {
                              if (!e.ok) throw "failed to load wasm binary file at '" + C + "'"
                              return e.arrayBuffer()
                            })
                            .catch(function () {
                              return P(C)
                            })
                    )
                      .then(function (t) {
                        return WebAssembly.instantiate(t, e)
                      })
                      .then(function (e) {
                        return e
                      })
                      .then(t, function (e) {
                        u('failed to asynchronously prepare wasm: ' + e), N(e)
                      })
                  }
                  if (
                    (S++,
                    s.monitorRunDependencies && s.monitorRunDependencies(S),
                    s.instantiateWasm)
                  )
                    try {
                      return s.instantiateWasm(e, t)
                    } catch (e) {
                      u('Module.instantiateWasm callback failed with error: ' + e), n(e)
                    }
                  ;(i ||
                  'function' != typeof WebAssembly.instantiateStreaming ||
                  A(C) ||
                  'function' != typeof fetch
                    ? a(r)
                    : fetch(C, { credentials: 'same-origin' }).then(function (t) {
                        return WebAssembly.instantiateStreaming(t, e).then(r, function (e) {
                          return (
                            u('wasm streaming compile failed: ' + e),
                            u('falling back to ArrayBuffer instantiation'),
                            a(r)
                          )
                        })
                      })
                  ).catch(n)
                })(),
                (s.___wasm_call_ctors = function () {
                  return (s.___wasm_call_ctors = s.asm.__wasm_call_ctors).apply(null, arguments)
                }),
                (s.___errno_location = function () {
                  return (s.___errno_location = s.asm.__errno_location).apply(null, arguments)
                }),
                (s._omalloc = function () {
                  return (s._omalloc = s.asm.omalloc).apply(null, arguments)
                }),
                (s._ofree = function () {
                  return (s._ofree = s.asm.ofree).apply(null, arguments)
                }),
                (s._getLastOnigError = function () {
                  return (s._getLastOnigError = s.asm.getLastOnigError).apply(null, arguments)
                }),
                (s._createOnigScanner = function () {
                  return (s._createOnigScanner = s.asm.createOnigScanner).apply(null, arguments)
                }),
                (s._freeOnigScanner = function () {
                  return (s._freeOnigScanner = s.asm.freeOnigScanner).apply(null, arguments)
                }),
                (s._findNextOnigScannerMatch = function () {
                  return (s._findNextOnigScannerMatch = s.asm.findNextOnigScannerMatch).apply(
                    null,
                    arguments
                  )
                }),
                (s._findNextOnigScannerMatchDbg = function () {
                  return (s._findNextOnigScannerMatchDbg = s.asm.findNextOnigScannerMatchDbg).apply(
                    null,
                    arguments
                  )
                }),
                (s.stackSave = function () {
                  return (s.stackSave = s.asm.stackSave).apply(null, arguments)
                }),
                (s.stackRestore = function () {
                  return (s.stackRestore = s.asm.stackRestore).apply(null, arguments)
                }),
                (s.stackAlloc = function () {
                  return (s.stackAlloc = s.asm.stackAlloc).apply(null, arguments)
                }),
                (s.dynCall_jiji = function () {
                  return (s.dynCall_jiji = s.asm.dynCall_jiji).apply(null, arguments)
                }),
                (s.UTF8ToString = function (e, t) {
                  return e ? f(p, e, t) : ''
                }),
                (w = function e() {
                  O || M(), O || (w = e)
                }),
                s.preInit)
              )
                for (
                  'function' == typeof s.preInit && (s.preInit = [s.preInit]);
                  s.preInit.length > 0;

                )
                  s.preInit.pop()()
              return M(), e.ready
            })
          e.exports = t
        }
      }),
      (t = {}),
      (function n(s) {
        var r = t[s]
        if (void 0 !== r) return r.exports
        var a = (t[s] = { exports: {} })
        return e[s].call(a.exports, a, a.exports, n), a.exports
      })(770)
    )
    var e, t
  }),
    (l.exports = c())
  var u,
    h,
    p,
    d,
    m = l.exports
  function g(e, t = !1) {
    const n = e.length
    let s = 0,
      r = '',
      a = 0,
      o = 16,
      i = 0,
      c = 0,
      l = 0,
      u = 0,
      h = 0
    function p(t, n) {
      let r = 0,
        a = 0
      for (; r < t || !n; ) {
        let t = e.charCodeAt(s)
        if (t >= 48 && t <= 57) a = 16 * a + t - 48
        else if (t >= 65 && t <= 70) a = 16 * a + t - 65 + 10
        else {
          if (!(t >= 97 && t <= 102)) break
          a = 16 * a + t - 97 + 10
        }
        s++, r++
      }
      return r < t && (a = -1), a
    }
    function d() {
      if (((r = ''), (h = 0), (a = s), (c = i), (u = l), s >= n)) return (a = n), (o = 17)
      let t = e.charCodeAt(s)
      if (f(t)) {
        do {
          s++, (r += String.fromCharCode(t)), (t = e.charCodeAt(s))
        } while (f(t))
        return (o = 15)
      }
      if (_(t))
        return (
          s++,
          (r += String.fromCharCode(t)),
          13 === t && 10 === e.charCodeAt(s) && (s++, (r += '\n')),
          i++,
          (l = s),
          (o = 14)
        )
      switch (t) {
        case 123:
          return s++, (o = 1)
        case 125:
          return s++, (o = 2)
        case 91:
          return s++, (o = 3)
        case 93:
          return s++, (o = 4)
        case 58:
          return s++, (o = 6)
        case 44:
          return s++, (o = 5)
        case 34:
          return (
            s++,
            (r = (function () {
              let t = '',
                r = s
              for (;;) {
                if (s >= n) {
                  ;(t += e.substring(r, s)), (h = 2)
                  break
                }
                const a = e.charCodeAt(s)
                if (34 === a) {
                  ;(t += e.substring(r, s)), s++
                  break
                }
                if (92 !== a) {
                  if (a >= 0 && a <= 31) {
                    if (_(a)) {
                      ;(t += e.substring(r, s)), (h = 2)
                      break
                    }
                    h = 6
                  }
                  s++
                } else {
                  if (((t += e.substring(r, s)), s++, s >= n)) {
                    h = 2
                    break
                  }
                  switch (e.charCodeAt(s++)) {
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
                      const e = p(4, !0)
                      e >= 0 ? (t += String.fromCharCode(e)) : (h = 4)
                      break
                    default:
                      h = 5
                  }
                  r = s
                }
              }
              return t
            })()),
            (o = 10)
          )
        case 47:
          const c = s - 1
          if (47 === e.charCodeAt(s + 1)) {
            for (s += 2; s < n && !_(e.charCodeAt(s)); ) s++
            return (r = e.substring(c, s)), (o = 12)
          }
          if (42 === e.charCodeAt(s + 1)) {
            s += 2
            const t = n - 1
            let a = !1
            for (; s < t; ) {
              const t = e.charCodeAt(s)
              if (42 === t && 47 === e.charCodeAt(s + 1)) {
                ;(s += 2), (a = !0)
                break
              }
              s++, _(t) && (13 === t && 10 === e.charCodeAt(s) && s++, i++, (l = s))
            }
            return a || (s++, (h = 1)), (r = e.substring(c, s)), (o = 13)
          }
          return (r += String.fromCharCode(t)), s++, (o = 16)
        case 45:
          if (((r += String.fromCharCode(t)), s++, s === n || !b(e.charCodeAt(s)))) return (o = 16)
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
            (r += (function () {
              let t = s
              if (48 === e.charCodeAt(s)) s++
              else for (s++; s < e.length && b(e.charCodeAt(s)); ) s++
              if (s < e.length && 46 === e.charCodeAt(s)) {
                if ((s++, !(s < e.length && b(e.charCodeAt(s))))) return (h = 3), e.substring(t, s)
                for (s++; s < e.length && b(e.charCodeAt(s)); ) s++
              }
              let n = s
              if (s < e.length && (69 === e.charCodeAt(s) || 101 === e.charCodeAt(s)))
                if (
                  (s++,
                  ((s < e.length && 43 === e.charCodeAt(s)) || 45 === e.charCodeAt(s)) && s++,
                  s < e.length && b(e.charCodeAt(s)))
                ) {
                  for (s++; s < e.length && b(e.charCodeAt(s)); ) s++
                  n = s
                } else h = 3
              return e.substring(t, n)
            })()),
            (o = 11)
          )
        default:
          for (; s < n && m(t); ) s++, (t = e.charCodeAt(s))
          if (a !== s) {
            switch (((r = e.substring(a, s)), r)) {
              case 'true':
                return (o = 8)
              case 'false':
                return (o = 9)
              case 'null':
                return (o = 7)
            }
            return (o = 16)
          }
          return (r += String.fromCharCode(t)), s++, (o = 16)
      }
    }
    function m(e) {
      if (f(e) || _(e)) return !1
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
        ;(s = e), (r = ''), (a = 0), (o = 16), (h = 0)
      },
      getPosition: () => s,
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
      getTokenValue: () => r,
      getTokenOffset: () => a,
      getTokenLength: () => s - a,
      getTokenStartLine: () => c,
      getTokenStartCharacter: () => a - u,
      getTokenError: () => h
    }
  }
  function f(e) {
    return 32 === e || 9 === e
  }
  function _(e) {
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
    })(h || (h = {})),
    (function (e) {
      ;(e[(e.None = 0)] = 'None'),
        (e[(e.UnexpectedEndOfComment = 1)] = 'UnexpectedEndOfComment'),
        (e[(e.UnexpectedEndOfString = 2)] = 'UnexpectedEndOfString'),
        (e[(e.UnexpectedEndOfNumber = 3)] = 'UnexpectedEndOfNumber'),
        (e[(e.InvalidUnicode = 4)] = 'InvalidUnicode'),
        (e[(e.InvalidEscapeCharacter = 5)] = 'InvalidEscapeCharacter'),
        (e[(e.InvalidCharacter = 6)] = 'InvalidCharacter')
    })(p || (p = {})),
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
  const y = function (e, t = [], n = h.DEFAULT) {
    let s = null,
      r = []
    const a = []
    function o(e) {
      Array.isArray(r) ? r.push(e) : null !== s && (r[s] = e)
    }
    return (
      (function (e, t, n = h.DEFAULT) {
        const s = g(e, !1),
          r = []
        function a(e) {
          return e
            ? () =>
                e(
                  s.getTokenOffset(),
                  s.getTokenLength(),
                  s.getTokenStartLine(),
                  s.getTokenStartCharacter()
                )
            : () => !0
        }
        function o(e) {
          return e
            ? () =>
                e(
                  s.getTokenOffset(),
                  s.getTokenLength(),
                  s.getTokenStartLine(),
                  s.getTokenStartCharacter(),
                  () => r.slice()
                )
            : () => !0
        }
        function i(e) {
          return e
            ? t =>
                e(
                  t,
                  s.getTokenOffset(),
                  s.getTokenLength(),
                  s.getTokenStartLine(),
                  s.getTokenStartCharacter()
                )
            : () => !0
        }
        function c(e) {
          return e
            ? t =>
                e(
                  t,
                  s.getTokenOffset(),
                  s.getTokenLength(),
                  s.getTokenStartLine(),
                  s.getTokenStartCharacter(),
                  () => r.slice()
                )
            : () => !0
        }
        const l = o(t.onObjectBegin),
          u = c(t.onObjectProperty),
          p = a(t.onObjectEnd),
          d = o(t.onArrayBegin),
          m = a(t.onArrayEnd),
          f = c(t.onLiteralValue),
          _ = i(t.onSeparator),
          b = a(t.onComment),
          y = i(t.onError),
          k = n && n.disallowComments,
          L = n && n.allowTrailingComma
        function v() {
          for (;;) {
            const e = s.scan()
            switch (s.getTokenError()) {
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
                k || S(11)
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
                k ? S(10) : b()
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
        function S(e, t = [], n = []) {
          if ((y(e), t.length + n.length > 0)) {
            let e = s.getToken()
            for (; 17 !== e; ) {
              if (-1 !== t.indexOf(e)) {
                v()
                break
              }
              if (-1 !== n.indexOf(e)) break
              e = v()
            }
          }
        }
        function w(e) {
          const t = s.getTokenValue()
          return e ? f(t) : (u(t), r.push(t)), v(), !0
        }
        function N() {
          switch (s.getToken()) {
            case 11:
              const e = s.getTokenValue()
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
          return v(), !0
        }
        function C() {
          return 10 !== s.getToken()
            ? (S(3, [], [2, 5]), !1)
            : (w(!1),
              6 === s.getToken() ? (_(':'), v(), A() || S(4, [], [2, 5])) : S(5, [], [2, 5]),
              r.pop(),
              !0)
        }
        function j() {
          l(), v()
          let e = !1
          for (; 2 !== s.getToken() && 17 !== s.getToken(); ) {
            if (5 === s.getToken()) {
              if ((e || S(4, [], []), _(','), v(), 2 === s.getToken() && L)) break
            } else e && S(6, [], [])
            C() || S(4, [], [2, 5]), (e = !0)
          }
          return p(), 2 !== s.getToken() ? S(7, [2], []) : v(), !0
        }
        function x() {
          d(), v()
          let e = !0,
            t = !1
          for (; 4 !== s.getToken() && 17 !== s.getToken(); ) {
            if (5 === s.getToken()) {
              if ((t || S(4, [], []), _(','), v(), 4 === s.getToken() && L)) break
            } else t && S(6, [], [])
            e ? (r.push(0), (e = !1)) : r[r.length - 1]++, A() || S(4, [], [4, 5]), (t = !0)
          }
          return m(), e || r.pop(), 4 !== s.getToken() ? S(8, [4], []) : v(), !0
        }
        function A() {
          switch (s.getToken()) {
            case 3:
              return x()
            case 1:
              return j()
            case 10:
              return w(!0)
            default:
              return N()
          }
        }
        if ((v(), 17 === s.getToken())) return !!n.allowEmptyContent || (S(4, [], []), !1)
        if (!A()) return S(4, [], []), !1
        17 !== s.getToken() && S(9, [], [])
      })(
        e,
        {
          onObjectBegin: () => {
            const e = {}
            o(e), a.push(r), (r = e), (s = null)
          },
          onObjectProperty: e => {
            s = e
          },
          onObjectEnd: () => {
            r = a.pop()
          },
          onArrayBegin: () => {
            const e = []
            o(e), a.push(r), (r = e), (s = null)
          },
          onArrayEnd: () => {
            r = a.pop()
          },
          onLiteralValue: o,
          onError: (e, n, s) => {
            t.push({ error: e, offset: n, length: s })
          }
        },
        n
      ),
      r[0]
    )
  }
  var k
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
  })(k || (k = {}))
  const L = 'undefined' != typeof self && void 0 !== self.WorkerGlobalScope,
    v =
      'process' in globalThis &&
      'undefined' != typeof process &&
      void 0 !== process.release &&
      'node' === process.release.name,
    S = L || !v
  let w = 'https://unpkg.com/shiki@0.14.2/',
    N = ''
  const C = 'dist/'
  function j(e) {
    N = e
  }
  let x = null
  function A(e) {
    if (S) return `${w}${e}`
    {
      const t = require('path')
      return t.isAbsolute(e) ? e : t.resolve(__dirname, '..', e)
    }
  }
  async function P(e) {
    const t = [],
      n = await (async function (e) {
        const t = A(e)
        if (S) return await fetch(t).then(e => e.text())
        {
          const e = require('fs')
          return await e.promises.readFile(t, 'utf-8')
        }
      })(e)
    let s
    try {
      s = JSON.parse(n)
    } catch (e) {
      if (((s = y(n, t, { allowTrailingComma: !0 })), t.length)) throw t[0]
    }
    return s
  }
  async function T(e) {
    const t = R(await P(e))
    if (t.include) {
      const n = await T(i(...o(e), t.include))
      n.settings && (t.settings = n.settings.concat(t.settings)),
        n.bg && !t.bg && (t.bg = n.bg),
        n.colors && (t.colors = { ...n.colors, ...t.colors }),
        delete t.include
    }
    return t
  }
  function R(e) {
    const t = e.type || 'dark',
      n = { name: e.name, type: t, ...e, ...O(e) }
    var s
    return (
      e.include && (n.include = e.include),
      e.tokenColors && ((n.settings = e.tokenColors), delete n.tokenColors),
      (s = n).settings || (s.settings = []),
      (s.settings[0] && s.settings[0].settings && !s.settings[0].scope) ||
        s.settings.unshift({ settings: { foreground: s.fg, background: s.bg } }),
      n
    )
  }
  const I = { light: '#333333', dark: '#bbbbbb' },
    E = { light: '#fffffe', dark: '#1e1e1e' }
  function O(e) {
    let t,
      n,
      s = e.settings ? e.settings : e.tokenColors
    const r = s ? s.find(e => !e.name && !e.scope) : void 0
    return (
      r?.settings?.foreground && (t = r.settings.foreground),
      r?.settings?.background && (n = r.settings.background),
      !t && e?.colors?.['editor.foreground'] && (t = e.colors['editor.foreground']),
      !n && e?.colors?.['editor.background'] && (n = e.colors['editor.background']),
      t || (t = 'light' === e.type ? I.light : I.dark),
      n || (n = 'light' === e.type ? E.light : E.dark),
      { fg: t, bg: n }
    )
  }
  class B {
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
      const n = this.scopeToLangMap[e]
      if (!n) return null
      if (n.grammar) return n.grammar
      const s = await (async function (e) {
        return await P(e)
      })(t.includes(n) ? `${this.languagesPath}${n.path}` : n.path)
      return (n.grammar = s), s
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
  var M = { exports: {} }
  !(function (e, t) {
    var n, s
    e.exports =
      ((n = {
        350: (e, t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.UseOnigurumaFindOptions = t.DebugFlags = void 0),
            (t.DebugFlags = {
              InDebugMode: 'undefined' != typeof process && !!process.env.VSCODE_TEXTMATE_DEBUG
            }),
            (t.UseOnigurumaFindOptions = !1)
        },
        36: (e, t) => {
          var n
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.toOptionalTokenType = t.EncodedTokenAttributes = void 0),
            ((n = t.EncodedTokenAttributes || (t.EncodedTokenAttributes = {})).toBinaryStr =
              function (e) {
                let t = e.toString(2)
                for (; t.length < 32; ) t = '0' + t
                return t
              }),
            (n.print = function (e) {
              const t = n.getLanguageId(e),
                s = n.getTokenType(e),
                r = n.getFontStyle(e),
                a = n.getForeground(e),
                o = n.getBackground(e)
              console.log({
                languageId: t,
                tokenType: s,
                fontStyle: r,
                foreground: a,
                background: o
              })
            }),
            (n.getLanguageId = function (e) {
              return (255 & e) >>> 0
            }),
            (n.getTokenType = function (e) {
              return (768 & e) >>> 8
            }),
            (n.containsBalancedBrackets = function (e) {
              return 0 != (1024 & e)
            }),
            (n.getFontStyle = function (e) {
              return (30720 & e) >>> 11
            }),
            (n.getForeground = function (e) {
              return (16744448 & e) >>> 15
            }),
            (n.getBackground = function (e) {
              return (4278190080 & e) >>> 24
            }),
            (n.set = function (e, t, s, r, a, o, i) {
              let c = n.getLanguageId(e),
                l = n.getTokenType(e),
                u = n.containsBalancedBrackets(e) ? 1 : 0,
                h = n.getFontStyle(e),
                p = n.getForeground(e),
                d = n.getBackground(e)
              return (
                0 !== t && (c = t),
                8 !== s && (l = s),
                null !== r && (u = r ? 1 : 0),
                -1 !== a && (h = a),
                0 !== o && (p = o),
                0 !== i && (d = i),
                ((c << 0) | (l << 8) | (u << 10) | (h << 11) | (p << 15) | (d << 24)) >>> 0
              )
            }),
            (t.toOptionalTokenType = function (e) {
              return e
            })
        },
        996: (e, t, n) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.BasicScopeAttributesProvider = t.BasicScopeAttributes = void 0)
          const s = n(878)
          class r {
            constructor(e, t) {
              ;(this.languageId = e), (this.tokenType = t)
            }
          }
          t.BasicScopeAttributes = r
          class a {
            constructor(e, t) {
              ;(this._getBasicScopeAttributes = new s.CachedFn(e => {
                const t = this._scopeToLanguage(e),
                  n = this._toStandardTokenType(e)
                return new r(t, n)
              })),
                (this._defaultAttributes = new r(e, 8)),
                (this._embeddedLanguagesMatcher = new o(Object.entries(t || {})))
            }
            getDefaultAttributes() {
              return this._defaultAttributes
            }
            getBasicScopeAttributes(e) {
              return null === e ? a._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(e)
            }
            _scopeToLanguage(e) {
              return this._embeddedLanguagesMatcher.match(e) || 0
            }
            _toStandardTokenType(e) {
              const t = e.match(a.STANDARD_TOKEN_TYPE_REGEXP)
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
          ;(t.BasicScopeAttributesProvider = a),
            (a._NULL_SCOPE_METADATA = new r(0, 0)),
            (a.STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/)
          class o {
            constructor(e) {
              if (0 === e.length) (this.values = null), (this.scopesRegExp = null)
              else {
                this.values = new Map(e)
                const t = e.map(([e, t]) => s.escapeRegExpCharacters(e))
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
        947: (e, t, n) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.LineTokens =
              t.BalancedBracketSelectors =
              t.StateStack =
              t.AttributedScopeStack =
              t.Grammar =
              t.createGrammar =
                void 0)
          const s = n(350),
            r = n(36),
            a = n(736),
            o = n(44),
            i = n(792),
            c = n(583),
            l = n(878),
            u = n(996),
            h = n(47)
          function p(e, t, n, s, r) {
            const o = a.createMatchers(t, d),
              c = i.RuleFactory.getCompiledRuleId(n, s, r.repository)
            for (const n of o)
              e.push({
                debugSelector: t,
                matcher: n.matcher,
                ruleId: c,
                grammar: r,
                priority: n.priority
              })
          }
          function d(e, t) {
            if (t.length < e.length) return !1
            let n = 0
            return e.every(e => {
              for (let s = n; s < t.length; s++) if (m(t[s], e)) return (n = s + 1), !0
              return !1
            })
          }
          function m(e, t) {
            if (!e) return !1
            if (e === t) return !0
            const n = t.length
            return e.length > n && e.substr(0, n) === t && '.' === e[n]
          }
          t.createGrammar = function (e, t, n, s, r, a, o, i) {
            return new g(e, t, n, s, r, a, o, i)
          }
          class g {
            constructor(e, t, n, s, r, o, i, c) {
              if (
                ((this._rootScopeName = e),
                (this.balancedBracketSelectors = o),
                (this._onigLib = c),
                (this._basicScopeAttributesProvider = new u.BasicScopeAttributesProvider(n, s)),
                (this._rootId = -1),
                (this._lastRuleId = 0),
                (this._ruleId2desc = [null]),
                (this._includedGrammars = {}),
                (this._grammarRepository = i),
                (this._grammar = f(t, null)),
                (this._injections = null),
                (this._tokenTypeMatchers = []),
                r)
              )
                for (const e of Object.keys(r)) {
                  const t = a.createMatchers(e, d)
                  for (const n of t)
                    this._tokenTypeMatchers.push({ matcher: n.matcher, type: r[e] })
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
                n = (e => (e === this._rootScopeName ? this._grammar : this.getExternalGrammar(e)))(
                  t
                )
              if (n) {
                const s = n.injections
                if (s) for (let t in s) p(e, t, s[t], this, n)
                const r = this._grammarRepository.injections(t)
                r &&
                  r.forEach(t => {
                    const n = this.getExternalGrammar(t)
                    if (n) {
                      const t = n.injectionSelector
                      t && p(e, t, n, this, n)
                    }
                  })
              }
              return e.sort((e, t) => e.priority - t.priority), e
            }
            getInjections() {
              if (
                null === this._injections &&
                ((this._injections = this._collectInjections()),
                s.DebugFlags.InDebugMode && this._injections.length > 0)
              ) {
                console.log(`Grammar ${this._rootScopeName} contains the following injections:`)
                for (const e of this._injections) console.log(`  - ${e.debugSelector}`)
              }
              return this._injections
            }
            registerRule(e) {
              const t = ++this._lastRuleId,
                n = e(i.ruleIdFromNumber(t))
              return (this._ruleId2desc[t] = n), n
            }
            getRule(e) {
              return this._ruleId2desc[i.ruleIdToNumber(e)]
            }
            getExternalGrammar(e, t) {
              if (this._includedGrammars[e]) return this._includedGrammars[e]
              if (this._grammarRepository) {
                const n = this._grammarRepository.lookup(e)
                if (n)
                  return (this._includedGrammars[e] = f(n, t && t.$base)), this._includedGrammars[e]
              }
            }
            tokenizeLine(e, t, n = 0) {
              const s = this._tokenize(e, t, !1, n)
              return {
                tokens: s.lineTokens.getResult(s.ruleStack, s.lineLength),
                ruleStack: s.ruleStack,
                stoppedEarly: s.stoppedEarly
              }
            }
            tokenizeLine2(e, t, n = 0) {
              const s = this._tokenize(e, t, !0, n)
              return {
                tokens: s.lineTokens.getBinaryResult(s.ruleStack, s.lineLength),
                ruleStack: s.ruleStack,
                stoppedEarly: s.stoppedEarly
              }
            }
            _tokenize(e, t, n, s) {
              let a
              if (
                (-1 === this._rootId &&
                  (this._rootId = i.RuleFactory.getCompiledRuleId(
                    this._grammar.repository.$self,
                    this,
                    this._grammar.repository
                  )),
                t && t !== b.NULL)
              )
                (a = !1), t.reset()
              else {
                a = !0
                const e = this._basicScopeAttributesProvider.getDefaultAttributes(),
                  n = this.themeProvider.getDefaults(),
                  s = r.EncodedTokenAttributes.set(
                    0,
                    e.languageId,
                    e.tokenType,
                    null,
                    n.fontStyle,
                    n.foregroundId,
                    n.backgroundId
                  ),
                  o = this.getRule(this._rootId).getName(null, null)
                let i
                ;(i = o ? _.createRootAndLookUpScopeName(o, s, this) : _.createRoot('unknown', s)),
                  (t = new b(null, this._rootId, -1, -1, !1, null, i, i))
              }
              e += '\n'
              const c = this.createOnigString(e),
                l = c.content.length,
                u = new y(n, e, this._tokenTypeMatchers, this.balancedBracketSelectors),
                p = h._tokenizeString(this, c, a, 0, t, u, !0, s)
              return (
                o.disposeOnigString(c),
                { lineLength: l, lineTokens: u, ruleStack: p.stack, stoppedEarly: p.stoppedEarly }
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
          class _ {
            constructor(e, t, n) {
              ;(this.parent = e), (this.scopePath = t), (this.tokenAttributes = n)
            }
            static createRoot(e, t) {
              return new _(null, new c.ScopeStack(null, e), t)
            }
            static createRootAndLookUpScopeName(e, t, n) {
              const s = n.getMetadataForScope(e),
                r = new c.ScopeStack(null, e),
                a = n.themeProvider.themeMatch(r),
                o = _.mergeAttributes(t, s, a)
              return new _(null, r, o)
            }
            get scopeName() {
              return this.scopePath.scopeName
            }
            equals(e) {
              return _._equals(this, e)
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
            static mergeAttributes(e, t, n) {
              let s = -1,
                a = 0,
                o = 0
              return (
                null !== n && ((s = n.fontStyle), (a = n.foregroundId), (o = n.backgroundId)),
                r.EncodedTokenAttributes.set(e, t.languageId, t.tokenType, null, s, a, o)
              )
            }
            pushAttributed(e, t) {
              if (null === e) return this
              if (-1 === e.indexOf(' ')) return _._pushAttributed(this, e, t)
              const n = e.split(/ /g)
              let s = this
              for (const e of n) s = _._pushAttributed(s, e, t)
              return s
            }
            static _pushAttributed(e, t, n) {
              const s = n.getMetadataForScope(t),
                r = e.scopePath.push(t),
                a = n.themeProvider.themeMatch(r),
                o = _.mergeAttributes(e.tokenAttributes, s, a)
              return new _(e, r, o)
            }
            getScopeNames() {
              return this.scopePath.getSegments()
            }
          }
          t.AttributedScopeStack = _
          class b {
            constructor(e, t, n, s, r, a, o, i) {
              ;(this.parent = e),
                (this.ruleId = t),
                (this.beginRuleCapturedEOL = r),
                (this.endRule = a),
                (this.nameScopesList = o),
                (this.contentNameScopesList = i),
                (this._stackElementBrand = void 0),
                (this.depth = this.parent ? this.parent.depth + 1 : 1),
                (this._enterPos = n),
                (this._anchorPos = s)
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
            push(e, t, n, s, r, a, o) {
              return new b(this, e, t, n, s, r, a, o)
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
                      : a.createMatchers(e, d).map(e => e.matcher)
                  )),
                  (this.unbalancedBracketScopes = t.flatMap(e =>
                    a.createMatchers(e, d).map(e => e.matcher)
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
          class y {
            constructor(e, t, n, r) {
              ;(this.balancedBracketSelectors = r),
                (this._emitBinaryTokens = e),
                (this._tokenTypeOverrides = n),
                s.DebugFlags.InDebugMode ? (this._lineText = t) : (this._lineText = null),
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
                let n = e.tokenAttributes,
                  a = !1
                if (
                  (this.balancedBracketSelectors?.matchesAlways && (a = !0),
                  this._tokenTypeOverrides.length > 0 ||
                    (this.balancedBracketSelectors &&
                      !this.balancedBracketSelectors.matchesAlways &&
                      !this.balancedBracketSelectors.matchesNever))
                ) {
                  const t = e.getScopeNames()
                  for (const e of this._tokenTypeOverrides)
                    e.matcher(t) &&
                      (n = r.EncodedTokenAttributes.set(
                        n,
                        0,
                        r.toOptionalTokenType(e.type),
                        null,
                        -1,
                        0,
                        0
                      ))
                  this.balancedBracketSelectors && (a = this.balancedBracketSelectors.match(t))
                }
                if (
                  (a && (n = r.EncodedTokenAttributes.set(n, 0, 8, a, -1, 0, 0)),
                  this._binaryTokens.length > 0 &&
                    this._binaryTokens[this._binaryTokens.length - 1] === n)
                )
                  return void (this._lastTokenEndIndex = t)
                if (s.DebugFlags.InDebugMode) {
                  const n = e.getScopeNames()
                  console.log(
                    '  token: |' +
                      this._lineText.substring(this._lastTokenEndIndex, t).replace(/\n$/, '\\n') +
                      '|'
                  )
                  for (let e = 0; e < n.length; e++) console.log('      * ' + n[e])
                }
                return (
                  this._binaryTokens.push(this._lastTokenEndIndex),
                  this._binaryTokens.push(n),
                  void (this._lastTokenEndIndex = t)
                )
              }
              const n = e.getScopeNames()
              if (s.DebugFlags.InDebugMode) {
                console.log(
                  '  token: |' +
                    this._lineText.substring(this._lastTokenEndIndex, t).replace(/\n$/, '\\n') +
                    '|'
                )
                for (let e = 0; e < n.length; e++) console.log('      * ' + n[e])
              }
              this._tokens.push({ startIndex: this._lastTokenEndIndex, endIndex: t, scopes: n }),
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
              const n = new Uint32Array(this._binaryTokens.length)
              for (let e = 0, t = this._binaryTokens.length; e < t; e++)
                n[e] = this._binaryTokens[e]
              return n
            }
          }
          t.LineTokens = y
        },
        965: (e, t, n) => {
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
          const s = n(878)
          class r {
            constructor(e) {
              this.scopeName = e
            }
            toKey() {
              return this.scopeName
            }
          }
          t.TopLevelRuleReference = r
          class a {
            constructor(e, t) {
              ;(this.scopeName = e), (this.ruleName = t)
            }
            toKey() {
              return `${this.scopeName}#${this.ruleName}`
            }
          }
          t.TopLevelRepositoryRuleReference = a
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
          function i(e, t, n, s) {
            const a = n.lookup(e.scopeName)
            if (!a) {
              if (e.scopeName === t) throw new Error(`No grammar provided for <${t}>`)
              return
            }
            const o = n.lookup(t)
            e instanceof r
              ? l({ baseGrammar: o, selfGrammar: a }, s)
              : c(e.ruleName, { baseGrammar: o, selfGrammar: a, repository: a.repository }, s)
            const i = n.injections(e.scopeName)
            if (i) for (const e of i) s.add(new r(e))
          }
          function c(e, t, n) {
            t.repository && t.repository[e] && u([t.repository[e]], t, n)
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
          function u(e, t, n) {
            for (const o of e) {
              if (n.visitedRule.has(o)) continue
              n.visitedRule.add(o)
              const e = o.repository ? s.mergeObjects({}, t.repository, o.repository) : t.repository
              Array.isArray(o.patterns) && u(o.patterns, { ...t, repository: e }, n)
              const i = o.include
              if (!i) continue
              const h = f(i)
              switch (h.kind) {
                case 0:
                  l({ ...t, selfGrammar: t.baseGrammar }, n)
                  break
                case 1:
                  l(t, n)
                  break
                case 2:
                  c(h.ruleName, { ...t, repository: e }, n)
                  break
                case 3:
                case 4:
                  const s =
                    h.scopeName === t.selfGrammar.scopeName
                      ? t.selfGrammar
                      : h.scopeName === t.baseGrammar.scopeName
                      ? t.baseGrammar
                      : void 0
                  if (s) {
                    const r = { baseGrammar: t.baseGrammar, selfGrammar: s, repository: e }
                    4 === h.kind ? c(h.ruleName, r, n) : l(r, n)
                  } else
                    4 === h.kind ? n.add(new a(h.scopeName, h.ruleName)) : n.add(new r(h.scopeName))
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
                  (this.Q = [new r(this.initialScopeName)])
              }
              processQueue() {
                const e = this.Q
                this.Q = []
                const t = new o()
                for (const n of e) i(n, this.initialScopeName, this.repo, t)
                for (const e of t.references)
                  if (e instanceof r) {
                    if (this.seenFullScopeRequests.has(e.scopeName)) continue
                    this.seenFullScopeRequests.add(e.scopeName), this.Q.push(e)
                  } else {
                    if (this.seenFullScopeRequests.has(e.scopeName)) continue
                    if (this.seenPartialScopeRequests.has(e.toKey())) continue
                    this.seenPartialScopeRequests.add(e.toKey()), this.Q.push(e)
                  }
              }
            })
          class h {
            constructor() {
              this.kind = 0
            }
          }
          t.BaseReference = h
          class p {
            constructor() {
              this.kind = 1
            }
          }
          t.SelfReference = p
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
            if ('$base' === e) return new h()
            if ('$self' === e) return new p()
            const t = e.indexOf('#')
            if (-1 === t) return new m(e)
            if (0 === t) return new d(e.substring(1))
            {
              const n = e.substring(0, t),
                s = e.substring(t + 1)
              return new g(n, s)
            }
          }
          ;(t.TopLevelRepositoryReference = g), (t.parseInclude = f)
        },
        391: function (e, t, n) {
          var s =
              (this && this.__createBinding) ||
              (Object.create
                ? function (e, t, n, s) {
                    void 0 === s && (s = n),
                      Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: function () {
                          return t[n]
                        }
                      })
                  }
                : function (e, t, n, s) {
                    void 0 === s && (s = n), (e[s] = t[n])
                  }),
            r =
              (this && this.__exportStar) ||
              function (e, t) {
                for (var n in e)
                  'default' === n || Object.prototype.hasOwnProperty.call(t, n) || s(t, e, n)
              }
          Object.defineProperty(t, '__esModule', { value: !0 }), r(n(947), t)
        },
        47: (e, t, n) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.LocalStackElement = t._tokenizeString = void 0)
          const s = n(350),
            r = n(44),
            a = n(792),
            o = n(878)
          class i {
            constructor(e, t) {
              ;(this.stack = e), (this.stoppedEarly = t)
            }
          }
          function c(e, t, n, r, c, h, d, m) {
            const g = t.content.length
            let f = !1,
              _ = -1
            if (d) {
              const o = (function (e, t, n, r, o, i) {
                let c = o.beginRuleCapturedEOL ? 0 : -1
                const l = []
                for (let t = o; t; t = t.pop()) {
                  const n = t.getRule(e)
                  n instanceof a.BeginWhileRule && l.push({ rule: n, stack: t })
                }
                for (let h = l.pop(); h; h = l.pop()) {
                  const { ruleScanner: l, findOptions: d } = u(
                      h.rule,
                      e,
                      h.stack.endRule,
                      n,
                      r === c
                    ),
                    m = l.findNextMatchSync(t, r, d)
                  if (
                    (s.DebugFlags.InDebugMode &&
                      (console.log('  scanning for while rule'), console.log(l.toString())),
                    !m)
                  ) {
                    s.DebugFlags.InDebugMode &&
                      console.log(
                        '  popping ' + h.rule.debugName + ' - ' + h.rule.debugWhileRegExp
                      ),
                      (o = h.stack.pop())
                    break
                  }
                  if (m.ruleId !== a.whileRuleId) {
                    o = h.stack.pop()
                    break
                  }
                  m.captureIndices &&
                    m.captureIndices.length &&
                    (i.produce(h.stack, m.captureIndices[0].start),
                    p(e, t, n, h.stack, i, h.rule.whileCaptures, m.captureIndices),
                    i.produce(h.stack, m.captureIndices[0].end),
                    (c = m.captureIndices[0].end),
                    m.captureIndices[0].end > r && ((r = m.captureIndices[0].end), (n = !1)))
                }
                return { stack: o, linePos: r, anchorPosition: c, isFirstLine: n }
              })(e, t, n, r, c, h)
              ;(c = o.stack), (r = o.linePos), (n = o.isFirstLine), (_ = o.anchorPosition)
            }
            const b = Date.now()
            for (; !f; ) {
              if (0 !== m && Date.now() - b > m) return new i(c, !0)
              y()
            }
            return new i(c, !1)
            function y() {
              s.DebugFlags.InDebugMode &&
                (console.log(''),
                console.log(`@@scanNext ${r}: |${t.content.substr(r).replace(/\n$/, '\\n')}|`))
              const i = (function (e, t, n, r, a, i) {
                const c = (function (e, t, n, r, a, i) {
                    const c = a.getRule(e),
                      { ruleScanner: u, findOptions: h } = l(c, e, a.endRule, n, r === i)
                    let p = 0
                    s.DebugFlags.InDebugMode && (p = o.performanceNow())
                    const d = u.findNextMatchSync(t, r, h)
                    if (s.DebugFlags.InDebugMode) {
                      const e = o.performanceNow() - p
                      e > 5 &&
                        console.warn(
                          `Rule ${c.debugName} (${c.id}) matching took ${e} against '${t}'`
                        ),
                        console.log(`  scanning for (linePos: ${r}, anchorPosition: ${i})`),
                        console.log(u.toString()),
                        d &&
                          console.log(
                            `matched rule id: ${d.ruleId} from ${d.captureIndices[0].start} to ${d.captureIndices[0].end}`
                          )
                    }
                    return d ? { captureIndices: d.captureIndices, matchedRuleId: d.ruleId } : null
                  })(e, t, n, r, a, i),
                  u = e.getInjections()
                if (0 === u.length) return c
                const h = (function (e, t, n, r, a, o, i) {
                  let c,
                    u = Number.MAX_VALUE,
                    h = null,
                    p = 0
                  const d = o.contentNameScopesList.getScopeNames()
                  for (let o = 0, m = e.length; o < m; o++) {
                    const m = e[o]
                    if (!m.matcher(d)) continue
                    const g = t.getRule(m.ruleId),
                      { ruleScanner: f, findOptions: _ } = l(g, t, null, r, a === i),
                      b = f.findNextMatchSync(n, a, _)
                    if (!b) continue
                    s.DebugFlags.InDebugMode &&
                      (console.log(`  matched injection: ${m.debugSelector}`),
                      console.log(f.toString()))
                    const y = b.captureIndices[0].start
                    if (
                      !(y >= u) &&
                      ((u = y), (h = b.captureIndices), (c = b.ruleId), (p = m.priority), u === a)
                    )
                      break
                  }
                  return h ? { priorityMatch: -1 === p, captureIndices: h, matchedRuleId: c } : null
                })(u, e, t, n, r, a, i)
                if (!h) return c
                if (!c) return h
                const p = c.captureIndices[0].start,
                  d = h.captureIndices[0].start
                return d < p || (h.priorityMatch && d === p) ? h : c
              })(e, t, n, r, c, _)
              if (!i)
                return (
                  s.DebugFlags.InDebugMode && console.log('  no more matches.'),
                  h.produce(c, g),
                  void (f = !0)
                )
              const u = i.captureIndices,
                d = i.matchedRuleId,
                m = !!(u && u.length > 0) && u[0].end > r
              if (d === a.endRuleId) {
                const a = c.getRule(e)
                s.DebugFlags.InDebugMode &&
                  console.log('  popping ' + a.debugName + ' - ' + a.debugEndRegExp),
                  h.produce(c, u[0].start),
                  (c = c.withContentNameScopesList(c.nameScopesList)),
                  p(e, t, n, c, h, a.endCaptures, u),
                  h.produce(c, u[0].end)
                const o = c
                if (((c = c.parent), (_ = o.getAnchorPos()), !m && o.getEnterPos() === r))
                  return (
                    s.DebugFlags.InDebugMode &&
                      console.error(
                        '[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing'
                      ),
                    (c = o),
                    h.produce(c, g),
                    void (f = !0)
                  )
              } else {
                const o = e.getRule(d)
                h.produce(c, u[0].start)
                const i = c,
                  l = o.getName(t.content, u),
                  b = c.contentNameScopesList.pushAttributed(l, e)
                if (
                  ((c = c.push(d, r, _, u[0].end === g, null, b, b)), o instanceof a.BeginEndRule)
                ) {
                  const r = o
                  s.DebugFlags.InDebugMode &&
                    console.log('  pushing ' + r.debugName + ' - ' + r.debugBeginRegExp),
                    p(e, t, n, c, h, r.beginCaptures, u),
                    h.produce(c, u[0].end),
                    (_ = u[0].end)
                  const a = r.getContentName(t.content, u),
                    l = b.pushAttributed(a, e)
                  if (
                    ((c = c.withContentNameScopesList(l)),
                    r.endHasBackReferences &&
                      (c = c.withEndRule(r.getEndWithResolvedBackReferences(t.content, u))),
                    !m && i.hasSameRuleAs(c))
                  )
                    return (
                      s.DebugFlags.InDebugMode &&
                        console.error(
                          '[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing'
                        ),
                      (c = c.pop()),
                      h.produce(c, g),
                      void (f = !0)
                    )
                } else if (o instanceof a.BeginWhileRule) {
                  const r = o
                  s.DebugFlags.InDebugMode && console.log('  pushing ' + r.debugName),
                    p(e, t, n, c, h, r.beginCaptures, u),
                    h.produce(c, u[0].end),
                    (_ = u[0].end)
                  const a = r.getContentName(t.content, u),
                    l = b.pushAttributed(a, e)
                  if (
                    ((c = c.withContentNameScopesList(l)),
                    r.whileHasBackReferences &&
                      (c = c.withEndRule(r.getWhileWithResolvedBackReferences(t.content, u))),
                    !m && i.hasSameRuleAs(c))
                  )
                    return (
                      s.DebugFlags.InDebugMode &&
                        console.error(
                          '[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing'
                        ),
                      (c = c.pop()),
                      h.produce(c, g),
                      void (f = !0)
                    )
                } else {
                  const r = o
                  if (
                    (s.DebugFlags.InDebugMode &&
                      console.log('  matched ' + r.debugName + ' - ' + r.debugMatchRegExp),
                    p(e, t, n, c, h, r.captures, u),
                    h.produce(c, u[0].end),
                    (c = c.pop()),
                    !m)
                  )
                    return (
                      s.DebugFlags.InDebugMode &&
                        console.error(
                          '[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping'
                        ),
                      (c = c.safePop()),
                      h.produce(c, g),
                      void (f = !0)
                    )
                }
              }
              u[0].end > r && ((r = u[0].end), (n = !1))
            }
          }
          function l(e, t, n, r, a) {
            return s.UseOnigurumaFindOptions
              ? { ruleScanner: e.compile(t, n), findOptions: h(r, a) }
              : { ruleScanner: e.compileAG(t, n, r, a), findOptions: 0 }
          }
          function u(e, t, n, r, a) {
            return s.UseOnigurumaFindOptions
              ? { ruleScanner: e.compileWhile(t, n), findOptions: h(r, a) }
              : { ruleScanner: e.compileWhileAG(t, n, r, a), findOptions: 0 }
          }
          function h(e, t) {
            let n = 0
            return e || (n |= 1), t || (n |= 4), n
          }
          function p(e, t, n, s, a, o, i) {
            if (0 === o.length) return
            const l = t.content,
              u = Math.min(o.length, i.length),
              h = [],
              p = i[0].end
            for (let t = 0; t < u; t++) {
              const u = o[t]
              if (null === u) continue
              const m = i[t]
              if (0 === m.length) continue
              if (m.start > p) break
              for (; h.length > 0 && h[h.length - 1].endPos <= m.start; )
                a.produceFromScopes(h[h.length - 1].scopes, h[h.length - 1].endPos), h.pop()
              if (
                (h.length > 0
                  ? a.produceFromScopes(h[h.length - 1].scopes, m.start)
                  : a.produce(s, m.start),
                u.retokenizeCapturedWithRuleId)
              ) {
                const t = u.getName(l, i),
                  o = s.contentNameScopesList.pushAttributed(t, e),
                  h = u.getContentName(l, i),
                  p = o.pushAttributed(h, e),
                  d = s.push(u.retokenizeCapturedWithRuleId, m.start, -1, !1, null, o, p),
                  g = e.createOnigString(l.substring(0, m.end))
                c(e, g, n && 0 === m.start, m.start, d, a, !1, 0), r.disposeOnigString(g)
                continue
              }
              const g = u.getName(l, i)
              if (null !== g) {
                const t = (
                  h.length > 0 ? h[h.length - 1].scopes : s.contentNameScopesList
                ).pushAttributed(g, e)
                h.push(new d(t, m.end))
              }
            }
            for (; h.length > 0; )
              a.produceFromScopes(h[h.length - 1].scopes, h[h.length - 1].endPos), h.pop()
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
          function n(e, t) {
            throw new Error(
              'Near offset ' + e.pos + ': ' + t + ' ~~~' + e.source.substr(e.pos, 50) + '~~~'
            )
          }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.parseJSON = void 0),
            (t.parseJSON = function (e, t, o) {
              let i = new s(e),
                c = new r(),
                l = 0,
                u = null,
                h = [],
                p = []
              function d() {
                h.push(l), p.push(u)
              }
              function m() {
                ;(l = h.pop()), (u = p.pop())
              }
              function g(e) {
                n(i, e)
              }
              for (; a(i, c); ) {
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
                      ((a(i, c) && 6 === c.type) || g('expected colon'),
                      a(i, c) || g('expected value'),
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
                      let n = {}
                      o && (n.$vscodeTextmateLocation = c.toLocation(t)),
                        (u[e] = n),
                        d(),
                        (l = 1),
                        (u = n)
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
              return 0 !== p.length && g('unclosed constructs'), u
            })
          class s {
            constructor(e) {
              ;(this.source = e),
                (this.pos = 0),
                (this.len = e.length),
                (this.line = 1),
                (this.char = 0)
            }
          }
          class r {
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
          function a(e, t) {
            ;(t.value = null),
              (t.type = 0),
              (t.offset = -1),
              (t.len = -1),
              (t.line = -1),
              (t.char = -1)
            let s,
              r = e.source,
              a = e.pos,
              o = e.len,
              i = e.line,
              c = e.char
            for (;;) {
              if (a >= o) return !1
              if (((s = r.charCodeAt(a)), 32 !== s && 9 !== s && 13 !== s)) {
                if (10 !== s) break
                a++, i++, (c = 0)
              } else a++, c++
            }
            if (((t.offset = a), (t.line = i), (t.char = c), 34 === s)) {
              for (t.type = 1, a++, c++; ; ) {
                if (a >= o) return !1
                if (((s = r.charCodeAt(a)), a++, c++, 92 !== s)) {
                  if (34 === s) break
                } else a++, c++
              }
              t.value = r
                .substring(t.offset + 1, a - 1)
                .replace(/\\u([0-9A-Fa-f]{4})/g, (e, t) => String.fromCodePoint(parseInt(t, 16)))
                .replace(/\\(.)/g, (t, s) => {
                  switch (s) {
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
                      n(e, 'invalid escape sequence')
                  }
                  throw new Error('unreachable')
                })
            } else if (91 === s) (t.type = 2), a++, c++
            else if (123 === s) (t.type = 3), a++, c++
            else if (93 === s) (t.type = 4), a++, c++
            else if (125 === s) (t.type = 5), a++, c++
            else if (58 === s) (t.type = 6), a++, c++
            else if (44 === s) (t.type = 7), a++, c++
            else if (110 === s) {
              if (((t.type = 8), a++, c++, (s = r.charCodeAt(a)), 117 !== s)) return !1
              if ((a++, c++, (s = r.charCodeAt(a)), 108 !== s)) return !1
              if ((a++, c++, (s = r.charCodeAt(a)), 108 !== s)) return !1
              a++, c++
            } else if (116 === s) {
              if (((t.type = 9), a++, c++, (s = r.charCodeAt(a)), 114 !== s)) return !1
              if ((a++, c++, (s = r.charCodeAt(a)), 117 !== s)) return !1
              if ((a++, c++, (s = r.charCodeAt(a)), 101 !== s)) return !1
              a++, c++
            } else if (102 === s) {
              if (((t.type = 10), a++, c++, (s = r.charCodeAt(a)), 97 !== s)) return !1
              if ((a++, c++, (s = r.charCodeAt(a)), 108 !== s)) return !1
              if ((a++, c++, (s = r.charCodeAt(a)), 115 !== s)) return !1
              if ((a++, c++, (s = r.charCodeAt(a)), 101 !== s)) return !1
              a++, c++
            } else
              for (t.type = 11; ; ) {
                if (a >= o) return !1
                if (
                  ((s = r.charCodeAt(a)),
                  !(
                    46 === s ||
                    (s >= 48 && s <= 57) ||
                    101 === s ||
                    69 === s ||
                    45 === s ||
                    43 === s
                  ))
                )
                  break
                a++, c++
              }
            return (
              (t.len = a - t.offset),
              null === t.value && (t.value = r.substr(t.offset, t.len)),
              (e.pos = a),
              (e.line = i),
              (e.char = c),
              !0
            )
          }
        },
        787: function (e, t, n) {
          var s =
              (this && this.__createBinding) ||
              (Object.create
                ? function (e, t, n, s) {
                    void 0 === s && (s = n),
                      Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: function () {
                          return t[n]
                        }
                      })
                  }
                : function (e, t, n, s) {
                    void 0 === s && (s = n), (e[s] = t[n])
                  }),
            r =
              (this && this.__exportStar) ||
              function (e, t) {
                for (var n in e)
                  'default' === n || Object.prototype.hasOwnProperty.call(t, n) || s(t, e, n)
              }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.parseRawGrammar = t.INITIAL = t.Registry = void 0)
          const a = n(391),
            o = n(50),
            i = n(652),
            c = n(583),
            l = n(965)
          r(n(44), t),
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
              loadGrammarWithEmbeddedLanguages(e, t, n) {
                return this.loadGrammarWithConfiguration(e, t, { embeddedLanguages: n })
              }
              loadGrammarWithConfiguration(e, t, n) {
                return this._loadGrammar(
                  e,
                  t,
                  n.embeddedLanguages,
                  n.tokenTypes,
                  new a.BalancedBracketSelectors(
                    n.balancedBracketSelectors || [],
                    n.unbalancedBracketSelectors || []
                  )
                )
              }
              loadGrammar(e) {
                return this._loadGrammar(e, 0, null, null, null)
              }
              async _loadGrammar(e, t, n, s, r) {
                const a = new l.ScopeDependencyProcessor(this._syncRegistry, e)
                for (; a.Q.length > 0; )
                  await Promise.all(a.Q.map(e => this._loadSingleGrammar(e.scopeName))),
                    a.processQueue()
                return this._grammarForScopeName(e, t, n, s, r)
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
                  const n =
                    'function' == typeof this._options.getInjections
                      ? this._options.getInjections(e)
                      : void 0
                  this._syncRegistry.addGrammar(t, n)
                }
              }
              async addGrammar(e, t = [], n = 0, s = null) {
                return (
                  this._syncRegistry.addGrammar(e, t),
                  await this._grammarForScopeName(e.scopeName, n, s)
                )
              }
              _grammarForScopeName(e, t = 0, n = null, s = null, r = null) {
                return this._syncRegistry.grammarForScopeName(e, t, n, s, r)
              }
            }),
            (t.INITIAL = a.StateStack.NULL),
            (t.parseRawGrammar = o.parseRawGrammar)
        },
        736: (e, t) => {
          function n(e) {
            return !!e && !!e.match(/[\w\.:]+/)
          }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.createMatchers = void 0),
            (t.createMatchers = function (e, t) {
              const s = [],
                r = (function (e) {
                  let t = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,
                    n = t.exec(e)
                  return {
                    next: () => {
                      if (!n) return null
                      const s = n[0]
                      return (n = t.exec(e)), s
                    }
                  }
                })(e)
              let a = r.next()
              for (; null !== a; ) {
                let e = 0
                if (2 === a.length && ':' === a.charAt(1)) {
                  switch (a.charAt(0)) {
                    case 'R':
                      e = 1
                      break
                    case 'L':
                      e = -1
                      break
                    default:
                      console.log(`Unknown priority ${a} in scope selector`)
                  }
                  a = r.next()
                }
                let t = i()
                if ((s.push({ matcher: t, priority: e }), ',' !== a)) break
                a = r.next()
              }
              return s
              function o() {
                if ('-' === a) {
                  a = r.next()
                  const e = o()
                  return t => !!e && !e(t)
                }
                if ('(' === a) {
                  a = r.next()
                  const e = (function () {
                    const e = []
                    let t = i()
                    for (; t && (e.push(t), '|' === a || ',' === a); ) {
                      do {
                        a = r.next()
                      } while ('|' === a || ',' === a)
                      t = i()
                    }
                    return t => e.some(e => e(t))
                  })()
                  return ')' === a && (a = r.next()), e
                }
                if (n(a)) {
                  const e = []
                  do {
                    e.push(a), (a = r.next())
                  } while (n(a))
                  return n => t(e, n)
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
        50: (e, t, n) => {
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.parseRawGrammar = void 0)
          const s = n(69),
            r = n(350),
            a = n(974)
          t.parseRawGrammar = function (e, t = null) {
            return null !== t && /\.json$/.test(t)
              ? ((n = e), (o = t), r.DebugFlags.InDebugMode ? a.parseJSON(n, o, !0) : JSON.parse(n))
              : (function (e, t) {
                  return r.DebugFlags.InDebugMode
                    ? s.parseWithLocation(e, t, '$vscodeTextmateLocation')
                    : s.parsePLIST(e)
                })(e, t)
            var n, o
          }
        },
        69: (e, t) => {
          function n(e, t, n) {
            const s = e.length
            let r = 0,
              a = 1,
              o = 0
            function i(t) {
              if (null === n) r += t
              else for (; t > 0; ) 10 === e.charCodeAt(r) ? (r++, a++, (o = 0)) : (r++, o++), t--
            }
            function c(e) {
              null === n ? (r = e) : i(e - r)
            }
            function l() {
              for (; r < s; ) {
                let t = e.charCodeAt(r)
                if (32 !== t && 9 !== t && 13 !== t && 10 !== t) break
                i(1)
              }
            }
            function u(t) {
              return e.substr(r, t.length) === t && (i(t.length), !0)
            }
            function h(t) {
              let n = e.indexOf(t, r)
              c(-1 !== n ? n + t.length : s)
            }
            function p(t) {
              let n = e.indexOf(t, r)
              if (-1 !== n) {
                let s = e.substring(r, n)
                return c(n + t.length), s
              }
              {
                let t = e.substr(r)
                return c(s), t
              }
            }
            s > 0 && 65279 === e.charCodeAt(0) && (r = 1)
            let d = 0,
              m = null,
              g = [],
              f = [],
              _ = null
            function b(e, t) {
              g.push(d), f.push(m), (d = e), (m = t)
            }
            function y() {
              if (0 === g.length) return k('illegal state stack')
              ;(d = g.pop()), (m = f.pop())
            }
            function k(t) {
              throw new Error('Near offset ' + r + ': ' + t + ' ~~~' + e.substr(r, 50) + '~~~')
            }
            const L = function () {
                if (null === _) return k('missing <key>')
                let e = {}
                null !== n && (e[n] = { filename: t, line: a, char: o }),
                  (m[_] = e),
                  (_ = null),
                  b(1, e)
              },
              v = function () {
                if (null === _) return k('missing <key>')
                let e = []
                ;(m[_] = e), (_ = null), b(2, e)
              },
              S = function () {
                let e = {}
                null !== n && (e[n] = { filename: t, line: a, char: o }), m.push(e), b(1, e)
              },
              w = function () {
                let e = []
                m.push(e), b(2, e)
              }
            function N() {
              if (1 !== d) return k('unexpected </dict>')
              y()
            }
            function C() {
              return 1 === d || 2 !== d ? k('unexpected </array>') : void y()
            }
            function j(e) {
              if (1 === d) {
                if (null === _) return k('missing <key>')
                ;(m[_] = e), (_ = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function x(e) {
              if (isNaN(e)) return k('cannot parse float')
              if (1 === d) {
                if (null === _) return k('missing <key>')
                ;(m[_] = e), (_ = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function A(e) {
              if (isNaN(e)) return k('cannot parse integer')
              if (1 === d) {
                if (null === _) return k('missing <key>')
                ;(m[_] = e), (_ = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function P(e) {
              if (1 === d) {
                if (null === _) return k('missing <key>')
                ;(m[_] = e), (_ = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function T(e) {
              if (1 === d) {
                if (null === _) return k('missing <key>')
                ;(m[_] = e), (_ = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function R(e) {
              if (1 === d) {
                if (null === _) return k('missing <key>')
                ;(m[_] = e), (_ = null)
              } else 2 === d ? m.push(e) : (m = e)
            }
            function I() {
              let e = p('>'),
                t = !1
              return (
                47 === e.charCodeAt(e.length - 1) && ((t = !0), (e = e.substring(0, e.length - 1))),
                { name: e.trim(), isClosed: t }
              )
            }
            function E(e) {
              if (e.isClosed) return ''
              let t = p('</')
              return (
                h('>'),
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
            for (; r < s && (l(), !(r >= s)); ) {
              const c = e.charCodeAt(r)
              if ((i(1), 60 !== c)) return k('expected <')
              if (r >= s) return k('unexpected end of input')
              const p = e.charCodeAt(r)
              if (63 === p) {
                i(1), h('?>')
                continue
              }
              if (33 === p) {
                if ((i(1), u('--'))) {
                  h('--\x3e')
                  continue
                }
                h('>')
                continue
              }
              if (47 === p) {
                if ((i(1), l(), u('plist'))) {
                  h('>')
                  continue
                }
                if (u('dict')) {
                  h('>'), N()
                  continue
                }
                if (u('array')) {
                  h('>'), C()
                  continue
                }
                return k('unexpected closed tag')
              }
              let g = I()
              switch (g.name) {
                case 'dict':
                  1 === d
                    ? L()
                    : 2 === d
                    ? S()
                    : ((m = {}), null !== n && (m[n] = { filename: t, line: a, char: o }), b(1, m)),
                    g.isClosed && N()
                  continue
                case 'array':
                  1 === d ? v() : 2 === d ? w() : ((m = []), b(2, m)), g.isClosed && C()
                  continue
                case 'key':
                  ;(O = E(g)),
                    1 !== d ? k('unexpected <key>') : null !== _ ? k('too many <key>') : (_ = O)
                  continue
                case 'string':
                  j(E(g))
                  continue
                case 'real':
                  x(parseFloat(E(g)))
                  continue
                case 'integer':
                  A(parseInt(E(g), 10))
                  continue
                case 'date':
                  P(new Date(E(g)))
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
              if (!/^plist/.test(g.name)) return k('unexpected opened tag ' + g.name)
            }
            var O
            return m
          }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.parsePLIST = t.parseWithLocation = void 0),
            (t.parseWithLocation = function (e, t, s) {
              return n(e, t, s)
            }),
            (t.parsePLIST = function (e) {
              return n(e, null, null)
            })
        },
        652: (e, t, n) => {
          Object.defineProperty(t, '__esModule', { value: !0 }), (t.SyncRegistry = void 0)
          const s = n(391)
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
            async grammarForScopeName(e, t, n, r, a) {
              if (!this._grammars.has(e)) {
                let o = this._rawGrammars.get(e)
                if (!o) return null
                this._grammars.set(
                  e,
                  s.createGrammar(e, o, t, n, r, a, this, await this._onigLibPromise)
                )
              }
              return this._grammars.get(e)
            }
          }
        },
        792: (e, t, n) => {
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
          const s = n(878),
            r = n(965),
            a = /\\(\d+)/,
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
            constructor(e, t, n, r) {
              ;(this.$location = e),
                (this.id = t),
                (this._name = n || null),
                (this._nameIsCapturing = s.RegexSource.hasCaptures(this._name)),
                (this._contentName = r || null),
                (this._contentNameIsCapturing = s.RegexSource.hasCaptures(this._contentName))
            }
            get debugName() {
              const e = this.$location
                ? `${s.basename(this.$location.filename)}:${this.$location.line}`
                : 'unknown'
              return `${this.constructor.name}#${this.id} @ ${e}`
            }
            getName(e, t) {
              return this._nameIsCapturing && null !== this._name && null !== e && null !== t
                ? s.RegexSource.replaceCaptures(this._name, e, t)
                : this._name
            }
            getContentName(e, t) {
              return this._contentNameIsCapturing && null !== this._contentName
                ? s.RegexSource.replaceCaptures(this._contentName, e, t)
                : this._contentName
            }
          }
          t.Rule = i
          class c extends i {
            constructor(e, t, n, s, r) {
              super(e, t, n, s), (this.retokenizeCapturedWithRuleId = r)
            }
            dispose() {}
            collectPatterns(e, t) {
              throw new Error('Not supported!')
            }
            compile(e, t) {
              throw new Error('Not supported!')
            }
            compileAG(e, t, n, s) {
              throw new Error('Not supported!')
            }
          }
          t.CaptureRule = c
          class l extends i {
            constructor(e, t, n, s, r) {
              super(e, t, n, null),
                (this._match = new m(s, this.id)),
                (this.captures = r),
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
            compileAG(e, t, n, s) {
              return this._getCachedCompiledPatterns(e).compileAG(e, n, s)
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
            constructor(e, t, n, s, r) {
              super(e, t, n, s),
                (this.patterns = r.patterns),
                (this.hasMissingPatterns = r.hasMissingPatterns),
                (this._cachedCompiledPatterns = null)
            }
            dispose() {
              this._cachedCompiledPatterns &&
                (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null))
            }
            collectPatterns(e, t) {
              for (const n of this.patterns) e.getRule(n).collectPatterns(e, t)
            }
            compile(e, t) {
              return this._getCachedCompiledPatterns(e).compile(e)
            }
            compileAG(e, t, n, s) {
              return this._getCachedCompiledPatterns(e).compileAG(e, n, s)
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
          class h extends i {
            constructor(e, t, n, s, r, a, o, i, c, l) {
              super(e, t, n, s),
                (this._begin = new m(r, this.id)),
                (this.beginCaptures = a),
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
            compileAG(e, t, n, s) {
              return this._getCachedCompiledPatterns(e, t).compileAG(e, n, s)
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
          t.BeginEndRule = h
          class p extends i {
            constructor(e, n, s, r, a, o, i, c, l) {
              super(e, n, s, r),
                (this._begin = new m(a, this.id)),
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
            compileAG(e, t, n, s) {
              return this._getCachedCompiledPatterns(e).compileAG(e, n, s)
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
            compileWhileAG(e, t, n, s) {
              return this._getCachedCompiledWhilePatterns(e, t).compileAG(e, n, s)
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
          t.BeginWhileRule = p
          class d {
            static createCaptureRule(e, t, n, s, r) {
              return e.registerRule(e => new c(t, e, n, s, r))
            }
            static getCompiledRuleId(e, t, n) {
              return (
                e.id ||
                  t.registerRule(r => {
                    if (((e.id = r), e.match))
                      return new l(
                        e.$vscodeTextmateLocation,
                        e.id,
                        e.name,
                        e.match,
                        d._compileCaptures(e.captures, t, n)
                      )
                    if (void 0 === e.begin) {
                      e.repository && (n = s.mergeObjects({}, n, e.repository))
                      let r = e.patterns
                      return (
                        void 0 === r && e.include && (r = [{ include: e.include }]),
                        new u(
                          e.$vscodeTextmateLocation,
                          e.id,
                          e.name,
                          e.contentName,
                          d._compilePatterns(r, t, n)
                        )
                      )
                    }
                    return e.while
                      ? new p(
                          e.$vscodeTextmateLocation,
                          e.id,
                          e.name,
                          e.contentName,
                          e.begin,
                          d._compileCaptures(e.beginCaptures || e.captures, t, n),
                          e.while,
                          d._compileCaptures(e.whileCaptures || e.captures, t, n),
                          d._compilePatterns(e.patterns, t, n)
                        )
                      : new h(
                          e.$vscodeTextmateLocation,
                          e.id,
                          e.name,
                          e.contentName,
                          e.begin,
                          d._compileCaptures(e.beginCaptures || e.captures, t, n),
                          e.end,
                          d._compileCaptures(e.endCaptures || e.captures, t, n),
                          e.applyEndPatternLast,
                          d._compilePatterns(e.patterns, t, n)
                        )
                  }),
                e.id
              )
            }
            static _compileCaptures(e, t, n) {
              let s = []
              if (e) {
                let r = 0
                for (const t in e) {
                  if ('$vscodeTextmateLocation' === t) continue
                  const e = parseInt(t, 10)
                  e > r && (r = e)
                }
                for (let e = 0; e <= r; e++) s[e] = null
                for (const r in e) {
                  if ('$vscodeTextmateLocation' === r) continue
                  const a = parseInt(r, 10)
                  let o = 0
                  e[r].patterns && (o = d.getCompiledRuleId(e[r], t, n)),
                    (s[a] = d.createCaptureRule(
                      t,
                      e[r].$vscodeTextmateLocation,
                      e[r].name,
                      e[r].contentName,
                      o
                    ))
                }
              }
              return s
            }
            static _compilePatterns(e, t, n) {
              let s = []
              if (e)
                for (let a = 0, o = e.length; a < o; a++) {
                  const o = e[a]
                  let i = -1
                  if (o.include) {
                    const e = r.parseInclude(o.include)
                    switch (e.kind) {
                      case 0:
                      case 1:
                        i = d.getCompiledRuleId(n[o.include], t, n)
                        break
                      case 2:
                        let s = n[e.ruleName]
                        s && (i = d.getCompiledRuleId(s, t, n))
                        break
                      case 3:
                      case 4:
                        const r = e.scopeName,
                          a = 4 === e.kind ? e.ruleName : null,
                          c = t.getExternalGrammar(r, n)
                        if (c)
                          if (a) {
                            let e = c.repository[a]
                            e && (i = d.getCompiledRuleId(e, t, c.repository))
                          } else i = d.getCompiledRuleId(c.repository.$self, t, c.repository)
                    }
                  } else i = d.getCompiledRuleId(o, t, n)
                  if (-1 !== i) {
                    const e = t.getRule(i)
                    let n = !1
                    if (
                      ((e instanceof u || e instanceof h || e instanceof p) &&
                        e.hasMissingPatterns &&
                        0 === e.patterns.length &&
                        (n = !0),
                      n)
                    )
                      continue
                    s.push(i)
                  }
                }
              return { patterns: s, hasMissingPatterns: (e ? e.length : 0) !== s.length }
            }
          }
          t.RuleFactory = d
          class m {
            constructor(e, t) {
              if (e) {
                const t = e.length
                let n = 0,
                  s = [],
                  r = !1
                for (let a = 0; a < t; a++)
                  if ('\\' === e.charAt(a) && a + 1 < t) {
                    const t = e.charAt(a + 1)
                    'z' === t
                      ? (s.push(e.substring(n, a)), s.push('$(?!\\n)(?<!\\n)'), (n = a + 2))
                      : ('A' !== t && 'G' !== t) || (r = !0),
                      a++
                  }
                ;(this.hasAnchor = r),
                  0 === n
                    ? (this.source = e)
                    : (s.push(e.substring(n, t)), (this.source = s.join('')))
              } else (this.hasAnchor = !1), (this.source = e)
              this.hasAnchor
                ? (this._anchorCache = this._buildAnchorCache())
                : (this._anchorCache = null),
                (this.ruleId = t),
                (this.hasBackReferences = a.test(this.source))
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
              let n = t.map(t => e.substring(t.start, t.end))
              return (
                (o.lastIndex = 0),
                this.source.replace(o, (e, t) => s.escapeRegExpCharacters(n[parseInt(t, 10)] || ''))
              )
            }
            _buildAnchorCache() {
              let e,
                t,
                n,
                s,
                r = [],
                a = [],
                o = [],
                i = []
              for (e = 0, t = this.source.length; e < t; e++)
                (n = this.source.charAt(e)),
                  (r[e] = n),
                  (a[e] = n),
                  (o[e] = n),
                  (i[e] = n),
                  '\\' === n &&
                    e + 1 < t &&
                    ((s = this.source.charAt(e + 1)),
                    'A' === s
                      ? ((r[e + 1] = '￿'), (a[e + 1] = '￿'), (o[e + 1] = 'A'), (i[e + 1] = 'A'))
                      : 'G' === s
                      ? ((r[e + 1] = '￿'), (a[e + 1] = 'G'), (o[e + 1] = '￿'), (i[e + 1] = 'G'))
                      : ((r[e + 1] = s), (a[e + 1] = s), (o[e + 1] = s), (i[e + 1] = s)),
                    e++)
              return { A0_G0: r.join(''), A0_G1: a.join(''), A1_G0: o.join(''), A1_G1: i.join('') }
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
            compileAG(e, t, n) {
              return this._hasAnchors
                ? t
                  ? n
                    ? (this._anchorCache.A1_G1 ||
                        (this._anchorCache.A1_G1 = this._resolveAnchors(e, t, n)),
                      this._anchorCache.A1_G1)
                    : (this._anchorCache.A1_G0 ||
                        (this._anchorCache.A1_G0 = this._resolveAnchors(e, t, n)),
                      this._anchorCache.A1_G0)
                  : n
                  ? (this._anchorCache.A0_G1 ||
                      (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, n)),
                    this._anchorCache.A0_G1)
                  : (this._anchorCache.A0_G0 ||
                      (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, n)),
                    this._anchorCache.A0_G0)
                : this.compile(e)
            }
            _resolveAnchors(e, t, n) {
              let s = this._items.map(e => e.resolveAnchors(t, n))
              return new f(
                e,
                s,
                this._items.map(e => e.ruleId)
              )
            }
          }
          t.RegExpSourceList = g
          class f {
            constructor(e, t, n) {
              ;(this.regExps = t), (this.rules = n), (this.scanner = e.createOnigScanner(t))
            }
            dispose() {
              'function' == typeof this.scanner.dispose && this.scanner.dispose()
            }
            toString() {
              const e = []
              for (let t = 0, n = this.rules.length; t < n; t++)
                e.push('   - ' + this.rules[t] + ': ' + this.regExps[t])
              return e.join('\n')
            }
            findNextMatchSync(e, t, n) {
              const s = this.scanner.findNextMatchSync(e, t, n)
              return s ? { ruleId: this.rules[s.index], captureIndices: s.captureIndices } : null
            }
          }
          t.CompiledRule = f
        },
        583: (e, t, n) => {
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
          const s = n(878)
          class r {
            constructor(e, t, n) {
              ;(this._colorMap = e),
                (this._defaults = t),
                (this._root = n),
                (this._cachedMatchRoot = new s.CachedFn(e => this._root.match(e)))
            }
            static createFromRawTheme(e, t) {
              return this.createFromParsedTheme(c(e), t)
            }
            static createFromParsedTheme(e, t) {
              return (function (e, t) {
                e.sort((e, t) => {
                  let n = s.strcmp(e.scope, t.scope)
                  return 0 !== n
                    ? n
                    : ((n = s.strArrCmp(e.parentScopes, t.parentScopes)),
                      0 !== n ? n : e.index - t.index)
                })
                let n = 0,
                  a = '#000000',
                  o = '#ffffff'
                for (; e.length >= 1 && '' === e[0].scope; ) {
                  let t = e.shift()
                  ;-1 !== t.fontStyle && (n = t.fontStyle),
                    null !== t.foreground && (a = t.foreground),
                    null !== t.background && (o = t.background)
                }
                let c = new u(t),
                  l = new i(n, c.getId(a), c.getId(o)),
                  d = new p(new h(0, null, -1, 0, 0), [])
                for (let t = 0, n = e.length; t < n; t++) {
                  let n = e[t]
                  d.insert(
                    0,
                    n.scope,
                    n.parentScopes,
                    n.fontStyle,
                    c.getId(n.foreground),
                    c.getId(n.background)
                  )
                }
                return new r(c, l, d)
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
                n = this._cachedMatchRoot.get(t).find(t =>
                  (function (e, t) {
                    if (null === t) return !0
                    let n = 0,
                      s = t[n]
                    for (; e; ) {
                      if (o(e.scopeName, s)) {
                        if ((n++, n === t.length)) return !0
                        s = t[n]
                      }
                      e = e.parent
                    }
                    return !1
                  })(e.parent, t.parentScopes)
                )
              return n ? new i(n.fontStyle, n.foreground, n.background) : null
            }
          }
          t.Theme = r
          class a {
            constructor(e, t) {
              ;(this.parent = e), (this.scopeName = t)
            }
            static from(...e) {
              let t = null
              for (let n = 0; n < e.length; n++) t = new a(t, e[n])
              return t
            }
            push(e) {
              return new a(this, e)
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
          t.ScopeStack = a
          class i {
            constructor(e, t, n) {
              ;(this.fontStyle = e), (this.foregroundId = t), (this.backgroundId = n)
            }
          }
          function c(e) {
            if (!e) return []
            if (!e.settings || !Array.isArray(e.settings)) return []
            let t = e.settings,
              n = [],
              r = 0
            for (let e = 0, a = t.length; e < a; e++) {
              let a,
                o = t[e]
              if (!o.settings) continue
              if ('string' == typeof o.scope) {
                let e = o.scope
                ;(e = e.replace(/^[,]+/, '')), (e = e.replace(/[,]+$/, '')), (a = e.split(','))
              } else a = Array.isArray(o.scope) ? o.scope : ['']
              let i = -1
              if ('string' == typeof o.settings.fontStyle) {
                i = 0
                let e = o.settings.fontStyle.split(' ')
                for (let t = 0, n = e.length; t < n; t++)
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
                s.isValidHexColor(o.settings.foreground) &&
                (c = o.settings.foreground)
              let u = null
              'string' == typeof o.settings.background &&
                s.isValidHexColor(o.settings.background) &&
                (u = o.settings.background)
              for (let t = 0, s = a.length; t < s; t++) {
                let s = a[t].trim().split(' '),
                  o = s[s.length - 1],
                  h = null
                s.length > 1 && ((h = s.slice(0, s.length - 1)), h.reverse()),
                  (n[r++] = new l(o, h, e, i, c, u))
              }
            }
            return n
          }
          ;(t.StyleAttributes = i), (t.parseTheme = c)
          class l {
            constructor(e, t, n, s, r, a) {
              ;(this.scope = e),
                (this.parentScopes = t),
                (this.index = n),
                (this.fontStyle = s),
                (this.foreground = r),
                (this.background = a)
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
                for (let t = 0, n = e.length; t < n; t++)
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
          class h {
            constructor(e, t, n, s, r) {
              ;(this.scopeDepth = e),
                (this.parentScopes = t),
                (this.fontStyle = n),
                (this.foreground = s),
                (this.background = r)
            }
            clone() {
              return new h(
                this.scopeDepth,
                this.parentScopes,
                this.fontStyle,
                this.foreground,
                this.background
              )
            }
            static cloneArr(e) {
              let t = []
              for (let n = 0, s = e.length; n < s; n++) t[n] = e[n].clone()
              return t
            }
            acceptOverwrite(e, t, n, s) {
              this.scopeDepth > e ? console.log('how did this happen?') : (this.scopeDepth = e),
                -1 !== t && (this.fontStyle = t),
                0 !== n && (this.foreground = n),
                0 !== s && (this.background = s)
            }
          }
          t.ThemeTrieElementRule = h
          class p {
            constructor(e, t = [], n = {}) {
              ;(this._mainRule = e), (this._children = n), (this._rulesWithParentScopes = t)
            }
            static _sortBySpecificity(e) {
              return 1 === e.length || e.sort(this._cmpBySpecificity), e
            }
            static _cmpBySpecificity(e, t) {
              if (e.scopeDepth === t.scopeDepth) {
                const n = e.parentScopes,
                  s = t.parentScopes
                let r = null === n ? 0 : n.length,
                  a = null === s ? 0 : s.length
                if (r === a)
                  for (let e = 0; e < r; e++) {
                    const t = n[e].length,
                      r = s[e].length
                    if (t !== r) return r - t
                  }
                return a - r
              }
              return t.scopeDepth - e.scopeDepth
            }
            match(e) {
              if ('' === e)
                return p._sortBySpecificity(
                  [].concat(this._mainRule).concat(this._rulesWithParentScopes)
                )
              let t,
                n,
                s = e.indexOf('.')
              return (
                -1 === s
                  ? ((t = e), (n = ''))
                  : ((t = e.substring(0, s)), (n = e.substring(s + 1))),
                this._children.hasOwnProperty(t)
                  ? this._children[t].match(n)
                  : p._sortBySpecificity(
                      [].concat(this._mainRule).concat(this._rulesWithParentScopes)
                    )
              )
            }
            insert(e, t, n, s, r, a) {
              if ('' === t) return void this._doInsertHere(e, n, s, r, a)
              let o,
                i,
                c,
                l = t.indexOf('.')
              ;-1 === l ? ((o = t), (i = '')) : ((o = t.substring(0, l)), (i = t.substring(l + 1))),
                this._children.hasOwnProperty(o)
                  ? (c = this._children[o])
                  : ((c = new p(this._mainRule.clone(), h.cloneArr(this._rulesWithParentScopes))),
                    (this._children[o] = c)),
                c.insert(e + 1, i, n, s, r, a)
            }
            _doInsertHere(e, t, n, r, a) {
              if (null !== t) {
                for (let o = 0, i = this._rulesWithParentScopes.length; o < i; o++) {
                  let i = this._rulesWithParentScopes[o]
                  if (0 === s.strArrCmp(i.parentScopes, t))
                    return void i.acceptOverwrite(e, n, r, a)
                }
                ;-1 === n && (n = this._mainRule.fontStyle),
                  0 === r && (r = this._mainRule.foreground),
                  0 === a && (a = this._mainRule.background),
                  this._rulesWithParentScopes.push(new h(e, t, n, r, a))
              } else this._mainRule.acceptOverwrite(e, n, r, a)
            }
          }
          t.ThemeTrieElement = p
        },
        878: (e, t) => {
          function n(e) {
            return Array.isArray(e)
              ? (function (e) {
                  let t = []
                  for (let s = 0, r = e.length; s < r; s++) t[s] = n(e[s])
                  return t
                })(e)
              : 'object' == typeof e
              ? (function (e) {
                  let t = {}
                  for (let s in e) t[s] = n(e[s])
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
              return n(e)
            }),
            (t.mergeObjects = function (e, ...t) {
              return (
                t.forEach(t => {
                  for (let n in t) e[n] = t[n]
                }),
                e
              )
            }),
            (t.basename = function e(t) {
              const n = ~t.lastIndexOf('/') || ~t.lastIndexOf('\\')
              return 0 === n
                ? t
                : ~n == t.length - 1
                ? e(t.substring(0, t.length - 1))
                : t.substr(1 + ~n)
            })
          let s = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g
          function r(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
          }
          ;(t.RegexSource = class {
            static hasCaptures(e) {
              return null !== e && ((s.lastIndex = 0), s.test(e))
            }
            static replaceCaptures(e, t, n) {
              return e.replace(s, (e, s, r, a) => {
                let o = n[parseInt(s || r, 10)]
                if (!o) return e
                {
                  let e = t.substring(o.start, o.end)
                  for (; '.' === e[0]; ) e = e.substring(1)
                  switch (a) {
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
            (t.strcmp = r),
            (t.strArrCmp = function (e, t) {
              if (null === e && null === t) return 0
              if (!e) return -1
              if (!t) return 1
              let n = e.length,
                s = t.length
              if (n === s) {
                for (let s = 0; s < n; s++) {
                  let n = r(e[s], t[s])
                  if (0 !== n) return n
                }
                return 0
              }
              return n - s
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
      (s = {}),
      (function e(t) {
        var r = s[t]
        if (void 0 !== r) return r.exports
        var a = (s[t] = { exports: {} })
        return n[t].call(a.exports, a, a.exports, e), a.exports
      })(787))
  })(M)
  var G = M.exports
  function F(e, t) {
    let n = []
    for (let s = 0, r = t.length; s < r; s++) {
      let r = t.slice(0, s),
        a = t[s]
      n[s] = { scopeName: a, themeMatches: U(e, a, r) }
    }
    return n
  }
  function D(e, t) {
    let n = e + '.'
    return e === t || t.substring(0, n.length) === n
  }
  function $(e, t, n, s) {
    if (!D(e, n)) return !1
    let r = t.length - 1,
      a = s.length - 1
    for (; r >= 0 && a >= 0; ) D(t[r], s[a]) && r--, a--
    return -1 === r
  }
  function U(e, t, n) {
    let s = [],
      r = 0
    for (let a = 0, o = e.settings.length; a < o; a++) {
      let o,
        i = e.settings[a]
      if ('string' == typeof i.scope) o = i.scope.split(/,/).map(e => e.trim())
      else {
        if (!Array.isArray(i.scope)) continue
        o = i.scope
      }
      for (let e = 0, a = o.length; e < a; e++) {
        let c = o[e].split(/ /)
        $(c[c.length - 1], c.slice(0, c.length - 1), t, n) && ((s[r++] = i), (e = a))
      }
    }
    return s
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
  function z(e, t) {
    const n = e.indexOf('', t)
    if (-1 !== n && '[' === e[n + 1]) {
      const t = e.indexOf('m', n)
      return { sequence: e.substring(n + 2, t).split(';'), startPosition: n, position: t + 1 }
    }
    return { position: e.length }
  }
  function H(e) {
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
      const n = e.shift()
      if (!n) continue
      const s = Number.parseInt(n)
      if (!Number.isNaN(s))
        if (0 === s) t.push({ type: 'resetAll' })
        else if (s <= 9) {
          q[s] && t.push({ type: 'setDecoration', value: q[s] })
        } else if (s <= 29) {
          const e = q[s - 20]
          e && t.push({ type: 'resetDecoration', value: e })
        } else if (s <= 37)
          t.push({ type: 'setForegroundColor', value: { type: 'named', name: W[s - 30] } })
        else if (38 === s) {
          const n = H(e)
          n && t.push({ type: 'setForegroundColor', value: n })
        } else if (39 === s) t.push({ type: 'resetForegroundColor' })
        else if (s <= 47)
          t.push({ type: 'setBackgroundColor', value: { type: 'named', name: W[s - 40] } })
        else if (48 === s) {
          const n = H(e)
          n && t.push({ type: 'setBackgroundColor', value: n })
        } else
          49 === s
            ? t.push({ type: 'resetBackgroundColor' })
            : s >= 90 && s <= 97
            ? t.push({ type: 'setForegroundColor', value: { type: 'named', name: W[s - 90 + 8] } })
            : s >= 100 &&
              s <= 107 &&
              t.push({ type: 'setBackgroundColor', value: { type: 'named', name: W[s - 100 + 8] } })
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
  function Q(e = K) {
    function t(t) {
      return e[t]
    }
    function n(e) {
      return `#${e.map(e => Math.max(0, Math.min(e, 255)).toString(16).padStart(2, '0')).join('')}`
    }
    let s
    function r(e) {
      return (function () {
        if (s) return s
        s = []
        for (let e = 0; e < W.length; e++) s.push(t(W[e]))
        let e = [0, 95, 135, 175, 215, 255]
        for (let t = 0; t < 6; t++)
          for (let r = 0; r < 6; r++) for (let a = 0; a < 6; a++) s.push(n([e[t], e[r], e[a]]))
        let r = 8
        for (let e = 0; e < 24; e++, r += 10) s.push(n([r, r, r]))
        return s
      })()[e]
    }
    return {
      value: function (e) {
        switch (e.type) {
          case 'named':
            return t(e.name)
          case 'rgb':
            return n(e.rgb)
          case 'table':
            return r(e.index)
        }
      }
    }
  }
  function J(e, t) {
    const s = t.split(/\r?\n/),
      r = Q(
        Object.fromEntries(
          W.map(t => [t, e.colors[`terminal.ansi${t[0].toUpperCase()}${t.substring(1)}`]])
        )
      ),
      a = (function () {
        let e = null,
          t = null,
          n = new Set()
        return {
          parse(s) {
            const r = []
            let a = 0
            do {
              const o = z(s, a),
                i = o.sequence ? s.substring(a, o.startPosition) : s.substring(a)
              if (
                (i.length > 0 &&
                  r.push({ value: i, foreground: e, background: t, decorations: new Set(n) }),
                o.sequence)
              ) {
                const s = V(o.sequence)
                for (const r of s)
                  'resetAll' === r.type
                    ? ((e = null), (t = null), n.clear())
                    : 'resetForegroundColor' === r.type
                    ? (e = null)
                    : 'resetBackgroundColor' === r.type
                    ? (t = null)
                    : 'resetDecoration' === r.type && n.delete(r.value)
                for (const r of s)
                  'setForegroundColor' === r.type
                    ? (e = r.value)
                    : 'setBackgroundColor' === r.type
                    ? (t = r.value)
                    : 'setDecoration' === r.type && n.add(r.value)
              }
              a = o.position
            } while (a < s.length)
            return r
          }
        }
      })()
    return s.map(t =>
      a.parse(t).map(t => {
        let s
        ;(s = t.decorations.has('reverse')
          ? t.background
            ? r.value(t.background)
            : e.bg
          : t.foreground
          ? r.value(t.foreground)
          : e.fg),
          t.decorations.has('dim') &&
            (s = (function (e) {
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
              const n = e.match(/var\((--shiki-color-ansi-[\w-]+)\)/)
              if (n) return `var(${n[1]}-dim)`
              return e
            })(s))
        let a = n.None
        return (
          t.decorations.has('bold') && (a |= n.Bold),
          t.decorations.has('italic') && (a |= n.Italic),
          t.decorations.has('underline') && (a |= n.Underline),
          { content: t.value, color: s, fontStyle: a }
        )
      })
    )
  }
  const Y = {
    pre: ({ className: e, style: t, children: n }) =>
      `<pre class="${e}" style="${t}" tabindex="0">${n}</pre>`,
    code: ({ children: e }) => `<code>${e}</code>`,
    line: ({ className: e, children: t }) => `<span class="${e}">${t}</span>`,
    token: ({ style: e, children: t }) => `<span style="${e}">${t}</span>`
  }
  function X(e, t = {}) {
    const s = t.bg || '#fff',
      r = (function (e, t) {
        const n = new Map()
        for (const s of e) {
          const e = t(s)
          n.has(e) ? n.get(e).push(s) : n.set(e, [s])
        }
        return n
      })(t.lineOptions ?? [], e => e.line),
      a = t.elements || {}
    function o(e = '', t = {}, n) {
      const s = a[e] || Y[e]
      return s
        ? ((n = n.filter(Boolean)), s({ ...t, children: 'code' === e ? n.join('\n') : n.join('') }))
        : ''
    }
    return o(
      'pre',
      { className: 'shiki ' + (t.themeName || ''), style: `background-color: ${s}` },
      [
        t.langId ? `<div class="language-id">${t.langId}</div>` : '',
        o(
          'code',
          {},
          e.map((s, a) => {
            const i = a + 1,
              c = (function (e) {
                const t = new Set(['line'])
                for (const n of e) for (const e of n.classes ?? []) t.add(e)
                return Array.from(t)
              })(r.get(i) ?? []).join(' ')
            return o(
              'line',
              { className: c, lines: e, line: s, index: a },
              s.map((e, r) => {
                const a = [`color: ${e.color || t.fg}`]
                return (
                  e.fontStyle & n.Italic && a.push('font-style: italic'),
                  e.fontStyle & n.Bold && a.push('font-weight: bold'),
                  e.fontStyle & n.Underline && a.push('text-decoration: underline'),
                  o('token', { style: a.join('; '), tokens: s, token: e, index: r }, [
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
      const t = e.embeddedLangs?.reduce(async (e, t, n) => {
          if (!this.getLoadedLanguages().includes(t) && this._resolver.getLangRegistration(t))
            return (
              await this._resolver.loadGrammar(this._resolver.getLangRegistration(t).scopeName),
              (e[this._resolver.getLangRegistration(t).scopeName] = n + 2),
              e
            )
        }, {}),
        n = {
          embeddedLanguages: t,
          balancedBracketSelectors: e.balancedBracketSelectors || ['*'],
          unbalancedBracketSelectors: e.unbalancedBracketSelectors || []
        },
        s = await this.loadGrammarWithConfiguration(e.scopeName, 1, n)
      ;(this._resolvedGrammars[e.id] = s),
        e.aliases &&
          e.aliases.forEach(e => {
            this._resolvedGrammars[e] = s
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
      'ayu-dark',
      'ayu-light',
      'ayu-mirage',
      'colbalt2',
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
    (e.FontStyle = n),
    (e.getHighlighter = async function (e) {
      const {
          _languages: n,
          _themes: r,
          _wasmPath: a
        } = (function (e) {
          let n = t,
            s = e.themes || [],
            r = e.paths?.wasm ? (e.paths.wasm.endsWith('/') ? e.paths.wasm : e.paths.wasm + '/') : C
          return (
            e.langs && (n = e.langs.map(te)),
            e.theme && s.unshift(e.theme),
            s.length || (s = ['nord']),
            { _languages: n, _themes: s, _wasmPath: r }
          )
        })(e),
        c = new B(
          (async function (e) {
            if (!x) {
              let t
              if (S)
                t =
                  'string' == typeof N
                    ? m.loadWASM({ data: await fetch(A(i(...o(e), 'onig.wasm'))) })
                    : m.loadWASM({ data: N })
              else {
                const e = require('path').join(require.resolve('vscode-oniguruma'), '../onig.wasm'),
                  n = require('fs').readFileSync(e).buffer
                t = m.loadWASM(n)
              }
              x = t.then(() => ({
                createOnigScanner: e => m.createOnigScanner(e),
                createOnigString: e => m.createOnigString(e)
              }))
            }
            return x
          })(a),
          'vscode-oniguruma'
        ),
        l = new ee(c)
      e.paths?.themes &&
        (l.themesPath = e.paths.themes.endsWith('/') ? e.paths.themes : e.paths.themes + '/'),
        e.paths?.languages &&
          (c.languagesPath = e.paths.languages.endsWith('/')
            ? e.paths.languages
            : e.paths.languages + '/')
      const u = (await l.loadThemes(r))[0]
      let h
      await l.loadLanguages(n)
      let p = (function () {
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
          const n = `#A${t.toString().padStart(5, '0')}`,
            s = W[t].replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
          e[n] = `var(--shiki-color-ansi-${s})`
        }
        return e
      })()
      function d(e) {
        const t = e ? l.getTheme(e) : u
        if (!t) throw Error(`No theme registration for ${e}`)
        ;(h && h.name === t.name) || (l.setTheme(t), (h = t))
        const n = l.getColorMap()
        return (
          'css' === t.type &&
            (function (e, t) {
              ;(e.bg = p[e.bg] || e.bg),
                (e.fg = p[e.fg] || e.fg),
                Object.entries(e.colors).forEach(([t, n]) => {
                  e.colors[t] = p[n] || n
                }),
                t.forEach((e, n) => {
                  t[n] = p[e] || e
                })
            })(t, n),
          { _theme: t, _colorMap: n }
        )
      }
      function g(e, t = 'text', n, r = { includeExplanation: !0 }) {
        if (
          (function (e) {
            return !e || ['plaintext', 'txt', 'text'].includes(e)
          })(t)
        ) {
          return [...e.split(/\r\n|\r|\n/).map(e => [{ content: e }])]
        }
        const { _grammar: a } = (function (e) {
            const t = l.getGrammar(e)
            if (!t) throw Error(`No language registration for ${e}`)
            return { _grammar: t }
          })(t),
          { _theme: o, _colorMap: i } = d(n)
        return (function (e, t, n, r, a) {
          let o = n.split(/\r\n|\r|\n/),
            i = G.INITIAL,
            c = [],
            l = []
          for (let n = 0, u = o.length; n < u; n++) {
            let u,
              h,
              p,
              d = o[n]
            if ('' === d) {
              ;(c = []), l.push([])
              continue
            }
            a.includeExplanation && ((u = r.tokenizeLine(d, i)), (h = u.tokens), (p = 0))
            let m = r.tokenizeLine2(d, i),
              g = m.tokens.length / 2
            for (let n = 0; n < g; n++) {
              let r = m.tokens[2 * n],
                o = n + 1 < g ? m.tokens[2 * n + 2] : d.length
              if (r === o) continue
              let i = m.tokens[2 * n + 1],
                l = t[s.getForeground(i)],
                u = s.getFontStyle(i),
                f = []
              if (a.includeExplanation) {
                let t = 0
                for (; r + t < o; ) {
                  let n = h[p],
                    s = d.substring(n.startIndex, n.endIndex)
                  ;(t += s.length), f.push({ content: s, scopes: F(e, n.scopes) }), p++
                }
              }
              c.push({ content: d.substring(r, o), color: l, fontStyle: u, explanation: f })
            }
            l.push(c), (c = []), (i = m.ruleStack)
          }
          return l
        })(o, i, e, a, r)
      }
      function f(e, t) {
        const { _theme: n } = d(t)
        return J(n, e)
      }
      return {
        codeToThemedTokens: g,
        codeToHtml: function (e, t = 'text', n) {
          let s
          s = 'object' == typeof t ? t : { lang: t, theme: n }
          const r = g(e, s.lang, s.theme, { includeExplanation: !1 }),
            { _theme: a } = d(s.theme)
          return X(r, { fg: a.fg, bg: a.bg, lineOptions: s?.lineOptions, themeName: a.name })
        },
        ansiToThemedTokens: f,
        ansiToHtml: function (e, t) {
          const n = f(e, t?.theme),
            { _theme: s } = d(t?.theme)
          return X(n, { fg: s.fg, bg: s.bg, lineOptions: t?.lineOptions, themeName: s.name })
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
          p = e
        }
      }
    }),
    (e.loadTheme = T),
    (e.renderToHtml = X),
    (e.setCDN = function (e) {
      w = e.endsWith('/') ? e : e + '/'
    }),
    (e.setOnigasmWASM = function (e) {
      j(e)
    }),
    (e.setWasm = j),
    (e.toShikiTheme = R)
})((this.shiki = this.shiki || {}))
