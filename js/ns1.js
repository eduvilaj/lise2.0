function Afficher() {
  //1 - recuperer les valeurs selectionnees dans les 3 champs

  var Niv_ = 'Ns1';
  var Mat_ = document.getElementById('Matiere');
  var Les_ = document.getElementById('Lesson');
  var info_ = document.getElementById('info');

  //var ch_ = Niv_.value + '_' + Mat_.value + '_' + Les_.value + '.pdf';
  var ch_ = Niv_ + '_' + Mat_.value + '_' + Les_.value + '.pdf';
  //info_.innerHTML="Tu viens de selectionner le fichier :"+ch_;
  // alert("Tu viens de selectionner le fichier "+ch_);
  console.log(ch_);
  PDFObject.embed('ressources/' + ch_, '#pdf_view');
}
