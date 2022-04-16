/**
 * getKeplrExtensionRouterId returns the `window.keplrExtensionRouterId`.
 * If the `window.keplrExtensionRouterId` is not initialized, it will be initialized and returned.
 */

const memoryStore: any = {
  keplrExtensionRouterId: null,
};

export function getKeplrExtensionRouterId(): number {
  console.log(memoryStore.keplrExtensionRouterId);
  if (memoryStore.keplrExtensionRouterId == null) {
    memoryStore.keplrExtensionRouterId = Math.floor(Math.random() * 1000000);
  }
  return memoryStore.keplrExtensionRouterId;
}
