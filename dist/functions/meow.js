"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$meow",
    version: "1.0.0",
    description: "Sends meow!",
    unwrap: false,
    execute(ctx) {
        ctx.container.embed(0).setDescription("meow");
        return this.success();
    },
});
//# sourceMappingURL=meow.js.map