git subtree split --prefix build -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
git checkout .gitignore