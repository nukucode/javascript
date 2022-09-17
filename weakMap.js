// weakMap

/// what is Garbage Collection ?

//// Javascript Garbage Collection is a form of memory management whareby object that are no longer referenced are automatically deleted and their resources are reclaimed

// weak Collections

//// Map and Set's references to objects are strongly held and will not allow for garbage collection.

//// WeakMap and WeakSet Es6 collections are 'weak' because they allow for objects which are no longer needed to be cleared from memory

// weakMap

/// A WeakMap is a collection of key/value paires whose keys must be objects only. Primitive data types as keys are not allowed.

/// WeakMap does not support iteration and methods keys(), values(), entries(), so there's no way to get all keys or values from it.

// weakMap Methods

/// 1. weakMap.get(key)
/// 2. weakMap.set(key,value),
/// 3. weakMap.delete(key),
/// 4. weakMap.has(key),
