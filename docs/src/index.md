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
- Don't use "eg.", use "for example"
- American / British english
- Don't -> do not
- Guys and binary words
- Commonly misspelled words
- "to be able to "
- "simply", "only", "obviously"
- Valid Markdown
- Warn about leftover TOOD: https://github.com/textlint-rule/textlint-rule-no-todo
- Should we have a period at the end of list items?

### Other plugins?

- https://github.com/0x6b/textlint-rule-normalize-whitespaces
- https://freesoft.dev/program/102938433
- https://github.com/sapegin/textlint-rule-apostrophe
- https://github.com/sapegin/textlint-rule-diacritics
- https://github.com/sapegin/textlint-rule-stop-words
- https://github.com/sapegin/textlint-rule-terminology
textlint-rule-terminology
textlint-rule-max-comma
textlint-rule-no-start-duplicated-conjunction
textlint-rule-period-in-list-item
textlint-rule-en-max-word-count
textlint-rule-diacritics
textlint-rule-spellchecker


## Why this name?

Irori is the god of Knowledge and Self-Perfection in the fantasy world of
Golarion. I found it suitable for a tool to fix your writing so you can better
share your knowledge through blog posts.

[1]: https://projects.pixelastic.com/irori/demo
[2]: https://en.wikipedia.org/wiki/Wikipedia:Lists_of_common_misspellings
