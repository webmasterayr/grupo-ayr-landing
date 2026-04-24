// Workaround for next-themes + Node.js 22+/25+ SSR issue
// See: https://github.com/pacocoursey/next-themes/issues/389
//
// Node.js 22.4+ exposes a global localStorage, but without --localstorage-file
// it's non-functional (getItem/setItem throw). next-themes calls
// localStorage.getItem('theme') during SSR and crashes.
// This replaces the broken global with an in-memory shim.
if (typeof globalThis.localStorage !== 'undefined') {
  try {
    globalThis.localStorage.getItem('__test__');
  } catch {
    const store = new Map<string, string>();
    globalThis.localStorage = {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => store.set(key, value),
      removeItem: (key: string) => { store.delete(key); },
      clear: () => store.clear(),
      get length() { return store.size; },
      key: (index: number) => [...store.keys()][index] ?? null,
    } as Storage;
  }
}

export async function register() {
  // instrumentation registered
}
