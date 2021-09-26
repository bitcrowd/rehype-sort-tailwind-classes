import { createRequire } from "module";

import { hasProperty } from "hast-util-has-property";
import { visit } from "unist-util-visit";

import type { Root } from "hast";

const require = createRequire(import.meta.url);
const { default: ClassSorter } = require("tailwind-classes-sorter");

function rehypeSortTailwindClasses(options: any = {}) {
  const sorter = new ClassSorter(options);
  const sort = (classes: string[]) => sorter.sortClasslist(classes);

  if ("pluginsOrder" in options) {
    sorter.setPluginOrder((defaultOrder: string[]) => {
      const customOrder = options.pluginsOrder;

      return [
        ...customOrder,
        ...defaultOrder.filter((x: string) => !customOrder.includes(x)),
      ];
    });
  }

  return (tree: Root) => {
    visit(tree, "element", (node) => {
      if (!hasProperty(node, "className")) return;
      const props = node.properties || {};
      if (!Array.isArray(props.className)) return;
      props.className = sort(props.className as string[]);
    });
  };
}

export default rehypeSortTailwindClasses;
