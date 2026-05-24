import ImageKit from "@imagekit/nodejs";
import config from "./config.js";

const storageInstance = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY,
});

export default storageInstance;
