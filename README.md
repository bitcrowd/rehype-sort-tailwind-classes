# rehype-sort-tailwind-classes

Sort Tailwind CSS classes in HTML.

[![main](https://github.com/bitcrowd/rehype-sort-tailwind-classes/actions/workflows/main.yml/badge.svg)](https://github.com/bitcrowd/rehype-sort-tailwind-classes/actions/workflows/main.yml)

## Install

This package is [ESM-only][esm]: Node 12+ is needed to use it and it must be `imported`ed instead of `required`d.

[npm][]:

```sh
npm install rehype-sort-tailwind-classes
```

This package exports no identifiers. The default export is `rehypeSortTailwindClasses`.

## Use

On the API:

```diff
 import { unified } from 'unified';
 import rehypeParse from 'rehype-parse';
+import rehypeSortTailwindClasses from 'rehype-sort-tailwind-classes';
 import rehypeStringify from 'rehype-stringify';

 unified()
   .use(rehypeParse)
+  .use(rehypeSortTailwindClasses)
   .use(rehypeStringify)
   .process('<span>some html</span>', function (err, file) {
     console.error(report(err || file));
     console.log(String(file));
   });
```

On the CLI:

```sh
rehype input.html --use rehype-sort-tailwind-classes --output output.html
```

## Example

##### In

```html
<div class="z-50 z-10 container text-left md:text-center justify-center"></div>
```

##### Out

```html
<div class="container z-10 z-50 justify-center text-left md:text-center"></div>
```

## License

[MIT](./LICENSE)

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[npm]: https://docs.npmjs.com/cli/install
