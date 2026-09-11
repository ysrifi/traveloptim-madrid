/* =========================================================
   TRAVELOPTIM MADRID
   DONNÉES — INCONTOURNABLES

   SOMMAIRE
   1. Puerta del Sol
   2. Plaza Mayor
   3. Palais royal de Madrid
   4. Cathédrale de l’Almudena
   5. Puerta de Alcalá
   6. Parc du Retiro
   7. Plaza de Cibeles
   8. Musée du Prado
   9. Musée Thyssen-Bornemisza
   10. Musée Reina Sofía
   11. Plaza de Oriente
   12. Temple de Debod
   13. Plaza de España
   14. Arènes de Las Ventas
   15. Gran Vía
   16. Mercado de San Miguel
   17. Stade Santiago Bernabéu
========================================================= */

const incontournables = [

  /* =====================================================
     1. PUERTA DEL SOL
  ===================================================== */

  {
    id: "puerta-del-sol",

    coordinates: {
      lat: 40.4169473,
      lng: -3.7035285
    },

    name: {
      fr: "Puerta del Sol",
      en: "Puerta del Sol"
    },

    image:
      "images/lieux/puerta-del-sol.webp",

    photo: {
      author: "Jorge Franganillo",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid-_Puerta_del_Sol.jpg"
    },

    district: {
      fr: "Sol / Gran Vía",
      en: "Sol / Gran Vía"
    },

    metro:
      "Sol · L1, L2, L3",

    hours: {
      type: "text",
      fr: "Toujours accessible",
      en: "Always accessible"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Au cœur de Madrid, la Puerta del Sol est l’un des grands points de rencontre de la capitale. Cette place emblématique rassemble plusieurs symboles madrilènes et constitue un excellent point de départ pour découvrir le centre historique à pied.",
      en: "At the heart of Madrid, Puerta del Sol is one of the capital’s main meeting points. This iconic square brings together several symbols of the city and is an excellent starting point for exploring Madrid’s historic centre on foot."
    },

    highlights: {
      fr: [
        "La statue de l’Ours et de l’Arbousier",
        "La plaque du Kilomètre Zéro",
        "La Real Casa de Correos et son horloge",
        "La statue équestre de Charles III"
      ],

      en: [
        "The Bear and the Strawberry Tree statue",
        "The Kilometre Zero plaque",
        "The Real Casa de Correos and its clock",
        "The equestrian statue of Charles III"
      ]
    },

    tip: {
      fr: "Prenez une photo avec vos pieds sur la plaque du Kilomètre Zéro, puis rejoignez Plaza Mayor par la Calle Mayor. C’est l’enchaînement le plus naturel pour découvrir le cœur historique de Madrid.",
      en: "Take a photo with your feet on the Kilometre Zero plaque, then walk to Plaza Mayor via Calle Mayor. It’s the most natural route for discovering the historic heart of Madrid."
    }
  },

  /* =====================================================
     2. PLAZA MAYOR
  ===================================================== */

  {
    id: "plaza-mayor",

    coordinates: {
      lat: 40.4156181,
      lng: -3.707023
    },

    name: {
      fr: "Plaza Mayor",
      en: "Plaza Mayor"
    },

    image:
      "images/lieux/plaza-mayor.webp",

    photo: {
      author: "Sebastian Dubiel",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0 DE",
      url: "https://commons.wikimedia.org/wiki/File:Plaza_Mayor_de_Madrid_06.jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Madrid de los Austrias"
    },

    metro:
      "Sol · L1, L2, L3 / Ópera · L2, L5, R",

    hours: {
      type: "text",
      fr: "Toujours accessible",
      en: "Always accessible"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Grande place historique du Madrid des Habsbourg, la Plaza Mayor est entourée d’arcades et de façades régulières dominées par la Casa de la Panadería. Elle reste l’un des lieux les plus reconnaissables du centre ancien.",
      en: "The grand historic square of Habsburg Madrid, Plaza Mayor is surrounded by arcades and uniform façades dominated by the Casa de la Panadería. It remains one of the most recognisable places in the old city centre."
    },

    highlights: {
      fr: [
        "La Casa de la Panadería et sa façade peinte",
        "La statue équestre de Philippe III",
        "Les arcades qui entourent la place",
        "L’Arco de Cuchilleros"
      ],

      en: [
        "The Casa de la Panadería and its painted façade",
        "The equestrian statue of Philip III",
        "The arcades surrounding the square",
        "The Arco de Cuchilleros"
      ]
    },

    tip: {
      fr: "Profitez de votre passage pour goûter un bocadillo de calamares, le sandwich emblématique de Madrid. Plusieurs adresses réputées se trouvent dans les petites rues autour de Plaza Mayor.",
      en: "Take the opportunity to try a bocadillo de calamares, Madrid’s iconic calamari sandwich. Several well-known places serving it are tucked into the streets surrounding Plaza Mayor."
    }
  },

  /* =====================================================
     3. PALAIS ROYAL DE MADRID
  ===================================================== */

  {
    id: "palais-royal-madrid",

    coordinates: {
      lat: 40.4180474,
      lng: -3.7142111
    },

    name: {
      fr: "Palais royal de Madrid",
      en: "Royal Palace of Madrid"
    },

    image:
      "images/lieux/palais-royal-madrid.webp",

    photo: {
      author: "Jean-Pierre Dalbéra",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Palacio_Real_%28Madrid%29_18.jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Madrid de los Austrias"
    },

    metro:
      "Ópera · L2, L5, R",

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
      "https://tickets.patrimonionacional.es/en/tickets/palacio-real-de-madrid",

    description: {
      fr: "Le Palais royal de Madrid est l’une des plus grandes résidences royales d’Europe. Toujours utilisé pour des cérémonies officielles, il permet de parcourir des salles d’apparat, des collections royales et plusieurs siècles d’histoire monarchique espagnole.",
      en: "The Royal Palace of Madrid is one of Europe’s largest royal residences. Still used for official ceremonies, it offers access to state rooms, royal collections and several centuries of Spanish monarchical history."
    },

    highlights: {
      fr: [
        "Le grand escalier",
        "La salle du Trône",
        "Le salon Gasparini",
        "L’Armurerie royale"
      ],

      en: [
        "The Grand Staircase",
        "The Throne Room",
        "The Gasparini Room",
        "The Royal Armoury"
      ]
    },

    tip: {
      fr: "Avant ou après la visite, rejoignez la Plaza de la Armería, entre le Palais royal et l’Almudena. C’est l’un des meilleurs endroits pour réunir les deux monuments dans un même cadrage.",
      en: "Before or after your visit, head to Plaza de la Armería between the Royal Palace and Almudena Cathedral. It’s one of the best spots for framing both monuments in a single photo."
    }
  },

  /* =====================================================
     4. CATHÉDRALE DE L’ALMUDENA
  ===================================================== */

  {
    id: "cathedrale-almudena",

    coordinates: {
      lat: 40.4156389,
      lng: -3.7145018
    },

    name: {
      fr: "Cathédrale de l’Almudena",
      en: "Almudena Cathedral"
    },

    image:
      "images/lieux/cathedrale-almudena.webp",

    photo: {
      author: "Riozujar",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Catedral_de_la_Almudena_de_noche._Madrid,_Espa%C3%B1a_04.jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Madrid de los Austrias"
    },

    metro:
      "Ópera · L2, L5, R",

    hours: {
      type: "text",
      fr: "10h00 - 21h00 (juillet et aout) / 10h00 - 20h30 (septembre à juin)",
      en: "10am - 9pm (July and August) / 10am - 8:30pm (September to June)"
    },

    price: {
      type: "free",
      fr: "Don de 1€ · musée payant",
      en: "1€ donation · museum ticketed"
    },

    description: {
      fr: "Face au Palais royal, la cathédrale de l’Almudena est la cathédrale de Madrid. Achevée tardivement et consacrée en 1993, elle mêle plusieurs styles architecturaux et abrite également une crypte et un musée donnant accès au dôme.",
      en: "Facing the Royal Palace, Almudena Cathedral is Madrid’s cathedral. Completed relatively recently and consecrated in 1993, it combines several architectural styles and also includes a crypt and a museum with access to the dome."
    },

    highlights: {
      fr: [
        "L’intérieur coloré et les plafonds contemporains",
        "La statue de la Vierge de l’Almudena",
        "La crypte néo-romane",
        "Le dôme accessible via le musée"
      ],

      en: [
        "The colourful interior and contemporary ceilings",
        "The statue of the Virgin of Almudena",
        "The Neo-Romanesque crypt",
        "The dome accessible through the museum"
      ]
    },

    tip: {
      fr: "Ne manquez pas l’accès au dôme panoramique. Pour quelques euros, vous profitez d’une superbe perspective sur le Palais royal et les toits du centre historique de Madrid.",
      en: "Don’t miss the panoramic dome. For just a few euros, you’ll enjoy a superb view over the Royal Palace and the rooftops of Madrid’s historic centre."
    }
  },

  /* =====================================================
     5. PUERTA DE ALCALÁ
  ===================================================== */

  {
    id: "puerta-alcala",

    coordinates: {
      lat: 40.419995,
      lng: -3.6887372
    },

    name: {
      fr: "Puerta de Alcalá",
      en: "Puerta de Alcalá"
    },

    image:
      "images/lieux/puerta-alcala.webp",

    photo: {
      author: "Fernando Pascullo",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Puerta_de_Alcal%C3%A1_2025.jpg"
    },

    district: {
      fr: "Retiro",
      en: "Retiro"
    },

    metro:
      "Retiro · L2 / Banco de España · L2",

    hours: {
      type: "text",
      fr: "Toujours accessible",
      en: "Always accessible"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Érigée en 1778 sur ordre de Charles III et conçue par Francesco Sabatini, la Puerta de Alcalá est l’une des grandes portes monumentales de Madrid. Ses cinq ouvertures marquent l’entrée du secteur du Retiro.",
      en: "Erected in 1778 by order of Charles III and designed by Francesco Sabatini, Puerta de Alcalá is one of Madrid’s great monumental gateways. Its five openings mark the entrance to the Retiro area."
    },

    highlights: {
      fr: [
        "Les cinq ouvertures monumentales",
        "Les sculptures et trophées décoratifs",
        "Les deux façades aux décors différents",
        "La perspective de la Calle de Alcalá"
      ],

      en: [
        "The five monumental openings",
        "The decorative sculptures and trophies",
        "The two differently decorated façades",
        "The perspective along Calle de Alcalá"
      ]
    },

    tip: {
      fr: "Pour une belle photo, placez-vous du côté du Retiro en fin de journée. La lumière met mieux en valeur les détails de la Puerta de Alcalá et limite généralement le contre-jour.",
      en: "For a great photo, stand on the Retiro side late in the day. The light highlights the architectural details of Puerta de Alcalá while generally reducing harsh backlighting."
    }
  },

  /* =====================================================
     6. PARC DU RETIRO
  ===================================================== */

  {
    id: "parc-retiro",

    coordinates: {
      lat: 40.4152606,
      lng: -3.6844983
    },

    name: {
      fr: "Parc du Retiro",
      en: "El Retiro Park"
    },

    image:
      "images/lieux/parc-retiro.webp",

    photo: {
      author: "Carlos Delgado",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Monumento_a_Alfonso_XII_de_Espa%C3%B1a_en_los_Jardines_del_Retiro_-_04.jpg"
    },

    district: {
      fr: "Retiro",
      en: "Retiro"
    },

    metro:
      "Retiro · L2 / Ibiza · L9",

    hours: {
      type: "text",
      fr: "6h00 - minuit (avril à septembre) / 6h00 - 22h00 (octobre à mars)",
      en: "6am - midnight (April to September) / 6am - 10pm (October to March)"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Avec plus de 125 hectares, le Retiro est le grand parc historique du centre de Madrid. Jardins, monuments, palais et grand étang permettent d’alterner promenade, découverte culturelle et pause au vert.",
      en: "Covering more than 125 hectares, El Retiro is Madrid’s great historic city-centre park. Gardens, monuments, palaces and its famous lake make it ideal for combining sightseeing with a relaxing break."
    },

    highlights: {
      fr: [
        "Le grand étang et le monument à Alphonse XII",
        "Le Palais de Cristal",
        "La fontaine de l’Ange déchu",
        "Les jardins historiques"
      ],

      en: [
        "The lake and Monument to Alfonso XII",
        "The Glass Palace",
        "The Fallen Angel Fountain",
        "The historic gardens"
      ]
    },

    tip: {
      fr: "Si l’attente est raisonnable, louez une barque sur le Grand Étang. C’est une façon agréable de profiter du Retiro et d’obtenir une superbe perspective sur le monument à Alphonse XII.",
      en: "If the wait is reasonable, rent a rowing boat on the lake. It’s a relaxing way to enjoy El Retiro and get a superb perspective of the Monument to Alfonso XII."
    }
  },

  /* =====================================================
     7. PLAZA DE CIBELES
  ===================================================== */

  {
    id: "plaza-cibeles",

    coordinates: {
      lat: 40.4193355,
      lng: -3.6930857
    },

    name: {
      fr: "Plaza de Cibeles",
      en: "Plaza de Cibeles"
    },

    image:
      "images/lieux/plaza-cibeles.webp",

    photo: {
      author: "Carlos Delgado",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Palacio_de_Comunicaciones_-_47.jpg"
    },

    district: {
      fr: "Paseo del Arte",
      en: "Paseo del Arte"
    },

    metro:
      "Banco de España · L2",

    hours: {
      type: "text",
      fr: "Toujours accessible",
      en: "Always accessible"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "La Plaza de Cibeles est l’un des carrefours monumentaux les plus spectaculaires de Madrid. Sa fontaine emblématique est entourée de bâtiments prestigieux, notamment le Palais de Cibeles et la Banque d’Espagne.",
      en: "Plaza de Cibeles is one of Madrid’s most spectacular monumental crossroads. Its iconic fountain is surrounded by prestigious buildings, including Cibeles Palace and the Bank of Spain."
    },

    highlights: {
      fr: [
        "La fontaine de Cybèle",
        "Le Palais de Cibeles",
        "La Banque d’Espagne",
        "La perspective vers la Calle de Alcalá"
      ],

      en: [
        "The Cibeles Fountain",
        "Cibeles Palace",
        "The Bank of Spain",
        "The view along Calle de Alcalá"
      ]
    },

    tip: {
      fr: "Montez au Mirador Madrid du Palais de Cibeles lorsqu’il est ouvert. Pour un tarif raisonnable, vous profitez d’une vue spectaculaire sur la fontaine, Gran Vía et les toits de Madrid.",
      en: "Head up to the Mirador Madrid viewpoint in Cibeles Palace when it is open. For a reasonable fee, you’ll get spectacular views of the fountain, Gran Vía and Madrid’s rooftops."
    }
  },

  /* =====================================================
     8. MUSÉE DU PRADO
  ===================================================== */

  {
    id: "musee-prado",

    coordinates: {
      lat: 40.4137818,
      lng: -3.6921271
    },

    name: {
      fr: "Musée du Prado",
      en: "Prado Museum"
    },

    image:
      "images/lieux/musee-prado.webp",

    photo: {
      author: "Emilio J. Rodríguez Posada",
      source: "Wikimedia Commons",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Museo_del_Prado_2016_%2825185969599%29.jpg"
    },

    district: {
      fr: "Paseo del Arte",
      en: "Paseo del Arte"
    },

    metro:
      "Estación del Arte · L1 / Banco de España · L2",

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
      "https://www.museodelprado.es/en/visit",

    description: {
      fr: "Le Musée du Prado abrite l’une des plus importantes collections de peinture européenne au monde. Velázquez, Goya, Bosch, Rubens, Titien et de nombreux autres maîtres y sont représentés.",
      en: "The Prado Museum houses one of the world’s most important collections of European painting. Velázquez, Goya, Bosch, Rubens, Titian and many other masters are represented here."
    },

    highlights: {
      fr: [
        "Les Ménines de Velázquez",
        "Le Jardin des délices de Bosch",
        "Le 3 mai 1808 de Goya",
        "Les grandes collections espagnoles, flamandes et italiennes"
      ],

      en: [
        "Velázquez’s Las Meninas",
        "Bosch’s The Garden of Earthly Delights",
        "Goya’s The Third of May 1808",
        "The major Spanish, Flemish and Italian collections"
      ]
    },

    tip: {
      fr: "Réservez votre billet à l’avance et privilégiez l’un des parcours proposés par le musée pour éviter de vous disperser. Si vous visitez aussi Thyssen et Reina Sofía, comparez le pass Paseo del Arte.",
      en: "Book your ticket in advance and follow one of the museum’s suggested routes to avoid wandering aimlessly. If you’re also visiting Thyssen and Reina Sofía, compare the Paseo del Arte pass."
    }
  },

  /* =====================================================
     9. MUSÉE THYSSEN-BORNEMISZA
  ===================================================== */

  {
    id: "musee-thyssen",

    coordinates: {
      lat: 40.4160126,
      lng: -3.6947992
    },

    name: {
      fr: "Musée Thyssen-Bornemisza",
      en: "Thyssen-Bornemisza National Museum"
    },

    image:
      "images/lieux/musee-thyssen.webp",

    photo: {
      author: "Kyle Magnuson from Los Angeles, United States",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Site_of_the_Retiro_and_the_Prado_in_Madrid_49_(29684554308).jpg"
    },

    district: {
      fr: "Paseo del Arte",
      en: "Paseo del Arte"
    },

    metro:
      "Banco de España · L2 / Estación del Arte · L1",

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
      "https://www.museothyssen.org/en/visit/opening-hours-prices",

    description: {
      fr: "Le Thyssen-Bornemisza complète parfaitement le Prado et le Reina Sofía avec un parcours à travers plusieurs siècles d’art occidental, des maîtres anciens jusqu’aux grands mouvements du XXe siècle.",
      en: "The Thyssen-Bornemisza perfectly complements the Prado and Reina Sofía with a journey through several centuries of Western art, from old masters to the major movements of the 20th century."
    },

    highlights: {
      fr: [
        "Les maîtres anciens",
        "Les impressionnistes et postimpressionnistes",
        "Van Gogh, Gauguin et Degas",
        "L’art moderne avec Hopper, Kandinsky ou Picasso"
      ],

      en: [
        "The old masters",
        "The Impressionists and Post-Impressionists",
        "Van Gogh, Gauguin and Degas",
        "Modern art including Hopper, Kandinsky and Picasso"
      ]
    },

    tip: {
      fr: "Réservez à l’avance et utilisez les parcours proposés par le musée pour cibler les œuvres qui vous intéressent. Si vous prévoyez aussi Prado et Reina Sofía, comparez le pass Paseo del Arte.",
      en: "Book in advance and use the museum’s suggested routes to focus on the works that interest you most. If Prado and Reina Sofía are also planned, compare the Paseo del Arte pass."
    }
  },

  /* =====================================================
     10. MUSÉE REINA SOFÍA
  ===================================================== */

  {
    id: "musee-reina-sofia",

    coordinates: {
      lat: 40.4085885,
      lng: -3.6942213
    },

    name: {
      fr: "Musée Reina Sofía",
      en: "Reina Sofía Museum"
    },

    image:
      "images/lieux/musee-reina-sofia.webp",

    photo: {
      author: "David Short from Windsor, UK",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_(34162760310).jpg"
    },

    district: {
      fr: "Paseo del Arte",
      en: "Paseo del Arte"
    },

    metro:
      "Estación del Arte · L1 / Atocha · L1",

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
      "https://www.museoreinasofia.es/en/visit/opening-times/",

    description: {
      fr: "Le Musée Reina Sofía est la grande référence madrilène pour l’art moderne et contemporain espagnol. Picasso, Dalí et Miró y occupent une place majeure, avec Guernica comme œuvre phare.",
      en: "The Reina Sofía Museum is Madrid’s leading institution for Spanish modern and contemporary art. Picasso, Dalí and Miró play a major role, with Guernica as the museum’s defining masterpiece."
    },

    highlights: {
      fr: [
        "Guernica de Picasso",
        "Les œuvres de Salvador Dalí",
        "Les œuvres de Joan Miró",
        "Les bâtiments Sabatini et Nouvel"
      ],

      en: [
        "Picasso’s Guernica",
        "Works by Salvador Dalí",
        "Works by Joan Miró",
        "The Sabatini and Nouvel buildings"
      ]
    },

    tip: {
      fr: "Réservez votre entrée et préparez un parcours autour de Guernica et des artistes qui vous intéressent. Si les trois grands musées sont au programme, comparez le pass Paseo del Arte avant d’acheter séparément.",
      en: "Book your admission and plan a route around Guernica and the artists that interest you most. If all three major museums are on your list, compare the Paseo del Arte pass first."
    }
  },

  /* =====================================================
     11. PLAZA DE ORIENTE
  ===================================================== */

  {
    id: "plaza-oriente",

    coordinates: {
      lat: 40.4186362,
      lng: -3.7120978
    },

    name: {
      fr: "Plaza de Oriente",
      en: "Plaza de Oriente"
    },

    image:
      "images/lieux/plaza-oriente.webp",

    photo: {
      author: "Oliver Gargan",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_-_Royal_Palace_of_Madrid_-_20171027160239.jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Madrid de los Austrias"
    },

    metro:
      "Ópera · L2, L5, R",

    hours: {
      type: "text",
      fr: "Toujours accessible",
      en: "Always accessible"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Entre le Palais royal et le Teatro Real, la Plaza de Oriente forme une élégante transition entre architecture monumentale et jardins. Son axe central est dominé par la spectaculaire statue équestre de Philippe IV.",
      en: "Between the Royal Palace and Teatro Real, Plaza de Oriente forms an elegant transition between monumental architecture and gardens. Its central axis is dominated by the spectacular equestrian statue of Philip IV."
    },

    highlights: {
      fr: [
        "La statue équestre de Philippe IV",
        "Les jardins de la Plaza de Oriente",
        "La façade orientale du Palais royal",
        "Le Teatro Real"
      ],

      en: [
        "The equestrian statue of Philip IV",
        "The Plaza de Oriente Gardens",
        "The eastern façade of the Royal Palace",
        "Teatro Real"
      ]
    },

    tip: {
      fr: "Pour une belle photo du Palais royal, placez-vous dans les jardins et utilisez les statues royales comme premier plan. Le cadrage donne beaucoup plus de profondeur qu’une simple photo de la façade.",
      en: "For a striking Royal Palace photo, stand in the gardens and use the royal statues as a foreground. This composition adds far more depth than a straightforward shot of the façade."
    }
  },

  /* =====================================================
     12. TEMPLE DE DEBOD
  ===================================================== */

  {
    id: "temple-debod",

    coordinates: {
      lat: 40.4240718,
      lng: -3.717736
    },

    name: {
      fr: "Temple de Debod",
      en: "Temple of Debod"
    },

    image:
      "images/lieux/temple-debod.webp",

    photo: {
      author: "Choniron",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0 ES",
      url: "https://commons.wikimedia.org/wiki/File:El_Templo_de_Debod.JPG"
    },

    district: {
      fr: "Princesa",
      en: "Princesa"
    },

    metro:
      "Plaza de España · L2, L3, L10 / Ventura Rodríguez · L3",

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
      "https://www.esmadrid.com/en/tourist-information/temple-debod",

    description: {
      fr: "Ce temple égyptien du IIe siècle av. J.-C. a été offert à l’Espagne par l’Égypte puis reconstruit à Madrid. Son emplacement, à proximité de Plaza de España, en fait l’un des monuments les plus singuliers de la capitale.",
      en: "This Egyptian temple dating from the 2nd century BC was gifted to Spain by Egypt and rebuilt in Madrid. Its location near Plaza de España makes it one of the capital’s most unusual monuments."
    },

    highlights: {
      fr: [
        "La chapelle d’Adijalamani",
        "Les reliefs égyptiens",
        "Les pylônes qui précèdent le temple",
        "Les jardins et la vue vers l’ouest de Madrid"
      ],

      en: [
        "The Chapel of Adijalamani",
        "The Egyptian reliefs",
        "The pylons leading to the temple",
        "The gardens and west-facing views over Madrid"
      ]
    },

    tip: {
      fr: "Arrivez environ une heure avant le coucher du soleil pour profiter de la lumière et trouver votre point de vue. Prévoyez des chaussures confortables : plusieurs accès depuis le centre comportent escaliers et montées.",
      en: "Arrive about an hour before sunset to enjoy the changing light and find your viewpoint. Wear comfortable shoes, as several approaches from the city centre involve stairs and uphill sections."
    }
  },

  /* =====================================================
     13. PLAZA DE ESPAÑA
  ===================================================== */

  {
    id: "plaza-espana",

    coordinates: {
      lat: 40.4229494,
      lng: -3.7128521
    },

    name: {
      fr: "Plaza de España",
      en: "Plaza de España"
    },

    image:
      "images/lieux/plaza-espana.webp",

    photo: {
      author: "Tim Adams from San Francisco",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Plaza_de_Espa%C3%B1a_in_Madrid_%2828693792130%29.jpg"
    },

    district: {
      fr: "Princesa",
      en: "Princesa"
    },

    metro:
      "Plaza de España · L2, L3, L10",

    hours: {
      type: "text",
      fr: "Toujours accessible",
      en: "Always accessible"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "À l’extrémité ouest de Gran Vía, Plaza de España associe espaces piétons, jardins, monuments et grands immeubles emblématiques. Son monument à Cervantès est l’un des ensembles sculptés les plus photographiés du centre.",
      en: "At the western end of Gran Vía, Plaza de España combines pedestrian spaces, gardens, monuments and iconic high-rise buildings. Its Cervantes monument is one of the most photographed sculptural ensembles in central Madrid."
    },

    highlights: {
      fr: [
        "Le monument à Miguel de Cervantès",
        "Don Quichotte et Sancho Panza",
        "La Torre de Madrid",
        "L’Edificio España"
      ],

      en: [
        "The monument to Miguel de Cervantes",
        "Don Quixote and Sancho Panza",
        "Torre de Madrid",
        "Edificio España"
      ]
    },

    tip: {
      fr: "Ne manquez pas la photo avec Don Quichotte et Sancho Panza. Décalez-vous légèrement pour intégrer aussi le monument à Cervantès et les grandes tours de la place dans votre cadrage.",
      en: "Don’t miss a photo with Don Quixote and Sancho Panza. Move slightly to the side to include the Cervantes monument and the square’s landmark towers in the same frame."
    }
  },

  /* =====================================================
     14. ARÈNES DE LAS VENTAS
  ===================================================== */

  {
    id: "plaza-las-ventas",

    coordinates: {
      lat: 40.4317768,
      lng: -3.6635285
    },

    name: {
      fr: "Arènes de Las Ventas",
      en: "Las Ventas Bullring"
    },

    image:
      "images/lieux/plaza-las-ventas.webp",

    photo: {
      author: "Luis García",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Plaza_de_Toros_de_Las_Ventas_%28Madrid%29_04.jpg"
    },

    district: {
      fr: "Barrio de Salamanca",
      en: "Barrio de Salamanca"
    },

    metro:
      "Ventas · L2, L5",

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
      "https://lasventastour.com/en/opening-times/",

    description: {
      fr: "Inaugurées en 1931, les arènes de Las Ventas sont l’un des édifices néo-mudéjars les plus impressionnants de Madrid. Leur architecture de brique et de céramique mérite l’arrêt, indépendamment de l’intérêt que l’on porte à la tauromachie.",
      en: "Opened in 1931, Las Ventas is one of Madrid’s most impressive Neo-Mudéjar buildings. Its brick and ceramic architecture makes it worth seeing regardless of your interest in bullfighting."
    },

    highlights: {
      fr: [
        "La façade néo-mudéjare",
        "Les azulejos décoratifs",
        "L’arène et les gradins",
        "Le musée taurin"
      ],

      en: [
        "The Neo-Mudéjar façade",
        "The decorative ceramic tiles",
        "The arena and stands",
        "The Bullfighting Museum"
      ]
    },

    tip: {
      fr: "Avant d’entrer, faites le tour des arènes et utilisez les statues de toreros comme premier plan. En les alignant avec la façade, vous obtiendrez un cliché beaucoup plus représentatif de Las Ventas.",
      en: "Before going inside, walk around the bullring and use the matador statues as a foreground. Aligning them with the façade creates a much more distinctive photo of Las Ventas."
    }
  },

  /* =====================================================
     15. GRAN VÍA
  ===================================================== */

  {
    id: "gran-via",

    coordinates: {
      lat: 40.4200298,
      lng: -3.7021091
    },

    name: {
      fr: "Gran Vía",
      en: "Gran Vía"
    },

    image:
      "images/lieux/gran-via.webp",

    photo: {
      author: "Español: Felipe Gabaldón",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Gran_V%C3%ADa_%28Madrid%29_1.jpg"
    },

    district: {
      fr: "Sol / Gran Vía",
      en: "Sol / Gran Vía"
    },

    metro:
      "Gran Vía · L1, L5 / Callao · L3, L5",

    hours: {
      type: "text",
      fr: "Toujours accessible",
      en: "Always accessible"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Percée entre 1910 et 1931, Gran Vía est l’avenue emblématique du Madrid moderne. Théâtres, grands magasins, hôtels et bâtiments monumentaux composent l’un des paysages urbains les plus animés de la capitale.",
      en: "Built between 1910 and 1931, Gran Vía is the emblematic avenue of modern Madrid. Theatres, department stores, hotels and monumental buildings create one of the capital’s liveliest urban landscapes."
    },

    highlights: {
      fr: [
        "L’Edificio Metrópolis",
        "L’Edificio Telefónica",
        "L’Edificio Carrión et son enseigne Schweppes",
        "Les théâtres et façades historiques"
      ],

      en: [
        "The Metrópolis Building",
        "The Telefónica Building",
        "The Carrión Building and its Schweppes sign",
        "The historic theatres and façades"
      ]
    },

    tip: {
      fr: "En fin de journée, montez sur l’un des rooftops de Gran Vía. Avec une simple consommation ou un billet selon l’adresse, vous profitez d’un superbe panorama sur Madrid au coucher du soleil.",
      en: "Late in the day, head up to one of Gran Vía’s rooftops. Depending on the venue, a drink or admission ticket gives you a superb sunset panorama over Madrid."
    }
  },

  /* =====================================================
     16. MERCADO DE SAN MIGUEL
  ===================================================== */

  {
    id: "mercado-san-miguel",

    coordinates: {
      lat: 40.4153959,
      lng: -3.7089168
    },

    name: {
      fr: "Mercado de San Miguel",
      en: "San Miguel Market"
    },

    image:
      "images/lieux/mercado-san-miguel.webp",

    photo: {
      author: "Fernando",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Mercado_de_San_Miguel_2025.jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Madrid de los Austrias"
    },

    metro:
      "Ópera · L2, L5, R / Sol · L1, L2, L3",

    hours: {
      type: "text",
      fr: "10h00 - minuit (dimanche à jeudi) / 10h00 - 1h00 (vendredi, samedi et jours fériés)",
      en: "10am - midnight (Sunday to Thursday) / 10am - 1am (Fridays, Saturdays and holidays)"
    },

    price: {
      type: "free",
      fr: "Entrée gratuite",
      en: "Free entry"
    },

    officialUrl:
      "https://mercadodesanmiguel.es/en/",

    description: {
      fr: "À quelques pas de Plaza Mayor, le Mercado de San Miguel transforme un marché historique en espace gastronomique où de nombreux comptoirs proposent tapas, produits espagnols, desserts et boissons.",
      en: "A few steps from Plaza Mayor, San Miguel Market transforms a historic market into a gastronomic space where numerous stalls serve tapas, Spanish products, desserts and drinks."
    },

    highlights: {
      fr: [
        "L’architecture métallique du marché",
        "Les comptoirs de tapas",
        "Les produits espagnols à déguster sur place",
        "L’ambiance animée près de Plaza Mayor"
      ],

      en: [
        "The market’s iron architecture",
        "The tapas stalls",
        "Spanish products to taste on site",
        "The lively atmosphere near Plaza Mayor"
      ]
    },

    tip: {
      fr: "Évitez si possible les heures de pointe du déjeuner et du dîner. Vous circulerez plus facilement entre les comptoirs et pourrez composer tranquillement votre dégustation avec plusieurs petites portions différentes.",
      en: "Avoid peak lunch and dinner hours if possible. You’ll move more easily between the stalls and have more time to build your own tasting from several different small portions."
    }
  },

  /* =====================================================
     17. STADE SANTIAGO BERNABÉU
  ===================================================== */

  {
    id: "santiago-bernabeu",

    coordinates: {
      lat: 40.4531227,
      lng: -3.6883509
    },

    name: {
      fr: "Stade Santiago Bernabéu",
      en: "Santiago Bernabéu Stadium"
    },

    image:
      "images/lieux/santiago-bernabeu.webp",

    photo: {
      author: "Fernando Pascullo",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Panoramic_santiago_bernabeu.jpg"
    },

    district: {
      fr: "Castellana",
      en: "Castellana"
    },

    metro:
      "Santiago Bernabéu · L10",

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
      "https://www.realmadrid.com/en-US/tour-bernabeu",

    description: {
      fr: "Stade emblématique du Real Madrid, le Santiago Bernabéu est devenu une attraction touristique à part entière. Le tour permet de découvrir le musée du club, différents espaces du stade et une vue panoramique sur l’intérieur de l’enceinte.",
      en: "Home of Real Madrid, the Santiago Bernabéu has become a major tourist attraction in its own right. The tour includes the club museum, different stadium areas and a panoramic view inside the venue."
    },

    highlights: {
      fr: [
        "Le musée du Real Madrid",
        "La vue panoramique sur le stade",
        "Les différents espaces accessibles pendant le tour",
        "Les trophées et moments historiques du club"
      ],

      en: [
        "The Real Madrid Museum",
        "The panoramic stadium view",
        "The different areas accessible during the tour",
        "The club’s trophies and historic moments"
      ]
    },

    tip: {
      fr: "Avant de réserver, vérifiez le calendrier des matchs et événements. Certains espaces du Tour Bernabéu peuvent être fermés ou accessibles différemment les jours où le stade accueille une rencontre ou un événement.",
      en: "Before booking, check the match and event calendar. Some areas of the Bernabéu Tour may be closed or accessed differently on days when the stadium is hosting a match or event."
    }
  }

];