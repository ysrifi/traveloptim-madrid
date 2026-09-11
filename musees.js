/* =========================================================
   TRAVELOPTIM MADRID — DONNÉES DES MUSÉES
========================================================= */

/*
  SOMMAIRE

  1. Galerie des Collections royales
  2. Musée Cerralbo
  3. Musée du Romantisme
  4. Musée naval
  5. CaixaForum Madrid
  6. Musée archéologique national
  7. Musée de l’Amérique
  8. Musée de San Isidro
  9. Musée Lázaro Galdiano
  10. Musée d’Histoire de Madrid
  11. Musée national des Arts décoratifs
  12. Musée national des Sciences naturelles
  13. Musée Geominero
*/


const musees = [


  // =========================================================
  // 1. GALERIE DES COLLECTIONS ROYALES
  // =========================================================

  {
    id: "galeria-colecciones-reales",

    coordinates: {
      lat: 40.4161729,
      lng: -3.7154885
    },

    name: {
      fr: "Galerie des Collections royales",
      en: "Royal Collections Gallery"
    },

    image:
      "images/lieux/galeria-colecciones-reales.webp",

    photo: {
      author: "CarlosVdeHabsburgo",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Coche_de_la_Corona_Real_%28Galer%C3%ADa_de_las_Colecciones_Reales%29.jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Madrid de los Austrias"
    },

    metro:
      "Ópera (L2, L5, R)",

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
      "https://tickets.patrimonionacional.es/en/tickets/galerias-colecciones-reales",

    description: {
      fr: "Musée moderne consacré aux collections de la monarchie espagnole, réunissant peintures, tapisseries, sculptures, mobilier, armures et objets issus des palais royaux.",
      en: "A modern museum devoted to the Spanish monarchy's collections, bringing together paintings, tapestries, sculptures, furniture, armour and objects from the royal palaces."
    },

    highlights: {
      fr: [
        "Collections des Habsbourg",
        "Collections des Bourbons",
        "Carrosse royal",
        "Tapisseries et œuvres des maîtres européens"
      ],
      en: [
        "Habsburg collections",
        "Bourbon collections",
        "Royal carriage",
        "Tapestries and works by European masters"
      ]
    },

    tip: {
      fr: "Commencez au niveau supérieur puis descendez progressivement : le parcours suit ainsi la chronologie des dynasties. À la sortie, vous êtes directement entre le Palacio Real et la Catedral de la Almudena.",
      en: "Start on the upper level and work your way down: this follows the dynasties chronologically. Afterwards, you are directly between the Royal Palace and Almudena Cathedral."
    }
  },


  // =========================================================
  // 2. MUSÉE CERRALBO
  // =========================================================

  {
    id: "museo-cerralbo",

    coordinates: {
      lat: 40.4235527,
      lng: -3.7145202
    },

    name: {
      fr: "Musée Cerralbo",
      en: "Cerralbo Museum"
    },

    image:
      "images/lieux/museo-cerralbo.webp",

    photo: {
      author: "Luis García",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Palacio_del_Marqu%C3%A9s_de_Cerralbo_(Madrid)_01.jpg"
    },

    district: {
      fr: "Princesa",
      en: "Princesa"
    },

    metro:
      "Plaza de España (L2, L3, L10) · Ventura Rodríguez (L3)",

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
      "https://www.cultura.gob.es/mcerralbo/en/visita/horariosytarifas.html",

    description: {
      fr: "Ancienne demeure du marquis de Cerralbo conservée comme une résidence aristocratique de la fin du XIXe siècle, avec mobilier, peintures, armes et objets de collection.",
      en: "The former home of the Marquis of Cerralbo, preserved as a late-19th-century aristocratic residence filled with furniture, paintings, weapons and collectables."
    },

    highlights: {
      fr: [
        "Escalier d’honneur",
        "Salón de Baile",
        "Galería de Pintura",
        "Mobilier et décoration d’origine"
      ],
      en: [
        "Grand staircase",
        "Ballroom",
        "Painting Gallery",
        "Original furniture and decoration"
      ]
    },

    tip: {
      fr: "Ne le visitez pas comme une simple galerie : regardez surtout les pièces comme une maison encore habitée. Combinez ensuite avec Plaza de España et le Templo de Debod, tout proches.",
      en: "Don't visit it like a conventional gallery: look at the rooms as a house that is still lived in. Afterwards, combine it with nearby Plaza de España and the Temple of Debod."
    }
  },


  // =========================================================
  // 3. MUSÉE DU ROMANTISME
  // =========================================================

  {
    id: "museo-del-romanticismo",

    coordinates: {
      lat: 40.4258946,
      lng: -3.6987643
    },

    name: {
      fr: "Musée du Romantisme",
      en: "Museum of Romanticism"
    },

    image:
      "images/lieux/museo-del-romanticismo.webp",

    photo: {
      author: "Javier Perez Montes",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Interior_-_Museo_del_Romanticismo_-_Madrid_06.jpg"
    },

    district: {
      fr: "Chueca",
      en: "Chueca"
    },

    metro:
      "Tribunal (L1, L10) · Alonso Martínez (L4, L5, L10)",

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
      "https://www.esmadrid.com/en/tourist-information/museum-romanticism",

    description: {
      fr: "Maison-musée recréant la vie quotidienne de la bourgeoisie madrilène du XIXe siècle à travers peintures, mobilier, bijoux et objets personnels.",
      en: "A house museum recreating the everyday life of Madrid's 19th-century bourgeoisie through paintings, furniture, jewellery and personal objects."
    },

    highlights: {
      fr: [
        "Salles d’époque",
        "Peintures romantiques",
        "Mobilier du XIXe siècle",
        "Jardín del Magnolio"
      ],
      en: [
        "Period rooms",
        "Romantic paintings",
        "19th-century furniture",
        "Magnolia Garden"
      ]
    },

    tip: {
      fr: "Avant de repartir, descendez dans le Jardín del Magnolio : ce petit jardin intérieur est facile à manquer et offre une vraie pause après la visite des salles.",
      en: "Before leaving, head down to the Magnolia Garden: this small inner garden is easy to miss and offers a pleasant break after touring the rooms."
    }
  },


  // =========================================================
  // 4. MUSÉE NAVAL
  // =========================================================

  {
    id: "museo-naval",

    coordinates: {
      lat: 40.4178665,
      lng: -3.6926342
    },

    name: {
      fr: "Musée naval",
      en: "Naval Museum"
    },

    image:
      "images/lieux/museo-naval.webp",

    photo: {
      author: "Nicolás Pérez",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:16_Museo_Naval_Madrid_Ni.JPG"
    },

    district: {
      fr: "Paseo del Arte",
      en: "Paseo del Arte"
    },

    metro:
      "Banco de España (L2)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours"
    },

    price: {
      type: "free",
      fr: "Gratuit · don volontaire",
      en: "Free · voluntary donation"
    },

    officialUrl:
      "https://armada.defensa.gob.es/ArmadaPortal/page/Portal/ArmadaEspannola/cienciaorgano/prefLang-en/01cienciamuseo--01visita--01informacion-general",

    description: {
      fr: "Musée retraçant l’histoire maritime espagnole à travers maquettes de navires, cartes, instruments nautiques, armes, peintures et objets liés aux grandes explorations.",
      en: "A museum tracing Spain's maritime history through ship models, maps, nautical instruments, weapons, paintings and objects linked to major voyages of exploration."
    },

    highlights: {
      fr: [
        "Carte de Juan de la Cosa",
        "Maquettes de navires",
        "Instruments de navigation",
        "Histoire de la marine espagnole"
      ],
      en: [
        "Juan de la Cosa map",
        "Ship models",
        "Navigation instruments",
        "History of the Spanish Navy"
      ]
    },

    tip: {
      fr: "Cherchez surtout la carte de Juan de la Cosa, réalisée en 1500 et célèbre pour être l’une des premières cartes conservées représentant le continent américain.",
      en: "Make sure you find Juan de la Cosa's 1500 map, famous as one of the earliest surviving maps to depict the American continent."
    }
  },


  // =========================================================
  // 5. CAIXAFORUM MADRID
  // =========================================================

  {
    id: "caixaforum-madrid",

    coordinates: {
      lat: 40.4109726,
      lng: -3.6945781
    },

    name: {
      fr: "CaixaForum Madrid",
      en: "CaixaForum Madrid"
    },

    image:
      "images/lieux/caixaforum-madrid.webp",

    photo: {
      author: "Luis García",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:CaixaForum_Madrid_(Espa%C3%B1a)_01.jpg"
    },

    district: {
      fr: "Paseo del Arte",
      en: "Paseo del Arte"
    },

    metro:
      "Estación del Arte (L1)",

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
      "https://www.esmadrid.com/en/tourist-information/caixaforum-madrid",

    description: {
      fr: "Centre culturel installé dans une ancienne centrale électrique transformée par Herzog & de Meuron, accueillant expositions, conférences, concerts et activités.",
      en: "A cultural centre housed in a former power station transformed by Herzog & de Meuron, hosting exhibitions, talks, concerts and activities."
    },

    highlights: {
      fr: [
        "Architecture Herzog & de Meuron",
        "Bâtiment suspendu",
        "Jardin vertical",
        "Expositions temporaires"
      ],
      en: [
        "Herzog & de Meuron architecture",
        "Suspended building",
        "Vertical garden",
        "Temporary exhibitions"
      ]
    },

    tip: {
      fr: "Même sans visiter une exposition, passez devant le bâtiment pour voir son impressionnante base suspendue et le jardin vertical juste en face. Le Prado est à quelques minutes.",
      en: "Even without seeing an exhibition, stop by to see the building's striking suspended base and the vertical garden opposite. The Prado is only a few minutes away."
    }
  },


  // =========================================================
  // 6. MUSÉE ARCHÉOLOGIQUE NATIONAL
  // =========================================================

  {
    id: "museo-arqueologico-nacional",

    coordinates: {
      lat: 40.4233265,
      lng: -3.6888235
    },

    name: {
      fr: "Musée archéologique national",
      en: "National Archaeological Museum"
    },

    image:
      "images/lieux/museo-arqueologico-nacional.webp",

    photo: {
      author: "Miguel Hermoso Cuesta",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Interior_M.A.N._02.JPG"
    },

    district: {
      fr: "Barrio de Salamanca",
      en: "Barrio de Salamanca"
    },

    metro:
      "Serrano (L4) · Colón (L4)",

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
      "https://www.man.es/man/en/visita.html",

    description: {
      fr: "Grand musée retraçant l’histoire des sociétés de la péninsule Ibérique et présentant également d’importantes collections grecques, romaines, égyptiennes et proche-orientales.",
      en: "A major museum tracing the history of societies on the Iberian Peninsula while also displaying important Greek, Roman, Egyptian and Near Eastern collections."
    },

    highlights: {
      fr: [
        "Dame d’Elche",
        "Trésor de Guarrazar",
        "Mosaïques romaines",
        "Collections égyptiennes"
      ],
      en: [
        "Lady of Elche",
        "Treasure of Guarrazar",
        "Roman mosaics",
        "Egyptian collections"
      ]
    },

    tip: {
      fr: "Si vous manquez de temps, concentrez-vous sur la Dame d’Elche et le Trésor de Guarrazar. La Biblioteca Nacional occupe le même ensemble monumental : observez aussi sa façade en sortant.",
      en: "If you're short on time, focus on the Lady of Elche and the Treasure of Guarrazar. The National Library shares the same monumental complex, so check out its façade afterwards."
    }
  },


  // =========================================================
  // 7. MUSÉE DE L’AMÉRIQUE
  // =========================================================

  {
    id: "museo-de-america",

    coordinates: {
      lat: 40.4382175,
      lng: -3.7220554
    },

    name: {
      fr: "Musée de l’Amérique",
      en: "Museum of the Americas"
    },

    image:
      "images/lieux/museo-de-america.webp",

    photo: {
      author: "Emilio J. Rodríguez Posada",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Museo_de_Am%C3%A9rica_de_Madrid_y_alrededores_en_abril_de_2022_29.jpg"
    },

    district: {
      fr: "Princesa",
      en: "Princesa"
    },

    metro:
      "Moncloa (L3, L6) · Islas Filipinas (L7)",

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
      "https://www.cultura.gob.es/museodeamerica/en/visita.html",

    description: {
      fr: "Musée consacré aux cultures du continent américain, réunissant archéologie précolombienne, art de l’époque coloniale et collections ethnographiques.",
      en: "A museum devoted to the cultures of the American continent, combining pre-Columbian archaeology, colonial-era art and ethnographic collections."
    },

    highlights: {
      fr: [
        "Cultures préhispaniques",
        "Archéologie du Pérou et du Mexique",
        "Art colonial",
        "Collections ethnographiques"
      ],
      en: [
        "Pre-Hispanic cultures",
        "Archaeology of Peru and Mexico",
        "Colonial art",
        "Ethnographic collections"
      ]
    },

    tip: {
      fr: "Le musée est excentré : rentabilisez le déplacement en le combinant avec le Faro de Moncloa et l’Arco de la Victoria, tous situés dans le même secteur.",
      en: "The museum is away from the historic centre, so make the trip worthwhile by combining it with Faro de Moncloa and Arco de la Victoria in the same area."
    }
  },


  // =========================================================
  // 8. MUSÉE DE SAN ISIDRO
  // =========================================================

  {
    id: "museo-de-san-isidro",

    coordinates: {
      lat: 40.4120805,
      lng: -3.7108667
    },

    name: {
      fr: "Musée de San Isidro",
      en: "San Isidro Museum"
    },

    image:
      "images/lieux/museo-de-san-isidro.webp",

    photo: {
      author: "CARLOS TEIXIDOR CADENAS",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Patio_renacentista_del_Museo_de_San_Isidro,_de_Madrid.JPG"
    },

    district: {
      fr: "La Latina",
      en: "La Latina"
    },

    metro:
      "La Latina (L5)",

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
      "https://www.esmadrid.com/en/tourist-information/museo-de-san-isidro-los-origenes-de-madrid",

    description: {
      fr: "Musée municipal consacré aux origines de Madrid, de la Préhistoire jusqu’à l’installation de la cour royale dans la ville au XVIe siècle.",
      en: "A municipal museum devoted to Madrid's origins, from Prehistory to the establishment of the royal court in the city in the 16th century."
    },

    highlights: {
      fr: [
        "Archéologie madrilène",
        "Puits du Miracle",
        "Patio Renaissance",
        "Jardin archéobotanique"
      ],
      en: [
        "Madrid archaeology",
        "Miracle Well",
        "Renaissance courtyard",
        "Archaeobotanical garden"
      ]
    },

    tip: {
      fr: "Ne manquez pas le Pozo del Milagro lié à la légende de San Isidro. À la sortie, Plaza de la Paja et les Jardins du Príncipe de Anglona sont à quelques pas.",
      en: "Don't miss the Miracle Well associated with the legend of San Isidro. Afterwards, Plaza de la Paja and the Príncipe de Anglona Gardens are only steps away."
    }
  },


  // =========================================================
  // 9. MUSÉE LÁZARO GALDIANO
  // =========================================================

  {
    id: "museo-lazaro-galdiano",

    coordinates: {
      lat: 40.4369187,
      lng: -3.6857512
    },

    name: {
      fr: "Musée Lázaro Galdiano",
      en: "Lázaro Galdiano Museum"
    },

    image:
      "images/lieux/museo-lazaro-galdiano.webp",

    photo: {
      author: "Luis García",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Museo_L%C3%A1zaro_Galdiano_(Madrid)_08.jpg"
    },

    district: {
      fr: "Barrio de Salamanca",
      en: "Barrio de Salamanca"
    },

    metro:
      "Rubén Darío (L5) · Núñez de Balboa (L5, L9)",

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
      "https://www.esmadrid.com/en/tourist-information/lazaro-galdiano-foundation-museum",

    description: {
      fr: "Collection privée constituée par José Lázaro Galdiano et présentée dans son ancienne résidence, avec peintures, sculptures, bijoux, armes et arts décoratifs.",
      en: "The private collection assembled by José Lázaro Galdiano, displayed in his former residence and including paintings, sculpture, jewellery, weapons and decorative arts."
    },

    highlights: {
      fr: [
        "Œuvres de Goya",
        "Peintures d’El Greco et Zurbarán",
        "Bijoux et objets précieux",
        "Palacete de Parque Florido"
      ],
      en: [
        "Works by Goya",
        "Paintings by El Greco and Zurbarán",
        "Jewellery and precious objects",
        "Parque Florido mansion"
      ]
    },

    tip: {
      fr: "Si vous aimez Goya, consacrez une attention particulière aux œuvres qui lui sont attribuées avant d’explorer les arts décoratifs. Le musée est beaucoup moins fréquenté que les grands musées du Paseo del Arte.",
      en: "If you like Goya, focus first on the works associated with him before exploring the decorative arts. The museum is usually far quieter than the major Art Walk museums."
    }
  },


  // =========================================================
  // 10. MUSÉE D’HISTOIRE DE MADRID
  // =========================================================

  {
    id: "museo-historia-madrid",

    coordinates: {
      lat: 40.4257367,
      lng: -3.7006623
    },

    name: {
      fr: "Musée d’Histoire de Madrid",
      en: "History Museum of Madrid"
    },

    image:
      "images/lieux/museo-historia-madrid.webp",

    photo: {
      author: "Madrid History Museum",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Museo_de_Historia_de_Madrid-Historia_de_las_colecciones-Porcelanas_2-Sala_de_porcelanas_despu%C3%A9s_de_la_exposici%C3%B3n_Madrid_pintado.jpg"
    },

    district: {
      fr: "Malasaña",
      en: "Malasaña"
    },

    metro:
      "Tribunal (L1, L10)",

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
      "https://www.esmadrid.com/en/tourist-information/museo-de-historia",

    description: {
      fr: "Musée municipal retraçant l’évolution de Madrid depuis son accession au rang de capitale en 1561 jusqu’au début du XXe siècle.",
      en: "A municipal museum tracing Madrid's evolution from its establishment as the capital in 1561 to the beginning of the 20th century."
    },

    highlights: {
      fr: [
        "Maquette de Madrid de 1830",
        "Peintures et plans historiques",
        "Évolution urbaine de Madrid",
        "Façade baroque de Pedro de Ribera"
      ],
      en: [
        "1830 model of Madrid",
        "Historic paintings and maps",
        "Madrid's urban development",
        "Baroque façade by Pedro de Ribera"
      ]
    },

    tip: {
      fr: "Cherchez la grande maquette de Madrid de 1830 : elle permet de reconnaître le Palacio Real, la Plaza Mayor et plusieurs rues du centre avant leurs transformations modernes.",
      en: "Look for the large 1830 model of Madrid: you can identify the Royal Palace, Plaza Mayor and several central streets before their modern transformations."
    }
  },


  // =========================================================
  // 11. MUSÉE NATIONAL DES ARTS DÉCORATIFS
  // =========================================================

  {
    id: "museo-nacional-artes-decorativas",

    coordinates: {
      lat: 40.4179105,
      lng: -3.6898041
    },

    name: {
      fr: "Musée national des Arts décoratifs",
      en: "National Museum of Decorative Arts"
    },

    image:
      "images/lieux/museo-nacional-artes-decorativas.webp",

    photo: {
      author: "Daderot",
      source: "Wikimedia Commons",
      license: "Public domain",
      url: "https://commons.wikimedia.org/wiki/File:Interior_view_-_Museo_Nacional_de_Artes_Decorativas_-_Madrid,_Spain_-_DSC08325.JPG"
    },

    district: {
      fr: "Paseo del Arte",
      en: "Paseo del Arte"
    },

    metro:
      "Banco de España (L2) · Retiro (L2)",

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
      "https://www.cultura.gob.es/mnartesdecorativas/en/visita/horario-tarifas.html",

    description: {
      fr: "Musée consacré à l’évolution des objets et des espaces domestiques, avec mobilier, céramiques, verre, textiles et arts décoratifs du XIVe siècle à nos jours.",
      en: "A museum devoted to the evolution of objects and domestic spaces, with furniture, ceramics, glass, textiles and decorative arts from the 14th century to today."
    },

    highlights: {
      fr: [
        "Mobilier historique",
        "Céramiques et porcelaines",
        "Textiles",
        "Reconstitutions d’intérieurs"
      ],
      en: [
        "Historic furniture",
        "Ceramics and porcelain",
        "Textiles",
        "Reconstructed interiors"
      ]
    },

    tip: {
      fr: "Regardez surtout les salles reconstituées plutôt que les objets isolés : elles montrent comment mobilier et décoration fonctionnaient ensemble. Le Retiro et la Puerta de Alcalá sont tout proches.",
      en: "Focus on the reconstructed rooms rather than isolated objects: they show how furniture and decoration worked together. Retiro Park and Puerta de Alcalá are nearby."
    }
  },


  // =========================================================
  // 12. MUSÉE NATIONAL DES SCIENCES NATURELLES
  // =========================================================

  {
    id: "museo-ciencias-naturales",

    coordinates: {
      lat: 40.4412381,
      lng: -3.6901921
    },

    name: {
      fr: "Musée national des Sciences naturelles",
      en: "National Museum of Natural Sciences"
    },

    image:
      "images/lieux/museo-ciencias-naturales.webp",

    photo: {
      author: "Emilio J. Rodríguez Posada",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Museo_Nacional_de_Ciencias_Naturales_en_febrero_de_2021_59.jpg"
    },

    district: {
      fr: "Chamberí",
      en: "Chamberí"
    },

    metro:
      "Gregorio Marañón (L7, L10) · Nuevos Ministerios (L6, L8, L10)",

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
      "https://www.mncn.csic.es/en/visit-us",

    description: {
      fr: "Grand musée scientifique du CSIC consacré à la biodiversité, la zoologie, la géologie, les fossiles et l’évolution de la vie sur Terre.",
      en: "A major CSIC science museum devoted to biodiversity, zoology, geology, fossils and the evolution of life on Earth."
    },

    highlights: {
      fr: [
        "Squelettes et animaux naturalisés",
        "Minéraux et fossiles",
        "Biodiversité",
        "Évolution humaine et naturelle"
      ],
      en: [
        "Skeletons and taxidermy specimens",
        "Minerals and fossils",
        "Biodiversity",
        "Human and natural evolution"
      ]
    },

    tip: {
      fr: "Le musée est réparti entre espaces de zoologie et de géologie : vérifiez le plan avant de commencer pour ne pas manquer une partie. C’est aussi l’un des musées les plus adaptés aux familles.",
      en: "The museum is divided between zoology and geology areas, so check the map before starting to avoid missing a section. It's also one of Madrid's best museums for families."
    }
  },


  // =========================================================
  // 13. MUSÉE GEOMINERO
  // =========================================================

  {
    id: "museo-geominero",

    coordinates: {
      lat: 40.4421163,
      lng: -3.6996768
    },

    name: {
      fr: "Musée Geominero",
      en: "Geomineral Museum"
    },

    image:
      "images/lieux/museo-geominero.webp",

    photo: {
      author: "Emilio J. Rodríguez Posada",
      source: "Wikimedia Commons",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Museo_Geominero_(34298298894).jpg"
    },

    district: {
      fr: "Chamberí",
      en: "Chamberí"
    },

    metro:
      "Ríos Rosas (L1) · Alonso Cano (L7)",

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
      "https://www.esmadrid.com/en/tourist-information/geomineral-museum",

    description: {
      fr: "Musée scientifique présentant d’importantes collections de minéraux, roches et fossiles dans un spectaculaire bâtiment historique de l’Institut géologique et minier d’Espagne.",
      en: "A science museum displaying major collections of minerals, rocks and fossils inside the spectacular historic headquarters of Spain's Geological and Mining Institute."
    },

    highlights: {
      fr: [
        "Collections de minéraux",
        "Fossiles",
        "Vitrines historiques",
        "Grande verrière du hall"
      ],
      en: [
        "Mineral collections",
        "Fossils",
        "Historic display cases",
        "Great glass roof"
      ]
    },

    tip: {
      fr: "Le bâtiment est presque aussi intéressant que les collections : entrez dans le grand hall et levez les yeux vers la verrière avant d’examiner les vitrines historiques en bois.",
      en: "The building is almost as interesting as the collections: enter the great hall and look up at the glass roof before exploring the historic wooden display cases."
    }
  }

];