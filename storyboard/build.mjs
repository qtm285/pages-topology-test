// Builds index.html from storyboard.md. The markdown is the source; this only
// renders it. Run: node storyboard/build.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { marked } = require('/Users/skip/work/tlda/node_modules/marked')

const HERE = dirname(fileURLToPath(import.meta.url))

// Working notes live in the source and never in the artifact. Markdown passes
// HTML comments straight through, so a `<!-- not captured yet -->` note would
// ship inside the published page — invisible to a reader, readable by anyone
// who views source. Strip them here rather than relying on remembering to.
const source = readFileSync(join(HERE, 'storyboard.md'), 'utf8').replace(/<!--[\s\S]*?-->/g, '')
const body = marked.parse(source)

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The teaching loop</title>
<style>
  :root {
    --ink: #17171a; --dim: #5d5d68; --rule: #e0e0e4;
    --bg: #fbfbfa; --panel: #f3f3f1; --accent: #7a5c2e;
  }
  @media (prefers-color-scheme: dark) {
    :root { --ink:#e8e8ea; --dim:#a0a0aa; --rule:#33333a; --bg:#141416; --panel:#1d1d21; --accent:#d3b177; }
  }
  :root[data-theme="dark"] { --ink:#e8e8ea; --dim:#a0a0aa; --rule:#33333a; --bg:#141416; --panel:#1d1d21; --accent:#d3b177; }
  :root[data-theme="light"] { --ink:#17171a; --dim:#5d5d68; --rule:#e0e0e4; --bg:#fbfbfa; --panel:#f3f3f1; --accent:#7a5c2e; }

  html { box-sizing: border-box; }
  *, *::before, *::after { box-sizing: inherit; }
  body {
    margin: 0; background: var(--bg); color: var(--ink);
    font: 17px/1.62 "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
    -webkit-text-size-adjust: 100%;
  }
  main { max-width: 46rem; margin: 0 auto; padding: 4rem 1.25rem 6rem; }

  h1 {
    font-size: 2.1rem; line-height: 1.15; margin: 0 0 1.2rem;
    letter-spacing: -0.015em; font-weight: 600;
  }
  h2 {
    font-size: 1.16rem; margin: 3.6rem 0 1rem; font-weight: 600;
    letter-spacing: -0.005em; padding-top: 1.7rem; border-top: 1px solid var(--rule);
  }
  main > hr { display: none; }
  p { margin: 0 0 1.05rem; }
  strong { font-weight: 600; }
  em { font-style: italic; }

  /* The beat fields — "On screen.", "What changes." — read as labels. */
  p > strong:first-child { color: var(--accent); }

  pre {
    background: var(--panel); border: 1px solid var(--rule); border-radius: 6px;
    padding: 0.85rem 1rem; overflow-x: auto; margin: 0 0 1.15rem;
    font: 13.5px/1.6 ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
    color: var(--ink);
  }
  code { font: 0.88em/1.5 ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace; }
  p code, li code { background: var(--panel); padding: 0.1em 0.34em; border-radius: 3px; }
  pre code { background: none; padding: 0; }

  img {
    display: block; max-width: 100%; height: auto; margin: 1.5rem 0;
    border: 1px solid var(--rule); border-radius: 6px;
  }
  ul { margin: 0 0 1.05rem; padding-left: 1.2rem; }
  li { margin: 0.2rem 0; }
  a { color: var(--accent); }
</style>
</head>
<body>
<main>
${body}
</main>
</body>
</html>
`

writeFileSync(join(HERE, 'index.html'), html)
console.log('wrote', join(HERE, 'index.html'), html.length, 'bytes')
