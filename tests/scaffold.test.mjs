import test from "node:test";
import assert from "node:assert/strict";
import {mkdtemp,mkdir,readFile,writeFile,rm,access} from "node:fs/promises";
import {tmpdir} from "node:os";
import {join,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {spawnSync} from "node:child_process";

const script=fileURLToPath(new URL("../scripts/scaffold.mjs",import.meta.url));
function run(target,name="demo-app"){return spawnSync(process.execPath,[script,"--target",target,"--name",name],{encoding:"utf8"});}

test("creates a complete project and interpolates name",async()=>{
  const dir=await mkdtemp(join(tmpdir(),"forge-test-"));
  const target=join(dir,"demo");
  try{
    const p=run(target);
    assert.equal(p.status,0,p.stderr);
    assert.equal(JSON.parse(await readFile(join(target,"package.json"),"utf8")).name,"demo-app");
    await access(join(target,"tests/e2e/smoke.spec.ts"));
    await access(join(target,"AGENTS.md"));
    await access(join(target,"CLAUDE.md"));
    await access(join(target,".github/workflows/verify.yml"));
  }finally{await rm(dir,{recursive:true,force:true});}
});

test("refuses to overwrite existing project file",async()=>{
  const dir=await mkdtemp(join(tmpdir(),"forge-test-"));
  const target=join(dir,"demo");
  try{
    await mkdir(target,{recursive:true});
    await writeFile(join(target,"package.json"),"sentinel");
    const p=run(target);
    assert.notEqual(p.status,0);
    assert.equal(await readFile(join(target,"package.json"),"utf8"),"sentinel");
  }finally{await rm(dir,{recursive:true,force:true});}
});

test("rejects invalid package names",async()=>{
  const dir=await mkdtemp(join(tmpdir(),"forge-test-"));
  try{
    const p=run(join(dir,"demo"),"../../oops");
    assert.notEqual(p.status,0);
  }finally{await rm(dir,{recursive:true,force:true});}
});
