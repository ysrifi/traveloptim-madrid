/* =========================================================
   TRAVELOPTIM MADRID — VUES PANORAMIQUES
========================================================= */

/*
  SOMMAIRE

  1. Azotea del Círculo de Bellas Artes
  2. Mirador Madrid – Cibeles
  3. Dôme de la cathédrale de l’Almudena
  4. Mirador de la Cornisa
  5. Faro de Moncloa
  6. Teleférico de Madrid
*/


const panoramique = [


  // =========================================================
  // 1. AZOTEA DEL CÍRCULO DE BELLAS ARTES
  // =========================================================

  {
    id: "azotea-circulo-bellas-artes",

    coordinates: {
      lat: 40.4183253,
      lng: -3.6964847
    },

    name: {
      fr: "Azotea del Círculo de Bellas Artes",
      en: "Círculo de Bellas Artes Rooftop"
    },

    image:
      "images/lieux/azotea-circulo-bellas-artes.webp",

    photo: {
      author: "Nan Palmero from San Antonio, TX, USA",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_Gran_Via_Metropolis_(28895530633).jpg"
    },

    district: {
      fr: "Sol / Gran Vía",
      en: "Sol / Gran Vía"
    },

    metro:
      "Banco de España (L2) · Sevilla (L2)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours",
      url: "https://www.circulobellasartes.com/en/azotea/"
    },

    price: {
      type: "link",
      fr: "Voir tarifs",
      en: "See prices",
      url: "https://www.circulobellasartes.com/en/azotea/"
    },

    description: {
      fr: "L’un des rooftops les plus célèbres de Madrid, offrant une vue spectaculaire sur Gran Vía, Calle Alcalá et les toits du centre historique.",
      en: "One of Madrid’s best-known rooftops, offering spectacular views over Gran Vía, Calle Alcalá and the historic city-centre skyline."
    },

    highlights: {
      fr: [
        "Vue sur l’Edificio Metrópolis",
        "Gran Vía vue d’en haut",
        "Panorama sur le centre de Madrid",
        "Terrasse avec bar et restaurant"
      ],
      en: [
        "View of the Metrópolis Building",
        "Gran Vía from above",
        "Panorama over central Madrid",
        "Rooftop bar and restaurant"
      ]
    },

    tip: {
      fr: "Cherchez surtout l’angle vers Gran Vía : l’Edificio Metrópolis et sa coupole constituent la photo emblématique depuis cette terrasse.",
      en: "Look especially towards Gran Vía: the Metrópolis Building and its dome create the rooftop’s most iconic photo."
    }
  },


  // =========================================================
  // 2. MIRADOR MADRID – PALACIO DE CIBELES
  // =========================================================

  {
    id: "mirador-madrid-cibeles",

    coordinates: {
      lat: 40.419104,
      lng: -3.692343
    },

    name: {
      fr: "Mirador Madrid – Cibeles",
      en: "Mirador Madrid – Cibeles"
    },

    image:
      "images/lieux/mirador-madrid-cibeles.webp",

    photo: {
      author: "Miguel Diaz from Boadilla del Monte, España-Spain",
      source: "Wikimedia Commons",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Cibeles_desde_el_Ayuntamiento_(Madrid)_(14203354114).jpg"
    },

    district: {
      fr: "Paseo del Arte",
      en: "Art Walk"
    },

    metro:
      "Banco de España (L2)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours",
      url: "https://www.centrocentro.org/centrocentro/espacios/mirador-madrid"
    },

    price: {
      type: "link",
      fr: "Voir tarifs",
      en: "See prices",
      url: "https://www.centrocentro.org/centrocentro/espacios/mirador-madrid"
    },

    description: {
      fr: "Belvédère installé dans la tour principale du Palacio de Cibeles, offrant une vue panoramique à 360° sur plusieurs grands axes et monuments de Madrid.",
      en: "An observation deck in the main tower of Cibeles Palace, offering 360-degree panoramic views over many of Madrid’s major avenues and landmarks."
    },

    highlights: {
      fr: [
        "Plaza de Cibeles vue d’en haut",
        "Gran Vía et Calle Alcalá",
        "Parc du Retiro",
        "Paseo de la Castellana"
      ],
      en: [
        "Plaza de Cibeles from above",
        "Gran Vía and Calle Alcalá",
        "Retiro Park",
        "Paseo de la Castellana"
      ]
    },

    tip: {
      fr: "Commencez par observer la Plaza de Cibeles juste sous vos pieds, puis repérez Gran Vía et le Retiro : cette hauteur permet de comprendre très facilement l’organisation du centre de Madrid.",
      en: "Start with Plaza de Cibeles directly below you, then locate Gran Vía and Retiro Park: the viewpoint makes Madrid’s central layout particularly easy to understand."
    }
  },


  // =========================================================
  // 3. DÔME DE LA CATHÉDRALE DE L’ALMUDENA
  // =========================================================

  {
    id: "dome-cathedrale-almudena",

    coordinates: {
      lat: 40.416232,
      lng: -3.714466
    },

    name: {
      fr: "Dôme de la cathédrale de l’Almudena",
      en: "Almudena Cathedral Dome"
    },

    image:
      "images/lieux/dome-cathedrale-almudena.webp",

    photo: {
      author: "Diego Delso",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Catedral_de_la_Almudena,_Madrid,_Espa%C3%B1a,_2014-12-27,_DD_21.JPG"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Habsburg Madrid"
    },

    metro:
      "Ópera (L2, L5, R)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours",
      url: "https://www.catedraldelaalmudena.es/museoycupula"
    },

    price: {
      type: "link",
      fr: "Voir tarifs",
      en: "See prices",
      url: "https://www.catedraldelaalmudena.es/museoycupula"
    },

    description: {
      fr: "Accessible avec la visite du musée de la cathédrale, le dôme de l’Almudena offre à plus de 70 mètres de hauteur l’un des plus beaux panoramas sur le Madrid historique.",
      en: "Accessible with admission to the Cathedral Museum, Almudena’s dome rises more than 70 metres above the city and offers outstanding views over historic Madrid."
    },

    highlights: {
      fr: [
        "Palacio Real vu d’en haut",
        "Plaza de Oriente",
        "Viaduc de Segovia",
        "Dôme de San Francisco el Grande"
      ],
      en: [
        "Royal Palace from above",
        "Plaza de Oriente",
        "Segovia Viaduct",
        "Dome of San Francisco el Grande"
      ]
    },

    tip: {
      fr: "Intégrez la montée directement à votre visite de l’Almudena : l’accès au dôme passe par le musée. Depuis le sommet, cherchez surtout le Palacio Real et Plaza de Oriente juste en face, puis San Francisco el Grande vers le sud.",
      en: "Combine the climb directly with your Almudena visit, as access to the dome is through the museum. From the top, first locate the Royal Palace and Plaza de Oriente opposite, then San Francisco el Grande to the south."
    }
  },


  // =========================================================
  // 4. MIRADOR DE LA CORNISA
  // =========================================================

  {
    id: "mirador-de-la-cornisa",

    coordinates: {
      lat: 40.4163691,
      lng: -3.7153812
    },

    name: {
      fr: "Mirador de la Cornisa",
      en: "Mirador de la Cornisa"
    },

    image:
      "images/lieux/mirador-de-la-cornisa.webp",

    photo: {
      author: "Zarateman",
      source: "Wikimedia Commons",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_-_Mirador_de_la_cornisa_del_Palacio_Real_2.jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Habsburg Madrid"
    },

    metro:
      "Ópera (L2, L5, R)",

    hours: {
      type: "text",
      fr: "Tous les jours · 12 h–22 h",
      en: "Daily · 12pm–10pm"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Belvédère gratuit situé entre le Palacio Real et la Catedral de la Almudena, dominant les jardins du Campo del Moro et la Casa de Campo.",
      en: "A free observation deck between the Royal Palace and Almudena Cathedral, overlooking the Campo del Moro Gardens and Casa de Campo."
    },

    highlights: {
      fr: [
        "Campo del Moro vu d’en haut",
        "Casa de Campo",
        "Corniche occidentale de Madrid",
        "Palacio Real et Almudena à proximité"
      ],
      en: [
        "Campo del Moro from above",
        "Casa de Campo",
        "Madrid’s western skyline",
        "Royal Palace and Almudena nearby"
      ]
    },

    tip: {
      fr: "C’est le panorama le plus facile à intégrer à une visite du Palacio Real : le belvédère se trouve directement entre le palais et l’Almudena, sans détour.",
      en: "This is the easiest panoramic stop to include with a Royal Palace visit: the viewpoint lies directly between the palace and Almudena Cathedral, with no real detour."
    }
  },


  // =========================================================
  // 5. FARO DE MONCLOA
  // =========================================================

  {
    id: "faro-de-moncloa",

    coordinates: {
      lat: 40.436944,
      lng: -3.721667
    },

    name: {
      fr: "Faro de Moncloa",
      en: "Faro de Moncloa"
    },

    image:
      "images/lieux/faro-de-moncloa.webp",

    photo: {
      author: "Tiia Monto",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Faro_de_Moncloa_-_interior_2.jpg"
    },

    district: {
      fr: "Moncloa",
      en: "Moncloa"
    },

    metro:
      "Moncloa (L3, L6)",

    hours: {
      type: "link",
      fr: "Voir horaires",
      en: "See opening hours",
      url: "https://www.madrid.es/portales/munimadrid/es/Inicio/Cultura-ocio-y-deporte/Cultura-y-ocio/Direcciones-y-telefonos/Faro-de-la-Moncloa/?vgnextfmt=default&vgnextoid=ee4f13db5b71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=76f3efff228fe410VgnVCM2000000c205a0aRCRD"
    },

    price: {
      type: "link",
      fr: "Voir tarifs",
      en: "See prices",
      url: "https://www.madrid.es/portales/munimadrid/es/Inicio/Cultura-ocio-y-deporte/Cultura-y-ocio/Direcciones-y-telefonos/Faro-de-la-Moncloa/?vgnextfmt=default&vgnextoid=ee4f13db5b71c010VgnVCM1000000b205a0aRCRD&vgnextchannel=76f3efff228fe410VgnVCM2000000c205a0aRCRD"
    },

    description: {
      fr: "Tour panoramique de 110 mètres dont l’ascenseur mène à un belvédère situé à 92 mètres, avec une vue presque à 360° sur Madrid et la Sierra de Guadarrama.",
      en: "A 110-metre panoramic tower whose lift takes visitors to a viewpoint 92 metres above ground, offering almost 360-degree views of Madrid and the Sierra de Guadarrama."
    },

    highlights: {
      fr: [
        "Belvédère à 92 mètres",
        "Ascenseur panoramique",
        "Palacio Real et Almudena",
        "Sierra de Guadarrama par temps clair"
      ],
      en: [
        "92-metre observation deck",
        "Panoramic lift",
        "Royal Palace and Almudena Cathedral",
        "Sierra de Guadarrama on clear days"
      ]
    },

    tip: {
      fr: "Par temps clair, regardez au-delà des monuments du centre vers la Sierra de Guadarrama. Profitez du déplacement jusqu’à Moncloa pour voir aussi l’Arco de la Victoria.",
      en: "On a clear day, look beyond the central landmarks towards the Sierra de Guadarrama. Since you’re in Moncloa, combine the visit with the nearby Arco de la Victoria."
    }
  },


  // =========================================================
  // 6. TELEFÉRICO DE MADRID
  // =========================================================

  {
    id: "teleferico-de-madrid",

    coordinates: {
      lat: 40.4276386,
      lng: -3.722824
    },

    name: {
      fr: "Teleférico de Madrid",
      en: "Madrid Cable Car"
    },

    image:
      "images/lieux/teleferico-de-madrid.webp",

    photo: {
      author: "Jim Anzalone from Odessa, Texas, USA",
      source: "Wikimedia Commons",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_MG_0484_(39395048881).jpg"
    },

    district: {
      fr: "Princesa / Casa de Campo",
      en: "Princesa / Casa de Campo"
    },

    metro:
      "Argüelles (L3, L4, L6) · Lago (L10)",

    hours: {
      type: "text",
      fr: "Fermé pour rénovation · réouverture prévue au 1er trimestre 2027",
      en: "Closed for renovation · reopening expected in Q1 2027"
    },

    price: {
      type: "text",
      fr: "Billetterie suspendue pendant les travaux",
      en: "Ticket sales suspended during renovation"
    },

    description: {
      fr: "Téléphérique reliant le Paseo de Pintor Rosales à la Casa de Campo, offrant normalement une vue aérienne sur la corniche monumentale, le Manzanares et les grands espaces verts de l’ouest madrilène.",
      en: "A cable car linking Paseo de Pintor Rosales with Casa de Campo, normally offering aerial views over Madrid’s monumental western skyline, the Manzanares River and its large green spaces."
    },

    highlights: {
      fr: [
        "Vue aérienne sur la corniche madrilène",
        "Casa de Campo",
        "Rivière Manzanares",
        "Trajet panoramique d’environ 2,5 km"
      ],
      en: [
        "Aerial view of Madrid’s western skyline",
        "Casa de Campo",
        "Manzanares River",
        "Approximately 2.5 km panoramic ride"
      ]
    },

    tip: {
      fr: "Ne prévoyez pas cette activité pour un séjour en 2026 : le téléphérique est actuellement fermé pour rénovation. Gardez-la plutôt comme option pour un voyage à partir de 2027.",
      en: "Don’t plan this activity for a 2026 visit: the cable car is currently closed for renovation. Keep it as an option for trips from 2027 onwards."
    }
  }

];