---
title: irori
---

<div class="lead"></div>

## Instalation

    yarn add irori

## Command-line usage

    $ irori ./path/to/file.md

Its output format is compatible with TextLint default format.

## Module usage

    import { lint, fix } from 'irori'

    const myText = "This is very usefull";
    const errors = await lint(myText);
    const fixedText = awiat fix(myText);

## Online tool

[https://projects.pixelastic.com/irori/demo][1]

## What it does

### Fixes common misspelled words

No more **available**, **reliability**, **across** or **relevant**. It
automatically fixes the [most common misspellings][2].

- Proper tech name capitalization
- American / British english
- Don't -> do not
- Guys and binary words
- Commonly misspelled words
- "to be able to "
- "simply", "only", "obviously"
- Valid Markdown

## Why this name?

Irori is the god of Knowledge and Self-Perfection in the fantasy world of
Golarion. I found it suitable for a tool to fix your writing so you can better
share your knowledge through blog posts.

[1]: https://projects.pixelastic.com/irori/demo
[2]: https://en.wikipedia.org/wiki/Wikipedia:Lists_of_common_misspellings
