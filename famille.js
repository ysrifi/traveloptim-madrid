/* =========================================================
   TRAVELOPTIM MADRID
   DONNÉES — ACTIVITÉS EN FAMILLE

   SOMMAIRE
   1. Zoo Aquarium de Madrid
   2. Parque de Atracciones de Madrid
   3. Faunia
   4. Planetario de Madrid
   5. Museo de Cera de Madrid
   6. Museo de las Ilusiones Madrid
========================================================= */

const famille = [

  // =========================================================
  // 1. ZOO AQUARIUM DE MADRID
  // =========================================================

  {
    id: "zoo-aquarium-madrid",

    coordinates: {
      lat: 40.4089556,
      lng: -3.7612288
    },

    name: {
      fr: "Zoo Aquarium de Madrid",
      en: "Madrid Zoo Aquarium"
    },

    image:
      "images/lieux/zoo-aquarium-madrid.webp",

    photo: {
      author: "Daniel from Glasgow, United Kingdom",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Zoo_Aquarium_de_Madrid_(1)_(16790184666).jpg"
    },

    district: {
      fr: "Casa de Campo",
      en: "Casa de Campo"
    },

    metro:
      "Casa de Campo (L5, L10) + bus 33",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours",
      url: "https://www.zoomadrid.com/en/horarios-y-precios/horarios"
    },

    price: {
      type: "link",
      fr: "Voir tarifs",
      en: "See prices",
      url: "https://www.zoomadrid.com/en/horarios-y-precios/precios"
    },

    description: {
      fr: "Grand parc zoologique de Casa de Campo réunissant zoo, aquarium et volière, avec des centaines d’espèces provenant des cinq continents.",
      en: "A large zoological park in Casa de Campo combining a zoo, aquarium and aviary, with hundreds of species from five continents."
    },

    highlights: {
      fr: [
        "Pandas géants",
        "Aquarium et tunnel aux requins",
        "Gorilles, éléphants et rhinocéros",
        "Activités éducatives avec les animaux"
      ],

      en: [
        "Giant pandas",
        "Aquarium and shark tunnel",
        "Gorillas, elephants and rhinos",
        "Educational animal activities"
      ]
    },

    tip: {
      fr: "Consultez les horaires des activités éducatives dès votre arrivée : lions de mer, oiseaux et plusieurs présentations animales ont des créneaux précis. Organisez ensuite votre parcours autour de ces horaires plutôt que de traverser plusieurs fois le parc.",
      en: "Check the educational activity schedule as soon as you arrive: sea lions, birds and several animal talks run at specific times. Build your route around them instead of crossing the park repeatedly."
    }
  },

  // =========================================================
  // 2. PARQUE DE ATRACCIONES DE MADRID
  // =========================================================

  {
    id: "parque-de-atracciones-madrid",

    coordinates: {
      lat: 40.411883,
      lng: -3.750058
    },

    name: {
      fr: "Parque de Atracciones de Madrid",
      en: "Parque de Atracciones de Madrid"
    },

    image:
      "images/lieux/parque-de-atracciones-madrid.webp",

    photo: {
      author: "Alberto-g-rovi",
      source: "Wikimedia Commons",
      license: "CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Fuentes-Parque_de_Atracciones.jpg"
    },

    district: {
      fr: "Casa de Campo",
      en: "Casa de Campo"
    },

    metro:
      "Batán (L10)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours",
      url: "https://www.parquedeatracciones.es/en/horarios"
    },

    price: {
      type: "link",
      fr: "Voir tarifs",
      en: "See prices",
      url: "https://www.parquedeatracciones.es/en/precios"
    },

    description: {
      fr: "Grand parc d’attractions de Madrid installé dans Casa de Campo, avec montagnes russes, attractions familiales, spectacles et une zone Nickelodeon pour les plus jeunes.",
      en: "Madrid’s major amusement park in Casa de Campo, with roller coasters, family rides, shows and a Nickelodeon area for younger children."
    },

    highlights: {
      fr: [
        "Abismo et Tornado",
        "Nickelodeon Land",
        "Attractions aquatiques",
        "Spectacles et rencontres avec personnages"
      ],

      en: [
        "Abismo and Tornado",
        "Nickelodeon Land",
        "Water rides",
        "Shows and character meet-and-greets"
      ]
    },

    tip: {
      fr: "Choisissez votre zone dès le départ selon l’âge des enfants : Nickelodeon Land concentre les attractions des plus jeunes, tandis que Maquinismo regroupe les attractions les plus intenses comme Abismo et Tornado.",
      en: "Choose your first area according to the children’s ages: Nickelodeon Land concentrates the rides for younger kids, while Maquinismo is home to the most intense attractions such as Abismo and Tornado."
    }
  },

  // =========================================================
  // 3. FAUNIA
  // =========================================================

  {
    id: "faunia",

    coordinates: {
      lat: 40.392078,
      lng: -3.612436
    },

    name: {
      fr: "Faunia",
      en: "Faunia"
    },

    image:
      "images/lieux/faunia.webp",

    photo: {
      author: "Tiia Monto",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Faunia_2.jpg"
    },

    district: {
      fr: "Vicálvaro",
      en: "Vicálvaro"
    },

    metro:
      "Valdebernardo (L9) + bus 71",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours",
      url: "https://www.faunia.es/en/horarios"
    },

    price: {
      type: "link",
      fr: "Voir tarifs",
      en: "See prices",
      url: "https://www.faunia.es/en#prices"
    },

    description: {
      fr: "Parc animalier consacré aux écosystèmes et à la biodiversité, avec manchots, lamantins, reptiles, lémuriens et nombreuses activités éducatives.",
      en: "An animal park focused on ecosystems and biodiversity, featuring penguins, manatees, reptiles, lemurs and numerous educational activities."
    },

    highlights: {
      fr: [
        "Écosystème polaire et manchots",
        "Jungle tropicale",
        "Lamantins",
        "Interactions et activités éducatives"
      ],

      en: [
        "Polar ecosystem and penguins",
        "Tropical jungle",
        "Manatees",
        "Interactive and educational activities"
      ]
    },

    tip: {
      fr: "Regardez les horaires des interactions avant de commencer : l’Expédition polaire, l’expérience avec les lamantins ou les reptiles sont proposées à des créneaux précis. Certaines nécessitent aussi un billet supplémentaire.",
      en: "Check the interaction schedule before starting: Polar Expedition, the manatee experience and reptile activities run at specific times, and some require an additional ticket."
    }
  },

  // =========================================================
  // 4. PLANETARIO DE MADRID
  // =========================================================

  {
    id: "planetario-de-madrid",

    coordinates: {
      lat: 40.3927043,
      lng: -3.6852999
    },

    name: {
      fr: "Planetario de Madrid",
      en: "Madrid Planetarium"
    },

    image:
      "images/lieux/planetario-de-madrid.webp",

    photo: {
      author: "J.L. De Diego",
      source: "Wikimedia Commons",
      license: "Public domain",
      url: "https://commons.wikimedia.org/wiki/File:Planetario_de_Madrid_01.jpg"
    },

    district: {
      fr: "Arganzuela",
      en: "Arganzuela"
    },

    metro:
      "Arganzuela-Planetario (L6)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours",
      url: "https://www.esmadrid.com/en/tourist-information/planetarium"
    },

    price: {
      type: "link",
      fr: "Voir tarifs",
      en: "See prices",
      url: "https://www.esmadrid.com/en/tourist-information/planetarium"
    },

    description: {
      fr: "Centre scientifique consacré à l’astronomie, avec expositions gratuites et projections immersives sous le grand dôme de la salle de projection.",
      en: "A science centre devoted to astronomy, with free exhibitions and immersive projections under the large dome of its projection hall."
    },

    highlights: {
      fr: [
        "Projections sous le dôme",
        "Expositions d’astronomie",
        "Activités scientifiques",
        "Parque Tierno Galván"
      ],

      en: [
        "Dome projections",
        "Astronomy exhibitions",
        "Science activities",
        "Tierno Galván Park"
      ]
    },

    tip: {
      fr: "Choisissez d’abord la projection adaptée à l’âge des enfants : les séances durent environ 30 minutes et leur contenu varie. Les espaces d’exposition sont gratuits, vous pouvez donc les visiter avant ou après la séance.",
      en: "Choose the projection according to the children’s age first: sessions last about 30 minutes and the content varies. The exhibition areas are free, so visit them before or after the show."
    }
  },

  // =========================================================
  // 5. MUSEO DE CERA DE MADRID
  // =========================================================

  {
    id: "museo-de-cera-madrid",

    coordinates: {
      lat: 40.4250746,
      lng: -3.6915129
    },

    name: {
      fr: "Museo de Cera de Madrid",
      en: "Madrid Wax Museum"
    },

    image:
      "images/lieux/museo-de-cera-madrid.webp",

    photo: {
      author: "Tamorlan",
      source: "Wikimedia Commons",
      license: "CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Caf%C3%A9_Madrid-Museo_cera.jpg"
    },

    district: {
      fr: "Recoletos / Colón",
      en: "Recoletos / Colón"
    },

    metro:
      "Colón (L4)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours",
      url: "https://museodecera.com/en/plan-your-visit/"
    },

    price: {
      type: "link",
      fr: "Voir tarifs",
      en: "See prices",
      url: "https://museodecera.com/en/prices/"
    },

    description: {
      fr: "Musée ludique regroupant plus de 450 figures de cire représentant personnages historiques, sportifs, artistes et célébrités internationales.",
      en: "An entertaining museum featuring more than 450 wax figures representing historical personalities, athletes, entertainers and international celebrities."
    },

    highlights: {
      fr: [
        "Plus de 450 figures",
        "Personnalités espagnoles et internationales",
        "Expériences immersives",
        "Nombreuses possibilités de photos"
      ],

      en: [
        "More than 450 figures",
        "Spanish and international personalities",
        "Immersive experiences",
        "Plenty of photo opportunities"
      ]
    },

    tip: {
      fr: "Profitez surtout des mises en scène pour les photos plutôt que de simplement parcourir les figures. Si vous voyagez avec de jeunes enfants, sachez que la Wax Horror Experience est déconseillée aux moins de 12 ans.",
      en: "Make use of the staged displays for photos rather than simply walking past the figures. If you’re with young children, note that the Wax Horror Experience is not recommended for under-12s."
    }
  },

  // =========================================================
  // 6. MUSEO DE LAS ILUSIONES MADRID
  // =========================================================

  {
    id: "museo-de-las-ilusiones-madrid",

    coordinates: {
      lat: 40.413276,
      lng: -3.7038658
    },

    name: {
      fr: "Museo de las Ilusiones Madrid",
      en: "Museum of Illusions Madrid"
    },

    image:
      "images/lieux/museo-de-las-ilusiones-madrid.webp",

    photo: {
      author: "Arquigraph",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Museum_of_Illusions_-_acceso.jpg"
    },

    district: {
      fr: "Centro / Tirso de Molina",
      en: "Centro / Tirso de Molina"
    },

    metro:
      "Tirso de Molina (L1)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours",
      url: "https://museumofillusions.es/en/contact-us/"
    },

    price: {
      type: "link",
      fr: "Voir tarifs",
      en: "See prices",
      url: "https://museumofillusions.es/en/contact-us/"
    },

    description: {
      fr: "Musée interactif consacré aux illusions d’optique et aux jeux de perception, avec salles immersives, installations participatives et nombreux décors photo.",
      en: "An interactive museum devoted to optical illusions and perception, with immersive rooms, hands-on installations and numerous photo settings."
    },

    highlights: {
      fr: [
        "Upside Down Room",
        "Kaleidoscope",
        "Illusions optiques",
        "Installations interactives"
      ],

      en: [
        "Upside Down Room",
        "Kaleidoscope",
        "Optical illusions",
        "Interactive installations"
      ]
    },

    tip: {
      fr: "Venez avec le téléphone prêt : plusieurs installations sont conçues pour créer des photos impossibles. Dans l’Upside Down Room, testez plusieurs angles avant de partir pour obtenir l’effet le plus convaincant.",
      en: "Keep your phone ready: several installations are designed for impossible photos. In the Upside Down Room, try several angles before moving on to get the most convincing effect."
    }
  }

];