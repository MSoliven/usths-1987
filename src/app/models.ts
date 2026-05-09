export interface Officer {
  role: string;
  name: string;
  shortName: string;
}

export interface Student {
  name: string;
  image: string;
}

export interface OtherPhoto {
  title: string;
  image: string;
}

export interface SectionData {
  id: string;
  title: string;
  adviser: {
    name: string;
    image: string;
  };
  cover: {
    classPhoto: string;
  };
  officers: Officer[];
  students: Student[];
  other: OtherPhoto[];
}

export const sections: SectionData[] = [
  {
    id: '421G',
    title: '421-G',
    adviser: { name: 'Mrs. Norina Gapasin', image: 'adviser.jpg' },
    cover: { classPhoto: 'class-photo.jpg' },
    officers: [
      { role: 'President', name: 'Angie M. Arguna', shortName: 'Angie Arguna' },
      { role: 'Vice-President', name: 'Ma. Cecilia A. Nalagan', shortName: 'Cecilia Nalagan' },
      { role: 'Secretary', name: 'Marie Charlyn O. Exaltado', shortName: 'Marie Charlyn Exaltado' },
      { role: 'Treasurer', name: 'Vivian S. De Guzman', shortName: 'Vivian De Guzman' },
      { role: 'P.R.O.', name: 'Gladys R. Guitan', shortName: 'Gladys Guitan' },
      { role: 'Sgt. at Arms', name: 'Heidi S. Palaca', shortName: 'Heidi Palaca' }
    ],
    students: [
      { name: 'Grace Ann O. Alano', image: 'students/grace-alano.jpg' },
      { name: 'Noemi Ruth G. Aldez', image: 'students/noemi-aldez.jpg' },
      { name: 'Andrea Gladys Paz P. Aquino', image: 'students/andrea-aquino.jpg' },
      { name: 'Angie M. Arguna', image: 'students/angie-arguna.jpg' },
      { name: 'Leilani D. Aspeli', image: 'students/leilani-aspeli.jpg' },
      { name: 'Myrna F. Atienza', image: 'students/myrna-atienza.jpg' },
      { name: 'Elayda Clara Marie T. Beltran', image: 'students/elayda-beltran.jpg' },
      { name: 'Florence F. Buerano', image: 'students/florence-buerano.jpg' },
      { name: 'Carmela O. Castro', image: 'students/carmela-castro.jpg' },
      { name: 'Shirin Marie N. Elio', image: 'students/shirin-elio.jpg' },
      { name: 'Ma. Teresita M. Esguerra', image: 'students/teresita-esguerra.jpg' },
      { name: 'Cecile N. Espocia', image: 'students/cecile-espocia.jpg' },
      { name: 'Marie Charlyn O. Exaltado', image: 'students/marie-exaltado.jpg' },
      { name: 'Ressie R. Framil', image: 'students/ressie-framil.jpg' },
      { name: 'Vilma T. Gatchalian', image: 'students/vilma-gatchalian.jpg' },
      { name: 'Gladys R. Guitan', image: 'students/gladys-guitan.jpg' },
      { name: 'Vivian S. De Guzman', image: 'students/vivian-deguzman.jpg' },
      { name: 'Ma. Larissa M. Halili', image: 'students/larissa-halili.jpg' },
      { name: 'Ma. Cecilia V. Interior', image: 'students/cecilia-interior.jpg' },
      { name: 'Ma. Rosario I. Jimenez', image: 'students/rosario-jimenez.jpg' },
      { name: 'Katherine T. Justiniano', image: 'students/katherine-justiniano.jpg' },
      { name: 'Jolianne Q. Lan', image: 'students/jolianne-lan.jpg' },
      { name: 'Candice Twinkle S. Laureta', image: 'students/candice-laureta.jpg' },
      { name: 'Josephine P. Linsangan', image: 'students/josephine-linsangan.jpg' },
      { name: 'Ma. Viviane P. Magno', image: 'students/viviane-magno.jpg' },
      { name: 'Noemi B. Misicampo Jra.', image: 'students/noemi-misicampo.jpg' },
      { name: 'Regina Ma. Auxiliadora Mendigoria', image: 'students/regina-mendigoria.jpg' },
      { name: 'Naomi G. Milay', image: 'students/naomi-milay.jpg' },
      { name: 'Ma. Cecilia A. Nalagan', image: 'students/cecilia-nalagan.jpg' },
      { name: 'Ezelyn L. Navarro', image: 'students/ezelyn-navarro.jpg' },
      { name: 'Rosalinda G. Ong', image: 'students/rosalinda-ong.jpg' },
      { name: 'Ma. Alicia F. Paggabao', image: 'students/alicia-paggabao.jpg' },
      { name: 'Heidi S. Palaca', image: 'students/heidi-palaca.jpg' },
      { name: 'Connie H. Paris', image: 'students/connie-paris.jpg' },
      { name: 'Rowena V. Perez', image: 'students/rowena-perez.jpg' },
      { name: 'Mary Ann M. Quilala', image: 'students/maryann-quilala.jpg' },
      { name: 'Ma. Pacita B. Rivera', image: 'students/pacita-rivera.jpg' },
      { name: 'Nancy Grace A. Robles', image: 'students/nancy-robles.jpg' },
      { name: 'Violeta A. San Juan', image: 'students/violeta-sanjuan.jpg' },
      { name: 'Ma. Cristina F. Santos', image: 'students/cristina-santos.jpg' },
      { name: 'Aimee B. Sarmiento', image: 'students/aimee-sarmiento.jpg' },
      { name: 'Ma. Cecilia M. Soller', image: 'students/cecilia-soller.jpg' },
      { name: 'Kathrina V. Suarez', image: 'students/kathrina-suarez.jpg' },
      { name: 'Mitus L. Sumcad', image: 'students/mitus-sumcad.jpg' },
      { name: 'Ma. Virginia G. Tigno', image: 'students/virginia-tigno.jpg' },
      { name: 'Shirley G. Tismo', image: 'students/shirley-tismo.jpg' },
      { name: 'Rachel M. Tolosa', image: 'students/rachel-tolosa.jpg' },
      { name: 'Purificacion N. Tongol', image: 'students/purificacion-tongol.jpg' },
      { name: 'Veronica C. Umali', image: 'students/veronica-umali.jpg' },
      { name: 'Marites B. Uy', image: 'students/marites-uy.jpg' },
      { name: 'Mariechit Gloria S. De Vera', image: 'students/mariechit-devera.jpg' },
      { name: 'Marilou S. De Vera', image: 'students/marilou-devera.jpg' },
      { name: 'Shirley C. Yu', image: 'students/shirley-yu.jpg' }
    ],
    other: [
      { title: 'Mga pa-cute', image: 'other/classroom.jpg' },
    ]
  },
  {
    id: '421B',
    title: '421-B',
    adviser: { name: 'Mrs. Cipriana V. Yu', image: 'adviser.jpg' },
    cover: { classPhoto: 'class-photo.jpg' },
    officers: [
      { role: 'President', name: 'John Ulysses D. Abu', shortName: 'John Abu' },
      { role: 'Vice-President', name: 'Lyndon B. Denia', shortName: 'Lyndon Denia' },
      { role: 'Secretary', name: 'Ferdinand C. Bundang', shortName: 'Ferdinand Bundang' },
      { role: 'Treasurer', name: 'Augusto B. Cruz Jr.', shortName: 'Augusto Cruz Jr.' },
      { role: 'P.R.O.', name: 'Reynaldo C. Idano', shortName: 'Reynaldo Idano' },
      { role: 'Sgt. at Arms', name: 'Neil C. Tan', shortName: 'Neil Tan' }
    ],
    students: [
      { name: 'John Ulysses D. Abu', image: 'students/john-abu.jpg' },
      { name: 'Edgardo A. Agbada', image: 'students/edgardo-agbada.jpg' },
      { name: 'Jose Ma. G. Alarilla', image: 'students/jose-alarilla.jpg' },
      { name: 'Enrique G. Armentia', image: 'students/enrique-armentia.jpg' },
      { name: 'William A. Asuncion Jr.', image: 'students/william-asuncion.jpg' },
      { name: 'Raymond P. Azul', image: 'students/raymond-azul.jpg' },
      { name: 'Robert B. Belleza', image: 'students/robert-belleza.jpg' },
      { name: 'Gary Stephen S. Briones', image: 'students/gary-briones.jpg' },
      { name: 'Ruben F. Bukas Jr.', image: 'students/ruben-bukas.jpg' },
      { name: 'Ferdinand C. Bundang', image: 'students/ferdinand-bundang.jpg' },
      { name: 'Reynaldo C. Caladiao', image: 'students/reynaldo-caladiao.jpg' },
      { name: 'Ariel C. de Castro', image: 'students/ariel-decastro.jpg' },
      { name: 'Kenneth Lee G. de Castro', image: 'students/kenneth-decastro.jpg' },
      { name: 'Jeremy C. Chu', image: 'students/jeremy-chu.jpg' },
      { name: 'Renante C. Cortez', image: 'students/renante-cortez.jpg' },
      { name: 'Hector P. Crisostomo VI', image: 'students/hector-crisostomo.jpg' },
      { name: 'Augusto B. Cruz Jr.', image: 'students/augusto-cruz.jpg' },
      { name: 'Jesus Romano S. Datu', image: 'students/jesus-datu.jpg' },
      { name: 'Lyndon B. Denia', image: 'students/lyndon-denia.jpg' },
      { name: 'Ronald Reagan S. Domingo', image: 'students/ronald-domingo.jpg' },
      { name: 'John Kerwin G. Du', image: 'students/john-du.jpg' },
      { name: 'Henry D. Dumaoal', image: 'students/henry-dumaoal.jpg' },
      { name: 'Jericho G. Estrella', image: 'students/jericho-estrella.jpg' },
      { name: 'Dennis B. Hatoc', image: 'students/dennis-hatoc.jpg' },
      { name: 'Enrique R. Hipolito', image: 'students/enrique-hipolito.jpg' },
      { name: 'Reynaldo C. Idano', image: 'students/reynaldo-idano.jpg' },
      { name: 'Jonathan C. Javier', image: 'students/jonathan-javier.jpg' },
      { name: 'Ronald C. Jimenez', image: 'students/ronald-jimenez.jpg' },
      { name: 'Amor P. Lauro', image: 'students/amor-lauro.jpg' },
      { name: 'Paul Anthony P. Mandal', image: 'students/paul-mandal.jpg' },
      { name: 'Peter P. Mandal', image: 'students/peter-mandal.jpg' },
      { name: 'Ronaldo O. Marano', image: 'students/ronaldo-marano.jpg' },
      { name: 'John Paul T. Marbella', image: 'students/john-marbella.jpg' },
      { name: 'Ace Sterling R. Medina', image: 'students/ace-medina.jpg' },
      { name: 'Michael Conrad D. Mendoza', image: 'students/michael-mendoza.jpg' },
      { name: 'Julius Pichito T. Minas', image: 'students/julius-minas.jpg' },
      { name: 'Stephen Thomas S. Misa', image: 'students/stephen-misa.jpg' },
      { name: 'Renato K. Mitra Jr.', image: 'students/renato-mitra.jpg' },
      { name: 'Raymond I. Nano', image: 'students/raymond-nano.jpg' },
      { name: 'Jesus O. Ocasla', image: 'students/jesus-ocasla.jpg' },
      { name: 'Earl R. Perez', image: 'students/earl-perez.jpg' },
      { name: 'Maximino S. Picio III', image: 'students/maximino-picio.jpg' },
      { name: 'James S. Plaza', image: 'students/james-plaza.jpg' },
      { name: 'Rudyard Michael A. Ranjo', image: 'students/rudyard-ranjo.jpg' },
      { name: 'Gilbert G. Robles', image: 'students/gilbert-robles.jpg' },
      { name: 'Marianito R. Rodrigo', image: 'students/marianito-rodrigo.jpg' },
      { name: 'Dennis J. Rotairo', image: 'students/dennis-rotairo.jpg' },
      { name: 'Melanio G. Rubio Jr.', image: 'students/melanio-rubio.jpg' },
      { name: 'Neil C. Tan', image: 'students/neil-tan.jpg' },
      { name: 'Arnold B. Teodoro', image: 'students/arnold-teodoro.jpg' },
      { name: 'Randy G. Venezuela', image: 'students/randy-venezuela.jpg' },
      { name: 'Anthony Allan D. Villanueva', image: 'students/anthony-villanueva.jpg' },
      { name: 'Carlos C. Villarias Jr.', image: 'students/carlos-villarias.jpg' }
    ],
    other: [
      { title: 'Nerd paradise', image: 'other/classroom.jpg' }
    ]
  },
  {
    id: '422B',
    title: '422-B',
    adviser: { name: 'Ms. Teresita Y. Santos', image: 'adviser.jpg' },
    cover: { classPhoto: 'class-photo.jpg' },
    officers: [
      { role: 'President', name: 'Garrick Van V. Alumisin', shortName: 'Garrick Alumisin' },
      { role: 'Vice-President', name: 'Robert S. Jusay', shortName: 'Robert Jusay' },
      { role: 'Secretary', name: 'Gavini C. Pancho', shortName: 'Gavini Pancho' },
      { role: 'Treasurer', name: 'Roberto I. Belda', shortName: 'Roberto Belda' },
      { role: 'P.R.O.', name: 'Neil John V. Briones', shortName: 'Neil Briones' },
      { role: 'Sgt. at Arms', name: 'Cesar V. Dalde Jr.', shortName: 'Cesar Dalde' }
    ],
    students: [
      { name: 'Geoffrey F. Abello', image: 'students/geoffrey-abello.jpg' },
      { name: 'Marcelino J. Alejo Jr.', image: 'students/marcelino-alejo.jpg' },
      { name: 'Garrick Van V. Alumisin', image: 'students/garrick-alumisin.jpg' },
      { name: 'Bernabe Barr U. Ambrosio', image: 'students/bernabe-ambrosio.jpg' },
      { name: 'Gilbert C. Ang', image: 'students/gilbert-ang.jpg' },
      { name: 'Edwin I. Antonio', image: 'students/edwin-antonio.jpg' },
      { name: 'Rommel E. Argenal', image: 'students/rommel-argenal.jpg' },
      { name: 'Luisito D. Articulo', image: 'students/luisito-articulo.jpg' },
      { name: 'Zeus R. Balagtas', image: 'students/zeus-balagtas.jpg' },
      { name: 'Marlon R. Baltazar', image: 'students/marlon-baltazar.jpg' },
      { name: 'Ariel G. Bartilet', image: 'students/ariel-bartilet.jpg' },
      { name: 'Ramil D. Bataller', image: 'students/ramil-bataller.jpg' },
      { name: 'Roberto I. Belda', image: 'students/roberto-belda.jpg' },
      { name: 'Neil John V. Briones', image: 'students/neil-briones.jpg' },
      { name: 'Victor L. Cabochan', image: 'students/victor-cabochan.jpg' },
      { name: 'Paul John T. Camiring', image: 'students/paul-camiring.jpg' },
      { name: 'Leoberdo S. Cortez', image: 'students/leoberdo-cortez.jpg' },
      { name: 'Adonis P. Cruz', image: 'students/adonis-cruz.jpg' },
      { name: 'Cesar V. Dalde Jr.', image: 'students/cesar-dalde.jpg' },
      { name: 'Abraham B. Diaz', image: 'students/abraham-diaz.jpg' },
      { name: 'Danilo C. Eulogio', image: 'students/danilo-eulogio.jpg' },
      { name: 'Emmanuel C. Feliciano', image: 'students/emmanuel-feliciano.jpg' },
      { name: 'Manuel Erwin O. Felipe', image: 'students/manuel-felipe.jpg' },
      { name: 'Jaime Victor L. Gabriel', image: 'students/jaime-gabriel.jpg' },
      { name: 'Dominic E. Javier', image: 'students/dominic-javier.jpg' },
      { name: 'Robert Agustin A. De Jesus Jr.', image: 'students/robert-dejesus.jpg' },
      { name: 'Robert S. Jusay', image: 'students/robert-jusay.jpg' },
      { name: 'Alvin N. De Leon', image: 'students/alvin-deleon.jpg' },
      { name: 'Ramil M. Mirando', image: 'students/ramil-mirando.jpg' },
      { name: 'Sidney D. Munji', image: 'students/sidney-munji.jpg' },
      { name: 'Manuel M. Oliveros', image: 'students/manuel-oliveros.jpg' },
      { name: 'Dexter V. Pacheco', image: 'students/dexter-pacheco.jpg' },
      { name: 'Pancrasio D. Pahilan', image: 'students/pancrasio-pahilan.jpg' },
      { name: 'Alvin P. Palamos', image: 'students/alvin-palamos.jpg' },
      { name: 'Gavini C. Pancho', image: 'students/gavini-pancho.jpg' },
      { name: 'Andres Edgar R. Perez', image: 'students/andres-perez.jpg' },
      { name: 'Jose Angelo S. Petelo', image: 'students/jose-petelo.jpg' },
      { name: 'Miguel H. Podolig', image: 'students/miguel-podolig.jpg' },
      { name: 'Primo L. Prado', image: 'students/primo-prado.jpg' },
      { name: 'Michael Angelo A. Raymundo', image: 'students/michael-raymundo.jpg' },
      { name: 'Carlito M. Redaja', image: 'students/carlito-redaja.jpg' },
      { name: 'Roderick D. Reyes', image: 'students/roderick-reyes.jpg' },
      { name: 'Severino T. Salaguinto Jr.', image: 'students/severino-salaguinto.jpg' },
      { name: 'Hector Joseph E. Samson', image: 'students/hector-samson.jpg' },
      { name: 'Eric F. Santos', image: 'students/eric-santos.jpg' },
      { name: 'Menardo G. Soliven', image: 'students/menardo-soliven.jpg' },
      { name: 'Luisito G. Tirados', image: 'students/luisito-tirados.jpg' },
      { name: 'Alexander R. Torres Jr.', image: 'students/alexander-torres.jpg' },
      { name: 'Alexander D. Valmeo', image: 'students/alexander-valmeo.jpg' },
      { name: 'Rogelio Velicaria', image: 'students/rogelio-velicaria.jpg' },
      { name: 'Edgar R. Ventanilla', image: 'students/edgar-ventanilla.jpg' },
      { name: 'Reginaldo S. Villanueva', image: 'students/reginaldo-villanueva.jpg' },
      { name: 'Byron M. Villegas', image: 'students/byron-villegas.jpg' },
      { name: 'Florito L. Yalung', image: 'students/florito-yalung.jpg' },
      { name: 'Albert Q. Yamson III', image: 'students/albert-yamson.jpg' }
    ],
    other: []
  }
];
