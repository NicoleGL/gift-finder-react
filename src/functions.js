export function selectOrDeselect(el, styles) {
  el.classList.toggle(styles.selected);
}

export function selectAll(elements, styles) {
  for (let element of elements) {
    element.classList.add(styles.selected);
  }
}

export function deselectAll(elements, styles) {
  for (let element of elements) {
    element.classList.remove(styles.selected);
  }
}
