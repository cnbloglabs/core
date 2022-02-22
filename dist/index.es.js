function hideLoading() {
  const loading = $("#loading");
  if (loading.length) {
    loading.fadeOut(300);
  }
}
var init = (options) => {
  hideLoading();
};
const extend = Object.assign;
const isArray = Array.isArray;
function isFunction(x) {
  return typeof x === "function";
}
function createThemeContext() {
  return {
    theme: null,
    config: {
      globalProperties: {}
    }
  };
}
function createThemeAPI() {
  return function createTheme2() {
    const context = createThemeContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    const theme = context.theme = {
      _context: context,
      version: "3.0",
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(theme, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(theme, ...options);
        } else
          ;
        return theme;
      }
    };
    return theme;
  };
}
function baseCreateTheme(options) {
  init();
  return {
    createTheme: createThemeAPI()
  };
}
function createTheme(options) {
  const theme = baseCreateTheme().createTheme();
  return theme;
}
const mergeOptions = (def, user, dev) => {
  const defaultOptions = extend({}, def, dev);
  const options = extend({}, defaultOptions, user);
  return options;
};
const getValue = (valueKeys = [], obj = {}) => {
  const keys = Object.keys(obj);
  const key = keys.find((key2) => valueKeys.includes(key2));
  return key ? obj[key] : null;
};
const ensureUserOptions = (userOptionName) => {
  const userConfig = window.opts || {};
  if (typeof userOptionName === "string") {
    return userConfig[userOptionName];
  } else if (isArray(userOptionName)) {
    return getValue(userOptionName, userConfig);
  }
};
const defineOptions = (userOptionName, defaultOptions) => {
  return (devOptions) => {
    return mergeOptions(defaultOptions, ensureUserOptions(userOptionName), devOptions);
  };
};
export { createTheme, defineOptions };
