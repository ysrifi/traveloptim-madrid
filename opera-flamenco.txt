/* =========================================================
   TRAVELOPTIM MADRID — OPÉRA ET FLAMENCO
========================================================= */

/*
  SOMMAIRE

  1. Teatro Real
  2. Corral de la Morería
  3. Tablao Flamenco 1911
  4. Torres Bermejas
  5. Cardamomo
  6. Teatro Flamenco Madrid
*/


const operaFlamenco = [


  // =========================================================
  // 1. TEATRO REAL
  // =========================================================

  {
    id: "teatro-real-opera",

    coordinates: {
      lat: 40.418303,
      lng: -3.711386
    },

    name: {
      fr: "Teatro Real Opéra",
      en: "Teatro Real Opera"
    },

    image:
      "images/lieux/teatro-real-opera.webp",

    photo: {
      author: "Diario de Madrid",
      source: "Wikimedia Commons",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Luz_Casal_y_la_Banda_Sinf%C3%B3nica_Municipal_protagonizan_el_concierto_ben%C3%A9fico_de_Reyes_02.jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Habsburg Madrid"
    },

    metro:
      "Ópera (L2, L5, R)",

    activityType: {
      fr: "Opéra et arts de la scène",
      en: "Opera and performing arts"
    },

    duration: {
      fr: "Selon le spectacle",
      en: "Varies by performance"
    },

    booking: {
      fr: "Voir la programmation",
      en: "See programme",
      url: "https://www.teatroreal.es/en/entradas"
    },

    description: {
      fr: "Principal opéra de Madrid, le Teatro Real propose une programmation internationale mêlant grands classiques, nouvelles productions, concerts et danse dans un cadre historique face au Palacio Real.",
      en: "Madrid’s principal opera house, Teatro Real presents an international programme of major classics, new productions, concerts and dance in a historic setting opposite the Royal Palace."
    },

    experience: {
      fr: [
        "Grandes productions d’opéra",
        "Orchestres et chanteurs internationaux",
        "Salle historique",
        "Programmation renouvelée chaque saison"
      ],
      en: [
        "Major opera productions",
        "International orchestras and singers",
        "Historic auditorium",
        "A new programme every season"
      ]
    },

    tip: {
      fr: "Choisissez d’abord l’œuvre dans la programmation plutôt qu’une date au hasard : durée, distribution et style changent beaucoup d’une production à l’autre. Plaza de Oriente et le Palacio Real sont juste en face.",
      en: "Choose the opera first rather than a random date: running time, cast and style vary greatly between productions. Plaza de Oriente and the Royal Palace are directly opposite."
    }
  },


  // =========================================================
  // 2. CORRAL DE LA MORERÍA
  // =========================================================

  {
    id: "corral-de-la-moreria",

    coordinates: {
      lat: 40.4126689,
      lng: -3.7142336
    },

    name: {
      fr: "Corral de la Morería",
      en: "Corral de la Morería"
    },

    image:
      "images/lieux/corral-de-la-moreria.webp",

    photo: {
      author: "Max Alexander / PromoMadrid",
      source: "Wikimedia Commons",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:MADRID_060319_MXALX_053.jpg"
    },

    district: {
      fr: "La Latina",
      en: "La Latina"
    },

    metro:
      "La Latina (L5)",

    activityType: {
      fr: "Tablao flamenco",
      en: "Flamenco tablao"
    },

    duration: {
      fr: "Selon la formule choisie",
      en: "Depends on the selected option"
    },

    booking: {
      fr: "Voir la programmation",
      en: "See programme",
      url: "https://www.corraldelamoreria.com/en/flamenco-show/"
    },

    description: {
      fr: "Tablao historique ouvert en 1956, réputé pour sa programmation de haut niveau et pour l’association du flamenco avec une véritable proposition gastronomique.",
      en: "A historic tablao opened in 1956, renowned for its high-level artistic programming and for combining flamenco with a genuine gastronomic experience."
    },

    experience: {
      fr: [
        "Danse, chant et guitare flamenca",
        "Programmation artistique renouvelée chaque semaine",
        "Salle intimiste",
        "Option spectacle seul ou expérience gastronomique"
      ],
      en: [
        "Flamenco dance, singing and guitar",
        "Weekly-changing artistic programme",
        "Intimate setting",
        "Show-only or gastronomic experience"
      ]
    },

    tip: {
      fr: "Si votre priorité est le flamenco, comparez bien la formule spectacle seul avec les formules dîner : le lieu propose aussi une expérience gastronomique très élaborée. Attention, les enfants de moins de 7 ans ne sont pas admis.",
      en: "If flamenco is your priority, compare the show-only option with the dinner packages: the venue also offers an elaborate gastronomic experience. Note that children under 7 are not admitted."
    }
  },


  // =========================================================
  // 3. TABLAO FLAMENCO 1911
  // =========================================================

  {
    id: "tablao-flamenco-1911",

    coordinates: {
      lat: 40.4149873,
      lng: -3.7014214
    },

    name: {
      fr: "Tablao Flamenco 1911",
      en: "Tablao Flamenco 1911"
    },

    image:
      "images/lieux/illustration-flamenco.webp",

    district: {
      fr: "Barrio de las Letras",
      en: "Literary Quarter"
    },

    metro:
      "Sevilla (L2) · Sol (L1, L2, L3)",

    activityType: {
      fr: "Tablao flamenco historique",
      en: "Historic flamenco tablao"
    },

    duration: {
      fr: "Environ 1 h",
      en: "About 1 hour"
    },

    booking: {
      fr: "Voir la programmation",
      en: "See programme",
      url: "https://tablaoflamenco1911.com/en/shows/"
    },

    description: {
      fr: "Installé sur la Plaza de Santa Ana, ce tablao historique accueille des spectacles de flamenco depuis 1911 et conserve une spectaculaire façade en céramique devenue emblématique.",
      en: "Located on Plaza de Santa Ana, this historic venue has hosted flamenco performances since 1911 and preserves an iconic tiled façade."
    },

    experience: {
      fr: [
        "Spectacle d’une heure",
        "Danse, chant et guitare",
        "Artistes renouvelés régulièrement",
        "Cadre historique de la Plaza de Santa Ana"
      ],
      en: [
        "One-hour performance",
        "Dance, singing and guitar",
        "Frequently changing artists",
        "Historic Plaza de Santa Ana setting"
      ]
    },

    tip: {
      fr: "Arrivez quelques minutes avant d’entrer pour observer la façade en azulejos, l’un des éléments les plus caractéristiques du lieu. Avant ou après le spectacle, poursuivez à pied dans le Barrio de las Letras.",
      en: "Arrive a few minutes early to see the distinctive tiled façade. Before or after the show, continue on foot through the Literary Quarter."
    }
  },


  // =========================================================
  // 4. TORRES BERMEJAS
  // =========================================================

  {
    id: "torres-bermejas",

    coordinates: {
      lat: 40.4198098,
      lng: -3.7042315
    },

    name: {
      fr: "Torres Bermejas",
      en: "Torres Bermejas"
    },

    image:
      "images/lieux/illustration-flamenco.webp",

    district: {
      fr: "Sol / Gran Vía",
      en: "Sol / Gran Vía"
    },

    metro:
      "Callao (L3, L5) · Gran Vía (L1, L5)",

    activityType: {
      fr: "Tablao flamenco",
      en: "Flamenco tablao"
    },

    duration: {
      fr: "Environ 1 h",
      en: "About 1 hour"
    },

    booking: {
      fr: "Voir la programmation",
      en: "See programme",
      url: "https://flamencotorresbermejas.com/en/"
    },

    description: {
      fr: "Tablao historique proche de Gran Vía, Torres Bermejas se distingue par son décor inspiré de l’Alhambra de Grenade et ses spectacles mêlant danse, chant et guitare flamenca.",
      en: "A historic tablao near Gran Vía, Torres Bermejas stands out for its Alhambra-inspired interior and performances combining flamenco dance, singing and guitar."
    },

    experience: {
      fr: [
        "Spectacle flamenco d’environ une heure",
        "Décor inspiré de l’Alhambra",
        "Chant et danse en direct",
        "Formules avec boisson, tapas ou dîner"
      ],
      en: [
        "Approximately one-hour flamenco show",
        "Alhambra-inspired interior",
        "Live singing and dancing",
        "Drink, tapas and dinner options"
      ]
    },

    tip: {
      fr: "Les portes ouvrent environ 30 minutes avant chaque séance : profitez-en pour observer les murs, azulejos et plafonds en bois inspirés de l’Alhambra avant que le spectacle commence.",
      en: "Doors open around 30 minutes before each show, so use that time to look at the Alhambra-inspired walls, tiles and wooden ceilings before the performance begins."
    }
  },


  // =========================================================
  // 5. CARDAMOMO
  // =========================================================

  {
    id: "cardamomo",

    coordinates: {
      lat: 40.4154556,
      lng: -3.6995109
    },

    name: {
      fr: "Cardamomo",
      en: "Cardamomo"
    },

    image:
      "images/lieux/illustration-flamenco.webp",

    district: {
      fr: "Barrio de las Letras",
      en: "Literary Quarter"
    },

    metro:
      "Sevilla (L2) · Sol (L1, L2, L3)",

    activityType: {
      fr: "Tablao flamenco",
      en: "Flamenco tablao"
    },

    duration: {
      fr: "Environ 1 h",
      en: "About 1 hour"
    },

    booking: {
      fr: "Voir la programmation",
      en: "See programme",
      url: "https://cardamomo.com/en/flamenco-show-in-madrid/"
    },

    description: {
      fr: "Tablao intimiste du Barrio de las Letras, Cardamomo mise sur la proximité entre artistes et public, avec plusieurs représentations quotidiennes et une programmation renouvelée régulièrement.",
      en: "An intimate tablao in the Literary Quarter, Cardamomo focuses on close contact between performers and audience, with several daily performances and frequently changing artists."
    },

    experience: {
      fr: [
        "Spectacle d’environ une heure",
        "Plusieurs artistes sur scène",
        "Salle à capacité limitée",
        "Choix de la zone de placement"
      ],
      en: [
        "Approximately one-hour show",
        "Multiple performers on stage",
        "Limited-capacity venue",
        "Choice of seating area"
      ]
    },

    tip: {
      fr: "Le système de réservation permet de choisir votre zone et de visualiser son emplacement. Si la proximité avec les danseurs est votre priorité, comparez les zones avant d’acheter plutôt que de choisir uniquement selon le prix.",
      en: "The booking system lets you choose and preview your seating area. If being close to the dancers matters most, compare the zones before buying rather than choosing solely by price."
    }
  },


  // =========================================================
  // 6. TEATRO FLAMENCO MADRID
  // =========================================================

  {
    id: "teatro-flamenco-madrid",

    coordinates: {
      lat: 40.4232579,
      lng: -3.704502
    },

    name: {
      fr: "Teatro Flamenco Madrid",
      en: "Teatro Flamenco Madrid"
    },

    image:
      "images/lieux/illustration-flamenco.webp",

    district: {
      fr: "Malasaña",
      en: "Malasaña"
    },

    metro:
      "Noviciado (L2) · Tribunal (L1, L10)",

    activityType: {
      fr: "Théâtre flamenco",
      en: "Flamenco theatre"
    },

    duration: {
      fr: "Environ 1 h",
      en: "About 1 hour"
    },

    booking: {
      fr: "Voir la programmation",
      en: "See programme",
      url: "https://teatroflamencomadrid.com/en"
    },

    description: {
      fr: "Théâtre de Malasaña entièrement consacré au flamenco, avec son spectacle quotidien Emociones réunissant danseurs, chanteurs et guitaristes dans une salle intimiste.",
      en: "A Malasaña theatre devoted entirely to flamenco, presenting its daily Emociones show with dancers, singers and guitarists in an intimate setting."
    },

    experience: {
      fr: [
        "Spectacle Emociones",
        "Danse, chant et guitare",
        "Durée d’environ une heure",
        "Plusieurs représentations par jour"
      ],
      en: [
        "Emociones show",
        "Dance, singing and guitar",
        "Approximately one-hour duration",
        "Several performances each day"
      ]
    },

    tip: {
      fr: "C’est une option pratique si vous voulez surtout voir le spectacle sans organiser un dîner-spectacle complet : la représentation dure environ une heure. Gardez ensuite votre repas pour Malasaña, juste autour du théâtre.",
      en: "It’s a practical choice if you mainly want the performance without planning a full dinner-and-show evening: the show lasts about one hour. You can then have dinner in Malasaña around the theatre."
    }
  }

];