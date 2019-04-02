// vue.config.js - extra file, to add the option
// for the runtime compiler. This is necessary b/c of the
// global component <ComponentA />, created in main.js.
// Otherwise the template wouldn't be compiled.
// See https://cli.vuejs.org/config/#runtimecompiler for more information

module.exports={
    runtimeCompiler: true
}
