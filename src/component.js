export function Component (props, context) {
  this.props = props
  this.context = context
}

Component.prototype.setState = function (update, callback) {
  let s = (this._nextState !== this.state && this._nextState) || (this._nextState = Object.assign({}, this.state));
  
  // @TODO
  
  if (update === null) return false
  
  if (this._vnode) {
    if (callback) this._renderCallbacks.push(callback)
    enqueueRender(this)
  }
}

Component.prototype.forceUpdate = function (callback) {}

Component.prototype.render = function() {}

export function enqueueRender(c) {
  
}
