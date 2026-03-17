// Node watcher: auto-generate resources/index.json when PDFs change
// Usage: node resources/watch_generate_index.js
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const resourcesDir = path.resolve(__dirname);
const outFile = path.join(resourcesDir, 'index.json');
let timer = null;
const DEBOUNCE_MS = 250;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      results = results.concat(walk(full));
    } else if (ent.isFile() && /\.pdf$/i.test(ent.name)) {
      const rel = path.relative(projectRoot, full).split(path.sep).join('/');
      results.push({
        name: path.basename(ent.name, path.extname(ent.name)).replace(/[_-]+/g, ' '),
        path: rel
      });
    }
  }
  return results;
}

function generateIndex() {
  try {
    const files = walk(resourcesDir);
    const payload = { resources: files.sort((a,b) => a.name.localeCompare(b.name)) };
    fs.writeFileSync(outFile, JSON.stringify(payload, null, 2), 'utf8');
    console.log(new Date().toLocaleTimeString(), `Generated ${outFile} (${files.length} PDF(s))`);
  } catch (err) {
    console.error('Error generating resources index:', err);
  }
}

// Initial generation
generateIndex();

// Watch for changes (works on Windows, macOS, Linux). Use recursive where supported.
try {
  const watcher = fs.watch(resourcesDir, { recursive: true }, (eventType, filename) => {
    // debounce rapid sequences of events
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(new Date().toLocaleTimeString(), 'Change detected:', eventType, filename || '');
      generateIndex();
    }, DEBOUNCE_MS);
  });

  console.log('Watching', resourcesDir, 'for PDF additions/removals. Press Ctrl+C to stop.');
  watcher.on('error', err => {
    console.error('Watcher error:', err);
  });
} catch (err) {
  console.error('Failed to start watcher:', err);
  process.exit(1);
}