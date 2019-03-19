export function Component(props, context) {
  this.props = props
  this.context = context
}

Component.prototype.setState = function(update, callback) {}

Component.prototype.forceUpdate = function(callback) {}

Component.prototype.render = function() {}
