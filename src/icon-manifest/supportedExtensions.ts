/* tslint:disable max-line-length */
import { languages } from '../../src/icon-manifest/languages';
import {
  FileFormat,
  IFileCollection,
} from '../../src/models';

export const extensions: IFileCollection = {
  default: {
    file: { icon: 'file', format: FileFormat.svg },
  },
  supported: [
    { icon: 'access', extensions: ['accdb', 'accdt', 'mdb', 'accda', 'accdc', 'accde', 'accdp', 'accdr', 'accdu', 'ade', 'adp', 'laccdb', 'ldb', 'mam', 'maq', 'mdw' ], format: FileFormat.svg },
    { icon: 'actionscript', extensions: ['as'], format: FileFormat.svg },
    { icon: 'ai', extensions: ['ai'], format: FileFormat.svg },
    { icon: 'ai', extensions: ['ai'], format: FileFormat.svg, disabled: true },
    { icon: 'angular', extensions: ['angular-cli.json'], filename: true, format: FileFormat.svg },
    { icon: 'ng_component_ts', extensions: ['component.ts'], format: FileFormat.svg },
    { icon: 'ng_component_js', extensions: ['component.js'], format: FileFormat.svg },
    { icon: 'ng_directive_ts', extensions: ['directive.ts'], format: FileFormat.svg },
    { icon: 'ng_directive_js', extensions: ['directive.js'], format: FileFormat.svg },
    { icon: 'ng_pipe_ts', extensions: ['pipe.ts'], format: FileFormat.svg },
    { icon: 'ng_pipe_js', extensions: ['pipe.js'], format: FileFormat.svg },
    { icon: 'ng_service_ts', extensions: ['service.ts'], format: FileFormat.svg },
    { icon: 'ng_service_js', extensions: ['service.js'], format: FileFormat.svg },
    { icon: 'ng_module_ts', extensions: ['module.ts'], format: FileFormat.svg },
    { icon: 'ng_module_js', extensions: ['module.js'], format: FileFormat.svg },
    { icon: 'ng_routing_ts', extensions: ['routing.ts'], format: FileFormat.svg },
    { icon: 'ng_routing_js', extensions: ['routing.js'], format: FileFormat.svg },
    { icon: 'ng_routing_ts', extensions: ['app-routing.module.ts'], filename: true, format: FileFormat.svg },
    { icon: 'ng_routing_js', extensions: ['app-routing.module.js'], filename: true, format: FileFormat.svg },
    { icon: 'ng_component_ts2', extensions: ['component.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_component_js2', extensions: ['component.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_directive_ts2', extensions: ['directive.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_directive_js2', extensions: ['directive.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_pipe_ts2', extensions: ['pipe.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_pipe_js2', extensions: ['pipe.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_service_ts2', extensions: ['service.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_service_js2', extensions: ['service.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_module_ts2', extensions: ['module.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_module_js2', extensions: ['module.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_ts2', extensions: ['routing.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_js2', extensions: ['routing.js'], format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_ts2', extensions: ['app-routing.module.ts'], filename: true, format: FileFormat.svg, disabled: true },
    { icon: 'ng_routing_js2', extensions: ['app-routing.module.js'], filename: true, format: FileFormat.svg, disabled: true },
    { icon: 'apache', extensions: ['.htaccess', '.htpasswd'], filename: true, format: FileFormat.svg },
    { icon: 'apib', extensions: ['apib'], format: FileFormat.svg },
    { icon: 'applescript', extensions: ['app'], format: FileFormat.svg },
    { icon: 'appveyor', extensions: ['appveyor.yml', '.appveyor.yml'], filename: true, format: FileFormat.svg },
    { icon: 'ansible', extensions: ['ansible'], format: FileFormat.svg },
    { icon: 'asp', extensions: ['asp'], format: FileFormat.svg },
    { icon: 'aspx', extensions: ['aspx', 'ascx'], format: FileFormat.svg },
    { icon: 'assembly', extensions: ['s', 'asm'], format: FileFormat.svg },
    { icon: 'autohotkey', extensions: ['ahk'], format: FileFormat.svg },
    { icon: 'autoit', extensions: ['au3'], format: FileFormat.svg },
    { icon: 'aws', extensions: [], format: FileFormat.svg },
    { icon: 'babel', extensions: ['.babelrc'], filename: true, format: FileFormat.svg },
    { icon: 'bat', extensions: [], languages: [languages.bat], format: FileFormat.svg },
    { icon: 'binary', extensions: ['bin', 'o', 'a', 'exe', 'obj', 'lib', 'dll', 'so', 'pyc', 'pyd', 'pyo', 'n', 'ndll', 'pdb', 'cmo', 'cmx', 'cma', 'cmxa', 'cmi'], format: FileFormat.svg }, // http://www.file-extensions.org/filetype/extension/name/binary-files
    { icon: 'bithound', extensions: ['.bithoundrc'], filename: true, format: FileFormat.svg },
    { icon: 'blade', extensions: ['blade.php'], format: FileFormat.svg },
    { icon: 'bower', extensions: ['.bowerrc', 'bower.json'], filename: true, format: FileFormat.svg },
    { icon: 'buckbuild', extensions: ['.buckconfig'], filename: true, format: FileFormat.svg },
    { icon: 'bundler', extensions: ['gemfile', 'gemfile.lock'], filename: true, format: FileFormat.svg },
    { icon: 'c', extensions: [], languages: [languages.c], format: FileFormat.svg },
    { icon: 'c2', extensions: [], languages: [languages.c], format: FileFormat.svg, disabled: true },
    { icon: 'cake', extensions: ['cake'], format: FileFormat.svg },
    { icon: 'cakephp', extensions: [], format: FileFormat.svg },
    { icon: 'cf', extensions: ['lucee'], format: FileFormat.svg },
    { icon: 'cf2', extensions: ['lucee'], format: FileFormat.svg, disabled: true },
    { icon: 'cfc', extensions: ['cfc'], format: FileFormat.svg },
    { icon: 'cfc2', extensions: ['cfc'], format: FileFormat.svg, disabled: true },
    { icon: 'cfm', extensions: ['cfm'], format: FileFormat.svg },
    { icon: 'cfc2', extensions: ['cfm'], format: FileFormat.svg, disabled: true },
    { icon: 'cheader', extensions: ['h'], format: FileFormat.svg },
    { icon: 'class', extensions: ['class'], format: FileFormat.svg },
    { icon: 'clojure', extensions: ['cjm', 'cljc'], languages: [languages.clojure], format: FileFormat.svg },
    { icon: 'cmake', extensions: ['CMakeCache.txt', 'CMakeLists.txt', '.cmake'], filename: true, format: FileFormat.svg },
    { icon: 'cobol', extensions: ['cbl', 'cob', 'cpy'], format: FileFormat.svg },
    { icon: 'codeclimate', extensions: ['codeclimate.yml'], light: true, filename: true, format: FileFormat.svg },
    { icon: 'coffeescript', extensions: [], languages: [languages.coffeescript], format: FileFormat.svg },
    { icon: 'config', extensions: ['env'], light: true, languages: [languages.properties], format: FileFormat.svg },
    { icon: 'config', extensions: ['.env.example'], light: true, filename: true, format: FileFormat.svg },
    { icon: 'compass', extensions: [], format: FileFormat.svg },
    { icon: 'composer', extensions: ['composer.json', 'composer.lock'], filename: true, format: FileFormat.svg },
    { icon: 'cpp', extensions: [], languages: [languages.cpp], format: FileFormat.svg },
    { icon: 'cpp2', extensions: [], languages: [languages.cpp], format: FileFormat.svg, disabled: true },
    { icon: 'cppheader', extensions: ['hpp'], format: FileFormat.svg },
    { icon: 'crystal', extensions: [], languages: [languages.crystal], format: FileFormat.svg },
    { icon: 'csharp', extensions: ['csx'], languages: [languages.csharp], format: FileFormat.svg },
    { icon: 'csproj', extensions: ['csproj'], format: FileFormat.png },
    { icon: 'css', extensions: [], languages: [languages.css], format: FileFormat.svg },
    { icon: 'csslint', extensions: ['.csslintrc'], filename: true, format: FileFormat.svg },
    { icon: 'cssmap', extensions: ['css.map'], format: FileFormat.svg },
    { icon: 'cucumber', extensions: ['feature'], format: FileFormat.svg },
    { icon: 'dartlang', extensions: ['dart'], format: FileFormat.svg },
    { icon: 'delphi', extensions: ['pas', 'dfm', 'dpr'], format: FileFormat.svg },
    { icon: 'dlang', extensions: ['d'], format: FileFormat.svg },
    { icon: 'diff', extensions: [], languages: [languages.diff], format: FileFormat.svg },
    { icon: 'docker', extensions: ['.dockerignore', 'docker-compose.yml', 'docker-cloud.yml'], filename: true, languages: [languages.dockerfile], format: FileFormat.svg },
    { icon: 'docker2', extensions: ['.dockerignore', 'docker-compose.yml', 'docker-cloud.yml'], filename: true, languages: [languages.dockerfile], format: FileFormat.svg, disabled: true },
    { icon: 'editorconfig', extensions: ['.editorconfig'], filename: true, format: FileFormat.svg },
    { icon: 'ejs', extensions: ['ejs'], format: FileFormat.svg },
    { icon: 'elasticbeanstalk', extensions: [], format: FileFormat.svg },
    { icon: 'elixir', extensions: ['ex', 'exs', 'eex'], format: FileFormat.png },
    { icon: 'elm', extensions: ['elm'], format: FileFormat.svg },
    { icon: 'elm', extensions: ['elm-package.json'], filename: true, format: FileFormat.svg },
    { icon: 'elm2', extensions: ['elm'], format: FileFormat.svg, disabled: true },
    { icon: 'elm2', extensions: ['elm-package.json'], filename: true, format: FileFormat.svg, disabled: true },
    { icon: 'emacs', extensions: ['el', 'elc'], format: FileFormat.svg },
    { icon: 'ember', extensions: ['.ember-cli'], filename: true, format: FileFormat.svg },
    { icon: 'eps', extensions: ['eps'], format: FileFormat.svg },
    { icon: 'erb', extensions: ['rhtml', 'erb'], format: FileFormat.svg },
    { icon: 'erlang', extensions: ['erl', 'hrl'], format: FileFormat.svg },
    { icon: 'erlang', extensions: ['emakefile', '.emakerfile'], filename: true, format: FileFormat.svg },
    { icon: 'eslint', extensions: ['.eslintrc', '.eslintignore', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yaml', '.eslintrc.yml'], filename: true, format: FileFormat.svg },
    { icon: 'eslint2', extensions: ['.eslintrc', '.eslintignore', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yaml', '.eslintrc.yml'], filename: true, format: FileFormat.svg, disabled: true },
    { icon: 'excel', extensions: ['xls', 'xlsx', 'xlsm', 'ods'], format: FileFormat.svg },
    { icon: 'favicon', extensions: ['favicon.ico'], filename: true, format: FileFormat.svg },
    { icon: 'flash', extensions: ['swf', 'swc', 'sol'], format: FileFormat.svg },
    { icon: 'flow', extensions: ['js.flow'], format: FileFormat.svg },
    { icon: 'flow', extensions: ['.flowconfig'], filename: true, format: FileFormat.svg },
    { icon: 'font', extensions: ['woff', 'woff2', 'ttf', 'otf', 'eot', 'pfa', 'pfb', 'sfd'], light: true, format: FileFormat.svg },
    { icon: 'fortran', extensions: ['f90', 'mod', 'f'], format: FileFormat.svg },
    { icon: 'fsharp', extensions: [], languages: [languages.fsharp], format: FileFormat.svg },
    { icon: 'git', extensions: ['.gitattributes', '.gitconfig', '.gitignore', '.gitmodules', '.gitkeep'], filename: true, languages: [languages.git], format: FileFormat.svg },
    { icon: 'gitlab', extensions: ['.gitlab-ci.yml'], filename: true, format: FileFormat.svg },
    { icon: 'go', extensions: [], languages: [languages.go], format: FileFormat.svg },
    { icon: 'gradle', extensions: ['gradle'], format: FileFormat.svg },
    { icon: 'graphql', extensions: ['gql', 'graphql'], format: FileFormat.svg },
    { icon: 'graphviz', extensions: [], format: FileFormat.png },
    { icon: 'groovy', extensions: [], languages: [languages.groovy], format: FileFormat.svg },
    { icon: 'groovy2', extensions: [], languages: [languages.groovy], format: FileFormat.svg, disabled: true },
    { icon: 'grunt', extensions: ['gruntfile.js'], filename: true, format: FileFormat.svg },
    { icon: 'gulp', extensions: ['gulpfile.js'], filename: true, format: FileFormat.svg },
    { icon: 'haml', extensions: ['haml'], format: FileFormat.svg },
    { icon: 'handlebars', extensions: [], languages: [languages.handlebars], format: FileFormat.svg },
    { icon: 'handlebars2', extensions: [], languages: [languages.handlebars], format: FileFormat.svg, disabled: true },
    { icon: 'haskell', extensions: ['has', 'hs', 'lhs', 'lit', 'gf'], format: FileFormat.svg },
    { icon: 'haskell2', extensions: ['has', 'hs', 'lhs', 'lit', 'gf'], format: FileFormat.svg, disabled: true },
    { icon: 'haxe', extensions: ['hx', 'hxml'], format: FileFormat.svg },
    { icon: 'haxe', extensions: ['haxelib.json'], filename: true, format: FileFormat.svg },
    { icon: 'haxecheckstyle', extensions: ['checkstyle.json'], filename: true, format: FileFormat.svg },
    { icon: 'haxedevelop', extensions: ['hxproj'], format: FileFormat.svg },
    { icon: 'html', extensions: [], languages: [languages.html], format: FileFormat.svg },
    { icon: 'idris', extensions: ['idr', 'lidr', 'ibc'], format: FileFormat.svg },
    { icon: 'image', extensions: ['jpeg', 'jpg', 'gif', 'png', 'bmp', 'tiff', 'ico'], format: FileFormat.svg },
    { icon: 'ini', extensions: [], languages: [languages.ini], light: true, format: FileFormat.svg },
    { icon: 'infopath', extensions: ['infopathxml', 'xsn', 'xsf', 'xtp2'], format: FileFormat.svg },
    { icon: 'ionic', extensions: ['ionic.project'], filename: true, format: FileFormat.svg },
    { icon: 'ionic', extensions: ['ionic.config.json'], filename: true, format: FileFormat.svg },
    { icon: 'jar', extensions: ['jar'], format: FileFormat.svg },
    { icon: 'java', extensions: [], languages: [languages.java], format: FileFormat.svg },
    { icon: 'jbuilder', extensions: ['jbuilder'], format: FileFormat.svg },
    { icon: 'jest', extensions: ['jest.json', 'jest.config.json'], filename: true, format: FileFormat.svg },
    { icon: 'jinja', extensions: ['jinja', 'jinja2'], format: FileFormat.svg },
    { icon: 'js', extensions: [], languages: [languages.javascript], format: FileFormat.svg },
    { icon: 'js_official', extensions: [], languages: [languages.javascript], format: FileFormat.svg, disabled: true },
    { icon: 'jshint', extensions: ['.jshintrc'], filename: true, format: FileFormat.svg },
    { icon: 'jsmap', extensions: ['js.map'], format: FileFormat.svg },
    { icon: 'json', extensions: [], languages: [languages.json], format: FileFormat.svg },
    { icon: 'json_official', extensions: [], languages: [languages.json], format: FileFormat.svg, disabled: true },
    { icon: 'json2', extensions: [], languages: [languages.json], format: FileFormat.svg, disabled: true },
    { icon: 'jsp', extensions: ['jsp'], format: FileFormat.svg },
    { icon: 'julia', extensions: ['jl'], format: FileFormat.svg },
    { icon: 'julia2', extensions: ['jl'], format: FileFormat.svg, disabled: true },
    { icon: 'karma', extensions: ['karma.conf.js', 'karma.conf.coffee'], filename: true, format: FileFormat.svg },
    { icon: 'kotlin', extensions: ['kt'], format: FileFormat.svg },
    { icon: 'lerna', extensions: ['lerna.json'], light: true, filename: true, format: FileFormat.svg },
    { icon: 'less', extensions: [], languages: [languages.less], format: FileFormat.svg },
    { icon: 'license', extensions: ['enc'], format: FileFormat.svg },
    { icon: 'license', extensions: ['license', 'licence', 'license.md', 'licence.md'], filename: true, format: FileFormat.svg },
    { icon: 'lisp', extensions: ['bil'], format: FileFormat.svg},
    { icon: 'lime', extensions: ['hxp'], format: FileFormat.svg },
    { icon: 'lime', extensions: ['include.xml'], filename: true, format: FileFormat.svg },
    { icon: 'locale', extensions: [], format: FileFormat.svg },
    { icon: 'log', extensions: ['log'], format: FileFormat.svg },
    { icon: 'lsl', extensions: ['lsl'], format: FileFormat.svg },
    { icon: 'lua', extensions: [], languages: [languages.lua], format: FileFormat.svg },
    { icon: 'lync', extensions: ['crec', 'ocrec'], format: FileFormat.svg },
    { icon: 'makefile', extensions: ['makefile'], format: FileFormat.svg },
    { icon: 'makefile', extensions: [], languages: [languages.makefile], format: FileFormat.svg },
    { icon: 'map', extensions: ['map'], format: FileFormat.svg },
    { icon: 'markdown', extensions: ['mdown', 'markdown'], languages: [languages.markdown], format: FileFormat.svg },
    { icon: 'marko', extensions: ['marko'], format: FileFormat.svg },
    { icon: 'markojs', extensions: ['marko.js'], format: FileFormat.svg },
    { icon: 'matlab', extensions: ['fig', 'mat', 'mex', 'mexn', 'mexrs6', 'mn', 'mum', 'mx', 'mx3', 'rwd', 'slx', 'slddc', 'smv', 'tikz', 'xvc'], format: FileFormat.png },
    { icon: 'masterpage', extensions: ['master'], format: FileFormat.png },
    { icon: 'meteor', extensions: [], format: FileFormat.svg },
    { icon: 'mustache', extensions: ['mustache', 'mst'], light: true, format: FileFormat.svg },
    { icon: 'nim', extensions: ['nim', 'nims'], format: FileFormat.svg },
    { icon: 'node', extensions: ['.nvmrc'], filename: true, format: FileFormat.svg },
    { icon: 'node2', extensions: [], format: FileFormat.svg, disabled: true },
    { icon: 'npm', extensions: ['.npmignore', '.npmrc', 'package.json'], filename: true, format: FileFormat.svg },
    { icon: 'nsi', extensions: ['nsi', 'nsh', 'bbnsi', 'bbnsh'], format: FileFormat.svg },
    { icon: 'nuget', extensions: ['nupkg', 'nuspec', 'psmdcp'], format: FileFormat.svg },
    { icon: 'nunjucks', extensions: ['njk', 'nunjucks', 'nunjs', 'nunj', 'njs', 'nj'], format: FileFormat.svg },
    { icon: 'objectivec', extensions: [], languages: [languages.objectivec], format: FileFormat.svg },
    { icon: 'ocaml', extensions: ['ml', 'mll', 'mli', 'mly', 'ocamlmakefile', 'merlin'], format: FileFormat.svg },
    { icon: 'onenote', extensions: ['one', 'onepkg', 'onetoc', 'onetoc2', 'sig'], format: FileFormat.svg },
    { icon: 'opencl', extensions: ['cl', 'opencl'], format: FileFormat.svg },
    { icon: 'outlook', extensions: ['pst', 'bcmx', 'otm', 'msg', 'oft'], format: FileFormat.svg },
    { icon: 'paket', extensions: ['paket.dependencies', 'paket.lock', 'paket.references', 'paket.template', 'paket.local'], filename: true, format: FileFormat.svg },
    { icon: 'patch', extensions: ['patch'], format: FileFormat.svg },
    { icon: 'pdf', extensions: ['pdf'], format: FileFormat.svg },
    { icon: 'pdf2', extensions: ['pdf'], format: FileFormat.svg, disabled: true },
    { icon: 'perl', extensions: [], languages: [languages.perl], format: FileFormat.svg },
    { icon: 'perl2', extensions: [], languages: [languages.perl], format: FileFormat.svg, disabled: true },
    { icon: 'photoshop', extensions: ['psd'], format: FileFormat.svg },
    { icon: 'photoshop', extensions: ['psd'], format: FileFormat.svg, disabled: true },
    { icon: 'php', extensions: ['php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'], languages: [languages.php], format: FileFormat.svg },
    { icon: 'php2', extensions: ['php1', 'php2', 'php3', 'php4', 'php5', 'php6', 'phps', 'phpsa', 'phpt', 'phtml', 'phar'], languages: [languages.php], format: FileFormat.svg, disabled: true },
    { icon: 'phpunit', extensions: ['phpunit.xml'], filename: true, format: FileFormat.png },
    { icon: 'plantuml', extensions: ['pu', 'plantuml', 'iuml', 'puml'], format: FileFormat.png },
    { icon: 'poedit', extensions: ['po', 'mo'], format: FileFormat.svg },
    { icon: 'polymer', extensions: [], languages: [languages.polymer], format: FileFormat.svg },
    { icon: 'postcss', extensions: [], languages: [languages.postcss], format: FileFormat.svg },
    { icon: 'powerpoint', extensions: ['pot', 'potx', 'potm', 'pps', 'ppsx', 'ppsm', 'ppt', 'pptx', 'pptm', 'pa', 'ppa', 'ppam', 'sldm', 'sldx'], format: FileFormat.svg },
    { icon: 'powershell', extensions: [], languages: [languages.powershell], format: FileFormat.svg },
    { icon: 'procfile', extensions: ['procfile'], filename: true, format: FileFormat.svg },
    { icon: 'prolog', extensions: ['pro', 'P'], languages: [languages.prolog], format: FileFormat.png },
    { icon: 'protobuf', extensions: ['proto'], format: FileFormat.svg },
    { icon: 'protractor', extensions: ['protractor.conf.js'], filename: true, format: FileFormat.svg },
    { icon: 'publisher', extensions: ['pub', 'puz'], format: FileFormat.svg },
    { icon: 'puppet', extensions: ['epp', 'pp'], format: FileFormat.svg },
    { icon: 'pug', extensions: [], languages: [languages.pug], format: FileFormat.svg },
    { icon: 'pug', extensions: ['.jade-lintrc', '.pug-lintrc', '.jade-lint.json', '.pug-lintrc.js', '.pug-lintrc.json'], filename: true, format: FileFormat.svg },
    { icon: 'purescript', extensions: ['purs'], light: true, format: FileFormat.svg },
    { icon: 'python', extensions: [], languages: [languages.python], format: FileFormat.svg },
    { icon: 'qlikview', extensions: ['qvd', 'qvw'], format: FileFormat.svg },
    { icon: 'r', extensions: [], languages: [languages.r], format: FileFormat.svg },
    { icon: 'rails', extensions: [], format: FileFormat.svg },
    { icon: 'rake', extensions: ['rake'], format: FileFormat.svg },
    { icon: 'rake', extensions: ['rakefile'], filename: true, format: FileFormat.svg },
    { icon: 'raml', extensions: ['raml'], format: FileFormat.svg },
    { icon: 'razor', extensions: [], languages: [languages.razor], format: FileFormat.svg },
    { icon: 'reactjs', extensions: [], languages: [languages.javascriptreact], format: FileFormat.svg },
    { icon: 'reacttemplate', extensions: ['rt'], format: FileFormat.svg },
    { icon: 'reactts', extensions: ['tsx'], format: FileFormat.svg },
    { icon: 'rest', extensions: [], languages: [languages.restructuredtext], format: FileFormat.svg },
    { icon: 'riot', extensions: ['tag'], format: FileFormat.svg },
    { icon: 'robotframework', extensions: ['robot'], format: FileFormat.svg },
    { icon: 'rollup', extensions: ['rollup.config.js'], filename: true, format: FileFormat.svg },
    { icon: 'rspec', extensions: ['.rspec'], filename: true, format: FileFormat.svg },
    { icon: 'ruby', extensions: [], languages: [languages.ruby], format: FileFormat.svg },
    { icon: 'rust', extensions: [], languages: [languages.rust], format: FileFormat.png },
    { icon: 'saltstack', extensions: ['sls'], format: FileFormat.svg },
    { icon: 'sass', extensions: ['sass'], format: FileFormat.svg },
    { icon: 'scala', extensions: ['scala'], format: FileFormat.svg },
    { icon: 'script', extensions: [], format: FileFormat.svg },
    { icon: 'scss', extensions: [], languages: [languages.scss], format: FileFormat.svg },
    { icon: 'shaderlab', extensions: [], languages: [languages.shaderlab], light: true, format: FileFormat.svg },
    { icon: 'shell', extensions: ['fish'], languages: [languages.shellscript], format: FileFormat.svg },
    { icon: 'slim', extensions: ['slim', 'skim'], format: FileFormat.svg },
    { icon: 'sln', extensions: ['sln'], format: FileFormat.png },
    { icon: 'smarty', extensions: ['tpl', 'swig'], format: FileFormat.svg },
    { icon: 'snyk', extensions: ['.snyk'], filename: true, format: FileFormat.svg },
    { icon: 'source', extensions: [], format: FileFormat.svg },
    { icon: 'sql', extensions: [], languages: [languages.sql], format: FileFormat.svg },
    { icon: 'sqlite', extensions: ['sqlite', 'sqlite3', 'db3'], format: FileFormat.svg },
    { icon: 'sss', extensions: ['sss'], format: FileFormat.svg },
    { icon: 'style', extensions: [], format: FileFormat.svg },
    { icon: 'stylelint', extensions: ['.stylelintrc', 'stylelint.config.js'], light: true, filename: true, format: FileFormat.svg },
    { icon: 'stylus', extensions: ['styl'], format: FileFormat.svg },
    { icon: 'storyboard', extensions: ['storyboard'], format: FileFormat.png },
    { icon: 'svg', extensions: ['svg'], format: FileFormat.svg },
    { icon: 'swift', extensions: [], languages: [languages.swift], format: FileFormat.svg },
    { icon: 'swift', extensions: ['Package.pins'], filename: true, format: FileFormat.svg },
    { icon: 'tcl', extensions: ['tcl', 'exp'], format: FileFormat.svg },
    { icon: 'terraform', extensions: ['tf', 'terra'], format: FileFormat.svg },
    { icon: 'testjs', extensions: ['test.js', 'spec.js'], format: FileFormat.svg },
    { icon: 'testts', extensions: ['test.ts', 'spec.ts'], format: FileFormat.svg },
    { icon: 'tex', extensions: ['texi', 'tex'], light: true, format: FileFormat.svg },
    { icon: 'text', extensions: ['csv'], languages: [languages.plaintext], format: FileFormat.svg },
    { icon: 'textile', extensions: ['textile'], format: FileFormat.svg },
    { icon: 'tfs', extensions: ['.tfignore'], filename: true, format: FileFormat.svg },
    { icon: 'todo', extensions: ['todo'], light: true, format: FileFormat.svg },
    { icon: 'toml', extensions: ['toml'], format: FileFormat.svg },
    { icon: 'travis', extensions: ['.travis.yml'], filename: true, format: FileFormat.svg },
    { icon: 'tslint', extensions: ['tslint.json'], filename: true, format: FileFormat.svg },
    { icon: 'twig', extensions: ['twig'], format: FileFormat.png },
    { icon: 'typescript', extensions: [], languages: [languages.typescript], format: FileFormat.svg },
    { icon: 'typescript_official', extensions: [], languages: [languages.typescript], format: FileFormat.svg, disabled: true },
    { icon: 'typescriptdef', extensions: ['d.ts'], format: FileFormat.svg },
    { icon: 'typescriptdef_official', extensions: ['d.ts'], format: FileFormat.svg, disabled: true },
    { icon: 'vagrant', extensions: ['vagrantfile'], filename: true, format: FileFormat.svg },
    { icon: 'vash', extensions: ['vash'], format: FileFormat.svg },
    { icon: 'vb', extensions: [], languages: [languages.vb], format: FileFormat.svg },
    { icon: 'vbhtml', extensions: ['vbhtml'], format: FileFormat.svg },
    { icon: 'vbproj', extensions: ['vbproj'], format: FileFormat.png },
    { icon: 'vhdl', extensions: [], languages: [languages.vhdl], format: FileFormat.svg },
    { icon: 'view', extensions: [], format: FileFormat.svg },
    { icon: 'vim', extensions: ['vim'], format: FileFormat.svg },
    { icon: 'vim', extensions: ['.vimrc', '.gvimrc'], filename: true, format: FileFormat.svg },
    { icon: 'volt', extensions: ['volt'], format: FileFormat.svg },
    {
      icon: 'vscode',
      extensions: [
        'vscodeignore.json',
        'launch.json',
        'tasks.json',
        'jsconfig.json',
        'tsconfig.json',
        '.vscodeignore',
      ],
      filename: true,
      format: FileFormat.svg,
    },
    { icon: 'vsix', extensions: ['vsix'], light: true, format: FileFormat.svg },
    { icon: 'vue', extensions: ['vue'], format: FileFormat.svg },
    {
      icon: 'webpack',
      extensions: [
        'webpack.config.js',
        'webpack.config.common.js',
        'webpack.config.babel.js',
        'webpack.config.common.babel.js',
        'webpack.config.base.babel.js',
        'webpack.config.dev.babel.js',
        'webpack.config.staging.babel.js',
        'webpack.config.production.babel.js',
        'webpack.config.prod.babel.js',
        'webpack.config.dev.js',
        'webpack.config.staging.js',
        'webpack.config.production.js',
        'webpack.config.prod.js',
        'webpack.config.ts',
        'webpack.config.coffee',
        "webpack.config.test.js",
      ],
      filename: true,
      format: FileFormat.svg,
    },
    { icon: 'word', extensions: ['doc', 'docx', 'docm', 'dot', 'dotx', 'dotm', 'wll'], format: FileFormat.svg },
    { icon: 'wxml', extensions: ['wxml'], format: FileFormat.svg },
    { icon: 'wxss', extensions: ['wxss'], format: FileFormat.svg },
    { icon: 'xib', extensions: ['xib'], format: FileFormat.png },
    { icon: 'xliff', extensions: ['xliff', 'xlf'], format: FileFormat.svg },
    { icon: 'xml', extensions: ['pex'], languages: [languages.xml], format: FileFormat.svg },
    { icon: 'xsl', extensions: [], languages: [languages.xsl], format: FileFormat.svg },
    { icon: 'yaml', extensions: ['yml'], languages: [languages.yaml], format: FileFormat.svg },
    { icon: 'yarn', extensions: ['yarnclean'], format: FileFormat.svg },
    { icon: 'yarn', extensions: ['yarn.lock'], filename: true, format: FileFormat.svg },
    { icon: 'zip', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bzip2', 'xz', 'bz2'], format: FileFormat.svg },
    { icon: 'zip2', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bzip2', 'xz', 'bz2'], format: FileFormat.svg, disabled: true },
  ],
};
