# primitive publish script, just have gatsby generate everything and
# put it in the repo root for the static site
gatsby build
cp -r public/* ..
