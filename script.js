const symptomBox=document.querySelector('#symptoms');
symptoms.forEach(([code,name],i)=>{symptomBox.insertAdjacentHTML('beforeend',`<div class="symptom"><input type="checkbox" id="${code}" data-i="${i}"><label for="${code}"><span class="code">${code}</span><span>${name}</span></label></div>`)});
const checks=()=>[...document.querySelectorAll('.symptom input')];
function vector(){return checks().map(x=>x.checked?1:0)}
function update(){document.querySelector('#selected').textContent=`${vector().reduce((a,b)=>a+b,0)} / 9 dipilih`}
checks().forEach(x=>x.addEventListener('change',update));
function cosine(a,b){const dot=a.reduce((s,x,i)=>s+x*b[i],0),na=Math.sqrt(a.reduce((s,x)=>s+x*x,0)),nb=Math.sqrt(b.reduce((s,x)=>s+x*x,0));return {dot,na,nb,value:na&&nb?dot/(na*nb):0}}
document.querySelector('#example').onclick=()=>{checks().forEach((x,i)=>x.checked=!!example[i]);update()};
document.querySelector('#reset').onclick=()=>{checks().forEach(x=>x.checked=false);update();document.querySelector('#result').hidden=true};
document.querySelector('#form').onsubmit=e=>{e.preventDefault();const v=vector();if(!v.some(Boolean)){alert('Pilih minimal satu gejala terlebih dahulu.');return}const scored=cases.map(c=>({...c,...cosine(v,c.vector)})).sort((a,b)=>b.value-a.value);const best=scored[0],r=document.querySelector('#result');r.innerHTML=`<div class="result-top"><div><span class="tiny">HASIL PERBANDINGAN</span><h3>${best.code} · ${best.name}</h3><small>Vektor kasus baru: ${v.join(' ')}</small></div><div class="big-score">${(best.value*100).toFixed(0)}%</div></div><div class="rankings">${scored.map((x,i)=>`<div class="rank"><span>#${i+1} · ${x.code}</span><b>${(x.value*100).toFixed(2).replace('.00','')}%</b><small>${x.name}</small></div>`).join('')}</div><div class="calc">${scored.map(x=>`${x.code}: (${x.dot}) / (${x.na.toFixed(2)} × ${x.nb.toFixed(2)}) = ${(x.value*100).toFixed(2)}%`).join('<br>')}</div>`;r.hidden=false;r.scrollIntoView({behavior:'smooth',block:'center'})};
const cards=document.querySelector('#caseCards');cases.forEach(c=>{const active=c.vector.map((x,i)=>x?symptoms[i][0]:null).filter(Boolean);cards.insertAdjacentHTML('beforeend',`<article class="case-card"><span class="case-code">${c.code}</span><h3>${c.name}</h3><div class="chips">${active.map(x=>`<span>${x}</span>`).join('')}</div></article>`)});
document.querySelector('#thead').innerHTML='<tr><th>Kasus</th>'+symptoms.map(x=>`<th>${x[0]}</th>`).join('')+'</tr>';
document.querySelector('#tbody').innerHTML=cases.map(c=>`<tr><td><b>${c.code}</b></td>${c.vector.map(x=>`<td class="${x?'one':''}">${x}</td>`).join('')}</tr>`).join('');
document.querySelector('#year').textContent=new Date().getFullYear();
