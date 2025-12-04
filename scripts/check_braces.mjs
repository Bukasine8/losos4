import fs from 'fs';
import path from 'path';
const file = path.resolve(process.cwd(), 'src/components/Header.tsx');
const src = fs.readFileSync(file, 'utf8');
let bal = 0; let line = 1; let errLine = null;
for (let i=0;i<src.length;i++){
  const ch = src[i];
  if(ch==='\n') line++;
  if(ch==='{' ) bal++;
  if(ch==='}' ) { bal--; if(bal<0 && errLine===null) errLine = line; }
}
console.log('balance:', bal, 'firstNegativeLine:', errLine);
