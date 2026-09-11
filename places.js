/* =========================================================
   TRAVELOPTIM MADRID — PLACES
========================================================= */

/*
  SOMMAIRE

  1. Plaza de la Villa
  2. Plaza de la Paja
  3. Plaza de Cascorro
  4. Plaza de Santa Ana
  5. Plaza del Dos de Mayo
  6. Plaza de las Cortes
  7. Plaza de Pablo Ruiz Picasso
  8. Plaza de Jacinto Benavente
  9. Plaza de Callao
  10. Plaza de Colón
  11. Plaza de Ramales
  12. Plaza de Castilla
  13. Plaza de Salvador Dalí
*/


const places = [


  // =========================================================
  // 1. PLAZA DE LA VILLA
  // =========================================================

  {
    id: "plaza-de-la-villa",

    coordinates: {
      lat: 40.4152702,
      lng: -3.710226
    },

    name: {
      fr: "Plaza de la Villa",
      en: "Plaza de la Villa"
    },

    image:
      "images/lieux/plaza-de-la-villa.webp",

    photo: {
      author: "Enric",
      source: "Wikimedia Commons",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:183_Casa_de_Cisneros_i_Casa_de_la_Villa,_Plaza_de_la_Villa_4-5_(Madrid).jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Madrid de los Austrias"
    },

    metro:
      "Ópera (L2, L5, R) · Sol (L1, L2, L3)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "L’une des places historiques les mieux conservées de Madrid, bordée de bâtiments datant de plusieurs siècles au cœur du Madrid des Habsbourg.",
      en: "One of Madrid’s best-preserved historic squares, surrounded by buildings from several centuries in the heart of Habsburg Madrid."
    },

    highlights: {
      fr: [
        "Casa y Torre de los Lujanes",
        "Casa de Cisneros",
        "Casa de la Villa",
        "Statue d’Álvaro de Bazán"
      ],
      en: [
        "Casa y Torre de los Lujanes",
        "Casa de Cisneros",
        "Casa de la Villa",
        "Statue of Álvaro de Bazán"
      ]
    },

    tip: {
      fr: "Repérez les trois rues médiévales qui partent de la place : Codo, Cordón et Madrid. Poursuivez ensuite vers la Plaza Mayor, toute proche.",
      en: "Spot the three medieval streets leading off the square: Codo, Cordón and Madrid. Then continue to nearby Plaza Mayor."
    }
  },


  // =========================================================
  // 2. PLAZA DE LA PAJA
  // =========================================================

  {
    id: "plaza-de-la-paja",

    coordinates: {
      lat: 40.4126051,
      lng: -3.7114786
    },

    name: {
      fr: "Plaza de la Paja",
      en: "Plaza de la Paja"
    },

    image:
      "images/lieux/plaza-de-la-paja.webp",

    photo: {
      author: "Bernard Gagnon",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Plaza_de_la_Paja_02.jpg?uselang=fr"
    },

    district: {
      fr: "La Latina",
      en: "La Latina"
    },

    metro:
      "La Latina (L5)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Une place en pente pleine de caractère qui rappelle le Madrid médiéval et constitue l’un des coins les plus agréables de La Latina.",
      en: "A characterful sloping square that evokes medieval Madrid and forms one of La Latina’s most charming corners."
    },

    highlights: {
      fr: [
        "Jardins du Príncipe de Anglona",
        "Capilla del Obispo",
        "Église San Andrés",
        "Architecture du vieux Madrid"
      ],
      en: [
        "Príncipe de Anglona Gardens",
        "Bishop’s Chapel",
        "San Andrés Church",
        "Old Madrid architecture"
      ]
    },

    tip: {
      fr: "Entrez dans les Jardins du Príncipe de Anglona, dissimulés derrière leurs murs au bord de la place : un petit jardin historique facile à manquer.",
      en: "Step into the Príncipe de Anglona Gardens, hidden behind walls beside the square: a small historic garden that is easy to miss."
    }
  },


  // =========================================================
  // 3. PLAZA DE CASCORRO
  // =========================================================

  {
    id: "plaza-de-cascorro",

    coordinates: {
      lat: 40.4106587,
      lng: -3.7072175
    },

    name: {
      fr: "Plaza de Cascorro",
      en: "Plaza de Cascorro"
    },

    image:
      "images/lieux/plaza-de-cascorro.webp",

    photo: {
      author: "Javier Perez Montes",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Fiestas_de_San_Cayetano_2026_-_Plaza_de_Cascorro_-_Madrid_05.jpg"
    },

    district: {
      fr: "La Latina",
      en: "La Latina"
    },

    metro:
      "La Latina (L5) · Tirso de Molina (L1)",

    hours: {
      type: "text",
      fr: "Espace public · El Rastro dim. et jours fériés 9 h–15 h",
      en: "Public square · El Rastro Sun & public holidays 9am–3pm"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Point de départ emblématique d’El Rastro, le célèbre marché à ciel ouvert qui descend à travers les rues de La Latina.",
      en: "The emblematic starting point of El Rastro, Madrid’s famous open-air market spreading through the streets of La Latina."
    },

    highlights: {
      fr: [
        "Statue d’Eloy Gonzalo",
        "Départ d’El Rastro",
        "Ribera de Curtidores",
        "Ambiance traditionnelle de La Latina"
      ],
      en: [
        "Eloy Gonzalo statue",
        "Starting point of El Rastro",
        "Ribera de Curtidores",
        "Traditional La Latina atmosphere"
      ]
    },

    tip: {
      fr: "Le dimanche, commencez ici puis descendez Ribera de Curtidores : vous suivrez El Rastro dans son sens le plus naturel plutôt que de remonter la pente.",
      en: "On Sunday, start here and walk down Ribera de Curtidores: you’ll follow El Rastro in its most natural direction instead of climbing uphill."
    }
  },


  // =========================================================
  // 4. PLAZA DE SANTA ANA
  // =========================================================

  {
    id: "plaza-de-santa-ana",

    coordinates: {
      lat: 40.4149349,
      lng: -3.7007559
    },

    name: {
      fr: "Plaza de Santa Ana",
      en: "Plaza de Santa Ana"
    },

    image:
      "images/lieux/plaza-de-santa-ana.webp",

    photo: {
      author: "El fosilmaníaco",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Plaza_Santa_Ana_May2013.JPG"
    },

    district: {
      fr: "Barrio de las Letras",
      en: "Barrio de las Letras"
    },

    metro:
      "Antón Martín (L1) · Sol (L1, L2, L3)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Cœur animé du Barrio de las Letras, cette place réunit littérature, théâtre, terrasses et plusieurs références aux grands écrivains espagnols.",
      en: "The lively heart of the Literary Quarter, combining literature, theatre, terraces and tributes to major Spanish writers."
    },

    highlights: {
      fr: [
        "Statue de Federico García Lorca",
        "Statue de Calderón de la Barca",
        "Teatro Español",
        "Terrasses historiques"
      ],
      en: [
        "Federico García Lorca statue",
        "Calderón de la Barca statue",
        "Teatro Español",
        "Historic terraces"
      ]
    },

    tip: {
      fr: "Faites une photo avec la statue de García Lorca face au Teatro Español, puis descendez Calle de las Huertas pour découvrir ses citations littéraires gravées au sol.",
      en: "Take a photo with García Lorca’s statue facing Teatro Español, then walk down Calle de las Huertas to see literary quotations engraved in the pavement."
    }
  },


  // =========================================================
  // 5. PLAZA DEL DOS DE MAYO
  // =========================================================

  {
    id: "plaza-del-dos-de-mayo",

    coordinates: {
      lat: 40.426999,
      lng: -3.7040303
    },

    name: {
      fr: "Plaza del Dos de Mayo",
      en: "Plaza del Dos de Mayo"
    },

    image:
      "images/lieux/plaza-del-dos-de-mayo.webp",

    photo: {
      author: "Vsieger",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:PlazadelDosdeMayo.jpg"
    },

    district: {
      fr: "Malasaña",
      en: "Malasaña"
    },

    metro:
      "Tribunal (L1, L10) · Bilbao (L1, L4)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Cœur de Malasaña et lieu de mémoire du soulèvement madrilène du 2 mai 1808 contre les troupes napoléoniennes.",
      en: "The heart of Malasaña and a memorial to Madrid’s uprising against Napoleon’s troops on 2 May 1808."
    },

    highlights: {
      fr: [
        "Monument à Daoíz et Velarde",
        "Ancienne arche de Monteleón",
        "Terrasses",
        "Ambiance de Malasaña"
      ],
      en: [
        "Daoíz and Velarde Monument",
        "Old Monteleón arch",
        "Outdoor terraces",
        "Malasaña atmosphere"
      ]
    },

    tip: {
      fr: "Observez le monument central : l’arche derrière Daoíz et Velarde provient de l’ancienne caserne de Monteleón liée au soulèvement de 1808.",
      en: "Look closely at the central monument: the arch behind Daoíz and Velarde comes from the former Monteleón barracks linked to the 1808 uprising."
    }
  },


  // =========================================================
  // 6. PLAZA DE LAS CORTES
  // =========================================================

  {
    id: "plaza-de-las-cortes",

    coordinates: {
      lat: 40.4157349,
      lng: -3.6959167
    },

    name: {
      fr: "Plaza de las Cortes",
      en: "Plaza de las Cortes"
    },

    image:
      "images/lieux/plaza-de-las-cortes.webp",

    photo: {
      author: "Vanbasten 23",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: ""
    },

    district: {
      fr: "Barrio de las Letras",
      en: "Barrio de las Letras"
    },

    metro:
      "Sevilla (L2) · Banco de España (L2)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Place élégante dominée par le Congreso de los Diputados et marquée par la présence de Miguel de Cervantes au centre de son jardin.",
      en: "An elegant square dominated by the Congress of Deputies and marked by Miguel de Cervantes’ statue in its central garden."
    },

    highlights: {
      fr: [
        "Statue de Miguel de Cervantes",
        "Congreso de los Diputados",
        "Lions du Congrès",
        "Architecture monumentale"
      ],
      en: [
        "Miguel de Cervantes statue",
        "Congress of Deputies",
        "Congress lions",
        "Monumental architecture"
      ]
    },

    tip: {
      fr: "Photographiez Cervantes avec le Congreso en arrière-plan, puis poursuivez vers le Museo Thyssen-Bornemisza : il se trouve à quelques minutes à pied.",
      en: "Photograph Cervantes with the Congress behind him, then continue to the Thyssen-Bornemisza Museum, just a few minutes away on foot."
    }
  },


  // =========================================================
  // 7. PLAZA DE PABLO RUIZ PICASSO
  // =========================================================

  {
    id: "plaza-pablo-ruiz-picasso",

    coordinates: {
      lat: 40.4505696,
      lng: -3.6925274
    },

    name: {
      fr: "Plaza de Pablo Ruiz Picasso",
      en: "Plaza de Pablo Ruiz Picasso"
    },

    image:
      "images/lieux/plaza-pablo-ruiz-picasso.webp",

    photo: {
      author: "Zarateman",
      source: "Wikimedia Commons",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_-_AZCA,_Plaza_de_Pablo_Ruiz_Picasso_3.jpg"
    },

    district: {
      fr: "Castellana",
      en: "Castellana"
    },

    metro:
      "Nuevos Ministerios (L6, L8, L10) · Santiago Bernabéu (L10)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Grande place piétonne intégrée au quartier d’affaires AZCA, entourée de tours qui illustrent le visage moderne et financier de Madrid.",
      en: "A large pedestrian square within the AZCA business district, surrounded by towers showcasing Madrid’s modern financial skyline."
    },

    highlights: {
      fr: [
        "Quartier d’affaires AZCA",
        "Torre Picasso",
        "Architecture contemporaine",
        "Skyline de Madrid"
      ],
      en: [
        "AZCA business district",
        "Torre Picasso",
        "Contemporary architecture",
        "Madrid skyline"
      ]
    },

    tip: {
      fr: "Combinez cette place avec le Santiago Bernabéu : quelques minutes à pied suffisent pour passer du quartier des gratte-ciel au stade.",
      en: "Combine this square with Santiago Bernabéu: a short walk takes you from Madrid’s high-rise business district to the stadium."
    }
  },


  // =========================================================
  // 8. PLAZA DE JACINTO BENAVENTE
  // =========================================================

  {
    id: "plaza-de-jacinto-benavente",

    coordinates: {
      lat: 40.414296,
      lng: -3.7033152
    },

    name: {
      fr: "Plaza de Jacinto Benavente",
      en: "Plaza de Jacinto Benavente"
    },

    image:
      "images/lieux/plaza-de-jacinto-benavente.webp",

    photo: {
      author: "Luis García",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Teatro_Calder%C3%B3n_(Madrid)_02.jpg?uselang=fr"
    },

    district: {
      fr: "Sol / Gran Vía",
      en: "Sol / Gran Vía"
    },

    metro:
      "Sol (L1, L2, L3) · Tirso de Molina (L1)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Place centrale située entre Sol, Plaza Mayor et le Barrio de las Letras, nommée en hommage au dramaturge espagnol Jacinto Benavente.",
      en: "A central square between Sol, Plaza Mayor and the Literary Quarter, named after Spanish playwright Jacinto Benavente."
    },

    highlights: {
      fr: [
        "Monument à Jacinto Benavente",
        "Teatro Calderón",
        "Architecture du centre",
        "Connexion avec Sol"
      ],
      en: [
        "Jacinto Benavente Monument",
        "Teatro Calderón",
        "Central Madrid architecture",
        "Connection with Sol"
      ]
    },

    tip: {
      fr: "Utilisez-la comme liaison entre deux secteurs : Plaza Mayor d’un côté et Plaza de Santa Ana de l’autre sont toutes deux accessibles à pied.",
      en: "Use it as a link between two areas: Plaza Mayor on one side and Plaza de Santa Ana on the other are both within easy walking distance."
    }
  },


  // =========================================================
  // 9. PLAZA DE CALLAO
  // =========================================================

  {
    id: "plaza-de-callao",

    coordinates: {
      lat: 40.4199109,
      lng: -3.7059113
    },

    name: {
      fr: "Plaza de Callao",
      en: "Plaza de Callao"
    },

    image:
      "images/lieux/plaza-de-callao.webp",

    photo: {
      author: "Diriye Amey from Locarno, Switzerland",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:City_of_Madrid_(18038988892).jpg"
    },

    district: {
      fr: "Sol / Gran Vía",
      en: "Sol / Gran Vía"
    },

    metro:
      "Callao (L3, L5)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "L’un des carrefours les plus animés de Gran Vía, reconnaissable à ses cinémas, ses enseignes lumineuses et ses grands bâtiments urbains.",
      en: "One of Gran Vía’s liveliest junctions, recognisable for its cinemas, illuminated signs and landmark urban buildings."
    },

    highlights: {
      fr: [
        "Edificio Carrión",
        "Enseigne Schweppes",
        "Cines Callao",
        "Gran Vía"
      ],
      en: [
        "Carrión Building",
        "Schweppes sign",
        "Callao Cinemas",
        "Gran Vía"
      ]
    },

    tip: {
      fr: "Pour la photo emblématique, cherchez l’angle réunissant l’Edificio Carrión et son enseigne Schweppes, puis poursuivez simplement votre balade sur Gran Vía.",
      en: "For the classic photo, find an angle that includes the Carrión Building and its Schweppes sign, then simply continue your walk along Gran Vía."
    }
  },


  // =========================================================
  // 10. PLAZA DE COLÓN
  // =========================================================

  {
    id: "plaza-de-colon",

    coordinates: {
      lat: 40.4251548,
      lng: -3.6902273
    },

    name: {
      fr: "Plaza de Colón",
      en: "Plaza de Colón"
    },

    image:
      "images/lieux/plaza-de-colon.webp",

    photo: {
      author: "Suicasmo",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Plaza_de_Col%C3%B3n,_Madrid_20180720.jpg"
    },

    district: {
      fr: "Barrio de Salamanca",
      en: "Barrio de Salamanca"
    },

    metro:
      "Colón (L4) · Serrano (L4)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Grande place dédiée à Christophe Colomb, à la jonction de la Castellana, Recoletos et du Barrio de Salamanca.",
      en: "A major square dedicated to Christopher Columbus at the junction of Castellana, Recoletos and the Salamanca district."
    },

    highlights: {
      fr: [
        "Monument à Christophe Colomb",
        "Jardines del Descubrimiento",
        "Torres de Colón",
        "Sculpture Julia de Jaume Plensa"
      ],
      en: [
        "Christopher Columbus Monument",
        "Jardines del Descubrimiento",
        "Torres de Colón",
        "Julia sculpture by Jaume Plensa"
      ]
    },

    tip: {
      fr: "Après le monument à Colomb, traversez vers la Biblioteca Nacional et le Museo Arqueológico Nacional : les deux sont juste à côté et s’intègrent au même parcours.",
      en: "After the Columbus Monument, head towards the National Library and National Archaeological Museum: both are nearby and fit naturally into the same route."
    }
  },


  // =========================================================
  // 11. PLAZA DE RAMALES
  // =========================================================

  {
    id: "plaza-de-ramales",

    coordinates: {
      lat: 40.417314,
      lng: -3.7117234
    },

    name: {
      fr: "Plaza de Ramales",
      en: "Plaza de Ramales"
    },

    image:
      "images/lieux/plaza-de-ramales.webp",

    photo: {
      author: "Barcex",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_-_Plaza_de_Ramales_-_20110418_152648.jpg"
    },

    district: {
      fr: "Madrid de los Austrias",
      en: "Madrid de los Austrias"
    },

    metro:
      "Ópera (L2, L5, R)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Petite place historique proche du Palacio Real, connue notamment pour son lien avec Diego Velázquez et l’ancienne église de San Juan.",
      en: "A small historic square near the Royal Palace, particularly known for its connection with Diego Velázquez and the former Church of San Juan."
    },

    highlights: {
      fr: [
        "Mémorial de Velázquez",
        "Vestiges de l’ancienne église San Juan",
        "Architecture du Madrid historique",
        "Proximité du Palacio Real"
      ],
      en: [
        "Velázquez memorial",
        "Remains of the former San Juan Church",
        "Historic Madrid architecture",
        "Proximity to the Royal Palace"
      ]
    },

    tip: {
      fr: "Cherchez le mémorial rappelant que Velázquez fut enterré dans l’ancienne église San Juan. Le Palacio Real et la Plaza de Oriente sont ensuite à quelques pas.",
      en: "Look for the memorial recalling that Velázquez was buried in the former San Juan Church. The Royal Palace and Plaza de Oriente are then just steps away."
    }
  },


  // =========================================================
  // 12. PLAZA DE CASTILLA
  // =========================================================

  {
    id: "plaza-de-castilla",

    coordinates: {
      lat: 40.4659224,
      lng: -3.6893333
    },

    name: {
      fr: "Plaza de Castilla",
      en: "Plaza de Castilla"
    },

    image:
      "images/lieux/plaza-de-castilla.webp",

    photo: {
      author: "Bjaglin from Sweden",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Plaza_de_Castilla_(Madrid)_02.jpg"
    },

    district: {
      fr: "Castellana",
      en: "Castellana"
    },

    metro:
      "Plaza de Castilla (L1, L9, L10)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Important carrefour du nord de Madrid marqué par les Torres KIO inclinées et plusieurs monuments contemporains.",
      en: "A major junction in northern Madrid, distinguished by the leaning KIO Towers and several contemporary landmarks."
    },

    highlights: {
      fr: [
        "Puerta de Europa – Torres KIO",
        "Obélisque de Calatrava",
        "Monument à Calvo Sotelo",
        "Paseo de la Castellana"
      ],
      en: [
        "Puerta de Europa – KIO Towers",
        "Calatrava Obelisk",
        "Calvo Sotelo Monument",
        "Paseo de la Castellana"
      ]
    },

    tip: {
      fr: "Placez-vous dans l’axe du Paseo de la Castellana pour photographier les deux Torres KIO inclinées face à face : c’est la composition la plus caractéristique de la place.",
      en: "Stand along the Paseo de la Castellana axis to photograph the two leaning KIO Towers facing each other: it’s the square’s most distinctive composition."
    }
  },


  // =========================================================
  // 13. PLAZA DE SALVADOR DALÍ
  // =========================================================

  {
    id: "plaza-de-salvador-dali",

    coordinates: {
      lat: 40.424047,
      lng: -3.6733196
    },

    name: {
      fr: "Plaza de Salvador Dalí",
      en: "Plaza de Salvador Dalí"
    },

    image:
      "images/lieux/plaza-de-salvador-dali.webp",

    photo: {
      author: "Luis García",
      source: "Wikimedia Commons",
      license: "CC BY-SA 2.5",
      url: "https://commons.wikimedia.org/wiki/File:Plaza_de_Dal%C3%AD_(Madrid)_08.jpg"
    },

    district: {
      fr: "Barrio de Salamanca",
      en: "Barrio de Salamanca"
    },

    metro:
      "Goya (L2, L4)",

    hours: {
      type: "text",
      fr: "Espace public · accès libre",
      en: "Public square · open access"
    },

    price: {
      type: "free",
      fr: "Gratuit",
      en: "Free"
    },

    description: {
      fr: "Place urbaine du quartier de Salamanca aménagée autour d’un ensemble monumental conçu par Salvador Dalí.",
      en: "An urban square in the Salamanca district centred around a monumental ensemble designed by Salvador Dalí."
    },

    highlights: {
      fr: [
        "Dolmen de Dalí",
        "Sculpture Hommage à Newton",
        "Ensemble monumental de Dalí",
        "Architecture urbaine"
      ],
      en: [
        "Dalí Dolmen",
        "Homage to Newton sculpture",
        "Dalí monumental ensemble",
        "Urban architecture"
      ]
    },

    tip: {
      fr: "Ne photographiez pas seulement la sculpture : cadrez ensemble le Dolmen et l’Hommage à Newton pour montrer l’ensemble monumental imaginé par Dalí.",
      en: "Don’t photograph only the sculpture: frame the Dolmen and Homage to Newton together to capture Dalí’s complete monumental ensemble."
    }
  }

];