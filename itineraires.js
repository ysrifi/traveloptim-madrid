/* =========================================================
   TRAVELOPTIM MADRID — ITINÉRAIRES

   SOMMAIRE

   01. L’essentiel de Madrid en une journée
   02. Week-end prolongé à Madrid — Vendredi
   03. Week-end prolongé à Madrid — Samedi
   04. Week-end prolongé à Madrid — Dimanche
   05. Au cœur de Madrid — Places emblématiques et trésors cachés
   06. Madrid royal — Palais, jardins et panorama
   07. Madrid panoramique — Parcs, vues et monuments de l’ouest
   08. Madrid authentique — Rivière, traditions et vieux quartiers
   09. Madrid tendance — Gran Vía et trésors cachés de Malasaña
   10. Madrid culturel — Triangle d’art et chefs-d’œuvre
   11. Madrid culturel — Trésors méconnus du Paseo del Arte
   12. Madrid élégant — Salamanca, parc et culture
   13. Madrid classique — Retiro et grandes institutions
   14. Madrid moderne — Tours, stade et culture

   STRUCTURE DE CHAQUE ITINÉRAIRE
   - Informations générales
   - Station de départ
   - Station d’arrivée
   - Étapes du parcours
========================================================= */

const itineraires = [

  /* =========================================================
   01. L’ESSENTIEL DE MADRID EN UNE JOURNÉE
========================================================= */

{
    id: "essentiel-madrid-une-journee",

    name: {
      fr: "L’essentiel de Madrid en une journée",
      en: "Madrid Essentials in One Day"
    },

    image:
      "images/itineraires/essentiel-madrid-une-journee.webp",

    duration: {
      fr: "Environ 9 à 10 h",
      en: "About 9 to 10 hours"
    },

    distance: {
      fr: "Environ 8 km à pied",
      en: "About 8 km on foot"
    },

    description: {
      fr:
        "Un parcours complet pour découvrir les grands incontournables de Madrid en une journée, du parc du Retiro au quartier royal puis à Gran Vía.",
      en:
        "A complete one-day route covering Madrid’s main highlights, from Retiro Park to the Royal Quarter and Gran Vía."
    },


    /* =====================================================
       STATION DE DÉPART
    ===================================================== */

    startMetro: {
      station: "Retiro",
      lines: ["2"]
    },


    /* =====================================================
       STATION D'ARRIVÉE
    ===================================================== */

    endMetro: {
      station: "Gran Vía",
      lines: ["1", "5"]
    },


    /* =====================================================
       ÉTAPES DU PARCOURS
    ===================================================== */

    steps: [

      {
        placeId: "puerta-alcala",

        comment: {
          fr:
            "Commencez la journée à la Puerta de Alcalá, l’un des monuments emblématiques de Madrid.",
          en:
            "Start the day at Puerta de Alcalá, one of Madrid’s most iconic monuments."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "parc-retiro",

        comment: {
          fr:
            "Commencez par le parc du Retiro. Ne manquez pas le Palais de Cristal, le Paseo de las Estatuas et le monument à Alphonse XII qui domine le Grand Étang.",
        
          en:
            "Start at El Retiro Park. Don’t miss the Crystal Palace, Paseo de las Estatuas and the Monument to Alfonso XII overlooking the Great Pond."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "san-jeronimo-el-real",

        comment: {
          fr:
            "Quittez le Retiro par la Puerta de Felipe IV pour rejoindre San Jerónimo el Real, ancienne église royale située juste derrière le musée du Prado.",
        
          en:
            "Leave Retiro through Puerta de Felipe IV and continue to San Jerónimo el Real, the historic royal church located just behind the Prado Museum."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "musee-prado",

        comment: {
          fr:
            "Si vous ne devez visiter qu’un seul musée du Triangle d’Art aujourd’hui, privilégiez le Prado. Concentrez-vous sur quelques chefs-d’œuvre pour préserver le rythme de cette journée bien remplie.",
        
          en:
            "If you only have time for one museum in the Art Triangle today, make it the Prado. Focus on a selection of masterpieces to keep this busy day on schedule."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "fuente-de-neptuno",

        comment: {
          fr:
            "Descendez le Paseo del Prado jusqu’à la fontaine de Neptune.",
          en:
            "Walk down Paseo del Prado toward the Neptune Fountain."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "monumento-caidos-por-espana",

        comment: {
          fr:
            "Continuez vers le Monument aux morts pour l’Espagne, situé sur la Plaza de la Lealtad.",
          en:
            "Continue toward the Monument to the Fallen for Spain on Plaza de la Lealtad."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "plaza-cibeles",

        comment: {
          fr:
            "À Plaza de Cibeles, admirez la célèbre fontaine et le Palacio de Cibeles. Montez au Mirador Madrid pour profiter d’une vue spectaculaire sur la ville.",
        
          en:
            "At Plaza de Cibeles, admire the famous fountain and Cibeles Palace. Head up to Mirador Madrid for spectacular views over the city."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "edificio-metropolis",

        comment: {
          fr:
            "À l’entrée de Gran Vía, admirez l’Edificio Metrópolis, l’un des monuments les plus photographiés de Madrid, reconnaissable à son dôme noir couronné d’une Victoire ailée.",
        
          en:
            "At the entrance to Gran Vía, admire the Metrópolis Building, one of Madrid’s most photographed landmarks, recognisable by its black dome crowned with a Winged Victory."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "puerta-del-sol",

        comment: {
          fr:
            "À la Puerta del Sol, repérez la plaque du Kilomètre Zéro, point de départ symbolique des grandes routes espagnoles, ainsi que la statue de l’Ours et de l’Arbousier.",
        
          en:
            "At Puerta del Sol, look for the Kilometre Zero plaque, the symbolic starting point of Spain’s main roads, as well as the Bear and the Strawberry Tree statue."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "plaza-mayor",

        comment: {
          fr:
            "Rejoignez Plaza Mayor par la Calle Mayor et profitez de l’une des places les plus emblématiques de la ville.",
          en:
            "Reach Plaza Mayor via Calle Mayor and enjoy one of Madrid’s most iconic squares."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "mercado-san-miguel",

        comment: {
          fr:
            "Faites une pause au Mercado de San Miguel, idéal pour goûter quelques spécialités espagnoles.",
          en:
            "Stop at Mercado de San Miguel, a great place to sample Spanish specialties."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "plaza-de-la-villa",

        comment: {
          fr:
            "Passez ensuite par la Plaza de la Villa, l’un des plus beaux ensembles du Madrid historique.",
          en:
            "Continue through Plaza de la Villa, one of the best-preserved historic corners of Madrid."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "cathedrale-almudena",

        comment: {
          fr:
            "Découvrez la cathédrale de l’Almudena et son intérieur aux couleurs surprenantes. Si le temps le permet, montez jusqu’au dôme pour profiter du panorama sur le secteur royal.",
        
          en:
            "Discover Almudena Cathedral and its surprisingly colourful interior. If time allows, climb to the dome for panoramic views over Madrid’s royal district."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "plaza-oriente",

        comment: {
          fr:
            "Traversez Plaza de Oriente face au Palais royal. Au centre, remarquez l’imposante statue équestre de Philippe IV, l’une des œuvres emblématiques de la place.",
        
          en:
            "Cross Plaza de Oriente in front of the Royal Palace. At its centre, notice the imposing equestrian statue of Philip IV, one of the square’s defining landmarks."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "palais-royal-madrid",

        comment: {
          fr:
            "Découvrez le Palais royal et rejoignez surtout la Plaza de la Armería, vaste esplanade entre le palais et la cathédrale offrant l’une des plus belles perspectives du complexe royal.",
        
          en:
            "Discover the Royal Palace and make sure to visit Plaza de la Armería, the grand esplanade between the palace and cathedral offering one of the finest views of the royal complex."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "jardines-de-sabatini",

        comment: {
          fr:
            "Descendez vers les Jardins de Sabatini pour profiter d’une belle perspective sur le Palais Royal.",
          en:
            "Walk down to the Sabatini Gardens for a beautiful view of the Royal Palace."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "temple-debod",

        comment: {
          fr:
            "Terminez la journée au Temple de Debod. Essayez d’arriver environ 30 minutes avant le coucher du soleil pour profiter de la lumière, du panorama et voir progressivement le temple s’illuminer.",
        
          en:
            "End the day at the Temple of Debod. Try to arrive about 30 minutes before sunset to enjoy the changing light and panoramic views as the temple gradually lights up."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "plaza-espana",

        comment: {
          fr:
            "Rejoignez Plaza de España avant d’entamer la dernière partie du parcours.",
          en:
            "Continue to Plaza de España before starting the final part of the route."
        },

        next: {
          mode: "walk"
        }
      },


      {
        placeId: "gran-via",

        comment: {
          fr:
            "Terminez la journée en parcourant Gran Vía jusqu’à la station de métro Gran Vía.",
          en:
            "Finish the day by walking along Gran Vía toward Gran Vía metro station."
        }
      }

    ]

  },

  /* =========================================================
   02. WEEK-END PROLONGÉ À MADRID — VENDREDI
========================================================= */

{
  id: "weekend-prolonge-vendredi",

  name: {
    fr: "Week-end prolongé à Madrid — Vendredi",
    en: "Long Weekend in Madrid — Friday"
  },

  image:
    "images/itineraires/weekend-prolonge-vendredi.webp",

  duration: {
    fr: "Environ 8 à 9 h",
    en: "About 8 to 9 hours"
  },

  distance: {
    fr: "Environ 7 km à pied + métro",
    en: "About 7 km on foot + metro"
  },

  description: {
    fr:
      "Une première journée complète entre Las Ventas, le Retiro, le Paseo del Arte et le centre historique de Madrid.",
    en:
      "A complete first day covering Las Ventas, Retiro Park, the Art Walk and Madrid’s historic centre."
  },

  startMetro: {
    station: "Ventas",
    lines: ["2", "5"]
  },

  endMetro: {
    station: "Gran Vía",
    lines: ["1", "5"]
  },

  steps: [

    {
      placeId: "plaza-las-ventas",

      comment: {
        fr:
          "Commencez la journée devant les célèbres arènes de Las Ventas et prenez le temps d’en observer l’architecture néo-mudéjare.",
        en:
          "Start the day at the famous Las Ventas bullring and take time to admire its Neo-Mudéjar architecture."
      },

      next: {
        mode: "metro",
        line: "2",

        fromStation: {
          station: "Ventas",
          lines: ["2", "5"]
        },

        toStation: {
          station: "Retiro",
          lines: ["2"]
        }
      }
    },

    {
      placeId: "puerta-alcala",

      comment: {
        fr:
          "Depuis la station Retiro, rejoignez la Puerta de Alcalá, l’une des grandes portes monumentales de Madrid.",
        en:
          "From Retiro station, walk to Puerta de Alcalá, one of Madrid’s great monumental gateways."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "parc-retiro",

      comment: {
        fr:
          "Profitez du parc du Retiro et de son Grand Étang. Pour une pause agréable, louez une barque et découvrez le monument à Alphonse XII depuis l’eau.",
      
        en:
          "Enjoy El Retiro Park and its Great Pond. For a relaxing break, rent a rowboat and admire the Monument to Alfonso XII from the water."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "plaza-cibeles",

      comment: {
        fr:
          "Rejoignez ensuite la Plaza de Cibeles et admirez sa célèbre fontaine ainsi que le Palacio de Cibeles.",
        en:
          "Continue to Plaza de Cibeles and admire its famous fountain and Cibeles Palace."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "monumento-caidos-por-espana",

      comment: {
        fr:
          "Poursuivez vers la Plaza de la Lealtad pour découvrir le Monument aux morts pour l’Espagne.",
        en:
          "Continue to Plaza de la Lealtad to see the Monument to the Fallen for Spain."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "fuente-de-neptuno",

      comment: {
        fr:
          "Descendez ensuite vers la Fontaine de Neptune, au cœur du Paseo del Arte.",
        en:
          "Continue toward Neptune Fountain in the heart of Madrid’s Art Walk."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "musee-prado",

      comment: {
        fr:
          "Rejoignez le Musée du Prado, l’un des grands musées européens. Adaptez la durée de visite au rythme de votre journée.",
        en:
          "Continue to the Prado Museum, one of Europe’s major museums. Adjust your visit length to the pace of your day."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "real-jardin-botanico",

      comment: {
        fr:
          "Juste à côté du Prado, découvrez le Real Jardín Botánico et ses différentes collections végétales.",
        en:
          "Next to the Prado, explore the Royal Botanic Garden and its diverse plant collections."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "musee-reina-sofia",

      comment: {
        fr:
          "Poursuivez jusqu’au Musée Reina Sofía, où se trouve notamment Guernica de Picasso.",
        en:
          "Continue to the Reina Sofía Museum, home to Picasso’s Guernica."
      },

      next: {
        mode: "metro",
        line: "1",

        fromStation: {
          station: "Estación del Arte",
          lines: ["1"]
        },

        toStation: {
          station: "Sol",
          lines: ["1", "2", "3"]
        }
      }
    },

    {
      placeId: "puerta-del-sol",

      comment: {
        fr:
          "À la sortie du métro, découvrez la Puerta del Sol et les grands symboles du centre de Madrid.",
        en:
          "After leaving the metro, explore Puerta del Sol and the major symbols of central Madrid."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "plaza-mayor",

      comment: {
        fr:
          "Rejoignez Plaza Mayor par la Calle Mayor et profitez de l’atmosphère du Madrid historique.",
        en:
          "Walk to Plaza Mayor via Calle Mayor and enjoy the atmosphere of historic Madrid."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "teatro-real",

      comment: {
        fr:
          "Découvrez le Teatro Real, le grand opéra de Madrid. En route, profitez-en pour faire une pause gourmande à la Chocolatería San Ginés et goûter ses célèbres churros au chocolat.",
      
        en:
          "Discover Teatro Real, Madrid’s grand opera house. On the way, stop at Chocolatería San Ginés for its famous churros with hot chocolate."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "plaza-de-callao",

      comment: {
        fr:
          "Terminez à Plaza de Callao, au cœur de l’effervescence madrilène. Admirez l’Edificio Carrión et sa célèbre enseigne Schweppes, puis profitez de l’ambiance vibrante de la place et de Gran Vía.",
      
        en:
          "Finish at Plaza de Callao, in the heart of Madrid’s vibrant city centre. Admire the Carrión Building and its famous Schweppes sign, then enjoy the lively atmosphere of the square and Gran Vía."
      }
    }

  ]
},


/* =========================================================
   03. WEEK-END PROLONGÉ À MADRID — SAMEDI
========================================================= */

{
  id: "weekend-prolonge-samedi",

  name: {
    fr: "Week-end prolongé à Madrid — Samedi",
    en: "Long Weekend in Madrid — Saturday"
  },

  image:
    "images/itineraires/weekend-prolonge-samedi.webp",

  duration: {
    fr: "Environ 8 à 9 h",
    en: "About 8 to 9 hours"
  },

  distance: {
    fr: "Environ 6 km à pied + métro",
    en: "About 6 km on foot + metro"
  },

  description: {
    fr:
      "Une journée consacrée au Madrid historique et royal avant de rejoindre le Santiago Bernabéu et le quartier moderne d’AZCA.",
    en:
      "A day exploring historic and royal Madrid before heading to the Santiago Bernabéu and the modern AZCA district."
  },

  startMetro: {
    station: "Sol",
    lines: ["1", "2", "3"]
  },

  endMetro: {
    station: "Nuevos Ministerios",
    lines: ["6", "8", "10"]
  },

  steps: [

    {
      placeId: "puerta-del-sol",

      comment: {
        fr:
          "Commencez à la Puerta del Sol et mettez les pieds sur la plaque du Kilomètre Zéro, point de départ symbolique des grandes routes espagnoles. Repérez également la statue de l’Ours et de l’Arbousier.",
      
        en:
          "Start at Puerta del Sol and stand on the Kilometre Zero plaque, the symbolic starting point of Spain’s main roads. Also look for the Bear and the Strawberry Tree statue."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "plaza-mayor",

      comment: {
        fr:
          "Profitez de Plaza Mayor et de ses élégantes façades à arcades. Pour une pause typiquement madrilène, dégustez un bocadillo de calamares à l’une des terrasses de la place.",
      
        en:
          "Enjoy Plaza Mayor and its elegant arcaded façades. For a typically Madrid experience, have a bocadillo de calamares at one of the square’s terraces."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "mercado-san-miguel",

      comment: {
        fr:
          "Faites une pause au Mercado de San Miguel pour découvrir quelques spécialités espagnoles.",
        en:
          "Stop at San Miguel Market to discover a selection of Spanish specialties."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "plaza-de-la-villa",

      comment: {
        fr:
          "Continuez vers Plaza de la Villa, l’un des ensembles historiques les mieux conservés du centre de Madrid.",
        en:
          "Continue to Plaza de la Villa, one of the best-preserved historic corners of central Madrid."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "cathedrale-almudena",

      comment: {
        fr:
          "Visitez la cathédrale de l’Almudena puis montez jusqu’au dôme pour profiter d’une vue impressionnante sur le secteur royal et la Plaza de la Armería. Puisque nous sommes samedi, vérifiez si une relève de la garde est prévue au Palais royal afin d’en profiter.",
      
        en:
          "Visit Almudena Cathedral, then climb to the dome for impressive views over the royal district and Plaza de la Armería. Since it’s Saturday, check whether a Changing of the Guard ceremony is scheduled at the Royal Palace so you can enjoy it."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "palais-royal-madrid",

      comment: {
        fr:
          "Redescendez vers la Plaza de la Armería que vous venez d’admirer depuis le dôme, puis découvrez le Palais royal. Si votre programme le permet, faites la visite intérieure pour découvrir ses somptueuses salles d’apparat.",
      
        en:
          "Head down to Plaza de la Armería, which you have just admired from the cathedral dome, then discover the Royal Palace. If your schedule allows, visit the interior to explore its magnificent state rooms."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "plaza-oriente",

      comment: {
        fr:
          "Rejoignez Plaza de Oriente et parcourez son Paseo de las Estatuas. Au centre, admirez la statue équestre de Philippe IV : sa spectaculaire position cabrée repose sur un ingénieux équilibre calculé avec l’aide de Galilée.",
      
        en:
          "Continue to Plaza de Oriente and walk along its Paseo de las Estatuas. At the centre, admire the equestrian statue of Philip IV: its spectacular rearing position relies on an ingenious balance calculated with the help of Galileo."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "jardines-de-sabatini",

      comment: {
        fr:
          "Descendez vers les Jardins de Sabatini pour profiter d’une belle perspective sur la façade nord du Palais royal.",
        en:
          "Walk down to the Sabatini Gardens for an excellent view of the Royal Palace’s north façade."
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "plaza-espana",

      comment: {
        fr:
          "À Plaza de España, admirez le monument à Cervantès entouré de Don Quichotte et Sancho Panza, puis levez les yeux vers la Torre de Madrid, l’un des bâtiments emblématiques de la place.",
      
        en:
          "At Plaza de España, admire the monument to Cervantes with Don Quixote and Sancho Panza, then look up at Torre de Madrid, one of the square’s landmark buildings."
      },

      next: {
        mode: "metro",
        line: "10",

        fromStation: {
          station: "Plaza de España",
          lines: ["2", "3", "10"]
        },

        toStation: {
          station: "Santiago Bernabéu",
          lines: ["10"]
        }
      }
    },

    {
      placeId: "santiago-bernabeu",

      comment: {
        fr:
          "Pour vivre pleinement l’expérience, réservez un billet pour le Tour Bernabéu. Ne manquez pas la salle des trophées et la vue panoramique sur le stade : une étape indispensable si vous êtes supporter madridista !",
      
        en:
          "For the full experience, book a Bernabéu Tour ticket. Don’t miss the trophy room and panoramic view over the stadium — an essential stop if you’re a Madridista!"
      },

      next: {
        mode: "walk"
      }
    },

    {
      placeId: "plaza-pablo-ruiz-picasso",

      comment: {
        fr:
          "Terminez la journée à Plaza Pablo Ruiz Picasso, au cœur du quartier d’affaires AZCA. Ses cafés et terrasses offrent une ambiance moderne idéale pour faire une dernière pause avant de rejoindre Nuevos Ministerios.",
      
        en:
          "End the day at Plaza Pablo Ruiz Picasso, in the heart of the AZCA business district. Its cafés and terraces offer a modern atmosphere for a final break before heading to Nuevos Ministerios."
        }
      }
  
    ]
  },


/* =========================================================
   04. WEEK-END PROLONGÉ À MADRID — DIMANCHE
========================================================= */

{
  id: "weekend-prolonge-dimanche",

  name: {
    fr: "Week-end prolongé à Madrid — Dimanche",
    en: "Long Weekend in Madrid — Sunday"
  },

  image:
    "images/itineraires/weekend-prolonge-dimanche.webp",

  duration: {
    fr: "Environ 8 à 9 h",
    en: "About 8 to 9 hours"
  },

  distance: {
    fr: "Environ 6 km à pied + métro",
    en: "About 6 km on foot + metro"
  },

  description: {
    fr:
      "Une journée conçue spécialement pour le dimanche : commencez par l’ambiance unique du marché El Rastro, traversez ensuite le Madrid culturel et historique, puis terminez la journée au Temple de Debod au coucher du soleil.",

    en:
      "A day designed especially for Sunday: start with the unique atmosphere of El Rastro market, continue through Madrid’s cultural and historic centre, then end the day at the Temple of Debod around sunset."
  },

  startMetro: {
    station: "Puerta de Toledo",
    lines: ["5"]
  },

  endMetro: {
    station: "Plaza de España",
    lines: ["2", "3", "10"]
  },

  steps: [

    /* =====================================================
       1. PUERTA DE TOLEDO
    ===================================================== */

    {
      placeId: "puerta-de-toledo",

      comment: {
        fr:
          "Commencez à la Puerta de Toledo, porte monumentale qui marque une excellente entrée vers le quartier populaire de La Latina et le marché El Rastro.",

        en:
          "Start at Puerta de Toledo, a monumental gateway and an excellent entrance to the traditional La Latina district and El Rastro market."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       2. PLAZA DE CASCORRO — EL RASTRO
    ===================================================== */

    {
      placeId: "plaza-de-cascorro",

      comment: {
        fr:
          "Remontez tranquillement la Calle de la Ribera de Curtidores en profitant d’El Rastro, le célèbre marché dominical de Madrid. Fouillez les étals et les petites rues adjacentes jusqu’à Plaza de Cascorro, véritable cœur du marché.",

        en:
          "Walk up Calle de la Ribera de Curtidores while enjoying El Rastro, Madrid’s famous Sunday market. Browse the stalls and surrounding side streets until you reach Plaza de Cascorro, the heart of the market."
      },

      next: {
        mode: "metro",
        line: "5",

        fromStation: {
          station: "La Latina",
          lines: ["5"]
        },

        toStation: {
          station: "Gran Vía",
          lines: ["1", "5"]
        }
      }
    },


    /* =====================================================
       3. EDIFICIO METRÓPOLIS
    ===================================================== */

    {
      placeId: "edificio-metropolis",

      comment: {
        fr:
          "À la sortie du métro, rejoignez l’Edificio Metrópolis, l’un des monuments les plus photographiés de Madrid. Admirez son élégante façade et son dôme noir couronné d’une Victoire ailée.",

        en:
          "After leaving the metro, head to the Metrópolis Building, one of Madrid’s most photographed landmarks. Admire its elegant façade and black dome crowned by a Winged Victory."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       4. PLAZA DE CIBELES
    ===================================================== */

    {
      placeId: "plaza-cibeles",

      comment: {
        fr:
          "Descendez la Calle de Alcalá jusqu’à Plaza de Cibeles. Admirez sa célèbre fontaine et le Palacio de Cibeles, l’un des ensembles monumentaux les plus emblématiques de Madrid.",

        en:
          "Walk down Calle de Alcalá to Plaza de Cibeles. Admire its famous fountain and Cibeles Palace, one of Madrid’s most emblematic monumental ensembles."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       5. MUSÉE THYSSEN-BORNEMISZA
    ===================================================== */

    {
      placeId: "musee-thyssen",

      comment: {
        fr:
          "Découvrez le Musée Thyssen-Bornemisza. Si vous faites une visite ciblée, ne manquez pas le Portrait de Giovanna Tornabuoni de Ghirlandaio, l’un des chefs-d’œuvre emblématiques de la collection.",

        en:
          "Discover the Thyssen-Bornemisza Museum. If you opt for a focused visit, don’t miss Ghirlandaio’s Portrait of Giovanna Tornabuoni, one of the collection’s emblematic masterpieces."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       6. PLAZA DE LAS CORTES
    ===================================================== */

    {
      placeId: "plaza-de-las-cortes",

      comment: {
        fr:
          "Rejoignez Plaza de las Cortes et admirez le Congreso de los Diputados, reconnaissable à sa façade néoclassique et aux deux lions qui encadrent son entrée.",

        en:
          "Continue to Plaza de las Cortes and admire the Spanish Congress of Deputies, recognisable by its Neoclassical façade and the two lions guarding its entrance."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       7. PLAZA DE SANTA ANA
    ===================================================== */

    {
      placeId: "plaza-de-santa-ana",

      comment: {
        fr:
          "Entrez dans le Barrio de las Letras et faites une pause à Plaza de Santa Ana, place animée bordée de cafés et de terrasses, associée à de grandes figures de la littérature espagnole.",

        en:
          "Enter the Literary Quarter and take a break at Plaza de Santa Ana, a lively square lined with cafés and terraces and associated with major figures of Spanish literature."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       8. PUERTA DEL SOL
    ===================================================== */

    {
      placeId: "puerta-del-sol",
    
      comment: {
        fr:
          "Traversez la Puerta del Sol, véritable cœur de Madrid. Admirez la Casa de Correos et son horloge emblématique, puis repérez la statue de l’Ours et de l’Arbousier avant de poursuivre vers le quartier royal.",
    
        en:
          "Cross Puerta del Sol, the true heart of Madrid. Admire the Casa de Correos and its iconic clock, then look for the Bear and the Strawberry Tree statue before continuing toward the royal district."
      },
    
      next: {
        mode: "walk"
      }
    },

    /* =====================================================
       9. TEATRO REAL
    ===================================================== */

    {
      placeId: "teatro-real",
    
      comment: {
        fr:
          "Rejoignez le Teatro Real, l’un des grands opéras d’Europe, face à la Plaza de Oriente. Si le temps le permet, profitez-en pour découvrir son intérieur lors d’une visite avant de rejoindre la station Ópera toute proche.",
    
        en:
          "Continue to Teatro Real, one of Europe’s major opera houses, facing Plaza de Oriente. If time allows, take the opportunity to discover its interior before heading to nearby Ópera metro station."
      },
    
      next: {
        mode: "metro",
        line: "R",
    
        fromStation: {
          station: "Ópera",
          lines: ["2", "5", "R"]
        },
    
        toStation: {
          station: "Príncipe Pío",
          lines: ["6", "10", "R"]
        }
      }
    },


    /* =====================================================
       10 PUERTA DE SAN VICENTE
    ===================================================== */

    {
      placeId: "puerta-de-san-vicente",

      comment: {
        fr:
          "Depuis Príncipe Pío, rejoignez la Puerta de San Vicente, porte monumentale conçue par Francesco Sabatini, avant d’entamer la dernière partie du parcours vers le Temple de Debod.",

        en:
          "From Príncipe Pío, continue to Puerta de San Vicente, a monumental gateway designed by Francesco Sabatini, before beginning the final part of the route toward the Temple of Debod."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       11. TEMPLE DE DEBOD
    ===================================================== */

    {
      placeId: "temple-debod",

      comment: {
        fr:
          "Prévoyez d’arriver au Temple de Debod environ 30 minutes avant le coucher du soleil. Installez-vous près du temple pour profiter de la lumière dorée, puis du panorama sur l’ouest de Madrid lorsque le soleil disparaît.",

        en:
          "Plan to arrive at the Temple of Debod about 30 minutes before sunset. Find a spot near the temple to enjoy the golden light and panoramic views over western Madrid as the sun goes down."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       12. PLAZA DE ESPAÑA
    ===================================================== */

    {
      placeId: "plaza-espana",

      comment: {
        fr:
          "Après le coucher du soleil, terminez tranquillement la journée à Plaza de España. Admirez le monument à Cervantès avec Don Quichotte et Sancho Panza ainsi que la Torre de Madrid avant de rejoindre la station.",

        en:
          "After sunset, finish the day at Plaza de España. Admire the monument to Cervantes with Don Quixote and Sancho Panza, as well as Torre de Madrid, before heading to the metro station."
      }
    }

  ]

},

/* =========================================================
   05. AU CŒUR DE MADRID — PLACES EMBLÉMATIQUES ET TRÉSORS CACHÉS
========================================================= */

{
  id: "coeur-de-madrid",

  name: {
    fr:
      "Au cœur de Madrid — Places emblématiques et trésors cachés",

    en:
      "The Heart of Madrid — Iconic Squares and Hidden Gems"
  },

  image:
    "images/itineraires/coeur-de-madrid.webp",

  duration: {
    fr:
      "Environ 4 à 5 h",

    en:
      "About 4 to 5 hours"
  },

  distance: {
    fr:
      "Environ 3,5 km à pied",

    en:
      "About 3.5 km on foot"
  },

  description: {
    fr:
      "Un parcours entièrement à pied au cœur du centre historique de Madrid, mêlant grandes places, patrimoine royal, marché emblématique et quelques trésors plus discrets.",

    en:
      "A fully walkable route through Madrid’s historic centre, combining iconic squares, royal heritage, a famous market and several lesser-known gems."
  },

  startMetro: {
    station: "Sol",
    lines: ["1", "2", "3"]
  },

  endMetro: {
    station: "Callao",
    lines: ["3", "5"]
  },

  steps: [

    /* =====================================================
       1. PUERTA DEL SOL
    ===================================================== */

    {
      placeId:
        "puerta-del-sol",

      comment: {
        fr:
          "Commencez à la Puerta del Sol, véritable cœur de Madrid. Repérez le Kilomètre Zéro, la statue de l’Ours et de l’Arbousier ainsi que la Casa de Correos.",

        en:
          "Start at Puerta del Sol, the true heart of Madrid. Look for Kilometre Zero, the Bear and the Strawberry Tree statue and the Casa de Correos."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       2. PLAZA DE SANTA ANA
    ===================================================== */

    {
      placeId:
        "plaza-de-santa-ana",

      comment: {
        fr:
          "Entrez dans le Barrio de las Letras et rejoignez Plaza de Santa Ana, une place animée entourée de terrasses et marquée par les figures de García Lorca et Calderón de la Barca.",

        en:
          "Enter the Literary Quarter and continue to Plaza de Santa Ana, a lively square lined with terraces and associated with García Lorca and Calderón de la Barca."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       3. PLAZA DE JACINTO BENAVENTE
    ===================================================== */

    {
      placeId:
        "plaza-de-jacinto-benavente",

      comment: {
        fr:
          "Poursuivez vers Plaza de Jacinto Benavente, une place centrale qui assure la transition entre le Barrio de las Letras, Sol et le Madrid historique.",

        en:
          "Continue to Plaza de Jacinto Benavente, a central square linking the Literary Quarter, Sol and historic Madrid."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       4. MUSEO DE LAS ILUSIONES
    ===================================================== */

    {
      placeId:
        "museo-de-las-ilusiones-madrid",

      comment: {
        fr:
          "Faites un détour par le Museo de las Ilusiones pour une pause plus ludique, entre illusions d’optique, jeux de perspective et expériences interactives.",

        en:
          "Stop at the Museum of Illusions for a more playful break with optical illusions, perspective tricks and interactive experiences."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       5. PLAZA DE LA VILLA
    ===================================================== */

    {
      placeId:
        "plaza-de-la-villa",

      comment: {
        fr:
          "Rejoignez ensuite Plaza de la Villa, l’un des ensembles les mieux préservés du Madrid médiéval et ancien siège du pouvoir municipal.",

        en:
          "Continue to Plaza de la Villa, one of the best-preserved corners of medieval Madrid and the former centre of municipal power."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       6. MERCADO DE SAN MIGUEL
    ===================================================== */

    {
      placeId:
        "mercado-san-miguel",

      comment: {
        fr:
          "Continuez jusqu’au Mercado de San Miguel. C’est une excellente étape pour faire une pause et goûter quelques spécialités espagnoles.",

        en:
          "Continue to Mercado de San Miguel, an ideal stop for a break and a taste of several Spanish specialities."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       7. PLAZA MAYOR
    ===================================================== */

    {
      placeId:
        "plaza-mayor",

      comment: {
        fr:
          "Traversez ensuite Plaza Mayor, l’une des places les plus emblématiques de Madrid. Prenez le temps d’observer ses façades, ses arcades et la statue équestre de Philippe III.",

        en:
          "Next explore Plaza Mayor, one of Madrid’s most iconic squares. Take time to admire its façades, arcades and the equestrian statue of Philip III."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       8. MONASTÈRE DES DESCALZAS REALES
    ===================================================== */

    {
      placeId:
        "monasterio-descalzas-reales",

      comment: {
        fr:
          "Quittez l’agitation de Plaza Mayor pour découvrir le discret Monastère des Descalzas Reales, ancien palais royal cachant une remarquable collection artistique.",

        en:
          "Leave the bustle of Plaza Mayor behind and discover the discreet Monastery of Las Descalzas Reales, a former royal palace hiding an impressive art collection."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       9. TEATRO REAL
    ===================================================== */

    {
      placeId:
        "teatro-real",

      comment: {
        fr:
          "Rejoignez ensuite le Teatro Real, le grand opéra de Madrid, situé au cœur du secteur royal face à la Plaza de Oriente.",

        en:
          "Continue to Teatro Real, Madrid’s grand opera house, located in the heart of the royal district opposite Plaza de Oriente."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       10. MONASTÈRE ROYAL DE L’ENCARNACIÓN
    ===================================================== */

    {
      placeId:
        "real-monasterio-de-la-encarnacion",

      comment: {
        fr:
          "À quelques minutes du Teatro Real, découvrez le Monastère royal de l’Encarnación, l’un des trésors religieux et artistiques les plus discrets du Madrid des Habsbourg.",

        en:
          "A few minutes from Teatro Real, discover the Royal Monastery of La Encarnación, one of the more discreet religious and artistic treasures of Habsburg Madrid."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       11. PLAZA DE CALLAO
    ===================================================== */

    {
      placeId:
        "plaza-de-callao",

      comment: {
        fr:
          "Terminez le parcours à Plaza de Callao, au cœur de Gran Vía. Repérez l’Edificio Carrión et sa célèbre enseigne Schweppes avant de rejoindre directement la station Callao.",

        en:
          "Finish at Plaza de Callao in the heart of Gran Vía. Look for the Carrión Building and its famous Schweppes sign before entering Callao metro station."
      }
    }

  ]

},

/* =========================================================
   06. MADRID ROYAL — PALAIS, JARDINS ET PANORAMA
========================================================= */

{
  id: "madrid-royal",

  name: {
    fr:
      "Madrid royal — Palais, jardins et panorama",

    en:
      "Royal Madrid — Palace, Gardens and Panoramas"
  },

  image:
    "images/itineraires/madrid-royal.webp",

  duration: {
    fr:
      "Environ 4 à 5 h",

    en:
      "About 4 to 5 hours"
  },

  distance: {
    fr:
      "Environ 3 km à pied",

    en:
      "About 3 km on foot"
  },

  description: {
    fr:
      "Une immersion dans le Madrid royal, entre palais, places historiques, jardins monumentaux et belles perspectives sur l’ouest de la capitale.",

    en:
      "An immersion in royal Madrid, combining palaces, historic squares, monumental gardens and beautiful views over the western side of the capital."
  },

  startMetro: {
    station: "Ópera",
    lines: ["2", "5", "R"]
  },

  endMetro: {
    station: "Príncipe Pío",
    lines: ["6", "10", "R"]
  },

  steps: [

    /* =====================================================
       1. TEATRO REAL
    ===================================================== */

    {
      placeId:
        "teatro-real",

      comment: {
        fr:
          "Commencez devant le Teatro Real, le grand opéra de Madrid, situé au cœur du secteur royal.",

        en:
          "Start at Teatro Real, Madrid’s grand opera house, located in the heart of the royal district."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       2. PLAZA DE ORIENTE
    ===================================================== */

    {
      placeId:
        "plaza-oriente",

      comment: {
        fr:
          "Traversez Plaza de Oriente et profitez de l’une des plus belles perspectives sur la façade orientale du Palais royal.",

        en:
          "Cross Plaza de Oriente and enjoy one of the best views of the eastern façade of the Royal Palace."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       3. PLAZA DE RAMALES
    ===================================================== */

    {
      placeId:
        "plaza-de-ramales",

      comment: {
        fr:
          "Faites un petit détour par Plaza de Ramales, une place discrète liée à Diego Velázquez et à l’ancienne église de San Juan.",

        en:
          "Make a short detour to Plaza de Ramales, a discreet square associated with Diego Velázquez and the former Church of San Juan."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       4. CATHÉDRALE DE L’ALMUDENA
    ===================================================== */

    {
      placeId:
        "cathedrale-almudena",

      comment: {
        fr:
          "Rejoignez la Cathédrale de l’Almudena. Son intérieur coloré contraste avec sa façade classique, et son dôme offre une superbe vue sur le secteur royal.",

        en:
          "Continue to Almudena Cathedral. Its colourful interior contrasts with its classical façade, while its dome offers excellent views over the royal district."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       5. PALAIS ROYAL
    ===================================================== */

    {
      placeId:
        "palais-royal-madrid",

      comment: {
        fr:
          "Découvrez ensuite le Palais royal de Madrid. Si vous le visitez, prévoyez suffisamment de temps pour les salles d’apparat et l’Armurerie royale.",

        en:
          "Next explore Madrid’s Royal Palace. If you go inside, allow enough time for the state rooms and Royal Armoury."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       6. JARDINS DE SABATINI
    ===================================================== */

    {
      placeId:
        "jardines-de-sabatini",

      comment: {
        fr:
          "Descendez vers les Jardins de Sabatini pour admirer leurs formes géométriques et la spectaculaire façade nord du Palais royal.",

        en:
          "Continue down to the Sabatini Gardens to admire their geometric layout and the spectacular north façade of the Royal Palace."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       7. CAMPO DEL MORO
    ===================================================== */

    {
      placeId:
        "jardines-campo-del-moro",

      comment: {
        fr:
          "Poursuivez dans les Jardins du Campo del Moro. Depuis la grande perspective centrale, le Palais royal domine magnifiquement les jardins.",

        en:
          "Continue through the Campo del Moro Gardens. From the main central perspective, the Royal Palace rises dramatically above the gardens."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       8. PUERTA DE SAN VICENTE
    ===================================================== */

    {
      placeId:
        "puerta-de-san-vicente",

      comment: {
        fr:
          "Terminez devant la Puerta de San Vicente, porte monumentale conçue par Sabatini, puis rejoignez la station Príncipe Pío toute proche.",

        en:
          "Finish at Puerta de San Vicente, the monumental gateway designed by Sabatini, then walk to nearby Príncipe Pío station."
      }
    }

  ]

},

/* =========================================================
   07. MADRID PANORAMIQUE — PARCS, VUES ET MONUMENTS DE L’OUEST
========================================================= */

{
  id: "madrid-panoramique-ouest",

  name: {
    fr:
      "Madrid panoramique — Parcs, vues et monuments de l’ouest",

    en:
      "Panoramic Madrid — Parks, Views and Western Landmarks"
  },

  image:
    "images/itineraires/madrid-panoramique-ouest.webp",

  duration: {
    fr:
      "Environ 5 à 6 h",

    en:
      "About 5 to 6 hours"
  },

  distance: {
    fr:
      "Environ 5 km à pied",

    en:
      "About 5 km on foot"
  },

  description: {
    fr:
      "Un parcours à travers l’ouest de Madrid mêlant grands panoramas, espaces verts, monuments insolites et musées, de Moncloa jusqu’à Plaza de España.",

    en:
      "A route through western Madrid combining panoramic views, green spaces, unusual landmarks and museums, from Moncloa to Plaza de España."
  },

  startMetro: {
    station: "Moncloa",
    lines: ["3", "6"]
  },

  endMetro: {
    station: "Plaza de España",
    lines: ["2", "3", "10"]
  },

  steps: [

    /* =====================================================
       1. ARCO DE LA VICTORIA
    ===================================================== */

    {
      placeId:
        "arco-de-la-victoria",

      comment: {
        fr:
          "Commencez à Moncloa par l’Arco de la Victoria, imposant arc monumental marquant l’entrée de la Ciudad Universitaria.",

        en:
          "Start in Moncloa at the Arco de la Victoria, an imposing monumental arch marking the entrance to Ciudad Universitaria."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       2. FARO DE MONCLOA
    ===================================================== */

    {
      placeId:
        "faro-de-moncloa",

      comment: {
        fr:
          "Montez ensuite au Faro de Moncloa pour profiter d’un panorama à 360° sur Madrid et, par temps clair, jusqu’à la Sierra de Guadarrama.",

        en:
          "Head up the Faro de Moncloa for a 360° panorama over Madrid and, on clear days, as far as the Sierra de Guadarrama."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       3. MUSÉE DE L’AMÉRIQUE
    ===================================================== */

    {
      placeId:
        "museo-de-america",

      comment: {
        fr:
          "Poursuivez vers le Musée de l’Amérique, consacré aux civilisations précolombiennes, à l’époque coloniale et aux cultures du continent américain.",

        en:
          "Continue to the Museum of the Americas, devoted to pre-Columbian civilisations, the colonial period and the cultures of the American continent."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       4. PARQUE DEL OESTE
    ===================================================== */

    {
      placeId:
        "parque-del-oeste",

      comment: {
        fr:
          "Entrez ensuite dans le Parque del Oeste et descendez progressivement vers le Paseo de Pintor Rosales à travers l’un des grands espaces verts de Madrid.",

        en:
          "Enter Parque del Oeste and gradually make your way down toward Paseo de Pintor Rosales through one of Madrid’s major green spaces."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       5. TELEFÉRICO DE MADRID
    ===================================================== */

    {
      placeId:
        "teleferico-de-madrid",

      comment: {
        fr:
          "Passez par le Teleférico de Madrid, dont le trajet offre normalement une vue aérienne exceptionnelle sur Casa de Campo et la corniche monumentale de Madrid.",

        en:
          "Pass by the Madrid Cable Car, whose route normally offers spectacular aerial views over Casa de Campo and Madrid’s monumental western skyline."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       6. TEMPLE DE DEBOD
    ===================================================== */

    {
      placeId:
        "temple-debod",

      comment: {
        fr:
          "Continuez jusqu’au Temple de Debod, véritable temple égyptien installé dans les hauteurs de l’ouest madrilène. C’est aussi l’un des meilleurs endroits du parcours pour admirer le panorama.",

        en:
          "Continue to the Temple of Debod, an authentic Egyptian temple overlooking western Madrid. It is also one of the route’s best panoramic viewpoints."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       7. MUSÉE CERRALBO
    ===================================================== */

    {
      placeId:
        "museo-cerralbo",

      comment: {
        fr:
          "Découvrez ensuite le Musée Cerralbo, une remarquable demeure aristocratique du XIXe siècle conservant mobilier, peintures et collections dans leur décor d’origine.",

        en:
          "Next discover the Cerralbo Museum, a remarkable 19th-century aristocratic residence preserving furniture, paintings and collections in their original setting."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       8. PLAZA DE ESPAÑA
    ===================================================== */

    {
      placeId:
        "plaza-espana",

      comment: {
        fr:
          "Terminez à Plaza de España, avec son monument à Cervantès, Don Quichotte et Sancho Panza, avant de rejoindre directement la station de métro.",

        en:
          "Finish at Plaza de España, with its monument to Cervantes, Don Quixote and Sancho Panza, before heading directly to the metro station."
      }
    }

  ]

},

/* =========================================================
   08. MADRID AUTHENTIQUE — RIVIÈRE, TRADITIONS ET VIEUX QUARTIERS
========================================================= */

{
  id: "madrid-authentique",

  name: {
    fr:
      "Madrid authentique — Entre rivière, traditions et vieux quartiers",

    en:
      "Authentic Madrid — River, Traditions and Old Neighbourhoods"
  },

  image:
    "images/itineraires/madrid-authentique.webp",

  duration: {
    fr:
      "Environ 4 à 5 h",

    en:
      "About 4 to 5 hours"
  },

  distance: {
    fr:
      "Environ 4 km à pied",

    en:
      "About 4 km on foot"
  },

  description: {
    fr:
      "Un parcours à pied pour découvrir un Madrid plus populaire et authentique, des berges de Madrid Río aux ruelles historiques de La Latina, entre pont monumental, patrimoine religieux et places pleines de caractère.",

    en:
      "A walking route through a more traditional and authentic side of Madrid, from the banks of Madrid Río to the historic streets of La Latina, combining monumental architecture, religious heritage and characterful squares."
  },

  startMetro: {
    station: "Marqués de Vadillo",
    lines: ["5"]
  },

  endMetro: {
    station: "La Latina",
    lines: ["5"]
  },

  steps: [

    /* =====================================================
       1. MADRID RÍO
    ===================================================== */

    {
      placeId:
        "madrid-rio",

      comment: {
        fr:
          "Commencez sur les berges de Madrid Río, vaste promenade aménagée le long du Manzanares. Profitez de cette première étape plus verte avant de remonter vers le Madrid historique.",

        en:
          "Start along Madrid Río, the vast riverside promenade beside the Manzanares. Enjoy this greener introduction before heading toward historic Madrid."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       2. PUENTE DE TOLEDO
    ===================================================== */

    {
      placeId:
        "puente-de-toledo",

      comment: {
        fr:
          "Traversez le secteur du Puente de Toledo, élégant pont baroque du XVIIIe siècle orné de statues de San Isidro et Santa María de la Cabeza.",

        en:
          "Explore Puente de Toledo, an elegant 18th-century Baroque bridge decorated with statues of San Isidro and Santa María de la Cabeza."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       3. PUERTA DE TOLEDO
    ===================================================== */

    {
      placeId:
        "puerta-de-toledo",

      comment: {
        fr:
          "Remontez vers la Puerta de Toledo, ancienne porte monumentale marquant l’une des entrées historiques de Madrid.",

        en:
          "Walk uphill to Puerta de Toledo, the monumental gateway marking one of the historic entrances to Madrid."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       4. BASILIQUE SAN FRANCISCO EL GRANDE
    ===================================================== */

    {
      placeId:
        "basilica-san-francisco-el-grande",

      comment: {
        fr:
          "Poursuivez jusqu’à la basilique San Francisco el Grande, reconnaissable à son immense coupole. Entrez si possible pour découvrir son impressionnant intérieur et ses œuvres d’art.",

        en:
          "Continue to the Basilica of San Francisco el Grande, easily recognised by its enormous dome. If possible, step inside to discover its impressive interior and artworks."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       5. JARDINS DE LAS VISTILLAS
    ===================================================== */

    {
      placeId:
        "jardines-de-las-vistillas",

      comment: {
        fr:
          "Faites une pause aux Jardins de Las Vistillas, l’un des endroits les plus agréables du quartier pour profiter des vues sur l’ouest de Madrid.",

        en:
          "Take a break in Las Vistillas Gardens, one of the neighbourhood’s most pleasant spots for views over western Madrid."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       6. PLAZA DE LA PAJA
    ===================================================== */

    {
      placeId:
        "plaza-de-la-paja",

      comment: {
        fr:
          "Entrez ensuite dans le cœur historique de La Latina par Plaza de la Paja, ancienne place médiévale entourée de ruelles et de bâtiments chargés d’histoire.",

        en:
          "Enter the historic heart of La Latina at Plaza de la Paja, a former medieval square surrounded by narrow streets and historic buildings."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       7. MUSÉE DE SAN ISIDRO
    ===================================================== */

    {
      placeId:
        "museo-de-san-isidro",

      comment: {
        fr:
          "Découvrez le Musée de San Isidro pour remonter aux origines de Madrid et mieux comprendre l’histoire de la ville avant qu’elle ne devienne capitale royale.",

        en:
          "Visit the San Isidro Museum to explore Madrid’s origins and understand the city’s history before it became the royal capital."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       8. PLAZA DE CASCORRO
    ===================================================== */

    {
      placeId:
        "plaza-de-cascorro",

        comment: {
          fr:
            "Terminez à Plaza de Cascorro, l’un des lieux emblématiques de La Latina. Si vous faites cet itinéraire un dimanche, pensez à l’inverser et à commencer la journée ici pour profiter du célèbre marché El Rastro.",
        
          en:
            "Finish at Plaza de Cascorro, one of La Latina’s emblematic spots. If you follow this itinerary on a Sunday, consider reversing the route and starting your day here to enjoy the famous El Rastro market."
        }
    }

  ]

},

/* =========================================================
   09. MADRID TENDANCE — GRAN VÍA ET TRÉSORS CACHÉS DE MALASAÑA
========================================================= */

{
  id: "madrid-tendance",

  name: {
    fr:
      "Madrid tendance — Gran Vía et trésors cachés de Malasaña",

    en:
      "Trendy Madrid — Gran Vía and Malasaña’s Hidden Gems"
  },

  image:
    "images/itineraires/madrid-tendance.webp",

  duration: {
    fr:
      "Environ 4 à 5 h",

    en:
      "About 4 to 5 hours"
  },

  distance: {
    fr:
      "Environ 3 km à pied",

    en:
      "About 3 km on foot"
  },

  description: {
    fr:
      "Un parcours à pied entre l’ambiance alternative de Malasaña et l’effervescence de Gran Vía, mêlant places animées, petits musées, patrimoine baroque et architecture emblématique.",

    en:
      "A walking route from Malasaña’s alternative atmosphere to the energy of Gran Vía, combining lively squares, intimate museums, Baroque heritage and iconic architecture."
  },

  startMetro: {
    station: "Bilbao",
    lines: ["1", "4"]
  },

  endMetro: {
    station: "Gran Vía",
    lines: ["1", "5"]
  },

  steps: [

    /* =====================================================
       1. PLAZA DEL DOS DE MAYO
    ===================================================== */

    {
      placeId:
        "plaza-del-dos-de-mayo",

      comment: {
        fr:
          "Commencez au cœur de Malasaña par Plaza del Dos de Mayo, place emblématique du quartier et symbole du soulèvement madrilène du 2 mai 1808.",

        en:
          "Start in the heart of Malasaña at Plaza del Dos de Mayo, an emblematic neighbourhood square and a symbol of Madrid’s uprising of 2 May 1808."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       2. MUSÉE D’HISTOIRE DE MADRID
    ===================================================== */

    {
      placeId:
        "museo-historia-madrid",

      comment: {
        fr:
          "Poursuivez vers le Musée d’Histoire de Madrid pour découvrir l’évolution de la capitale depuis le XVIe siècle. L’entrée est gratuite.",

        en:
          "Continue to the History Museum of Madrid to discover the capital’s evolution from the 16th century onwards. Admission is free."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       3. MUSÉE DU ROMANTISME
    ===================================================== */

    {
      placeId:
        "museo-del-romanticismo",

      comment: {
        fr:
          "Rejoignez le Musée du Romantisme, une élégante maison-musée qui plonge dans la vie quotidienne de la bourgeoisie madrilène du XIXe siècle. Ne manquez pas son petit Jardín del Magnolio.",

        en:
          "Continue to the Museum of Romanticism, an elegant house museum recreating the life of Madrid’s 19th-century bourgeoisie. Don’t miss its small Magnolia Garden."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       4. SAN ANTONIO DE LOS ALEMANES
    ===================================================== */

    {
      placeId:
        "san-antonio-de-los-alemanes",

      comment: {
        fr:
          "Découvrez ensuite San Antonio de los Alemanes, petit trésor caché du baroque madrilène dont l’intérieur est presque entièrement recouvert de fresques.",

        en:
          "Next discover San Antonio de los Alemanes, a hidden jewel of Madrid Baroque architecture whose interior is almost entirely covered with frescoes."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       5. PLAZA DE CALLAO
    ===================================================== */

    {
      placeId:
        "plaza-de-callao",

      comment: {
        fr:
          "Rejoignez Plaza de Callao et changez complètement d’ambiance : cinémas, enseignes lumineuses et Edificio Carrión marquent ici l’entrée dans le Madrid vibrant de Gran Vía.",

        en:
          "Continue to Plaza de Callao for a complete change of atmosphere, with cinemas, illuminated signs and the Carrión Building marking your arrival on vibrant Gran Vía."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       6. GRAN VÍA
    ===================================================== */

    {
      placeId:
        "gran-via",

      comment: {
        fr:
          "Terminez en parcourant Gran Vía vers l’est. Profitez de ses façades monumentales, théâtres et boutiques avant de rejoindre la station Gran Vía.",

        en:
          "Finish by walking east along Gran Vía. Enjoy its monumental façades, theatres and shops before reaching Gran Vía metro station."
      }
    }

  ]

},

/* =========================================================
   10. MADRID CULTUREL — TRIANGLE D’ART ET CHEFS-D’ŒUVRE
========================================================= */

{
  id: "madrid-culturel",

  name: {
    fr:
      "Madrid culturel — Triangle d’art et chefs-d’œuvre",

    en:
      "Cultural Madrid — Art Triangle and Masterpieces"
  },

  image:
    "images/itineraires/madrid-culturel.webp",

  duration: {
    fr:
      "Environ 6 à 8 h",

    en:
      "About 6 to 8 hours"
  },

  distance: {
    fr:
      "Environ 3 km à pied",

    en:
      "About 3 km on foot"
  },

  description: {
    fr:
      "Un parcours consacré au grand Madrid culturel, reliant les trois musées du Triangle d’Art à plusieurs monuments et espaces emblématiques du Paseo del Prado.",

    en:
      "A route devoted to Madrid’s cultural highlights, connecting the three museums of the Art Triangle with several emblematic landmarks along Paseo del Prado."
  },

  startMetro: {
    station: "Sevilla",
    lines: ["2"]
  },

  endMetro: {
    station: "Estación del Arte",
    lines: ["1"]
  },

  steps: [

    /* =====================================================
       1. EDIFICIO METRÓPOLIS
    ===================================================== */

    {
      placeId:
        "edificio-metropolis",

      comment: {
        fr:
          "Commencez devant l’Edificio Metrópolis, l’une des silhouettes architecturales les plus emblématiques de Madrid, à la rencontre de Gran Vía et de la Calle de Alcalá.",

        en:
          "Start at the Metrópolis Building, one of Madrid’s most iconic architectural landmarks, where Gran Vía meets Calle de Alcalá."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       2. PLAZA DE CIBELES
    ===================================================== */

    {
      placeId:
        "plaza-cibeles",

      comment: {
        fr:
          "Descendez la Calle de Alcalá jusqu’à Plaza de Cibeles et admirez sa célèbre fontaine, le Palacio de Cibeles et la Banque d’Espagne.",

        en:
          "Walk down Calle de Alcalá to Plaza de Cibeles and admire its famous fountain, Cibeles Palace and the Bank of Spain."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       3. MUSÉE THYSSEN-BORNEMISZA
    ===================================================== */

    {
      placeId:
        "musee-thyssen",

      comment: {
        fr:
          "Entrez dans le Triangle d’Art avec le Musée Thyssen-Bornemisza, dont les collections permettent de parcourir plusieurs siècles d’art occidental, des maîtres anciens à l’art moderne.",

        en:
          "Enter Madrid’s Art Triangle at the Thyssen-Bornemisza Museum, whose collection spans centuries of Western art, from old masters to modern art."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       4. PLAZA DE LAS CORTES
    ===================================================== */

    {
      placeId:
        "plaza-de-las-cortes",

      comment: {
        fr:
          "Faites un court détour par Plaza de las Cortes, dominée par le Congreso de los Diputados et sa façade monumentale.",

        en:
          "Make a short detour to Plaza de las Cortes, dominated by the monumental façade of the Spanish Congress of Deputies."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       5. MONUMENT AUX MORTS POUR L’ESPAGNE
    ===================================================== */

    {
      placeId:
        "monumento-caidos-por-espana",

      comment: {
        fr:
          "Rejoignez la Plaza de la Lealtad et son Monument aux morts pour l’Espagne. Repérez la flamme permanente au pied de l’obélisque.",

        en:
          "Continue to Plaza de la Lealtad and the Monument to the Fallen for Spain. Look for the eternal flame at the foot of the obelisk."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       6. FONTAINE DE NEPTUNE
    ===================================================== */

    {
      placeId:
        "fuente-de-neptuno",

      comment: {
        fr:
          "Poursuivez jusqu’à la Fontaine de Neptune, autre grande fontaine monumentale du Paseo del Prado et véritable repère du Triangle d’Art.",

        en:
          "Continue to Neptune Fountain, another major monumental fountain along Paseo del Prado and a landmark of Madrid’s Art Triangle."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       7. MUSÉE DU PRADO
    ===================================================== */

    {
      placeId:
        "musee-prado",

      comment: {
        fr:
          "Rejoignez le Musée du Prado, temple des maîtres européens. Parmi les incontournables : Les Ménines de Velázquez, Le Jardin des délices de Bosch et Le 3 mai 1808 de Goya.",

        en:
          "Continue to the Prado Museum, home to masterpieces by Europe’s great masters. Highlights include Velázquez’s Las Meninas, Bosch’s Garden of Earthly Delights and Goya’s Third of May 1808."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       8. REAL JARDÍN BOTÁNICO
    ===================================================== */

    {
      placeId:
        "real-jardin-botanico",

      comment: {
        fr:
          "Après le Prado, accordez-vous une parenthèse plus calme au Real Jardín Botánico, situé juste à côté du musée, entre terrasses, collections végétales et serres.",

        en:
          "After the Prado, enjoy a quieter break at the Royal Botanic Garden next door, with its terraces, plant collections and greenhouses."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       9. MUSÉE REINA SOFÍA
    ===================================================== */

    {
      placeId:
        "musee-reina-sofia",

      comment: {
        fr:
          "Terminez le Triangle d’Art au Musée Reina Sofía, consacré à l’art moderne et contemporain. Ne manquez surtout pas Guernica de Picasso, œuvre phare du musée.",

        en:
          "Complete the Art Triangle at the Reina Sofía Museum, devoted to modern and contemporary art. Above all, don’t miss Picasso’s Guernica, the museum’s defining masterpiece."
      }
    }

  ]

},

/* =========================================================
   11. MADRID CULTUREL — TRÉSORS MÉCONNUS DU PASEO DEL ARTE
========================================================= */

{
  id: "tresors-meconnus-paseo-del-arte",

  name: {
    fr:
      "Madrid culturel — Les trésors méconnus du Paseo del Arte",

    en:
      "Cultural Madrid — Hidden Gems of Paseo del Arte"
  },

  image:
    "images/itineraires/tresors-meconnus-paseo-del-arte.webp",

  duration: {
    fr:
      "Environ 5 à 6 h",

    en:
      "About 5 to 6 hours"
  },

  distance: {
    fr:
      "Environ 3,5 km à pied",

    en:
      "About 3.5 km on foot"
  },

  description: {
    fr:
      "Une autre manière d’explorer le Paseo del Arte, loin des trois grands musées, à travers centres culturels, collections spécialisées, patrimoine historique et monuments emblématiques.",

    en:
      "A different way to explore Paseo del Arte beyond its three major museums, through cultural centres, specialised collections, historic landmarks and iconic monuments."
  },

  startMetro: {
    station: "Estación del Arte",
    lines: ["1"]
  },

  endMetro: {
    station: "Retiro",
    lines: ["2"]
  },

  steps: [

    /* =====================================================
       1. CAIXAFORUM MADRID
    ===================================================== */

    {
      placeId:
        "caixaforum-madrid",

      comment: {
        fr:
          "Commencez au CaixaForum Madrid, installé dans une ancienne centrale électrique transformée par Herzog & de Meuron. Même sans visiter une exposition, observez le bâtiment suspendu et son célèbre jardin vertical.",

        en:
          "Start at CaixaForum Madrid, housed in a former power station transformed by Herzog & de Meuron. Even without visiting an exhibition, admire the suspended building and its famous vertical garden."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       2. FONTAINE DE NEPTUNE
    ===================================================== */

    {
      placeId:
        "fuente-de-neptuno",

      comment: {
        fr:
          "Remontez le Paseo del Prado jusqu’à la Fontaine de Neptune, l’une des grandes compositions monumentales imaginées lors de l’aménagement de ce secteur au XVIIIe siècle.",

        en:
          "Walk up Paseo del Prado to Neptune Fountain, one of the great monumental compositions created during the 18th-century redevelopment of this area."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       3. MONUMENT AUX MORTS POUR L’ESPAGNE
    ===================================================== */

    {
      placeId:
        "monumento-caidos-por-espana",

      comment: {
        fr:
          "Rejoignez ensuite la Plaza de la Lealtad et son Monument aux morts pour l’Espagne. Repérez la flamme permanente au pied de l’obélisque.",

        en:
          "Continue to Plaza de la Lealtad and the Monument to the Fallen for Spain. Look for the eternal flame at the foot of the obelisk."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       4. MUSÉE NAVAL
    ===================================================== */

    {
      placeId:
        "museo-naval",

      comment: {
        fr:
          "Découvrez le Musée naval, consacré à l’histoire maritime espagnole. Parmi ses pièces majeures, cherchez la carte de Juan de la Cosa réalisée en 1500.",

        en:
          "Discover the Naval Museum, devoted to Spain’s maritime history. Among its highlights, look for Juan de la Cosa’s map created in 1500."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       5. MUSÉE NATIONAL DES ARTS DÉCORATIFS
    ===================================================== */

    {
      placeId:
        "museo-nacional-artes-decorativas",

      comment: {
        fr:
          "Poursuivez vers le Musée national des Arts décoratifs, une collection plus intimiste consacrée au mobilier, aux céramiques, textiles et intérieurs historiques.",

        en:
          "Continue to the National Museum of Decorative Arts, a more intimate collection devoted to furniture, ceramics, textiles and historic interiors."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       6. SAN JERÓNIMO EL REAL
    ===================================================== */

    {
      placeId:
        "san-jeronimo-el-real",

      comment: {
        fr:
          "Rejoignez ensuite l’église San Jerónimo el Real, ancien vestige du monastère des Hiéronymites et lieu étroitement associé à l’histoire de la monarchie espagnole.",

        en:
          "Continue to San Jerónimo el Real, a surviving part of the former Hieronymite monastery and a church closely linked to the history of the Spanish monarchy."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       7. PUERTA DE ALCALÁ
    ===================================================== */

    {
      placeId:
        "puerta-alcala",

      comment: {
        fr:
          "Terminez à la Puerta de Alcalá, l’une des grandes portes monumentales de Madrid. Depuis ici, la station Retiro se trouve à quelques pas.",

        en:
          "Finish at Puerta de Alcalá, one of Madrid’s great monumental gateways. Retiro metro station is just a short walk away."
      }
    }

  ]

},

/* =========================================================
   12. MADRID ÉLÉGANT — SALAMANCA, PARC ET CULTURE
========================================================= */

{
  id: "madrid-elegant",

  name: {
    fr:
      "Madrid élégant — Salamanca, parc et culture",

    en:
      "Elegant Madrid — Salamanca, Park and Culture"
  },

  image:
    "images/itineraires/madrid-elegant.webp",

  duration: {
    fr:
      "Environ 5 à 6 h",

    en:
      "About 5 to 6 hours"
  },

  distance: {
    fr:
      "Environ 5 km à pied",

    en:
      "About 5 km on foot"
  },

  description: {
    fr:
      "Un parcours à travers l’est élégant de Madrid, des arènes de Las Ventas aux musées du secteur de Castellana, en passant par un parc méconnu et les avenues raffinées du quartier de Salamanca.",

    en:
      "A route through Madrid’s elegant eastern districts, from Las Ventas bullring to the museums around Castellana, with a lesser-known park and the refined streets of Salamanca along the way."
  },

  startMetro: {
    station: "Ventas",
    lines: ["2", "5"]
  },

  endMetro: {
    station: "Gregorio Marañón",
    lines: ["7", "10"]
  },

  steps: [

    /* =====================================================
       1. ARÈNES DE LAS VENTAS
    ===================================================== */

    {
      placeId:
        "plaza-las-ventas",

      comment: {
        fr:
          "Commencez devant les arènes de Las Ventas, l’un des édifices les plus reconnaissables de Madrid avec son architecture néomudéjare en briques et céramiques.",

        en:
          "Start at Las Ventas bullring, one of Madrid’s most recognisable buildings with its Neo-Mudéjar brickwork and ceramic decoration."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       2. QUINTA DE LA FUENTE DEL BERRO
    ===================================================== */

    {
      placeId:
        "quinta-fuente-del-berro",

      comment: {
        fr:
          "Découvrez ensuite la Quinta de la Fuente del Berro, un parc beaucoup moins fréquenté que le Retiro, avec jardins, bassins et chemins ombragés propices à une pause.",

        en:
          "Continue to Quinta de la Fuente del Berro, a park far less visited than Retiro, with gardens, ponds and shaded paths ideal for a quiet break."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       3. PLAZA DE SALVADOR DALÍ
    ===================================================== */

    {
      placeId:
        "plaza-de-salvador-dali",

        comment: {
          fr:
            "Rejoignez Plaza de Salvador Dalí, où l’artiste a laissé une présence inattendue à Madrid. En poursuivant vers le Musée Lázaro Galdiano, profitez-en pour traverser le quartier de Salamanca et ses élégantes rues commerçantes, notamment autour de Goya, Serrano et Velázquez.",
        
          en:
            "Continue to Plaza de Salvador Dalí, where the artist left an unexpected mark on Madrid. On your way to the Lázaro Galdiano Museum, take the opportunity to explore the Salamanca district and its elegant shopping streets, particularly around Goya, Serrano and Velázquez."
        },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       4. MUSÉE LÁZARO GALDIANO
    ===================================================== */

    {
      placeId:
        "museo-lazaro-galdiano",

      comment: {
        fr:
          "Cpntinuez dans le quartier de Salamanca pour découvrir le Musée Lázaro Galdiano, installé dans une élégante demeure et abritant la remarquable collection privée de José Lázaro Galdiano.",

        en:
          "Continue through the Salamanca district to discover the Lázaro Galdiano Museum, housed in an elegant mansion and home to José Lázaro Galdiano’s remarkable private collection."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       5. MUSÉE NATIONAL DES SCIENCES NATURELLES
    ===================================================== */

    {
      placeId:
        "museo-ciencias-naturales",

      comment: {
        fr:
          "Terminez la partie culturelle au Musée national des Sciences naturelles, consacré à la biodiversité, à l’évolution, à la géologie et aux grandes collections scientifiques espagnoles.",

        en:
          "Finish the cultural part of the route at the National Museum of Natural Sciences, devoted to biodiversity, evolution, geology and Spain’s major scientific collections."
      }
    }

  ]

},

/* =========================================================
   13. MADRID CLASSIQUE — RETIRO ET GRANDES INSTITUTIONS
========================================================= */

{
  id: "madrid-classique",

  name: {
    fr:
      "Madrid classique — Retiro et grandes institutions",

    en:
      "Classic Madrid — Retiro and Great Institutions"
  },

  image:
    "images/itineraires/madrid-classique.webp",

  duration: {
    fr:
      "Environ 5 à 6 h",

    en:
      "About 5 to 6 hours"
  },

  distance: {
    fr:
      "Environ 3,5 km à pied",

    en:
      "About 3.5 km on foot"
  },

  description: {
    fr:
      "Un parcours entre nature, patrimoine et grandes institutions madrilènes, du parc du Retiro jusqu’à Plaza de Colón en passant par la Puerta de Alcalá et le prestigieux secteur de Recoletos.",

    en:
      "A route combining nature, heritage and major Madrid institutions, from El Retiro Park to Plaza de Colón via Puerta de Alcalá and the prestigious Recoletos district."
  },

  startMetro: {
    station: "Retiro",
    lines: ["2"]
  },

  endMetro: {
    station: "Colón",
    lines: ["4"]
  },

  steps: [

    /* =====================================================
       1. PARC DU RETIRO
    ===================================================== */

    {
      placeId:
        "parc-retiro",

      comment: {
        fr:
          "Commencez par une promenade dans le parc du Retiro. Découvrez le Grand Étang et le monument à Alphonse XII, puis prolongez si vous le souhaitez jusqu’au Palais de Cristal.",

        en:
          "Start with a walk through El Retiro Park. Discover the Great Pond and Monument to Alfonso XII, and continue to the Crystal Palace if you have time."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       2. PUERTA DE ALCALÁ
    ===================================================== */

    {
      placeId:
        "puerta-alcala",

      comment: {
        fr:
          "Sortez du Retiro par la Puerta de Alcalá, l’une des grandes portes monumentales de Madrid, construite au XVIIIe siècle sous Charles III.",

        en:
          "Leave Retiro through Puerta de Alcalá, one of Madrid’s great monumental gateways, built in the 18th century under Charles III."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       3. MUSÉE ARCHÉOLOGIQUE NATIONAL
    ===================================================== */

    {
      placeId:
        "museo-arqueologico-nacional",

      comment: {
        fr:
          "Poursuivez vers le Musée archéologique national. Si votre temps est limité, concentrez-vous sur ses pièces majeures, notamment la Dame d’Elche et le Trésor de Guarrazar.",

        en:
          "Continue to the National Archaeological Museum. If time is limited, focus on its major treasures, particularly the Lady of Elche and the Treasure of Guarrazar."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       4. BIBLIOTECA NACIONAL
    ===================================================== */

    {
      placeId:
        "biblioteca-nacional-espana",

      comment: {
        fr:
          "Observez ensuite la Biblioteca Nacional de España, qui partage le même ensemble monumental que le musée. Prenez le temps d’admirer sa façade et son imposant escalier.",

        en:
          "Next discover the National Library of Spain, which shares the same monumental complex as the museum. Take a moment to admire its façade and imposing staircase."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       5. MUSEO DE CERA
    ===================================================== */

    {
      placeId:
        "museo-de-cera-madrid",

      comment: {
        fr:
          "Pour une étape plus légère, découvrez le Museo de Cera de Madrid et ses centaines de figures représentant personnages historiques, sportifs, artistes et célébrités.",

        en:
          "For a more entertaining stop, visit the Madrid Wax Museum and its hundreds of figures representing historical personalities, athletes, artists and celebrities."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       6. PLAZA DE COLÓN
    ===================================================== */

    {
      placeId:
        "plaza-de-colon",

      comment: {
        fr:
          "Terminez à Plaza de Colón, vaste place dédiée à Christophe Colomb et point de rencontre entre Recoletos et le quartier de Salamanca. La station Colón se trouve directement à proximité.",

        en:
          "Finish at Plaza de Colón, a major square dedicated to Christopher Columbus and a meeting point between Recoletos and the Salamanca district. Colón metro station is just nearby."
      }
    }

  ]

},

/* =========================================================
   14. MADRID MODERNE — TOURS, STADE ET CULTURE
========================================================= */

{
  id: "madrid-moderne",

  name: {
    fr:
      "Madrid moderne — Tours, stade et culture",

    en:
      "Modern Madrid — Towers, Stadium and Culture"
  },

  image:
    "images/itineraires/madrid-moderne.webp",

  duration: {
    fr:
      "Environ 4 à 5 h",

    en:
      "About 4 to 5 hours"
  },

  distance: {
    fr:
      "Environ 4 km à pied",

    en:
      "About 4 km on foot"
  },

  description: {
    fr:
      "Un parcours à travers le Madrid contemporain, entre quartier d’affaires, architecture moderne, football et sciences, de Plaza de Castilla jusqu’au quartier de Ríos Rosas.",

    en:
      "A route through contemporary Madrid combining business districts, modern architecture, football and science, from Plaza de Castilla to the Ríos Rosas neighbourhood."
  },

  startMetro: {
    station: "Plaza de Castilla",
    lines: ["1", "9", "10"]
  },

  endMetro: {
    station: "Ríos Rosas",
    lines: ["1"]
  },

  steps: [

    /* =====================================================
       1. PLAZA DE CASTILLA
    ===================================================== */

    {
      placeId:
        "plaza-de-castilla",

      comment: {
        fr:
          "Commencez à Plaza de Castilla, l’un des grands visages du Madrid moderne. Observez les tours inclinées de la Puerta de Europa et, vers le nord, les gratte-ciel des Cuatro Torres.",

        en:
          "Start at Plaza de Castilla, one of the defining sights of modern Madrid. Admire the leaning Puerta de Europa towers and, to the north, the Cuatro Torres skyscrapers."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       2. ESTADIO SANTIAGO BERNABÉU
    ===================================================== */

    {
      placeId:
        "santiago-bernabeu",

      comment: {
        fr:
          "Descendez le Paseo de la Castellana jusqu’au Santiago Bernabéu, stade mythique du Real Madrid transformé par une spectaculaire rénovation contemporaine.",

        en:
          "Walk down Paseo de la Castellana to Santiago Bernabéu, Real Madrid’s legendary stadium, transformed by a spectacular contemporary renovation."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       3. PLAZA PABLO RUIZ PICASSO
    ===================================================== */

    {
      placeId:
        "plaza-pablo-ruiz-picasso",

      comment: {
        fr:
          "Poursuivez vers Plaza de Pablo Ruiz Picasso, au cœur du quartier d’affaires AZCA. Le secteur offre un contraste saisissant avec le Madrid historique grâce à ses tours et son architecture contemporaine.",

        en:
          "Continue to Plaza de Pablo Ruiz Picasso in the heart of the AZCA business district. Its towers and contemporary architecture offer a striking contrast with historic Madrid."
      },

      next: {
        mode: "walk"
      }
    },


    /* =====================================================
       4. MUSEO GEOMINERO
    ===================================================== */

    {
      placeId:
        "museo-geominero",

      comment: {
        fr:
          "Terminez au Museo Geominero, un musée scientifique méconnu consacré aux minéraux, roches et fossiles. Son spectaculaire hall historique vaut à lui seul le détour.",

        en:
          "Finish at the Geominero Museum, a lesser-known science museum devoted to minerals, rocks and fossils. Its spectacular historic hall is worth the visit in itself."
      }
    }

  ]

},

];