import { ForgeClient, ForgeExtension } from "@tryforge/forgescript";

export class ForgeCats extends ForgeExtension {
  name: string = "forge.cats";
  description: string = "ForgeCats, the best way to meow with your ForgeScript bot.";
  version: string = require("../package.json").version;

  init(client: ForgeClient): void {;
    client.once("ready", (cli) => {
      this.init(cli as ForgeClient)
    })
  };
};