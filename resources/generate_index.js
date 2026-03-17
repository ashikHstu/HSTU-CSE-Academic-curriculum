// Node script: generate resources/index.json listing all PDFs under the resources folder
// Usage: node resources/generate_index.js
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..'); // project root
const resourcesDir = path.resolve(__dirname); // this script is in resources/
const outFile = path.join(resourcesDir, 'index.json');

function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let results = [];
    for (const ent of entries) {
        const full = path.join(dir, ent.name);
        if (ent.isDirectory()) {
            results = results.concat(walk(full));
        } else if (ent.isFile() && /\.pdf$/i.test(ent.name)) {
            // compute web-friendly relative path from project root
            const rel = path.relative(projectRoot, full).split(path.sep).join('/');
            results.push({
                name: path.basename(ent.name, path.extname(ent.name)).replace(/[_-]+/g, ' '),
                path: rel
            });
        }
    }
    return results;
}

try {
    const files = walk(resourcesDir);
    const payload = { resources: files.sort((a,b) => a.name.localeCompare(b.name)) };
    fs.writeFileSync(outFile, JSON.stringify(payload, null, 2), 'utf8');
    console.log(`Generated ${outFile} with ${files.length} PDF(s).`);
} catch (err) {
    console.error('Error generating resources index:', err);
    process.exit(1);
}