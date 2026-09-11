/* =========================================================
   TRAVELOPTIM MADRID — SHOPPING
========================================================= */

/*
  SOMMAIRE

  1. Shopping au cœur de Madrid
     1.1 Gran Vía
     1.2 Calle de Preciados
     1.3 Calle del Carmen
     1.4 Calle de Fuencarral

  2. Shopping de luxe
     2.1 Calle Serrano
     2.2 Calle José Ortega y Gasset
     2.3 Calle Claudio Coello
     2.4 Calle Jorge Juan

  3. El Corte Inglés
     3.1 Preciados–Callao
     3.2 Castellana
     3.3 Serrano 47
     3.4 Goya

  4. Grands centres commerciaux
     4.1 Centro Comercial Príncipe Pío
     4.2 Plaza Río 2
     4.3 La Gavia
     4.4 Islazul
     4.5 Plenilunio
     4.6 La Vaguada
*/


const shopping = [


  // =========================================================
  // 1. GRANDES ARTÈRES COMMERCIALES DU CENTRE
  // =========================================================

  {
    id: "shopping-centre-ville",

    locations: [
      {
        name: "Gran Vía",
        coordinates: {
          lat: 40.420192,
          lng: -3.703962
        }
      },
      {
        name: "Calle de Preciados",
        coordinates: {
          lat: 40.4186547,
          lng: -3.7051721
        }
      },
      {
        name: "Calle del Carmen",
        coordinates: {
          lat: 40.4185962,
          lng: -3.7046271
        }
      },
      {
        name: "Calle de Fuencarral",
        coordinates: {
          lat: 40.4236947,
          lng: -3.7007061
        }
      }
    ],

    type: "shopping-areas",

    name: {
      fr: "Shopping au cœur de Madrid",
      en: "Shopping in Central Madrid"
    },

    image:
      "images/lieux/shopping-centre-ville.webp",

    photo: {
      author: "Tiia Monto",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_-_Calle_Preciados.jpg"
    },

    description: {
      fr: "Idéal si vous souhaitez intégrer le shopping à votre journée de visite : ces grandes artères relient plusieurs incontournables du centre sans nécessiter de déplacement spécifique.",
      en: "Ideal if you want to combine shopping with sightseeing: these major retail streets connect several central landmarks without requiring a separate trip."
    },

    items: [

      // -------------------------------------------------------
      // 1.1 GRAN VÍA
      // -------------------------------------------------------

      {
        name: "Gran Vía",

        address: {
          fr: "Gran Vía · de Calle Alcalá à Plaza de España",
          en: "Gran Vía · from Calle Alcalá to Plaza de España"
        },

        transport:
          "Gran Vía (L1, L5) · Callao (L3, L5)",

        note: {
          fr: "Le meilleur choix pour les grandes enseignes internationales et espagnoles tout en poursuivant une visite du centre. On y trouve notamment Primark, Zara, H&M et de nombreuses boutiques de mode.",
          en: "A strong choice for major Spanish and international chains while continuing your city-centre sightseeing, including Primark, Zara, H&M and many fashion stores."
        }
      },


      // -------------------------------------------------------
      // 1.2 CALLE DE PRECIADOS
      // -------------------------------------------------------

      {
        name: "Calle de Preciados",

        address: {
          fr: "Entre Puerta del Sol et Plaza de Callao",
          en: "Between Puerta del Sol and Plaza de Callao"
        },

        transport:
          "Sol (L1, L2, L3) · Callao (L3, L5)",

        note: {
          fr: "Grande rue piétonne très pratique pour la mode, les chaussures, accessoires et grands magasins. Elle permet de faire du shopping directement entre Sol et Callao.",
          en: "A major pedestrian shopping street for fashion, shoes, accessories and department stores, directly linking Sol and Callao."
        }
      },


      // -------------------------------------------------------
      // 1.3 CALLE DEL CARMEN
      // -------------------------------------------------------

      {
        name: "Calle del Carmen",

        address: {
          fr: "Entre Puerta del Sol et Plaza de Callao",
          en: "Between Puerta del Sol and Plaza de Callao"
        },

        transport:
          "Sol (L1, L2, L3) · Callao (L3, L5)",

        note: {
          fr: "Parallèle à Preciados, elle complète parfaitement le même parcours commercial piéton et permet de revenir vers Sol sans reprendre exactement le même chemin.",
          en: "Running parallel to Preciados, it completes the same pedestrian shopping circuit and lets you return towards Sol without retracing exactly the same route."
        }
      },


      // -------------------------------------------------------
      // 1.4 CALLE DE FUENCARRAL
      // -------------------------------------------------------

      {
        name: "Calle de Fuencarral",

        address: {
          fr: "De Gran Vía vers Tribunal et Malasaña",
          en: "From Gran Vía towards Tribunal and Malasaña"
        },

        transport:
          "Gran Vía (L1, L5) · Tribunal (L1, L10)",

        note: {
          fr: "À privilégier pour une ambiance plus urbaine : mode contemporaine, sneakers, enseignes jeunes et boutiques indépendantes en direction de Chueca et Malasaña.",
          en: "Best for a more urban shopping atmosphere, with contemporary fashion, sneakers, youth brands and independent shops towards Chueca and Malasaña."
        }
      }

    ]
  },


  // =========================================================
  // 2. SHOPPING DE LUXE — BARRIO DE SALAMANCA
  // =========================================================

  {
    id: "shopping-luxe-salamanca",

    locations: [
      {
        name: "Calle Serrano",
        coordinates: {
          lat: 40.4303567,
          lng: -3.687012
        }
      },
      {
        name: "Calle José Ortega y Gasset",
        coordinates: {
          lat: 40.4301082,
          lng: -3.6813191
        }
      },
      {
        name: "Calle Claudio Coello",
        coordinates: {
          lat: 40.4293567,
          lng: -3.685978
        }
      },
      {
        name: "Calle Jorge Juan",
        coordinates: {
          lat: 40.4236503,
          lng: -3.6828206
        }
      }
    ],

    type: "shopping-areas",

    name: {
      fr: "Shopping de luxe",
      en: "Luxury Shopping"
    },

    image:
      "images/lieux/shopping-luxe-salamanca.webp",

    photo: {
      author: "Zarateman",
      source: "Wikimedia Commons",
      license: "CC0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_-_Brunello_Cucinelli_(Jos%C3%A9_Ortega_y_Gasset_14).jpg"
    },

    description: {
      fr: "Pour les voyageurs à la recherche de grandes maisons internationales, de créateurs espagnols, de maroquinerie, de joaillerie et d’une expérience shopping plus haut de gamme.",
      en: "For travellers looking for international luxury houses, Spanish designers, leather goods, jewellery and a more premium shopping experience."
    },

    items: [

      // -------------------------------------------------------
      // 2.1 CALLE SERRANO
      // -------------------------------------------------------

      {
        name: "Calle Serrano",

        address: {
          fr: "Barrio de Salamanca · axe Serrano",
          en: "Salamanca district · Serrano axis"
        },

        transport:
          "Serrano (L4) · Núñez de Balboa (L5, L9)",

        note: {
          fr: "L’un des principaux axes du luxe madrilène : Loewe, Prada, Gucci, Louis Vuitton, Cartier et de nombreuses maisons espagnoles et internationales.",
          en: "One of Madrid’s principal luxury streets, with Loewe, Prada, Gucci, Louis Vuitton, Cartier and numerous Spanish and international houses."
        }
      },


      // -------------------------------------------------------
      // 2.2 CALLE JOSÉ ORTEGA Y GASSET
      // -------------------------------------------------------

      {
        name: "Calle José Ortega y Gasset",

        address: {
          fr: "Entre Serrano et Velázquez",
          en: "Between Serrano and Velázquez"
        },

        transport:
          "Serrano (L4) · Velázquez (L4)",

        note: {
          fr: "Cœur de la « Milla de Oro », avec notamment Dior, Hermès, Chanel, Valentino, Tiffany & Co. et plusieurs grandes maisons de joaillerie.",
          en: "At the heart of Madrid’s Golden Mile, with Dior, Hermès, Chanel, Valentino, Tiffany & Co. and major jewellery houses."
        }
      },


      // -------------------------------------------------------
      // 2.3 CALLE CLAUDIO COELLO
      // -------------------------------------------------------

      {
        name: "Calle Claudio Coello",

        address: {
          fr: "Barrio de Salamanca",
          en: "Salamanca district"
        },

        transport:
          "Serrano (L4) · Velázquez (L4)",

        note: {
          fr: "Bonne alternative aux deux grands axes pour découvrir davantage de boutiques de créateurs, de chaussures, d’accessoires et de mode premium.",
          en: "A good alternative to the two main avenues for designer boutiques, footwear, accessories and premium fashion."
        }
      },


      // -------------------------------------------------------
      // 2.4 CALLE JORGE JUAN
      // -------------------------------------------------------

      {
        name: "Calle Jorge Juan",

        address: {
          fr: "Entre Serrano et Príncipe de Vergara",
          en: "Between Serrano and Príncipe de Vergara"
        },

        transport:
          "Velázquez (L4) · Príncipe de Vergara (L2, L9)",

        note: {
          fr: "À choisir si vous voulez associer boutiques élégantes et pause gastronomique : Jorge Juan concentre également plusieurs restaurants réputés.",
          en: "Choose it if you want to combine elegant boutiques with a food break, as Jorge Juan is also known for its restaurant scene."
        }
      }

    ]
  },


  // =========================================================
  // 3. EL CORTE INGLÉS
  // =========================================================

  {
    id: "el-corte-ingles",

    locations: [
      {
        name: "El Corte Inglés Preciados–Callao",
        coordinates: {
          lat: 40.4192919,
          lng: -3.7056334
        }
      },
      {
        name: "El Corte Inglés Castellana",
        coordinates: {
          lat: 40.4465222,
          lng: -3.6948748
        }
      },
      {
        name: "El Corte Inglés Serrano",
        coordinates: {
          lat: 40.4300135,
          lng: -3.6875111
        }
      },
      {
        name: "El Corte Inglés Goya",
        coordinates: {
          lat: 40.4249562,
          lng: -3.6763358
        }
      }
    ],

    type: "department-stores",

    name: {
      fr: "El Corte Inglés",
      en: "El Corte Inglés"
    },

    image:
      "images/lieux/el-corte-ingles.webp",

    photo: {
      author: "Luis García",
      source: "Wikimedia Commons",
      license: "CC BY-SA 3.0 ES",
      url: "https://commons.wikimedia.org/wiki/File:El_Corte_Ingl%C3%A9s_Castellana_(Madrid)_01.jpg?uselang=fr"
    },

    description: {
      fr: "À privilégier si vous voulez trouver mode, beauté, souvenirs, gastronomie, électronique et produits espagnols sous un même toit, sans parcourir plusieurs quartiers.",
      en: "A practical choice if you want fashion, beauty, souvenirs, gourmet food, electronics and Spanish products under one roof without visiting several neighbourhoods."
    },

    items: [

      // -------------------------------------------------------
      // 3.1 PRECIADOS–CALLAO
      // -------------------------------------------------------

      {
        name: "El Corte Inglés Preciados–Callao",

        address: {
          fr: "Calle de Preciados, 3 / secteur Callao",
          en: "3 Calle de Preciados / Callao area"
        },

        transport:
          "Sol (L1, L2, L3) · Callao (L3, L5)",

        note: {
          fr: "Le plus facile à intégrer à une première visite : quatre bâtiments entre Sol et Callao. Le bâtiment de Callao possède aussi un Gourmet Experience avec vue sur Gran Vía.",
          en: "The easiest branch to include on a first visit, with four buildings between Sol and Callao. The Callao building also has a Gourmet Experience overlooking Gran Vía."
        },

        url:
          "https://www.elcorteingles.es/centroscomerciales/en/eci/centros/centro-comercial-preciados-callao"
      },


      // -------------------------------------------------------
      // 3.2 CASTELLANA
      // -------------------------------------------------------

      {
        name: "El Corte Inglés Castellana",

        address: {
          fr: "Paseo de la Castellana, 71–79",
          en: "71–79 Paseo de la Castellana"
        },

        transport:
          "Nuevos Ministerios (L6, L8, L10)",

        note: {
          fr: "À privilégier pour une sélection très large et un important espace luxe, avec mode, beauté, joaillerie, maison, technologie et Gourmet Experience.",
          en: "Best for a very broad selection and a major luxury area, with fashion, beauty, jewellery, homeware, technology and a Gourmet Experience."
        },

        url:
          "https://www.elcorteingles.es/centroscomerciales/en/eci/centros/centro-comercial-castellana"
      },


      // -------------------------------------------------------
      // 3.3 SERRANO 47
      // -------------------------------------------------------

      {
        name: "El Corte Inglés Serrano 47",

        address: {
          fr: "Calle de Serrano, 47",
          en: "47 Calle de Serrano"
        },

        transport:
          "Serrano (L4) · Velázquez (L4)",

        note: {
          fr: "La meilleure implantation de l’enseigne si votre priorité est le luxe : mode premium, accessoires, joaillerie et grandes maisons internationales au cœur du Barrio de Salamanca.",
          en: "The best branch if luxury is your priority, with premium fashion, accessories, jewellery and major international houses in the Salamanca district."
        },

        url:
          "https://www.elcorteingles.es/centroscomerciales/en/eci/centros/serrano-mall"
      },


      // -------------------------------------------------------
      // 3.4 GOYA
      // -------------------------------------------------------

      {
        name: "El Corte Inglés Goya",

        address: {
          fr: "Calle de Goya, 76 et 85–87",
          en: "76 and 85–87 Calle de Goya"
        },

        transport:
          "Goya (L2, L4)",

        note: {
          fr: "Bonne option dans Salamanca pour combiner achats du quotidien, mode, maison et produits gastronomiques sans se limiter aux boutiques de luxe de Serrano.",
          en: "A useful Salamanca option for everyday shopping, fashion, homeware and gourmet products without focusing exclusively on Serrano’s luxury boutiques."
        },

        url:
          "https://www.elcorteingles.es/centroscomerciales/en/eci/centros/centro-comercial-goya"
      }

    ]
  },


  // =========================================================
  // 4. GRANDS CENTRES COMMERCIAUX
  // =========================================================

  {
    id: "grands-centres-commerciaux",

    locations: [
      {
        name: "Centro Comercial Príncipe Pío",
        coordinates: {
          lat: 40.4219457,
          lng: -3.7202908
        }
      },
      {
        name: "Plaza Río 2",
        coordinates: {
          lat: 40.390478,
          lng: -3.701943
        }
      },
      {
        name: "La Gavia",
        coordinates: {
          lat: 40.3676421,
          lng: -3.6006227
        }
      },
      {
        name: "Islazul",
        coordinates: {
          lat: 40.3637111,
          lng: -3.737494
        }
      },
      {
        name: "Plenilunio",
        coordinates: {
          lat: 40.4464432,
          lng: -3.5872118
        }
      },
      {
        name: "La Vaguada",
        coordinates: {
          lat: 40.479707,
          lng: -3.7072056
        }
      }
    ],

    type: "shopping-malls",

    name: {
      fr: "Grands centres commerciaux",
      en: "Major Shopping Malls"
    },

    image:
      "images/lieux/grands-centres-commerciaux.webp",

    photo: {
      author: "Álvaro Ibáñez from Madrid, Spain",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Mall_-_Centro_comercial_%286939441435%29.jpg"
    },

    description: {
      fr: "Idéal en famille ou si vous préférez consacrer plusieurs heures au shopping avec commerces, restauration, cinéma et loisirs réunis au même endroit, notamment par mauvais temps.",
      en: "Ideal for families or travellers who prefer several hours of shopping with stores, restaurants, cinemas and leisure activities all in one place, especially in bad weather."
    },

    items: [

      // -------------------------------------------------------
      // 4.1 CENTRO COMERCIAL PRÍNCIPE PÍO
      // -------------------------------------------------------

      {
        name: "Centro Comercial Príncipe Pío",

        address: {
          fr: "Paseo de la Florida, 2",
          en: "2 Paseo de la Florida"
        },

        transport:
          "Príncipe Pío (L6, L10, R) · Cercanías",

        note: {
          fr: "Le plus simple pour un touriste : directement intégré à l’interchange de Príncipe Pío et proche du Palacio Real, de Madrid Río et de Casa de Campo.",
          en: "The easiest mall for visitors: directly connected to the Príncipe Pío transport hub and close to the Royal Palace, Madrid Río and Casa de Campo."
        },

        url:
          "https://principe-pio.klepierre.es/horarios-accesos"
      },


      // -------------------------------------------------------
      // 4.2 PLAZA RÍO 2
      // -------------------------------------------------------

      {
        name: "Plaza Río 2",

        address: {
          fr: "Avenida del Manzanares, 210",
          en: "210 Avenida del Manzanares"
        },

        transport:
          "Legazpi (L3, L6)",

        note: {
          fr: "Très intéressant pour combiner shopping et promenade : le centre se trouve face à Matadero Madrid et directement au bord de Madrid Río, avec une terrasse panoramique.",
          en: "A good shopping-and-sightseeing combination: the mall stands opposite Matadero Madrid beside Madrid Río and includes a panoramic terrace."
        },

        url:
          "https://www.plazario2.com/horarios"
      },


      // -------------------------------------------------------
      // 4.3 LA GAVIA
      // -------------------------------------------------------

      {
        name: "La Gavia",

        address: {
          fr: "Calle Adolfo Bioy Casares, 2",
          en: "2 Calle Adolfo Bioy Casares"
        },

        transport:
          "Las Suertes (L1)",

        note: {
          fr: "L’un des plus grands ensembles commerciaux de Madrid, avec grandes enseignes, restaurants, cinéma et IKEA. À choisir si le shopping constitue une activité à part entière.",
          en: "One of Madrid’s largest shopping complexes, with major brands, restaurants, cinema and IKEA. Best when shopping itself is a main activity."
        },

        url:
          "https://la-gavia.klepierre.es/horarios-accesos"
      },


      // -------------------------------------------------------
      // 4.4 ISLAZUL
      // -------------------------------------------------------

      {
        name: "Islazul",

        address: {
          fr: "Calle de la Calderilla, 1",
          en: "1 Calle de la Calderilla"
        },

        transport:
          "San Francisco (L11) + bus 118",

        note: {
          fr: "Grand centre familial du sud de Madrid avec plus de 180 établissements, restauration, cinéma et bowling. Depuis la L11, le bus 118 constitue notamment une connexion pratique.",
          en: "A large family-oriented mall in southern Madrid with more than 180 establishments, restaurants, cinema and bowling. Bus 118 provides a useful connection from Line 11."
        },

        url:
          "https://islazul.com/horarios-y-aperturas/"
      },


      // -------------------------------------------------------
      // 4.5 PLENILUNIO
      // -------------------------------------------------------

      {
        name: "Plenilunio",

        address: {
          fr: "Calle Aracne, s/n",
          en: "Calle Aracne, s/n"
        },

        transport:
          "Canillejas (L5) + bus 77",

        note: {
          fr: "À privilégier pour une sortie familiale complète : plus d’une centaine de boutiques, restaurants, 13 salles de cinéma, bowling, aire pour enfants et activités d’aventure.",
          en: "A strong choice for a full family outing, with more than a hundred shops, restaurants, 13 cinema screens, bowling, children's facilities and adventure activities."
        },

        url:
          "https://plenilunio.klepierre.es/horarios-accesos"
      },


      // -------------------------------------------------------
      // 4.6 LA VAGUADA
      // -------------------------------------------------------

      {
        name: "La Vaguada",

        address: {
          fr: "Avenida de Monforte de Lemos, 36",
          en: "36 Avenida de Monforte de Lemos"
        },

        transport:
          "Barrio del Pilar (L9) · Herrera Oria (L9) · Peñagrande (L7)",

        note: {
          fr: "Bon compromis entre accessibilité en métro et véritable expérience de mall : nombreuses boutiques, marché alimentaire, restauration, cinéma et loisirs.",
          en: "A good compromise between easy metro access and a full mall experience, with numerous stores, a food market, dining, cinema and leisure."
        },

        url:
          "https://enlavaguada.com/"
      }

    ]
  }

];