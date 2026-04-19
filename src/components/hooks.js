import { useCallback, useEffect, useState } from 'react'
import storage from '../storage.js'

export function useStoredValue(key, initial) {
  const [value, setValue] = useState(() => (storage.has(key) ? storage.get(key) : initial))
  useEffect(() => {
    return storage.subscribe(() => {
      setValue(storage.has(key) ? storage.get(key) : initial)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  const update = useCallback(
    (next) => {
      const curr = storage.has(key) ? storage.get(key) : initial
      storage.set(key, typeof next === 'function' ? next(curr) : next)
    },
    [key, initial],
  )
  return [value, update]
}
