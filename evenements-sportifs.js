/* =========================================================
   TRAVELOPTIM MADRID
   DONNÉES — ÉVÉNEMENTS SPORTIFS

   SOMMAIRE
   1. Match du Real Madrid
   2. Match de l’Atlético de Madrid
   3. Corrida à Las Ventas
   4. Événement au Movistar Arena
========================================================= */

const evenementsSportifs = [

  // =========================================================
  // 1. MATCH DU REAL MADRID
  // =========================================================

  {
    id: "match-real-madrid",

    coordinates: {
      lat: 40.453123,
      lng: -3.689628
    },

    name: {
      fr: "Match du Real Madrid",
      en: "Real Madrid Match"
    },

    image:
      "images/lieux/match-real-madrid.webp",

    photo: {
      author: "Zoser",
      source: "Wikimedia Commons",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Estadio_Santiago_Bernab%C3%A9u_Madrid.jpg"
    },

    district: {
      fr: "Chamartín",
      en: "Chamartín"
    },

    metro:
      "Santiago Bernabéu (L10)",

    activityType: {
      fr: "Match de football",
      en: "Football match"
    },

    duration: {
      fr: "Environ 2 h · hors accès au stade",
      en: "About 2 hours · excluding stadium entry"
    },

    booking: {
      fr: "Voir la programmation",
      en: "See programme",
      url: "https://www.realmadrid.com/en-US/tickets"
    },

    description: {
      fr: "Assister à un match du Real Madrid au Santiago Bernabéu permet de découvrir l’un des stades les plus célèbres du football mondial dans son ambiance de compétition.",
      en: "Watching Real Madrid play at the Santiago Bernabéu offers the chance to experience one of world football’s most famous stadiums during a competitive match."
    },

    experience: {
      fr: [
        "Match du Real Madrid",
        "Ambiance du Santiago Bernabéu",
        "Stade rénové et toit rétractable",
        "Accès aux boutiques et espaces du stade"
      ],

      en: [
        "Real Madrid match",
        "Santiago Bernabéu atmosphere",
        "Renovated stadium and retractable roof",
        "Access to stadium shops and facilities"
      ]
    },

    tip: {
      fr: "Ne bâtissez pas votre itinéraire autour de l’heure annoncée trop tôt : LaLiga peut confirmer l’horaire définitif seulement quelques semaines avant le match. Gardez cette demi-journée flexible jusqu’à confirmation.",
      en: "Don’t build your itinerary around an early provisional kick-off time: LaLiga may confirm the final time only a few weeks before the match. Keep that half-day flexible until it is confirmed."
    }
  },

  // =========================================================
  // 2. MATCH DE L’ATLÉTICO DE MADRID
  // =========================================================

  {
    id: "match-atletico-madrid",

    coordinates: {
      lat: 40.436193,
      lng: -3.599478
    },

    name: {
      fr: "Match de l’Atlético de Madrid",
      en: "Atlético de Madrid Match"
    },

    image:
      "images/lieux/match-atletico-madrid.webp",

    photo: {
      author: "Elwin594",
      source: "Wikimedia Commons",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Atleti_vs_Villarreal_-_September_2025.jpg"
    },

    district: {
      fr: "San Blas-Canillejas",
      en: "San Blas-Canillejas"
    },

    metro:
      "Estadio Metropolitano (L7)",

    activityType: {
      fr: "Match de football",
      en: "Football match"
    },

    duration: {
      fr: "Environ 2 h · hors accès au stade",
      en: "About 2 hours · excluding stadium entry"
    },

    booking: {
      fr: "Voir la programmation",
      en: "See programme",
      url: "https://en.atleticodemadrid.com/listado-de-entradas"
    },

    description: {
      fr: "Un match de l’Atlético offre une ambiance différente du Bernabéu, dans le moderne Riyadh Air Metropolitano, avec une forte culture de supporters autour du club rojiblanco.",
      en: "An Atlético match offers a different atmosphere from the Bernabéu, inside the modern Riyadh Air Metropolitano and surrounded by the club’s strong supporter culture."
    },

    experience: {
      fr: [
        "Match de l’Atlético de Madrid",
        "Ambiance rojiblanca",
        "Riyadh Air Metropolitano",
        "Expériences Matchday proposées par le club"
      ],

      en: [
        "Atlético de Madrid match",
        "Rojiblanco supporter atmosphere",
        "Riyadh Air Metropolitano",
        "Official Matchday experiences"
      ]
    },

    tip: {
      fr: "Si vous voulez enrichir le jour de match, regardez les expériences officielles Matchday : selon les rencontres, le club propose notamment arrivée du bus, visite d’avant-match ou accès à certaines zones réservées.",
      en: "If you want more than the match itself, check the official Matchday experiences: depending on the fixture, options may include team-bus arrival, a pre-match tour or access to restricted areas."
    }
  },

  // =========================================================
  // 3. CORRIDA À LAS VENTAS
  // =========================================================

  {
    id: "corrida-las-ventas",

    coordinates: {
      lat: 40.432000,
      lng: -3.664210
    },

    name: {
      fr: "Corrida à Las Ventas",
      en: "Bullfight at Las Ventas"
    },

    image:
      "images/lieux/corrida-las-ventas.webp",

    photo: {
      author: "No machine-readable author provided. Manuel González Olaechea assumed (based on copyright claims).",
      source: "Wikimedia Commons",
      license: "CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:CorridaTorosDesfile.JPG"
    },

    district: {
      fr: "Salamanca / Ventas",
      en: "Salamanca / Ventas"
    },

    metro:
      "Ventas (L2, L5)",

    activityType: {
      fr: "Corrida / spectacle taurin",
      en: "Bullfight / bullfighting event"
    },

    duration: {
      fr: "Environ 2 h",
      en: "About 2 hours"
    },

    booking: {
      fr: "Voir la programmation",
      en: "See programme",
      url: "https://plaza1.janto.es/janto/main.php"
    },

    description: {
      fr: "Las Ventas accueille la principale saison taurine de Madrid, avec corridas, novilladas et plusieurs grandes ferias entre le printemps et l’automne.",
      en: "Las Ventas hosts Madrid’s main bullfighting season, with bullfights, novilladas and major festivals between spring and autumn."
    },

    experience: {
      fr: [
        "Corridas et novilladas",
        "Arènes historiques de Las Ventas",
        "Feria de San Isidro",
        "Tradition taurine madrilène"
      ],

      en: [
        "Bullfights and novilladas",
        "Historic Las Ventas bullring",
        "San Isidro Fair",
        "Madrid bullfighting tradition"
      ]
    },

    tip: {
      fr: "Le choix de la place change fortement l’expérience : les secteurs « sombra » sont à l’ombre et généralement plus chers, alors que les places « sol » sont exposées au soleil. Vérifiez le plan avant d’acheter.",
      en: "Your seat can significantly change the experience: 'sombra' sections are shaded and generally more expensive, while 'sol' seats are exposed to the sun. Check the seating plan before buying."
    }
  },

  // =========================================================
  // 4. ÉVÉNEMENT AU MOVISTAR ARENA
  // =========================================================

  {
    id: "evenement-movistar-arena",

    coordinates: {
      lat: 40.423934,
      lng: -3.671750
    },

    name: {
      fr: "Événement au Movistar Arena",
      en: "Event at Movistar Arena"
    },

    image:
      "images/lieux/evenement-movistar-arena.webp",

    photo: {
      author: "Rux",
      source: "Wikimedia Commons",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Palacio_de_Deportes_%28Madrid%29_05.jpg"
    },

    district: {
      fr: "Barrio de Salamanca",
      en: "Salamanca"
    },

    metro:
      "Goya (L2, L4) · O'Donnell (L6)",

    activityType: {
      fr: "Basketball & grands événements sportifs",
      en: "Basketball & major sporting events"
    },

    duration: {
      fr: "Selon l’événement",
      en: "Varies by event"
    },

    booking: {
      fr: "Voir la programmation",
      en: "See programme",
      url: "https://www.realmadrid.com/en-US/tickets"
    },

    description: {
      fr: "Grande salle multifonction du quartier de Salamanca accueillant notamment basketball, padel et autres grands événements sportifs, en plus de nombreux concerts.",
      en: "A major multi-purpose arena in the Salamanca district hosting basketball, padel and other major sporting events, alongside a busy concert programme."
    },

    experience: {
      fr: [
        "Matchs de basketball",
        "Real Madrid Baloncesto",
        "Événements sportifs internationaux",
        "Salle couverte de grande capacité"
      ],

      en: [
        "Basketball games",
        "Real Madrid Basketball",
        "International sporting events",
        "Large indoor arena"
      ]
    },

    tip: {
      fr: "Ne cherchez pas un billet générique pour l’arène : consultez d’abord sa programmation, car le sport change selon la date. Pour le basketball, vérifiez notamment les matchs du Real Madrid en Liga Endesa et EuroLeague.",
      en: "Don’t look for a generic arena ticket: check the programme first, as the sport changes by date. For basketball, look especially for Real Madrid games in Liga Endesa and EuroLeague."
    }
  }

];