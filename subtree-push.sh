#!/bin/sh/

# Add content from the docs folder.
git add docs

# The commit message is "lorem ipsum" because it's not that important.
git commit -m "lorem ipsum"

# subtree push it to gh-pages
git subtree push --prefix docs origin gh-pages