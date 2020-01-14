webpackHotUpdate("main",{

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapState\", function() { return mapState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapMutations\", function() { return mapMutations; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapGetters\", function() { return mapGetters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapActions\", function() { return mapActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNamespacedHelpers\", function() { return createNamespacedHelpers; });\n/**\n * vuex v3.1.2\n * (c) 2019 Evan You\n * @license MIT\n */\nfunction applyMixin (Vue) {\n  var version = Number(Vue.version.split('.')[0]);\n\n  if (version >= 2) {\n    Vue.mixin({ beforeCreate: vuexInit });\n  } else {\n    // override init and inject vuex init procedure\n    // for 1.x backwards compatibility.\n    var _init = Vue.prototype._init;\n    Vue.prototype._init = function (options) {\n      if ( options === void 0 ) options = {};\n\n      options.init = options.init\n        ? [vuexInit].concat(options.init)\n        : vuexInit;\n      _init.call(this, options);\n    };\n  }\n\n  /**\n   * Vuex init hook, injected into each instances init hooks list.\n   */\n\n  function vuexInit () {\n    var options = this.$options;\n    // store injection\n    if (options.store) {\n      this.$store = typeof options.store === 'function'\n        ? options.store()\n        : options.store;\n    } else if (options.parent && options.parent.$store) {\n      this.$store = options.parent.$store;\n    }\n  }\n}\n\nvar target = typeof window !== 'undefined'\n  ? window\n  : typeof global !== 'undefined'\n    ? global\n    : {};\nvar devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;\n\nfunction devtoolPlugin (store) {\n  if (!devtoolHook) { return }\n\n  store._devtoolHook = devtoolHook;\n\n  devtoolHook.emit('vuex:init', store);\n\n  devtoolHook.on('vuex:travel-to-state', function (targetState) {\n    store.replaceState(targetState);\n  });\n\n  store.subscribe(function (mutation, state) {\n    devtoolHook.emit('vuex:mutation', mutation, state);\n  });\n}\n\n/**\n * Get the first item that pass the test\n * by second argument function\n *\n * @param {Array} list\n * @param {Function} f\n * @return {*}\n */\n\n/**\n * forEach for object\n */\nfunction forEachValue (obj, fn) {\n  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });\n}\n\nfunction isObject (obj) {\n  return obj !== null && typeof obj === 'object'\n}\n\nfunction isPromise (val) {\n  return val && typeof val.then === 'function'\n}\n\nfunction assert (condition, msg) {\n  if (!condition) { throw new Error((\"[vuex] \" + msg)) }\n}\n\nfunction partial (fn, arg) {\n  return function () {\n    return fn(arg)\n  }\n}\n\n// Base data struct for store's module, package with some attribute and method\nvar Module = function Module (rawModule, runtime) {\n  this.runtime = runtime;\n  // Store some children item\n  this._children = Object.create(null);\n  // Store the origin module object which passed by programmer\n  this._rawModule = rawModule;\n  var rawState = rawModule.state;\n\n  // Store the origin module's state\n  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};\n};\n\nvar prototypeAccessors = { namespaced: { configurable: true } };\n\nprototypeAccessors.namespaced.get = function () {\n  return !!this._rawModule.namespaced\n};\n\nModule.prototype.addChild = function addChild (key, module) {\n  this._children[key] = module;\n};\n\nModule.prototype.removeChild = function removeChild (key) {\n  delete this._children[key];\n};\n\nModule.prototype.getChild = function getChild (key) {\n  return this._children[key]\n};\n\nModule.prototype.update = function update (rawModule) {\n  this._rawModule.namespaced = rawModule.namespaced;\n  if (rawModule.actions) {\n    this._rawModule.actions = rawModule.actions;\n  }\n  if (rawModule.mutations) {\n    this._rawModule.mutations = rawModule.mutations;\n  }\n  if (rawModule.getters) {\n    this._rawModule.getters = rawModule.getters;\n  }\n};\n\nModule.prototype.forEachChild = function forEachChild (fn) {\n  forEachValue(this._children, fn);\n};\n\nModule.prototype.forEachGetter = function forEachGetter (fn) {\n  if (this._rawModule.getters) {\n    forEachValue(this._rawModule.getters, fn);\n  }\n};\n\nModule.prototype.forEachAction = function forEachAction (fn) {\n  if (this._rawModule.actions) {\n    forEachValue(this._rawModule.actions, fn);\n  }\n};\n\nModule.prototype.forEachMutation = function forEachMutation (fn) {\n  if (this._rawModule.mutations) {\n    forEachValue(this._rawModule.mutations, fn);\n  }\n};\n\nObject.defineProperties( Module.prototype, prototypeAccessors );\n\nvar ModuleCollection = function ModuleCollection (rawRootModule) {\n  // register root module (Vuex.Store options)\n  this.register([], rawRootModule, false);\n};\n\nModuleCollection.prototype.get = function get (path) {\n  return path.reduce(function (module, key) {\n    return module.getChild(key)\n  }, this.root)\n};\n\nModuleCollection.prototype.getNamespace = function getNamespace (path) {\n  var module = this.root;\n  return path.reduce(function (namespace, key) {\n    module = module.getChild(key);\n    return namespace + (module.namespaced ? key + '/' : '')\n  }, '')\n};\n\nModuleCollection.prototype.update = function update$1 (rawRootModule) {\n  update([], this.root, rawRootModule);\n};\n\nModuleCollection.prototype.register = function register (path, rawModule, runtime) {\n    var this$1 = this;\n    if ( runtime === void 0 ) runtime = true;\n\n  if (true) {\n    assertRawModule(path, rawModule);\n  }\n\n  var newModule = new Module(rawModule, runtime);\n  if (path.length === 0) {\n    this.root = newModule;\n  } else {\n    var parent = this.get(path.slice(0, -1));\n    parent.addChild(path[path.length - 1], newModule);\n  }\n\n  // register nested modules\n  if (rawModule.modules) {\n    forEachValue(rawModule.modules, function (rawChildModule, key) {\n      this$1.register(path.concat(key), rawChildModule, runtime);\n    });\n  }\n};\n\nModuleCollection.prototype.unregister = function unregister (path) {\n  var parent = this.get(path.slice(0, -1));\n  var key = path[path.length - 1];\n  if (!parent.getChild(key).runtime) { return }\n\n  parent.removeChild(key);\n};\n\nfunction update (path, targetModule, newModule) {\n  if (true) {\n    assertRawModule(path, newModule);\n  }\n\n  // update target module\n  targetModule.update(newModule);\n\n  // update nested modules\n  if (newModule.modules) {\n    for (var key in newModule.modules) {\n      if (!targetModule.getChild(key)) {\n        if (true) {\n          console.warn(\n            \"[vuex] trying to add a new module '\" + key + \"' on hot reloading, \" +\n            'manual reload is needed'\n          );\n        }\n        return\n      }\n      update(\n        path.concat(key),\n        targetModule.getChild(key),\n        newModule.modules[key]\n      );\n    }\n  }\n}\n\nvar functionAssert = {\n  assert: function (value) { return typeof value === 'function'; },\n  expected: 'function'\n};\n\nvar objectAssert = {\n  assert: function (value) { return typeof value === 'function' ||\n    (typeof value === 'object' && typeof value.handler === 'function'); },\n  expected: 'function or object with \"handler\" function'\n};\n\nvar assertTypes = {\n  getters: functionAssert,\n  mutations: functionAssert,\n  actions: objectAssert\n};\n\nfunction assertRawModule (path, rawModule) {\n  Object.keys(assertTypes).forEach(function (key) {\n    if (!rawModule[key]) { return }\n\n    var assertOptions = assertTypes[key];\n\n    forEachValue(rawModule[key], function (value, type) {\n      assert(\n        assertOptions.assert(value),\n        makeAssertionMessage(path, key, type, value, assertOptions.expected)\n      );\n    });\n  });\n}\n\nfunction makeAssertionMessage (path, key, type, value, expected) {\n  var buf = key + \" should be \" + expected + \" but \\\"\" + key + \".\" + type + \"\\\"\";\n  if (path.length > 0) {\n    buf += \" in module \\\"\" + (path.join('.')) + \"\\\"\";\n  }\n  buf += \" is \" + (JSON.stringify(value)) + \".\";\n  return buf\n}\n\nvar Vue; // bind on install\n\nvar Store = function Store (options) {\n  var this$1 = this;\n  if ( options === void 0 ) options = {};\n\n  // Auto install if it is not done yet and `window` has `Vue`.\n  // To allow users to avoid auto-installation in some cases,\n  // this code should be placed here. See #731\n  if (!Vue && typeof window !== 'undefined' && window.Vue) {\n    install(window.Vue);\n  }\n\n  if (true) {\n    assert(Vue, \"must call Vue.use(Vuex) before creating a store instance.\");\n    assert(typeof Promise !== 'undefined', \"vuex requires a Promise polyfill in this browser.\");\n    assert(this instanceof Store, \"store must be called with the new operator.\");\n  }\n\n  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];\n  var strict = options.strict; if ( strict === void 0 ) strict = false;\n\n  // store internal state\n  this._committing = false;\n  this._actions = Object.create(null);\n  this._actionSubscribers = [];\n  this._mutations = Object.create(null);\n  this._wrappedGetters = Object.create(null);\n  this._modules = new ModuleCollection(options);\n  this._modulesNamespaceMap = Object.create(null);\n  this._subscribers = [];\n  this._watcherVM = new Vue();\n  this._makeLocalGettersCache = Object.create(null);\n\n  // bind commit and dispatch to self\n  var store = this;\n  var ref = this;\n  var dispatch = ref.dispatch;\n  var commit = ref.commit;\n  this.dispatch = function boundDispatch (type, payload) {\n    return dispatch.call(store, type, payload)\n  };\n  this.commit = function boundCommit (type, payload, options) {\n    return commit.call(store, type, payload, options)\n  };\n\n  // strict mode\n  this.strict = strict;\n\n  var state = this._modules.root.state;\n\n  // init root module.\n  // this also recursively registers all sub-modules\n  // and collects all module getters inside this._wrappedGetters\n  installModule(this, state, [], this._modules.root);\n\n  // initialize the store vm, which is responsible for the reactivity\n  // (also registers _wrappedGetters as computed properties)\n  resetStoreVM(this, state);\n\n  // apply plugins\n  plugins.forEach(function (plugin) { return plugin(this$1); });\n\n  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;\n  if (useDevtools) {\n    devtoolPlugin(this);\n  }\n};\n\nvar prototypeAccessors$1 = { state: { configurable: true } };\n\nprototypeAccessors$1.state.get = function () {\n  return this._vm._data.$$state\n};\n\nprototypeAccessors$1.state.set = function (v) {\n  if (true) {\n    assert(false, \"use store.replaceState() to explicit replace store state.\");\n  }\n};\n\nStore.prototype.commit = function commit (_type, _payload, _options) {\n    var this$1 = this;\n\n  // check object-style commit\n  var ref = unifyObjectStyle(_type, _payload, _options);\n    var type = ref.type;\n    var payload = ref.payload;\n    var options = ref.options;\n\n  var mutation = { type: type, payload: payload };\n  var entry = this._mutations[type];\n  if (!entry) {\n    if (true) {\n      console.error((\"[vuex] unknown mutation type: \" + type));\n    }\n    return\n  }\n  this._withCommit(function () {\n    entry.forEach(function commitIterator (handler) {\n      handler(payload);\n    });\n  });\n  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });\n\n  if (\n     true &&\n    options && options.silent\n  ) {\n    console.warn(\n      \"[vuex] mutation type: \" + type + \". Silent option has been removed. \" +\n      'Use the filter functionality in the vue-devtools'\n    );\n  }\n};\n\nStore.prototype.dispatch = function dispatch (_type, _payload) {\n    var this$1 = this;\n\n  // check object-style dispatch\n  var ref = unifyObjectStyle(_type, _payload);\n    var type = ref.type;\n    var payload = ref.payload;\n\n  var action = { type: type, payload: payload };\n  var entry = this._actions[type];\n  if (!entry) {\n    if (true) {\n      console.error((\"[vuex] unknown action type: \" + type));\n    }\n    return\n  }\n\n  try {\n    this._actionSubscribers\n      .filter(function (sub) { return sub.before; })\n      .forEach(function (sub) { return sub.before(action, this$1.state); });\n  } catch (e) {\n    if (true) {\n      console.warn(\"[vuex] error in before action subscribers: \");\n      console.error(e);\n    }\n  }\n\n  var result = entry.length > 1\n    ? Promise.all(entry.map(function (handler) { return handler(payload); }))\n    : entry[0](payload);\n\n  return result.then(function (res) {\n    try {\n      this$1._actionSubscribers\n        .filter(function (sub) { return sub.after; })\n        .forEach(function (sub) { return sub.after(action, this$1.state); });\n    } catch (e) {\n      if (true) {\n        console.warn(\"[vuex] error in after action subscribers: \");\n        console.error(e);\n      }\n    }\n    return res\n  })\n};\n\nStore.prototype.subscribe = function subscribe (fn) {\n  return genericSubscribe(fn, this._subscribers)\n};\n\nStore.prototype.subscribeAction = function subscribeAction (fn) {\n  var subs = typeof fn === 'function' ? { before: fn } : fn;\n  return genericSubscribe(subs, this._actionSubscribers)\n};\n\nStore.prototype.watch = function watch (getter, cb, options) {\n    var this$1 = this;\n\n  if (true) {\n    assert(typeof getter === 'function', \"store.watch only accepts a function.\");\n  }\n  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)\n};\n\nStore.prototype.replaceState = function replaceState (state) {\n    var this$1 = this;\n\n  this._withCommit(function () {\n    this$1._vm._data.$$state = state;\n  });\n};\n\nStore.prototype.registerModule = function registerModule (path, rawModule, options) {\n    if ( options === void 0 ) options = {};\n\n  if (typeof path === 'string') { path = [path]; }\n\n  if (true) {\n    assert(Array.isArray(path), \"module path must be a string or an Array.\");\n    assert(path.length > 0, 'cannot register the root module by using registerModule.');\n  }\n\n  this._modules.register(path, rawModule);\n  installModule(this, this.state, path, this._modules.get(path), options.preserveState);\n  // reset store to update getters...\n  resetStoreVM(this, this.state);\n};\n\nStore.prototype.unregisterModule = function unregisterModule (path) {\n    var this$1 = this;\n\n  if (typeof path === 'string') { path = [path]; }\n\n  if (true) {\n    assert(Array.isArray(path), \"module path must be a string or an Array.\");\n  }\n\n  this._modules.unregister(path);\n  this._withCommit(function () {\n    var parentState = getNestedState(this$1.state, path.slice(0, -1));\n    Vue.delete(parentState, path[path.length - 1]);\n  });\n  resetStore(this);\n};\n\nStore.prototype.hotUpdate = function hotUpdate (newOptions) {\n  this._modules.update(newOptions);\n  resetStore(this, true);\n};\n\nStore.prototype._withCommit = function _withCommit (fn) {\n  var committing = this._committing;\n  this._committing = true;\n  fn();\n  this._committing = committing;\n};\n\nObject.defineProperties( Store.prototype, prototypeAccessors$1 );\n\nfunction genericSubscribe (fn, subs) {\n  if (subs.indexOf(fn) < 0) {\n    subs.push(fn);\n  }\n  return function () {\n    var i = subs.indexOf(fn);\n    if (i > -1) {\n      subs.splice(i, 1);\n    }\n  }\n}\n\nfunction resetStore (store, hot) {\n  store._actions = Object.create(null);\n  store._mutations = Object.create(null);\n  store._wrappedGetters = Object.create(null);\n  store._modulesNamespaceMap = Object.create(null);\n  var state = store.state;\n  // init all modules\n  installModule(store, state, [], store._modules.root, true);\n  // reset vm\n  resetStoreVM(store, state, hot);\n}\n\nfunction resetStoreVM (store, state, hot) {\n  var oldVm = store._vm;\n\n  // bind store public getters\n  store.getters = {};\n  // reset local getters cache\n  store._makeLocalGettersCache = Object.create(null);\n  var wrappedGetters = store._wrappedGetters;\n  var computed = {};\n  forEachValue(wrappedGetters, function (fn, key) {\n    // use computed to leverage its lazy-caching mechanism\n    // direct inline function use will lead to closure preserving oldVm.\n    // using partial to return function with only arguments preserved in closure environment.\n    computed[key] = partial(fn, store);\n    Object.defineProperty(store.getters, key, {\n      get: function () { return store._vm[key]; },\n      enumerable: true // for local getters\n    });\n  });\n\n  // use a Vue instance to store the state tree\n  // suppress warnings just in case the user has added\n  // some funky global mixins\n  var silent = Vue.config.silent;\n  Vue.config.silent = true;\n  store._vm = new Vue({\n    data: {\n      $$state: state\n    },\n    computed: computed\n  });\n  Vue.config.silent = silent;\n\n  // enable strict mode for new vm\n  if (store.strict) {\n    enableStrictMode(store);\n  }\n\n  if (oldVm) {\n    if (hot) {\n      // dispatch changes in all subscribed watchers\n      // to force getter re-evaluation for hot reloading.\n      store._withCommit(function () {\n        oldVm._data.$$state = null;\n      });\n    }\n    Vue.nextTick(function () { return oldVm.$destroy(); });\n  }\n}\n\nfunction installModule (store, rootState, path, module, hot) {\n  var isRoot = !path.length;\n  var namespace = store._modules.getNamespace(path);\n\n  // register in namespace map\n  if (module.namespaced) {\n    if (store._modulesNamespaceMap[namespace] && \"development\" !== 'production') {\n      console.error((\"[vuex] duplicate namespace \" + namespace + \" for the namespaced module \" + (path.join('/'))));\n    }\n    store._modulesNamespaceMap[namespace] = module;\n  }\n\n  // set state\n  if (!isRoot && !hot) {\n    var parentState = getNestedState(rootState, path.slice(0, -1));\n    var moduleName = path[path.length - 1];\n    store._withCommit(function () {\n      if (true) {\n        if (moduleName in parentState) {\n          console.warn(\n            (\"[vuex] state field \\\"\" + moduleName + \"\\\" was overridden by a module with the same name at \\\"\" + (path.join('.')) + \"\\\"\")\n          );\n        }\n      }\n      Vue.set(parentState, moduleName, module.state);\n    });\n  }\n\n  var local = module.context = makeLocalContext(store, namespace, path);\n\n  module.forEachMutation(function (mutation, key) {\n    var namespacedType = namespace + key;\n    registerMutation(store, namespacedType, mutation, local);\n  });\n\n  module.forEachAction(function (action, key) {\n    var type = action.root ? key : namespace + key;\n    var handler = action.handler || action;\n    registerAction(store, type, handler, local);\n  });\n\n  module.forEachGetter(function (getter, key) {\n    var namespacedType = namespace + key;\n    registerGetter(store, namespacedType, getter, local);\n  });\n\n  module.forEachChild(function (child, key) {\n    installModule(store, rootState, path.concat(key), child, hot);\n  });\n}\n\n/**\n * make localized dispatch, commit, getters and state\n * if there is no namespace, just use root ones\n */\nfunction makeLocalContext (store, namespace, path) {\n  var noNamespace = namespace === '';\n\n  var local = {\n    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {\n      var args = unifyObjectStyle(_type, _payload, _options);\n      var payload = args.payload;\n      var options = args.options;\n      var type = args.type;\n\n      if (!options || !options.root) {\n        type = namespace + type;\n        if ( true && !store._actions[type]) {\n          console.error((\"[vuex] unknown local action type: \" + (args.type) + \", global type: \" + type));\n          return\n        }\n      }\n\n      return store.dispatch(type, payload)\n    },\n\n    commit: noNamespace ? store.commit : function (_type, _payload, _options) {\n      var args = unifyObjectStyle(_type, _payload, _options);\n      var payload = args.payload;\n      var options = args.options;\n      var type = args.type;\n\n      if (!options || !options.root) {\n        type = namespace + type;\n        if ( true && !store._mutations[type]) {\n          console.error((\"[vuex] unknown local mutation type: \" + (args.type) + \", global type: \" + type));\n          return\n        }\n      }\n\n      store.commit(type, payload, options);\n    }\n  };\n\n  // getters and state object must be gotten lazily\n  // because they will be changed by vm update\n  Object.defineProperties(local, {\n    getters: {\n      get: noNamespace\n        ? function () { return store.getters; }\n        : function () { return makeLocalGetters(store, namespace); }\n    },\n    state: {\n      get: function () { return getNestedState(store.state, path); }\n    }\n  });\n\n  return local\n}\n\nfunction makeLocalGetters (store, namespace) {\n  if (!store._makeLocalGettersCache[namespace]) {\n    var gettersProxy = {};\n    var splitPos = namespace.length;\n    Object.keys(store.getters).forEach(function (type) {\n      // skip if the target getter is not match this namespace\n      if (type.slice(0, splitPos) !== namespace) { return }\n\n      // extract local getter type\n      var localType = type.slice(splitPos);\n\n      // Add a port to the getters proxy.\n      // Define as getter property because\n      // we do not want to evaluate the getters in this time.\n      Object.defineProperty(gettersProxy, localType, {\n        get: function () { return store.getters[type]; },\n        enumerable: true\n      });\n    });\n    store._makeLocalGettersCache[namespace] = gettersProxy;\n  }\n\n  return store._makeLocalGettersCache[namespace]\n}\n\nfunction registerMutation (store, type, handler, local) {\n  var entry = store._mutations[type] || (store._mutations[type] = []);\n  entry.push(function wrappedMutationHandler (payload) {\n    handler.call(store, local.state, payload);\n  });\n}\n\nfunction registerAction (store, type, handler, local) {\n  var entry = store._actions[type] || (store._actions[type] = []);\n  entry.push(function wrappedActionHandler (payload) {\n    var res = handler.call(store, {\n      dispatch: local.dispatch,\n      commit: local.commit,\n      getters: local.getters,\n      state: local.state,\n      rootGetters: store.getters,\n      rootState: store.state\n    }, payload);\n    if (!isPromise(res)) {\n      res = Promise.resolve(res);\n    }\n    if (store._devtoolHook) {\n      return res.catch(function (err) {\n        store._devtoolHook.emit('vuex:error', err);\n        throw err\n      })\n    } else {\n      return res\n    }\n  });\n}\n\nfunction registerGetter (store, type, rawGetter, local) {\n  if (store._wrappedGetters[type]) {\n    if (true) {\n      console.error((\"[vuex] duplicate getter key: \" + type));\n    }\n    return\n  }\n  store._wrappedGetters[type] = function wrappedGetter (store) {\n    return rawGetter(\n      local.state, // local state\n      local.getters, // local getters\n      store.state, // root state\n      store.getters // root getters\n    )\n  };\n}\n\nfunction enableStrictMode (store) {\n  store._vm.$watch(function () { return this._data.$$state }, function () {\n    if (true) {\n      assert(store._committing, \"do not mutate vuex store state outside mutation handlers.\");\n    }\n  }, { deep: true, sync: true });\n}\n\nfunction getNestedState (state, path) {\n  return path.length\n    ? path.reduce(function (state, key) { return state[key]; }, state)\n    : state\n}\n\nfunction unifyObjectStyle (type, payload, options) {\n  if (isObject(type) && type.type) {\n    options = payload;\n    payload = type;\n    type = type.type;\n  }\n\n  if (true) {\n    assert(typeof type === 'string', (\"expects string as the type, but found \" + (typeof type) + \".\"));\n  }\n\n  return { type: type, payload: payload, options: options }\n}\n\nfunction install (_Vue) {\n  if (Vue && _Vue === Vue) {\n    if (true) {\n      console.error(\n        '[vuex] already installed. Vue.use(Vuex) should be called only once.'\n      );\n    }\n    return\n  }\n  Vue = _Vue;\n  applyMixin(Vue);\n}\n\n/**\n * Reduce the code which written in Vue.js for getting the state.\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.\n * @param {Object}\n */\nvar mapState = normalizeNamespace(function (namespace, states) {\n  var res = {};\n  if ( true && !isValidMap(states)) {\n    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');\n  }\n  normalizeMap(states).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedState () {\n      var state = this.$store.state;\n      var getters = this.$store.getters;\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapState', namespace);\n        if (!module) {\n          return\n        }\n        state = module.context.state;\n        getters = module.context.getters;\n      }\n      return typeof val === 'function'\n        ? val.call(this, state, getters)\n        : state[val]\n    };\n    // mark vuex getter for devtools\n    res[key].vuex = true;\n  });\n  return res\n});\n\n/**\n * Reduce the code which written in Vue.js for committing the mutation\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.\n * @return {Object}\n */\nvar mapMutations = normalizeNamespace(function (namespace, mutations) {\n  var res = {};\n  if ( true && !isValidMap(mutations)) {\n    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');\n  }\n  normalizeMap(mutations).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedMutation () {\n      var args = [], len = arguments.length;\n      while ( len-- ) args[ len ] = arguments[ len ];\n\n      // Get the commit method from store\n      var commit = this.$store.commit;\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);\n        if (!module) {\n          return\n        }\n        commit = module.context.commit;\n      }\n      return typeof val === 'function'\n        ? val.apply(this, [commit].concat(args))\n        : commit.apply(this.$store, [val].concat(args))\n    };\n  });\n  return res\n});\n\n/**\n * Reduce the code which written in Vue.js for getting the getters\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} getters\n * @return {Object}\n */\nvar mapGetters = normalizeNamespace(function (namespace, getters) {\n  var res = {};\n  if ( true && !isValidMap(getters)) {\n    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');\n  }\n  normalizeMap(getters).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    // The namespace has been mutated by normalizeNamespace\n    val = namespace + val;\n    res[key] = function mappedGetter () {\n      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {\n        return\n      }\n      if ( true && !(val in this.$store.getters)) {\n        console.error((\"[vuex] unknown getter: \" + val));\n        return\n      }\n      return this.$store.getters[val]\n    };\n    // mark vuex getter for devtools\n    res[key].vuex = true;\n  });\n  return res\n});\n\n/**\n * Reduce the code which written in Vue.js for dispatch the action\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.\n * @return {Object}\n */\nvar mapActions = normalizeNamespace(function (namespace, actions) {\n  var res = {};\n  if ( true && !isValidMap(actions)) {\n    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');\n  }\n  normalizeMap(actions).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedAction () {\n      var args = [], len = arguments.length;\n      while ( len-- ) args[ len ] = arguments[ len ];\n\n      // get dispatch function from store\n      var dispatch = this.$store.dispatch;\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);\n        if (!module) {\n          return\n        }\n        dispatch = module.context.dispatch;\n      }\n      return typeof val === 'function'\n        ? val.apply(this, [dispatch].concat(args))\n        : dispatch.apply(this.$store, [val].concat(args))\n    };\n  });\n  return res\n});\n\n/**\n * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object\n * @param {String} namespace\n * @return {Object}\n */\nvar createNamespacedHelpers = function (namespace) { return ({\n  mapState: mapState.bind(null, namespace),\n  mapGetters: mapGetters.bind(null, namespace),\n  mapMutations: mapMutations.bind(null, namespace),\n  mapActions: mapActions.bind(null, namespace)\n}); };\n\n/**\n * Normalize the map\n * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]\n * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]\n * @param {Array|Object} map\n * @return {Object}\n */\nfunction normalizeMap (map) {\n  if (!isValidMap(map)) {\n    return []\n  }\n  return Array.isArray(map)\n    ? map.map(function (key) { return ({ key: key, val: key }); })\n    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })\n}\n\n/**\n * Validate whether given map is valid or not\n * @param {*} map\n * @return {Boolean}\n */\nfunction isValidMap (map) {\n  return Array.isArray(map) || isObject(map)\n}\n\n/**\n * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.\n * @param {Function} fn\n * @return {Function}\n */\nfunction normalizeNamespace (fn) {\n  return function (namespace, map) {\n    if (typeof namespace !== 'string') {\n      map = namespace;\n      namespace = '';\n    } else if (namespace.charAt(namespace.length - 1) !== '/') {\n      namespace += '/';\n    }\n    return fn(namespace, map)\n  }\n}\n\n/**\n * Search a special module from store by namespace. if module not exist, print error message.\n * @param {Object} store\n * @param {String} helper\n * @param {String} namespace\n * @return {Object}\n */\nfunction getModuleByNamespace (store, helper, namespace) {\n  var module = store._modulesNamespaceMap[namespace];\n  if ( true && !module) {\n    console.error((\"[vuex] module namespace not found in \" + helper + \"(): \" + namespace));\n  }\n  return module\n}\n\nvar index_esm = {\n  Store: Store,\n  install: install,\n  version: '3.1.2',\n  mapState: mapState,\n  mapMutations: mapMutations,\n  mapGetters: mapGetters,\n  mapActions: mapActions,\n  createNamespacedHelpers: createNamespacedHelpers\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index_esm);\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/vuex/dist/vuex.esm.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Store({\n  state: {\n    showsNew: [],\n    show: [],\n    showsAdd: [],\n    cart: [],\n    checkoutStatus: null\n  },\n  getters: {\n    getAllShows: function getAllShows(state) {\n      return state.show;\n    }\n  },\n  actions: {\n    getShowsData: function getShowsData(state) {\n      console.log(\"reached\"); //state.commit('getShowsData')\n    }\n  },\n  mutations: {\n    pushShowToCart: function pushShowToCart(state, productId) {\n      state.cart.push({\n        id: productId,\n        quantity: 1\n      });\n    },\n    getShowsData: function getShowsData(state) {\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:5000/shows').then(function (response) {\n        state.show = response.data;\n      })[\"catch\"](function (e) {\n        console.log(e);\n      });\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ })

})