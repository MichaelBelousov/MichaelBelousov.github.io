whitelist.txt generated by an HAR and then opening node and doing:

```js
const j = require("har-renamed-to-json.json");
j.log.entries
    .map(e => e.request.url)
    .filter(u => u.startsWith('http://localhost:80'))
    .forEach(u => console.log(u))
```

then you can find files not on the whitelist with:

```sh
comm -23  \
    <(find unreal-docs-site -type f | sort) \
    <(
        (
            cat unreal-docs-site/whitelist.txt | cut -b23-;
            cat unreal-docs-site/whitelist.txt | grep '/$' | cut -b23- | sed 's,/$,,g';
            cat unreal-docs-site/whitelist.txt | grep '/$' | cut -b23- | sed 's,$,index.html,g';
            echo unreal-docs-site/whitelist.txt;
            echo unreal-docs-site/whitelist.README.md
        ) | sort
    ) | xargs -I{} rm {}
```
