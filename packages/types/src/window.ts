import { Keplr } from "./wallet";
import { SecretUtils } from "secretjs/types/enigmautils";
import { OfflineDirectSigner, OfflineSigner } from "@imversed/proto-signing";

export interface Window {
  keplr?: Keplr;
  getOfflineSigner?: (chainId: string) => OfflineSigner & OfflineDirectSigner;
  getOfflineSignerOnlyAmino?: (chainId: string) => OfflineSigner;
  getOfflineSignerAuto?: (
    chainId: string
  ) => Promise<OfflineSigner | OfflineDirectSigner>;
  getEnigmaUtils?: (chainId: string) => SecretUtils;
}
