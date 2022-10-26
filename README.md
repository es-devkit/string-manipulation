<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Interfaces](#interfaces)
- [Interface: CasingOptions](#interface-casingoptions)
  - [Table of contents](#table-of-contents)
    - [Properties](#properties)
  - [Properties](#properties-1)
    - [delimiter](#delimiter)
    - [splitRegexp](#splitregexp)
    - [stripRegexp](#stripregexp)
    - [transform](#transform)
- [@es-devkit/string-manipulation](#es-devkitstring-manipulation)
  - [Table of contents](#table-of-contents-1)
    - [Interfaces](#interfaces-1)
    - [Variables](#variables)
    - [Functions](#functions)
  - [Variables](#variables-1)
    - [DEFAULT\_SPLIT\_REGEXP](#default%5C_split%5C_regexp)
    - [DEFAULT\_STRIP\_REGEXP](#default%5C_strip%5C_regexp)
  - [Functions](#functions-1)
    - [camelCase](#camelcase)
    - [camelCaseTransform](#camelcasetransform)
    - [camelCaseTransformMerge](#camelcasetransformmerge)
    - [capitalCase](#capitalcase)
    - [capitalCaseTransform](#capitalcasetransform)
    - [constantCase](#constantcase)
    - [dotCase](#dotcase)
    - [headerCase](#headercase)
    - [isLowerCase](#islowercase)
    - [isUpperCase](#isuppercase)
    - [lowerCase](#lowercase)
    - [lowerCaseFirst](#lowercasefirst)
    - [noCase](#nocase)
    - [paramCase](#paramcase)
    - [pascalCase](#pascalcase)
    - [pascalCaseTransform](#pascalcasetransform)
    - [pascalCaseTransformMerge](#pascalcasetransformmerge)
    - [pathCase](#pathcase)
    - [sentenceCase](#sentencecase)
    - [sentenceCaseTransform](#sentencecasetransform)
    - [snakeCase](#snakecase)
    - [spongeCase](#spongecase)
    - [swapCase](#swapcase)
    - [titleCase](#titlecase)
    - [upperCase](#uppercase)
    - [upperCaseFirst](#uppercasefirst)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Interfaces


<a name="interfacescasingoptionsmd"></a>

[@es-devkit/string-manipulation](#mainmd) / [Exports](#modulesmd) / CasingOptions

# Interface: CasingOptions

String casing options.

**`Property`**

The delimiter to use when joining characters.

**`Property`**

The regular expression to use when splitting characters.

**`Property`**

The regular expression to use when stripping characters.

**`Property`**

The transform function to use when transforming characters.

## Table of contents

### Properties

- [delimiter](#delimiter)
- [splitRegexp](#splitregexp)
- [stripRegexp](#stripregexp)
- [transform](#transform)

## Properties

### delimiter

• `Optional` **delimiter**: `string`

#### Defined in

[casing/casing-options.mts:24](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/casing-options.mts#L24)

___

### splitRegexp

• `Optional` **splitRegexp**: `RegExp` \| `RegExp`[]

#### Defined in

[casing/casing-options.mts:22](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/casing-options.mts#L22)

___

### stripRegexp

• `Optional` **stripRegexp**: `RegExp` \| `RegExp`[]

#### Defined in

[casing/casing-options.mts:23](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/casing-options.mts#L23)

___

### transform

• `Optional` **transform**: (`part`: `string`, `index`: `number`, `parts`: `string`[]) => `string`

#### Type declaration

▸ (`part`, `index`, `parts`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `string` |
| `index` | `number` |
| `parts` | `string`[] |

##### Returns

`string`

#### Defined in

[casing/casing-options.mts:25](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/casing-options.mts#L25)


<a name="mainmd"></a>

@es-devkit/string-manipulation / [Exports](#modulesmd)


<a name="modulesmd"></a>

[@es-devkit/string-manipulation](#mainmd) / Exports

# @es-devkit/string-manipulation

## Table of contents

### Interfaces

- [CasingOptions](#interfacescasingoptionsmd)

### Variables

- [DEFAULT\_SPLIT\_REGEXP](#default_split_regexp)
- [DEFAULT\_STRIP\_REGEXP](#default_strip_regexp)

### Functions

- [camelCase](#camelcase)
- [camelCaseTransform](#camelcasetransform)
- [camelCaseTransformMerge](#camelcasetransformmerge)
- [capitalCase](#capitalcase)
- [capitalCaseTransform](#capitalcasetransform)
- [constantCase](#constantcase)
- [dotCase](#dotcase)
- [headerCase](#headercase)
- [isLowerCase](#islowercase)
- [isUpperCase](#isuppercase)
- [lowerCase](#lowercase)
- [lowerCaseFirst](#lowercasefirst)
- [noCase](#nocase)
- [paramCase](#paramcase)
- [pascalCase](#pascalcase)
- [pascalCaseTransform](#pascalcasetransform)
- [pascalCaseTransformMerge](#pascalcasetransformmerge)
- [pathCase](#pathcase)
- [sentenceCase](#sentencecase)
- [sentenceCaseTransform](#sentencecasetransform)
- [snakeCase](#snakecase)
- [spongeCase](#spongecase)
- [swapCase](#swapcase)
- [titleCase](#titlecase)
- [upperCase](#uppercase)
- [upperCaseFirst](#uppercasefirst)

## Variables

### DEFAULT\_SPLIT\_REGEXP

• `Const` **DEFAULT\_SPLIT\_REGEXP**: `RegExp`[]

Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").

#### Defined in

[casing/casing-options.mts:4](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/casing-options.mts#L4)

___

### DEFAULT\_STRIP\_REGEXP

• `Const` **DEFAULT\_STRIP\_REGEXP**: `RegExp`

Removes all non-word characters.

#### Defined in

[casing/casing-options.mts:12](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/casing-options.mts#L12)

## Functions

### camelCase

▸ **camelCase**(`input`, `options?`): `string`

Convert a string to camel case.

**`Example`**

```ts
camelCase('Foo Bar'); // 'fooBar'
camelCase('fooBar'); // 'fooBar'
camelCase('_foo_bar_'); // 'fooBar'
camelCase('FOO_BAR'); // 'fooBar'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to camel case. |
| `options` | [`CasingOptions`](#interfacescasingoptionsmd) | the string manipulation options to use. |

#### Returns

`string`

the camel case version of the input string.

#### Defined in

[casing/camel-case.mts:42](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/camel-case.mts#L42)

___

### camelCaseTransform

▸ **camelCaseTransform**(`input`, `index`): `string`

Transform a string to camel case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to camel case. |
| `index` | `number` | the index of the current word in the input string. |

#### Returns

`string`

the camel case version of the input string.

#### Defined in

[casing/camel-case.mts:15](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/camel-case.mts#L15)

___

### camelCaseTransformMerge

▸ **camelCaseTransformMerge**(`input`, `index`): `string`

Transform a pre merged string to camel case

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to camel case. |
| `index` | `number` | the index of the current word in the input string. |

#### Returns

`string`

the camel case version of the input string.

#### Defined in

[casing/camel-case.mts:26](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/camel-case.mts#L26)

___

### capitalCase

▸ **capitalCase**(`input`, `options?`): `string`

Convert a string to capital case.

**`Example`**

```ts
capitalCase('Foo Bar'); // 'Foo Bar'
capitalCase('fooBar'); // 'Foo Bar'
capitalCase('foo bar'); // 'Foo Bar'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The string to convert to capital case. |
| `options` | [`CasingOptions`](#interfacescasingoptionsmd) | The string manipulation options to use. |

#### Returns

`string`

The capital case version of the input string.

#### Defined in

[casing/capital-case.mts:24](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/capital-case.mts#L24)

___

### capitalCaseTransform

▸ **capitalCaseTransform**(`input`): `string`

Convert a string to capital case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to capital case. |

#### Returns

`string`

the capital case version of the input string.

#### Defined in

[casing/capital-case.mts:10](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/capital-case.mts#L10)

___

### constantCase

▸ **constantCase**(`input`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `options` | [`CasingOptions`](#interfacescasingoptionsmd) |

#### Returns

`string`

#### Defined in

[casing/constant-case.mts:5](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/constant-case.mts#L5)

___

### dotCase

▸ **dotCase**(`input`, `options?`): `string`

Convert a string to dot case.

**`Example`**

```ts
dotCase('Foo Bar'); // 'foo.bar'
dotCase('fooBar'); // 'foo.bar'
dotCase('foo bar'); // 'foo.bar'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to dot case. |
| `options` | [`CasingOptions`](#interfacescasingoptionsmd) | the string manipulation options to use. |

#### Returns

`string`

the dot case version of the input string.

#### Defined in

[casing/dot-case.mts:14](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/dot-case.mts#L14)

___

### headerCase

▸ **headerCase**(`input`, `options?`): `string`

Convert a string to header case.

**`Example`**

```ts
headerCase('Foo Bar'); // 'Foo-Bar'
headerCase('fooBar'); // 'Foo-Bar'
headerCase('foo bar'); // 'Foo-Bar'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to header case. |
| `options` | [`CasingOptions`](#interfacescasingoptionsmd) | the string manipulation options to use. |

#### Returns

`string`

the header case version of the input string.

#### Defined in

[casing/header-case.mts:14](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/header-case.mts#L14)

___

### isLowerCase

▸ **isLowerCase**(`input`): `boolean`

Check if the input string is lowercase.

**`Example`**

```ts
isLowerCase('foo'); // true
isLowerCase('foo bar'); // true
isLowerCase('fooBar'); // false
isLowerCase('123'); // false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to check if it is lowercase. |

#### Returns

`boolean`

a boolean indicating whether the string is lower case.

#### Defined in

[casing/is-lower-case.mts:14](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/is-lower-case.mts#L14)

___

### isUpperCase

▸ **isUpperCase**(`input`): `boolean`

Check if the input string is upper case.

**`Example`**

```ts
isUpperCase('FOO'); // true
isUpperCase('FOO BAR'); // true
isUpperCase('FOOBAR'); // true
isUpperCase('Foobar'); // false
isUpperCase('123'); // false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to check if it is upper case. |

#### Returns

`boolean`

a boolean indicating whether the string is upper case.

#### Defined in

[casing/is-upper-case.mts:15](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/is-upper-case.mts#L15)

___

### lowerCase

▸ **lowerCase**(`str`): `string`

Converts all alphabetic characters to lowercase

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | the string to convert to lower case. |

#### Returns

`string`

a lower cased string.

#### Defined in

[casing/lower-case.mts:6](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/lower-case.mts#L6)

___

### lowerCaseFirst

▸ **lowerCaseFirst**(`input`): `string`

Lower case the first character of an input string.

**`Example`**

```ts
lowerCaseFirst('Foo'); // 'foo'
lowerCaseFirst('FOO'); // 'fOO'
lowerCaseFirst('foo'); // 'foo'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to lower case the first character of. |

#### Returns

`string`

the input string with the first character lower cased.

#### Defined in

[casing/lower-case-first.mts:12](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/lower-case-first.mts#L12)

___

### noCase

▸ **noCase**(`str`, `options?`): `string`

Normalize the string into something other libraries can manipulate easier.

**`Example`**

```ts
noCase('Foo Bar'); // 'foo bar'
noCase('fooBar'); // 'foo bar'
noCase('foo bar'); // 'foo bar'
noCase('foo.bar'); // 'foo bar'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to normalize. |
| `options` | [`CasingOptions`](#interfacescasingoptionsmd) | The string manipulation options to use. |

#### Returns

`string`

The normalized string.

#### Defined in

[casing/no-case.mts:19](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/no-case.mts#L19)

___

### paramCase

▸ **paramCase**(`input`, `options?`): `string`

Convert a string to param case.

**`Example`**

```ts
paramCase('Foo Bar'); // 'foo-bar'
paramCase('fooBar'); // 'foo-bar'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The string to convert. |
| `options` | [`CasingOptions`](#interfacescasingoptionsmd) | The string manipulation options to use. |

#### Returns

`string`

The param case version of the input string.

#### Defined in

[casing/param-case.mts:13](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/param-case.mts#L13)

___

### pascalCase

▸ **pascalCase**(`input`, `options?`): `string`

Convert a string to pascal case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to pascal case. |
| `options` | [`CasingOptions`](#interfacescasingoptionsmd) | the string manipulation options to use. |

#### Returns

`string`

the pascal case version of the input string.

#### Defined in

[casing/pascal-case.mts:36](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/pascal-case.mts#L36)

___

### pascalCaseTransform

▸ **pascalCaseTransform**(`input`, `index`): `string`

Transform a string to pascal case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to pascal case. |
| `index` | `number` | the index of the string |

#### Returns

`string`

the pascal case version of the input string.

#### Defined in

[casing/pascal-case.mts:12](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/pascal-case.mts#L12)

___

### pascalCaseTransformMerge

▸ **pascalCaseTransformMerge**(`input`): `string`

Transform a pre merged string to pascal case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to pascal case. |

#### Returns

`string`

the pascal case version of the input string.

#### Defined in

[casing/pascal-case.mts:26](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/pascal-case.mts#L26)

___

### pathCase

▸ **pathCase**(`input`, `options?`): `string`

Convert a string to path case.

**`Example`**

```ts
pathCase('Foo Bar'); // 'foo/bar'
pathCase('fooBar'); // 'foo/bar'
pathCase('foo bar'); // 'foo/bar'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to path case. |
| `options` | [`CasingOptions`](#interfacescasingoptionsmd) | the string manipulation options to use. |

#### Returns

`string`

the path case version of the input string.

#### Defined in

[casing/path-case.mts:14](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/path-case.mts#L14)

___

### sentenceCase

▸ **sentenceCase**(`input`, `options?`): `string`

Convert a string to sentence case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to sentence case. |
| `options` | [`CasingOptions`](#interfacescasingoptionsmd) | the string manipulation options to use. |

#### Returns

`string`

the sentence case version of the input string.

#### Defined in

[casing/sentence-case.mts:23](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/sentence-case.mts#L23)

___

### sentenceCaseTransform

▸ **sentenceCaseTransform**(`input`, `index`): `string`

Transform a string to sentence case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to transform to sentence case. |
| `index` | `number` | the index of the current character in the input string. |

#### Returns

`string`

the sentence case version of the input string.

#### Defined in

[casing/sentence-case.mts:11](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/sentence-case.mts#L11)

___

### snakeCase

▸ **snakeCase**(`input`, `options?`): `string`

Convert a string to snake case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to snake case. |
| `options` | [`CasingOptions`](#interfacescasingoptionsmd) | the string manipulation options to use. |

#### Returns

`string`

the snake case version of the input string.

#### Defined in

[casing/snake-case.mts:10](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/snake-case.mts#L10)

___

### spongeCase

▸ **spongeCase**(`input`): `string`

Convert a string to sponge case (random casing).

**`Example`**

```ts
spongeCase('Foo Bar'); // 'fOo bAr'
spongeCase('Foo Bar'); // 'FOo BaR'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to sponge case. |

#### Returns

`string`

the sponge case version of the input string.

#### Defined in

[casing/sponge-case.mts:9](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/sponge-case.mts#L9)

___

### swapCase

▸ **swapCase**(`input`): `string`

Convert the input string by swapping the case of each character.

**`Example`**

```ts
swapCase('Foo Bar'); // 'fOO bAR'
swapCase('fooBar'); // 'FOObAR'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to swap the case of. |

#### Returns

`string`

the input string with the case of each character swapped.

#### Defined in

[casing/swap-case.mts:13](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/swap-case.mts#L13)

___

### titleCase

▸ **titleCase**(`input`): `string`

Convert a string to title case.

**`Example`**

```ts
titleCase('foo bar'); // 'Foo Bar'
titleCase('fooBar'); // 'Foo Bar'
titleCase('pass camelCase through'); // 'Pass camelCase Through'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to convert to title case. |

#### Returns

`string`

the title case version of the input string.

#### Defined in

[casing/title-case.mts:19](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/title-case.mts#L19)

___

### upperCase

▸ **upperCase**(`str`): `string`

Converts all alphabetic characters to uppercase

**`Example`**

```ts
upperCase('Foo Bar'); // 'FOO BAR'
upperCase('fooBar'); // 'FOO BAR'
upperCase('__foo_bar__'); // 'FOO BAR'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | the string to convert to upper case. |

#### Returns

`string`

a upper cased string.

#### Defined in

[casing/upper-case.mts:12](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/upper-case.mts#L12)

___

### upperCaseFirst

▸ **upperCaseFirst**(`input`): `string`

Upper case the first character of an input string.

**`Example`**

```ts
upperCaseFirst('foo'); // 'Foo'
upperCaseFirst('foo bar'); // 'Foo bar'
upperCaseFirst('fooBar'); // 'FooBar'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | the string to upper case the first character of. |

#### Returns

`string`

the input string with the first character upper cased.

#### Defined in

[casing/upper-case-first.mts:12](https://github.com/es-devkit/string-manipulation/blob/6d78836/src/lib/casing/upper-case-first.mts#L12)
