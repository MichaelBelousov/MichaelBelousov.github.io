---
path: "/blog/empowering-LaTeX"
title: "Empowering LaTeX (PyLaTeXc)"
date: "2019-05-04"
---

# Empowering LaT<sub>E</sub>X (PyLaT<sub>E</sub>Xc)
### May 4, 2019

The one nagging gap in my homework development stack early on
was an itch for 
programmability, that trait which Excel is alleged to have.
But I have a gripe with Excel. It's like Scratch for adults,
A psuedoscripting language for the uninitiated and unlearned.
Personally, I've always kicked up a Python interpreter any
time I needed a calculation, and I quickly began depending on
Python+scipy for more intense derivations and data routines. I scratched
up a utility module for producing LaT<sub>E</sub>X tables and pgfplots graphics
from various data formats, and used it frequently with minimal
copy and paste glue (thank you Cygwin's 
    `/dev/clipboard`).

But larger projects begged for more complete tools; like that assignment
involving the visualization 
of 26 different samples from a dataset, as well as calculating some
statistical metrics about each sample.
A sane person would have used the charting features
in the Excel spreadsheet it was provided in, but that's outside the scope
of this post.
I exported to csv immediately and made an incredibly primitive 
toolkit for embedding Python logic in LaT<sub>E</sub>X. Revisiting it a
couple of months later, I refined my toolkit massively and today I 
would consider the design complete, but alternative implementation
approaches merit some exploration.

The first time I attemped glueing my Pythonisms into LaT<sub>E</sub>X, 
my design was a tiny mapping from a LaT<sub>E</sub>X grammar extension
to Python formatting key syntax.
If I were to write my LaT<sub>E</sub>X code directly in a Python string,
and attempt to use formatting keys,
I would probably spontaneously combust. It looks like this:

```python
r"""\begin{{document}}
\frac{{ {kill} }}{{ {me} }}
\end{{document}}""".format(kill=5, me=10)
```

That's almost as crufty as chained ternary expressions in JSX.
Backslash doubling I can avoid by making it a raw string, but that
isn't an option in all use cases.
Regardless, I hid this formatting ugliness behind a script, which
escaped braces for me, and interpretted the characters '<<' as '{', and
'>>' as '}'. So now I didn't have to brace every 5 characters, and the
keys looked distinct from the LaT<sub>E</sub>X syntax.
My dumb and ugly LaT<sub>E</sub>X superset templater took about 5 lines of 
Python code to process, and the source looked like:

```python
\begin{document}
\frac{<<numerator>>}{<<denominator>>}
\end{document}
```

Quite literally, all my template processor had to do was replace all braces with
escaped double braces, and then replace all 
double angle brackets with a single formatting brace, thus yielding
the valid Python formatting keys, while allowing raw LaT<sub>E</sub>X to look
at least familiar.
Then you just produce your values and/or data in your Python script, 
read this template from some file,
and submit it to Python's formatting functinos with the expected keyword
arguments that you used in the document source 
(e.g. <<numerator>>).
Here's the naive templating implementation:

```python
def load_pytex(path, **kwargs):
  txt = open(path).read()
  txt = txt.replace('{','{{').replace('}','}}')    
  txt = txt.replace('<<', '{').replace('>>', '}')
  txt.format(**kwargs)
  return txt  # or subproc.check_output(['pdflatex' ...])
```

So this works, but it would be quite annoying to have a Python
context so decoupled from the usage context. Calculating things
without regard to the location in the document, and being
unable to change the logic while editing the document without
switching files.
Certainly I could do better? So I did something sinful.

Fake macros in LaT<sub>E</sub>X will make this all look way more T<sub>E</sub>X-savvy. 
Let's add a `\pyeval` pseudo-command, and a 
`pyexec` pseudo-environment so that we can get something 
like so:

```python
\begin{pyexec}
name = 'John'
\end{pyexec}

Hello I am \pyeval{' '.join([name,'Smith'])}
```

Originally I implemented (knowing my transgressions) a naive
regular expression based implementation, but this has many problems
* I want to ignore false ends in quotes and comments
* I want to allow counting of nested braces in pyeval

expressions so that you don't need to escape all right
braces. (Regular expressions can't find the valid ending
    brace of a nested expression)
Checkout the following counter_examples:

```python
\begin{pyexec}
hate_you = r'\end{pyexec}'  # we need to avoid ending if its in a literal
\end{pyexec}

\pyeval{h = {'hello': 'world', 'x': {}}}  # which brace do we end on?
```

So I couldn't use regular expressions for this, but I still wanted it.
Because my LaT<sub>E</sub>X document source would look like this:

```python
\begin{pyexec}
from scipy.optimize import curve_fit
from random import random as rand
from itertools import count, product as crossproduct
bin = crossproduct((0,1),repeat=5)
data = list(zip(count(), bin))
# add a count of set bits as a column
for row in data:
d, b = row
row.append(b.count(1))
randpts = [[rand(),rand()] for _ in range(100)]
\end{pyexec}

\section*{Data Stuff}

\begin{tabular}{|c|c|}
\hline
Decimal &amp; Binary &amp; 1-Bits \\
\hline
\pyeval{'\n'.join(('&amp;'.join(map(str,d)) for d in data))}
% we can extract the above one-liner for reuse in tabular 
% construction and any horizontally partitioned context
\hline
\end{tabular}

% use unpack+zip hack to get separate lists of x then y coords
Best Fit: \pyeval{curve_fit(lambda x,m,b: m*x+b, zip(*randpts))} 
```

Mmmmm... delicious. It looks so much like Python yet so much like LaT<sub>E</sub>X.
It's both at once, without crippling either one! It's logic embedded in the document
markup cleanly. So I did go and implement it. Originally I tried using a more
complicated parsing approach, PyParsing, but it turned out to be far too complicated
for what was essentially templating. I ended up settling on parsing by character, due
to the simplicity of the extension. There are a few performance enhancements I could
make but I'm not in the need of them right now, and I've noted them for posterity in
my README. This is PyLaT<sub>E</sub>X, and I put it on my
[GitHub](https://github.com/MichaelBelousov/pylatexc)


At last, I would argue, that we have a tool more extensible than Excel, 
it's got all of PyPI behind it, with numpy, scipy, and all the packages
you could want&emdash; embedded in your document.
If you like this approach, maybe you can be just as sinful and throw it into
Markdown, or change up the scripting language to your preference. So long as you
don't use php. Even if it's already a templating language.


`````markdown
My Document
===========

```pyexec
import csv
data = list(csv.reader('mycsv.csv'))
```
`>>> '\n'.join(data)`
`````

And as a final note, check out [Typora](https://typora.io/)
other cool ways to not use Office products. I don't actually use it, but the LaT<sub>E</sub>X
in Markdown makes me want to. Even if I'm not in school any more.

<style>
span.vim {
    font-size: 3pt;
}
</style>
