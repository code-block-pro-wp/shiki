import{loadWASM as e,createOnigScanner as a,createOnigString as s}from"vscode-oniguruma";import{INITIAL as t,Registry as n}from"vscode-textmate";const o=["css-variables","dark-plus","dracula-soft","dracula","github-dark-dimmed","github-dark","github-light","hc_light","light-plus","material-darker","material-default","material-lighter","material-ocean","material-palenight","min-dark","min-light","monokai","nord","one-dark-pro","poimandres","rose-pine-dawn","rose-pine-moon","rose-pine","shades-of-purple-super-dark","shades-of-purple","slack-dark","slack-ochin","solarized-dark","solarized-light","synthwave-84","vitesse-dark","vitesse-light"],r=[{id:"abap",scopeName:"source.abap",path:"abap.tmLanguage.json",samplePath:"abap.sample"},{id:"actionscript-3",scopeName:"source.actionscript.3",path:"actionscript-3.tmLanguage.json",samplePath:"actionscript-3.sample"},{id:"ada",scopeName:"source.ada",path:"ada.tmLanguage.json",samplePath:"ada.sample"},{id:"apache",scopeName:"source.apacheconf",path:"apache.tmLanguage.json"},{id:"apex",scopeName:"source.apex",path:"apex.tmLanguage.json",samplePath:"apex.sample"},{id:"apl",scopeName:"source.apl",path:"apl.tmLanguage.json",embeddedLangs:["html","xml","css","javascript","json"]},{id:"applescript",scopeName:"source.applescript",path:"applescript.tmLanguage.json",samplePath:"applescript.sample"},{id:"asm",scopeName:"source.asm.x86_64",path:"asm.tmLanguage.json",samplePath:"asm.sample"},{id:"astro",scopeName:"source.astro",path:"astro.tmLanguage.json",samplePath:"astro.sample",embeddedLangs:["json","javascript","typescript","tsx","css","less","sass","scss","stylus"]},{id:"awk",scopeName:"source.awk",path:"awk.tmLanguage.json",samplePath:"awk.sample"},{id:"ballerina",scopeName:"source.ballerina",path:"ballerina.tmLanguage.json",samplePath:"ballerina.sample"},{id:"bat",scopeName:"source.batchfile",path:"bat.tmLanguage.json",samplePath:"bat.sample",aliases:["batch"]},{id:"berry",scopeName:"source.berry",path:"berry.tmLanguage.json",samplePath:"berry.sample",aliases:["be"]},{id:"bibtex",scopeName:"text.bibtex",path:"bibtex.tmLanguage.json"},{id:"bicep",scopeName:"source.bicep",path:"bicep.tmLanguage.json",samplePath:"bicep.sample"},{id:"blade",scopeName:"text.html.php.blade",path:"blade.tmLanguage.json",samplePath:"blade.sample",embeddedLangs:["html","xml","sql","javascript","json","css"]},{id:"c",scopeName:"source.c",path:"c.tmLanguage.json",samplePath:"c.sample"},{id:"cadence",scopeName:"source.cadence",path:"cadence.tmLanguage.json",samplePath:"cadence.sample",aliases:["cdc"]},{id:"clarity",scopeName:"source.clar",path:"clarity.tmLanguage.json",samplePath:"clarity.sample"},{id:"clojure",scopeName:"source.clojure",path:"clojure.tmLanguage.json",samplePath:"clojure.sample",aliases:["clj"]},{id:"cmake",scopeName:"source.cmake",path:"cmake.tmLanguage.json",samplePath:"cmake.sample"},{id:"cobol",scopeName:"source.cobol",path:"cobol.tmLanguage.json",samplePath:"cobol.sample",embeddedLangs:["sql","html","java"]},{id:"codeql",scopeName:"source.ql",path:"codeql.tmLanguage.json",samplePath:"codeql.sample",aliases:["ql"],embeddedLangs:["markdown"]},{id:"coffee",scopeName:"source.coffee",path:"coffee.tmLanguage.json",samplePath:"coffee.sample",embeddedLangs:["javascript"]},{id:"cpp",scopeName:"source.cpp",path:"cpp.tmLanguage.json",samplePath:"cpp.sample",embeddedLangs:["glsl","sql"]},{id:"crystal",scopeName:"source.crystal",path:"crystal.tmLanguage.json",samplePath:"crystal.sample",embeddedLangs:["html","sql","css","c","javascript","shellscript"]},{id:"csharp",scopeName:"source.cs",path:"csharp.tmLanguage.json",samplePath:"csharp.sample",aliases:["c#","cs"]},{id:"css",scopeName:"source.css",path:"css.tmLanguage.json",samplePath:"css.sample"},{id:"cue",scopeName:"source.cue",path:"cue.tmLanguage.json",samplePath:"cue.sample"},{id:"d",scopeName:"source.d",path:"d.tmLanguage.json",samplePath:"d.sample"},{id:"dart",scopeName:"source.dart",path:"dart.tmLanguage.json",samplePath:"dart.sample"},{id:"diff",scopeName:"source.diff",path:"diff.tmLanguage.json",samplePath:"diff.sample"},{id:"docker",scopeName:"source.dockerfile",path:"docker.tmLanguage.json",samplePath:"docker.sample"},{id:"dream-maker",scopeName:"source.dm",path:"dream-maker.tmLanguage.json"},{id:"elixir",scopeName:"source.elixir",path:"elixir.tmLanguage.json",samplePath:"elixir.sample",embeddedLangs:["html"]},{id:"elm",scopeName:"source.elm",path:"elm.tmLanguage.json",samplePath:"elm.sample",embeddedLangs:["glsl"]},{id:"erb",scopeName:"text.html.erb",path:"erb.tmLanguage.json",samplePath:"erb.sample",embeddedLangs:["html","ruby"]},{id:"erlang",scopeName:"source.erlang",path:"erlang.tmLanguage.json",samplePath:"erlang.sample",aliases:["erl"]},{id:"fish",scopeName:"source.fish",path:"fish.tmLanguage.json",samplePath:"fish.sample"},{id:"fsharp",scopeName:"source.fsharp",path:"fsharp.tmLanguage.json",samplePath:"fsharp.sample",aliases:["f#","fs"],embeddedLangs:["markdown"]},{id:"gherkin",scopeName:"text.gherkin.feature",path:"gherkin.tmLanguage.json"},{id:"git-commit",scopeName:"text.git-commit",path:"git-commit.tmLanguage.json",embeddedLangs:["diff"]},{id:"git-rebase",scopeName:"text.git-rebase",path:"git-rebase.tmLanguage.json",embeddedLangs:["shellscript"]},{id:"glsl",scopeName:"source.glsl",path:"glsl.tmLanguage.json",samplePath:"glsl.sample",embeddedLangs:["c"]},{id:"gnuplot",scopeName:"source.gnuplot",path:"gnuplot.tmLanguage.json"},{id:"go",scopeName:"source.go",path:"go.tmLanguage.json",samplePath:"go.sample"},{id:"graphql",scopeName:"source.graphql",path:"graphql.tmLanguage.json",embeddedLangs:["javascript","typescript","jsx","tsx"]},{id:"groovy",scopeName:"source.groovy",path:"groovy.tmLanguage.json"},{id:"hack",scopeName:"source.hack",path:"hack.tmLanguage.json",embeddedLangs:["html","sql"]},{id:"haml",scopeName:"text.haml",path:"haml.tmLanguage.json",embeddedLangs:["ruby","javascript","sass","coffee","markdown","css"]},{id:"handlebars",scopeName:"text.html.handlebars",path:"handlebars.tmLanguage.json",aliases:["hbs"],embeddedLangs:["html","css","javascript","yaml"]},{id:"haskell",scopeName:"source.haskell",path:"haskell.tmLanguage.json",aliases:["hs"]},{id:"hcl",scopeName:"source.hcl",path:"hcl.tmLanguage.json",samplePath:"hcl.sample"},{id:"hlsl",scopeName:"source.hlsl",path:"hlsl.tmLanguage.json"},{id:"html",scopeName:"text.html.basic",path:"html.tmLanguage.json",samplePath:"html.sample",embeddedLangs:["javascript","css"]},{id:"imba",scopeName:"source.imba",path:"imba.tmLanguage.json",samplePath:"imba.sample"},{id:"ini",scopeName:"source.ini",path:"ini.tmLanguage.json"},{id:"java",scopeName:"source.java",path:"java.tmLanguage.json",samplePath:"java.sample"},{id:"javascript",scopeName:"source.js",path:"javascript.tmLanguage.json",samplePath:"javascript.sample",aliases:["js"]},{id:"jinja-html",scopeName:"text.html.jinja",path:"jinja-html.tmLanguage.json",embeddedLangs:["html"]},{id:"json",scopeName:"source.json",path:"json.tmLanguage.json"},{id:"json5",scopeName:"source.json5",path:"json5.tmLanguage.json",samplePath:"json5.sample"},{id:"jsonc",scopeName:"source.json.comments",path:"jsonc.tmLanguage.json"},{id:"jsonnet",scopeName:"source.jsonnet",path:"jsonnet.tmLanguage.json"},{id:"jssm",scopeName:"source.jssm",path:"jssm.tmLanguage.json",samplePath:"jssm.sample",aliases:["fsl"]},{id:"jsx",scopeName:"source.js.jsx",path:"jsx.tmLanguage.json"},{id:"julia",scopeName:"source.julia",path:"julia.tmLanguage.json",embeddedLangs:["cpp","python","javascript","r","sql"]},{id:"kotlin",scopeName:"source.kotlin",path:"kotlin.tmLanguage.json"},{id:"latex",scopeName:"text.tex.latex",path:"latex.tmLanguage.json",embeddedLangs:["tex","css","haskell","html","xml","java","lua","julia","ruby","javascript","typescript","python","yaml","rust","scala","gnuplot"]},{id:"less",scopeName:"source.css.less",path:"less.tmLanguage.json",embeddedLangs:["css"]},{id:"liquid",scopeName:"text.html.liquid",path:"liquid.tmLanguage.json",samplePath:"liquid.sample",embeddedLangs:["html","css","json","javascript"]},{id:"lisp",scopeName:"source.lisp",path:"lisp.tmLanguage.json"},{id:"logo",scopeName:"source.logo",path:"logo.tmLanguage.json"},{id:"lua",scopeName:"source.lua",path:"lua.tmLanguage.json",embeddedLangs:["c"]},{id:"make",scopeName:"source.makefile",path:"make.tmLanguage.json",aliases:["makefile"]},{id:"markdown",scopeName:"text.html.markdown",path:"markdown.tmLanguage.json",aliases:["md"],embeddedLangs:["css","html","ini","java","lua","make","perl","r","ruby","php","sql","vb","xml","xsl","yaml","bat","clojure","coffee","c","cpp","diff","docker","git-commit","git-rebase","go","groovy","pug","javascript","json","jsonc","less","objective-c","swift","scss","raku","powershell","python","julia","rust","scala","shellscript","typescript","tsx","csharp","fsharp","dart","handlebars","erlang","elixir","latex","bibtex"]},{id:"marko",scopeName:"text.marko",path:"marko.tmLanguage.json",embeddedLangs:["css","less","scss","typescript"]},{id:"matlab",scopeName:"source.matlab",path:"matlab.tmLanguage.json"},{id:"mdx",scopeName:"text.html.markdown.jsx",path:"mdx.tmLanguage.json",embeddedLangs:["jsx","markdown"]},{id:"mermaid",scopeName:"source.mermaid",path:"mermaid.tmLanguage.json"},{id:"nginx",scopeName:"source.nginx",path:"nginx.tmLanguage.json",embeddedLangs:["lua"]},{id:"nim",scopeName:"source.nim",path:"nim.tmLanguage.json",embeddedLangs:["c","html","xml","javascript","css","glsl","markdown"]},{id:"nix",scopeName:"source.nix",path:"nix.tmLanguage.json"},{id:"objective-c",scopeName:"source.objc",path:"objective-c.tmLanguage.json",aliases:["objc"]},{id:"objective-cpp",scopeName:"source.objcpp",path:"objective-cpp.tmLanguage.json"},{id:"ocaml",scopeName:"source.ocaml",path:"ocaml.tmLanguage.json"},{id:"pascal",scopeName:"source.pascal",path:"pascal.tmLanguage.json"},{id:"perl",scopeName:"source.perl",path:"perl.tmLanguage.json",embeddedLangs:["html","xml","css","javascript","sql"]},{id:"php",scopeName:"source.php",path:"php.tmLanguage.json",embeddedLangs:["html","xml","sql","javascript","json","css"]},{id:"plsql",scopeName:"source.plsql.oracle",path:"plsql.tmLanguage.json"},{id:"postcss",scopeName:"source.css.postcss",path:"postcss.tmLanguage.json"},{id:"powershell",scopeName:"source.powershell",path:"powershell.tmLanguage.json",aliases:["ps","ps1"]},{id:"prisma",scopeName:"source.prisma",path:"prisma.tmLanguage.json",samplePath:"prisma.sample"},{id:"prolog",scopeName:"source.prolog",path:"prolog.tmLanguage.json"},{id:"proto",scopeName:"source.proto",path:"proto.tmLanguage.json",samplePath:"proto.sample"},{id:"pug",scopeName:"text.pug",path:"pug.tmLanguage.json",aliases:["jade"],embeddedLangs:["javascript","css","sass","scss","stylus","coffee","html"]},{id:"puppet",scopeName:"source.puppet",path:"puppet.tmLanguage.json"},{id:"purescript",scopeName:"source.purescript",path:"purescript.tmLanguage.json"},{id:"python",scopeName:"source.python",path:"python.tmLanguage.json",samplePath:"python.sample",aliases:["py"]},{id:"r",scopeName:"source.r",path:"r.tmLanguage.json"},{id:"raku",scopeName:"source.perl.6",path:"raku.tmLanguage.json",aliases:["perl6"]},{id:"razor",scopeName:"text.aspnetcorerazor",path:"razor.tmLanguage.json",embeddedLangs:["html","csharp"]},{id:"rel",scopeName:"source.rel",path:"rel.tmLanguage.json",samplePath:"rel.sample"},{id:"riscv",scopeName:"source.riscv",path:"riscv.tmLanguage.json"},{id:"rst",scopeName:"source.rst",path:"rst.tmLanguage.json",embeddedLangs:["cpp","python","javascript","shellscript","yaml","cmake","ruby"]},{id:"ruby",scopeName:"source.ruby",path:"ruby.tmLanguage.json",samplePath:"ruby.sample",aliases:["rb"],embeddedLangs:["html","xml","sql","css","c","javascript","shellscript","lua"]},{id:"rust",scopeName:"source.rust",path:"rust.tmLanguage.json",aliases:["rs"]},{id:"sas",scopeName:"source.sas",path:"sas.tmLanguage.json",embeddedLangs:["sql"]},{id:"sass",scopeName:"source.sass",path:"sass.tmLanguage.json"},{id:"scala",scopeName:"source.scala",path:"scala.tmLanguage.json"},{id:"scheme",scopeName:"source.scheme",path:"scheme.tmLanguage.json"},{id:"scss",scopeName:"source.css.scss",path:"scss.tmLanguage.json",embeddedLangs:["css"]},{id:"shaderlab",scopeName:"source.shaderlab",path:"shaderlab.tmLanguage.json",aliases:["shader"],embeddedLangs:["hlsl"]},{id:"shellscript",scopeName:"source.shell",path:"shellscript.tmLanguage.json",aliases:["shell","bash","sh","zsh"]},{id:"smalltalk",scopeName:"source.smalltalk",path:"smalltalk.tmLanguage.json"},{id:"solidity",scopeName:"source.solidity",path:"solidity.tmLanguage.json"},{id:"sparql",scopeName:"source.sparql",path:"sparql.tmLanguage.json",samplePath:"sparql.sample",embeddedLangs:["turtle"]},{id:"sql",scopeName:"source.sql",path:"sql.tmLanguage.json"},{id:"ssh-config",scopeName:"source.ssh-config",path:"ssh-config.tmLanguage.json"},{id:"stata",scopeName:"source.stata",path:"stata.tmLanguage.json",samplePath:"stata.sample",embeddedLangs:["sql"]},{id:"stylus",scopeName:"source.stylus",path:"stylus.tmLanguage.json",aliases:["styl"]},{id:"svelte",scopeName:"source.svelte",path:"svelte.tmLanguage.json",embeddedLangs:["javascript","typescript","coffee","stylus","sass","css","scss","less","postcss","pug","markdown"]},{id:"swift",scopeName:"source.swift",path:"swift.tmLanguage.json"},{id:"system-verilog",scopeName:"source.systemverilog",path:"system-verilog.tmLanguage.json"},{id:"tasl",scopeName:"source.tasl",path:"tasl.tmLanguage.json",samplePath:"tasl.sample"},{id:"tcl",scopeName:"source.tcl",path:"tcl.tmLanguage.json"},{id:"tex",scopeName:"text.tex",path:"tex.tmLanguage.json",embeddedLangs:["r"]},{id:"toml",scopeName:"source.toml",path:"toml.tmLanguage.json"},{id:"tsx",scopeName:"source.tsx",path:"tsx.tmLanguage.json",samplePath:"tsx.sample"},{id:"turtle",scopeName:"source.turtle",path:"turtle.tmLanguage.json",samplePath:"turtle.sample"},{id:"twig",scopeName:"text.html.twig",path:"twig.tmLanguage.json",embeddedLangs:["css","javascript","php","python","ruby"]},{id:"typescript",scopeName:"source.ts",path:"typescript.tmLanguage.json",aliases:["ts"]},{id:"v",scopeName:"source.v",path:"v.tmLanguage.json",samplePath:"v.sample"},{id:"vb",scopeName:"source.asp.vb.net",path:"vb.tmLanguage.json",aliases:["cmd"]},{id:"verilog",scopeName:"source.verilog",path:"verilog.tmLanguage.json"},{id:"vhdl",scopeName:"source.vhdl",path:"vhdl.tmLanguage.json"},{id:"viml",scopeName:"source.viml",path:"viml.tmLanguage.json",aliases:["vim","vimscript"]},{id:"vue-html",scopeName:"text.html.vue-html",path:"vue-html.tmLanguage.json",embeddedLangs:["vue","javascript"]},{id:"vue",scopeName:"source.vue",path:"vue.tmLanguage.json",embeddedLangs:["html","markdown","pug","stylus","sass","css","scss","less","javascript","typescript","jsx","tsx","json","jsonc","json5","yaml","toml","graphql"]},{id:"wasm",scopeName:"source.wat",path:"wasm.tmLanguage.json"},{id:"wenyan",scopeName:"source.wenyan",path:"wenyan.tmLanguage.json",aliases:["文言"]},{id:"xml",scopeName:"text.xml",path:"xml.tmLanguage.json",embeddedLangs:["java"]},{id:"xsl",scopeName:"text.xml.xsl",path:"xsl.tmLanguage.json",embeddedLangs:["xml"]},{id:"yaml",scopeName:"source.yaml",path:"yaml.tmLanguage.json"},{id:"zenscript",scopeName:"source.zenscript",path:"zenscript.tmLanguage.json",samplePath:"zenscript.sample"}];var c,i,l,m,p=(e=>(e[e.NotSet=-1]="NotSet",e[e.None=0]="None",e[e.Italic=1]="Italic",e[e.Bold=2]="Bold",e[e.Underline=4]="Underline",e))(p||{});class g{static toBinaryStr(e){let a=e.toString(2);for(;a.length<32;)a="0"+a;return a}static printMetadata(e){let a=g.getLanguageId(e),s=g.getTokenType(e),t=g.getFontStyle(e),n=g.getForeground(e),o=g.getBackground(e);console.log({languageId:a,tokenType:s,fontStyle:t,foreground:n,background:o})}static getLanguageId(e){return(255&e)>>>0}static getTokenType(e){return(768&e)>>>8}static getFontStyle(e){return(14336&e)>>>11}static getForeground(e){return(8372224&e)>>>15}static getBackground(e){return(4286578688&e)>>>24}static containsBalancedBrackets(e){return 0!=(1024&e)}static set(e,a,s,t,n,o){let r=g.getLanguageId(e),c=g.getTokenType(e),i=g.getFontStyle(e),l=g.getForeground(e),m=g.getBackground(e);return 0!==a&&(r=a),0!==s&&(c=8===s?0:s),-1!==t&&(i=t),0!==n&&(l=n),0!==o&&(m=o),(r<<0|c<<8|i<<11|(g.containsBalancedBrackets(e)?1:0)<<10|l<<15|m<<24)>>>0}}function u(e){return e.endsWith("/")||e.endsWith("\\")?e.slice(0,-1):e}function d(e){return e.startsWith("./")?e.slice(2):e}function h(e){const a=e.split(/[\/\\]/g);return a.slice(0,a.length-1)}function f(...e){return e.map(u).map(d).join("/")}function L(e,a=!1){const s=e.length;let t=0,n="",o=0,r=16,c=0,i=0,l=0,m=0,p=0;function g(a,s){let n=0,o=0;for(;n<a||!s;){let a=e.charCodeAt(t);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}t++,n++}return n<a&&(o=-1),o}function u(){if(n="",p=0,o=t,i=c,m=l,t>=s)return o=s,r=17;let a=e.charCodeAt(t);if(j(a)){do{t++,n+=String.fromCharCode(a),a=e.charCodeAt(t)}while(j(a));return r=15}if(b(a))return t++,n+=String.fromCharCode(a),13===a&&10===e.charCodeAt(t)&&(t++,n+="\n"),c++,l=t,r=14;switch(a){case 123:return t++,r=1;case 125:return t++,r=2;case 91:return t++,r=3;case 93:return t++,r=4;case 58:return t++,r=6;case 44:return t++,r=5;case 34:return t++,n=function(){let a="",n=t;for(;;){if(t>=s){a+=e.substring(n,t),p=2;break}const o=e.charCodeAt(t);if(34===o){a+=e.substring(n,t),t++;break}if(92!==o){if(o>=0&&o<=31){if(b(o)){a+=e.substring(n,t),p=2;break}p=6}t++}else{if(a+=e.substring(n,t),t++,t>=s){p=2;break}switch(e.charCodeAt(t++)){case 34:a+='"';break;case 92:a+="\\";break;case 47:a+="/";break;case 98:a+="\b";break;case 102:a+="\f";break;case 110:a+="\n";break;case 114:a+="\r";break;case 116:a+="\t";break;case 117:const e=g(4,!0);e>=0?a+=String.fromCharCode(e):p=4;break;default:p=5}n=t}}return a}(),r=10;case 47:const i=t-1;if(47===e.charCodeAt(t+1)){for(t+=2;t<s&&!b(e.charCodeAt(t));)t++;return n=e.substring(i,t),r=12}if(42===e.charCodeAt(t+1)){t+=2;const a=s-1;let o=!1;for(;t<a;){const a=e.charCodeAt(t);if(42===a&&47===e.charCodeAt(t+1)){t+=2,o=!0;break}t++,b(a)&&(13===a&&10===e.charCodeAt(t)&&t++,c++,l=t)}return o||(t++,p=1),n=e.substring(i,t),r=13}return n+=String.fromCharCode(a),t++,r=16;case 45:if(n+=String.fromCharCode(a),t++,t===s||!k(e.charCodeAt(t)))return r=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return n+=function(){let a=t;if(48===e.charCodeAt(t))t++;else for(t++;t<e.length&&k(e.charCodeAt(t));)t++;if(t<e.length&&46===e.charCodeAt(t)){if(t++,!(t<e.length&&k(e.charCodeAt(t))))return p=3,e.substring(a,t);for(t++;t<e.length&&k(e.charCodeAt(t));)t++}let s=t;if(t<e.length&&(69===e.charCodeAt(t)||101===e.charCodeAt(t)))if(t++,(t<e.length&&43===e.charCodeAt(t)||45===e.charCodeAt(t))&&t++,t<e.length&&k(e.charCodeAt(t))){for(t++;t<e.length&&k(e.charCodeAt(t));)t++;s=t}else p=3;return e.substring(a,s)}(),r=11;default:for(;t<s&&d(a);)t++,a=e.charCodeAt(t);if(o!==t){switch(n=e.substring(o,t),n){case"true":return r=8;case"false":return r=9;case"null":return r=7}return r=16}return n+=String.fromCharCode(a),t++,r=16}}function d(e){if(j(e)||b(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){t=e,n="",o=0,r=16,p=0},getPosition:()=>t,scan:a?function(){let e;do{e=u()}while(e>=12&&e<=15);return e}:u,getToken:()=>r,getTokenValue:()=>n,getTokenOffset:()=>o,getTokenLength:()=>t-o,getTokenStartLine:()=>i,getTokenStartCharacter:()=>o-m,getTokenError:()=>p}}function j(e){return 32===e||9===e}function b(e){return 10===e||13===e}function k(e){return e>=48&&e<=57}!function(e){e[e.lineFeed=10]="lineFeed",e[e.carriageReturn=13]="carriageReturn",e[e.space=32]="space",e[e._0=48]="_0",e[e._1=49]="_1",e[e._2=50]="_2",e[e._3=51]="_3",e[e._4=52]="_4",e[e._5=53]="_5",e[e._6=54]="_6",e[e._7=55]="_7",e[e._8=56]="_8",e[e._9=57]="_9",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.asterisk=42]="asterisk",e[e.backslash=92]="backslash",e[e.closeBrace=125]="closeBrace",e[e.closeBracket=93]="closeBracket",e[e.colon=58]="colon",e[e.comma=44]="comma",e[e.dot=46]="dot",e[e.doubleQuote=34]="doubleQuote",e[e.minus=45]="minus",e[e.openBrace=123]="openBrace",e[e.openBracket=91]="openBracket",e[e.plus=43]="plus",e[e.slash=47]="slash",e[e.formFeed=12]="formFeed",e[e.tab=9]="tab"}(c||(c={})),function(e){e.DEFAULT={allowTrailingComma:!1}}(i||(i={})),function(e){e[e.None=0]="None",e[e.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=2]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",e[e.InvalidUnicode=4]="InvalidUnicode",e[e.InvalidEscapeCharacter=5]="InvalidEscapeCharacter",e[e.InvalidCharacter=6]="InvalidCharacter"}(l||(l={})),function(e){e[e.OpenBraceToken=1]="OpenBraceToken",e[e.CloseBraceToken=2]="CloseBraceToken",e[e.OpenBracketToken=3]="OpenBracketToken",e[e.CloseBracketToken=4]="CloseBracketToken",e[e.CommaToken=5]="CommaToken",e[e.ColonToken=6]="ColonToken",e[e.NullKeyword=7]="NullKeyword",e[e.TrueKeyword=8]="TrueKeyword",e[e.FalseKeyword=9]="FalseKeyword",e[e.StringLiteral=10]="StringLiteral",e[e.NumericLiteral=11]="NumericLiteral",e[e.LineCommentTrivia=12]="LineCommentTrivia",e[e.BlockCommentTrivia=13]="BlockCommentTrivia",e[e.LineBreakTrivia=14]="LineBreakTrivia",e[e.Trivia=15]="Trivia",e[e.Unknown=16]="Unknown",e[e.EOF=17]="EOF"}(m||(m={}));const N=function(e,a=[],s=i.DEFAULT){let t=null,n=[];const o=[];function r(e){Array.isArray(n)?n.push(e):null!==t&&(n[t]=e)}return function(e,a,s=i.DEFAULT){const t=L(e,!1),n=[];function o(e){return e?()=>e(t.getTokenOffset(),t.getTokenLength(),t.getTokenStartLine(),t.getTokenStartCharacter()):()=>!0}function r(e){return e?()=>e(t.getTokenOffset(),t.getTokenLength(),t.getTokenStartLine(),t.getTokenStartCharacter(),(()=>n.slice())):()=>!0}function c(e){return e?a=>e(a,t.getTokenOffset(),t.getTokenLength(),t.getTokenStartLine(),t.getTokenStartCharacter()):()=>!0}function l(e){return e?a=>e(a,t.getTokenOffset(),t.getTokenLength(),t.getTokenStartLine(),t.getTokenStartCharacter(),(()=>n.slice())):()=>!0}const m=r(a.onObjectBegin),p=l(a.onObjectProperty),g=o(a.onObjectEnd),u=r(a.onArrayBegin),d=o(a.onArrayEnd),h=l(a.onLiteralValue),f=c(a.onSeparator),j=o(a.onComment),b=c(a.onError),k=s&&s.disallowComments,N=s&&s.allowTrailingComma;function v(){for(;;){const e=t.scan();switch(t.getTokenError()){case 4:y(14);break;case 5:y(15);break;case 3:y(13);break;case 1:k||y(11);break;case 2:y(12);break;case 6:y(16)}switch(e){case 12:case 13:k?y(10):j();break;case 16:y(1);break;case 15:case 14:break;default:return e}}}function y(e,a=[],s=[]){if(b(e),a.length+s.length>0){let e=t.getToken();for(;17!==e;){if(-1!==a.indexOf(e)){v();break}if(-1!==s.indexOf(e))break;e=v()}}}function x(e){const a=t.getTokenValue();return e?h(a):(p(a),n.push(a)),v(),!0}function T(){switch(t.getToken()){case 11:const e=t.getTokenValue();let a=Number(e);isNaN(a)&&(y(2),a=0),h(a);break;case 7:h(null);break;case 8:h(!0);break;case 9:h(!1);break;default:return!1}return v(),!0}function w(){return 10!==t.getToken()?(y(3,[],[2,5]),!1):(x(!1),6===t.getToken()?(f(":"),v(),_()||y(4,[],[2,5])):y(5,[],[2,5]),n.pop(),!0)}function C(){m(),v();let e=!1;for(;2!==t.getToken()&&17!==t.getToken();){if(5===t.getToken()){if(e||y(4,[],[]),f(","),v(),2===t.getToken()&&N)break}else e&&y(6,[],[]);w()||y(4,[],[2,5]),e=!0}return g(),2!==t.getToken()?y(7,[2],[]):v(),!0}function P(){u(),v();let e=!0,a=!1;for(;4!==t.getToken()&&17!==t.getToken();){if(5===t.getToken()){if(a||y(4,[],[]),f(","),v(),4===t.getToken()&&N)break}else a&&y(6,[],[]);e?(n.push(0),e=!1):n[n.length-1]++,_()||y(4,[],[4,5]),a=!0}return d(),e||n.pop(),4!==t.getToken()?y(8,[4],[]):v(),!0}function _(){switch(t.getToken()){case 3:return P();case 1:return C();case 10:return x(!0);default:return T()}}if(v(),17===t.getToken())return!!s.allowEmptyContent||(y(4,[],[]),!1);if(!_())return y(4,[],[]),!1;17!==t.getToken()&&y(9,[],[])}(e,{onObjectBegin:()=>{const e={};r(e),o.push(n),n=e,t=null},onObjectProperty:e=>{t=e},onObjectEnd:()=>{n=o.pop()},onArrayBegin:()=>{const e=[];r(e),o.push(n),n=e,t=null},onArrayEnd:()=>{n=o.pop()},onLiteralValue:r,onError:(e,s,t)=>{a.push({error:e,offset:s,length:t})}},s),n[0]};var v;!function(e){e[e.InvalidSymbol=1]="InvalidSymbol",e[e.InvalidNumberFormat=2]="InvalidNumberFormat",e[e.PropertyNameExpected=3]="PropertyNameExpected",e[e.ValueExpected=4]="ValueExpected",e[e.ColonExpected=5]="ColonExpected",e[e.CommaExpected=6]="CommaExpected",e[e.CloseBraceExpected=7]="CloseBraceExpected",e[e.CloseBracketExpected=8]="CloseBracketExpected",e[e.EndOfFileExpected=9]="EndOfFileExpected",e[e.InvalidCommentToken=10]="InvalidCommentToken",e[e.UnexpectedEndOfComment=11]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=12]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=13]="UnexpectedEndOfNumber",e[e.InvalidUnicode=14]="InvalidUnicode",e[e.InvalidEscapeCharacter=15]="InvalidEscapeCharacter",e[e.InvalidCharacter=16]="InvalidCharacter"}(v||(v={}));const y="undefined"!=typeof self&&void 0!==self.WorkerGlobalScope,x="process"in globalThis&&"undefined"!=typeof process&&void 0!==process.release&&"node"===process.release.name,T=y||!x;let w="",C="";function P(e){w=e.endsWith("/")?e:e+"/"}function _(e){C=e}let E=null;function S(e){if(T)return`${w}${e}`;{const a=require("path");return a.isAbsolute(e)?e:a.resolve(__dirname,"..",e)}}async function B(e){const a=[],s=N(await async function(e){const a=S(e);if(T)return await fetch(a).then((e=>e.text()));{const e=require("fs");return await e.promises.readFile(a,"utf-8")}}(e),a,{allowTrailingComma:!0});if(a.length)throw a[0];return s}async function q(e){const a=A(await B(e));if(a.include){const s=await q(f(...h(e),a.include));s.settings&&(a.settings=s.settings.concat(a.settings)),s.bg&&!a.bg&&(a.bg=s.bg),s.colors&&(a.colors={...s.colors,...a.colors}),delete a.include}return a}function A(e){const a=e.type||"dark",s={name:e.name,type:a,...e,...G(e)};var t;return e.include&&(s.include=e.include),e.tokenColors&&(s.settings=e.tokenColors,delete s.tokenColors),(t=s).settings||(t.settings=[]),t.settings[0]&&t.settings[0].settings&&!t.settings[0].scope||t.settings.unshift({settings:{foreground:t.fg,background:t.bg}}),s}const O="#333333",I="#bbbbbb",U="#fffffe",F="#1e1e1e";function G(e){let a,s,t=e.settings?e.settings:e.tokenColors;const n=t?t.find((e=>!e.name&&!e.scope)):void 0;return n?.settings?.foreground&&(a=n.settings.foreground),n?.settings?.background&&(s=n.settings.background),!a&&e?.colors?.["editor.foreground"]&&(a=e.colors["editor.foreground"]),!s&&e?.colors?.["editor.background"]&&(s=e.colors["editor.background"]),a||(a="light"===e.type?O:I),s||(s="light"===e.type?U:F),{fg:a,bg:s}}class M{constructor(e,a){this.languagesPath="languages/",this.languageMap={},this.scopeToLangMap={},this._onigLibPromise=e,this._onigLibName=a}get onigLib(){return this._onigLibPromise}getOnigLibName(){return this._onigLibName}getLangRegistration(e){return this.languageMap[e]}async loadGrammar(e){const a=this.scopeToLangMap[e];if(!a)return null;if(a.grammar)return a.grammar;const s=await async function(e){return await B(e)}(r.includes(a)?`${this.languagesPath}${a.path}`:a.path);return a.grammar=s,s}addLanguage(e){this.languageMap[e.id]=e,e.aliases&&e.aliases.forEach((a=>{this.languageMap[a]=e})),this.scopeToLangMap[e.scopeName]=e}}function $(e,a){let s=[];for(let t=0,n=a.length;t<n;t++){let n=a.slice(0,t),o=a[t];s[t]={scopeName:o,themeMatches:R(e,o,n)}}return s}function z(e,a){let s=e+".";return e===a||a.substring(0,s.length)===s}function W(e,a,s,t){if(!z(e,s))return!1;let n=a.length-1,o=t.length-1;for(;n>=0&&o>=0;)z(a[n],t[o])&&n--,o--;return-1===n}function R(e,a,s){let t=[],n=0;for(let o=0,r=e.settings.length;o<r;o++){let r,c=e.settings[o];if("string"==typeof c.scope)r=c.scope.split(/,/).map((e=>e.trim()));else{if(!Array.isArray(c.scope))continue;r=c.scope}for(let e=0,o=r.length;e<o;e++){let i=r[e].split(/ /);W(i[i.length-1],i.slice(0,i.length-1),a,s)&&(t[n++]=c,e=o)}}return t}const D={pre:({className:e,style:a,children:s})=>`<pre class="${e}" style="${a}">${s}</pre>`,code:({children:e})=>`<code>${e}</code>`,line:({className:e,children:a})=>`<span class="${e}">${a}</span>`,token:({style:e,children:a})=>`<span style="${e}">${a}</span>`};function V(e,a={}){const s=a.bg||"#fff",t=function(e,a){const s=new Map;for(const t of e){const e=a(t);s.has(e)?s.get(e).push(t):s.set(e,[t])}return s}(a.lineOptions??[],(e=>e.line)),n=a.elements||{};function o(e="",a={},s){const t=n[e]||D[e];return t?(s=s.filter(Boolean),t({...a,children:"code"===e?s.join("\n"):s.join("")})):""}return o("pre",{className:"shiki "+(a.themeName||""),style:`background-color: ${s}`},[a.langId?`<div class="language-id">${a.langId}</div>`:"",o("code",{},e.map(((s,n)=>{const r=n+1,c=function(e){const a=new Set(["line"]);for(const s of e)for(const e of s.classes??[])a.add(e);return Array.from(a)}(t.get(r)??[]).join(" ");return o("line",{className:c,lines:e,line:s,index:n},s.map(((e,t)=>{const n=[`color: ${e.color||a.fg}`];return e.fontStyle&p.Italic&&n.push("font-style: italic"),e.fontStyle&p.Bold&&n.push("font-weight: bold"),e.fontStyle&p.Underline&&n.push("text-decoration: underline"),o("token",{style:n.join("; "),tokens:s,token:e,index:t},[(r=e.content,r.replace(/[&<>"']/g,(e=>K[e])))]);var r})))})))])}const K={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};class H extends n{constructor(e){super(e),this._resolver=e,this.themesPath="themes/",this._resolvedThemes={},this._resolvedGrammars={},this._langGraph=new Map,this._langMap=r.reduce(((e,a)=>(e[a.id]=a,e)),{})}getTheme(e){return"string"==typeof e?this._resolvedThemes[e]:e}async loadTheme(e){return"string"==typeof e?(this._resolvedThemes[e]||(this._resolvedThemes[e]=await q(`${this.themesPath}${e}.json`)),this._resolvedThemes[e]):((e=A(e)).name&&(this._resolvedThemes[e.name]=e),e)}async loadThemes(e){return await Promise.all(e.map((e=>this.loadTheme(e))))}getLoadedThemes(){return Object.keys(this._resolvedThemes)}getGrammar(e){return this._resolvedGrammars[e]}async loadLanguage(e){const a=e.embeddedLangs?.reduce((async(e,a,s)=>{if(!this.getLoadedLanguages().includes(a)&&this._resolver.getLangRegistration(a))return await this._resolver.loadGrammar(this._resolver.getLangRegistration(a).scopeName),e[this._resolver.getLangRegistration(a).scopeName]=s+2,e}),{}),s={embeddedLanguages:a,balancedBracketSelectors:e.balancedBracketSelectors||["*"],unbalancedBracketSelectors:e.unbalancedBracketSelectors||[]},t=await this.loadGrammarWithConfiguration(e.scopeName,1,s);this._resolvedGrammars[e.id]=t,e.aliases&&e.aliases.forEach((e=>{this._resolvedGrammars[e]=t}))}async loadLanguages(e){for(const a of e)this.resolveEmbeddedLanguages(a);const a=Array.from(this._langGraph.values());for(const e of a)this._resolver.addLanguage(e);for(const e of a)await this.loadLanguage(e)}getLoadedLanguages(){return Object.keys(this._resolvedGrammars)}resolveEmbeddedLanguages(e){if(this._langGraph.has(e.id)||this._langGraph.set(e.id,e),e.embeddedLangs)for(const a of e.embeddedLangs)this._langGraph.set(a,this._langMap[a])}}function Q(e){return"string"==typeof e?r.find((a=>a.id===e||a.aliases?.includes(e))):e}async function J(n){const{_languages:o,_themes:c,_wasmPath:i}=function(e){let a=r,s=e.themes||[],t=e.paths?.wasm?e.paths.wasm.endsWith("/")?e.paths.wasm:e.paths.wasm+"/":"dist/";return e.langs&&(a=e.langs.map(Q)),e.theme&&s.unshift(e.theme),s.length||(s=["nord"]),{_languages:a,_themes:s,_wasmPath:t}}(n),l=new M(async function(t){if(!E){let n;if(T)n=e("string"==typeof C?{data:await fetch(S(f(...h(t),"onig.wasm")))}:{data:C});else{const a=require("path").join(require.resolve("vscode-oniguruma"),"../onig.wasm"),s=require("fs").readFileSync(a).buffer;n=e(s)}E=n.then((()=>({createOnigScanner:e=>a(e),createOnigString:e=>s(e)})))}return E}(i),"vscode-oniguruma"),m=new H(l);n.paths?.themes&&(m.themesPath=n.paths.themes.endsWith("/")?n.paths.themes:n.paths.themes+"/"),n.paths?.languages&&(l.languagesPath=n.paths.languages.endsWith("/")?n.paths.languages:n.paths.languages+"/");const p=(await m.loadThemes(c))[0];let u;await m.loadLanguages(o);let d={"#000001":"var(--shiki-color-text)","#000002":"var(--shiki-color-background)","#000004":"var(--shiki-token-constant)","#000005":"var(--shiki-token-string)","#000006":"var(--shiki-token-comment)","#000007":"var(--shiki-token-keyword)","#000008":"var(--shiki-token-parameter)","#000009":"var(--shiki-token-function)","#000010":"var(--shiki-token-string-expression)","#000011":"var(--shiki-token-punctuation)","#000012":"var(--shiki-token-link)"};function L(e){const a=e?m.getTheme(e):p;if(!a)throw Error(`No theme registration for ${e}`);u&&u.name===a.name||(m.setTheme(a),u=a);const s=m.getColorMap();return"css"===a.type&&function(e,a){e.bg=d[e.bg]||e.bg,e.fg=d[e.fg]||e.fg,a.forEach(((e,s)=>{a[s]=d[e]||e}))}(a,s),{_theme:a,_colorMap:s}}function j(e,a="text",s,n={includeExplanation:!0}){if(function(e){return!e||["plaintext","txt","text"].includes(e)}(a)){return[...e.split(/\r\n|\r|\n/).map((e=>[{content:e}]))]}const{_grammar:o}=function(e){const a=m.getGrammar(e);if(!a)throw Error(`No language registration for ${e}`);return{_grammar:a}}(a),{_theme:r,_colorMap:c}=L(s);return function(e,a,s,n,o){let r=s.split(/\r\n|\r|\n/),c=t,i=[],l=[];for(let s=0,t=r.length;s<t;s++){let t,m,p,u=r[s];if(""===u){i=[],l.push([]);continue}o.includeExplanation&&(t=n.tokenizeLine(u,c),m=t.tokens,p=0);let d=n.tokenizeLine2(u,c),h=d.tokens.length/2;for(let s=0;s<h;s++){let t=d.tokens[2*s],n=s+1<h?d.tokens[2*s+2]:u.length;if(t===n)continue;let r=d.tokens[2*s+1],c=a[g.getForeground(r)],l=g.getFontStyle(r),f=[];if(o.includeExplanation){let a=0;for(;t+a<n;){let s=m[p],t=u.substring(s.startIndex,s.endIndex);a+=t.length,f.push({content:t,scopes:$(e,s.scopes)}),p++}}i.push({content:u.substring(t,n),color:c,fontStyle:l,explanation:f})}l.push(i),i=[],c=d.ruleStack}return l}(r,c,e,o,n)}return{codeToThemedTokens:j,codeToHtml:function(e,a="text",s){let t;t="object"==typeof a?a:{lang:a,theme:s};const n=j(e,t.lang,t.theme,{includeExplanation:!1}),{_theme:o}=L(t.theme);return V(n,{fg:o.fg,bg:o.bg,lineOptions:t?.lineOptions,themeName:o.name})},getTheme:e=>L(e)._theme,loadTheme:async function(e){await m.loadTheme(e)},loadLanguage:async function(e){const a=Q(e);l.addLanguage(a),await m.loadLanguage(a)},getBackgroundColor:function(e){const{_theme:a}=L(e);return a.bg},getForegroundColor:function(e){const{_theme:a}=L(e);return a.fg},getLoadedThemes:function(){return m.getLoadedThemes()},getLoadedLanguages:function(){return m.getLoadedLanguages()},setColorReplacements:function(e){d=e}}}function X(e){_(e)}export{r as BUNDLED_LANGUAGES,o as BUNDLED_THEMES,p as FontStyle,J as getHighlighter,q as loadTheme,V as renderToHtml,P as setCDN,X as setOnigasmWASM,_ as setWasm,A as toShikiTheme};
