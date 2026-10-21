#!/usr/bin/env node
import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const args = process.argv.slice(2);
function arg(flag) { const i=args.indexOf(flag); return i<0?undefined:args[i+1]; }
const target=arg("--target"), name=arg("--name");
if (!target || !name || !/^[a-z][a-z0-9-]{1,62}$/.test(name)) {
  console.error("Usage: node scripts/scaffold.mjs --target <directory> --name <kebab-case-name>");
  process.exit(2);
}
const root=path.resolve(fileURLToPath(new URL("../templates/react-vite-ts/", import.meta.url)));
const dest=path.resolve(target);
if (dest===path.parse(dest).root || dest===path.resolve(process.cwd()) && !args.includes("--allow-cwd")) {
  console.error("Refusing to target filesystem root or current directory implicitly");
  process.exit(2);
}
const replacements={ "__PROJECT_NAME__":name };
let sourceFiles=[];
async function scan(base,relative="") {
  for (const entry of await readdir(path.join(base,relative),{withFileTypes:true})) {
    if(entry.isSymbolicLink()) throw new Error("Template symlinks are forbidden");
    const rel=path.join(relative,entry.name);
    if(entry.isDirectory()) await scan(base,rel);
    else if(entry.isFile()) sourceFiles.push(rel);
    else throw new Error("Unsupported template entry");
  }
}
await scan(root);
if (!sourceFiles.length) throw new Error("Template is empty");
for(const rel of sourceFiles){
  const targetFile=path.join(dest,rel.replace(/\.template$/,""));
  if(!targetFile.startsWith(dest+path.sep)) throw new Error("Path traversal detected");
  try { await stat(targetFile); throw new Error("Refusing overwrite: "+targetFile); }
  catch(e) { if(e.code!=="ENOENT") throw e; }
}
for(const rel of sourceFiles){
  const from=path.join(root,rel), to=path.join(dest,rel.replace(/\.template$/,""));
  const data=await readFile(from,"utf8");
  await mkdir(path.dirname(to),{recursive:true});
  let output=data;
  for(const [key,value] of Object.entries(replacements)) output=output.replaceAll(key,value);
  await writeFile(to,output,{flag:"wx"});
}
console.log("Created "+sourceFiles.length+" files in "+dest);
console.log("NEXT: write docs/PROJECT.md, docs/ARCHITECTURE.md and docs/QUALITY.md from approved blueprint; install dependencies, generate pnpm-lock.yaml and run actual checks.");
