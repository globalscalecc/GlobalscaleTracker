# GlobalscaleTracker


### And on the web page:

```javascript
<script src="https://app.globalscale.cc/globalscale.tracker.js"></script>
<script>
GlobalscaleTracker.getFingerprint().then(
    function(fp) {
        console.log(fp);
    }
);
</script>

```

You can also call `GlobalscaleTracker.getFingerprintData()` to get a full JSON object with all its components.

## Options

You can use the `setOption` method to change the behavior of the library. Currently it takes only one option.

|  option |     type |                             example | what it does |
| - | - | - | - |
| exclude | string[] | ['webgl', 'system.browser.version'] | removes components from the fingerprint hash. An excluded top-level component improves performance. |

example usage:

```
GlobalscaleTracker.setOption('exclude', ['webgl', 'system.browser.version'])
```


To implement GlobalscaleTracker in a Next.js app, you can use a component [like this](examples/nextjs.tsx).

:warning: note, GlobalscaleTracker was published up to version 0.12.1 to NPM package `GlobalscaleTracker` and from v0.12.1 onwards will be published under `@GlobalscaleTracker/GlobalscaleTracker`. I'll occasionally update the old location, but please update your imports.

But bear in mind that the library is meant to be running in the browser. Let me know if the library fails on a server side import. However, `getFingerprint()` is not meant to be called server side.

## Build it yourself

Clone this repo and then run

```
npm run install
npm run build
```

Test cases you can try:
- Check your fingerprint, then refresh the page with Ctrl + R
- Refresh without cache
- Move the window to another screen
- Try in incognito

## Components included in fingerprint
- audio fingerprint
- canvas fingerprint
- webgl fingerprint
- available fonts and how they render
- videocard
- browser languages and time zone
- browser permissions
- available plugins
- a ton of screen details including media queries
- and a bunch of smaller things
# GlobalscaleTracker
