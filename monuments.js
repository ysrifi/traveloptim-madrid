/* =========================================================
   TRAVELOPTIM MADRID
   DONNÉES — MONUMENTS

   SOMMAIRE
   1. Basílica de San Francisco el Grande
   2. Teatro Real
   3. Fontaine de Neptune
   4. Puerta de Toledo
   5. Puerta de San Vicente
   6. Église San Antonio de los Alemanes
   7. Monument aux morts pour l’Espagne
   8. Pont de Tolède
   9. Arco de la Victoria
   10. Monastère royal de l’Encarnación
   11. Monastère des Descalzas Reales
   12. Bibliothèque nationale d’Espagne
   13. Église San Jerónimo el Real
   14. Edificio Metrópolis
========================================================= */

const monuments = [

  // =========================================================
  // 1. BASÍLICA DE SAN FRANCISCO EL GRANDE
  // =========================================================

  {
    id: "basilica-san-francisco-el-grande",

    coordinates: {
      lat: 40.4104996,
      lng: -3.7145483
    },

    name: {
      fr: "Basílica de San Francisco el Grande",
      en: "Basilica of San Francisco el Grande"
    },

    image:
      "images/lieux/basilica-san-francisco-el-grande.webp",

    photo: {
      author: "Luis García",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0 ES",
      url: "https://commons.wikimedia.org/wiki/File:Carrera_de_San_Francisco_(Madrid)_01.jpg"
    },

    district: {
      fr: "La Latina",
      en: "La Latina"
    },

    metro:
      "La Latina (L5) · Puerta de Toledo (L5)",

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
      "https://www.esmadrid.com/en/tourist-information/san-francisco-el-grande",

    description: {
      fr: "L’une des églises les plus monumentales de Madrid, célèbre pour son immense coupole et son riche décor artistique comprenant notamment des œuvres de Goya et Zurbarán.",
      en: "One of Madrid’s most monumental churches, famous for its enormous dome and rich artistic decoration, including works by Goya and Zurbarán."
    },

    highlights: {
      fr: [
        "Coupole monumentale",
        "Chapelles richement décorées",
        "Œuvres de Goya et Zurbarán",
        "Architecture néoclassique"
      ],

      en: [
        "Monumental dome",
        "Richly decorated chapels",
        "Works by Goya and Zurbarán",
        "Neoclassical architecture"
      ]
    },

    tip: {
      fr: "Ne restez pas uniquement dans la nef : cherchez la peinture de Goya dans l’une des chapelles. À la sortie, rejoignez les Jardines de las Vistillas tout proches.",
      en: "Don’t stay only in the nave: look for Goya’s painting in one of the chapels. Afterwards, walk to the nearby Vistillas Gardens."
    }
  },

  // =========================================================
  // 2. TEATRO REAL
  // =========================================================

  {
    id: "teatro-real",

    coordinates: {
      lat: 40.4181405,
      lng: -3.7105386
    },

    name: {
      fr: "Teatro Real",
      en: "Teatro Real"
    },

    image:
      "images/lieux/teatro-real.webp",

    photo: {
      author: "Enric",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:222_Teatro_Real_(Madrid),_angle_nord-oest,_c._Felipe_V,_1_-_pl._de_Oriente,_5.jpg"
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
      "https://www.teatroreal.es/en/tours",

    description: {
      fr: "Grand opéra de Madrid inauguré au XIXe siècle, le Teatro Real occupe une position privilégiée entre la Plaza de Isabel II et le Palacio Real.",
      en: "Madrid’s grand opera house, inaugurated in the 19th century, occupies a privileged position between Plaza de Isabel II and the Royal Palace."
    },

    highlights: {
      fr: [
        "Salle principale",
        "Loge royale",
        "Salons historiques",
        "Coulisses et espaces de production"
      ],

      en: [
        "Main auditorium",
        "Royal Box",
        "Historic halls",
        "Backstage and production areas"
      ]
    },

    tip: {
      fr: "Si vous n’assistez pas à un spectacle, choisissez une visite du théâtre pour découvrir ses espaces intérieurs. À la sortie, traversez la Plaza de Oriente pour rejoindre directement le Palacio Real.",
      en: "If you’re not attending a performance, take a theatre tour to discover its interior. Afterwards, cross Plaza de Oriente to reach the Royal Palace."
    }
  },

  // =========================================================
  // 3. FONTAINE DE NEPTUNE
  // =========================================================

  {
    id: "fuente-de-neptuno",

    coordinates: {
      lat: 40.4152652,
      lng: -3.6941526
    },

    name: {
      fr: "Fontaine de Neptune",
      en: "Neptune Fountain"
    },

    image:
      "images/lieux/fuente-de-neptuno.webp",

    photo: {
      author: "Harvey Barrison from Massapequa, NY, USA",
      source: "Wikimedia Commons",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Fuente_de_Neptuno,_Madrid_(26429204802).jpg"
    },

    district: {
      fr: "Paseo del Arte",
      en: "Paseo del Arte"
    },

    metro:
      "Banco de España (L2) · Estación del Arte (L1)",

    hours: {
      type: "text",
      fr: "Visible en permanence",
      en: "Always visible"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl:
      "",

    description: {
      fr: "Grande fontaine néoclassique représentant Neptune sur un char tiré par des chevaux marins, créée dans le cadre du réaménagement monumental du Paseo del Prado.",
      en: "A monumental Neoclassical fountain depicting Neptune on a chariot drawn by sea horses, created as part of the monumental redevelopment of Paseo del Prado."
    },

    highlights: {
      fr: [
        "Neptune et son trident",
        "Chevaux marins",
        "Paseo del Prado",
        "Paysage de la Lumière UNESCO"
      ],

      en: [
        "Neptune and his trident",
        "Sea horses",
        "Paseo del Prado",
        "UNESCO Landscape of Light"
      ]
    },

    tip: {
      fr: "Intégrez-la au parcours du Paseo del Arte : le Museo Thyssen se trouve juste à côté et le Prado à quelques minutes à pied.",
      en: "Include it in your Art Walk route: the Thyssen Museum is right nearby and the Prado is only a few minutes away on foot."
    }
  },

  // =========================================================
  // 4. PUERTA DE TOLEDO
  // =========================================================

  {
    id: "puerta-de-toledo",

    coordinates: {
      lat: 40.4067666,
      lng: -3.7116135
    },

    name: {
      fr: "Puerta de Toledo",
      en: "Puerta de Toledo"
    },

    image:
      "images/lieux/puerta-de-toledo.webp",

    photo: {
      author: "Zarateman",
      source: "Zarateman, CC0, via Wikimedia Commons",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_-_Puerta_de_Toledo_8.jpg"
    },

    district: {
      fr: "La Latina",
      en: "La Latina"
    },

    metro:
      "Puerta de Toledo (L5)",

    hours: {
      type: "text",
      fr: "Visible en permanence",
      en: "Always visible"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl:
      "",

    description: {
      fr: "Arc monumental néoclassique achevé au XIXe siècle, autrefois situé sur l’un des principaux axes d’entrée dans Madrid.",
      en: "A monumental Neoclassical gateway completed in the 19th century, once standing on one of the main approaches into Madrid."
    },

    highlights: {
      fr: [
        "Grande arche centrale",
        "Colonnes ioniques",
        "Décor sculpté",
        "Architecture néoclassique"
      ],

      en: [
        "Large central arch",
        "Ionic columns",
        "Sculptural decoration",
        "Neoclassical architecture"
      ]
    },

    tip: {
      fr: "Profitez-en comme point de départ pour La Latina : rejoignez ensuite la Plaza de Cascorro et descendez Ribera de Curtidores, l’axe principal d’El Rastro.",
      en: "Use it as a starting point for La Latina: continue to Plaza de Cascorro and down Ribera de Curtidores, El Rastro’s main street."
    }
  },

  // =========================================================
  // 5. PUERTA DE SAN VICENTE
  // =========================================================

  {
    id: "puerta-de-san-vicente",

    coordinates: {
      lat: 40.4202234,
      lng: -3.7204022
    },

    name: {
      fr: "Puerta de San Vicente",
      en: "Saint Vincent’s Gate"
    },

    image:
      "images/lieux/puerta-de-san-vicente.webp",

    photo: {
      author: "Emilio J. Rodríguez Posada",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Palacio_Real_y_sus_jardines_en_julio_de_2022_118.jpg"
    },

    district: {
      fr: "Princesa",
      en: "Princesa"
    },

    metro:
      "Príncipe Pío (L6, L10, R)",

    hours: {
      type: "text",
      fr: "Visible en permanence",
      en: "Always visible"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl:
      "",

    description: {
      fr: "Reconstruction de la porte conçue par Francesco Sabatini au XVIIIe siècle, située aujourd’hui près de Príncipe Pío et des rives du Manzanares.",
      en: "A reconstruction of the gateway designed by Francesco Sabatini in the 18th century, now standing near Príncipe Pío and the Manzanares river."
    },

    highlights: {
      fr: [
        "Arche centrale",
        "Colonnes doriques",
        "Décor sculpté",
        "Architecture de Sabatini"
      ],

      en: [
        "Central arch",
        "Doric columns",
        "Sculptural decoration",
        "Sabatini architecture"
      ]
    },

    tip: {
      fr: "Ne faites pas un détour uniquement pour cette porte : combinez-la avec Príncipe Pío, Madrid Río et les Jardines del Campo del Moro dans la même balade.",
      en: "Don’t make a special trip just for the gate: combine it with Príncipe Pío, Madrid Río and the Campo del Moro Gardens in the same walk."
    }
  },

  // =========================================================
  // 6. ÉGLISE SAN ANTONIO DE LOS ALEMANES
  // =========================================================

  {
    id: "san-antonio-de-los-alemanes",

    coordinates: {
      lat: 40.4223578,
      lng: -3.7038115
    },

    name: {
      fr: "Église San Antonio de los Alemanes",
      en: "Church of San Antonio de los Alemanes"
    },

    image:
      "images/lieux/san-antonio-de-los-alemanes.webp",

    photo: {
      author: "Alejandro from Mexico City, MEXICO",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid,_Spain_(33261494663).jpg"
    },

    district: {
      fr: "Malasaña",
      en: "Malasaña"
    },

    metro:
      "Callao (L3, L5) · Gran Vía (L1, L5) · Tribunal (L1, L10)",

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
      "https://www.esmadrid.com/en/tourist-information/church-san-antonio-alemanes",

    description: {
      fr: "Petit joyau du baroque madrilène dont l’intérieur elliptique est presque entièrement recouvert de fresques spectaculaires.",
      en: "A small jewel of Madrid Baroque architecture whose elliptical interior is almost entirely covered with spectacular frescoes."
    },

    highlights: {
      fr: [
        "Intérieur elliptique",
        "Fresques du sol à la voûte",
        "Trompe-l’œil architectural",
        "Œuvres de grands peintres baroques"
      ],

      en: [
        "Elliptical interior",
        "Floor-to-ceiling frescoes",
        "Architectural trompe-l’œil",
        "Works by major Baroque painters"
      ]
    },

    tip: {
      fr: "Placez-vous près du centre et regardez vers la coupole : c’est le meilleur endroit pour percevoir la continuité des fresques et leurs effets de trompe-l’œil.",
      en: "Stand near the centre and look up towards the dome: it’s the best position to appreciate the continuous frescoes and trompe-l’œil effects."
    }
  },

  // =========================================================
  // 7. MONUMENT AUX MORTS POUR L’ESPAGNE
  // =========================================================

  {
    id: "monumento-caidos-por-espana",

    coordinates: {
      lat: 40.4164469,
      lng: -3.6928918
    },

    name: {
      fr: "Monument aux morts pour l’Espagne",
      en: "Monument to the Fallen for Spain"
    },

    image:
      "images/lieux/monumento-caidos-por-espana.webp",

    photo: {
      author: "Fernando",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Monumento_a_los_Ca%C3%ADdos_por_Espa%C3%B1a_-_SW.jpg"
    },

    district: {
      fr: "Paseo del Arte",
      en: "Paseo del Arte"
    },

    metro:
      "Banco de España (L2) · Estación del Arte (L1)",

    hours: {
      type: "text",
      fr: "Visible depuis la Plaza de la Lealtad",
      en: "Visible from Plaza de la Lealtad"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl:
      "",

    description: {
      fr: "Monument commémoratif de la Plaza de la Lealtad, érigé à l’origine en mémoire des Madrilènes morts lors du soulèvement du 2 mai 1808.",
      en: "A memorial in Plaza de la Lealtad, originally erected in memory of Madrid residents who died during the uprising of 2 May 1808."
    },

    highlights: {
      fr: [
        "Obélisque central",
        "Flamme permanente",
        "Plaza de la Lealtad",
        "Mémoire du 2 mai 1808"
      ],

      en: [
        "Central obelisk",
        "Eternal flame",
        "Plaza de la Lealtad",
        "Memory of the 2 May 1808 uprising"
      ]
    },

    tip: {
      fr: "Repérez la flamme permanente au pied du monument. Il se trouve directement sur l’itinéraire entre la Fontaine de Neptune et la Plaza de Cibeles.",
      en: "Look for the eternal flame at the base of the monument. It lies directly on the route between Neptune Fountain and Plaza de Cibeles."
    }
  },

  // =========================================================
  // 8. PONT DE TOLÈDE
  // =========================================================

  {
    id: "puente-de-toledo",

    coordinates: {
      lat: 40.3996515,
      lng: -3.7149353
    },

    name: {
      fr: "Pont de Tolède",
      en: "Toledo Bridge"
    },

    image:
      "images/lieux/puente-de-toledo.webp",

    photo: {
      author: "Zarateman",
      source: "Zarateman, CC0, via Wikimedia Commons",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_-_Puente_de_Toledo_04.jpg"
    },

    district: {
      fr: "Madrid Río",
      en: "Madrid Río"
    },

    metro:
      "Marqués de Vadillo (L5) · Pirámides (L5)",

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
      fr: "Pont baroque de Pedro de Ribera traversant le Manzanares, remarquable par ses neuf arches en granite et ses élégants pavillons sculptés.",
      en: "A Baroque bridge by Pedro de Ribera spanning the Manzanares, notable for its nine granite arches and elegant sculptural pavilions."
    },

    highlights: {
      fr: [
        "Neuf arches",
        "Statue de San Isidro",
        "Statue de Santa María de la Cabeza",
        "Architecture baroque"
      ],
      en: [
        "Nine arches",
        "Statue of San Isidro",
        "Statue of Santa María de la Cabeza",
        "Baroque architecture"
      ]
    },

    tip: {
      fr: "Au centre du pont, repérez les deux petits temples dédiés à San Isidro et Santa María de la Cabeza. Descendez ensuite dans Madrid Río pour photographier le pont dans son ensemble.",
      en: "At the centre of the bridge, look for the two small shrines dedicated to San Isidro and Santa María de la Cabeza. Then head down into Madrid Río for a full view of the bridge."
    }
  },

  // =========================================================
  // 9. ARCO DE LA VICTORIA
  // =========================================================

  {
    id: "arco-de-la-victoria",

    coordinates: {
      lat: 40.4359648,
      lng: -3.7201932
    },

    name: {
      fr: "Arco de la Victoria",
      en: "Arco de la Victoria"
    },

    image:
      "images/lieux/arco-de-la-victoria.webp",

    photo: {
      author: "Jvhertum",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Arco_de_la_victoria_faro_de_moncloa_madrid.jpg"
    },

    district: {
      fr: "Princesa",
      en: "Princesa"
    },

    metro:
      "Moncloa (L3, L6)",

    hours: {
      type: "text",
      fr: "Extérieur visible en permanence",
      en: "Exterior always visible"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl: "",

    description: {
      fr: "Arc monumental de 40 mètres construit dans les années 1950 à l’entrée de la Ciudad Universitaria et couronné par une imposante quadrige.",
      en: "A 40-metre monumental arch built in the 1950s at the entrance to Ciudad Universitaria and crowned by an imposing quadriga."
    },

    highlights: {
      fr: [
        "Arc monumental",
        "Quadrige de Minerve",
        "Bas-reliefs",
        "Ciudad Universitaria"
      ],
      en: [
        "Monumental arch",
        "Minerva quadriga",
        "Bas-reliefs",
        "Ciudad Universitaria"
      ]
    },

    tip: {
      fr: "Combinez-le avec le Faro de Moncloa juste à côté : après avoir vu l’arc depuis le sol, vous pourrez observer tout le secteur depuis le belvédère.",
      en: "Combine it with the nearby Faro de Moncloa: after seeing the arch from ground level, you can view the entire area from the observation deck."
    }
  },

  // =========================================================
  // 10. MONASTÈRE ROYAL DE L’ENCARNACIÓN
  // =========================================================

  {
    id: "real-monasterio-de-la-encarnacion",

    coordinates: {
      lat: 40.4200462,
      lng: -3.7115755
    },

    name: {
      fr: "Monastère royal de l’Encarnación",
      en: "Royal Monastery of La Encarnación"
    },

    image:
      "images/lieux/real-monasterio-de-la-encarnacion.webp",

    photo: {
      author: "Concepcion AMAT ORTA…",
      source: "Wikimedia Commons",
      license: "CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:MADRID_EDIFICIOS_CONVENTO_DE_LA_ENCARNACION_(CON_COMENTARIOS)_-_panoramio_-_Concepcion_AMAT_ORTA%E2%80%A6_(2).jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Madrid de los Austrias"
    },

    metro:
      "Ópera (L2, L5, R) · Santo Domingo (L2)",

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
      "https://www.patrimonionacional.es/en/visita/royal-monastery-la-encarnacion",

    description: {
      fr: "Monastère royal fondé au début du XVIIe siècle, abritant un remarquable ensemble de peintures, sculptures et reliquaires liés à la monarchie des Habsbourg.",
      en: "A royal monastery founded in the early 17th century, housing an outstanding collection of paintings, sculptures and reliquaries linked to the Habsburg monarchy."
    },

    highlights: {
      fr: [
        "Église du monastère",
        "Reliquaire",
        "Peintures baroques",
        "Collections royales"
      ],
      en: [
        "Monastery church",
        "Reliquary",
        "Baroque paintings",
        "Royal collections"
      ]
    },

    tip: {
      fr: "Sa visite s’intègre très facilement au secteur royal : à la sortie, rejoignez la Plaza de Oriente puis le Palacio Real, situés à quelques minutes.",
      en: "It fits easily into the Royal Madrid route: afterwards, continue to Plaza de Oriente and the Royal Palace, only a few minutes away."
    }
  },

  // =========================================================
  // 11. MONASTÈRE DES DESCALZAS REALES
  // =========================================================

  {
    id: "monasterio-descalzas-reales",

    coordinates: {
      lat: 40.4183427,
      lng: -3.7064715
    },

    name: {
      fr: "Monastère des Descalzas Reales",
      en: "Monastery of Las Descalzas Reales"
    },

    image:
      "images/lieux/monasterio-descalzas-reales.webp",

    photo: {
      author: "Luis García",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Monasterio_de_las_Descalzas_Reales_(Madrid)_08.jpg"
    },

    district: {
      fr: "Sol / Gran Vía",
      en: "Sol / Gran Vía"
    },

    metro:
      "Callao (L3, L5) · Sol (L1, L2, L3)",

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
      "https://tickets.patrimonionacional.es/en/tickets/monasterio-descalzas",

    description: {
      fr: "Ancien palais transformé en monastère royal au XVIe siècle, cachant derrière une façade sobre une exceptionnelle collection artistique liée aux Habsbourg.",
      en: "A former palace transformed into a royal monastery in the 16th century, hiding behind its restrained façade an exceptional art collection linked to the Habsburg dynasty."
    },

    highlights: {
      fr: [
        "Escalier peint",
        "Tapisseries",
        "Peintures des collections royales",
        "Architecture conventuelle"
      ],
      en: [
        "Painted staircase",
        "Tapestries",
        "Royal collection paintings",
        "Convent architecture"
      ]
    },

    tip: {
      fr: "Ne vous fiez pas à sa façade très discrète : l’intérêt se trouve presque entièrement à l’intérieur. Sa proximité avec Callao et Sol permet de l’intégrer sans détour à une visite du centre.",
      en: "Don’t be misled by its very discreet façade: almost everything of interest is inside. Its location near Callao and Sol makes it easy to include in a city-centre route."
    }
  },

  // =========================================================
  // 12. BIBLIOTHÈQUE NATIONALE D’ESPAGNE
  // =========================================================

  {
    id: "biblioteca-nacional-espana",

    coordinates: {
      lat: 40.4237879,
      lng: -3.6902452
    },

    name: {
      fr: "Bibliothèque nationale d’Espagne",
      en: "National Library of Spain"
    },

    image:
      "images/lieux/biblioteca-nacional-espana.webp",

    photo: {
      author: "Jean-Pierre Dalbéra",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Biblioteca_Nacional_de_Espa%C3%B1a_(Madrid)_09.jpg"
    },

    district: {
      fr: "Barrio de Salamanca",
      en: "Barrio de Salamanca"
    },

    metro:
      "Colón (L4) · Serrano (L4)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours"
    },

    price: {
      type: "free",
      fr: "Expositions gratuites",
      en: "Free exhibitions"
    },

    officialUrl:
      "https://www.esmadrid.com/en/tourist-information/national-library",

    description: {
      fr: "Institution chargée de préserver le patrimoine bibliographique espagnol, installée dans un monumental édifice néoclassique du Paseo de Recoletos.",
      en: "The institution responsible for preserving Spain’s bibliographic heritage, housed in a monumental Neoclassical building on Paseo de Recoletos."
    },

    highlights: {
      fr: [
        "Façade monumentale",
        "Grand escalier",
        "Statues d’Alfonso X et San Isidoro",
        "Expositions temporaires"
      ],
      en: [
        "Monumental façade",
        "Grand staircase",
        "Statues of Alfonso X and San Isidoro",
        "Temporary exhibitions"
      ]
    },

    tip: {
      fr: "Observez les statues qui encadrent le grand escalier avant d’entrer. Le Museo Arqueológico Nacional occupe le même vaste ensemble architectural : combinez les deux visites.",
      en: "Look at the statues framing the grand staircase before entering. The National Archaeological Museum occupies the same large architectural complex, so combine both visits."
    }
  },

  // =========================================================
  // 13. ÉGLISE SAN JERÓNIMO EL REAL
  // =========================================================

  {
    id: "san-jeronimo-el-real",

    coordinates: {
      lat: 40.4145358,
      lng: -3.6909801
    },

    name: {
      fr: "Église San Jerónimo el Real",
      en: "Church of San Jerónimo el Real"
    },

    image:
      "images/lieux/san-jeronimo-el-real.webp",

    photo: {
      author: "Steven Cortinovis",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:San_Jer%C3%B3nimo_el_Real_Church.jpg"
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
      type: "free",
      fr: "Accès gratuit",
      en: "Free access"
    },

    officialUrl:
      "https://www.esmadrid.com/en/tourist-information/iglesia-parroquial-de-san-jeronimo-el-real",

    description: {
      fr: "Église historique étroitement liée à la monarchie espagnole et principal vestige de l’ancien monastère des Hiéronymites qui occupait autrefois ce secteur.",
      en: "A historic church closely linked to the Spanish monarchy and the principal surviving element of the former Hieronymite monastery that once occupied this area."
    },

    highlights: {
      fr: [
        "Architecture gothique",
        "Grand escalier",
        "Lien avec la monarchie espagnole",
        "Ancien monastère des Hiéronymites"
      ],
      en: [
        "Gothic architecture",
        "Grand staircase",
        "Links with the Spanish monarchy",
        "Former Hieronymite monastery"
      ]
    },

    tip: {
      fr: "Montez le grand escalier puis retournez-vous vers le Prado pour profiter d’une belle perspective. L’église se combine naturellement avec une visite du musée.",
      en: "Climb the grand staircase and turn back towards the Prado for an excellent perspective. The church combines naturally with a museum visit."
    }
  },

  // =========================================================
  // 14. EDIFICIO METRÓPOLIS
  // =========================================================

  {
    id: "edificio-metropolis",

    coordinates: {
      lat: 40.4188668,
      lng: -3.6973182
    },

    name: {
      fr: "Edificio Metrópolis",
      en: "Metrópolis Building"
    },

    image:
      "images/lieux/edificio-metropolis.webp",

    photo: {
      author: "Diego Delso",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Edificio_Metr%C3%B3polis,_calle_de_Alcal%C3%A1,_Madrid,_Espa%C3%B1a,_2017-05-18,_DD_08.jpg"
    },

    district: {
      fr: "Sol / Gran Vía",
      en: "Sol / Gran Vía"
    },

    metro:
      "Banco de España (L2) · Sevilla (L2)",

    hours: {
      type: "text",
      fr: "Vue extérieure libre",
      en: "Exterior view anytime"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    officialUrl: "",

    description: {
      fr: "L’un des édifices les plus emblématiques de Madrid, reconnaissable à sa façade néo-Renaissance, sa coupole d’ardoise ornée d’or et sa statue de la Victoire.",
      en: "One of Madrid’s most iconic buildings, recognizable by its Neo-Renaissance façade, slate dome with golden details and Winged Victory statue."
    },

    highlights: {
      fr: [
        "Coupole d’ardoise aux détails dorés",
        "Statue de la Victoire",
        "Façade néo-Renaissance",
        "Confluence de Gran Vía et Calle Alcalá"
      ],
      en: [
        "Slate dome with golden details",
        "Winged Victory statue",
        "Neo-Renaissance façade",
        "Junction of Gran Vía and Calle Alcalá"
      ]
    },

    tip: {
      fr: "Pour une photo emblématique, placez-vous du côté de la Plaza de Cibeles et cadrez l’Edificio Metrópolis dans l’axe de Gran Vía. Poursuivez ensuite naturellement votre parcours à pied sur Gran Vía.",
      en: "For an iconic photo, position yourself on the Plaza de Cibeles side and frame the Metrópolis Building along Gran Vía. Then continue your walk naturally along Gran Vía."
    }
  }

];