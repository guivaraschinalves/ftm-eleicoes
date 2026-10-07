#!/usr/bin/env python3
"""Confere o bloco `governments` de data/candidates/*.js, que alimenta a seção
"Balanço dos Governos". Para cada citação, checa três coisas:

1. que o trecho está LITERAL na página indicada (compara contra
   .sources-cache/texts/<id>.txt, normalizando acento, aspas e a hifenização
   de fim de linha que a extração do PDF deixa);
2. que ele não repete — nem é pedaço de — nenhuma citação já usada em
   Economia/Temas, pra o mesmo parágrafo não aparecer duas vezes no site;
3. que não está repetido dentro do próprio bloco.

Sai com código 1 se achar qualquer problema, pra poder entrar num hook.

Uso:
    cd ftm-eleicoes
    python3 scripts/check_governments.py
"""
import json, re, subprocess, sys, unicodedata
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
NODE = '''global.window={};
["flavio-bolsonaro","lula"].forEach(id=>eval(require("fs").readFileSync("data/candidates/"+id+".js","utf8")));
const out={};
Object.keys(window.CANDIDATES_DATA).forEach(id=>{const c=window.CANDIDATES_DATA[id];const ex=[];
 Object.values(c.economy||{}).forEach(e=>{(e.diagnosis||[]).forEach(q=>ex.push(q.quote));(e.proposals||[]).forEach(p=>(p.quotes||[]).forEach(q=>ex.push(q.quote)));});
 Object.values(c.themes||{}).forEach(e=>{(e.diagnosis||[]).forEach(q=>ex.push(q.quote));(e.proposals||[]).forEach(p=>(p.quotes||[]).forEach(q=>ex.push(q.quote)));});
 out[id]={gov:c.governments,ex:ex};});
process.stdout.write(JSON.stringify(out));'''
dados = json.loads(subprocess.run(["node","-e",NODE],cwd=ROOT,capture_output=True,text=True,check=True).stdout)
PAGE_RE = re.compile(r"===== PAGE (\d+) =====\n?")
def norm(s):
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    s = re.sub(r"-\s*\n\s*", "", s)
    s = re.sub(r"[\"'“”‘’]", "", s)
    return " ".join(s.split()).lower()
prob = tot = 0
for cid, d in dados.items():
    pp = PAGE_RE.split((ROOT/".sources-cache"/"texts"/f"{cid}.txt").read_text(encoding="utf-8"))
    pags = {int(pp[i]): norm(pp[i+1]) for i in range(1, len(pp), 2)}
    ex = [norm(q) for q in d["ex"]]
    vistos = set()
    for gov, lista in d["gov"].items():
        for q in lista:
            tot += 1
            n = norm(q["quote"])
            lit = n in pags.get(q["page"], "")
            dup = any(n in j or j in n for j in ex)
            repetida = n in vistos
            vistos.add(n)
            if not lit or dup or repetida:
                prob += 1
                print(f"⚠ {cid} p.{q['page']} [{gov}] literal={lit} duplicada_de_outra_secao={dup} repetida_no_bloco={repetida}\n   « {q['quote'][:95]}… »")
    print(f"{cid}: jair-bolsonaro={len(d['gov']['jair-bolsonaro'])}  pt={len(d['gov']['pt'])}")
print(f"\n{tot} citações verificadas, {prob} problema(s)")
sys.exit(1 if prob else 0)
