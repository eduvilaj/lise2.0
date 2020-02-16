document.querySelector('#pdf_view').style.display = 'none';
document.querySelector('#playvideo').style.display = 'none';

var konbyen_bon = 0;
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

  let ch = `./ressources/videos/${Niv_.value}_${Mat_.value}_${Les_.value}.mp4`;
  let kk = `<iframe src="${ch}" frameborder="1" frameborder="1" height="90%" width="94%" allowfullscreen></iframe>`;
  document.getElementById('playvideo').innerHTML = kk;
}

let nb_kesyon = 0;
let no_leson = 0;
let kesyon_yo = [];
let kesyon_pabon_yo = [];

/** #######################    suivant   ################ */

function suivant(i) {
  //console.log('=======> ' + i);
  //console.log('=======> ' + kesyon_yo.length);
  if (i <= kesyon_yo.length) {
    afficherLesson(kesyon_yo[i - 1], i);
  } else {
    let mesaj = `<p class="container_"><p class="konbyen_bon_reponse" id="shadow4">${konbyen_bon} bonne(s) reponse(s) sur ${kesyon_yo.length}</p> <hr/><p class="voici">Voici les mauvaises reponses  </p>`;
    let kk = '';
    kesyon_pabon_yo.map(k => {
      kk += `<p class="kesyon_" id="shadow4">${k.Kesyon}</p>  <p class="repons_"> ${k.repons} <p/><hr/>`;
    });
	kk +="</p>"
    mesaj += kk;
    // appel a la methode
    afficherMauvaisesReponses(mesaj);
    //alert(mesaj);
  }
  //console.log(kesyon_yo);
}

/** #######################  Afficher les mauvaises reponses ############## */
/** #######################    Afficher  Leçon  ################ */
function afficherMauvaisesReponses(mesaj) {
  document.getElementById('info').innerHTML = '';
  document.getElementById('info').innerHTML = mesaj;
}

/** #######################    verifier reponse eleve   ################ */
function verifier_reponse(
  kesyon,
  no_kesyon,
  posib_repons,
  vrai_reponse_,
  reponse_eleve_
) {
  if (reponse_eleve_ === vrai_reponse_) {
    konbyen_bon++;
    // alert('Bravo !!!!');
  } else {
    //alert('Mauvaise Reponse');
    let repons_babon = {
      Kesyon: kesyon,
      repons: posib_repons
    };
    kesyon_pabon_yo.push(repons_babon);
  }
  console.log(no_kesyon, nb_kesyon);
  if (Number(no_kesyon) <= Number(nb_kesyon)) {
    // console.log(`Il y a suivant ${Number(no_kesyon) + 1}`);
    suivant(Number(no_kesyon) + 1);
  }
}

/** #######################    Afficher  Leçon  ################ */
function afficherLesson(lesson, i) {
  document.getElementById('info').innerHTML = '';
  let m = `<p class="tit_kesyon">Q${lesson.No_Question} - ${lesson.Question}</p>`;
  let aaa = '  ';
  let gg =
    "<ul class='list-group' style='display:flex; flex-direction:column;'> ";
  lesson.reponses.map(r => {
    gg += `<li class="list-group-item"  onclick="verifier_reponse('${lesson.Question}','${lesson.No_Question}','${r.possible_reponse}','${lesson.Vrai_reponse}','${r.Lettre}');">${r.Lettre} -) ${r.possible_reponse} </li>`;
  });
  gg += `</ul>`;
  m += gg;

  let b = `<p /><p />
  <p style="display:flex; justify-content:center"><button class='btn btn-warning btn-sm z' " onclick="suivant(${lesson.No_Question -
    1});" ${
    i - 1 <= 0 ? 'disabled' : ''
  } > ${' < '} </button><button class='btn btn-warning btn-sm z'  onclick="suivant(${lesson.No_Question +
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
  kesyon_pabon_yo = [];
  kesyon_yo = data.lise2_0.Ns1.L1;
  konbyen_bon = 0;
  afficherLesson(data.lise2_0.Ns1.L1[no_leson]);
}
