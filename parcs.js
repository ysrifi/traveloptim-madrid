/* =========================================================
   TRAVELOPTIM MADRID — PARCS ET JARDINS
========================================================= */

/*
  SOMMAIRE

  1. Real Jardín Botánico
  2. Jardins de Sabatini
  3. Jardins du Campo del Moro
  4. Casa de Campo
  5. Parque del Oeste
  6. Jardines de las Vistillas
  7. Madrid Río
  8. Quinta de la Fuente del Berro
  9. Jardines de El Capricho
*/


const parcs = [


  // =========================================================
  // 1. REAL JARDÍN BOTÁNICO
  // =========================================================

  {
    id: "real-jardin-botanico",

    coordinates: {
      lat: 40.4111064,
      lng: -3.6911267
    },

    name: {
      fr: "Real Jardín Botánico",
      en: "Royal Botanic Garden"
    },

    image:
      "images/lieux/real-jardin-botanico.webp",

    photo: {
      author: "dalbera from Paris, France",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Real_Jardin_Botanico_%28Madrid%29_%284657020233%29.jpg"
    },

    district: {
      fr: "Paseo del Arte",
      en: "Paseo del Arte"
    },

    metro:
      "Estación del Arte (L1) · Banco de España (L2)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours"
    },

    price: {
      type: "link",
      fr: "Voir tarifs",
      en: "See prices"
    },

    officialUrl:
      "https://rjb.csic.es/el-jardin/guia-practica/",

    description: {
      fr: "Jardin botanique historique situé à côté du Prado, réunissant plus de 5 000 espèces végétales, des serres, des collections scientifiques et plusieurs parcours thématiques.",
      en: "A historic botanical garden beside the Prado, bringing together more than 5,000 plant species, greenhouses, scientific collections and several themed routes."
    },

    highlights: {
      fr: [
        "Serre Santiago Castroviejo",
        "Terrasses botaniques",
        "Arbres remarquables",
        "Route andalouse"
      ],
      en: [
        "Santiago Castroviejo Greenhouse",
        "Botanical terraces",
        "Remarkable trees",
        "Andalusian Route"
      ]
    },

    tip: {
      fr: "Ne manquez pas la serre Santiago Castroviejo : elle fait passer du désert aux milieux subtropicaux puis tropicaux. Le jardin se combine parfaitement avec le Museo del Prado juste à côté.",
      en: "Don't miss the Santiago Castroviejo Greenhouse: it takes you from desert to subtropical and tropical environments. The garden combines perfectly with the Prado Museum next door."
    }
  },


  // =========================================================
  // 2. JARDINS DE SABATINI
  // =========================================================

  {
    id: "jardines-de-sabatini",

    coordinates: {
      lat: 40.420332,
      lng: -3.7140039
    },

    name: {
      fr: "Jardins de Sabatini",
      en: "Sabatini Gardens"
    },

    image:
      "images/lieux/jardines-de-sabatini.webp",

    photo: {
      author: "Enric",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:230_Jardines_de_Sabatini_i_fa%C3%A7ana_nord_del_Palacio_Real_(Madrid),_des_de_la_Calle_de_Bail%C3%A9n.jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Madrid de los Austrias"
    },

    metro:
      "Ópera (L2, L5, R) · Plaza de España (L2, L3, L10)",

    hours: {
      type: "text",
      fr: "Ouverts tous les jours",
      en: "Open daily"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl: "",

    description: {
      fr: "Jardins classiques aménagés au XXe siècle à l’emplacement des anciennes écuries royales, juste devant la façade nord du Palacio Real.",
      en: "Classical gardens created in the 20th century on the site of the former royal stables, directly in front of the Royal Palace's north façade."
    },

    highlights: {
      fr: [
        "Façade nord du Palacio Real",
        "Bassin rectangulaire",
        "Haies géométriques",
        "Statues royales"
      ],
      en: [
        "North façade of the Royal Palace",
        "Rectangular pond",
        "Geometric hedges",
        "Royal statues"
      ]
    },

    tip: {
      fr: "Placez-vous près du bassin central pour cadrer les jardins géométriques avec le Palacio Real en arrière-plan. La lumière de fin de journée y est particulièrement intéressante.",
      en: "Stand near the central pond to frame the geometric gardens with the Royal Palace behind them. Late-afternoon light is particularly attractive here."
    }
  },


  // =========================================================
  // 3. JARDINS DU CAMPO DEL MORO
  // =========================================================

  {
    id: "jardines-campo-del-moro",

    coordinates: {
      lat: 40.4182622,
      lng: -3.7172954
    },

    name: {
      fr: "Jardins du Campo del Moro",
      en: "Campo del Moro Gardens"
    },

    image:
      "images/lieux/jardines-campo-del-moro.webp",

    photo: {
      author: "ECsonka",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0 ES",
      url: "https://commons.wikimedia.org/wiki/File:Campo_del_Moro_04202013_0620.JPG"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Madrid de los Austrias"
    },

    metro:
      "Príncipe Pío (L6, L10, R) · Ópera (L2, L5, R)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl:
      "https://www.patrimonionacional.es/en/visita/campo-del-moro-gardens",

    description: {
      fr: "Grand jardin historique de plus de 20 hectares s’étendant sous la façade occidentale du Palacio Real, avec allées romantiques, fontaines monumentales et vastes perspectives.",
      en: "A historic garden of more than 20 hectares stretching below the western façade of the Royal Palace, with romantic paths, monumental fountains and sweeping views."
    },

    highlights: {
      fr: [
        "Vue sur le Palacio Real",
        "Fuente de las Conchas",
        "Fuente de los Tritones",
        "Roseraie et Chalecito de la Reina"
      ],
      en: [
        "Royal Palace view",
        "Conchas Fountain",
        "Tritons Fountain",
        "Rose Garden and Queen's Chalet"
      ]
    },

    tip: {
      fr: "Cherchez la grande perspective de la Pradera de las Vistas del Sol : les fontaines alignées conduisent directement le regard vers le Palacio Real. Depuis 2026, une partie du tunnel Bonaparte est également accessible.",
      en: "Look for the grand perspective from Pradera de las Vistas del Sol: the aligned fountains lead your eye directly to the Royal Palace. Since 2026, part of the Bonaparte Tunnel is also accessible."
    }
  },


  // =========================================================
  // 4. CASA DE CAMPO
  // =========================================================

  {
    id: "casa-de-campo",

    coordinates: {
      lat: 40.4199024,
      lng: -3.7344028
    },

    name: {
      fr: "Casa de Campo",
      en: "Casa de Campo"
    },

    image:
      "images/lieux/casa-de-campo.webp",

    photo: {
      author: "Max Alexander / PromoMadrid",
      source: "Wikimedia Commons",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:MADRID_060723_MXALX_039.jpg"
    },

    district: {
      fr: "Casa de Campo",
      en: "Casa de Campo"
    },

    metro:
      "Lago (L10) · Casa de Campo (L5, L10) · Batán (L10)",

    hours: {
      type: "text",
      fr: "Ouvert toute l’année",
      en: "Open year-round"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl: "",

    description: {
      fr: "Immense espace naturel à l’ouest de Madrid, autrefois domaine royal, aujourd’hui consacré aux promenades, au sport et aux loisirs autour du lac et de vastes zones boisées.",
      en: "A vast natural area west of Madrid, once a royal estate and now devoted to walking, sports and leisure around its lake and extensive woodland."
    },

    highlights: {
      fr: [
        "Lac de Casa de Campo",
        "Grandes zones boisées",
        "Sentiers pédestres et cyclables",
        "Vues sur le centre de Madrid"
      ],
      en: [
        "Casa de Campo Lake",
        "Extensive woodland",
        "Walking and cycling trails",
        "Views of central Madrid"
      ]
    },

    tip: {
      fr: "Pour une première visite, visez directement le secteur du Lago plutôt que d’essayer d’explorer tout le parc. Depuis ses berges, vous obtenez de belles vues sur la silhouette du centre de Madrid.",
      en: "For a first visit, head straight for the lake area rather than trying to explore the whole park. Its shores offer excellent views of Madrid's central skyline."
    }
  },


  // =========================================================
  // 5. PARQUE DEL OESTE
  // =========================================================

  {
    id: "parque-del-oeste",

    coordinates: {
      lat: 40.4307702,
      lng: -3.7262232
    },

    name: {
      fr: "Parque del Oeste",
      en: "Oeste Park"
    },

    image:
      "images/lieux/parque-del-oeste.webp",

    photo: {
      author: "Manuel Martín Vicente",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_-_parque_del_Oeste.jpg"
    },

    district: {
      fr: "Princesa",
      en: "Princesa"
    },

    metro:
      "Moncloa (L3, L6) · Plaza de España (L2, L3, L10) · Príncipe Pío (L6, L10, R)",

    hours: {
      type: "text",
      fr: "Accès libre · certains jardins ont leurs propres horaires",
      en: "Open access · some gardens have their own opening hours"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl: "",

    description: {
      fr: "Grand parc paysager de près de 100 hectares reliant Moncloa, Plaza de España et Príncipe Pío, avec jardins, monuments et nombreuses zones boisées.",
      en: "A large landscaped park of almost 100 hectares linking Moncloa, Plaza de España and Príncipe Pío, with gardens, monuments and extensive wooded areas."
    },

    highlights: {
      fr: [
        "Rosaleda Ramón Ortiz",
        "Temple de Debod",
        "Zones boisées",
        "Promenades de Pintor Rosales"
      ],
      en: [
        "Ramón Ortiz Rose Garden",
        "Temple of Debod",
        "Wooded areas",
        "Pintor Rosales walks"
      ]
    },

    tip: {
      fr: "Entre mi-avril et septembre, faites un détour par la Rosaleda Ramón Ortiz : elle rassemble environ 20 000 rosiers. Vous pouvez ensuite continuer à pied vers le Templo de Debod.",
      en: "Between mid-April and September, make a detour to the Ramón Ortiz Rose Garden, home to around 20,000 rose bushes. Then continue on foot to the Temple of Debod."
    }
  },


  // =========================================================
  // 6. JARDINS DE LAS VISTILLAS
  // =========================================================

  {
    id: "jardines-de-las-vistillas",

    coordinates: {
      lat: 40.4125885,
      lng: -3.7154567
    },

    name: {
      fr: "Jardins de Las Vistillas",
      en: "Vistillas Gardens"
    },

    image:
      "images/lieux/jardines-de-las-vistillas.webp",

    photo: {
      author: "Concepcion AMAT ORTA…",
      source: "Wikimedia Commons",
      license: "CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:MADRID_VERDE_JARDIN-MIRADOR_DE_LAS_VISTILLAS_VISITA_COMENTADA_-_panoramio_-_Concepcion_AMAT_ORTA%E2%80%A6_(15).jpg"
    },

    district: {
      fr: "La Latina",
      en: "La Latina"
    },

    metro:
      "La Latina (L5) · Ópera (L2, L5, R)",

    hours: {
      type: "text",
      fr: "Accès libre",
      en: "Open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl: "",

    description: {
      fr: "Petit jardin en terrasse de La Latina connu pour ses vues dégagées vers le Manzanares et la Casa de Campo ainsi que pour son atmosphère populaire madrilène.",
      en: "A small terraced garden in La Latina known for its open views towards the Manzanares and Casa de Campo and for its traditional Madrid atmosphere."
    },

    highlights: {
      fr: [
        "Vue sur Casa de Campo",
        "Coucher de soleil",
        "Statue de La Violetera",
        "Terrasses"
      ],
      en: [
        "Views of Casa de Campo",
        "Sunset",
        "La Violetera statue",
        "Terraces"
      ]
    },

    tip: {
      fr: "Cherchez la statue de La Violetera puis gagnez le bord du jardin pour le coucher du soleil. San Francisco el Grande et Plaza de la Paja sont à quelques minutes à pied.",
      en: "Look for the La Violetera statue, then head to the edge of the gardens for sunset. San Francisco el Grande and Plaza de la Paja are only a few minutes away on foot."
    }
  },


  // =========================================================
  // 7. MADRID RÍO
  // =========================================================

  {
    id: "madrid-rio",

    coordinates: {
      lat: 40.3982066,
      lng: -3.7140033
    },

    name: {
      fr: "Madrid Río",
      en: "Madrid Río"
    },

    image:
      "images/lieux/madrid-rio.webp",

    photo: {
      author: "Nicolas Vigier",
      source: "Wikimedia Commons",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_in_May_2017_64_edited.jpg"
    },

    district: {
      fr: "Madrid Río",
      en: "Madrid Río"
    },

    metro:
      "Príncipe Pío (L6, L10, R) · Pirámides (L5) · Marqués de Vadillo (L5) · Legazpi (L3, L6)",

    hours: {
      type: "text",
      fr: "Accès libre",
      en: "Open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl: "",

    description: {
      fr: "Long parc linéaire aménagé sur les deux rives du Manzanares, combinant promenades, pistes cyclables, ponts historiques, aires de jeux et espaces culturels.",
      en: "A long linear park along both banks of the Manzanares, combining walking and cycling paths, historic bridges, playgrounds and cultural spaces."
    },

    highlights: {
      fr: [
        "Puente de Toledo",
        "Puente del Rey",
        "Salón de Pinos",
        "Aires de jeux et plage urbaine"
      ],
      en: [
        "Toledo Bridge",
        "Puente del Rey",
        "Salón de Pinos",
        "Playgrounds and urban beach"
      ]
    },

    tip: {
      fr: "Pour éviter de parcourir inutilement ses nombreux kilomètres, concentrez-vous sur le tronçon Puente del Rey–Puente de Toledo : il combine vues royales, ponts historiques et plusieurs des secteurs les plus intéressants.",
      en: "To avoid covering unnecessary kilometres, focus on the Puente del Rey–Toledo Bridge section: it combines royal views, historic bridges and several of the park's most interesting areas."
    }
  },


  // =========================================================
  // 8. QUINTA DE LA FUENTE DEL BERRO
  // =========================================================

  {
    id: "quinta-fuente-del-berro",

    coordinates: {
      lat: 40.4225602,
      lng: -3.6608515
    },

    name: {
      fr: "Quinta de la Fuente del Berro",
      en: "Fuente del Berro Park"
    },

    image:
      "images/lieux/quinta-fuente-del-berro.webp",

    photo: {
      author: "Cillas",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Fuente_del_Berro.jpg"
    },

    district: {
      fr: "Barrio de Salamanca",
      en: "Barrio de Salamanca"
    },

    metro:
      "O'Donnell (L6)",

    hours: {
      type: "text",
      fr: "Avr.–sept. : 6 h 30–0 h · oct.–mars : 6 h 30–22 h",
      en: "Apr–Sep: 6:30am–midnight · Oct–Mar: 6:30am–10pm"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl: "",

    description: {
      fr: "Ancienne propriété royale devenue un parc paysager de plus de 13 hectares, avec chemins sinueux, escaliers de pierre, cascades, bassins et monuments littéraires.",
      en: "A former royal estate transformed into a landscaped park of more than 13 hectares, with winding paths, stone staircases, waterfalls, ponds and literary monuments."
    },

    highlights: {
      fr: [
        "Cascades et bassins",
        "Monument à Bécquer",
        "Statue de Pouchkine",
        "Ancien petit palais"
      ],
      en: [
        "Waterfalls and ponds",
        "Bécquer Monument",
        "Pushkin statue",
        "Former small palace"
      ]
    },

    tip: {
      fr: "Cherchez les monuments dédiés à Bécquer et Pouchkine en suivant les chemins en pente. Si vous visitez Las Ventas, le parc constitue une bonne pause verte dans le même secteur.",
      en: "Look for the monuments to Bécquer and Pushkin along the sloping paths. If you're visiting Las Ventas, the park makes a good green break in the same area."
    }
  },


  // =========================================================
  // 9. JARDINS DE EL CAPRICHO
  // =========================================================

  {
    id: "jardines-el-capricho",

    coordinates: {
      lat: 40.4558582,
      lng: -3.5991509
    },

    name: {
      fr: "Jardins de El Capricho",
      en: "El Capricho Park"
    },

    image:
      "images/lieux/jardines-el-capricho.webp",

    photo: {
      author: "M.Peinado from Alcalá de Henares, España",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:006980_-_Madrid_(8211350613).jpg"
    },

    district: {
      fr: "Alameda de Osuna",
      en: "Alameda de Osuna"
    },

    metro:
      "El Capricho (L5)",

    hours: {
      type: "text",
      fr: "Sam., dim. et jours fériés uniquement · horaires saisonniers",
      en: "Sat, Sun and public holidays only · seasonal opening hours"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl: "",

    description: {
      fr: "Jardin historique créé au XVIIIe siècle par les ducs d’Osuna, mêlant jardin français, jardin italien et paysage anglais dans un domaine rempli de pavillons et de curiosités.",
      en: "A historic garden created in the 18th century by the Dukes of Osuna, combining French, Italian and English garden styles in an estate filled with pavilions and curiosities."
    },

    highlights: {
      fr: [
        "Temple de Bacchus",
        "Labyrinthe",
        "Palais des ducs d’Osuna",
        "Bunker de la Guerre civile"
      ],
      en: [
        "Temple of Bacchus",
        "Maze",
        "Palace of the Dukes of Osuna",
        "Civil War bunker"
      ]
    },

    tip: {
      fr: "Ne venez pas en semaine : le parc n’ouvre que les week-ends et jours fériés. Si le bunker vous intéresse, sa visite guidée gratuite nécessite une réservation séparée.",
      en: "Don't come on a weekday: the park opens only on weekends and public holidays. If you want to see the bunker, its free guided tour requires a separate reservation."
    }
  }

];