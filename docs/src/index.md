---
title: irori
---

<div class="lead"></div>

## Instalation

```
yarn add irori
```

## Command line usage

```
$ irori ./path/to/file.md
```

Its output format is compatible with TextLint default format.

## Module usage

```
import { lint, fix } from 'irori'

const myText = "This is very usefull";
const errors = await lint(myText);
const fixedText = awiat fix(myText);
```

## Online tool

https://projects.pixelastic.com/irori/demo




## What it does

- Proper tech name capitalization
- American / British english
- don't -> do not
- guys and binary words
- commonly mispelled words
- "in order to be able to "
- "simply", "only", "obviously"
- valid markdown


## Why this name?

Irori is the god of Knowledge and Self-Perfection in the fantasy world of
Golarion. I found it suitable for a tool to fix your writing so you can better
share your knowledge through blog posts.

