const symptoms = [
  ['G1','Hidung meler'],['G2','Bersin-bersin'],['G3','Demam serta merasa pengap'],
  ['G4','Batuk keras dengan tarikan napas awal panjang'],['G5','Terdengar seperti mau muntah'],
  ['G6','Mata merah dan berair'],['G7','Wajah merah/biru'],['G8','Kelelahan ekstrem'],
  ['G9','Suara melengking saat menarik napas']
];
const cases = [
  {code:'P01', name:'Pertussis Ringan', vector:[1,1,1,1,0,0,0,0,0]},
  {code:'P02', name:'Pertussis Akut', vector:[0,0,1,1,1,1,0,0,0]},
  {code:'P03', name:'Pertussis Subakut/Kronis', vector:[0,0,0,1,0,0,1,1,1]}
];
const example = [0,0,1,1,1,0,0,1,0];
