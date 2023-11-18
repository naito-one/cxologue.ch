(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{168:function(e,t,n){"use strict";n.r(t);var l=n(19),o=Object(l.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col items-center justify-center text-gray-100 pt-16"},[n("img",{staticClass:"px-8 w-full max-w-100 z-10",attrs:{src:"/images/logo-white.svg",alt:"C'XOLOGUE"}}),e._v(" "),n("h1",{staticClass:"px-8 w-full md:w-1/2 text-center font-extrabold text-xl z-10"},[e._v("\n    Sexologue à Delémont,\n    "),n("span",{staticClass:"text-sm"},[e._v("Jura suisse")])])])}],!1,null,null,null).exports,r={props:{item:{type:Object,required:!0}},computed:{title:function(){return'Aller vers la section "'.concat(this.item.title,'"')}}},c={name:"AppMenu",components:{MenuItem:Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{class:"flex-grow flex flex-col items-center justify-center rounded-lg p-4 m-4 relative tile-background bg-"+e.item.bgColor+" shadow-md hover:shadow-lg active:darken-5 hover:lighten-5 h-32",style:"background-image: url("+e.item.image+")",attrs:{title:e.title,"aria-label":e.title,href:"#"+e.item.id}},[n("span",{class:"text-"+e.item.fgColor+" text-center text-xl z-10",domProps:{textContent:e._s(e.item.title)}}),e._v(" "),n("div",{class:"absolute top-0 w-full h-full bg-"+e.item.bgColor+" bg-opacity-85 rounded-lg"})])}),[],!1,null,null,null).exports},computed:{sections:function(){return this.$store.getters.sections}}},m=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{attrs:{"aria-label":"menu"}},[n("div",{staticClass:"font-heading xl:mx-32"},[n("ul",{staticClass:"flex flex-col lg:flex-row"},e._l(e.sections.row1,(function(e,i){return n("li",{key:i,staticClass:"flex w-full"},[n("menu-item",{attrs:{item:e}})],1)})),0),e._v(" "),n("ul",{staticClass:"flex flex-col lg:flex-row"},e._l(e.sections.row2,(function(e,i){return n("li",{key:i,staticClass:"flex w-full"},[n("menu-item",{attrs:{item:e}})],1)})),0)])])}),[],!1,null,null,null).exports,d=Object(l.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"relative w-full flex flex-col mt-20"},[n("div",{staticClass:"absolute top-0 w-full h-full flex flex-col drop-shadow-lg-top"},[n("svg",{staticClass:"-mb-px",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 163"}},[n("path",{staticStyle:{fill:"#e0e0e0","fill-opacity":"1"},attrs:{d:"m 0,37.169735 30,21.662986 c 30,21.895301 90,64.872799 150,80.553789 60,15.68098 120,2.90388 180,-15.50675 60,-18.7591 120,-43.151738 180,-49.54029 60,-6.388541 120,6.388552 180,0 60,-6.388541 120,-30.781183 180,-37.169735 60,-6.388541 120,6.388552 180,21.662986 60,15.506749 120,34.091617 180,24.799188 60,-9.292439 120,-46.462174 150,-65.047041 L 1440,0 v 167.26381 h -30 c -30,0 -90,0 -150,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -150,0 H 0 Z"}})]),e._v(" "),n("div",{staticClass:"bg-gray-300 flex-grow"})]),e._v(" "),e._t("default")],2)])}),[],!1,null,null,null).exports,v={name:"AppSection",props:{id:{type:String,required:!0},title:{type:String,required:!0},image:{type:String,required:!0},bgColor:{type:String,required:!0},fgColor:{type:String,required:!0},minHeightScreen:{type:Boolean,default:!0},paddingBottom:{type:Boolean,default:!0}}},f=Object(l.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sm:p-2 lg:p-8 xl:px-40 my-16 lg:my-8 z-10",attrs:{id:e.id}},[n("section",{class:"relative bg-"+e.bgColor+" text-"+e.fgColor+" sm:rounded-lg shadow-md "+(e.minHeightScreen?"min-h-screen sm:min-h-0":"")},[n("div",{staticClass:"tile-background h-24 sm:rounded-t-lg",style:"background-image: url("+e.image+")"}),e._v(" "),n("div",{class:"absolute top-0 w-full h-24 bg-"+e.bgColor+" bg-opacity-50 sm:rounded-t-lg"}),e._v(" "),n("div",{class:"p-8 md:px-16 "+(e.paddingBottom?"pb-16 md:pb-24":"")},[n("a",{attrs:{href:"#"+e.id}},[n("h2",{staticClass:"font-heading text-2xl text-center mb-8",domProps:{textContent:e._s(e.title)}})]),e._v(" "),e._t("default")],2)])])}),[],!1,null,null,null).exports,_={name:"SectionAQuoiSertLaSexologie",components:{AppSection:f},computed:{section:function(){return this.$store.getters.sections.row1[0]}}},x=Object(l.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-section",{attrs:{id:e.section.id,title:e.section.title,image:e.section.image,"bg-color":e.section.alternateBgColor||e.section.bgColor,"fg-color":e.section.alternateFgColor||e.section.fgColor}},[n("p",{staticClass:"drop-cap"},[e._v("\n    Dans notre société, nous parlons beaucoup de l'importance de maintenir une\n    bonne santé physique, mentale, relationnelle et aussi une bonne\n    "),n("strong",[e._v("santé sexuelle")]),e._v(". Mais, comment déterminer notre santé\n    sexuelle ? Quel est notre degré de satisfaction sexuelle, relationnelle,\n    émotionnelle ?\n  ")]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("\n    Une sexualité épanouie repose sur les habiletés à ressentir et à jouer\n    avec son corps, son cœur et son esprit, d'une manière\n    "),n("strong",[e._v("consentie, conscientisée et diversifiée")]),e._v(".\n  ")]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("Durant notre existence,")]),e._v(" "),n("ul",{staticClass:"list-disc pl-6"},[n("li",[e._v("\n      peuvent survenir des dysfonctionnements, des pertes, des impossibilités,\n      des échecs, des dépendances\n    ")]),e._v(" "),n("li",[e._v("\n      peuvent naître de nouveaux désirs, souhaits, envies, questionnements,\n      découvertes.\n    ")])]),e._v(" "),n("p",[e._v("La sexologie peut améliorer et embellir ces variations.")]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("\n    La sexualité est apprise et évolutive, seul le réflexe neurologique\n    d'excitation génitale est inné. La façon dont le corps va le mettre en\n    action nécessite un apprentissage qui démarre dès la petite enfance. Quand\n    une personne consulte, c'est que cet apprentissage ne lui a pas permis\n    d'éclore une sexualité satisfaisante et/ou que les apprentissages sont\n    lacunaires actuellement.\n  ")])])}),[],!1,null,null,null).exports,h={name:"SectionParcoursProfessionnel",components:{AppSection:f},computed:{section:function(){return this.$store.getters.sections.row1[1]}}},C=Object(l.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-section",{attrs:{id:e.section.id,title:e.section.title,image:e.section.image,"bg-color":e.section.alternateBgColor||e.section.bgColor,"fg-color":e.section.alternateFgColor||e.section.fgColor}},[n("div",{staticClass:"flex flex-col lg:flex-row lg:mb-4"},[n("div",[n("ul",{staticClass:"list-disc pl-6"},[n("li",[n("abbr",{attrs:{tabindex:"0",title:"Diplôme d'études avancées"}},[e._v("DAS")]),e._v(" en\n          santé sexuelle et reproductive, volet éducation (2006-2008)\n        ")]),e._v(" "),n("li",[e._v("Formation passerelle volet conseil en santé sexuelle (2013)")]),e._v(" "),n("li",[e._v("Formatrice en santé sexuelle (2015)")]),e._v(" "),n("li",[e._v("\n          Sexologue formée en sexocorporel. Formation à Paris par le\n          "),n("abbr",{attrs:{tabindex:"0",title:"Centre de Formation en Sexocorporel France"}},[e._v("CFSF")]),e._v("\n          (2016 - 2023)\n          "),n("a",{staticClass:"inline-flex items-center ml-2",attrs:{href:"/documents/CERTIFICAT DE FIN D'ETUDES-CFSF-PARIS GROUPE8_CatherineCHARMILLOT.pdf",target:"_blank"}},[n("i",{staticClass:"material-icons"},[e._v("open_in_new")]),n("span",{staticClass:"underline ml-1"},[e._v("Dîplome")])])])]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("\n        Depuis 2008, j'anime avec beaucoup d'enthousiasme des cours\n        d'éducation sexuelle dans les écoles pour la promotion et la\n        prévention de la santé sexuelle."),n("br"),e._v("\n        Depuis 2015, je travaille comme conseillère en santé sexuelle au\n        centre de santé sexuelle-planning familial jurassien pour informer,\n        orienter et soutenir les personnes qui consultent.\n      ")]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("\n        Dans ces activités, j'ai constaté que la sexualité et le plaisir\n        améliorent la vie des gens et sont une base solide à une meilleure\n        santé en général. De là est né mon désir d'approfondir mes\n        connaissances en sexologie. Comme sexologue, j'aimerais faire tomber\n        les tabous qui entourent les sexualités et que vous, être unique,\n        puissiez venir me consulter en toute transparence.\n      ")])]),e._v(" "),n("img",{staticClass:"rounded-lg shadow-md my-4 lg:my-0 lg:ml-8 md:w-100 md:mx-auto lg:h-100 lg:w-auto lg:mx-0",attrs:{src:"/images/profil.jpg",alt:"Profil de Catherine Charmillot"}})]),e._v(" "),n("p",[n("strong",[e._v("\n      Je m'engage à mettre mes compétences humaines et relationnelles ainsi\n      que les outils de l'approche sexocorporelle à votre disposition. Une\n      écoute attentive sera ma priorité. Mon approche est authentique,\n      bienveillante et respectueuse. Je prendrai soin de votre intimité dans\n      le secret professionnel et dans une discrétion totale.\n    ")])])])}),[],!1,null,null,null).exports,w={name:"SectionMotifsDeConsultation",components:{AppSection:f},computed:{section:function(){return this.$store.getters.sections.row1[2]}}},y=Object(l.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-section",{attrs:{id:e.section.id,title:e.section.title,image:e.section.image,"bg-color":e.section.alternateBgColor||e.section.bgColor,"fg-color":e.section.alternateFgColor||e.section.fgColor}},[n("div",{staticClass:"flex flex-col md:flex-row justify-center"},[n("ul",{staticClass:"flex flex-col items-center text-gray-100 md:items-start mb-4 md:mb-0"},[n("li",{staticClass:"py-6 px-10 mb-4 rounded-xl shadow-md bg-c-red-3 flex flex-col items-center md:mr-4 lg:ml-16"},[n("h3",{staticClass:"font-bold text-xl text-center mb-1"},[e._v("\n          Apprendre sa sexualité\n        ")]),e._v(" "),n("ul",{staticClass:"list-disc pl-6"},[n("li",[e._v("Développer de nouvelles compétences")]),e._v(" "),n("li",[e._v("Évoluer avec sa situation et son âge")]),e._v(" "),n("li",[e._v("S'adapter à son, sa ou ses partenaires")])])]),e._v(" "),n("li",{staticClass:"py-6 px-10 my-4 rounded-xl shadow-md bg-c-violet-1 flex flex-col items-center md:mr-4"},[n("h3",{staticClass:"font-bold text-xl text-center mb-1"},[e._v("\n          Pallier des difficultés relationnelles\n        ")]),e._v(" "),n("ul",{staticClass:"list-disc pl-6"},[n("li",[e._v("Questionnement amoureux")]),e._v(" "),n("li",[e._v("Confusion")]),e._v(" "),n("li",[e._v("Communication")]),e._v(" "),n("li",[e._v("Séduction")]),e._v(" "),n("li",[e._v("Orientation")]),e._v(" "),n("li",[e._v("Identité")])])]),e._v(" "),n("li",{staticClass:"py-6 px-10 mt-4 rounded-xl shadow-md bg-c-red-3 flex flex-col items-center md:mr-4 lg:ml-10"},[n("h3",{staticClass:"font-bold text-xl text-center mb-1"},[e._v("\n          Soigner une addiction\n        ")]),e._v(" "),n("ul",{staticClass:"list-disc pl-6"},[n("li",[e._v("Masturbation")]),e._v(" "),n("li",[e._v("Pornographie")]),e._v(" "),n("li",[e._v("Pratiques sexuelles")]),e._v(" "),n("li",[e._v("Sexualités diverses")])])])]),e._v(" "),n("ul",{staticClass:"flex flex-col items-center text-gray-100 md:items-end mt-4 md:mt-0"},[n("li",{staticClass:"py-6 px-10 mb-4 md:mb-0 md:mt-4 rounded-xl shadow-md bg-c-violet-1 flex flex-col items-center md:ml-4 md:order-1"},[n("h3",{staticClass:"font-bold text-xl text-center mb-1"},[e._v("\n          Remédier à un dysfonctionnement sexuel\n        ")]),e._v(" "),n("ul",{staticClass:"list-disc pl-6"},[n("li",[e._v("Perte érection")]),e._v(" "),n("li",[e._v("Gestion éjaculation")]),e._v(" "),n("li",[e._v("Anorgasmie")]),e._v(" "),n("li",[e._v("Vaginisme")]),e._v(" "),n("li",[e._v("Douleurs")]),e._v(" "),n("li",[e._v("Blocage")])])]),e._v(" "),n("li",{staticClass:"py-6 px-10 mt-4 md:mt-0 md:mb-4 rounded-xl shadow-md bg-c-red-3 flex flex-col items-center md:ml-4 lg:mr-16"},[n("h3",{staticClass:"font-bold text-xl text-center mb-1"},[e._v("\n          Améliorer sa satisfaction sexuelle\n        ")]),e._v(" "),n("ul",{staticClass:"list-disc pl-6"},[n("li",[e._v("Plaisir")]),e._v(" "),n("li",[e._v("Désir")]),e._v(" "),n("li",[e._v("Relation")]),e._v(" "),n("li",[e._v("Orgasme")]),e._v(" "),n("li",[e._v("Perturbation")]),e._v(" "),n("li",[e._v("Variation")]),e._v(" "),n("li",[e._v("Intensité")]),e._v(" "),n("li",[e._v("Érotisme")])])])])])])}),[],!1,null,null,null).exports,A={name:"SectionSyntheseDeLApproche",components:{AppSection:f},computed:{section:function(){return this.$store.getters.sections.row2[0]}}},S=Object(l.a)(A,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-section",{attrs:{id:e.section.id,title:e.section.title,image:e.section.image,"bg-color":e.section.alternateBgColor||e.section.bgColor,"fg-color":e.section.alternateFgColor||e.section.fgColor}},[n("p",{staticClass:"drop-cap"},[e._v("\n    La démarche sexocorporelle se veut "),n("strong",[e._v("bienveillante")]),e._v(" ; elle\n    se base sur les acquis et les limites de la personne. Les outils\n    thérapeutiques sont d'ordre verbal (entretien de consultation) et corporel\n    (programme d'exercices à réaliser à la maison).\n  ")]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("\n    Une évaluation précise du fonctionnement de la personne intéressée\n    permettra l'établissement d'un diagnostic. Il sera alors possible de lui\n    restituer la logique et la compréhension de son comportement dans la\n    sphère de sa sexualité. En déterminant précisément sa demande, un plan de\n    traitement sera proposé afin de développer de nouvelles habiletés\n    corporelles, sensorielles ou émotionnelles.\n  ")]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("\n    L'approche sexocorporelle a été créée il y a une cinquantaine d'années au\n    Québec par le Dr Jean-Yves Desjardins. La distinction entre santé mentale\n    et santé sexuelle a permis son développement. C'est une sexologie\n    intégrative, construite à partir de connaissances et d'observations de la\n    réalité. Elle étudie le corps explicite (observable) et le corps implicite\n    (émotions, perceptions et mentalisations) qui sont interactifs et\n    indissociables.\n  ")]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("\n    Les protocoles de traitement offrent de nouvelles ressources et\n    améliorations afin d'aider les hommes et les femmes à mieux vivre leur\n    sexualité et leur vie amoureuse."),n("br"),e._v("\n    Le sexocorporel reconnaît la notion de santé sexuelle qui ancre ses bases\n    autour de cinq axes de la sexualité humaine :\n  ")]),e._v(" "),n("ul",{staticClass:"list-disc my-6 pl-6"},[n("li",{staticClass:"my-3"},[e._v("\n      Les composantes FONDAMENTALES"),n("br"),e._v("\n      Identité chromosomique, identité de genre, réflexes sexuels\n    ")]),e._v(" "),n("li",{staticClass:"my-3"},[e._v("\n      Les composantes PHYSIOLOGIQUES"),n("br"),e._v("\n      Capacité à ressentir son corps, sources, modes et courbes d'excitation\n    ")]),e._v(" "),n("li",{staticClass:"my-3"},[e._v("\n      Les composantes COGNITIVES"),n("br"),e._v("\n      Système de pensées, connaissances, croyances, idéologies, jugements de\n      valeur\n    ")]),e._v(" "),n("li",{staticClass:"my-3"},[e._v("\n      Les composantes PERSONNELLES"),n("br"),e._v("\n      Désir, imaginaire, assertivité, intensité, codes en lien avec la\n      sexualité\n    ")]),e._v(" "),n("li",{staticClass:"my-3"},[e._v("\n      Les composantes RELATIONNELLES"),n("br"),e._v("\n      Sentiment amoureux, communication, séduction, habiletés érotiques\n    ")])])])}),[],!1,null,null,null).exports;n(92),n(37);var E={name:"AppSection",props:{title:{type:String,required:!1},date:{type:String,required:!0},image:{type:String,required:!0},lightImage:{type:Boolean,required:!0}}},$=Object(l.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide w-full flex-shrink-0 flex justify-center"},[n("section",{staticClass:"relative bg-gray-100 text-gray-900 rounded-lg shadow-md mx-2 sm:mx-12 w-full overflow-hidden"},[n("div",{staticClass:"tile-background h-76",style:"background-image: url("+e.image+")"}),e._v(" "),n("div",{class:"absolute top-0 w-full h-70 "+(e.lightImage?"bg-gradient-corner-light":"bg-gradient-corner-dark")}),e._v(" "),n("span",{class:"absolute top-0 w-full text-right font-bold p-8 "+(e.lightImage?"text-gray-900":"text-gray-100"),domProps:{textContent:e._s(e.date)}}),e._v(" "),n("div",{staticClass:"p-8 pb-16"},[e.title?n("h3",{staticClass:"font-heading text-2xl text-c-violet-3 text-center mb-8",domProps:{textContent:e._s(e.title)}}):e._e(),e._v(" "),e._t("default")],2)])])}),[],!1,null,null,null).exports,j={name:"ActualiteCitation0422",components:{AppActualite:$},computed:{actualite:function(){return this.$store.getters.actualites.get("citation-04-22")}}},L={name:"ActualiteTeoignage0822",components:{AppActualite:$},computed:{actualite:function(){return this.$store.getters.actualites.get("temoignage-08-22")}}},O={name:"ActualiteTeoignage0223",components:{AppActualite:$},computed:{actualite:function(){return this.$store.getters.actualites.get("temoignage-02-23")}}},D={name:"ActualiteTeoignage0323",components:{AppActualite:$},computed:{actualite:function(){return this.$store.getters.actualites.get("temoignage-03-23")}}},k={name:"ActualiteCitation0623",components:{AppActualite:$},computed:{actualite:function(){return this.$store.getters.actualites.get("citation-06-23")}}},I={name:"ActualiteCitation0923",components:{AppActualite:$},computed:{actualite:function(){return this.$store.getters.actualites.get("citation-09-23")}}},T={name:"SectionActualites",components:{AppSection:f,ActualiteCitation0422:Object(l.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-actualite",{attrs:{id:e.actualite.id,title:e.actualite.title,date:e.actualite.date,image:e.actualite.image,"light-image":e.actualite.lightImage}},[n("p",{staticClass:"flex flex-col mb-8"},[n("span",{staticClass:"font-bold italic text-center"},[e._v("\n      « La sexualité est parfaitement naturelle, mais elle n’est pas\n      naturellement parfaite. »\n    ")]),e._v(" "),n("span",{staticClass:"text-right mt-2"},[e._v("\n      Jean-Yves Desjardins"),n("br"),e._v(" "),n("span",{staticClass:"text-sm"},[e._v("(fondateur de l’approche sexocorporelle)")])])])])}),[],!1,null,null,null).exports,ActualiteTemoignage0822:Object(l.a)(L,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-actualite",{attrs:{id:e.actualite.id,title:e.actualite.title,date:e.actualite.date,image:e.actualite.image,"light-image":e.actualite.lightImage}},[n("p",{staticClass:"flex flex-col mb-8"},[n("span",{staticClass:"font-bold italic text-center"},[e._v("\n      L’approche en sexocorporel m’a permis de gérer ma libido envahissante et\n      d’ouvrir mon champ de vision sur de nouveaux domaines de la sexualité\n    ")]),e._v(" "),n("span",{staticClass:"text-right mt-2"},[e._v("homme la vingtaine")])])])}),[],!1,null,null,null).exports,ActualiteTemoignage0223:Object(l.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-actualite",{attrs:{id:e.actualite.id,title:e.actualite.title,date:e.actualite.date,image:e.actualite.image,"light-image":e.actualite.lightImage}},[n("p",{staticClass:"flex flex-col mb-8"},[n("span",{staticClass:"mb-4"},[e._v("\n      J'ai entrepris une démarche sexo corporelle suite à des problèmes de\n      dysfonctions érectiles. Mes relations sexuelles n'étaient pas\n      satisfaisantes pour moi, mais également pour ma compagne.\n    ")]),e._v(" "),n("span",[e._v("\n      J'ai décidé de consulter "),n("span",{staticClass:"font-bold"},[e._v("C'XOLOGUE")]),e._v("."),n("br"),e._v("\n      Je me suis senti à l'aise, pas de tabou pas de jugement. Depuis nous\n      vivons mieux notre sexualité et notre vie amoureuse."),n("br"),e._v("Merci à Mme\n      Charmillot.\n    ")]),e._v(" "),n("span",{staticClass:"font-bold italic text-right mt-2"},[e._v("Un homme de la soixantaine")])])])}),[],!1,null,null,null).exports,ActualiteTemoignage0323:Object(l.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-actualite",{attrs:{id:e.actualite.id,title:e.actualite.title,date:e.actualite.date,image:e.actualite.image,"light-image":e.actualite.lightImage}},[n("p",{staticClass:"flex flex-col mb-8"},[n("span",{staticClass:"mb-4"},[e._v("\n      Suite à une sexualité insatisfaisante avec mon partenaire du à un manque\n      de désir et des pannes érectiles, les entretiens avec Mme Charmillot ont\n      été bénéfiques en tous points. Je me suis sentie écoutée avec\n      bienveillance.\n    ")]),e._v(" "),n("span",[e._v("\n      Grâce au conseils et à l’aide apportée, j'ai retrouvé une sexualité\n      épanouie et j'ai osé m'ouvrir à d’autres formes de plaisir."),n("br"),e._v("Mon\n      partenaire et moi sommes très heureux. "),n("br"),e._v("Je me félicite d’avoir\n      consulté "),n("span",{staticClass:"font-bold"},[e._v("C'XOLOGUE")]),e._v(".\n    ")]),e._v(" "),n("span",{staticClass:"font-bold italic text-right mt-2"},[e._v("Nouvelle vie")])])])}),[],!1,null,null,null).exports,ActualiteCitation0623:Object(l.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-actualite",{attrs:{id:e.actualite.id,title:e.actualite.title,date:e.actualite.date,image:e.actualite.image,"light-image":e.actualite.lightImage}},[n("div",{staticClass:"flex justify-center italic"},[n("p",{staticClass:"flex flex-col leading-9 text-c-red-3 text-lg mt-4"},[n("span",[e._v("L'érotisme c'est d'offrir au corps")]),e._v(" "),n("span",[e._v("Le langage des sens")]),e._v(" "),n("span",[e._v("La légèreté de l'âme")]),e._v(" "),n("span",[e._v("Et la volupté de l'esprit")])])])])}),[],!1,null,null,null).exports,ActualiteCitation0923:Object(l.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-actualite",{attrs:{id:e.actualite.id,title:e.actualite.title,date:e.actualite.date,image:e.actualite.image,"light-image":e.actualite.lightImage}},[n("p",{staticClass:"flex flex-col mb-8"},[n("span",{staticClass:"font-bold italic text-center"},[e._v("\n      « Le prochain défi sera sans doute de replacer la sexualité dans son contexte qui n'est pas celui d'une performance, mais d'un partage, c'est-à-dire l'expression de l'intimité d'un couple. »\n    ")]),e._v(" "),n("span",{staticClass:"text-right mt-2"},[e._v("Jean-Paul Mialet")])])])}),[],!1,null,null,null).exports},data:function(){return{current:1,ratio:0}},mounted:function(){var e=this;this.ratio=this.$refs.scroller.scrollWidth/this.numActualites,window.onresize=function(){e.ratio=e.$refs.scroller.scrollWidth/e.numActualites},this.setFromHash(this.$route.hash);this.$refs.scroller.addEventListener("touchend",(function(){setTimeout((function(){var t=Math.round(e.$refs.scroller.scrollLeft/e.ratio);e.current=t+1,e.setToHash()}),500)}),{passive:!0})},methods:{setFromHash:function(e){if(e.startsWith("#actualite-")){var t=parseInt(e.replace("#actualite-",""));isNaN(t)||(this.current=t,this.scrollToCurrent())}},setToHash:function(e){var t="#actualite-".concat(this.current);history.replaceState({},"",t)},previous:function(){var e=this.current-2;e<0&&(e=this.numActualites+e),this.current=e%this.numActualites+1,this.scrollToCurrent()},next:function(){this.current=this.current%this.numActualites+1,this.scrollToCurrent()},goTo:function(i){this.current=i,this.scrollToCurrent()},scrollToCurrent:function(){this.$refs.scroller.scrollTo({left:(this.current-1)*this.ratio,behavior:"smooth"}),this.setToHash()},shouldBeFullSize:function(i){return function(i,e,t){if(t<=3)return!0;if(0===e&&i<3)return!0;var n=t-1;return e===n&&i>n-3||(i>e?i-e<=1:e-i<=1)}(i-1,this.current-1,this.numActualites)}},computed:{section:function(){return this.$store.getters.sections.row2[1]},numActualites:function(){return this.$store.getters.actualites.size},singleActualite:function(){return this.numActualites<=1}}},F={name:"SectionPrendreContact",data:function(){return{validated:!1}},methods:{submit:function(e){if(this.validated)return!0;e.preventDefault();var t=e.target[5].checked;return e.target[6].checked||!t?(window.location=this.robotReturnAddress,!1):(this.validated=!0,this.$refs.form.action="https://contact.cxologue.ch/forms/cxologue_contact_form",this.$refs.form.submit(),!1)}},computed:{section:function(){return this.$store.getters.sections.row2[2]},robotReturnAddress:function(){return"".concat("undefined"!=typeof location?location.origin:"https://cxologue.ch","/?human#prendre-contact")}}},P={name:"Index",components:{AppHeader:o,AppMenu:m,AppForground:d,SectionAQuoiSertLaSexologie:x,SectionCatherineCharmillot:C,SectionMotifsDeConsultation:y,SectionSyntheseDeLApproche:S,SectionActualites:Object(l.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full mb-16 lg:mb-8"},[n("app-section",{staticClass:"mb-2 lg:mb-0",attrs:{id:e.section.id,title:e.section.title,image:e.section.image,"bg-color":e.section.alternateBgColor||e.section.bgColor,"fg-color":e.section.alternateFgColor||e.section.fgColor,"min-height-screen":!1,"padding-bottom":!1}},[n("div",{staticClass:"w-full sm:w-120 mx-auto flex justify-between items-center select-none"},[n("button",{staticClass:"material-icons text-6xl disabled:text-gray-500",attrs:{"aria-label":"Actualité précédente",title:"Actualité précédente",disabled:e.singleActualite},on:{click:e.previous}},[e._v("\n        arrow_left\n      ")]),e._v(" "),n("div",{staticClass:"flex items-center"},e._l(e.numActualites,(function(i){return n("a",{key:i,class:"material-icons py-4 px-2-5 sm:px-4 "+(e.current===i?"text-gray-900":"text-gray-500")+" "+(e.shouldBeFullSize(i)?"":"text-2xs px-1 sm:text-base sm:px-4"),attrs:{"aria-label":"Accéder à l'actualité "+i,title:"Accéder à l'actualité "+i,href:"#actualite-"+i},on:{click:function(t){t.preventDefault()||e.goTo(i)}}},[e._v("lens")])})),0),e._v(" "),n("button",{staticClass:"material-icons text-6xl disabled:text-gray-500",attrs:{"aria-label":"Actualité suivante",title:"Actualité suivante",disabled:e.singleActualite},on:{click:e.next}},[e._v("\n        arrow_right\n      ")])])]),e._v(" "),n("div",{staticClass:"relative sm:w-120 mx-auto"},[n("div",{staticClass:"absolute w-full h-full transparent-borders z-10 pointer-events-none"}),e._v(" "),n("div",{ref:"scroller",staticClass:"slider w-full flex overflow-x-auto"},[n("actualite-citation-09-23"),e._v(" "),n("actualite-citation-06-23"),e._v(" "),n("actualite-temoignage-03-23"),e._v(" "),n("actualite-temoignage-02-23"),e._v(" "),n("actualite-temoignage-08-22"),e._v(" "),n("actualite-citation-04-22")],1)])],1)}),[],!1,null,null,null).exports,SectionPrendreContact:Object(l.a)(F,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sm:p-2 lg:p-8 xl:px-40 my-16 lg:my-8 z-10",attrs:{id:e.section.id}},[n("a",{attrs:{href:"#"+e.section.id}},[n("h2",{staticClass:"font-heading text-2xl text-center mt-2 mb-4"},[e._v("\n      Prendre contact par téléphone et WhatsApp\n    ")])]),e._v(" "),e._m(0),e._v(" "),n("h2",{staticClass:"font-heading text-2xl text-center mt-12 mb-4"},[e._v("\n    Formulaire de contact\n  ")]),e._v(" "),n("form",{ref:"form",staticClass:"flex flex-col mx-2 md:w-160 md:mx-auto placeholder-gray-750",attrs:{method:"post",action:"#"},on:{submit:e.submit}},[n("input",{staticClass:"py-2 px-4 rounded-lg shadow-sm mb-2",attrs:{"aria-label":"Nom",type:"text",name:"lastname",id:"lastname",placeholder:"Nom *",required:""}}),e._v(" "),n("input",{staticClass:"py-2 px-4 rounded-lg shadow-sm mb-2",attrs:{"aria-label":"Prénom",type:"text",name:"firstname",id:"firstname",placeholder:"Prénom *",required:""}}),e._v(" "),n("input",{staticClass:"py-2 px-4 rounded-lg shadow-sm mb-2",attrs:{"aria-label":"Email",type:"email",name:"mail",id:"mail",placeholder:"Email *",required:""}}),e._v(" "),n("input",{staticClass:"py-2 px-4 rounded-lg shadow-sm mb-2",attrs:{"aria-label":"Téléphone",type:"tel",name:"phone",id:"phone",placeholder:"Téléphone"}}),e._v(" "),n("textarea",{staticClass:"py-2 px-4 rounded-lg shadow-sm mb-2",attrs:{"aria-label":"Message",name:"message",id:"message",rows:"10",placeholder:"Message *",required:""}}),e._v(" "),n("span",{staticClass:"text-gray-800"},[e._v("Afin de limiter le spam, merci de cocher ce qui convient")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5)]),e._v(" "),n("h2",{staticClass:"font-heading text-2xl text-center mt-12 mb-4"},[e._v("Consultations")]),e._v(" "),e._m(6)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"rounded-lg bg-c-violet-3 p-3 shadow-md text-gray-100 flex items-center justify-center mx-auto max-w-full w-48",attrs:{href:"tel:+41775027543"}},[n("span",{staticClass:"material-icons select-none"},[e._v("phone")]),e._v(" "),n("span",{staticClass:"font-bold ml-4"},[e._v("077 502 75 43")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-center"},[n("input",{attrs:{type:"checkbox",name:"checkbox-1",id:"checkbox-1"}}),e._v(" "),n("label",{staticClass:"ml-2 select-none",attrs:{for:"checkbox-1"}},[e._v("Cochez cette case si vous êtes un humain")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-center mb-2"},[n("input",{attrs:{type:"checkbox",name:"checkbox-2",id:"checkbox-2"}}),e._v(" "),n("label",{staticClass:"ml-2 select-none",attrs:{for:"checkbox-2"}},[e._v("Cochez cette case si vous êtes un robot")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("span",{staticClass:"text-gray-800"},[e._v("Les champs marqués d'un * sont requis.")]),n("br"),e._v("\n      Je prendrai contact avec vous aussi tôt que possible.\n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"text-red-600"},[n("noscript",[e._v("\n        Javascript est requis pour soumettre le formulaire !\n      ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"rounded-lg bg-c-violet-3 p-3 shadow-md text-gray-100 flex items-center justify-center mx-auto max-w-full w-40 select-none mt-4",attrs:{type:"submit"}},[n("span",{staticClass:"material-icons"},[e._v("send")]),e._v(" "),n("span",{staticClass:"font-bold ml-4"},[e._v("Envoyer")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mx-2 md:w-160 md:mx-auto"},[n("p",[n("strong",[e._v("Consultation sur rendez-vous le matin ou le soir, à Delémont,\n        "),n("span",{staticClass:"text-sm"},[e._v("Jura suisse")])]),n("br"),e._v("\n      Dans les locaux du centre de santé sexuelle-planning familial (en dehors\n      des heures d'ouverture)"),n("br"),e._v("\n      Tarif préférentiel pour petits budgets\n    ")]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("\n      Centre de santé sexuelle - planning familial Jura"),n("br"),e._v("\n      Rue de la Molière 13"),n("br"),e._v("\n      2800 Delémont\n    ")]),e._v(" "),n("a",{staticClass:"bg-gray-400 map-image flex items-end justify-center rounded-lg shadow-md h-100 my-8",attrs:{href:"https://goo.gl/maps/qkS9bGLjJZNLBCfB8",rel:"noreferrer",target:"_blank","aria-label":"Emplacement sur la carte"}},[n("div",{staticClass:"rounded-lg bg-c-violet-3 p-3 mb-8 shadow-lg text-gray-100 flex items-center justify-center max-w-full w-56 select-none"},[n("span",{staticClass:"material-icons"},[e._v("directions")]),e._v(" "),n("span",{staticClass:"font-bold ml-4"},[e._v("Voir sur Google Maps")])])])])}],!1,null,null,null).exports,AppFooter:Object(l.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"relative w-full h-screen"},[n("svg",{staticClass:"absolute top-0 w-full drop-shadow-lg rotate-half -mt-px",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 163"}},[n("path",{staticStyle:{fill:"#e0e0e0","fill-opacity":"1"},attrs:{d:"m 0,37.169735 30,21.662986 c 30,21.895301 90,64.872799 150,80.553789 60,15.68098 120,2.90388 180,-15.50675 60,-18.7591 120,-43.151738 180,-49.54029 60,-6.388541 120,6.388552 180,0 60,-6.388541 120,-30.781183 180,-37.169735 60,-6.388541 120,6.388552 180,21.662986 60,15.506749 120,34.091617 180,24.799188 60,-9.292439 120,-46.462174 150,-65.047041 L 1440,0 v 167.26381 h -30 c -30,0 -90,0 -150,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -150,0 H 0 Z"}})]),e._v(" "),n("div",{staticClass:"fixed top-0 left-0 w-full h-full footer-image z-underworld mt-px"}),e._v(" "),e._m(0)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-full flex flex-col items-center justify-between py-12"},[n("img",{staticClass:"w-2/3 md:w-100 mx-12 select-none mt-12 lg:mt-48",attrs:{src:"/images/logo-colors.svg",alt:"C'XOLOGUE"}}),e._v(" "),n("p",{staticClass:"text-center w-2/3 lg:w-160 text-gray-100 text-shadow-md"},[e._v("\n      © 2023 - Catherine Charmillot"),n("br"),e._v("\n      Sauf indication contraire, toutes les images présentes sur ce site sont\n      la propriété de Catherine Charmillot ou proviennent du domaine\n      public."),n("br"),n("br"),e._v("\n      Ce site journalise vos visites de façon entièrement anonyme et\n      uniquement à des fins de statistique. Il respecte le paramètre «\n      Interdire le suivi » de votre navigateur.\n    ")])])}],!1,null,null,null).exports}},M=Object(l.a)(P,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"w-full relative"},[n("div",{staticClass:"w-full h-screen header-image absolute top-0 left-0 bg-fixed"}),e._v(" "),n("app-header"),e._v(" "),n("app-forground",[n("app-menu"),e._v(" "),n("section-a-quoi-sert-la-sexologie"),e._v(" "),n("section-catherine-charmillot"),e._v(" "),n("section-motifs-de-consultation"),e._v(" "),n("section-synthese-de-l-approche"),e._v(" "),n("section-actualites"),e._v(" "),n("section-prendre-contact")],1),e._v(" "),n("app-footer"),e._v(" "),n("img",{staticStyle:{border:"0"},attrs:{src:"https://analytics.naito.one/matomo.php?idsite=3&rec=1&action_name=Index",alt:""}})],1)}),[],!1,null,null,null);t.default=M.exports}}]);