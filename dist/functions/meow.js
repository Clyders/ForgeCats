"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$meow",
    version: "1.0.0",
    description: "Sends meow!",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [index]) {
        ctx.container.embed(index ?? 0).setDescription("meow");
        return this.success();
    },
});
//# sourceMappingURL=meow.js.map