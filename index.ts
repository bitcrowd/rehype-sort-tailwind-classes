import { createRequire } from "module";

import { hasProperty } from "hast-util-has-property";
import { visit } from "unist-util-visit";

import type { Root } from "hast";

const require = createRequire(import.meta.url);
const { default: Sorter } = require("tailwind-classes-sorter");

function rehypeSortTailwindClasses() {
  const sorter = new Sorter();

  return (tree: Root) => {
    visit(tree, "element", (node) => {
      const props = node.properties || {};

      if (hasProperty(node, "className") && Array.isArray(props.className)) {
        props.className = sorter.sortClasslist(props.className as string[]);
      }
    });
  };
}

export default rehypeSortTailwindClasses;
