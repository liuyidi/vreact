/*!
 * vreact.js v1.1.0
 * (c) 2018-2019 liuyidi <liuyidi1993@gmail.com>
 * Released under the MIT License.
 */
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

export default index;
