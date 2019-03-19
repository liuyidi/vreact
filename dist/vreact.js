(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.vreact = factory());
}(this, function () { 'use strict';

  function Component(props, context) {
    this.props = props;
    this.context = context;
  }

  Component.prototype.setState = function (update, callback) {};

  Component.prototype.forceUpdate = function (callback) {};

  Component.prototype.render = function () {};

  var index = {
    Component: Component
  };

  return index;

}));
//# sourceMappingURL=vreact.js.map
