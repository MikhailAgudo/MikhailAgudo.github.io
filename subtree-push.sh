#!/bin/sh/

# Add content from the docs folder.
git add docs

# The argument $1 must contain "" because commit reasons.
git commit -m $1

# subtree push it to gh-pages
git subtree push --prefix docs origin gh-pages