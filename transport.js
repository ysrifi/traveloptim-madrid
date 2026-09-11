/* =========================================================
   TRAVELOPTIM MADRID
   DONNÉES — SE DÉPLACER

   SOMMAIRE
   1. Connexions avec l’aéroport
   2. Métro — titres de transport
   3. Métro — lignes essentielles
   4. Lignes de bus utiles
========================================================= */

const transport = [

  // =========================================================
  // 1. CONNEXIONS AVEC L’AÉROPORT
  // =========================================================
  {
    id: "connexion-aeroport",
    type: "transport-list",

    name: {
      fr: "Connexion avec l’aéroport",
      en: "Airport connections"
    },

    image: "images/connexion-aeroport.webp",

    photo: {
      author: "M.Peinado from Alcalá de Henares, España",
      source: "Wikimedia Commons",
      license: "CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:001256_-_Madrid_(4000839860).jpg"
    },

    description: {
      fr: "Depuis l’aéroport Adolfo Suárez Madrid-Barajas, plusieurs solutions permettent de rejoindre rapidement le centre. Le meilleur choix dépend surtout de votre terminal, de votre destination et du nombre de voyageurs.",
      en: "From Adolfo Suárez Madrid-Barajas Airport, several options connect you with central Madrid. The best choice mainly depends on your terminal, destination and number of travellers."
    },

    items: [
      {
        name: {
          fr: "Métro — Ligne 8",
          en: "Metro — Line 8"
        },

        connection: {
          fr: "Aéroport T1-T2-T3 / T4 → Nuevos Ministerios",
          en: "Airport T1-T2-T3 / T4 → Nuevos Ministerios"
        },

        price: {
          fr: "1,50–2 € + supplément aéroport de 3 €",
          en: "€1.50–€2 + €3 airport supplement"
        },

        note: {
          fr: "Pratique si votre hébergement est bien connecté au métro. À Nuevos Ministerios, vous pouvez poursuivre notamment par les lignes 6 et 10.",
          en: "Convenient if your accommodation is well connected to the Metro. At Nuevos Ministerios, you can continue on Lines 6 and 10."
        },

        url: "https://www.aena.es/en/adolfo-suarez-madrid-barajas/getting-there/underground.html"
      },

      {
        name: {
          fr: "Bus Exprés Aéroport — ligne 203",
          en: "Airport Express Bus — Line 203"
        },

        connection: {
          fr: "Aéroport → Cibeles / Atocha",
          en: "Airport → Cibeles / Atocha"
        },

        price: {
          fr: "5 €",
          en: "€5"
        },

        note: {
          fr: "Fonctionne 24 h/24. C’est une solution particulièrement intéressante si vous logez autour de Cibeles ou du secteur d’Atocha.",
          en: "Runs 24 hours a day. Particularly useful if you are staying around Cibeles or the Atocha area."
        },

        url: "https://www.aena.es/en/adolfo-suarez-madrid-barajas/getting-there/bus.html"
      },

      {
        name: {
          fr: "Cercanías — ligne C1",
          en: "Cercanías — Line C1"
        },

        connection: {
          fr: "Aéroport T4 → Chamartín → Nuevos Ministerios → Atocha → Príncipe Pío",
          en: "Airport T4 → Chamartín → Nuevos Ministerios → Atocha → Príncipe Pío"
        },

        price: {
          fr: "1,70–2,60 € selon le nombre de zones",
          en: "€1.70–€2.60 depending on fare zones"
        },

        note: {
          fr: "Très intéressant depuis la T4 pour rejoindre directement plusieurs grands pôles ferroviaires du centre sans changement.",
          en: "A very useful option from T4 for reaching several major central railway hubs directly without changing trains."
        },

        url: "https://www.aena.es/en/adolfo-suarez-madrid-barajas/getting-there/trains.html"
      },

      {
        name: {
          fr: "Taxi",
          en: "Taxi"
        },

        connection: {
          fr: "Aéroport → toute destination à l’intérieur de la M-30",
          en: "Airport → any destination inside the M-30"
        },

        price: {
          fr: "33 € · tarif fixe",
          en: "€33 · flat fare"
        },

        note: {
          fr: "Particulièrement intéressant à plusieurs ou avec beaucoup de bagages. Le tarif fixe s’applique entre l’aéroport et toute destination située à l’intérieur de la M-30.",
          en: "Especially convenient for groups or travellers with a lot of luggage. The flat fare applies between the airport and any destination inside the M-30."
        },

        url: "https://www.aena.es/en/adolfo-suarez-madrid-barajas/getting-there/taxi.html"
      }
    ]
  },

  // =========================================================
  // 2. MÉTRO — TITRES DE TRANSPORT
  // =========================================================
  {
    id: "metro-madrid",
    type: "metro-tickets",

    name: {
      fr: "Métro de Madrid",
      en: "Madrid Metro"
    },

    image: "images/metro-madrid.webp",

    photo: {
      author: "Javitomad",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_Metro_Map.svg"
    },

    description: {
      fr: "Le métro est généralement le moyen le plus simple pour se déplacer entre les principaux secteurs touristiques. Le choix du titre dépend surtout du nombre de trajets et de la durée de votre séjour.",
      en: "The Metro is generally the easiest way to travel between Madrid’s main visitor areas. The best ticket mainly depends on how many journeys you plan to make and the length of your stay."
    },

    items: [
      {
        name: {
          fr: "Billet simple — Zone A",
          en: "Single ticket — Zone A"
        },

        price: {
          fr: "1,50 à 2 €",
          en: "€1.50 to €2"
        },

        note: {
          fr: "Jusqu’à 5 stations : 1,50 €. De 6 à 9 stations, 0,10 € est ajouté par station. À partir de 10 stations : 2 €. Adapté si vous utilisez peu le métro.",
          en: "Up to 5 stations: €1.50. From 6 to 9 stations, €0.10 is added per station. From 10 stations: €2. Best if you only use the Metro occasionally."
        },

        url: "https://www.metromadrid.es/en/viaja-en-metro/titulos-y-tarifas/tarifas#panel1"
      },

      {
        name: {
          fr: "Billet 10 voyages — Metrobús",
          en: "10-journey Metrobús ticket"
        },

        price: {
          fr: "7,30 € en 2026",
          en: "€7.30 in 2026"
        },

        note: {
          fr: "Valable sur le métro Zone A, les bus EMT hors Exprés Aéroport et ML1. Il est multipersonnel : plusieurs voyageurs peuvent utiliser la même carte s’ils voyagent ensemble.",
          en: "Valid on Metro Zone A, EMT buses except the Airport Express, and ML1. It is multi-person, so several travellers can share it when travelling together."
        },

        url: "https://www.metromadrid.es/en/viaja-en-metro/titulos-y-tarifas/tarifas#panel1"
      },

      {
        name: {
          fr: "Abono Turístico — Zone A",
          en: "Tourist Travel Pass — Zone A"
        },

        price: {
          fr: "1 j : 10,30 € · 2 j : 17,50 € · 3 j : 23,10 € · 4 j : 27,80 € · 5 j : 33,40 € · 7 j : 43,20 €",
          en: "1 day: €10.30 · 2 days: €17.50 · 3 days: €23.10 · 4 days: €27.80 · 5 days: €33.40 · 7 days: €43.20"
        },

        note: {
          fr: "Voyages illimités pendant la durée choisie. La Zone A suffit pour l’essentiel d’un séjour touristique à Madrid et inclut le supplément métro de l’aéroport.",
          en: "Unlimited travel for the selected period. Zone A covers most visitor needs in Madrid and includes the Metro airport supplement."
        },

        url: "https://www.metromadrid.es/en/viaja-en-metro/titulos-y-tarifas/tarifas#panel5"
      },

      {
        name: {
          fr: "Madrid City Card",
          en: "Madrid City Card"
        },

        price: {
          fr: "1 j : 10,30 € · 2 j : 17,50 € · 3 j : 23,10 € · 4 j : 27,80 € · 5 j : 33,40 €",
          en: "1 day: €10.30 · 2 days: €17.50 · 3 days: €23.10 · 4 days: €27.80 · 5 days: €33.40"
        },

        note: {
          fr: "Inclut l’Abono Turístico Zone A, auquel s’ajoutent des réductions et avantages dans certains musées, attractions et établissements partenaires.",
          en: "Includes the Zone A Tourist Travel Pass plus discounts and benefits at selected museums, attractions and participating establishments."
        },

        url: "https://citycard.esmadrid.com/en"
      }
    ]
  },

  // =========================================================
  // 3. MÉTRO — LIGNES ESSENTIELLES
  // =========================================================
  {
    id: "lignes-importantes",
    type: "metro-network",

    name: {
      fr: "Les lignes essentielles",
      en: "Essential Metro lines"
    },

    image: "images/lignes-importantes.webp",

    photo: {
      author: "Robot8A",
      source: "Wikimedia Commons",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Madrid_00_48_06_914000.jpeg"
    },

    description: {
      fr: "Pour optimiser vos déplacements, essayez de rejoindre les lignes 1, 2, 3, 5 et 10 : elles desservent directement ou connectent une grande partie des lieux utiles à une première visite de Madrid.",
      en: "To optimise your journeys, try to connect with Lines 1, 2, 3, 5 and 10: together they directly serve or connect many of the most useful areas for a first visit to Madrid."
    },

    network: {
      lines: [
        {
          id: "1",
          color: "#5AA6D6"
        },

        {
          id: "2",
          color: "#E53935"
        },

        {
          id: "3",
          color: "#F4C430"
        },

        {
          id: "5",
          color: "#8CC63F"
        },

        {
          id: "10",
          color: "#174A8B"
        }
      ],

      stations: [

        // -------------------------------------------------
        // PLAZA DE CASTILLA
        // -------------------------------------------------

        {
          id: "plaza-de-castilla",
          name: "Plaza de Castilla",

          lines: [
            "10"
          ],

          places: [
            "plaza-de-castilla"
          ]
        },

        // -------------------------------------------------
        // SANTIAGO BERNABÉU
        // -------------------------------------------------

        {
          id: "santiago-bernabeu",
          name: "Santiago Bernabéu",

          lines: [
            "10"
          ],

          places: [
            "santiago-bernabeu",
            "plaza-pablo-ruiz-picasso"
          ]
        },

        // -------------------------------------------------
        // RÍOS ROSAS
        // -------------------------------------------------

        {
          id: "rios-rosas",
          name: "Ríos Rosas",

          lines: [
            "1"
          ],

          places: [
            "museo-geominero"
          ]
        },

        // -------------------------------------------------
        // GREGORIO MARAÑÓN
        // -------------------------------------------------

        {
          id: "gregorio-maranon",
          name: "Gregorio Marañón",

          lines: [
            "10"
          ],

          places: [
            "museo-lazaro-galdiano",
            "museo-ciencias-naturales"
          ]
        },

        // -------------------------------------------------
        // MONCLOA
        // -------------------------------------------------

        {
          id: "moncloa",
          name: "Moncloa",

          lines: [
            "3"
          ],

          places: [
            "faro-de-moncloa",
            "arco-de-la-victoria",
            "museo-de-america",
            "parque-del-oeste"
          ]
        },

        // -------------------------------------------------
        // VENTAS
        // -------------------------------------------------

        {
          id: "ventas",
          name: "Ventas",

          lines: [
            "2"
          ],

          places: [
            "plaza-las-ventas",
            "quinta-fuente-del-berro"
          ]
        },

        // -------------------------------------------------
        // GOYA
        // -------------------------------------------------

        {
          id: "goya",
          name: "Goya",

          lines: [
            "2"
          ],

          places: [
            "plaza-de-salvador-dali"
          ]
        },

        // -------------------------------------------------
        // TRIBUNAL
        // -------------------------------------------------

        {
          id: "tribunal",
          name: "Tribunal",

          lines: [
            "1",
            "10"
          ],

          places: [
            "museo-del-romanticismo",
            "museo-historia-madrid",
            "plaza-del-dos-de-mayo"
          ]
        },

        // -------------------------------------------------
        // PLAZA DE ESPAÑA
        // -------------------------------------------------

        {
          id: "plaza-de-espana",
          name: "Plaza de España",

          lines: [
            "3",
            "10"
          ],

          places: [
            "plaza-espana",
            "temple-debod",
            "museo-cerralbo"
          ]
        },

        // -------------------------------------------------
        // PRÍNCIPE PÍO
        // -------------------------------------------------

        {
          id: "principe-pio",
          name: "Príncipe Pío",

          lines: [
            "10"
          ],

          places: [
            "teleferico-de-madrid",
            "puerta-de-san-vicente",
            "jardines-campo-del-moro"
          ]
        },

        // -------------------------------------------------
        // RETIRO
        // -------------------------------------------------

        {
          id: "retiro",
          name: "Retiro",

          lines: [
            "2"
          ],

          places: [
            "parc-retiro",
            "puerta-alcala",
            "plaza-de-colon",
            "museo-de-cera-madrid",
            "museo-arqueologico-nacional",
            "san-jeronimo-el-real",
            "museo-nacional-artes-decorativas",
            "biblioteca-nacional-espana"
          ]
        },

        // -------------------------------------------------
        // SEVILLA
        // -------------------------------------------------

        {
          id: "sevilla",
          name: "Sevilla",

          lines: [
            "2"
          ],

          places: [
            "edificio-metropolis",
            "plaza-de-santa-ana"
          ]
        },

        // -------------------------------------------------
        // CALLAO
        // -------------------------------------------------

        {
          id: "callao",
          name: "Callao",

          lines: [
            "3",
            "5"
          ],

          places: [
            "plaza-de-callao",
            "gran-via",
            "monasterio-descalzas-reales",
            "san-antonio-de-los-alemanes"
          ]
        },

        // -------------------------------------------------
        // SOL
        // -------------------------------------------------

        {
          id: "sol",
          name: "Sol",

          lines: [
            "1",
            "2",
            "3"
          ],

          places: [
            "puerta-del-sol",
            "plaza-mayor",
            "gran-via"
          ]
        },

        // -------------------------------------------------
        // ÓPERA
        // -------------------------------------------------

        {
          id: "opera",
          name: "Ópera",

          lines: [
            "2",
            "5"
          ],

          places: [
            "plaza-de-la-villa",
            "plaza-de-ramales",
            "plaza-oriente",
            "palais-royal-madrid",
            "cathedrale-almudena",
            "mercado-san-miguel",
            "jardines-de-sabatini",
            "teatro-real",
            "real-monasterio-de-la-encarnacion"
          ]
        },

        // -------------------------------------------------
        // TIRSO DE MOLINA
        // -------------------------------------------------

        {
          id: "tirso-de-molina",
          name: "Tirso de Molina",

          lines: [
            "1"
          ],

          places: [
            "museo-de-las-ilusiones-madrid"
          ]
        },

        // -------------------------------------------------
        // LA LATINA
        // -------------------------------------------------

        {
          id: "la-latina",
          name: "La Latina",

          lines: [
            "5"
          ],

          places: [
            "basilica-san-francisco-el-grande",
            "jardines-de-las-vistillas",
            "museo-de-san-isidro",
            "plaza-de-la-paja",
            "plaza-de-cascorro"
          ]
        },

        // -------------------------------------------------
        // ESTACIÓN DEL ARTE
        // -------------------------------------------------

        {
          id: "estacion-del-arte",
          name: "Estación del Arte",

          lines: [
            "1"
          ],

          places: [
            "musee-prado",
            "musee-reina-sofia",
            "real-jardin-botanico",
            "caixaforum-madrid"
          ]
        },

        // -------------------------------------------------
        // PUERTA DE TOLEDO
        // -------------------------------------------------

        {
          id: "puerta-de-toledo",
          name: "Puerta de Toledo",

          lines: [
            "5"
          ],

          places: [
            "puerta-de-toledo"
          ]
        },

        // -------------------------------------------------
        // MARQUÉS DE VADILLO
        // -------------------------------------------------

        {
          id: "marques-de-vadillo",
          name: "Marqués de Vadillo",

          lines: [
            "5"
          ],

          places: [
            "puente-de-toledo",
            "madrid-rio"
          ]
        },

        // -------------------------------------------------
        // CASA DE CAMPO
        // -------------------------------------------------

        {
          id: "casa-de-campo",
          name: "Casa de Campo",

          lines: [
            "5"
          ],

          places: [
            "casa-de-campo",
            "zoo-aquarium-madrid",
            "parque-de-atracciones-madrid"
          ]
        }
      ]
    }
  },

  // =========================================================
  // 4. LIGNES DE BUS UTILES
  // =========================================================
  {
    id: "bus-utiles",
    type: "bus-lines",

    name: {
      fr: "Lignes de bus utiles",
      en: "Useful bus routes"
    },

    image: "images/bus-utiles.webp",

    photo: {
      author: "Diario de Madrid",
      source: "Wikimedia Commons",
      license: "CC BY 4.0",
      url: "https://commons.wikimedia.org/wiki/File:EMT_compra_89_autobuses_adicionales_para_2017_y_2018_(03).jpg"
    },

    description: {
      fr: "Le métro couvre l’essentiel de Madrid, mais quelques lignes de bus permettent d’éviter de longues marches ou de rejoindre plus facilement certains lieux excentrés du guide.",
      en: "The Metro covers most of Madrid, but a few bus routes can save long walks or make it easier to reach some of the guide’s more outlying destinations."
    },

    price: {
      fr: "Billet simple EMT : 1,50 €",
      en: "EMT single ticket: €1.50"
    },

    items: [
      {
        line: "33",

        connection: {
          fr: "Príncipe Pío → Parque de Atracciones → Zoo → Casa de Campo",
          en: "Príncipe Pío → Amusement Park → Zoo → Casa de Campo"
        },

        usefulFor: {
          fr: "Très utile pour relier directement Príncipe Pío aux grands loisirs de Casa de Campo sans multiplier les changements.",
          en: "Useful for travelling directly from Príncipe Pío to Casa de Campo’s major leisure attractions without multiple changes."
        },

        url: "https://www.crtm.es/tu-transporte-publico/autobuses-emt/lineas/6__33___"
      },

      {
        line: "118",

        connection: {
          fr: "Embajadores → San Francisco (L11) → secteur Islazul / La Peseta",
          en: "Embajadores → San Francisco (L11) → Islazul / La Peseta area"
        },

        usefulFor: {
          fr: "Particulièrement pratique pour rejoindre Islazul depuis la ligne 11 ou depuis le secteur d’Embajadores.",
          en: "Particularly useful for reaching Islazul from Line 11 or from the Embajadores area."
        },

        url: "https://www.crtm.es/tu-transporte-publico/autobuses-emt/lineas/6__118___"
      },

      {
        line: "142",

        connection: {
          fr: "Pavones → Las Suertes → Centro Comercial La Gavia",
          en: "Pavones → Las Suertes → La Gavia Shopping Centre"
        },

        usefulFor: {
          fr: "Alternative pratique à la marche depuis la ligne 1 pour rejoindre directement les accès de La Gavia.",
          en: "A useful alternative to walking from Line 1, with stops serving La Gavia directly."
        },

        url: "https://www.crtm.es/tu-transporte-publico/autobuses-emt/lineas/6__142___"
      },

      {
        line: "77",

        connection: {
          fr: "Ciudad Lineal → Canillejas → secteur Plenilunio",
          en: "Ciudad Lineal → Canillejas → Plenilunio area"
        },

        usefulFor: {
          fr: "Utile pour rejoindre le secteur de Plenilunio depuis Ciudad Lineal ou Canillejas lorsqu’on ne dispose pas d’une connexion métro directe.",
          en: "Useful for reaching the Plenilunio area from Ciudad Lineal or Canillejas, as the shopping centre has no direct Metro station."
        },

        url: "https://www.crtm.es/tu-transporte-publico/autobuses-emt/lineas/6__77___"
      }
    ]
  }

];