export function getModuleTemplate(moduleName, list) {
  return {
    state: {
      [moduleName]: list,
    },

    getters: {
      getItemById: (state) => (itemId) => state[moduleName].find((item) => item.id == itemId),
    },

    actions: {
      addItem(itemData) {
        this[moduleName].push({ id: new Date().getTime(), ...itemData })
      },
    },
  }
}
