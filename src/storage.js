// window.storage wrapper — persists to localStorage under the hood but
// exposes the window.storage.get / window.storage.set API requested by the
// assignment. Hydrates synchronously on module load.

const STORAGE_KEY = 'chm1045_unit3_v1'

function loadAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveAll(obj) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
  } catch {
    /* quota exceeded — ignore */
  }
}

const store = loadAll()
const listeners = new Set()

function notify() {
  listeners.forEach((fn) => {
    try { fn() } catch { /* ignore */ }
  })
}

const storage = {
  get(key, fallback = null) {
    return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : fallback
  },
  has(key) {
    return Object.prototype.hasOwnProperty.call(store, key)
  },
  set(key, value) {
    store[key] = value
    saveAll(store)
    notify()
  },
  remove(key) {
    delete store[key]
    saveAll(store)
    notify()
  },
  clear() {
    for (const k of Object.keys(store)) delete store[k]
    saveAll(store)
    notify()
  },
  keys() {
    return Object.keys(store)
  },
  subscribe(fn) {
    listeners.add(fn)
    return () => listeners.delete(fn)
  },
}

if (typeof window !== 'undefined') {
  window.storage = storage
}

export default storage
