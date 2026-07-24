<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# zunitspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-zunitspace
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zunitspace = require( '@stdlib/blas-ext-base-zunitspace' );
```

#### zunitspace( N, start, x, strideX )

Fills a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zunitspace( x.length, new Complex128( 3.0, 0.0 ), x, 1 );
// x => <Complex128Array>[ 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **start**: starting [`Complex128`][@stdlib/complex/float64/ctor] value.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element:

<!-- eslint-disable max-len -->

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

zunitspace( 3, new Complex128( 3.0, 0.0 ), x, 2 );
// x => <Complex128Array>[ 3.0, 0.0, 3.0, 4.0, 4.0, 0.0, 7.0, 8.0, 5.0, 0.0, 11.0, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable max-len -->

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex128Array = require( '@stdlib/array-complex128' );

// Initial array...
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create an offset view...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill every other element...
zunitspace( 3, new Complex128( 3.0, 0.0 ), x1, 2 );
// x0 => <Complex128Array>[ 1.0, 2.0, 3.0, 0.0, 5.0, 6.0, 4.0, 0.0, 9.0, 10.0, 5.0, 0.0 ]
```

#### zunitspace.ndarray( N, start, x, strideX, offsetX )

Fills a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value using alternative indexing semantics.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zunitspace.ndarray( x.length, new Complex128( 3.0, 0.0 ), x, 1, 0 );
// x => <Complex128Array>[ 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements:

<!-- eslint-disable max-len -->

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

zunitspace.ndarray( 3, new Complex128( 3.0, 0.0 ), x, 1, x.length-3 );
// x => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 3.0, 0.0, 4.0, 0.0, 5.0, 0.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var zunitspace = require( '@stdlib/blas-ext-base-zunitspace' );

var xbuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float64'
});
var x = new Complex128Array( xbuf.buffer );
console.log( x );

zunitspace( x.length, new Complex128( 3.0, 0.0 ), x, 1 );
console.log( x );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/zunitspace.h"
```

#### stdlib_strided_zunitspace( N, start, \*X, strideX )

Fills a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.

```c
#include "stdlib/complex/float64/ctor.h"

double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

const stdlib_complex128_t start = stdlib_complex128( 3.0, 0.0 );

stdlib_strided_zunitspace( 4, start, (stdlib_complex128_t *)x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **start**: `[in] stdlib_complex128_t` starting value.
-   **X**: `[out] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.

```c
void API_SUFFIX(stdlib_strided_zunitspace)( const CBLAS_INT N, const stdlib_complex128_t start, stdlib_complex128_t *X, const CBLAS_INT strideX );
```

#### stdlib_strided_zunitspace_ndarray( N, start, \*X, strideX, offsetX )

Fills a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value using alternative indexing semantics.

```c
#include "stdlib/complex/float64/ctor.h"

double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

const stdlib_complex128_t start = stdlib_complex128( 3.0, 0.0 );

stdlib_strided_zunitspace_ndarray( 4, start, (stdlib_complex128_t *)x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **start**: `[in] stdlib_complex128_t` starting value.
-   **X**: `[out] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.

```c
void API_SUFFIX(stdlib_strided_zunitspace_ndarray)( const CBLAS_INT N, const stdlib_complex128_t start, stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/zunitspace.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array of interleaved real and imaginary components:
    double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify a stride:
    const int strideX = 1;

    // Specify a starting value:
    const stdlib_complex128_t start = stdlib_complex128( 3.0, 0.0 );

    // Fill the array:
    stdlib_strided_zunitspace( N, start, (stdlib_complex128_t *)x, strideX );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "x[ %i ] = %lf\n", i, x[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-zunitspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-zunitspace

[test-image]: https://github.com/stdlib-js/blas-ext-base-zunitspace/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-zunitspace/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-zunitspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-zunitspace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-zunitspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-zunitspace/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-zunitspace/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-zunitspace/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-zunitspace/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-zunitspace/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-zunitspace/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-zunitspace/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-zunitspace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-zunitspace/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
