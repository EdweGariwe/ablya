// tonConnect.js
import { TonConnect } from "@tonconnect/sdk";

export const tonConnect = new TonConnect({
  manifestUrl: "http://localhost:5174/assets/tonconnect-manifest.json",
});
