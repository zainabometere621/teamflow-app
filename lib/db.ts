// save data
export function setItem(key:string, value:any) {
    localStorage.setItem(key, JSON.stringify(value))
}

// read item 
export function getItem(key: string) {
  const item = localStorage.getItem(key)
  if (item === null) return null
  return JSON.parse(item)
}

// delete item
export function removeItem(key:string) {
    localStorage.removeItem(key)
}