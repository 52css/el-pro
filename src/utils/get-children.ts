export function getChildren(children: any) {
  if ((children.children ?? []).length === 0) return []

  if (Array.isArray(children.children)) {
    return children.children
  }

  return [children.children]
}