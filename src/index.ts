/**
 * This package consists of common mathematic functions unavailable in Math module.
 * Main focus is on simplicity & efficient implementation.
 *
 * @remarks
 * Library defines a list of modules with mathematic functions unavailable in EcmaScript's
 * Math module, however freely available in some other common languages like Python or Ruby.
 * 
 * All functions are implemented in TypeScript with the main focus on using efficient algorithms.
 * Documentation of every function tries to shed light up on each specific implementation, so
 * consumer can easily choose whether to use such function in their specific applications. 
 *
 * @packageDocumentation
 */

export * from './parity/is-even';
export * from './parity/is-odd';
export * from './product/factorial';
export * from './product/product';
export * from './sum/triangle-number';
export * from './sum/sum';
export * from './geometry/angular/radians-to-degrees';
export * from './geometry/angular/degrees-to-radians';
export * from './geometry/area/circle';
export * from './geometry/area/ellipse';
