import { ArgType, NativeFunction } from "@tryforge/forgescript";

export default new NativeFunction({
  name: "$meow",
  version: "1.0.0",
  description: "Sends meow!",
  unwrap: false,
  execute(ctx) {
    ctx.container.embed(0).setDescription("meow");
    return this.success();
  },
});
