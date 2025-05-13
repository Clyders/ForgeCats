"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeCats = void 0;
const forgescript_1 = require("@tryforge/forgescript");
class ForgeCats extends forgescript_1.ForgeExtension {
    name = "forge.cats";
    description = "ForgeCats, the best way to meow with your ForgeScript bot.";
    version = require("../package.json").version;
    init(client) {
        ;
        client.once("ready", (cli) => {
            this.init(cli);
        });
    }
    ;
}
exports.ForgeCats = ForgeCats;
;
//# sourceMappingURL=index.js.map