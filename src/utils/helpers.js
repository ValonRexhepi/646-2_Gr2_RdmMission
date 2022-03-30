export const storeDataLS = (key, data) => localStorage.setItem(key, JSON.stringify(data))

export const getDataLS = (key) => JSON.parse(localStorage.getItem(key)) || []