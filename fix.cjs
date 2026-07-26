const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf-8');
    content = content.replace(/import\s*{\s*import\s*{\s*SeoMeta\s*}\s*from\s*"..\/components\/seo\/SeoMeta";/g, 'import { SeoMeta } from "../components/seo/SeoMeta";\nimport {');
    fs.writeFileSync(path.join(dir, file), content);
  }
});
