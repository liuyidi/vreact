
export function diff (dom, vnode, container) {
  return dom
}

/**
 * 生命周期
 */
function renderComponent (component) {
  if (!component.base && component.componentWillMount) {
    component.componentWillMount()
  }
  
  if (component.base && component.componentWillReceiveProps) {
    component.componentWillReceiveProps(component.props) 
  }
}

