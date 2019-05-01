import { diff } from './diff'

/**
 * 将虚拟DOM 转为真实DOM,插入容器
 * @param {*} vnode 虚拟DOM
 * @param {*} container 需要插入的位置
 */
function render (vnode, container) {
  const dom = vdomToDom(vnode)
  // 后续加入生命周期
  container && container.appendChild(dom)
}

/**
 * 将虚拟DOM转为真实DOM
 * @param {*} vnode
 */
function vdomToDom (vnode) {
  return diff(vnode)
}

export default render
