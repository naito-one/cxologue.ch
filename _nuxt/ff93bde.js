(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{293:function(t,e,n){"use strict";n.r(e);var l=n(36),o=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col items-center justify-center text-gray-100 pt-16"},[e("img",{staticClass:"px-8 w-full max-w-100 z-10",attrs:{src:"/images/logo-white.svg",alt:"C'XOLOGUE"}}),t._v(" "),e("h1",{staticClass:"px-8 w-full md:w-1/2 text-center font-extrabold text-xl z-10"},[t._v("\n    Sexologue à Delémont,\n    "),e("span",{staticClass:"text-sm"},[t._v("Jura suisse")])])])}],!1,null,null,null).exports,r={props:{item:{type:Object,required:!0}},computed:{title:function(){return'Aller vers la section "'.concat(this.item.title,'"')}}},c={name:"AppMenu",components:{MenuItem:Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("a",{class:"flex-grow flex flex-col items-center justify-center rounded-lg p-4 m-4 relative tile-background bg-".concat(t.item.bgColor," shadow-md hover:shadow-lg active:darken-5 hover:lighten-5 h-32"),style:"background-image: url(".concat(t.item.image,")"),attrs:{title:t.title,"aria-label":t.title,href:"#".concat(t.item.id)}},[e("span",{class:"text-".concat(t.item.fgColor," text-center text-xl z-10"),domProps:{textContent:t._s(t.item.title)}}),t._v(" "),e("div",{class:"absolute top-0 w-full h-full bg-".concat(t.item.bgColor," bg-opacity-85 rounded-lg")})])}),[],!1,null,null,null).exports},computed:{sections:function(){return this.$store.getters.sections}}},m=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"menu"}},[e("div",{staticClass:"font-heading xl:mx-32"},[e("ul",{staticClass:"flex flex-col lg:flex-row"},t._l(t.sections.row1,(function(t,i){return e("li",{key:i,staticClass:"flex w-full"},[e("menu-item",{attrs:{item:t}})],1)})),0),t._v(" "),e("ul",{staticClass:"flex flex-col lg:flex-row"},t._l(t.sections.row2,(function(t,i){return e("li",{key:i,staticClass:"flex w-full"},[e("menu-item",{attrs:{item:t}})],1)})),0)])])}),[],!1,null,null,null).exports,d=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"relative w-full flex flex-col mt-20"},[e("div",{staticClass:"absolute top-0 w-full h-full flex flex-col drop-shadow-lg-top"},[e("svg",{staticClass:"-mb-px",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 163"}},[e("path",{staticStyle:{fill:"#e0e0e0","fill-opacity":"1"},attrs:{d:"m 0,37.169735 30,21.662986 c 30,21.895301 90,64.872799 150,80.553789 60,15.68098 120,2.90388 180,-15.50675 60,-18.7591 120,-43.151738 180,-49.54029 60,-6.388541 120,6.388552 180,0 60,-6.388541 120,-30.781183 180,-37.169735 60,-6.388541 120,6.388552 180,21.662986 60,15.506749 120,34.091617 180,24.799188 60,-9.292439 120,-46.462174 150,-65.047041 L 1440,0 v 167.26381 h -30 c -30,0 -90,0 -150,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -150,0 H 0 Z"}})]),t._v(" "),e("div",{staticClass:"bg-gray-300 flex-grow"})]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null).exports,v=(n(89),{name:"AppSection",props:{id:{type:String,required:!0},title:{type:String,required:!0},image:{type:String,required:!0},bgColor:{type:String,required:!0},fgColor:{type:String,required:!0},minHeightScreen:{type:Boolean,default:!0},paddingBottom:{type:Boolean,default:!0}}}),_=Object(l.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sm:p-2 lg:p-8 xl:px-40 my-16 lg:my-8 z-10",attrs:{id:t.id}},[e("section",{class:"relative bg-".concat(t.bgColor," text-").concat(t.fgColor," sm:rounded-lg shadow-md ").concat(t.minHeightScreen?"min-h-screen sm:min-h-0":"")},[e("div",{staticClass:"tile-background h-24 sm:rounded-t-lg",style:"background-image: url(".concat(t.image,")")}),t._v(" "),e("div",{class:"absolute top-0 w-full h-24 bg-".concat(t.bgColor," bg-opacity-50 sm:rounded-t-lg")}),t._v(" "),e("div",{class:"p-8 md:px-16 ".concat(t.paddingBottom?"pb-16 md:pb-24":"")},[e("a",{attrs:{href:"#".concat(t.id)}},[e("h2",{staticClass:"font-heading text-2xl text-center mb-8",domProps:{textContent:t._s(t.title)}})]),t._v(" "),t._t("default")],2)])])}),[],!1,null,null,null).exports,f={name:"SectionAQuoiSertLaSexologie",components:{AppSection:_},computed:{section:function(){return this.$store.getters.sections.row1[0]}}},x=Object(l.a)(f,(function(){var t=this,e=t._self._c;return e("app-section",{attrs:{id:t.section.id,title:t.section.title,image:t.section.image,"bg-color":t.section.alternateBgColor||t.section.bgColor,"fg-color":t.section.alternateFgColor||t.section.fgColor}},[e("p",{staticClass:"drop-cap"},[t._v("\n    Dans notre société, nous parlons beaucoup de l'importance de maintenir une\n    bonne santé physique, mentale, relationnelle et aussi une bonne\n    "),e("strong",[t._v("santé sexuelle")]),t._v(". Mais, comment déterminer notre santé\n    sexuelle ? Quel est notre degré de satisfaction sexuelle, relationnelle,\n    émotionnelle ?\n  ")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n    Une sexualité épanouie repose sur les habiletés à ressentir et à jouer\n    avec son corps, son cœur et son esprit, d'une manière\n    "),e("strong",[t._v("consentie, conscientisée et diversifiée")]),t._v(".\n  ")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("Durant notre existence,")]),t._v(" "),e("ul",{staticClass:"list-disc pl-6"},[e("li",[t._v("\n      peuvent survenir des dysfonctionnements, des pertes, des impossibilités,\n      des échecs, des dépendances\n    ")]),t._v(" "),e("li",[t._v("\n      peuvent naître de nouveaux désirs, souhaits, envies, questionnements,\n      découvertes.\n    ")])]),t._v(" "),e("p",[t._v("La sexologie peut améliorer et embellir ces variations.")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n    La sexualité est apprise et évolutive, seul le réflexe neurologique\n    d'excitation génitale est inné. La façon dont le corps va le mettre en\n    action nécessite un apprentissage qui démarre dès la petite enfance. Quand\n    une personne consulte, c'est que cet apprentissage ne lui a pas permis\n    d'éclore une sexualité satisfaisante et/ou que les apprentissages sont\n    lacunaires actuellement.\n  ")])])}),[],!1,null,null,null).exports,h={name:"SectionParcoursProfessionnel",components:{AppSection:_},computed:{section:function(){return this.$store.getters.sections.row1[1]}}},C=Object(l.a)(h,(function(){var t=this,e=t._self._c;return e("app-section",{attrs:{id:t.section.id,title:t.section.title,image:t.section.image,"bg-color":t.section.alternateBgColor||t.section.bgColor,"fg-color":t.section.alternateFgColor||t.section.fgColor}},[e("div",{staticClass:"flex flex-col lg:flex-row lg:mb-4"},[e("div",[e("ul",{staticClass:"list-disc pl-6"},[e("li",[e("abbr",{attrs:{tabindex:"0",title:"Diplôme d'études avancées"}},[t._v("DAS")]),t._v(" en\n          santé sexuelle et reproductive, volet éducation (2006-2008)\n        ")]),t._v(" "),e("li",[t._v("Formation passerelle volet conseil en santé sexuelle (2013)")]),t._v(" "),e("li",[t._v("Formatrice en santé sexuelle (2015)")]),t._v(" "),e("li",[t._v("\n          Sexologue formée en sexocorporel. Formation à Paris par le\n          "),e("abbr",{attrs:{tabindex:"0",title:"Centre de Formation en Sexocorporel France"}},[t._v("CFSF")]),t._v("\n          (2016 - 2023)\n          "),e("a",{staticClass:"inline-flex items-center ml-2",attrs:{href:"/documents/CERTIFICAT DE FIN D'ETUDES-CFSF-PARIS GROUPE8_CatherineCHARMILLOT.pdf",target:"_blank"}},[e("i",{staticClass:"material-icons"},[t._v("open_in_new")]),e("span",{staticClass:"underline ml-1"},[t._v("Diplôme")])])])]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n        Depuis 2008, j'anime des cours d'éducation sexuelle dans les écoles\n        pour la promotion et la prévention de la santé sexuelle."),e("br"),t._v("\n        Depuis 2015, je travaille comme spécialiste en santé sexuelle à\n        SexualitéS Santé Jura (centre de santé sexuelle) pour informer,\n        orienter et soutenir les personnes qui consultent.\n      ")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n        Dans ces activités, j'ai constaté que la sexualité et le plaisir\n        améliorent la vie des gens et sont une base solide à une meilleure\n        santé en général. De là est né mon désir d'approfondir mes\n        connaissances en sexologie. Comme sexologue, j'aimerais faire tomber\n        les tabous qui entourent les sexualités et que vous, être unique,\n        puissiez venir me consulter en toute transparence.\n      ")])]),t._v(" "),e("img",{staticClass:"rounded-lg shadow-md my-4 lg:my-0 lg:ml-8 md:w-100 md:mx-auto lg:h-100 lg:w-auto lg:mx-0",attrs:{src:"/images/profil.jpg",alt:"Profil de Catherine Charmillot"}})]),t._v(" "),e("p",[e("strong",[t._v("\n      Je m'engage à mettre mes compétences humaines et relationnelles ainsi\n      que les outils de l'approche sexocorporelle à votre disposition. Une\n      écoute attentive sera ma priorité. Mon approche est authentique,\n      bienveillante et respectueuse. Je prendrai soin de votre intimité dans\n      le secret professionnel et dans une discrétion totale.\n    ")])])])}),[],!1,null,null,null).exports,w={name:"SectionMotifsDeConsultation",components:{AppSection:_},computed:{section:function(){return this.$store.getters.sections.row1[2]}}},y=Object(l.a)(w,(function(){var t=this,e=t._self._c;return e("app-section",{attrs:{id:t.section.id,title:t.section.title,image:t.section.image,"bg-color":t.section.alternateBgColor||t.section.bgColor,"fg-color":t.section.alternateFgColor||t.section.fgColor}},[e("div",{staticClass:"flex flex-col md:flex-row justify-center"},[e("ul",{staticClass:"flex flex-col items-center text-gray-100 md:items-start mb-4 md:mb-0"},[e("li",{staticClass:"py-6 px-10 mb-4 rounded-xl shadow-md bg-c-red-3 flex flex-col items-center md:mr-4 lg:ml-16"},[e("h3",{staticClass:"font-bold text-xl text-center mb-1"},[t._v("\n          Apprendre sa sexualité\n        ")]),t._v(" "),e("ul",{staticClass:"list-disc pl-6"},[e("li",[t._v("Développer de nouvelles compétences")]),t._v(" "),e("li",[t._v("Évoluer avec sa situation et son âge")]),t._v(" "),e("li",[t._v("S'adapter à son, sa ou ses partenaires")])])]),t._v(" "),e("li",{staticClass:"py-6 px-10 my-4 rounded-xl shadow-md bg-c-violet-1 flex flex-col items-center md:mr-4"},[e("h3",{staticClass:"font-bold text-xl text-center mb-1"},[t._v("\n          Pallier des difficultés relationnelles\n        ")]),t._v(" "),e("ul",{staticClass:"list-disc pl-6"},[e("li",[t._v("Questionnement amoureux")]),t._v(" "),e("li",[t._v("Confusion")]),t._v(" "),e("li",[t._v("Communication")]),t._v(" "),e("li",[t._v("Séduction")]),t._v(" "),e("li",[t._v("Orientation")]),t._v(" "),e("li",[t._v("Identité")])])]),t._v(" "),e("li",{staticClass:"py-6 px-10 mt-4 rounded-xl shadow-md bg-c-red-3 flex flex-col items-center md:mr-4 lg:ml-10"},[e("h3",{staticClass:"font-bold text-xl text-center mb-1"},[t._v("\n          Soigner une addiction\n        ")]),t._v(" "),e("ul",{staticClass:"list-disc pl-6"},[e("li",[t._v("Masturbation")]),t._v(" "),e("li",[t._v("Pornographie")]),t._v(" "),e("li",[t._v("Pratiques sexuelles")]),t._v(" "),e("li",[t._v("Sexualités diverses")])])])]),t._v(" "),e("ul",{staticClass:"flex flex-col items-center text-gray-100 md:items-end mt-4 md:mt-0"},[e("li",{staticClass:"py-6 px-10 mb-4 md:mb-0 md:mt-4 rounded-xl shadow-md bg-c-violet-1 flex flex-col items-center md:ml-4 md:order-1"},[e("h3",{staticClass:"font-bold text-xl text-center mb-1"},[t._v("\n          Remédier à un dysfonctionnement sexuel\n        ")]),t._v(" "),e("ul",{staticClass:"list-disc pl-6"},[e("li",[t._v("Perte érection")]),t._v(" "),e("li",[t._v("Gestion éjaculation")]),t._v(" "),e("li",[t._v("Anorgasmie")]),t._v(" "),e("li",[t._v("Vaginisme")]),t._v(" "),e("li",[t._v("Douleurs")]),t._v(" "),e("li",[t._v("Blocage")])])]),t._v(" "),e("li",{staticClass:"py-6 px-10 mt-4 md:mt-0 md:mb-4 rounded-xl shadow-md bg-c-red-3 flex flex-col items-center md:ml-4 lg:mr-16"},[e("h3",{staticClass:"font-bold text-xl text-center mb-1"},[t._v("\n          Améliorer sa satisfaction sexuelle\n        ")]),t._v(" "),e("ul",{staticClass:"list-disc pl-6"},[e("li",[t._v("Plaisir")]),t._v(" "),e("li",[t._v("Désir")]),t._v(" "),e("li",[t._v("Relation")]),t._v(" "),e("li",[t._v("Orgasme")]),t._v(" "),e("li",[t._v("Perturbation")]),t._v(" "),e("li",[t._v("Variation")]),t._v(" "),e("li",[t._v("Intensité")]),t._v(" "),e("li",[t._v("Érotisme")])])])])])])}),[],!1,null,null,null).exports,A={name:"SectionSyntheseDeLApproche",components:{AppSection:_},computed:{section:function(){return this.$store.getters.sections.row2[0]}}},S=Object(l.a)(A,(function(){var t=this,e=t._self._c;return e("app-section",{attrs:{id:t.section.id,title:t.section.title,image:t.section.image,"bg-color":t.section.alternateBgColor||t.section.bgColor,"fg-color":t.section.alternateFgColor||t.section.fgColor}},[e("p",{staticClass:"drop-cap"},[t._v("\n    La démarche sexocorporelle se veut "),e("strong",[t._v("bienveillante")]),t._v(" ; elle\n    se base sur les acquis et les limites de la personne. Les outils\n    thérapeutiques sont d'ordre verbal (entretien de consultation) et corporel\n    (programme d'exercices à réaliser à la maison).\n  ")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n    Une évaluation précise du fonctionnement de la personne intéressée\n    permettra l'établissement d'un diagnostic. Il sera alors possible de lui\n    restituer la logique et la compréhension de son comportement dans la\n    sphère de sa sexualité. En déterminant précisément sa demande, un plan de\n    traitement sera proposé afin de développer de nouvelles habiletés\n    corporelles, sensorielles ou émotionnelles.\n  ")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n    L'approche sexocorporelle a été créée il y a une cinquantaine d'années au\n    Québec par le Dr Jean-Yves Desjardins. La distinction entre santé mentale\n    et santé sexuelle a permis son développement. C'est une sexologie\n    intégrative, construite à partir de connaissances et d'observations de la\n    réalité. Elle étudie le corps explicite (observable) et le corps implicite\n    (émotions, perceptions et mentalisations) qui sont interactifs et\n    indissociables.\n  ")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n    Les protocoles de traitement offrent de nouvelles ressources et\n    améliorations afin d'aider les êtres humains à mieux vivre leur sexualité\n    et leur vie amoureuse."),e("br"),t._v("\n    Le sexocorporel reconnaît la notion de santé sexuelle qui ancre ses bases\n    autour de cinq axes de la sexualité humaine :\n  ")]),t._v(" "),e("ul",{staticClass:"list-disc my-6 pl-6"},[e("li",{staticClass:"my-3"},[t._v("\n      Les composantes FONDAMENTALES"),e("br"),t._v("\n      Identité chromosomique, identité de genre, réflexes sexuels\n    ")]),t._v(" "),e("li",{staticClass:"my-3"},[t._v("\n      Les composantes PHYSIOLOGIQUES"),e("br"),t._v("\n      Capacité à ressentir son corps, sources, modes et courbes d'excitation\n    ")]),t._v(" "),e("li",{staticClass:"my-3"},[t._v("\n      Les composantes COGNITIVES"),e("br"),t._v("\n      Système de pensées, connaissances, croyances, idéologies, jugements de\n      valeur\n    ")]),t._v(" "),e("li",{staticClass:"my-3"},[t._v("\n      Les composantes PERSONNELLES"),e("br"),t._v("\n      Désir, imaginaire, assertivité, intensité, codes en lien avec la\n      sexualité\n    ")]),t._v(" "),e("li",{staticClass:"my-3"},[t._v("\n      Les composantes RELATIONNELLES"),e("br"),t._v("\n      Sentiment amoureux, communication, séduction, habiletés érotiques\n    ")])])])}),[],!1,null,null,null).exports;n(29),n(50),n(146),n(68);var j={name:"AppSection",props:{title:{type:String,required:!1},date:{type:String,required:!0},image:{type:String,required:!0},lightImage:{type:Boolean,required:!0}}},L=Object(l.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"slide w-full flex-shrink-0 flex justify-center"},[e("section",{staticClass:"relative bg-gray-100 text-gray-900 rounded-lg shadow-md mx-2 sm:mx-12 w-full overflow-hidden"},[e("div",{staticClass:"tile-background h-76",style:"background-image: url(".concat(t.image,")")}),t._v(" "),e("div",{class:"absolute top-0 w-full h-70 ".concat(t.lightImage?"bg-gradient-corner-light":"bg-gradient-corner-dark")}),t._v(" "),e("span",{class:"absolute top-0 w-full text-right font-bold p-8 ".concat(t.lightImage?"text-gray-900":"text-gray-100"),domProps:{textContent:t._s(t.date)}}),t._v(" "),e("div",{staticClass:"p-8 pb-16"},[t.title?e("h3",{staticClass:"font-heading text-2xl text-c-violet-3 text-center mb-8",domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t._t("default")],2)])])}),[],!1,null,null,null).exports,O={name:"ActualiteTeoignage0323",components:{AppActualite:L},computed:{actualite:function(){return this.$store.getters.actualites.get("temoignage-03-23")}}},k={name:"ActualiteCitation0623",components:{AppActualite:L},computed:{actualite:function(){return this.$store.getters.actualites.get("citation-06-23")}}},I={name:"ActualiteCitation0923",components:{AppActualite:L},computed:{actualite:function(){return this.$store.getters.actualites.get("citation-09-23")}}},P={name:"ActualiteTeoignage0224",components:{AppActualite:L},computed:{actualite:function(){return this.$store.getters.actualites.get("temoignage-02-24")}}},D={name:"ActualiteCitation0424",components:{AppActualite:L},computed:{actualite:function(){return this.$store.getters.actualites.get("citation-04-24")}}},T={name:"ActualiteCitation1024",components:{AppActualite:L},computed:{actualite:function(){return this.$store.getters.actualites.get("citation-10-24")}}},E={name:"ActualiteCitation0125",components:{AppActualite:L},computed:{actualite:function(){return this.$store.getters.actualites.get("citation-01-25")}}},F={name:"SectionActualites",components:{AppSection:_,ActualiteTemoignage0323:Object(l.a)(O,(function(){var t=this,e=t._self._c;return e("app-actualite",{attrs:{id:t.actualite.id,title:t.actualite.title,date:t.actualite.date,image:t.actualite.image,"light-image":t.actualite.lightImage}},[e("p",{staticClass:"flex flex-col mb-8"},[e("span",{staticClass:"mb-4"},[t._v("\n      Suite à une sexualité insatisfaisante avec mon partenaire du à un manque\n      de désir et des pannes érectiles, les entretiens avec Mme Charmillot ont\n      été bénéfiques en tous points. Je me suis sentie écoutée avec\n      bienveillance.\n    ")]),t._v(" "),e("span",[t._v("\n      Grâce au conseils et à l’aide apportée, j'ai retrouvé une sexualité\n      épanouie et j'ai osé m'ouvrir à d’autres formes de plaisir."),e("br"),t._v("Mon\n      partenaire et moi sommes très heureux. "),e("br"),t._v("Je me félicite d’avoir\n      consulté "),e("span",{staticClass:"font-bold"},[t._v("C'XOLOGUE")]),t._v(".\n    ")]),t._v(" "),e("span",{staticClass:"font-bold italic text-right mt-2"},[t._v("Nouvelle vie")])])])}),[],!1,null,null,null).exports,ActualiteCitation0623:Object(l.a)(k,(function(){var t=this,e=t._self._c;return e("app-actualite",{attrs:{id:t.actualite.id,title:t.actualite.title,date:t.actualite.date,image:t.actualite.image,"light-image":t.actualite.lightImage}},[e("div",{staticClass:"flex justify-center italic"},[e("p",{staticClass:"flex flex-col leading-9 text-c-red-3 text-lg mt-4"},[e("span",[t._v("L'érotisme c'est d'offrir au corps")]),t._v(" "),e("span",[t._v("Le langage des sens")]),t._v(" "),e("span",[t._v("La légèreté de l'âme")]),t._v(" "),e("span",[t._v("Et la volupté de l'esprit")])])])])}),[],!1,null,null,null).exports,ActualiteCitation0923:Object(l.a)(I,(function(){var t=this,e=t._self._c;return e("app-actualite",{attrs:{id:t.actualite.id,title:t.actualite.title,date:t.actualite.date,image:t.actualite.image,"light-image":t.actualite.lightImage}},[e("p",{staticClass:"flex flex-col mb-8"},[e("span",{staticClass:"font-bold italic text-center"},[t._v("\n      « Le prochain défi sera sans doute de replacer la sexualité dans son contexte qui n'est pas celui d'une performance, mais d'un partage, c'est-à-dire l'expression de l'intimité d'un couple. »\n    ")]),t._v(" "),e("span",{staticClass:"text-right mt-2"},[t._v("Jean-Paul Mialet")])])])}),[],!1,null,null,null).exports,ActualiteTemoignage0224:Object(l.a)(P,(function(){var t=this,e=t._self._c;return e("app-actualite",{attrs:{id:t.actualite.id,title:t.actualite.title,date:t.actualite.date,image:t.actualite.image,"light-image":t.actualite.lightImage}},[e("p",{staticClass:"flex flex-col mb-8"},[e("span",{staticClass:"mb-4"},[t._v("\n      Grâce à ce suivi, j'ai appris à faire connaissance avec moi-même.\n    ")]),t._v(" "),e("span",{staticClass:"mb-4"},[t._v("\n      J'ai appris à m'écouter, à me parler, à me libérer. J'ai appris que ça\n      peut être ok. J'ai appris à dire oui à la vitalité, oui à ma sexualité.\n    ")]),t._v(" "),e("span",[t._v("Un grand merci.")]),t._v(" "),e("span",{staticClass:"text-right mt-2"},[t._v("- Charlotte, 24 ans")])])])}),[],!1,null,null,null).exports,ActualiteCitation0424:Object(l.a)(D,(function(){var t=this,e=t._self._c;return e("app-actualite",{attrs:{id:t.actualite.id,title:t.actualite.title,date:t.actualite.date,image:t.actualite.image,"light-image":t.actualite.lightImage}},[e("p",{staticClass:"flex flex-col mb-8"},[e("span",{staticClass:"font-bold italic text-center"},[t._v("« Peindre, c'est réaliser l'acte sexuel. Sauf qu'on se sert d'un\n      pinceau. »")]),t._v(" "),e("span",{staticClass:"text-right"},[t._v("Bernard Lorjou")])])])}),[],!1,null,null,null).exports,ActualiteCitation1024:Object(l.a)(T,(function(){var t=this,e=t._self._c;return e("app-actualite",{attrs:{id:t.actualite.id,title:t.actualite.title,date:t.actualite.date,image:t.actualite.image,"light-image":t.actualite.lightImage}},[e("div",{staticClass:"flex justify-center italic"},[e("p",{staticClass:"leading-9 text-c-violet-1 text-lg mt-4 text-center"},[t._v("\n      Un mode d’excitation « en vague » aide à atteindre un orgasme dans la\n      volupté et la fluidité.\n    ")])])])}),[],!1,null,null,null).exports,ActualiteCitation0125:Object(l.a)(E,(function(){var t=this,e=t._self._c;return e("app-actualite",{attrs:{id:t.actualite.id,title:t.actualite.title,date:t.actualite.date,image:t.actualite.image,"light-image":t.actualite.lightImage}},[e("div",{staticClass:"flex justify-center italic"},[e("p",{staticClass:"leading-9 text-lg mt-4 text-center"},[t._v("\n      Tout comme un chemin de neige se dévoile pas à pas,"),e("br"),t._v(" "),e("span",{staticClass:"text-blue-500"},[t._v("la sexualité\n      positive")]),t._v(" encourage une découverte progressive de soi et de l'autre.\n    ")])])])}),[],!1,null,null,null).exports},data:function(){return{current:1,ratio:0}},mounted:function(){var t=this;this.ratio=this.$refs.scroller.scrollWidth/this.numActualites,window.onresize=function(){t.ratio=t.$refs.scroller.scrollWidth/t.numActualites},this.setFromHash(this.$route.hash);this.$refs.scroller.addEventListener("touchend",(function(){setTimeout((function(){var e=Math.round(t.$refs.scroller.scrollLeft/t.ratio);t.current=e+1,t.setToHash()}),500)}),{passive:!0})},methods:{setFromHash:function(t){if(t.startsWith("#actualite-")){var e=parseInt(t.replace("#actualite-",""));isNaN(e)||(this.current=e,this.scrollToCurrent())}},setToHash:function(t){var e="#actualite-".concat(this.current);history.replaceState({},"",e)},previous:function(){var t=this.current-2;t<0&&(t=this.numActualites+t),this.current=t%this.numActualites+1,this.scrollToCurrent()},next:function(){this.current=this.current%this.numActualites+1,this.scrollToCurrent()},goTo:function(i){this.current=i,this.scrollToCurrent()},scrollToCurrent:function(){this.$refs.scroller.scrollTo({left:(this.current-1)*this.ratio,behavior:"smooth"}),this.setToHash()},shouldBeFullSize:function(i){return function(i,t,e){if(e<=3)return!0;if(0===t&&i<3)return!0;var n=e-1;return t===n&&i>n-3||(i>t?i-t<=1:t-i<=1)}(i-1,this.current-1,this.numActualites)}},computed:{section:function(){return this.$store.getters.sections.row2[1]},numActualites:function(){return this.$store.getters.actualites.size},singleActualite:function(){return this.numActualites<=1}}},$={name:"SectionPrendreContact",data:function(){return{validated:!1}},methods:{submit:function(t){if(this.validated)return!0;t.preventDefault();var e=t.target[5].checked;return t.target[6].checked||!e?(window.location=this.robotReturnAddress,!1):(this.validated=!0,this.$refs.form.action="https://contact.cxologue.ch/forms/cxologue_contact_form",this.$refs.form.submit(),!1)}},computed:{section:function(){return this.$store.getters.sections.row2[2]},robotReturnAddress:function(){return"".concat("undefined"!=typeof location?location.origin:"https://cxologue.ch","/?human#prendre-contact")}}},J={name:"Index",components:{AppHeader:o,AppMenu:m,AppForground:d,SectionAQuoiSertLaSexologie:x,SectionCatherineCharmillot:C,SectionMotifsDeConsultation:y,SectionSyntheseDeLApproche:S,SectionActualites:Object(l.a)(F,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full mb-16 lg:mb-8"},[e("app-section",{staticClass:"mb-2 lg:mb-0",attrs:{id:t.section.id,title:t.section.title,image:t.section.image,"bg-color":t.section.alternateBgColor||t.section.bgColor,"fg-color":t.section.alternateFgColor||t.section.fgColor,"min-height-screen":!1,"padding-bottom":!1}},[e("div",{staticClass:"w-full sm:w-120 mx-auto flex justify-between items-center select-none"},[e("button",{staticClass:"material-icons text-6xl disabled:text-gray-500",attrs:{"aria-label":"Actualité précédente",title:"Actualité précédente",disabled:t.singleActualite},on:{click:t.previous}},[t._v("\n        arrow_left\n      ")]),t._v(" "),e("div",{staticClass:"flex items-center"},t._l(t.numActualites,(function(i){return e("a",{key:i,class:"material-icons py-4 sm:px-4 ".concat(t.current===i?"text-gray-900":"text-gray-500"," ").concat(t.shouldBeFullSize(i)?"px-2-5":"text-2xs px-1 sm:text-base"),attrs:{"aria-label":"Accéder à l'actualité ".concat(i),title:"Accéder à l'actualité ".concat(i),href:"#actualite-".concat(i)},on:{click:function(e){e.preventDefault()||t.goTo(i)}}},[t._v("lens")])})),0),t._v(" "),e("button",{staticClass:"material-icons text-6xl disabled:text-gray-500",attrs:{"aria-label":"Actualité suivante",title:"Actualité suivante",disabled:t.singleActualite},on:{click:t.next}},[t._v("\n        arrow_right\n      ")])])]),t._v(" "),e("div",{staticClass:"relative sm:w-120 mx-auto"},[e("div",{staticClass:"absolute w-full h-full transparent-borders z-10 pointer-events-none"}),t._v(" "),e("div",{ref:"scroller",staticClass:"slider w-full flex overflow-x-auto"},[e("actualite-citation-01-25"),t._v(" "),e("actualite-citation-10-24"),t._v(" "),e("actualite-citation-04-24"),t._v(" "),e("actualite-temoignage-02-24"),t._v(" "),e("actualite-citation-09-23"),t._v(" "),e("actualite-citation-06-23")],1)])],1)}),[],!1,null,null,null).exports,SectionPrendreContact:Object(l.a)($,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sm:p-2 lg:p-8 xl:px-40 my-16 lg:my-8 z-10",attrs:{id:t.section.id}},[e("a",{attrs:{href:"#".concat(t.section.id)}},[e("h2",{staticClass:"font-heading text-2xl text-center mt-2 mb-4"},[t._v("\n      Prendre contact par téléphone et WhatsApp\n    ")])]),t._v(" "),t._m(0),t._v(" "),e("h2",{staticClass:"font-heading text-2xl text-center mt-12 mb-4"},[t._v("\n    Formulaire de contact\n  ")]),t._v(" "),e("form",{ref:"form",staticClass:"flex flex-col mx-2 md:w-160 md:mx-auto placeholder-gray-750",attrs:{method:"post",action:"#"},on:{submit:t.submit}},[e("input",{staticClass:"py-2 px-4 rounded-lg shadow-sm mb-2",attrs:{"aria-label":"Nom",type:"text",name:"lastname",id:"lastname",placeholder:"Nom *",required:""}}),t._v(" "),e("input",{staticClass:"py-2 px-4 rounded-lg shadow-sm mb-2",attrs:{"aria-label":"Prénom",type:"text",name:"firstname",id:"firstname",placeholder:"Prénom *",required:""}}),t._v(" "),e("input",{staticClass:"py-2 px-4 rounded-lg shadow-sm mb-2",attrs:{"aria-label":"Email",type:"email",name:"mail",id:"mail",placeholder:"Email *",required:""}}),t._v(" "),e("input",{staticClass:"py-2 px-4 rounded-lg shadow-sm mb-2",attrs:{"aria-label":"Téléphone",type:"tel",name:"phone",id:"phone",placeholder:"Téléphone"}}),t._v(" "),e("textarea",{staticClass:"py-2 px-4 rounded-lg shadow-sm mb-2",attrs:{"aria-label":"Message",name:"message",id:"message",rows:"10",placeholder:"Message *",required:""}}),t._v(" "),e("span",{staticClass:"text-gray-800"},[t._v("Afin de limiter le spam, merci de cocher ce qui convient")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),e("h2",{staticClass:"font-heading text-2xl text-center mt-12 mb-4"},[t._v("Consultations")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)])}),[function(){var t=this,e=t._self._c;return e("a",{staticClass:"rounded-lg bg-c-violet-3 p-3 shadow-md text-gray-100 flex items-center justify-center mx-auto max-w-full w-48",attrs:{href:"tel:+41775027543"}},[e("span",{staticClass:"material-icons select-none"},[t._v("phone")]),t._v(" "),e("span",{staticClass:"font-bold ml-4"},[t._v("077 502 75 43")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center"},[e("input",{attrs:{type:"checkbox",name:"checkbox-1",id:"checkbox-1"}}),t._v(" "),e("label",{staticClass:"ml-2 select-none",attrs:{for:"checkbox-1"}},[t._v("Cochez cette case si vous êtes un humain")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center mb-2"},[e("input",{attrs:{type:"checkbox",name:"checkbox-2",id:"checkbox-2"}}),t._v(" "),e("label",{staticClass:"ml-2 select-none",attrs:{for:"checkbox-2"}},[t._v("Cochez cette case si vous êtes un robot")])])},function(){var t=this,e=t._self._c;return e("p",[e("span",{staticClass:"text-gray-800"},[t._v("Les champs marqués d'un * sont requis.")]),e("br"),t._v("\n      Je prendrai contact avec vous aussi tôt que possible.\n    ")])},function(){var t=this._self._c;return t("span",{staticClass:"text-red-600"},[t("noscript",[this._v("\n        Javascript est requis pour soumettre le formulaire !\n      ")])])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"rounded-lg bg-c-violet-3 p-3 shadow-md text-gray-100 flex items-center justify-center mx-auto max-w-full w-40 select-none mt-4",attrs:{type:"submit"}},[e("span",{staticClass:"material-icons"},[t._v("send")]),t._v(" "),e("span",{staticClass:"font-bold ml-4"},[t._v("Envoyer")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-2 md:w-160 md:mx-auto"},[e("p",[e("strong",[t._v("Consultations sur rendez-vous dans mon cabinet privé, installé dans\n        un centre de thérapies, à Delémont,\n        "),e("span",{staticClass:"text-sm"},[t._v("Jura suisse")])]),t._v("."),e("br"),t._v("\n      Place de parc à disposition."),e("br"),t._v("\n      À 15 minutes à pied de la gare."),e("br"),t._v("\n      Tarif préférentiel pour petit budget.\n    ")]),t._v(" "),e("br"),t._v(" "),e("p",[t._v("\n      Catherine Charmillot"),e("br"),t._v("\n      Sexologue"),e("br"),t._v("\n      Jolimont 30 (1er étage)"),e("br"),t._v("\n      2800 Delémont\n    ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap justify-center items-start gap-4 mt-8 mx-2"},[e("img",{staticClass:"rounded-lg shadow-md md:h-100 w-auto",attrs:{src:"/images/cabinet-01.jpg",alt:"Présentation du Cabinet 1"}}),t._v(" "),e("img",{staticClass:"rounded-lg shadow-md md:h-100 w-auto",attrs:{src:"/images/cabinet-02.jpg",alt:"Présentation du Cabinet 2"}}),t._v(" "),e("img",{staticClass:"rounded-lg shadow-md md:h-100 w-auto",attrs:{src:"/images/cabinet-03.jpg",alt:"Présentation du Cabinet 3"}})])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"bg-gray-400 map-image flex items-end justify-center rounded-lg shadow-md h-100 my-4 md:mt-8 mx-2 md:w-160 md:mx-auto",attrs:{href:"https://maps.app.goo.gl/8edeuwmVmcPWpnkz9",rel:"noreferrer",target:"_blank","aria-label":"Emplacement sur la carte"}},[e("div",{staticClass:"rounded-lg bg-c-violet-3 p-3 mb-8 shadow-lg text-gray-100 text-center flex items-center justify-center max-w-full w-56 select-none"},[e("span",{staticClass:"material-icons"},[t._v("directions")]),t._v(" "),e("span",{staticClass:"font-bold ml-4"},[t._v("Voir sur Google Maps")])])])}],!1,null,null,null).exports,AppFooter:Object(l.a)({},(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"relative w-full h-screen"},[e("svg",{staticClass:"absolute top-0 w-full drop-shadow-lg rotate-half -mt-px",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 163"}},[e("path",{staticStyle:{fill:"#e0e0e0","fill-opacity":"1"},attrs:{d:"m 0,37.169735 30,21.662986 c 30,21.895301 90,64.872799 150,80.553789 60,15.68098 120,2.90388 180,-15.50675 60,-18.7591 120,-43.151738 180,-49.54029 60,-6.388541 120,6.388552 180,0 60,-6.388541 120,-30.781183 180,-37.169735 60,-6.388541 120,6.388552 180,21.662986 60,15.506749 120,34.091617 180,24.799188 60,-9.292439 120,-46.462174 150,-65.047041 L 1440,0 v 167.26381 h -30 c -30,0 -90,0 -150,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -150,0 H 0 Z"}})]),t._v(" "),e("div",{staticClass:"fixed top-0 left-0 w-full h-full footer-image z-underworld mt-px"}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full flex flex-col items-center justify-between py-12"},[e("img",{staticClass:"w-2/3 md:w-100 mx-12 select-none mt-12 lg:mt-48",attrs:{src:"/images/logo-colors.svg",alt:"C'XOLOGUE"}}),t._v(" "),e("p",{staticClass:"text-center w-2/3 lg:w-160 text-gray-100 text-shadow-md"},[t._v("\n      © 2024 - Catherine Charmillot"),e("br"),t._v("\n      Sauf indication contraire, toutes les images présentes sur ce site sont\n      la propriété de Catherine Charmillot ou proviennent du domaine\n      public."),e("br"),e("br"),t._v("\n      Ce site journalise vos visites de façon entièrement anonyme et\n      uniquement à des fins de statistique. Il respecte le paramètre «\n      Interdire le suivi » de votre navigateur.\n    ")])])}],!1,null,null,null).exports}},M=Object(l.a)(J,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"w-full relative"},[e("div",{staticClass:"w-full h-screen header-image absolute top-0 left-0 bg-fixed"}),t._v(" "),e("app-header"),t._v(" "),e("app-forground",[e("app-menu"),t._v(" "),e("section-a-quoi-sert-la-sexologie"),t._v(" "),e("section-catherine-charmillot"),t._v(" "),e("section-motifs-de-consultation"),t._v(" "),e("section-synthese-de-l-approche"),t._v(" "),e("section-actualites"),t._v(" "),e("section-prendre-contact")],1),t._v(" "),e("app-footer"),t._v(" "),e("img",{staticStyle:{border:"0"},attrs:{src:"https://analytics.naito.one/matomo.php?idsite=3&rec=1&action_name=Index",alt:""}})],1)}),[],!1,null,null,null);e.default=M.exports}}]);