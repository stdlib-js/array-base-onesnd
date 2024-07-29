<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# onesnd

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an n-dimensional nested array filled with ones.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
onesnd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-onesnd@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var onesnd = require( 'path/to/vendor/umd/array-base-onesnd/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-onesnd@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.onesnd;
})();
</script>
```

#### onesnd( shape )

Returns an n-dimensional nested array filled with ones.

```javascript
var out = onesnd( [ 2, 3 ] );
// returns [ [ 1.0, 1.0, 1.0 ], [ 1.0, 1.0, 1.0 ] ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-onesnd@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var out = onesnd( [ 1, 3 ] );
// returns [ [ 1.0, 1.0, 1.0 ] ]

out = onesnd( [ 3, 1 ] );
// returns [ [ 1.0 ], [ 1.0 ], [ 1.0 ] ]

out = onesnd( [ 1, 1, 3 ] );
// returns [ [ [ 1.0, 1.0, 1.0 ] ] ]

out = onesnd( [ 1, 3, 1 ] );
// returns [ [ [ 1.0 ], [ 1.0 ], [ 1.0 ] ] ]

out = onesnd( [ 1, 1, 1, 3 ] );
// returns [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ]

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-base/zerosnd`][@stdlib/array/base/zerosnd]</span><span class="delimiter">: </span><span class="description">create a zero-filled n-dimensional nested array.</span>
-   <span class="package-name">[`@stdlib/array-base/ones`][@stdlib/array/base/ones]</span><span class="delimiter">: </span><span class="description">create a generic array filled with ones.</span>
-   <span class="package-name">[`@stdlib/array-base/ones2d`][@stdlib/array/base/ones2d]</span><span class="delimiter">: </span><span class="description">create a two-dimensional nested array filled with ones.</span>
-   <span class="package-name">[`@stdlib/array-base/ones3d`][@stdlib/array/base/ones3d]</span><span class="delimiter">: </span><span class="description">create a three-dimensional nested array filled with ones.</span>
-   <span class="package-name">[`@stdlib/array-base/ones4d`][@stdlib/array/base/ones4d]</span><span class="delimiter">: </span><span class="description">create a four-dimensional nested array filled with ones.</span>
-   <span class="package-name">[`@stdlib/array-base/ones5d`][@stdlib/array/base/ones5d]</span><span class="delimiter">: </span><span class="description">create a five-dimensional nested array filled with ones.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-onesnd.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-onesnd

[test-image]: https://github.com/stdlib-js/array-base-onesnd/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/array-base-onesnd/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-onesnd/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-onesnd?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-onesnd.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-onesnd/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-onesnd/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-onesnd/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-onesnd/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-onesnd/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-onesnd/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-onesnd/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-onesnd/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-onesnd/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/base/zerosnd]: https://github.com/stdlib-js/array-base-zerosnd/tree/umd

[@stdlib/array/base/ones]: https://github.com/stdlib-js/array-base-ones/tree/umd

[@stdlib/array/base/ones2d]: https://github.com/stdlib-js/array-base-ones2d/tree/umd

[@stdlib/array/base/ones3d]: https://github.com/stdlib-js/array-base-ones3d/tree/umd

[@stdlib/array/base/ones4d]: https://github.com/stdlib-js/array-base-ones4d/tree/umd

[@stdlib/array/base/ones5d]: https://github.com/stdlib-js/array-base-ones5d/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
