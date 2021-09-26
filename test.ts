import { h } from "hastscript";
import { rehype } from "rehype";
import test from "tape";
import { u } from "unist-builder";

import plugin from "./index.js";

test("rehype-sort-tailwind-classes", (t) => {
  t.deepEqual(
    rehype()
      .use(plugin)
      .runSync(
        u("root", [
          h(".z-50.z-10.container.text-left.md:text-center.justify-center", {
            itemProp: true,
          }),
        ])
      ),
    u("root", [
      h(".container.z-10.z-50.justify-center.text-left.md:text-center", {
        itemProp: true,
      }),
    ])
  );

  t.end();
});
