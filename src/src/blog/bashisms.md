---
title: "Bashisms Part 1"
date: "2022-04-12"
---

I use too much bash. I've written down some of the more outrageous or useful ones. I think it'll make a good part 1 to
an ongoing series.

#### List extensions of non-text files in a git repository

```sh
comm -13 <(git grep -Il '' | sort -u) \
         <(git grep -al '' | sort -u) \
  | grep -Po '(?<=\.)\w+$' | sort -u
```

#### comparing sections of files across git history with changed line-endings and indent levels

```sh
dwdiff --color \
  <(sed -n '103,125p' core/test/CompatTests.cpp | unix2dos) \
  <(git show 7c788f88:core/test/CompatTests.cpp | sed -n '88,108p' | cut -b13-)
```

#### not really bash but... play a little song where you invoke the C compiler for every note

```sh
for AMP in 20 50 127; do f=$(mktemp); cat <<EOF | gcc -x c -o $f - -lm && $f | aplay; done
#include <stdio.h>
#include <math.h>
void main(){ for (int t=0,osc=0;t<8000;t++,osc+=14) putchar($AMP*sin(osc/255.0*2*3.14) + 128); }
EOF
```

#### This one is quite raw... guess what it does

```sh
FOR class IN $(grep -Pho '\.[a-zA-Z][a-z-A-Z0-9-]+'
  ~/your-mono-repo/packages/package/src/components/*.scss
  | sort -u)
DO
  sed -i s/\"${class/./}\"/$(perl -p -e 's/(?<=[a-z-]{1,100})-(\w)/\U\1/g' <<<"${class/./}")/ \
    'package/src/frontend/layout/*.ts'
DONE
```

<details>
  <summary>The answer</summary>
  Converts kebab-case identifiers to camelCased ones in typescript-react source code given some SCSS
</details>
