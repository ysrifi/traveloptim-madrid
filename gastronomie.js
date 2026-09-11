/* =========================================================
   TRAVELOPTIM MADRID
   DONNÉES — GASTRONOMIE

   SOMMAIRE
   1. Restaurants historiques
   2. Spécialités madrilènes
   3. Marchés gastronomiques
========================================================= */

const gastronomie = [

  // =========================================================
  // 1. RESTAURANTS HISTORIQUES
  // =========================================================

  {
    id: "restaurants-historiques",
    type: "restaurants",

    name: {
      fr: "Restaurants historiques",
      en: "Historic restaurants"
    },

    image:
      "images/lieux/restaurants-historiques.webp",

    photo: {
      author: "Brian Adamson from London",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Sobrino_de_Bot%C3%ADn_(47065520984).jpg"
    },

    description: {
      fr: "Quatre adresses emblématiques où l’histoire de Madrid se retrouve autant dans le décor que dans l’assiette.",
      en: "Four iconic addresses where Madrid’s history is reflected as much in the setting as in the food."
    },

    items: [
      {
        name:
          "Botín",

        address:
          "Calle de Cuchilleros, 17",

        note: {
          fr: "Fondé en 1725 et reconnu par Guinness comme le plus ancien restaurant du monde. Sa spécialité emblématique reste le cochon de lait rôti dans son four à bois historique.",
          en: "Founded in 1725 and recognised by Guinness as the world’s oldest restaurant. Its signature speciality remains roast suckling pig cooked in its historic wood-fired oven."
        },

        url:
          "https://botin.es/en/"
      },

      {
        name:
          "Lhardy",

        address:
          "Carrera de San Jerónimo, 8",

        note: {
          fr: "Institution madrilène depuis 1839, célèbre pour son décor du XIXe siècle et son cocido madrileño servi dans un cadre beaucoup plus élégant qu’une taverne traditionnelle.",
          en: "A Madrid institution since 1839, known for its 19th-century décor and Madrid-style stew served in a much more elegant setting than a traditional tavern."
        },

        url:
          "https://lhardy.com/en/"
      },

      {
        name:
          "Casa Labra",

        address:
          "Calle de Tetuán, 12",

        note: {
          fr: "Taverne fondée en 1860 près de Sol, particulièrement connue pour ses tapas de morue frite et ses croquettes de bacalao.",
          en: "A tavern founded in 1860 near Sol, particularly famous for its fried cod tapas and cod croquettes."
        },

        url:
          "http://www.casalabra.es/"
      },

      {
        name:
          "Malacatín",

        address:
          "Calle de la Ruda, 5",

        note: {
          fr: "Taverne familiale ouverte depuis 1895 près d’El Rastro, dont le cocido madrileño constitue la spécialité historique.",
          en: "A family-run tavern open since 1895 near El Rastro, historically renowned for its cocido madrileño."
        },

        url:
          "https://malacatin.com/"
      }
    ]
  },

  // =========================================================
  // 2. SPÉCIALITÉS MADRILÈNES
  // =========================================================

  {
    id: "specialites-madrilenes",
    type: "dishes",

    name: {
      fr: "Spécialités madrilènes",
      en: "Madrid specialties"
    },

    image:
      "images/lieux/specialites-madrilenes.webp",

    photo: {
      author: "ctj71081",
      source: "Wikimedia Commons",
      license: "CC BY-SA 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Churros_con_Chocolate_en_Chocolateria_San_Gines.jpg"
    },

    description: {
      fr: "Six spécialités à connaître pour découvrir Madrid aussi dans l’assiette, du cocido traditionnel aux incontournables churros au chocolat.",
      en: "Six specialties worth knowing to experience Madrid through its food, from traditional cocido to classic churros with hot chocolate."
    },

    items: [
      {
        name: {
          fr: "Cocido madrileño",
          en: "Cocido madrileño"
        },

        description: {
          fr: "Pot-au-feu emblématique à base de pois chiches, légumes et plusieurs viandes. Il est traditionnellement servi en plusieurs services appelés vuelcos.",
          en: "Madrid’s emblematic chickpea stew with vegetables and several types of meat, traditionally served in separate courses known as vuelcos."
        }
      },

      {
        name: {
          fr: "Callos a la madrileña",
          en: "Callos a la madrileña"
        },

        description: {
          fr: "Tripes mijotées dans une sauce généreuse, généralement accompagnées de chorizo et de morcilla. Un grand classique des tavernes madrilènes.",
          en: "Slow-cooked tripe in a rich sauce, usually accompanied by chorizo and blood sausage. A classic dish in traditional Madrid taverns."
        }
      },

      {
        name: {
          fr: "Bocadillo de calamares",
          en: "Calamari sandwich"
        },

        description: {
          fr: "Pain garni de calamars frits, devenu l’un des symboles culinaires du centre de Madrid, particulièrement autour de Plaza Mayor.",
          en: "A bread roll filled with fried calamari, now one of central Madrid’s culinary icons, especially around Plaza Mayor."
        }
      },

      {
        name: {
          fr: "Huevos rotos",
          en: "Huevos rotos"
        },

        description: {
          fr: "Pommes de terre frites recouvertes d’œufs dont le jaune est cassé au moment de servir, souvent accompagnées de jambon, chorizo ou chistorra.",
          en: "Fried potatoes topped with eggs whose yolks are broken just before eating, often accompanied by ham, chorizo or chistorra sausage."
        }
      },

      {
        name: {
          fr: "Churros con chocolate",
          en: "Churros with hot chocolate"
        },

        description: {
          fr: "Churros croustillants servis avec un chocolat chaud épais. À Madrid, ils se dégustent au petit déjeuner, au goûter ou même après une soirée.",
          en: "Crisp churros served with thick hot chocolate. In Madrid, they’re enjoyed for breakfast, an afternoon snack or even after a night out."
        }
      },

      {
        name: {
          fr: "Rosquillas de San Isidro",
          en: "San Isidro rosquillas"
        },

        description: {
          fr: "Petits anneaux de pâte traditionnellement dégustés autour du 15 mai pour les fêtes de San Isidro, notamment dans les versions tontas et listas.",
          en: "Small ring-shaped pastries traditionally eaten around 15 May during the San Isidro festivities, especially in the tontas and listas varieties."
        }
      }
    ]
  },

  // =========================================================
  // 3. MARCHÉS GASTRONOMIQUES
  // =========================================================

  {
    id: "marches-gastronomiques",
    type: "markets",

    name: {
      fr: "Marchés gastronomiques",
      en: "Gourmet markets"
    },

    image:
      "images/lieux/marches-gastronomiques.webp",

    photo: {
      author: "Marek Slusarczyk",
      source: "Wikimedia Commons",
      license: "CC BY 3.0",
      url: "https://commons.wikimedia.org/wiki/File:31_Mercado_San_Miguel_traditional_market,_tourist_attraction_in_Madrid_-_tourist_attractions_of_Spain.JPG"
    },

    description: {
      fr: "Trois marchés très différents pour goûter plusieurs spécialités, faire une pause gourmande ou intégrer facilement un repas à votre parcours.",
      en: "Three very different markets where you can sample several specialties, enjoy a food break or easily fit a meal into your sightseeing route."
    },

    items: [
      {
        name:
          "Mercado de San Miguel",

        address:
          "Plaza de San Miguel, s/n",

        note: {
          fr: "Le plus emblématique et touristique des trois, installé dans une halle en fer centenaire à quelques mètres de Plaza Mayor. Idéal pour goûter plusieurs petites portions plutôt que pour chercher un repas traditionnel assis.",
          en: "The most iconic and tourist-oriented of the three, housed in a century-old iron market hall just steps from Plaza Mayor. Best for sampling several small dishes rather than a traditional sit-down meal."
        },

        url:
          "https://mercadodesanmiguel.es/en/"
      },

      {
        name:
          "Mercado de San Antón",

        address:
          "Calle de Augusto Figueroa, 24",

        note: {
          fr: "Marché moderne de Chueca où cohabitent commerces alimentaires, stands gastronomiques et restauration. Une option pratique à intégrer à une balade Chueca–Malasaña.",
          en: "A modern Chueca market combining food shops, gourmet stalls and restaurants. An easy stop to include in a Chueca–Malasaña walk."
        },

        url:
          "http://www.mercadosananton.com/"
      },

      {
        name:
          "Mercado de San Ildefonso",

        address:
          "Calle de Fuencarral, 57",

        note: {
          fr: "Marché de style street-food réparti sur trois étages, avec plusieurs stands spécialisés et deux terrasses semi-couvertes, entre Malasaña et Chueca.",
          en: "A three-storey street-food-style market with specialist food stalls and two semi-covered terraces between Malasaña and Chueca."
        },

        url:
          "https://mercadodesanildefonso.com/"
      }
    ]
  }

];
