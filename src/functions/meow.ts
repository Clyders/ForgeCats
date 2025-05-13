import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$meow",
    version: "1.0.0",
    description: "Sends meow!",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [index]) {
        ctx.container.embed(index ?? 0).setDescription("meow")
        return this.success()
    },
})