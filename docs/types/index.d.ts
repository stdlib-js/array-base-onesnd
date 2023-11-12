/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* One-dimensional array.
*/
type Array1D<T> = Array<T>;

/**
* One-dimensional array shape.
*/
type Shape1D = [ number ]; // tslint:disable-line:no-single-element-tuple-type

/**
* Two-dimensional array.
*/
type Array2D<T> = Array<Array1D<T>>;

/**
* Two-dimensional array shape.
*/
type Shape2D = [ number, number ];

/**
* Three-dimensional array.
*/
type Array3D<T> = Array<Array2D<T>>;

/**
* Three-dimensional array shape.
*/
type Shape3D = [ number, number, number ];

/**
* Four-dimensional array.
*/
type Array4D<T> = Array<Array3D<T>>;

/**
* Four-dimensional array shape.
*/
type Shape4D = [ number, number, number, number ];

/**
* Five-dimensional array.
*/
type Array5D<T> = Array<Array4D<T>>;

/**
* Five-dimensional array shape.
*/
type Shape5D = [ number, number, number, number, number ];

/**
* Six-dimensional array.
*/
type Array6D<T> = Array<Array5D<T>>;

/**
* Six-dimensional array shape.
*/
type Shape6D = [ number, number, number, number, number, number ];

/**
* Seven-dimensional array.
*/
type Array7D<T> = Array<Array6D<T>>;

/**
* Seven-dimensional array shape.
*/
type Shape7D = [ number, number, number, number, number, number, number ];

/**
* Eight-dimensional array.
*/
type Array8D<T> = Array<Array7D<T>>;

/**
* Eight-dimensional array shape.
*/
type Shape8D = [ number, number, number, number, number, number, number, number ];

/**
* Nine-dimensional array.
*/
type Array9D<T> = Array<Array8D<T>>;

/**
* Nine-dimensional array shape.
*/
type Shape9D = [ number, number, number, number, number, number, number, number, number ];

/**
* Ten-dimensional array.
*/
type Array10D<T> = Array<Array9D<T>>; // WARNING: arbitrarily limited to 10 dimensions, which should be fine for most practical purposes

/**
* Ten-dimensional array shape.
*/
type Shape10D = [ number, number, number, number, number, number, number, number, number, number ];

/**
* Returns a one-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = onesnd( [ 3 ] );
* // returns [ 1.0, 1.0, 1.0 ]
*/
declare function onesnd( shape: Shape1D ): Array1D<number>;
/**
* Returns a two-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = onesnd( [ 1, 3 ] );
* // returns [ [ 1.0, 1.0, 1.0 ] ]
*/
declare function onesnd( shape: Shape2D ): Array2D<number>;
/**
* Returns a three-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = onesnd( [ 1, 1, 3 ] );
* // returns [ [ [ 1.0, 1.0, 1.0 ] ] ]
*/
declare function onesnd( shape: Shape3D ): Array3D<number>;

/**
* Returns a four-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = onesnd( [ 1, 1, 1, 3 ] );
* // returns [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ]
*/
declare function onesnd( shape: Shape4D ): Array4D<number>;

/**
* Returns a five-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = onesnd( [ 1, 1, 1, 1, 3 ] );
* // returns [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ]
*/
declare function onesnd( shape: Shape5D ): Array5D<number>;

/**
* Returns a six-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = onesnd( [ 1, 1, 1, 1, 1, 3 ] );
* // returns [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ]
*/
declare function onesnd( shape: Shape6D ): Array6D<number>;

/**
* Returns a seven-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = onesnd( [ 1, 1, 1, 1, 1, 1, 3 ] );
* // returns [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ]
*/
declare function onesnd( shape: Shape7D ): Array7D<number>;

/**
* Returns an eight-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = onesnd( [ 1, 1, 1, 1, 1, 1, 1, 3 ] );
* // returns [ [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ] ]
*/
declare function onesnd( shape: Shape8D ): Array8D<number>;

/**
* Returns a nine-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = onesnd( [ 1, 1, 1, 1, 1, 1, 1, 1, 3 ] );
* // returns [ [ [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ] ] ]
*/
declare function onesnd( shape: Shape9D ): Array9D<number>;

/**
* Returns a ten-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = onesnd( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ] );
* // returns [ [ [ [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ] ] ] ]
*/
declare function onesnd( shape: Shape10D ): Array10D<number>;

/**
* Returns an n-dimensional nested array filled with ones.
*
* @param shape - array shape
* @returns output array
*
* @example
* var out = onesnd( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ] );
* // returns [ [ [ [ [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ] ] ] ]
*/
declare function onesnd<T = unknown>( shape: Collection<number> ): Array<T>;


// EXPORTS //

export = onesnd;
