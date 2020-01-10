document.querySelector('#pdf_view').style.display = 'none';
document.querySelector('#playvideo').style.display = 'none';
//document.getElementById('.info').innerHTML = '';

/** #######################    Afficher  un document pdf   ################ */
function Afficher() {
  document.getElementById('info').innerHTML = '';

  document.querySelector('#pdf_view').style.display = 'block';
  document.querySelector('#playvideo').style.display = 'none';

  let Niv_ = document.getElementById('Niveau');
  let Mat_ = document.getElementById('Matiere');
  let Les_ = document.getElementById('Lesson');
  let info_ = document.getElementById('info');

  let ch_ = `ressources/${Niv_.value}_${Mat_.value}_${Les_.value}.pdf`;
  let kk = `<iframe src = "./ViewerJS/#../${ch_}" width='100%' height='120%' scrolling="auto" allowfullscreen webkitallowfullscreen></iframe>`;
  // let kk = `<iframe id="fred" style="border:1px solid #666CCC" title="PDF in an i-Frame" src="${ch_}" frameborder="1" scrolling="auto" allowfullscreen height="140%" width="100%" ></iframe>`;
  document.getElementById('pdf_view').innerHTML = kk;
}

/** #######################    Afficher  video   ################ */
function VoirVideo() {
  document.getElementById('info').innerHTML = '';

  document.querySelector('#pdf_view').style.display = 'none';
  document.querySelector('#playvideo').style.display = 'block';

  let Niv_ = document.getElementById('Niveau');
  let Mat_ = document.getElementById('Matiere');
  let Les_ = document.getElementById('Lesson');

  let ch = `ressources/videos/${Niv_.value}_${Mat_.value}_${Les_.value}.mp4`;
  let kk = `<iframe src="${ch}" frameborder="1" frameborder="1" height="90%" width="94%" allowfullscreen></iframe>`;
  document.getElementById('playvideo').innerHTML = kk;
}

let nb_kesyon = 0;
let no_leson = 0;
let kesyon_yo = [];

/** #######################    suivant   ################ */

function suivant(i) {
  afficherLesson(kesyon_yo[i - 1], i);
  console.log(kesyon_yo);
}
/** #######################    verifier reponse eleve   ################ */
function verifier_reponse(vrai_reponse_, reponse_eleve_) {
  if (reponse_eleve_ === vrai_reponse_) {
    alert('Bravo !!!!');
  } else {
    alert('Mauvaise Reponse');
  }
}

/** #######################    Afficher  Leçon  ################ */
function afficherLesson(lesson, i) {
  document.getElementById('info').innerHTML = '';
  let m = `<p style='font-weight:bold'>Q${lesson.No_Question} - ${lesson.Question}</p>`;
  let aaa = '  ';
  let gg = "<ul class='list-group'> ";
  lesson.reponses.map(r => {
    gg += `<li class="list-group-item"  onclick="verifier_reponse('${lesson.Vrai_reponse}','${r.Lettre}');">${r.Lettre} -) ${r.possible_reponse} </li>`;
  });
  gg += `</ul>`;
  m += gg;

  let b = `<p /><p /><p style="display:flex; justify-content:center"><button class='btn btn-warning btn-sm' " onclick="suivant(${lesson.No_Question -
    1});" ${
    i - 1 <= 0 ? 'disabled' : ''
  } > ${' < '} </button>&nbsp;&nbsp;<button class='btn btn-warning btn-sm'  onclick="suivant(${lesson.No_Question +
    1});" ${i >= nb_kesyon ? 'disabled' : ''}> ${' > '} </button> </p>`;

  m += b;
  document.getElementById('info').innerHTML = m;
}

/** #######################  Lire Json File   ################ */
async function LireJson() {
  document.querySelector('#pdf_view').style.display = 'none';
  document.querySelector('#playvideo').style.display = 'none';

  let gg = data.lise2_0.Ns1.pwogram;

  let konbyenKesyon = data.lise2_0.Ns1.L1.length;
  nb_kesyon = konbyenKesyon;
  no_leson = 0;
  kesyon_yo = data.lise2_0.Ns1.L1;

  afficherLesson(data.lise2_0.Ns1.L1[no_leson]);
}
