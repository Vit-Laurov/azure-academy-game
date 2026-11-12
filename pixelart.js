// pixelart.js — v16
// Pixel sprites drawn in code. Each sprite is a list of text rows; every character is one pixel,
// '.' is transparent, other characters map to a colour in the palette. pxSvg() turns it into crisp SVG.
const PX_PAL={
  K:'#000000', // outline
  N:'#1d2b53', // navy
  B:'#29adff', // blue
  b:'#1d6fb0', // dark blue
  L:'#c2f0ff', // light blue
  W:'#fff1e8', // white
  Y:'#ffec27', // yellow
  O:'#ffa300', // orange
  R:'#ff004d', // red
  r:'#7e2553', // plum
  G:'#00e436', // green
  g:'#008751', // dark green
  S:'#ffccaa', // skin
  s:'#ab5236', // brown
  P:'#83769c', // grey-purple
  p:'#5f574f', // dark grey
  C:'#c2c3c7', // light grey
  c:'currentColor'
};

function pxSvg(rows,size,extraClass){
  let h=rows.length,w=rows[0].length,rects='';
  for(let y=0;y<h;y++){
    let x=0;
    while(x<w){
      let ch=rows[y][x];
      if(ch==='.'||!PX_PAL[ch]){x++;continue}
      let run=1;
      while(x+run<w&&rows[y][x+run]===ch)run++;
      rects+=`<rect x="${x}" y="${y}" width="${run}" height="1" fill="${PX_PAL[ch]}"/>`;
      x+=run;
    }
  }
  let width=size,height=Math.round(size*h/w);
  return `<svg class="px ${extraClass||''}" width="${width}" height="${height}" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges" aria-hidden="true" focusable="false">${rects}</svg>`;
}

const SPRITES={
  hero:[
    "...BBBBBB...",
    "..BBBBBBBB..",
    "...SSSSSS...",
    "...SKSSKS...",
    "...SSSSSS...",
    "....SSSS....",
    "..RRRRRRRR..",
    ".SRRRYYRRRS.",
    ".SRRRRRRRRS.",
    "...RRRRRR...",
    "...pp..pp...",
    "...pp..pp..."
  ],
  shard:[
    "...LL...",
    "..BLBB..",
    ".BLBBBB.",
    ".BBBBBB.",
    "..bBBb..",
    "..bbbb..",
    "...bb...",
    "........"
  ],
  flame:[
    "...O....",
    "...OO.R.",
    "..OOO.R.",
    "..OYOORR",
    ".ROYYORR",
    ".RRYYRRR",
    ".RRRRRR.",
    "..RRRR.."
  ],
  check:[
    "......c",
    ".....cc",
    "c...cc.",
    "cc.cc..",
    ".ccc...",
    "..c...."
  ],
  cross:[
    "c....c",
    "cc..cc",
    ".cccc.",
    ".cccc.",
    "cc..cc",
    "c....c"
  ],
  chest:[
    "..ssssss..",
    ".sOOOOOOs.",
    "sOOOOOOOOs",
    "ssssYYssss",
    "sOOOYYOOOs",
    "sOOOOOOOOs",
    "sOOOOOOOOs",
    "ssssssssss"
  ],
  golem:[
    "..O.O..O.O..",
    "..OOOOOOOO..",
    "..rrrrrrrr..",
    ".rrRRrrRRrr.",
    ".rrRRrrRRrr.",
    ".rrrrrrrrrr.",
    ".rrKKKKKKrr.",
    "..rrrrrrrr..",
    "..rr....rr..",
    ".rrr....rrr."
  ],
  guide:[
    "..B.........",
    ".BB..BBBB...",
    "....BBBBBB..",
    "...BLBBBBBB.",
    "..BBLBBBBBBB",
    "..BBKBBBKBBB",
    "..BBKBBBKBBB",
    "..BBBBBBBBBB",
    "..BBBKKKBBBB",
    "...BBBBBBBB.",
    "....BBBBBB..",
    "............"
  ],
  back:[
    "...c",
    "..cc",
    ".ccc",
    "cccc",
    ".ccc",
    "..cc",
    "...c"
  ],
  play:[
    "c...",
    "cc..",
    "ccc.",
    "cccc",
    "ccc.",
    "cc..",
    "c..."
  ],
  lock:[
    "..cccc..",
    ".c....c.",
    ".c....c.",
    "cccccccc",
    "ccc..ccc",
    "ccc..ccc",
    "cccccccc",
    "........"
  ],
  heart:[
    ".RR.RR.",
    "RRRRRRR",
    "RWRRRRR",
    ".RRRRR.",
    "..RRR..",
    "...R..."
  ],
  // bottom-nav icons (monochrome, follow the text colour)
  navQuest:[
    "ccccccccc",
    "c.......c",
    "c.ccccc.c",
    "c.......c",
    "c.cccc..c",
    "c.......c",
    "c.ccccc.c",
    "c.......c",
    "ccccccccc"
  ],
  navLearn:[
    ".........",
    "cccc.cccc",
    "c..c.c..c",
    "c.cc.cc.c",
    "c..c.c..c",
    "c.cc.cc.c",
    "c..c.c..c",
    "cccc.cccc",
    "....c...."
  ],
  navLoot:[
    ".ccccccc.",
    "c.......c",
    "c.......c",
    "ccccccccc",
    "c...c...c",
    "c..ccc..c",
    "c.......c",
    "ccccccccc",
    "........."
  ],
  navExam:[
    "..ccccc..",
    ".c.....c.",
    "ccccccccc",
    "c.......c",
    "c.c...c.c",
    "c..c.c..c",
    "c...c...c",
    "c.......c",
    "ccccccccc"
  ],
  navMore:[
    ".........",
    "ccccccccc",
    "ccccccccc",
    ".........",
    "ccccccccc",
    "ccccccccc",
    ".........",
    "ccccccccc",
    "ccccccccc"
  ]
};

function sprite(name,size,cls){return pxSvg(SPRITES[name],size,cls)}

SPRITES.tree=[
  "...gg...",
  "..gGGg..",
  ".gGGGGg.",
  "gGGgGGGg",
  ".gGGGGg.",
  "..gGGg..",
  "...ss...",
  "...ss..."
];
SPRITES.rock=[
  "........",
  "...pp...",
  "..pCCp..",
  ".pCCpPp.",
  ".pPPPPp.",
  "pppppppp",
  "........",
  "........"
];

SPRITES.blob=[
  "..c.........",
  ".cc..cccc...",
  "....cccccc..",
  "...cWccccccc",
  "..ccWccccccc",
  "..ccKcccKccc",
  "..ccKcccKccc",
  "..cccccccccc",
  "..cccKKKcccc",
  "...cccccccc.",
  "....cccccc..",
  "............"
];

// ---- v16b: reward + boss sprites ----
SPRITES.crateL=[
  "KKKKKKKKKK","KNNNNNNNNN","KNBBBBBBBB","KNBLLBBBBB","KNBBBBBBBK","KNNNNNNNNK",
  "KbbbbbbbbK","KbBBbbbbbK","KbBBbbbbbK","KbbbbbbbbK","KbbGbGbbbK","KbbbbbbbbK","KNNNNNNNNK","KKKKKKKKKK"
];
SPRITES.crateR=[
  "KKKKKKKKKK","NNNNNNNNNK","BBBBBBBBNK","BBBBBBBBNK","KBBBBBBBNK","KNNNNNNNNK",
  "KbbbbbbbbK","KbbbbbBBbK","KbbbbbBBbK","KbbbbbbbbK","KbbbbbbbbK","KbbbbbbbbK","KNNNNNNNNK","KKKKKKKKKK"
];
SPRITES.golemBig=[
  "...O..O..O..O...",
  "...OOOOOOOOOO...",
  "...KKKKKKKKKK...",
  "..KrrrrrrrrrrK..",
  ".KrrRRrrrrRRrrK.",
  ".KrrRRrrrrRRrrK.",
  ".KrrrrrrrrrrrrK.",
  ".KrrKKKKKKKKrrK.",
  "KKrrrKYKKYKrrrKK",
  "KrrKrrrrrrrrKrrK",
  "KrrKrrOOOOrrKrrK",
  "KKKKrrOYYOrrKKKK",
  "...KrrOOOOrrK...",
  "...KrrrrrrrrK...",
  "...KrrK..KrrK...",
  "..KKKKK..KKKKK.."
];
SPRITES.heroSword=[
  "...BBBBBB...",
  "..BBBBBBBB..",
  "...SSSSSS...",
  "...SKSSKS...",
  "...SSSSSS...",
  "....SSSS..C.",
  "..RRRRRRRRC.",
  ".SRRRYYRRRC.",
  ".SRRRRRRRRS.",
  "...RRRRRR...",
  "...pp..pp...",
  "...pp..pp..."
];
SPRITES.slash=[
  "..........WW",
  "........WWW.",
  "......WWW...",
  "....WWW.....",
  "..WWW.......",
  "WWW........."
];
SPRITES.heartEmpty=[
  ".pp.pp.",
  "ppppppp",
  "ppppppp",
  ".ppppp.",
  "..ppp..",
  "...p..."
];
SPRITES.spark=[
  "..W..",
  "..Y..",
  "WYYYW",
  "..Y..",
  "..W.."
];
