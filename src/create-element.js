/**
 * create an virtual node
 */
export function createElement(tag, attrs, ...children) {
  if (attrs == null) attrs = {}
  return {
    tag,
    attrs,
    children,
    key: attrs.key || null
  }
}
