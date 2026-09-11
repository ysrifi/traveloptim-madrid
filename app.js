/* =========================================================
   TRAVELOPTIM MADRID
   MOTEUR PRINCIPAL DE L'APPLICATION
========================================================= */


/* =========================================================
   SOMMAIRE

   A. CONFIGURATION ET ÉTAT
   01. Configuration générale
   02. Textes de l'interface
   03. Configuration — Guide — À voir
   04. Configuration — Guide — À faire
   05. Données globales
   06. Configuration — Métro
   07. État de l'application

   B. RÉFÉRENCES DOM
   08. Vues principales
   09. Accueil
   10. En-tête universel
   11. Guide
   12. Carrousel Guide
   13. Itinéraires
   14. Carte interactive
   15. Planification
   15.1 À propos / Langue

   C. OUTILS ET NAVIGATION
   16. Outils généraux
   17. Outils responsive
   18. Gestion des vues
   19. En-tête universel
   20. Accueil
   21. Menu principal
   22. Guide
   23. À voir
   24. À faire
   25. Quartiers
   26. Se déplacer
   27. Mes favoris

   D. ITINÉRAIRES
   28. Itinéraires
       28.1 Recherche d'un lieu par ID
       28.2 Identification des incontournables
       28.3 Affichage
       28.4 Création d'une carte
       28.5 Interactions
       28.6 Connecteurs
       28.7 Badges métro
   29. Carrousel des itinéraires
       29.1 Interface
       29.2 Limites de l'index
       29.3 Position
       29.4 Déplacement desktop
       29.5 Flèches desktop
       29.6 Aperçus mobile / tablette
       29.7 Compteur
       29.8 Aide
       29.9 Événements des aperçus
       29.10 Glissement tactile

   E. CARTE INTERACTIVE
   30. Carte interactive
       30.P Planifier mon séjour
       30.1 Initialisation
       30.2 Stations de métro
       30.3 Lignes de métro
       30.4 Contrôles métro
       30.5 Registre des marqueurs de lieux
       30.6 Lieux et marqueurs
       30.7 Mes favoris
       30.7.1 Filtre Mes favoris
       30.8 Filtres des lieux
       30.9 Menu principal
       30.10 Recherche interne / externe
       30.11 Géolocalisation / proximité
       30.12 Itinéraires sur la carte

   F. TEXTES ET CONTENU DU GUIDE
   31. À propos
   32. Textes des vues
       32.1 Accueil
       32.2 Menu principal
       32.3 Planification
       32.3.1 Âge des enfants
       32.3.2 Favoris TravelOptim
       32.4 Guide
       32.5 Itinéraires
       32.6 Carte
       32.7 À propos
   33. Tuiles de catégorie
   34. Ouverture d'une catégorie
   35. En-tête de catégorie
   36. Favoris — bouton vider
   37. Favoris — affichage
   38. Horaires
   39. Tarifs
   40. Programmation / réservation
   41. Crédit photo
   42. Favori — bouton
   43. Routeur de card
   44. Card classique
   45. Card programme
   46. Card éditoriale
   47. Card quartier
   48. Card transport
   49. Card transport éditoriale
   50. Transport — listes éditoriales
   51. Transport — réseau métro du Guide
   52. Quartiers — lieux
   53. Card — élément de base
   54. Contenu éditorial
   55. Interactions des cards
   56. Gestion des favoris
   57. Carrousel Guide
   58. Glissement tactile Guide
   59. Aperçus Guide
   60. Compteur / aide

   G. LANGUE, ÉVÉNEMENTS ET DÉMARRAGE
   61. Changement de langue
   62. Événements — Accueil / menu principal
       62.1 Envoi du formulaire de planification
   63. Événement — Retour universel
   64. Événements — Guide
   65. Événements — Langue
   66. Événements — Carrousels
   67. Événements — Carte
   68. Redimensionnement
   69. Initialisation
========================================================= */


/* =========================================================
   01. CONFIGURATION GÉNÉRALE
========================================================= */

const DEFAULT_LANGUAGE =
  "fr";


const MOBILE_BREAKPOINT =
  720;


const TABLET_BREAKPOINT =
  1100;


const SWIPE_THRESHOLD =
  12;


/* =========================================================
   02. TEXTES DE L'INTERFACE
========================================================= */

const UI_TEXT = {

  fr: {

    welcome:
      "Bienvenue à Madrid",

    homePage:
      "Accueil",

    exploreMadrid:
      "Explorer Madrid",

    about:
      "À propos",

    guide:
      "Guide",

    see:
      "À voir",

    do:
      "À faire",

    districts:
      "Quartiers",

    transport:
      "Se déplacer",

    favorites:
      "Mes favoris",

    routes:
      "Itinéraires",

    interactiveMap:
      "Carte interactive",

      planning:
      "Planifier mon séjour",

      planningTitle:
  "Planifier votre séjour à Madrid avec TravelOptim",

planningIntroText:
  "Madrid est une ville que j’ai eu l’occasion de découvrir au fil de plusieurs séjours, en explorant ses quartiers, ses principaux sites, ses transports et différentes façons d’organiser une visite efficace.",

planningExpertiseText:
  "Cette expérience m’a permis de construire TravelOptim Madrid comme un véritable outil d’aide à la visite : guide structuré, itinéraires thématiques, carte interactive, géolocalisation, favoris et organisation des déplacements.",

planningInvitationTitle:
  "Vous souhaitez aller plus loin ?",

planningInvitationText:
  "Si vous recherchez une planification plus personnalisée, adaptée à vos dates, à votre rythme, à vos préférences et à votre hébergement, je peux préparer pour vous un programme de séjour sur mesure.",

planningExampleLabel:
  "Exemple concret",

planningExampleTitle:
  "Voilà à quoi vous attendre",

planningExamplePlaceholder:
  "Aperçu de la planification personnalisée",

planningExampleText:
  "Découvrez un exemple concret du document que vous pourrez recevoir : journées structurées, ordre des visites, déplacements, recommandations pratiques et organisation adaptée au temps disponible.",

planningExampleButton:
  "Voir un exemple de planification",

planningExampleNote:
  "Exemple fourni à titre illustratif. Chaque planification est adaptée au séjour et aux préférences du voyageur.",

planningProcessTitle:
  "Comment fonctionne le service ?",

planningStep1Title:
  "Vous m’envoyez votre demande",

planningStep1Text:
  "Vous renseignez les informations principales de votre séjour et vos préférences.",

planningStep2Title:
  "J’analyse votre projet",

planningStep2Text:
  "J’étudie vos dates, vos contraintes, vos favoris et les possibilités d’organisation.",

planningStep3Title:
  "Vous recevez un devis personnalisé",

planningStep3Text:
  "La planification est proposée à partir de 20 € par journée de séjour.",

planningStep4Title:
  "Vous décidez librement",

planningStep4Text:
  "Aucun paiement n’est demandé lors de l’envoi du formulaire. Vous ne payez qu’après avoir accepté le devis.",

planningStep5Title:
  "Je prépare votre planification",

planningStep5Text:
  "Votre programme personnalisé est ensuite préparé pour votre séjour à Madrid.",

planningPriceLabel:
  "À partir de",

planningPriceValue:
  "20 €",

planningPriceUnit:
  "par journée de séjour",

planningFreeRequest:
  "L’envoi de votre demande est gratuit et sans engagement.",

planningCtaTitle:
  "Prêt à préparer votre séjour ?",

planningStartButton:
  "Commencer ma demande",

planningReturnButton:
  "← Présentation du service",

planningFormTitle:
  "Ma demande de planification",

planningFormPlaceholder:
  "Formulaire à intégrer",

    mapPlaceholder:
      "Module Carte interactive à construire.",

    aboutPlaceholder:
      "Contenu À propos à déterminer.",

    photoCredit:
      "Crédit photo",

    source:
      "Voir la source ↗",

    highlights:
      "👀 Que voir ?",

    experience:
      "✨ L’expérience",

    tip:
      "💡 Conseil TravelOptim",

    favorite:
      "Ajouter<br>aux favoris",

    favoriteAria:
      "Ajouter aux favoris",

    photoAria:
      "Afficher le crédit photo",

    officialWebsite:
      "Site officiel ↗",

    programme:
      "Voir la programmation",

    hintDesktop:
      "Cliquez sur une carte pour découvrir les informations.",

    hintMobile:
      "Touchez une carte pour la retourner · Glissez pour parcourir.",

      mapPlacesTitle:
  "Lieux",

mapFilterAll:
  "Tous",

mapFilterMustSees:
  "Incontournables",

mapFilterPlaces:
  "Places",

mapFilterMonuments:
  "Monuments",

mapFilterMuseums:
  "Musées",

mapFilterParks:
  "Parcs",

mapFilterFamily:
  "Famille",

mapFilterOperaFlamenco:
  "Opéra / Flamenco",

mapFilterSports:
  "Événements sportifs",

mapFilterShopping:
  "Shopping",

mapFilterPanoramic:
  "Vue panoramique",

  mapMenu:
  "Menu",

mapMetro:
  "Métro",

mapPlaces:
  "Lieux",

mapRoutes:
  "Itinéraires",

mapStations:
  "Stations",

mapRoutesPlaceholder:
  "Itinéraires",

  mapSearchLabel:
  "Rechercher un lieu",

mapSearchPlaceholder:
  "Rechercher...",

mapSearchNoResults:
  "Aucun lieu trouvé.",

mapLocateMe:
  "Me localiser",

mapNearbyTitle:
  "Lieux à moins de 1 km",

mapNoNearbyPlaces:
  "Aucun lieu TravelOptim à moins de 1 km.",

mapYourPosition:
  "Votre position",

mapGeolocationUnavailable:
  "La géolocalisation n'est pas disponible sur cet appareil.",

mapGeolocationError:
  "Impossible de déterminer votre position.",

  mapCloseNearby:
  "Fermer",

  mapExternalNoResults:
  "Aucun résultat trouvé.",

mapExternalSearchError:
  "La recherche externe est temporairement indisponible.",

  mapFavorites:
  "Mes favoris",

mapFavoritesPlaceholder:
  "Mes favoris",

  planningStayTitle:
  "Votre séjour",

planningNameLabel:
  "Nom",

planningEmailLabel:
  "Adresse e-mail",

planningArrivalDateLabel:
  "Date d’arrivée à Madrid",

planningDepartureDateLabel:
  "Date de départ de Madrid",

planningArrivalTitle:
  "Votre arrivée à Madrid",

planningArrivalTimeLabel:
  "Heure d’arrivée prévue",

planningArrivalModeLabel:
  "Moyen d’arrivée",

planningArrivalPlaceLabel:
  "Aéroport, gare ou point d’arrivée",

planningDepartureTitle:
  "Votre départ de Madrid",

planningDepartureTimeLabel:
  "Heure de départ prévue",

planningDepartureModeLabel:
  "Moyen de départ",

planningDeparturePlaceLabel:
  "Aéroport, gare ou point de départ",

planningModeEmpty:
  "Sélectionner",

planningModePlane:
  "Avion",

planningModeTrain:
  "Train",

planningModeBus:
  "Bus",

planningModeCar:
  "Voiture",

planningModeOther:
  "Autre",

planningAccommodationTitle:
  "Votre hébergement",

planningAccommodationLabel:
  "Nom ou adresse de l’hébergement",

planningAccommodationHelp:
  "Cette information me permet d’optimiser les départs, retours et déplacements quotidiens.",

planningTravelersTitle:
  "Les voyageurs",

planningAdultsLabel:
  "Adultes",

planningChildrenLabel:
  "Enfants",

planningFirstVisitTitle:
  "Est-ce votre première visite à Madrid ?",

planningYes:
  "Oui",

planningNo:
  "Non",

planningTravelStyleTitle:
  "Votre façon de voyager",

planningPaceTitle:
  "Quel rythme préférez-vous ?",

planningPaceRelaxed:
  "Tranquille",

planningPaceBalanced:
  "Équilibré",

planningPaceIntensive:
  "Soutenu",

planningBudgetLabel:
  "Budget indicatif par personne (facultatif)",

planningFavoritesTitle:
  "Vos favoris TravelOptim",

planningFavoritesChoiceTitle:
  "Joindre mes favoris à ma demande",

planningFavoritesChoiceText:
  "Les lieux que vous avez enregistrés dans Mes favoris seront transmis avec votre demande afin de mieux personnaliser votre séjour.",

planningRequestTitle:
  "Vos demandes particulières",

planningRequestLabel:
  "Y a-t-il autre chose que je devrais savoir pour préparer votre séjour ?",

planningFormReminder:
  "Votre demande est gratuite et sans engagement. Aucun paiement ne sera demandé à cette étape.",

planningSubmitButton:
  "Envoyer ma demande",

  planningFavoritesEmpty:
  "Vous n’avez encore enregistré aucun favori.",

planningFavoritesCount:
  "favori(s) sélectionné(s)",

  planningSuccessTitle:
  "Votre demande a bien été envoyée !",

planningSuccessText:
  "Merci pour votre confiance. Je vais examiner les informations de votre séjour afin de préparer une proposition adaptée à votre voyage à Madrid.",

planningSuccessEmail:
  "Vous recevrez prochainement un courriel avec les prochaines étapes.",

planningSuccessBlogText:
  "En attendant, continuez à préparer votre séjour avec les articles TravelOptim.",

planningSuccessBlogButton:
  "Découvrir le blog TravelOptim",

  aboutTitle:
  "À propos de TravelOptim",

aboutTagline:
  "Découvrez Madrid autrement, sans perdre de temps.",

aboutText1:
  "TravelOptim Madrid est une application interactive conçue pour vous aider à découvrir Madrid, organiser vos visites et profiter au maximum du temps dont vous disposez sur place.",

aboutText2:
  "Plus qu’un simple guide touristique, TravelOptim réunit dans une même expérience les lieux à découvrir, des itinéraires sélectionnés, les transports utiles et une carte interactive pour vous accompagner avant et pendant votre séjour.",

aboutText3:
  "Explorez les incontournables, monuments, musées, parcs, quartiers et activités de Madrid. Enregistrez vos favoris, visualisez-les sur la carte, repérez les stations de métro à proximité et utilisez la géolocalisation pour découvrir ce qui vous entoure. TravelOptim peut également vous aider à transformer toutes ces informations en un séjour personnalisé selon vos dates, vos priorités et vos envies.",

aboutDestination:
  "Madrid est la première destination TravelOptim.",

  aboutCopyright:
  "© 2026 TravelOptim. Tous droits réservés.",


  },


  en: {

    welcome:
      "Welcome to Madrid",

    homePage:
      "Home",

    exploreMadrid:
      "Explore Madrid",

    about:
      "About",

    guide:
      "Guide",

    see:
      "Things to see",

    do:
      "Things to do",

    districts:
      "Neighbourhoods",

    transport:
      "Getting around",

    favorites:
      "My favorites",

    routes:
      "Itineraries",

    interactiveMap:
      "Interactive map",

      planning:
      "Plan my stay",

      planningTitle:
  "Plan your stay in Madrid with TravelOptim",

planningIntroText:
  "Madrid is a city I have had the opportunity to discover over several stays, exploring its neighborhoods, major sights, transportation system and different ways to organize an efficient visit.",

planningExpertiseText:
  "This experience allowed me to build TravelOptim Madrid as a comprehensive tool for exploring the city, combining a structured guide, themed itineraries, an interactive map, geolocation, favorites and optimized travel planning.",

planningInvitationTitle:
  "Looking for something more personalized?",

planningInvitationText:
  "If you would like a more personalized itinerary tailored to your dates, pace, preferences and accommodation, I can prepare a custom travel plan for your stay.",

planningExampleLabel:
  "Real example",

planningExampleTitle:
  "See what you can expect",

planningExamplePlaceholder:
  "Preview of a personalized travel plan",

planningExampleText:
  "Explore a concrete example of the document you can receive, including structured days, an optimized order of visits, transportation guidance, practical recommendations and an itinerary adapted to the time you have available.",

planningExampleButton:
  "View a sample travel plan",

planningExampleNote:
  "This example is provided for illustration purposes. Every travel plan is customized to the traveler’s stay and preferences.",

planningProcessTitle:
  "How does the service work?",

planningStep1Title:
  "You send me your request",

planningStep1Text:
  "Tell me the key details of your stay and your preferences.",

planningStep2Title:
  "I review your trip",

planningStep2Text:
  "I review your dates, constraints, favorites and the best ways to organize your stay.",

planningStep3Title:
  "You receive a personalized quote",

planningStep3Text:
  "Personalized planning starts at €20 per day of your stay.",

planningStep4Title:
  "You decide freely",

planningStep4Text:
  "No payment is required when you submit the form. You only pay after reviewing and accepting the quote.",

planningStep5Title:
  "I prepare your travel plan",

planningStep5Text:
  "Your personalized itinerary is then prepared for your stay in Madrid.",

planningPriceLabel:
  "Starting at",

planningPriceValue:
  "€20",

planningPriceUnit:
  "per day of your stay",

planningFreeRequest:
  "Submitting your request is free and comes with no obligation.",

planningCtaTitle:
  "Ready to start planning your stay?",

planningStartButton:
  "Start my request",

planningReturnButton:
  "← Service overview",

planningFormTitle:
  "My planning request",

planningFormPlaceholder:
  "Form to be added",

    mapPlaceholder:
      "Interactive map module to be built.",

    aboutPlaceholder:
      "About content to be determined.",

    photoCredit:
      "Photo credit",

    source:
      "View source ↗",

    highlights:
      "👀 What to see?",

    experience:
      "✨ The experience",

    tip:
      "💡 TravelOptim tip",

    favorite:
      "Add to<br>favorites",

    favoriteAria:
      "Add to favorites",

    photoAria:
      "Show photo credit",

    officialWebsite:
      "Official website ↗",

    programme:
      "See programme",

    hintDesktop:
      "Click a card to discover more information.",

    hintMobile:
      "Tap a card to flip it · Swipe to browse.",

     mapPlacesTitle:
  "Places",

mapFilterAll:
  "All",

mapFilterMustSees:
  "Must-sees",

mapFilterPlaces:
  "Squares",

mapFilterMonuments:
  "Monuments",

mapFilterMuseums:
  "Museums",

mapFilterParks:
  "Parks",

mapFilterFamily:
  "Family",

mapFilterOperaFlamenco:
  "Opera / Flamenco",

mapFilterSports:
  "Sports events",

mapFilterShopping:
  "Shopping",

mapFilterPanoramic:
  "Panoramic views",

  mapMenu:
  "Menu",

mapMetro:
  "Metro",

mapPlaces:
  "Places",

mapRoutes:
  "Routes",

mapStations:
  "Stations",

mapRoutesPlaceholder:
  "Routes",

  mapSearchLabel:
  "Search for a place",

mapSearchPlaceholder:
  "Search...",

mapSearchNoResults:
  "No places found.",

mapLocateMe:
  "Locate me",

mapNearbyTitle:
  "Places within 1 km",

mapNoNearbyPlaces:
  "No TravelOptim places within 1 km.",

mapYourPosition:
  "Your location",

mapGeolocationUnavailable:
  "Geolocation is not available on this device.",

mapGeolocationError:
  "Unable to determine your location.",

  mapCloseNearby:
  "Close",

  mapExternalNoResults:
  "No results found.",

mapExternalSearchError:
  "External search is temporarily unavailable.",

  mapFavorites:
  "My favorites",

mapFavoritesPlaceholder:
  "My favorites",

  planningStayTitle:
  "Your stay",

planningNameLabel:
  "Name",

planningEmailLabel:
  "Email address",

planningArrivalDateLabel:
  "Arrival date in Madrid",

planningDepartureDateLabel:
  "Departure date from Madrid",

planningArrivalTitle:
  "Your arrival in Madrid",

planningArrivalTimeLabel:
  "Expected arrival time",

planningArrivalModeLabel:
  "How will you arrive?",

planningArrivalPlaceLabel:
  "Airport, station or arrival point",

planningDepartureTitle:
  "Your departure from Madrid",

planningDepartureTimeLabel:
  "Expected departure time",

planningDepartureModeLabel:
  "How will you leave?",

planningDeparturePlaceLabel:
  "Airport, station or departure point",

planningModeEmpty:
  "Select",

planningModePlane:
  "Plane",

planningModeTrain:
  "Train",

planningModeBus:
  "Bus",

planningModeCar:
  "Car",

planningModeOther:
  "Other",

planningAccommodationTitle:
  "Your accommodation",

planningAccommodationLabel:
  "Accommodation name or address",

planningAccommodationHelp:
  "This information helps me optimize your daily departures, returns and transportation.",

planningTravelersTitle:
  "Travelers",

planningAdultsLabel:
  "Adults",

planningChildrenLabel:
  "Children",

planningFirstVisitTitle:
  "Is this your first visit to Madrid?",

planningYes:
  "Yes",

planningNo:
  "No",

planningTravelStyleTitle:
  "Your travel style",

planningPaceTitle:
  "What pace do you prefer?",

planningPaceRelaxed:
  "Relaxed",

planningPaceBalanced:
  "Balanced",

planningPaceIntensive:
  "Fast-paced",

planningBudgetLabel:
  "Approximate budget per person (optional)",

planningFavoritesTitle:
  "Your TravelOptim favorites",

planningFavoritesChoiceTitle:
  "Include my favorites with my request",

planningFavoritesChoiceText:
  "Places you have saved in My favorites will be included with your request to help personalize your stay.",

planningRequestTitle:
  "Special requests",

planningRequestLabel:
  "Is there anything else I should know when planning your stay?",

planningFormReminder:
  "Your request is free and comes with no obligation. No payment is required at this stage.",

planningSubmitButton:
  "Send my request",

  planningFavoritesEmpty:
  "You haven't saved any favorites yet.",

planningFavoritesCount:
  "favorite(s) selected",
  
  planningSuccessTitle:
  "Your request has been sent!",

planningSuccessText:
  "Thank you for your trust. I’ll review your trip details and prepare a proposal tailored to your stay in Madrid.",

planningSuccessEmail:
  "You’ll receive an email shortly with the next steps.",

planningSuccessBlogText:
  "In the meantime, keep planning your trip with TravelOptim articles.",

planningSuccessBlogButton:
  "Explore the TravelOptim blog",

  aboutTitle:
  "About TravelOptim",

aboutTagline:
  "Discover Madrid differently, without wasting time.",

aboutText1:
  "TravelOptim Madrid is an interactive application designed to help you discover Madrid, organize your visits and make the most of your time in the city.",

aboutText2:
  "More than a traditional travel guide, TravelOptim brings together places to discover, curated itineraries, useful transportation information and an interactive map to assist you before and during your stay.",

aboutText3:
  "Explore Madrid’s must-see attractions, monuments, museums, parks, neighbourhoods and activities. Save your favourite places, display them on the map, find nearby Metro stations and use geolocation to discover what is around you. TravelOptim can also help you turn all this information into a personalized trip plan based on your dates, priorities and interests.",

aboutDestination:
  "Madrid is the first TravelOptim destination.",

  aboutCopyright:
  "© 2026 TravelOptim. All rights reserved.",

  }

};




/* =========================================================
   NOTE DE MAINTENANCE — TEXTES UI
========================================================= */

/*
 * Les clés suivantes sont référencées par le moteur mais ne sont
 * pas définies dans UI_TEXT à ce stade :
 *
 * - mapExternalSearching
 *
 * Elles sont laissées inchangées afin de ne pas inventer de texte
 * ni modifier le comportement actuel sans validation fonctionnelle.
 */

/* =========================================================
   03. CONFIGURATION — GUIDE — À VOIR
========================================================= */

const SEE_CATEGORIES = {

  incontournables: {

    data:
      incontournables,

    cardType:
      "classic",

    image:
      incontournables[0]?.image || "",

    name: {
      fr: "Incontournables",
      en: "Must-sees"
    }

  },


  places: {

    data:
      places,

    cardType:
      "classic",

    image:
      places[0]?.image || "",

    name: {
      fr: "Places",
      en: "Squares"
    }

  },


  monuments: {

    data:
      monuments,

    cardType:
      "classic",

    image:
      monuments[0]?.image || "",

    name: {
      fr: "Monuments",
      en: "Monuments"
    }

  },


  musees: {

    data:
      musees,

    cardType:
      "classic",

    image:
      musees[0]?.image || "",

    name: {
      fr: "Musées",
      en: "Museums"
    }

  },


  parcs: {

    data:
      parcs,

    cardType:
      "classic",

    image:
      parcs[0]?.image || "",

    name: {
      fr: "Parcs & jardins",
      en: "Parks & gardens"
    }

  }

};


/* =========================================================
   04. CONFIGURATION — GUIDE — À FAIRE
========================================================= */

const DO_CATEGORIES = {

  operaFlamenco: {

    data:
      operaFlamenco,

    cardType:
      "programme",

    image:
      operaFlamenco[0]?.image || "",

    name: {
      fr: "Opéra & Flamenco",
      en: "Opera & Flamenco"
    }

  },


  evenementsSportifs: {

    data:
      evenementsSportifs,

    cardType:
      "programme",

    image:
      evenementsSportifs[0]?.image || "",

    name: {
      fr: "Événements sportifs",
      en: "Sporting events"
    }

  },


  gastronomie: {

    data:
      gastronomie,

    cardType:
      "editorial",

    image:
      gastronomie[0]?.image || "",

    name: {
      fr: "Gastronomie",
      en: "Food & gastronomy"
    }

  },


  panoramique: {

    data:
      panoramique,

    cardType:
      "classic",

    image:
      panoramique[0]?.image || "",

    name: {
      fr: "Madrid panoramique",
      en: "Panoramic Madrid"
    }

  },


  famille: {

    data:
      famille,

    cardType:
      "classic",

    image:
      famille[0]?.image || "",

    name: {
      fr: "Activités en famille",
      en: "Family activities"
    }

  },


  shopping: {

    data:
      shopping,

    cardType:
      "editorial",

    image:
      shopping[0]?.image || "",

    name: {
      fr: "Shopping",
      en: "Shopping"
    }

  }

};


/* =========================================================
   05. DONNÉES GLOBALES
========================================================= */

const ALL_CATEGORIES = {

  ...SEE_CATEGORIES,
  ...DO_CATEGORIES

};


const ALL_SEE_ITEMS = [

  ...incontournables,
  ...places,
  ...monuments,
  ...musees,
  ...parcs

];


const ALL_GUIDE_ITEMS =
  Object.values(
    ALL_CATEGORIES
  )
    .flatMap(
      category =>
        category.data
    );


/* =========================================================
   06. CONFIGURATION — MÉTRO
========================================================= */

/*
 * Une ligne est définie uniquement par :
 *
 * - sa couleur ;
 * - l'ordre exact de ses stations.
 *
 * Le même moteur sera utilisé pour
 * toutes les lignes de métro.
 */

const METRO_LINES = {

  "1": {

    color:
      "#59C3E1",

    stations: [

      "Pinar de Chamartín",
      "Bambú",
      "Chamartín",
      "Plaza de Castilla",
      "Valdeacederas",
      "Tetuán",
      "Estrecho",
      "Alvarado",
      "Cuatro Caminos",
      "Ríos Rosas",
      "Iglesia",
      "Bilbao",
      "Tribunal",
      "Gran Vía",
      "Sol",
      "Tirso de Molina",
      "Antón Martín",
      "Estación del Arte",
      "Atocha",
      "Menéndez Pelayo",
      "Pacífico",
      "Puente de Vallecas",
      "Nueva Numancia",
      "Portazgo",
      "Buenos Aires",
      "Alto del Arenal",
      "Miguel Hernández",
      "Sierra de Guadalupe",
      "Villa de Vallecas",
      "Congosto",
      "La Gavia",
      "Las Suertes",
      "Valdecarros"

    ]

  },


  "2": {

    color:
      "#E1261C",

    stations: [

      "Las Rosas",
      "Avenida de Guadalajara",
      "Alsacia",
      "La Almudena",
      "La Elipa",
      "Ventas",
      "Manuel Becerra",
      "Goya",
      "Príncipe de Vergara",
      "Retiro",
      "Banco de España",
      "Sevilla",
      "Sol",
      "Ópera",
      "Santo Domingo",
      "Noviciado",
      "San Bernardo",
      "Quevedo",
      "Canal",
      "Cuatro Caminos"

    ]

  },

  "3": {

    color:
      "#FFD100",
  
    stations: [
  
      "El Casar",
      "Villaverde Alto",
      "San Cristóbal",
      "Villaverde Bajo-Cruce",
      "Ciudad de los Ángeles",
      "San Fermín-Orcasur",
      "Hospital 12 de Octubre",
      "Almendrales",
      "Legazpi",
      "Delicias",
      "Palos de la Frontera",
      "Embajadores",
      "Lavapiés",
      "Sol",
      "Callao",
      "Plaza de España",
      "Ventura Rodríguez",
      "Argüelles",
      "Moncloa"
  
    ]
  
  },

  "4": {

    color:
      "#D77A00",
  
    stations: [
  
      "Argüelles",
      "San Bernardo",
      "Bilbao",
      "Alonso Martínez",
      "Colón",
      "Serrano",
      "Velázquez",
      "Goya",
      "Lista",
      "Diego de León",
      "Avenida de América",
      "Prosperidad",
      "Alfonso XIII",
      "Avenida de la Paz",
      "Arturo Soria",
      "Esperanza",
      "Canillas",
      "Mar de Cristal",
      "San Lorenzo",
      "Parque de Santa María",
      "Hortaleza",
      "Manoteras",
      "Pinar de Chamartín"
  
    ]
  
  },

  "5": {

    color:
      "#8CC63F",
  
    stations: [
  
      "Alameda de Osuna",
      "El Capricho",
      "Canillejas",
      "Torre Arias",
      "Suanzes",
      "Ciudad Lineal",
      "Pueblo Nuevo",
      "Quintana",
      "El Carmen",
      "Ventas",
      "Diego de León",
      "Núñez de Balboa",
      "Rubén Darío",
      "Alonso Martínez",
      "Chueca",
      "Gran Vía",
      "Callao",
      "Ópera",
      "La Latina",
      "Puerta de Toledo",
      "Acacias",
      "Pirámides",
      "Marqués de Vadillo",
      "Urgel",
      "Oporto",
      "Vista Alegre",
      "Carabanchel",
      "Eugenia de Montijo",
      "Aluche",
      "Empalme",
      "Campamento",
      "Casa de Campo"
  
    ]
  
  },
  
  
  "6": {
  
    color:
      "#B7B1A9",
  
    stations: [
  
      "Argüelles",
      "Moncloa",
      "Ciudad Universitaria",
      "Metropolitano",
      "Guzmán el Bueno",
      "Cuatro Caminos",
      "Nuevos Ministerios",
      "República Argentina",
      "Avenida de América",
      "Diego de León",
      "Manuel Becerra",
      "O'Donnell",
      "Sainz de Baranda",
      "Conde de Casal",
      "Pacífico",
      "Méndez Álvaro",
      "Arganzuela-Planetario",
      "Legazpi",
      "Usera",
      "Plaza Elíptica",
      "Opañel",
      "Oporto",
      "Carpetana",
      "Laguna",
      "Lucero",
      "Alto de Extremadura",
      "Puerta del Ángel",
      "Príncipe Pío",
      "Argüelles"
  
    ]
  
  },
  
  
  "7": {
  
    color:
      "#F49B00",
  
    stations: [
  
      "Pitis",
      "Arroyofresno",
      "Lacoma",
      "Avenida de la Ilustración",
      "Peñagrande",
      "Antonio Machado",
      "Valdezarza",
      "Francos Rodríguez",
      "Guzmán el Bueno",
      "Islas Filipinas",
      "Canal",
      "Alonso Cano",
      "Gregorio Marañón",
      "Avenida de América",
      "Cartagena",
      "Parque de las Avenidas",
      "Barrio de la Concepción",
      "Pueblo Nuevo",
      "Ascao",
      "García Noblejas",
      "Simancas",
      "San Blas",
      "Las Musas",
      "Estadio Metropolitano",
      "Barrio del Puerto",
      "Coslada Central",
      "La Rambla",
      "San Fernando",
      "Jarama",
      "Henares",
      "Hospital del Henares"
  
    ]
  
  },
  
  
  "8": {
  
    color:
      "#E89BC2",
  
    stations: [
  
      "Nuevos Ministerios",
      "Colombia",
      "Pinar del Rey",
      "Mar de Cristal",
      "Feria de Madrid",
      "Aeropuerto T1-T2-T3",
      "Barajas",
      "Aeropuerto T4"
  
    ]
  
  },
  
  
  "9": {
  
    color:
      "#A3238E",
  
    stations: [
  
      "Paco de Lucía",
      "Mirasierra",
      "Herrera Oria",
      "Barrio del Pilar",
      "Ventilla",
      "Plaza de Castilla",
      "Duque de Pastrana",
      "Pío XII",
      "Colombia",
      "Concha Espina",
      "Cruz del Rayo",
      "Avenida de América",
      "Núñez de Balboa",
      "Príncipe de Vergara",
      "Ibiza",
      "Sainz de Baranda",
      "Estrella",
      "Vinateros",
      "Artilleros",
      "Pavones",
      "Valdebernardo",
      "Vicálvaro",
      "San Cipriano",
      "Puerta de Arganda",
      "Rivas-Urbanizaciones",
      "Rivas Futura",
      "Rivas Vaciamadrid",
      "La Poveda",
      "Arganda del Rey"
  
    ]
  
  },
  
  
  "10": {
  
    color:
      "#005A9C",
  
    stations: [
  
      "Hospital Infanta Sofía",
      "Reyes Católicos",
      "Baunatal",
      "Manuel de Falla",
      "Marqués de la Valdavia",
      "La Moraleja",
      "La Granja",
      "Ronda de la Comunicación",
      "Las Tablas",
      "Montecarmelo",
      "Tres Olivos",
      "Fuencarral",
      "Begoña",
      "Chamartín",
      "Plaza de Castilla",
      "Cuzco",
      "Santiago Bernabéu",
      "Nuevos Ministerios",
      "Gregorio Marañón",
      "Alonso Martínez",
      "Tribunal",
      "Plaza de España",
      "Príncipe Pío",
      "Lago",
      "Batán",
      "Casa de Campo",
      "Colonia Jardín",
      "Aviación Española",
      "Cuatro Vientos",
      "Joaquín Vilumbrales",
      "Puerta del Sur"
  
    ]
  
  },
  
  
  "11": {
  
    color:
      "#009A44",
  
    stations: [
  
      "Plaza Elíptica",
      "Abrantes",
      "Pan Bendito",
      "San Francisco",
      "Carabanchel Alto",
      "La Peseta",
      "La Fortuna"
  
    ]
  
  },
  
  
  "12": {
  
    color:
      "#A89B00",
  
    stations: [
  
      "Puerta del Sur",
      "Parque Lisboa",
      "Alcorcón Central",
      "Parque Oeste",
      "Universidad Rey Juan Carlos",
      "Móstoles Central",
      "Pradillo",
      "Hospital de Móstoles",
      "Manuela Malasaña",
      "Loranca",
      "Hospital de Fuenlabrada",
      "Parque Europa",
      "Fuenlabrada Central",
      "Parque de los Estados",
      "Arroyo Culebro",
      "Conservatorio",
      "Alonso de Mendoza",
      "Getafe Central",
      "Juan de la Cierva",
      "El Casar",
      "Los Espartales",
      "El Bercial",
      "El Carrascal",
      "Julián Besteiro",
      "Casa del Reloj",
      "Hospital Severo Ochoa",
      "Leganés Central",
      "San Nicasio",
      "Puerta del Sur"
  
    ]
  
  },
  
  
  "R": {
  
    color:
      "#000000",
  
    stations: [
  
      "Ópera",
      "Príncipe Pío"
  
    ]
  
  }

};


/* =========================================================
   07. ÉTAT DE L'APPLICATION
========================================================= */

let currentLanguage =
  DEFAULT_LANGUAGE;


let currentParentView =
  null;


let currentCategoryKey =
  null;


let currentItems =
  [];


let currentCardType =
  "classic";


let currentIndex =
  0;


/*
 * Index indépendant du carrousel
 * des itinéraires.
 */

let currentRouteIndex =
  0;

  /*
 * Itinéraires actuellement
 * sélectionnés sur la carte.
 */

const activeMapRouteIds =
new Set();

/*
 * Données GeoJSON
 * des itinéraires.
 */

let mapRoutesGeoJSONData =
  null;


/*
 * Couches Leaflet
 * des tracés d'itinéraires.
 *
 * Clé :
 * routeId
 */

const mapRouteLayers =
  {};

/*
 * Navigation universelle.
 */

let currentBackLabelKey =
  null;


let currentBackAction =
  null;


/*
 * Carte Leaflet.
 *
 * L'instance n'est créée
 * qu'une seule fois.
 */

let traveloptimMap =
  null;


/*
 * Stations de métro.
 */

let metroStationsLayer =
  null;


let metroStationsData =
  null;


/*
 * Lignes de métro.
 *
 * Chaque ligne Leaflet est créée
 * une seule fois puis conservée ici.
 */

const metroLineLayers = {};


/*
 * Favoris.
 */

const FAVORITES_STORAGE_KEY =
  "traveloptim-madrid-favorites";


const favorites =
  new Set(
    JSON.parse(
      localStorage.getItem(
        FAVORITES_STORAGE_KEY
      ) || "[]"
    )
  );

  let isMapFavoritesFilterActive =
  false;


/* =========================================================
   08. RÉFÉRENCES DOM — VUES PRINCIPALES
========================================================= */

const welcomeView =
  document.getElementById(
    "welcome-view"
  );


const homeView =
  document.getElementById(
    "home-view"
  );


const guideView =
  document.getElementById(
    "guide-view"
  );


const categoriesView =
  document.getElementById(
    "categories-view"
  );


const activitiesView =
  document.getElementById(
    "activities-view"
  );


const categoryView =
  document.getElementById(
    "category-view"
  );


const routesView =
  document.getElementById(
    "routes-view"
  );


  const mapView =
  document.getElementById(
    "map-view"
  );


const planningView =
  document.getElementById(
    "planning-view"
  );


const aboutView =
  document.getElementById(
    "about-view"
  );


/* =========================================================
   09. RÉFÉRENCES DOM — ACCUEIL
========================================================= */

const welcomeTitle =
  document.getElementById(
    "welcome-title"
  );


const welcomeExploreButton =
  document.getElementById(
    "welcome-explore-button"
  );


const welcomeAboutButton =
  document.getElementById(
    "welcome-about-button"
  );


const homeTitle =
  document.getElementById(
    "home-title"
  );


const homeBackButton =
  document.getElementById(
    "home-back-button"
  );


const homeGuideButton =
  document.getElementById(
    "home-guide-button"
  );


const homeRoutesButton =
  document.getElementById(
    "home-routes-button"
  );


const homeMapButton =
  document.getElementById(
    "home-map-button"
  );


const homeGuideTitle =
  document.getElementById(
    "home-guide-title"
  );


const homeRoutesTitle =
  document.getElementById(
    "home-routes-title"
  );


const homeMapTitle =
  document.getElementById(
    "home-map-title"
  );


  const homePlanningButton =
  document.getElementById(
    "home-planning-button"
  );


const homePlanningTitle =
  document.getElementById(
    "home-planning-title"
  );

/* =========================================================
   10. RÉFÉRENCES DOM — EN-TÊTE UNIVERSEL
========================================================= */

const universalHeader =
  document.getElementById(
    "universal-header"
  );


const universalBackButton =
  document.getElementById(
    "universal-back-button"
  );


/* =========================================================
   11. RÉFÉRENCES DOM — GUIDE
========================================================= */

const guideTitle =
  document.getElementById(
    "guide-title"
  );


const guideButtons =
  document.querySelectorAll(
    ".guide-card"
  );


const categoriesTitle =
  document.getElementById(
    "categories-title"
  );


const categoriesGrid =
  document.getElementById(
    "categories-grid"
  );


const activitiesTitle =
  document.getElementById(
    "activities-title"
  );


const activitiesGrid =
  document.getElementById(
    "activities-grid"
  );


/* =========================================================
   12. RÉFÉRENCES DOM — CARROUSEL GUIDE
========================================================= */

const categoryTitle =
  document.getElementById(
    "category-title"
  );


const cardsGrid =
  document.getElementById(
    "cards-grid"
  );


const carouselCounter =
  document.getElementById(
    "carousel-counter"
  );


const flipHint =
  document.getElementById(
    "flip-hint"
  );


const previousButton =
  document.getElementById(
    "carousel-prev"
  );


const nextButton =
  document.getElementById(
    "carousel-next"
  );


const previewPrev =
  document.getElementById(
    "preview-prev"
  );


const previewNext =
  document.getElementById(
    "preview-next"
  );


const previewPrevImage =
  document.getElementById(
    "preview-prev-image"
  );


const previewNextImage =
  document.getElementById(
    "preview-next-image"
  );


/* =========================================================
   13. RÉFÉRENCES DOM — ITINÉRAIRES
========================================================= */

const routesTitle =
  document.getElementById(
    "routes-title"
  );


const routesGrid =
  document.getElementById(
    "routes-grid"
  );


const routesPrevButton =
  document.getElementById(
    "routes-prev"
  );


const routesNextButton =
  document.getElementById(
    "routes-next"
  );


/*
 * Ces éléments sont générés
 * automatiquement au besoin.
 */

let routesCounter =
  null;


let routesFlipHint =
  null;


let routesPreviewPrev =
  null;


let routesPreviewNext =
  null;


let routesPreviewPrevImage =
  null;


let routesPreviewNextImage =
  null;


/* =========================================================
   14. RÉFÉRENCES DOM — CARTE INTERACTIVE
========================================================= */

const mapTitle =
  document.getElementById(
    "map-title"
  );


const traveloptimMapElement =
  document.getElementById(
    "traveloptim-map"
  );


const metroAccordionButton =
  document.getElementById(
    "metro-accordion-button"
  );


const metroControlPanel =
  document.getElementById(
    "metro-control-panel"
  );


const metroStationsToggle =
  document.getElementById(
    "metro-stations-toggle"
  );


const metroLineToggles =
  document.querySelectorAll(
    "[data-metro-line]"
  );

  /*
 * Filtres des lieux.
 */

const placesAccordionButton =
document.getElementById(
  "places-accordion-button"
);


const placesControlPanel =
document.getElementById(
  "places-control-panel"
);


const placesAllToggle =
document.getElementById(
  "places-all-toggle"
);


const placeCategoryToggles =
document.querySelectorAll(
  "[data-place-category]"
);



const mapMenuButton =
  document.getElementById(
    "map-menu-button"
  );


const mapMenuPanel =
  document.getElementById(
    "map-menu-panel"
  );

  const mapPlaceSearch =
  document.getElementById(
    "map-place-search"
  );

const mapSearchResults =
  document.getElementById(
    "map-search-results"
  );

const mapLocationButton =
  document.getElementById(
    "map-location-button"
  );

const mapNearbySection =
  document.getElementById(
    "map-nearby-section"
  );

const mapNearbyResults =
  document.getElementById(
    "map-nearby-results"
  );

  const mapNearbyClose =
  document.getElementById(
    "map-nearby-close"
  );

  const favoritesMapAccordionButton =
  document.getElementById(
    "favorites-map-accordion-button"
  );

const favoritesMapControlPanel =
  document.getElementById(
    "favorites-map-control-panel"
  );

  const mapFavoritesTitle =
  document.getElementById(
    "map-favorites-title"
  );

const mapFavoritesPlaceholder =
  document.getElementById(
    "map-favorites-placeholder"
  );

  const routesMapAccordionButton =
  document.getElementById(
    "routes-map-accordion-button"
  );


const routesMapControlPanel =
  document.getElementById(
    "routes-map-control-panel"
  );


const mapRoutesPlaceholder =
  document.getElementById(
    "map-routes-placeholder"
  );

  /* =========================================================
   15. RÉFÉRENCES DOM — PLANIFICATION
========================================================= */

const planningCard =
document.getElementById(
  "planning-card"
);


const planningCardFront =
document.getElementById(
  "planning-card-front"
);


const planningCardBack =
document.getElementById(
  "planning-card-back"
);


const planningStartButton =
document.getElementById(
  "planning-start-button"
);


const planningReturnButton =
document.getElementById(
  "planning-return-button"
);

const planningFavoritesPreview =
  document.getElementById(
    "planning-favorites-preview"
  );


const planningIncludeFavorites =
  document.getElementById(
    "planning-include-favorites"
  );


const planningTitle =
  document.getElementById(
    "planning-title"
  );

const planningIntroText =
  document.getElementById(
    "planning-intro-text"
  );

const planningExpertiseText =
  document.getElementById(
    "planning-expertise-text"
  );

const planningInvitationTitle =
  document.getElementById(
    "planning-invitation-title"
  );

const planningInvitationText =
  document.getElementById(
    "planning-invitation-text"
  );

const planningExampleLabel =
  document.getElementById(
    "planning-example-label"
  );

const planningExampleTitle =
  document.getElementById(
    "planning-example-title"
  );

const planningExamplePlaceholder =
  document.getElementById(
    "planning-example-placeholder"
  );

const planningExampleText =
  document.getElementById(
    "planning-example-text"
  );

const planningExampleButton =
  document.getElementById(
    "planning-example-button"
  );

const planningExampleNote =
  document.getElementById(
    "planning-example-note"
  );

const planningProcessTitle =
  document.getElementById(
    "planning-process-title"
  );

const planningPriceLabel =
  document.getElementById(
    "planning-price-label"
  );

const planningPriceValue =
  document.getElementById(
    "planning-price-value"
  );

const planningPriceUnit =
  document.getElementById(
    "planning-price-unit"
  );

const planningFreeRequest =
  document.getElementById(
    "planning-free-request"
  );

const planningCtaTitle =
  document.getElementById(
    "planning-cta-title"
  );

const planningFormTitle =
  document.getElementById(
    "planning-form-title"
  );

const planningFormPlaceholder =
  document.getElementById(
    "planning-form-placeholder"
  );

  const planningForm =
  document.getElementById(
    "planning-form"
  );

const planningSubmitButton =
  document.getElementById(
    "planning-submit-button"
  );

  const planningSuccess =
  document.getElementById(
    "planning-success"
  );

  const planningChildren =
  document.getElementById(
    "planning-children"
  );

const planningChildrenAges =
  document.getElementById(
    "planning-children-ages"
  );

const planningChildrenAgesGrid =
  document.getElementById(
    "planning-children-ages-grid"
  );

/* =========================================================
   15.1 RÉFÉRENCES DOM — À PROPOS / LANGUE
========================================================= */

const aboutTitle =
  document.getElementById(
    "about-title"
  );


  const aboutTagline =
  document.getElementById(
    "about-tagline"
  );

const aboutText1 =
  document.getElementById(
    "about-text-1"
  );

const aboutText2 =
  document.getElementById(
    "about-text-2"
  );

const aboutText3 =
  document.getElementById(
    "about-text-3"
  );

const aboutDestination =
  document.getElementById(
    "about-destination"
  );

  const aboutCopyright =
  document.getElementById(
    "about-copyright"
  );

const languageButtons =
  document.querySelectorAll(
    ".language-button"
  );

  /* =========================================================
   16. OUTILS GÉNÉRAUX
========================================================= */

function getText(
  key
) {

  return (
    UI_TEXT[currentLanguage][key]
  );

}


function getLocalizedValue(
  value
) {

  if (
    value &&
    typeof value === "object"
  ) {

    return (
      value[currentLanguage] || ""
    );

  }


  return (
    value || ""
  );

}


function saveFavorites() {

  localStorage.setItem(
    FAVORITES_STORAGE_KEY,
    JSON.stringify(
      [...favorites]
    )
  );

}


/* =========================================================
   17. OUTILS RESPONSIVE
========================================================= */

function isMobile() {

  return (
    window.innerWidth <=
    MOBILE_BREAKPOINT
  );

}


function isDesktop() {

  return (
    window.innerWidth >
    TABLET_BREAKPOINT
  );

}


function getVisibleCardsCount() {

  if (isMobile()) {

    return 1;

  }


  if (
    window.innerWidth <=
    TABLET_BREAKPOINT
  ) {

    return 2;

  }


  return 3;

}


/* =========================================================
   18. GESTION DES VUES
========================================================= */

function hideAllViews() {

  welcomeView.hidden =
    true;

  homeView.hidden =
    true;

  guideView.hidden =
    true;

  categoriesView.hidden =
    true;

  activitiesView.hidden =
    true;

  categoryView.hidden =
    true;

    routesView.hidden =
    true;
  
  mapView.hidden =
    true;
  
  planningView.hidden =
    true;
  
  aboutView.hidden =
    true;

  universalHeader.hidden =
    true;

}


/* =========================================================
   19. EN-TÊTE UNIVERSEL
========================================================= */

function showUniversalHeader(
  backLabelKey,
  backAction
) {

  currentBackLabelKey =
    backLabelKey;


  currentBackAction =
    backAction;


  universalHeader.hidden =
    false;


  updateUniversalBackButton();

}


function updateUniversalBackButton() {

  if (
    !currentBackLabelKey
  ) {
    return;
  }


  universalBackButton.textContent =
    `← ${getText(
      currentBackLabelKey
    )}`;

}


/* =========================================================
   20. ACCUEIL
========================================================= */

function showWelcome() {

  hideAllViews();


  welcomeView.hidden =
    false;


  updateWelcomeTexts();

}


/* =========================================================
   21. MENU PRINCIPAL
========================================================= */

function showHome() {

  hideAllViews();


  homeView.hidden =
    false;


  updateHomeTexts();

}


/* =========================================================
   22. GUIDE
========================================================= */

function showGuide() {

  hideAllViews();


  guideView.hidden =
    false;


  showUniversalHeader(
    "exploreMadrid",
    showHome
  );


  currentParentView =
    null;


  currentCategoryKey =
    null;


  currentItems =
    [];


  currentIndex =
    0;


  updateGuideTexts();

}


/* =========================================================
   23. À VOIR
========================================================= */

function showSeeCategories() {

  hideAllViews();


  categoriesView.hidden =
    false;


  showUniversalHeader(
    "guide",
    showGuide
  );


  currentParentView =
    "voir";


  currentCategoryKey =
    null;


  categoriesTitle.textContent =
    getText(
      "see"
    );


  renderCategoryTiles(
    SEE_CATEGORIES,
    categoriesGrid,
    "voir"
  );

}


/* =========================================================
   24. À FAIRE
========================================================= */

function showDoCategories() {

  hideAllViews();


  activitiesView.hidden =
    false;


  showUniversalHeader(
    "guide",
    showGuide
  );


  currentParentView =
    "faire";


  currentCategoryKey =
    null;


  activitiesTitle.textContent =
    getText(
      "do"
    );


  renderCategoryTiles(
    DO_CATEGORIES,
    activitiesGrid,
    "faire"
  );

}


/* =========================================================
   25. QUARTIERS
========================================================= */

function openDistricts() {

  currentParentView =
    "guide";


  currentCategoryKey =
    "quartiers";


  currentItems =
    quartiers;


  currentCardType =
    "district";


  currentIndex =
    0;


  hideAllViews();


  categoryView.hidden =
    false;


  showUniversalHeader(
    "guide",
    showGuide
  );


  categoryTitle.textContent =
    getText(
      "districts"
    );


  renderCards(
    true
  );

}


/* =========================================================
   26. SE DÉPLACER
========================================================= */

function openTransport() {

  currentParentView =
    "guide";


  currentCategoryKey =
    "transport";


  currentItems =
    transport;


  currentCardType =
    "transport";


  currentIndex =
    0;


  hideAllViews();


  categoryView.hidden =
    false;


  showUniversalHeader(
    "guide",
    showGuide
  );


  categoryTitle.textContent =
    getText(
      "transport"
    );


  renderCards(
    true
  );

}


/* =========================================================
   27. MES FAVORIS
========================================================= */

function openFavorites() {

  const favoriteItems =
    getFavoriteItems();


  currentParentView =
    "guide";


  currentCategoryKey =
    "favoris";


  hideAllViews();


  categoryView.hidden =
    false;


  showUniversalHeader(
    "guide",
    showGuide
  );


  categoryTitle.textContent =
    getText(
      "favorites"
    );


  renderFavoriteCards(
    favoriteItems
  );


  createClearFavoritesButton();

}

/* =========================================================
   28. ITINÉRAIRES
========================================================= */

function showRoutes() {

  hideAllViews();


  routesView.hidden =
    false;


  showUniversalHeader(
    "exploreMadrid",
    showHome
  );


  updateRoutesTexts();


  renderRoutes(
    true
  );

}


/* =========================================================
   28.1 RECHERCHE D'UN LIEU PAR ID
========================================================= */

function getPlaceById(
  placeId
) {

  const place =
    ALL_GUIDE_ITEMS.find(
      item =>
        item.id === placeId
    );


  if (!place) {

    console.warn(
      `Lieu introuvable dans l'itinéraire : ${placeId}`
    );

  }


  return place;

}


/* =========================================================
   28.2 IDENTIFIER UN INCONTOURNABLE
========================================================= */

function isMustSeePlace(
  placeId
) {

  return incontournables.some(
    item =>
      item.id === placeId
  );

}


/* =========================================================
   28.3 AFFICHAGE DES ITINÉRAIRES
========================================================= */

function renderRoutes(
  resetIndex = true
) {

  /*
   * Mémoriser les cartes actuellement
   * retournées avant de reconstruire
   * le carrousel.
   */

  const flippedRouteIds =
    new Set(
      Array.from(
        routesGrid.querySelectorAll(
          ".route-card.is-flipped"
        )
      )
        .map(
          card =>
            card.dataset.routeId
        )
    );


  /*
   * S'assurer que le compteur,
   * les aperçus et l'indication
   * existent.
   */

  ensureRoutesCarouselUI();


  /*
   * Reconstruire les cartes.
   */

  routesGrid.innerHTML =
    "";


  itineraires.forEach(
    route => {

      const card =
        createRouteCard(
          route
        );


      /*
       * Restaurer l'état retourné
       * de la carte.
       */

      if (
        flippedRouteIds.has(
          route.id
        )
      ) {

        card.classList.add(
          "is-flipped"
        );

      }


      routesGrid.appendChild(
        card
      );

    }
  );


  /*
   * Réinitialiser l'index
   * si nécessaire.
   */

  if (resetIndex) {

    currentRouteIndex =
      0;

  }


  clampRouteIndex();


  /*
   * Attendre que le navigateur
   * ait terminé le rendu des cartes
   * avant de positionner le carrousel.
   */

  requestAnimationFrame(
    () => {

      requestAnimationFrame(
        () => {

          goToCurrentRouteIndex(
            false
          );


          updateRoutesCounter();


          updateRoutesNeighborPreviews();


          updateRoutesDesktopArrows();


          updateRoutesHint();

        }
      );

    }
  );

}


/* =========================================================
   28.4 CRÉATION D'UNE CARTE ITINÉRAIRE
========================================================= */

function createRouteCard(
  route
) {

  const card =
    document.createElement(
      "article"
    );


  card.dataset.routeId =
    route.id;


  card.className =
    "place-card route-card";


  card.setAttribute(
    "tabindex",
    "0"
  );


  card.setAttribute(
    "aria-label",
    route.name[
      currentLanguage
    ]
  );


  const stepsHTML =
    route.steps
      .map(
        step => {

          const place =
            getPlaceById(
              step.placeId
            );


          if (!place) {
            return "";
          }


          const isMustSee =
            isMustSeePlace(
              step.placeId
            );


          const connectorHTML =
            step.next
              ? buildRouteConnectorHTML(
                  step.next
                )
              : "";


          return `

            <div class="route-step">

              <div class="route-step-content">

                <div class="route-place">

                  <img
                    class="
                      route-place-image
                      ${isMustSee ? "is-must-see" : ""}
                    "
                    src="${place.image}"
                    alt="${place.name[currentLanguage]}"
                  >

                  <div class="route-place-name">

                    ${place.name[currentLanguage]}

                  </div>

                </div>


                <div class="route-comment">

                  ${step.comment[currentLanguage]}

                </div>

              </div>


              <div class="route-connector-area">

                ${connectorHTML}

              </div>

            </div>

          `;

        }
      )
      .join("");


  card.innerHTML = `

    <div class="place-card-inner">

      <!-- =========================
           FACE AVANT
      ========================== -->

      <section class="place-card-front">

        <div class="card-image-wrapper">

          <img
            class="card-image"
            src="${route.image}"
            alt="${route.name[currentLanguage]}"
          >

        </div>


        <div class="card-title-area">

          <h2 class="card-title">

            ${route.name[currentLanguage]}

          </h2>

        </div>


        <div class="editorial-front-description">

          <p>

            ${route.description[currentLanguage]}

            <br><br>

            <strong>
              ${route.duration[currentLanguage]}
            </strong>

            ·

            <strong>
              ${route.distance[currentLanguage]}
            </strong>

          </p>

        </div>

      </section>


      <!-- =========================
           FACE ARRIÈRE
      ========================== -->

      <section
        class="
          place-card-back
          route-card-back
        "
      >

        <!-- Départ -->

        <div class="route-metro">

          <span class="route-metro-label">

            ${
              currentLanguage === "fr"
                ? "Départ"
                : "Start"
            }

          </span>


          <span class="route-metro-station">

            🚇 ${route.startMetro.station}

          </span>


          <span class="route-metro-lines">

            ${buildRouteMetroLinesHTML(
              route.startMetro.lines
            )}

          </span>

        </div>


        <!-- Étapes -->

        <div class="route-scroll">

          ${stepsHTML}

        </div>


        <!-- Arrivée -->

        <div class="route-metro">

          <span class="route-metro-label">

            ${
              currentLanguage === "fr"
                ? "Arrivée"
                : "Arrival"
            }

          </span>


          <span class="route-metro-station">

            🚇 ${route.endMetro.station}

          </span>


          <span class="route-metro-lines">

            ${buildRouteMetroLinesHTML(
              route.endMetro.lines
            )}

          </span>

        </div>

      </section>

    </div>

  `;


  setupRouteCardInteractions(
    card
  );


  return card;

}


/* =========================================================
   28.5 INTERACTIONS D'UNE CARTE ITINÉRAIRE
========================================================= */

function setupRouteCardInteractions(
  card
) {

  let pointerStartX =
    0;


  let pointerStartY =
    0;


  let pointerMoved =
    false;


  card.addEventListener(
    "pointerdown",
    event => {

      pointerStartX =
        event.clientX;


      pointerStartY =
        event.clientY;


      pointerMoved =
        false;

    }
  );


  card.addEventListener(
    "pointermove",
    event => {

      const moveX =
        Math.abs(
          event.clientX -
          pointerStartX
        );


      const moveY =
        Math.abs(
          event.clientY -
          pointerStartY
        );


      if (
        moveX > SWIPE_THRESHOLD ||
        moveY > SWIPE_THRESHOLD
      ) {

        pointerMoved =
          true;

      }

    }
  );


  card.addEventListener(
    "click",
    event => {

      if (pointerMoved) {
        return;
      }


      /*
       * Un clic à l'intérieur de la zone
       * scrollable ne retourne pas
       * automatiquement la carte.
       */

      if (
        event.target.closest(
          ".route-scroll"
        )
      ) {
        return;
      }


      card.classList.toggle(
        "is-flipped"
      );

    }
  );


  card.addEventListener(
    "keydown",
    event => {

      if (
        event.target !== card
      ) {
        return;
      }


      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();


        card.classList.toggle(
          "is-flipped"
        );

      }

    }
  );

}


/* =========================================================
   28.6 CONNECTEURS ENTRE LES ÉTAPES
========================================================= */

function buildRouteConnectorHTML(
  connector
) {

  if (!connector) {
    return "";
  }


  /*
   * Connexion en métro.
   */

  if (
    connector.mode === "metro"
  ) {

    const lineLabel =
      connector.line === "R"
        ? "R"
        : `L${connector.line}`;


    return `

      <div class="route-metro-transfer">

        <!-- Station de départ -->

        <div class="route-intermediate-station">

          <span class="route-intermediate-station-name">

            🚇 ${connector.fromStation.station}

          </span>


          <span class="route-metro-lines">

            ${buildRouteMetroLinesHTML(
              connector.fromStation.lines
            )}

          </span>

        </div>


        <!-- Ligne utilisée -->

        <div
          class="
            route-connector
            route-connector-metro
            route-connector-metro-${connector.line}
          "
        >

          <span class="route-connector-metro-badge">

            ${lineLabel}

          </span>

        </div>


        <!-- Station d'arrivée -->

        <div class="route-intermediate-station">

          <span class="route-intermediate-station-name">

            🚇 ${connector.toStation.station}

          </span>


          <span class="route-metro-lines">

            ${buildRouteMetroLinesHTML(
              connector.toStation.lines
            )}

          </span>

        </div>

      </div>

    `;

  }


  /*
   * Connexion à pied.
   */

  return `

    <div
      class="
        route-connector
        route-connector-walk
      "
    >
    </div>

  `;

}


/* =========================================================
   28.7 BADGES DES LIGNES DE MÉTRO
========================================================= */

function buildRouteMetroLinesHTML(
  lines
) {

  if (
    !lines ||
    lines.length === 0
  ) {

    return "";

  }


  return lines
    .map(
      line => {

        const label =
          line === "R"
            ? "R"
            : `L${line}`;


        return `

          <span
            class="
              route-metro-line
              route-metro-line-${line}
            "
          >

            ${label}

          </span>

        `;

      }
    )
    .join("");

}


/* =========================================================
   29. CARROUSEL DES ITINÉRAIRES
========================================================= */


/* =========================================================
   29.1 CRÉATION DE L'INTERFACE DU CARROUSEL
========================================================= */

/*
 * Le compteur, les aperçus et l'indication
 * sont créés automatiquement.
 *
 * Aucun ajout manuel n'est nécessaire
 * dans index.html.
 */

function ensureRoutesCarouselUI() {

  if (
    routesCounter &&
    routesFlipHint &&
    routesPreviewPrev &&
    routesPreviewNext
  ) {

    return;

  }


  const routesNavigation =
    routesGrid.closest(
      ".cards-navigation"
    );


  if (!routesNavigation) {
    return;
  }


  /* =========================
     APERÇUS
  ========================= */

  let previews =
    routesView.querySelector(
      ".routes-neighbor-previews"
    );


  if (!previews) {

    previews =
      document.createElement(
        "div"
      );


    previews.className =
      "neighbor-previews routes-neighbor-previews";


    previews.innerHTML = `

      <button
        class="
          neighbor-preview
          neighbor-preview-prev
          is-hidden
        "
        id="routes-preview-prev"
        type="button"
        aria-label="Itinéraire précédent"
      >

        <img
          id="routes-preview-prev-image"
          alt=""
        >

      </button>


      <button
        class="
          neighbor-preview
          neighbor-preview-next
          is-hidden
        "
        id="routes-preview-next"
        type="button"
        aria-label="Itinéraire suivant"
      >

        <img
          id="routes-preview-next-image"
          alt=""
        >

      </button>

    `;


    routesNavigation.insertAdjacentElement(
      "afterend",
      previews
    );

  }


  /* =========================
     COMPTEUR
  ========================= */

  let counter =
    routesView.querySelector(
      ".routes-carousel-counter"
    );


  if (!counter) {

    counter =
      document.createElement(
        "div"
      );


    counter.className =
      "carousel-counter routes-carousel-counter";


    previews.insertAdjacentElement(
      "afterend",
      counter
    );

  }


  /* =========================
     INDICATION
  ========================= */

  let hint =
    routesView.querySelector(
      ".routes-flip-hint"
    );


  if (!hint) {

    hint =
      document.createElement(
        "p"
      );


    hint.className =
      "flip-hint routes-flip-hint";


    counter.insertAdjacentElement(
      "afterend",
      hint
    );

  }


  /*
   * Enregistrer les éléments créés
   * dans les variables globales.
   */

  routesCounter =
    counter;


  routesFlipHint =
    hint;


  routesPreviewPrev =
    previews.querySelector(
      "#routes-preview-prev"
    );


  routesPreviewNext =
    previews.querySelector(
      "#routes-preview-next"
    );


  routesPreviewPrevImage =
    previews.querySelector(
      "#routes-preview-prev-image"
    );


  routesPreviewNextImage =
    previews.querySelector(
      "#routes-preview-next-image"
    );


  setupRoutesPreviewEvents();

}


/* =========================================================
   29.2 LIMITES DE L'INDEX
========================================================= */

function clampRouteIndex() {

  const visibleCount =
    getVisibleCardsCount();


  const maxIndex =
    Math.max(
      0,
      itineraires.length -
      visibleCount
    );


  currentRouteIndex =
    Math.min(
      Math.max(
        currentRouteIndex,
        0
      ),
      maxIndex
    );

}


/* =========================================================
   29.3 POSITION DU CARROUSEL
========================================================= */

function goToCurrentRouteIndex(
  smooth = true
) {

  const cards =
    routesGrid.querySelectorAll(
      ".route-card"
    );


  if (
    cards.length === 0
  ) {

    return;

  }


  clampRouteIndex();


  const targetCard =
    cards[
      currentRouteIndex
    ];


  if (!targetCard) {
    return;
  }


  routesGrid.scrollTo({

    left:
      targetCard.offsetLeft -
      routesGrid.offsetLeft,

    behavior:
      smooth
        ? "smooth"
        : "auto"

  });


  updateRoutesCounter();


  updateRoutesNeighborPreviews();

}


/* =========================================================
   29.4 DÉPLACEMENT DESKTOP
========================================================= */

function moveRoutesCarousel(
  direction
) {

  if (!isDesktop()) {
    return;
  }


  currentRouteIndex +=
    direction;


  clampRouteIndex();


  goToCurrentRouteIndex();


  updateRoutesDesktopArrows();

}


/* =========================================================
   29.5 FLÈCHES DESKTOP
========================================================= */

function updateRoutesDesktopArrows() {

  if (
    !routesPrevButton ||
    !routesNextButton
  ) {

    return;

  }


  if (!isDesktop()) {

    routesPrevButton.disabled =
      true;


    routesNextButton.disabled =
      true;


    return;

  }


  const maxIndex =
    Math.max(
      0,
      itineraires.length -
      getVisibleCardsCount()
    );


  routesPrevButton.disabled =
    currentRouteIndex === 0;


  routesNextButton.disabled =
    currentRouteIndex >=
    maxIndex;

}


/* =========================================================
   29.6 APERÇUS MOBILE / TABLETTE
========================================================= */

function updateRoutesNeighborPreviews() {

  if (
    !routesPreviewPrev ||
    !routesPreviewNext ||
    !routesPreviewPrevImage ||
    !routesPreviewNextImage
  ) {

    return;

  }


  if (isDesktop()) {

    routesPreviewPrev.classList.add(
      "is-hidden"
    );


    routesPreviewNext.classList.add(
      "is-hidden"
    );


    return;

  }


  const previousIndex =
    currentRouteIndex - 1;


  const nextIndex =
    currentRouteIndex + 1;


  /*
   * Aperçu précédent.
   */

  if (
    previousIndex >= 0
  ) {

    const previousRoute =
      itineraires[
        previousIndex
      ];


    routesPreviewPrevImage.src =
      previousRoute.image;


    routesPreviewPrevImage.alt =
      previousRoute.name[
        currentLanguage
      ];


    routesPreviewPrev.classList.remove(
      "is-hidden"
    );

  }

  else {

    routesPreviewPrev.classList.add(
      "is-hidden"
    );

  }


  /*
   * Aperçu suivant.
   */

  if (
    nextIndex <
    itineraires.length
  ) {

    const nextRoute =
      itineraires[
        nextIndex
      ];


    routesPreviewNextImage.src =
      nextRoute.image;


    routesPreviewNextImage.alt =
      nextRoute.name[
        currentLanguage
      ];


    routesPreviewNext.classList.remove(
      "is-hidden"
    );

  }

  else {

    routesPreviewNext.classList.add(
      "is-hidden"
    );

  }

}


/* =========================================================
   29.7 COMPTEUR
========================================================= */

function updateRoutesCounter() {

  if (!routesCounter) {
    return;
  }


  if (
    itineraires.length === 0
  ) {

    routesCounter.textContent =
      "";


    return;

  }


  routesCounter.textContent =
    `${currentRouteIndex + 1} / ${itineraires.length}`;

}


/* =========================================================
   29.8 INDICATION UTILISATEUR
========================================================= */

function updateRoutesHint() {

  if (!routesFlipHint) {
    return;
  }


  routesFlipHint.textContent =
    isMobile()
      ? getText(
          "hintMobile"
        )
      : getText(
          "hintDesktop"
        );

}


/* =========================================================
   29.9 ÉVÉNEMENTS DES APERÇUS
========================================================= */

function setupRoutesPreviewEvents() {

  if (
    !routesPreviewPrev ||
    !routesPreviewNext
  ) {

    return;

  }


  /*
   * Empêcher l'ajout de plusieurs
   * événements sur les mêmes boutons.
   */

  if (
    routesPreviewPrev.dataset
      .eventsReady === "true"
  ) {

    return;

  }


  routesPreviewPrev.dataset
    .eventsReady =
      "true";


  routesPreviewNext.dataset
    .eventsReady =
      "true";


  routesPreviewPrev.addEventListener(
    "click",
    () => {

      if (
        currentRouteIndex <= 0
      ) {

        return;

      }


      currentRouteIndex -=
        1;


      goToCurrentRouteIndex();

    }
  );


  routesPreviewNext.addEventListener(
    "click",
    () => {

      if (
        currentRouteIndex >=
        itineraires.length - 1
      ) {

        return;

      }


      currentRouteIndex +=
        1;


      goToCurrentRouteIndex();

    }
  );

}


/* =========================================================
   29.10 GLISSEMENT TACTILE
========================================================= */

let routesSwipeStartX =
  0;


let routesSwipeEndX =
  0;


routesGrid.addEventListener(
  "touchstart",
  event => {

    if (isDesktop()) {
      return;
    }


    routesSwipeStartX =
      event.changedTouches[0]
        .clientX;

  },
  {
    passive: true
  }
);


routesGrid.addEventListener(
  "touchend",
  event => {

    if (isDesktop()) {
      return;
    }


    routesSwipeEndX =
      event.changedTouches[0]
        .clientX;


    const distance =
      routesSwipeEndX -
      routesSwipeStartX;


    if (
      Math.abs(
        distance
      ) < 40
    ) {

      return;

    }


    if (
      distance < 0
    ) {

      currentRouteIndex +=
        1;

    }

    else {

      currentRouteIndex -=
        1;

    }


    goToCurrentRouteIndex();

  },
  {
    passive: true
  }
);

/* =========================================================
   30. CARTE INTERACTIVE
========================================================= */

function showMap() {

  hideAllViews();


  mapView.hidden =
    false;


  showUniversalHeader(
    "exploreMadrid",
    showHome
  );


  updateMapTexts();


  initializeTravelOptimMap();

}

/* =========================================================
   30.P PLANIFIER MON SÉJOUR
========================================================= */

function showPlanning() {

  hideAllViews();


  planningView.hidden =
    false;


  showUniversalHeader(
    "exploreMadrid",
    showHome
  );


  /*
   * Toujours ouvrir la vue
   * sur la face de présentation.
   */

  if (
    planningCard
  ) {

    planningCard.classList.remove(
      "is-flipped"
    );

  }


  /*
   * Revenir en haut de la
   * face de présentation.
   */

  if (
    planningCardFront
  ) {
  
    planningCardFront.scrollTop =
      0;
  
  }

  /*
 * Réinitialiser l'affichage
 * formulaire / confirmation.
 */

if (
  planningForm
) {

  planningForm.hidden =
    false;

}


if (
  planningSuccess
) {

  planningSuccess.hidden =
    true;

}
  
  
  renderPlanningFavorites();
  
  }

/* =========================================================
   30.1 INITIALISATION DE LA CARTE
========================================================= */

function initializeTravelOptimMap() {

  if (
    !traveloptimMapElement
  ) {
    return;
  }


  /*
   * Si la carte existe déjà,
   * Leaflet doit simplement recalculer
   * ses dimensions après le changement de vue.
   */

  if (
    traveloptimMap
  ) {

    requestAnimationFrame(
      () => {

        traveloptimMap
          .invalidateSize();

      }
    );


    return;

  }


  /*
   * Centre initial :
   * Madrid.
   */

  const MADRID_CENTER = [
    40.4168,
    -3.7038
  ];


  traveloptimMap =
    L.map(
      traveloptimMapElement,
      {

        zoomControl:
          false,

        fullscreenControl:
          true,

          fullscreenControlOptions: {
            position: "topright",
            fullscreenElement:
              traveloptimMapElement.closest(
                ".map-wrapper"
              )
          }

      }
    )
      .setView(
        MADRID_CENTER,
        13
      );

      traveloptimMap.on(
        "enterFullscreen exitFullscreen",
        () => {
      
          setTimeout(
            () => {
      
              traveloptimMap.invalidateSize();
      
            },
            100
          );
      
        }
      );


  /*
   * Contrôle du zoom.
   */

  L.control
    .zoom({
      position:
        "topright"
    })
    .addTo(
      traveloptimMap
    );


  /*
   * Fond cartographique.
   *
   * OpenFreeMap — style Positron.
   */

  L.maplibreGL({
    style:
      "https://tiles.openfreemap.org/styles/positron"
  })
    .addTo(
      traveloptimMap
    );


  /*
   * Charger les stations de métro.
   *
   * Les lignes seront ensuite
   * créées à partir de ces coordonnées.
   */

  loadMetroStations();

  loadMapRoutesGeoJSON();

displayAllPlacesForTest();


}


/* =========================================================
   30.2 STATIONS DE MÉTRO
========================================================= */

const mapMetroStations =
  [];

async function loadMetroStations() {

  /*
   * Ne pas recharger les données
   * si la couche existe déjà.
   */

  if (
    !traveloptimMap ||
    metroStationsLayer
  ) {

    return;

  }


  try {

    const response =
      await fetch(
        "stations.geojson"
      );


    if (
      !response.ok
    ) {

      throw new Error(
        "Impossible de charger stations.geojson"
      );

    }


    /*
     * Conserver le GeoJSON complet.
     *
     * Il servira également à retrouver
     * les coordonnées des stations
     * lors du tracé des lignes.
     */

    metroStationsData =
      await response.json();


    /*
     * Création de la couche Leaflet.
     */

    metroStationsLayer =
      L.geoJSON(
        metroStationsData,
        {

          pointToLayer:
            function (
              feature,
              latlng
            ) {

              return createMetroStationMarker(
                feature,
                latlng
              );

            }

        }
      );


    /*
     * Les stations sont visibles
     * par défaut.
     */

    metroStationsLayer
      .addTo(
        traveloptimMap
      );


    /*
     * Adapter immédiatement
     * leur apparence au zoom actuel.
     */

    updateMetroStationMarkers();


    /*
 * Si un itinéraire a été sélectionné
 * pendant le chargement des stations,
 * appliquer immédiatement son filtre.
 */

if (
  activeMapRouteIds.size > 0
) {

  filterMapStationsByRoutes();

}

    /*
     * Changer leur apparence
     * lorsque le niveau de zoom change.
     */

    traveloptimMap.on(
      "zoomend",
      updateMetroStationMarkers
    );

  }
  catch (
    error
  ) {

    console.error(
      "Erreur stations métro :",
      error
    );

  }

}


/* =========================================================
   30.2.1 CRÉATION D'UN MARQUEUR DE STATION
========================================================= */

function createMetroStationMarker(
  feature,
  latlng
) {

  const stationName =
    feature.properties?.title ||
    "";


  const stationLines =
    feature.properties?.description ||
    "";


  const marker =
    L.marker(
      latlng,
      {

        icon:
          createMetroStationIcon(
            traveloptimMap.getZoom()
          )

      }
    );

    mapMetroStations.push({
      marker: marker,
      name:
        feature.properties?.title ||
        "",
      coordinates:
        latlng
    });


  /*
   * Infobulle actuelle.
   *
   * On la conserve telle quelle.
   */

  marker.bindTooltip(
    `
      <strong>${stationName}</strong>
      <br>
      ${stationLines}
    `,
    {
      direction:
        "top",

      offset:
        [0, -8]
    }
  );


  /*
   * Popup au clic.
   */

  marker.bindPopup(
    () => {

      return `
        <div
          class="traveloptim-map-station-card"
        >

          <div
            class="traveloptim-map-station-name"
          >
            ${stationName}
          </div>


          <div
            class="traveloptim-map-station-lines"
          >
            ${stationLines}
          </div>

        </div>
      `;

    },
    {

      className:
        "traveloptim-map-popup traveloptim-map-station-popup",

      maxWidth:
        240,

      minWidth:
        210

    }
  );


  return marker;

}

/* =========================================================
   30.2.2 APPARENCE DES STATIONS
========================================================= */

function createMetroStationIcon(
  zoom
) {

  /*
   * À faible zoom :
   * petit point.
   *
   * À partir du zoom 17 :
   * losange plus détaillé.
   */

  const isDetailed =
    zoom >= 17;


  if (
    !isDetailed
  ) {

    return L.divIcon(
      {

        className:
          "metro-station-icon",

        html:
          `
            <span
              class="metro-station-dot"
            ></span>
          `,

        iconSize:
          [8, 8],

        iconAnchor:
          [4, 4]

      }
    );

  }


  return L.divIcon(
    {

      className:
        "metro-station-icon",

      html:
        `
          <span
            class="metro-station-diamond"
          ></span>
        `,

      iconSize:
        [16, 16],

      iconAnchor:
        [8, 8]

    }
  );

}


/* =========================================================
   30.2.3 MISE À JOUR DES MARQUEURS
========================================================= */

function updateMetroStationMarkers() {

  if (
    !metroStationsLayer ||
    !traveloptimMap
  ) {

    return;

  }


  const zoom =
    traveloptimMap
      .getZoom();


  metroStationsLayer.eachLayer(
    layer => {

      if (
        typeof layer.setIcon !==
        "function"
      ) {

        return;

      }


      layer.setIcon(
        createMetroStationIcon(
          zoom
        )
      );

    }
  );

}


/* =========================================================
   30.3 LIGNES DE MÉTRO
========================================================= */


/* =========================================================
   30.3.1 RECHERCHE D'UNE STATION
========================================================= */

function getMetroStationByName(
  stationName
) {

  if (
    !metroStationsData ||
    !Array.isArray(
      metroStationsData.features
    )
  ) {

    return null;

  }


  return (
    metroStationsData.features.find(
      feature =>
        feature.properties?.title ===
        stationName
    ) ||
    null
  );

}


/* =========================================================
   30.3.2 CRÉATION D'UNE LIGNE
========================================================= */

function createMetroLine(
  lineNumber
) {

  /*
   * Impossible de créer une ligne
   * tant que la carte et les stations
   * ne sont pas disponibles.
   */

  if (
    !traveloptimMap ||
    !metroStationsData
  ) {

    console.warn(
      "Carte ou données métro indisponibles."
    );


    return null;

  }


  /*
   * Récupérer la configuration
   * de la ligne.
   */

  const config =
    METRO_LINES[
      lineNumber
    ];


  if (
    !config
  ) {

    console.warn(
      `Configuration L${lineNumber} introuvable.`
    );


    return null;

  }


  /*
   * Transformer la liste ordonnée
   * des stations en coordonnées Leaflet.
   *
   * GeoJSON :
   * [longitude, latitude]
   *
   * Leaflet :
   * [latitude, longitude]
   */

  const coordinates =
    config.stations
      .map(
        stationName => {

          const station =
            getMetroStationByName(
              stationName
            );


          if (
            !station
          ) {

            console.warn(
              `Station L${lineNumber} introuvable :`,
              stationName
            );


            return null;

          }


          const [
            longitude,
            latitude
          ] =
            station.geometry.coordinates;


          return [
            latitude,
            longitude
          ];

        }
      )
      .filter(
        Boolean
      );


  console.log(
    `L${lineNumber} :`,
    coordinates.length,
    "stations"
  );


  if (
    coordinates.length < 2
  ) {

    console.error(
      `Impossible de tracer L${lineNumber}.`
    );


    return null;

  }


  /*
   * Création de la ligne Leaflet.
   */

  return L.polyline(
    coordinates,
    {

      color:
        config.color,

      weight:
        7,

      opacity:
        1,

      lineCap:
        "round",

      lineJoin:
        "round"

    }
  );

}


/* =========================================================
   30.3.3 AFFICHER / MASQUER UNE LIGNE
========================================================= */

function toggleMetroLine(
  lineNumber,
  checked
) {

  if (
    !traveloptimMap ||
    !metroStationsData
  ) {

    return;

  }


  /*
   * Créer la ligne uniquement
   * lors de sa première utilisation.
   */

  if (
    !metroLineLayers[
      lineNumber
    ]
  ) {

    metroLineLayers[
      lineNumber
    ] =
      createMetroLine(
        lineNumber
      );

  }


  const layer =
    metroLineLayers[
      lineNumber
    ];


  if (
    !layer
  ) {

    return;

  }


  /*
   * Afficher la ligne.
   */

  if (
    checked
  ) {

    if (
      !traveloptimMap.hasLayer(
        layer
      )
    ) {

      layer.addTo(
        traveloptimMap
      );

    }

    return;

  }


  /*
   * Masquer la ligne.
   */

  if (
    traveloptimMap.hasLayer(
      layer
    )
  ) {

    traveloptimMap.removeLayer(
      layer
    );

  }

}


/* =========================================================
   30.4 CONTRÔLES MÉTRO
========================================================= */


/* =========================================================
   30.4.1 ACCORDÉON
========================================================= */

function toggleMetroAccordion() {

  if (
    !metroAccordionButton ||
    !metroControlPanel
  ) {

    return;

  }


  const isOpen =
    metroAccordionButton
      .getAttribute(
        "aria-expanded"
      ) ===
    "true";


  metroAccordionButton
    .setAttribute(
      "aria-expanded",
      String(
        !isOpen
      )
    );


  metroAccordionButton
    .classList
    .toggle(
      "is-open",
      !isOpen
    );


  metroControlPanel.hidden =
    isOpen;

}


/* =========================================================
   30.4.2 AFFICHER / MASQUER LES STATIONS
========================================================= */

function toggleMetroStations() {

  if (
    !traveloptimMap ||
    !metroStationsLayer ||
    !metroStationsToggle
  ) {

    return;

  }


  /*
   * Afficher les stations.
   */

  if (
    metroStationsToggle.checked
  ) {

    if (
      !traveloptimMap.hasLayer(
        metroStationsLayer
      )
    ) {

      metroStationsLayer.addTo(
        traveloptimMap
      );

    }


    return;

  }


  /*
   * Masquer les stations.
   */

  if (
    traveloptimMap.hasLayer(
      metroStationsLayer
    )
  ) {

    traveloptimMap.removeLayer(
      metroStationsLayer
    );

  }

}

/* =========================================================
   30.5 CARTE — REGISTRE DES MARQUEURS DE LIEUX
========================================================= */

/*
 * Registre des marqueurs de lieux.
 *
 * Chaque élément contient :
 * - le marqueur Leaflet ;
 * - le lieu d'origine ;
 * - sa catégorie.
 */

const mapPlaceMarkers =
  [];


/* =========================================================
   30.6 LIEUX ET MARQUEURS
========================================================= */

/*
 * Les noms historiques displayAllPlacesForTest() et
 * createPlaceTestMarker() sont conservés volontairement afin
 * de ne modifier aucune référence existante.
 */

const allMapPlaces = [

  ...incontournables,
  ...places,
  ...monuments,
  ...musees,
  ...parcs,

  ...operaFlamenco,
  ...evenementsSportifs,
  ...panoramique,
  ...famille,
  ...shopping

];


/* =========================================================
   30.6.1 CRÉATION D'UN MARQUEUR DE LIEU
========================================================= */

function createPlaceTestMarker(
  place,
  coordinates,
  locationName = null
) {

  if (
    !coordinates ||
    typeof coordinates.lat !== "number" ||
    typeof coordinates.lng !== "number"
  ) {

    return;

  }


  const category =
    getPlaceMarkerCategory(
      place
    );


  let marker;


  /*
   * INCONTOURNABLES
   *
   * Marqueur plus grand
   * avec miniature + étoile.
   */

  if (
    incontournables.includes(
      place
    )
  ) {

    const icon =
      L.divIcon({

        className:
          "traveloptim-mustsee-icon-wrapper",

        html:
          `
            <div
              class="traveloptim-mustsee-marker"
            >

              <div
                class="traveloptim-mustsee-star"
              >
                ⭐
              </div>

              <div
                class="traveloptim-mustsee-image-wrapper"
              >

                <img
                  src="${place.image}"
                  alt=""
                  class="traveloptim-mustsee-image"
                >

              </div>

            </div>
          `,

        iconSize: [
          52,
          62
        ],

        iconAnchor: [
          26,
          42
        ],

        popupAnchor: [
          0,
          -42
        ]

      });


    marker =
      L.marker(
        [
          coordinates.lat,
          coordinates.lng
        ],
        {
          icon:
            icon
        }
      );

  }


  /*
   * CATÉGORIES AVEC
   * APPARENCE PERSONNALISÉE
   */

  else if (
    category &&
    PLACE_MARKER_STYLES[
      category
    ]
  ) {

    const style =
      PLACE_MARKER_STYLES[
        category
      ];


    const icon =
      L.divIcon({

        className:
          "traveloptim-place-icon-wrapper",

        html:
          `
            <div
              class="traveloptim-place-marker"
              style="
                background-color:
                ${style.color};
              "
            >
              <span>
                ${style.emoji}
              </span>
            </div>
          `,

        iconSize: [
          34,
          34
        ],

        iconAnchor: [
          17,
          17
        ],

        popupAnchor: [
          0,
          -18
        ]

      });


    marker =
      L.marker(
        [
          coordinates.lat,
          coordinates.lng
        ],
        {
          icon:
            icon
        }
      );

  }


  /*
   * MARQUEUR DE SECOURS
   *
   * Utilisé uniquement si une catégorie
   * n'a pas encore de style défini.
   */

  else {

    marker =
      L.circleMarker(
        [
          coordinates.lat,
          coordinates.lng
        ],
        {
          radius:
            6,

          weight:
            2,

          color:
            "#ffffff",

          fillColor:
            "#3AA689",

          fillOpacity:
            1
        }
      );

  }


  /*
   * Nom du lieu.
   *
   * Fonction dynamique afin que
   * le changement FR / EN soit pris
   * en compte lors de l'ouverture
   * du popup.
   */

  const getPlaceName =
    () =>
      locationName ||
      place.name?.[
        currentLanguage
      ] ||
      place.name?.fr ||
      place.id;


  /*
   * Popup du lieu.
   */

  marker.bindPopup(
    () => {

      return `
        <div
          class="traveloptim-map-place-card"
        >

          <div
            class="traveloptim-map-place-image-wrapper"
          >

            <img
              class="traveloptim-map-place-image"
              src="${place.image}"
              alt=""
            >

          </div>


          <div
            class="traveloptim-map-place-content"
          >

            <div
              class="traveloptim-map-place-name"
            >
              ${getPlaceName()}
            </div>

          </div>

        </div>
      `;

    },
    {

      className:
        "traveloptim-map-popup",

      maxWidth:
        240,

      minWidth:
        210

    }
  );


  /*
   * Enregistrer le marqueur
   * dans le registre des lieux.
   *
   * C'est ce registre qui permettra
   * au filtre "Lieux" de masquer ou
   * afficher les catégories.
   */

  const markerCategory =
    incontournables.includes(
      place
    )
      ? "incontournables"
      : category;


  mapPlaceMarkers.push({

    marker:
      marker,

    place:
      place,

    category:
      markerCategory,

    locationName:
      locationName

  });


  /*
   * Afficher le marqueur
   * sur la carte.
   */

  marker.addTo(
    traveloptimMap
  );

}


/* =========================================================
   30.6.2 AFFICHAGE DE TOUS LES LIEUX
========================================================= */

function displayAllPlacesForTest() {

  allMapPlaces.forEach(
    place => {


      /*
       * CAS 1
       *
       * Lieu classique avec
       * une seule position.
       */

      if (
        place.coordinates
      ) {

        createPlaceTestMarker(
          place,
          place.coordinates
        );

      }


      /*
       * CAS 2
       *
       * Lieu possédant plusieurs
       * positions.
       *
       * Exemple : Shopping.
       */

      if (
        Array.isArray(
          place.locations
        )
      ) {

        place.locations.forEach(
          location => {

            createPlaceTestMarker(
              place,
              location.coordinates,
              location.name
            );

          }
        );

      }

    }
  );

}

/* =========================================================
   30.6.3 APPARENCE DES CATÉGORIES DE LIEUX
========================================================= */

const PLACE_MARKER_STYLES = {

  places: {
    color: "#F57C00",
    emoji: "🏰"
  },
  
  monuments: {
    color: "#2979FF",
    emoji: "🏛️"
  },

  musees: {
    color: "#9C27B0",
    emoji: "🎨"
  },

  parcs: {
    color: "#43A047",
    emoji: "🌳"
  },

  operaFlamenco: {
    color: "#E53935",
    emoji: "🎭"
  },

  evenementsSportifs: {
    color: "#6D4C41",
    emoji: "🏟️"
  },

  famille: {
    color: "#00ACC1",
    emoji: "👨‍👩‍👧"
  },

  panoramique: {
    color: "#F9A825",
    emoji: "📷"
  },

  shopping: {
    color: "#EC407A",
    emoji: "🛍️"
  }

};

function getPlaceMarkerCategory(
  place
) {

  if (places.includes(place)) {
    return "places";
  }

  if (monuments.includes(place)) {
    return "monuments";
  }

  if (musees.includes(place)) {
    return "musees";
  }

  if (parcs.includes(place)) {
    return "parcs";
  }

  if (operaFlamenco.includes(place)) {
    return "operaFlamenco";
  }

  if (evenementsSportifs.includes(place)) {
    return "evenementsSportifs";
  }

  if (famille.includes(place)) {
    return "famille";
  }

  if (panoramique.includes(place)) {
    return "panoramique";
  }

  if (shopping.includes(place)) {
    return "shopping";
  }


  /*
   * Incontournables et autres catégories
   * non encore stylisées.
   */

  return null;

}

/* =========================================================
   30.7 CARTE — MES FAVORIS
========================================================= */

function getMapFavoriteIcon(
  category
) {

  const icons = {

    incontournables: "⭐",
    places: "🏰",
    monuments: "🏛️",
    musees: "🎨",
    parcs: "🌳",
    famille: "👨‍👩‍👧",
    operaFlamenco: "🎭",
    evenementsSportifs: "🏟️",
    shopping: "🛍️",
    panoramique: "📷"

  };

  return (
    icons[category] ||
    "📍"
  );

}


/* =========================================================
   30.7.1 CARTE — FILTRER SUR MES FAVORIS
========================================================= */

function renderMapFavoritesList() {

  if (
    !mapFavoritesPlaceholder
  ) {

    return;

  }


  const favoriteItems =
    getFavoriteItems();


  /*
   * Aucun favori.
   */

  if (
    favoriteItems.length === 0
  ) {

    mapFavoritesPlaceholder.innerHTML =
      currentLanguage === "fr"
        ? "Aucun favori enregistré."
        : "No favorites saved.";

    return;

  }


  /*
   * Construire la liste.
   */

  mapFavoritesPlaceholder.innerHTML =
    favoriteItems
      .map(
        favoriteEntry => {

          const place =
            favoriteEntry.item;


          const name =
            getLocalizedValue(
              place.name
            );


          return `

            <div class="map-favorite-row">

            <span class="map-favorite-name">
            ${getMapFavoriteIcon(favoriteEntry.categoryKey)} ${name}
          </span>

            </div>

          `;

        }
      )
      .join("");

}

function filterMapToFavorites() {

  if (
    !traveloptimMap
  ) {

    return;

  }


  mapPlaceMarkers.forEach(
    entry => {

      const shouldBeVisible =
        isMapPlaceFavorite(
          entry.place
        );


      if (
        shouldBeVisible
      ) {

        if (
          !traveloptimMap.hasLayer(
            entry.marker
          )
        ) {

          entry.marker.addTo(
            traveloptimMap
          );

        }

      }

      else {

        if (
          traveloptimMap.hasLayer(
            entry.marker
          )
        ) {

          traveloptimMap.removeLayer(
            entry.marker
          );

        }

      }

    }
  );

}

function toggleMapFavoritesAccordion() {

  if (
    !favoritesMapAccordionButton ||
    !favoritesMapControlPanel
  ) {

    return;

  }


  const isOpen =
    favoritesMapAccordionButton
      .getAttribute(
        "aria-expanded"
      ) ===
      "true";


  const willOpen =
    !isOpen;


  favoritesMapAccordionButton
    .setAttribute(
      "aria-expanded",
      String(
        willOpen
      )
    );


  favoritesMapAccordionButton
    .classList.toggle(
      "is-open",
      willOpen
    );


  favoritesMapControlPanel.hidden =
    !willOpen;


  /*
   * OUVERTURE :
   * afficher uniquement les favoris.
   */

  if (
    willOpen
  ) {

    isMapFavoritesFilterActive =
      true;


    renderMapFavoritesList();


    filterMapToFavorites();

  }


  /*
   * FERMETURE :
   * restaurer l'affichage précédent.
   */

  else {

    isMapFavoritesFilterActive =
      false;


    /*
     * Si un itinéraire est sélectionné,
     * l'itinéraire reste prioritaire.
     */

    if (
      activeMapRouteIds.size > 0
    ) {

      filterMapPlacesByRoutes();

    }


    /*
     * Sinon, retour aux filtres
     * normaux du bloc Lieux.
     */

    else {

      updatePlaceFilters();

    }

  }

}

/* =========================================================
   30.8 CARTE — FILTRES DES LIEUX
========================================================= */

function togglePlacesAccordion() {

  if (
    !placesAccordionButton ||
    !placesControlPanel
  ) {

    return;

  }


  const isOpen =
    placesAccordionButton
      .getAttribute(
        "aria-expanded"
      ) ===
      "true";


  placesAccordionButton
    .setAttribute(
      "aria-expanded",
      String(!isOpen)
    );


  placesAccordionButton
    .classList.toggle(
      "is-open",
      !isOpen
    );


  placesControlPanel.hidden =
    isOpen;

}


/* =========================================================
   30.8.1 APPLIQUER LES FILTRES
========================================================= */

function updatePlaceFilters() {

  if (
    !traveloptimMap
  ) {

    return;

  }


  /*
   * Catégories actuellement cochées.
   */

  const activeCategories =
    new Set();


  placeCategoryToggles.forEach(
    checkbox => {

      if (
        checkbox.checked
      ) {

        activeCategories.add(
          checkbox.dataset.placeCategory
        );

      }

    }
  );


  /*
   * Vérifier chaque marqueur.
   */

  mapPlaceMarkers.forEach(
    entry => {

      const shouldBeVisible =
        activeCategories.has(
          entry.category
        );


      if (
        shouldBeVisible
      ) {

        if (
          !traveloptimMap.hasLayer(
            entry.marker
          )
        ) {

          entry.marker.addTo(
            traveloptimMap
          );

        }

      }

      else {

        if (
          traveloptimMap.hasLayer(
            entry.marker
          )
        ) {

          traveloptimMap.removeLayer(
            entry.marker
          );

        }

      }

    }
  );


  updatePlacesAllToggle();

}


/* =========================================================
   30.8.2 CASE « TOUS »
========================================================= */

function toggleAllPlaceCategories() {

  if (
    !placesAllToggle
  ) {

    return;

  }


  const checked =
    placesAllToggle.checked;


  placeCategoryToggles
    .forEach(
      checkbox => {

        checkbox.checked =
          checked;

      }
    );


  updatePlaceFilters();

}


/* =========================================================
   30.8.3 SYNCHRONISER « TOUS »
========================================================= */

function updatePlacesAllToggle() {

  if (
    !placesAllToggle
  ) {

    return;

  }


  const allChecked =
    Array
      .from(
        placeCategoryToggles
      )
      .every(
        checkbox =>
          checkbox.checked
      );


  placesAllToggle.checked =
    allChecked;

}

/* =========================================================
   30.8.4 LANGUE DES FILTRES LIEUX
========================================================= */

function updateMapPlacesFilterLanguage() {

  const title =
    document.getElementById(
      "places-filter-title"
    );


  if (
    title
  ) {

    title.textContent =
      getText(
        "mapPlacesTitle"
      );

  }


  const labels = {

    all:
      "mapFilterAll",

    incontournables:
      "mapFilterMustSees",

    places:
      "mapFilterPlaces",

    monuments:
      "mapFilterMonuments",

    musees:
      "mapFilterMuseums",

    parcs:
      "mapFilterParks",

    famille:
      "mapFilterFamily",

    operaFlamenco:
      "mapFilterOperaFlamenco",

    evenementsSportifs:
      "mapFilterSports",

    shopping:
      "mapFilterShopping",

    panoramique:
      "mapFilterPanoramic"

  };


  document
    .querySelectorAll(
      "[data-map-filter-label]"
    )
    .forEach(
      element => {

        const key =
          element.dataset
            .mapFilterLabel;


        const textKey =
          labels[
            key
          ];


        if (
          textKey
        ) {

          element.textContent =
            getText(
              textKey
            );

        }

      }
    );

}

/* =========================================================
   30.8.5 LANGUE — RECHERCHE ET GÉOLOCALISATION
========================================================= */

function updateMapSearchLanguage() {

  const searchLabel =
    document.getElementById(
      "map-search-label"
    );

    const nearbyClose =
    document.getElementById(
      "map-nearby-close"
    );

  const locationLabel =
    document.getElementById(
      "map-location-button-label"
    );

  const nearbyTitle =
    document.getElementById(
      "map-nearby-title"
    );


  if (searchLabel) {

    searchLabel.textContent =
      `🔎 ${getText("mapSearchLabel")}`;

  }


  if (mapPlaceSearch) {

    mapPlaceSearch.placeholder =
      getText(
        "mapSearchPlaceholder"
      );

  }


  if (locationLabel) {

    locationLabel.textContent =
      getText(
        "mapLocateMe"
      );

  }


  if (nearbyTitle) {

    nearbyTitle.textContent =
      getText(
        "mapNearbyTitle"
      );

  }

  if (
    nearbyClose
  ) {
  
    const closeText =
      getText(
        "mapCloseNearby"
      );
  
    nearbyClose.setAttribute(
      "aria-label",
      closeText
    );
  
    nearbyClose.title =
      closeText;
  
  }

}

/* =========================================================
   30.8.6 VÉRIFIER SI UN LIEU EST FAVORI
========================================================= */

function isMapPlaceFavorite(
  place
) {

  if (
    !place ||
    !place.id
  ) {

    return false;

  }


  const favoriteItems =
    getFavoriteItems();


  return favoriteItems.some(
    favoriteEntry => {

      return (
        favoriteEntry.item &&
        favoriteEntry.item.id ===
          place.id
      );

    }
  );

}

/* =========================================================
   30.9 CARTE — MENU PRINCIPAL
========================================================= */

function toggleMapMenu() {

  if (
    !mapMenuButton ||
    !mapMenuPanel
  ) {

    return;

  }


  const isOpen =
    mapMenuButton
      .getAttribute(
        "aria-expanded"
      ) ===
      "true";


  mapMenuButton
    .setAttribute(
      "aria-expanded",
      String(
        !isOpen
      )
    );


  mapMenuPanel.hidden =
    isOpen;

}

/* =========================================================
   30.9.1 LANGUE DU MENU PRINCIPAL
========================================================= */

function updateMapMenuLanguage() {

  const menuTitle =
    document.getElementById(
      "map-menu-title"
    );

  const metroTitle =
    document.getElementById(
      "map-metro-title"
    );

  const placesTitle =
    document.getElementById(
      "places-filter-title"
    );

  const routesTitle =
    document.getElementById(
      "map-routes-title"
    );

  const stationsLabel =
    document.getElementById(
      "map-stations-label"
    );

  const routesPlaceholder =
    document.getElementById(
      "map-routes-placeholder"
    );


  if (menuTitle) {

    menuTitle.textContent =
      getText(
        "mapMenu"
      );

  }


  if (metroTitle) {

    metroTitle.textContent =
      `🚇 ${getText("mapMetro")}`;

  }


  if (placesTitle) {

    placesTitle.textContent =
      `📍 ${getText("mapPlaces")}`;

  }



  if (routesTitle) {

    routesTitle.textContent =
      `🧭 ${getText("mapRoutes")}`;

  }


  if (stationsLabel) {

    stationsLabel.textContent =
      getText(
        "mapStations"
      );

  }

  if (mapFavoritesTitle) {

    mapFavoritesTitle.textContent =
      `❤️ ${getText("mapFavorites")}`;
  
  }
  
  if (mapFavoritesPlaceholder) {
  
    mapFavoritesPlaceholder.textContent =
      getText(
        "mapFavoritesPlaceholder"
      );
  
  }



  if (routesPlaceholder) {

    routesPlaceholder.textContent =
      getText(
        "mapRoutesPlaceholder"
      );

  }

}

/* =========================================================
   30.10 CARTE — RECHERCHE DE LIEUX
========================================================= */

/*
 * Temporisateur utilisé avant
 * de lancer la recherche externe.
 */

let mapExternalSearchTimer =
  null;

function normalizeMapSearchText(
  text
) {

  return String(text || "")
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .toLowerCase()
    .trim();

}

function getMapMarkerDisplayName(
  entry
) {

  if (
    entry.locationName
  ) {

    return entry.locationName;

  }


  return (
    entry.place.name?.[currentLanguage] ||
    entry.place.name?.fr ||
    entry.place.id
  );

}

function searchMapPlaces(
  query
) {

  const normalizedQuery =
    normalizeMapSearchText(
      query
    );


  /*
   * Annuler toute recherche externe
   * qui était en attente.
   */

  if (
    mapExternalSearchTimer
  ) {

    clearTimeout(
      mapExternalSearchTimer
    );

    mapExternalSearchTimer =
      null;

  }


  if (
    normalizedQuery.length < 2
  ) {

    mapSearchResults.hidden =
      true;

    mapSearchResults.innerHTML =
      "";

    return;

  }


  /*
   * Niveau 1 :
   * recherche TravelOptim.
   */

  const internalResults =
    mapPlaceMarkers
      .filter(
        entry => {

          const name =
            getMapMarkerDisplayName(
              entry
            );

          return normalizeMapSearchText(
            name
          ).includes(
            normalizedQuery
          );

        }
      )
      .slice(
        0,
        8
      );


  /*
   * TravelOptim reste prioritaire.
   */

  if (
    internalResults.length > 0
  ) {

    renderMapSearchResults(
      internalResults
    );

    return;

  }


  /*
   * Aucun résultat TravelOptim.
   *
   * On évite de lancer une recherche
   * externe sur seulement 2 lettres.
   */

  if (
    normalizedQuery.length < 3
  ) {

    mapSearchResults.hidden =
      true;

    mapSearchResults.innerHTML =
      "";

    return;

  }


  /*
   * Niveau 2 :
   * recherche externe après un petit délai.
   */

  mapSearchResults.hidden =
    false;

  mapSearchResults.innerHTML =
    `<div class="map-search-empty">
      ${getText("mapExternalSearching")}
    </div>`;


  mapExternalSearchTimer =
    setTimeout(
      () => {

        searchExternalMapPlaces(
          query
        );

      },
      600
    );

}

function renderMapSearchResults(
  results
) {

  mapSearchResults.innerHTML =
    "";


  if (
    results.length === 0
  ) {

    mapSearchResults.innerHTML =
      `<div class="map-search-empty">
        ${getText("mapSearchNoResults")}
      </div>`;

    mapSearchResults.hidden =
      false;

    return;

  }


  results.forEach(
    entry => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "map-search-result-button";


      button.textContent =
        getMapMarkerDisplayName(
          entry
        );


        button.addEventListener(
          "click",
          () => {
        
            /*
             * Afficher le lieu sélectionné
             * sur la carte.
             */
        
            focusMapMarker(
              entry
            );
        
        
            /*
             * Mettre le nom choisi
             * dans le champ de recherche.
             */
        
            if (
              mapPlaceSearch
            ) {
        
              mapPlaceSearch.value =
                getMapMarkerDisplayName(
                  entry
                );
        
            }
        
        
            /*
             * Fermer les suggestions
             * une fois le lieu choisi.
             */
        
            if (
              mapSearchResults
            ) {
        
              mapSearchResults.innerHTML =
                "";
        
              mapSearchResults.hidden =
                true;
        
            }
        
          }
        );


      mapSearchResults.appendChild(
        button
      );

    }
  );


  mapSearchResults.hidden =
    false;

}

function focusMapMarker(
  entry,
  findNearby = true
) {

  if (
    !traveloptimMap ||
    !entry?.marker
  ) {
    return;
  }


  /*
   * S'assurer que le marqueur
   * est visible sur la carte.
   */

  if (
    !traveloptimMap.hasLayer(
      entry.marker
    )
  ) {

    entry.marker.addTo(
      traveloptimMap
    );

  }


  const position =
    entry.marker.getLatLng();


  /*
   * Centrage précis.
   */

  traveloptimMap.setView(
    [
      position.lat,
      position.lng
    ],
    17,
    {
      animate: true
    }
  );


  /*
   * Attendre la fin du déplacement
   * avant d'ouvrir le popup.
   */

  traveloptimMap.once(
    "moveend",
    () => {

      entry.marker.openPopup();

    }
  );


  /*
   * Chercher automatiquement
   * les lieux situés à moins de 1 km
   * du lieu sélectionné.
   */

  if (
    findNearby
  ) {

    findNearbyMapPlaces(
      position,
      entry
    );

  }

}

function closeNearbyMapPlaces() {

  if (
    !mapNearbySection ||
    !mapNearbyResults
  ) {
    return;
  }


  mapNearbySection.hidden =
    true;


  mapNearbyResults.innerHTML =
    "";

}

/* =========================================================
   30.10.1 CARTE — RECHERCHE EXTERNE
========================================================= */

function renderExternalMapResults(
  results
) {

  if (
    !mapSearchResults
  ) {
    return;
  }


  mapSearchResults.innerHTML =
    "";


  if (
    !Array.isArray(results) ||
    results.length === 0
  ) {

    mapSearchResults.innerHTML =
      `<div class="map-search-empty">
        ${getText("mapExternalNoResults")}
      </div>`;

    mapSearchResults.hidden =
      false;

    return;

  }


  results.forEach(
    result => {

      const displayName =
        result?.display_name ||
        result?.name ||
        "";


      if (
        !displayName
      ) {
        return;
      }


      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "map-search-result-button";


      button.textContent =
        displayName;


      button.addEventListener(
        "click",
        () => {

          selectExternalMapResult(
            result
          );

        }
      );


      mapSearchResults.appendChild(
        button
      );

    }
  );


  mapSearchResults.hidden =
    false;

}

async function searchExternalMapPlaces(
  query
) {

  const searchQuery =
    String(
      query || ""
    ).trim();


  if (
    searchQuery.length < 3
  ) {
    return;
  }


  try {

    const params =
      new URLSearchParams({
        q: searchQuery,
        format: "jsonv2",
        addressdetails: "1",
        limit: "6",
        countrycodes: "es",
        viewbox:
          "-3.90,40.60,-3.50,40.25",
        bounded: "1"
      });


    const response =
      await fetch(
        "https://nominatim.openstreetmap.org/search?" +
        params.toString(),
        {
          headers: {
            "Accept-Language":
              currentLanguage === "fr"
                ? "fr"
                : "en"
          }
        }
      );


    if (
      !response.ok
    ) {

      throw new Error(
        "External search failed"
      );

    }


    const results =
      await response.json();


    renderExternalMapResults(
      results
    );

  }
  catch (
    error
  ) {

    console.error(
      "External map search error:",
      error
    );


    mapSearchResults.innerHTML =
      `<div class="map-search-empty">
        ${getText("mapExternalSearchError")}
      </div>`;

    mapSearchResults.hidden =
      false;

  }

}

/*
 * Résultats ajoutés manuellement
 * par la recherche externe.
 *
 * Chaque résultat conserve :
 * - son marqueur ;
 * - son cercle de 1 km.
 */

const externalSearchResults =
  new Set();

  function selectExternalMapResult(
  result
) {

  if (
    !traveloptimMap
  ) {
    return;
  }


  const latitude =
    Number(
      result?.lat
    );

  const longitude =
    Number(
      result?.lon
    );


  const displayName =
    result?.display_name ||
    result?.name ||
    "";


  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    return;
  }


  const position =
    L.latLng(
      latitude,
      longitude
    );


  /*
   * Créer le marqueur.
   */

  const marker =
    L.marker(
      position
    )
      .addTo(
        traveloptimMap
      );


  /*
   * Créer le cercle de 1 km.
   */

  const radiusCircle =
    L.circle(
      position,
      {
        radius:
          MAP_NEARBY_RADIUS,

        weight:
          2,

        opacity:
          0.8,

        fillOpacity:
          0.08
      }
    )
      .addTo(
        traveloptimMap
      );


  /*
   * Objet représentant ce résultat.
   */

  const externalEntry = {

    marker:
      marker,

    radiusCircle:
      radiusCircle

  };


  externalSearchResults.add(
    externalEntry
  );


  /*
   * Popup avec suppression individuelle.
   */

  const popupHTML =
    `
      <div class="map-popup-content">

        <div class="map-popup-title">
          ${displayName}
        </div>

        <button
          type="button"
          class="map-external-remove-button"
        >
          ✕
        </button>

      </div>
    `;


  marker.bindPopup(
    popupHTML
  );


  /*
   * Suppression uniquement
   * lorsque l'utilisateur clique sur X.
   */

  marker.on(
    "popupopen",
    event => {

      const popupElement =
        event.popup.getElement();

      if (
        !popupElement
      ) {
        return;
      }


      const removeButton =
        popupElement.querySelector(
          ".map-external-remove-button"
        );


      if (
        !removeButton
      ) {
        return;
      }


      removeButton.onclick =
        () => {

          traveloptimMap.removeLayer(
            marker
          );

          traveloptimMap.removeLayer(
            radiusCircle
          );

          externalSearchResults.delete(
            externalEntry
          );

        };

    }
  );


  /*
   * Afficher tout le rayon
   * du nouveau lieu.
   */

  traveloptimMap.fitBounds(
    radiusCircle.getBounds(),
    {
      padding: [
        30,
        30
      ]
    }
  );


  /*
   * Ouvrir le popup
   * du nouveau résultat.
   */

  marker.openPopup();


  /*
   * Mettre le nom sélectionné
   * dans le champ de recherche.
   */

  if (
    mapPlaceSearch
  ) {

    mapPlaceSearch.value =
      displayName;

  }


  /*
   * Fermer les suggestions.
   */

  if (
    mapSearchResults
  ) {

    mapSearchResults.innerHTML =
      "";

    mapSearchResults.hidden =
      true;

  }


  /*
   * Afficher les lieux TravelOptim
   * proches + station de métro.
   */

  findNearbyMapPlaces(
    position
  );

}


/* =========================================================
   30.11 CARTE — GÉOLOCALISATION ET PROXIMITÉ
========================================================= */

let mapUserLocationMarker =
  null;

let mapUserRadiusCircle =
  null;


const MAP_NEARBY_RADIUS =
  1000;

  function locateMapUser() {

    if (
      !navigator.geolocation
    ) {
  
      alert(
        getText(
          "mapGeolocationUnavailable"
        )
      );
  
      return;
  
    }
  
  
    navigator.geolocation.getCurrentPosition(
  
      handleMapUserLocation,
  
      handleMapLocationError,
  
      {
        enableHighAccuracy:
          true,
  
        timeout:
          10000,
  
        maximumAge:
          30000
      }
  
    );
  
  }

  function handleMapUserLocation(
    position
  ) {
  
    const latitude =
      position.coords.latitude;
  
    const longitude =
      position.coords.longitude;
  
  
    const userLatLng =
      L.latLng(
        latitude,
        longitude
      );
  
  
    /*
     * Supprimer l'ancienne position.
     */
  
    if (
      mapUserLocationMarker
    ) {
  
      traveloptimMap.removeLayer(
        mapUserLocationMarker
      );
  
    }
  
  
    if (
      mapUserRadiusCircle
    ) {
  
      traveloptimMap.removeLayer(
        mapUserRadiusCircle
      );
  
    }
  
  
    /*
     * Position utilisateur.
     */
  
    mapUserLocationMarker =
      L.marker(
        userLatLng
      )
        .addTo(
          traveloptimMap
        )
        .bindPopup(
          getText(
            "mapYourPosition"
          )
        );
  
  
    /*
     * Cercle de 1000 m.
     */
  
    mapUserRadiusCircle =
      L.circle(
        userLatLng,
        {
  
          radius:
            MAP_NEARBY_RADIUS
  
        }
      )
        .addTo(
          traveloptimMap
        );
  
  
    traveloptimMap.fitBounds(
      mapUserRadiusCircle
        .getBounds(),
      {
        padding:
          [20, 20]
      }
    );
  
  
    findNearbyMapPlaces(
      userLatLng
    );
  
  }

  function findNearestMetroStation(
    referenceLatLng
  ) {
  
    if (
      !referenceLatLng ||
      !mapMetroStations.length
    ) {
      return null;
    }
  
  
    let nearestStation =
      null;
  
    let nearestDistance =
      Infinity;
  
  
    mapMetroStations.forEach(
      station => {
  
        if (
          !station.coordinates
        ) {
          return;
        }
  
  
        const distance =
          referenceLatLng.distanceTo(
            station.coordinates
          );
  
  
        if (
          distance < nearestDistance
        ) {
  
          nearestDistance =
            distance;
  
          nearestStation =
            station;
  
        }
  
      }
    );
  
  
    if (
      !nearestStation
    ) {
      return null;
    }
  
  
    return {
      station:
        nearestStation,
  
      distance:
        nearestDistance
    };
  
  }
  
  function findNearbyMapPlaces(
    referenceLatLng,
    excludedEntry = null
  ) {
  
    const nearbyPlaces =
      mapPlaceMarkers
        .filter(
          entry =>
            entry !== excludedEntry
        )
        .map(
          entry => {
  
            const placeLatLng =
              entry.marker.getLatLng();
  
  
            const distance =
              referenceLatLng.distanceTo(
                placeLatLng
              );
  
  
            return {
              entry,
              distance
            };
  
          }
        )
        .filter(
          result =>
            result.distance <=
            MAP_NEARBY_RADIUS
        )
        .sort(
          (
            first,
            second
          ) =>
            first.distance -
            second.distance
        );
  
  
    const nearestMetro =
      findNearestMetroStation(
        referenceLatLng
      );
  
  
    renderNearbyMapPlaces(
      nearbyPlaces,
      nearestMetro
    );
  
  }

  function renderNearbyMapPlaces(
    nearbyPlaces,
    nearestMetro = null
  )
  
  {
  
    mapNearbyResults.innerHTML =
      "";

      if (
        nearestMetro
      ) {
      
        const metroButton =
          document.createElement(
            "button"
          );
      
      
        metroButton.type =
          "button";
      
      
        metroButton.className =
          "map-nearby-result-button map-nearest-metro";
      
      
        const metroName =
          nearestMetro.station.name;
      
      
        metroButton.innerHTML =
          `
            <span>
              🚇 ${metroName}
            </span>
      
            <span class="map-nearby-distance">
              ${formatMapDistance(
                nearestMetro.distance
              )}
            </span>
          `;
      
      
        metroButton.addEventListener(
          "click",
          () => {
      
            const station =
              nearestMetro.station;
      
      
            if (
              station.marker &&
              !traveloptimMap.hasLayer(
                station.marker
              )
            ) {
      
              station.marker.addTo(
                traveloptimMap
              );
      
            }
      
      
            traveloptimMap.setView(
              station.coordinates,
              17
            );
      
      
            if (
              station.marker
            ) {
      
              setTimeout(
                () =>
                  station.marker.openPopup(),
                200
              );
      
            }
      
          }
        );
      
      
        mapNearbyResults.appendChild(
          metroButton
        );
      
      }
  
  
    if (
      nearbyPlaces.length === 0
    ) {
  
      mapNearbyResults.innerHTML =
        `<div class="map-search-empty">
          ${getText("mapNoNearbyPlaces")}
        </div>`;
  
      mapNearbySection.hidden =
        false;
  
      return;
  
    }
  
  
    nearbyPlaces.forEach(
      result => {
  
        const button =
          document.createElement(
            "button"
          );
  
  
        button.type =
          "button";
  
  
        button.className =
          "map-nearby-result-button";
  
  
        const name =
          document.createElement(
            "span"
          );
  
  
        name.textContent =
          getMapMarkerDisplayName(
            result.entry
          );
  
  
        const distance =
          document.createElement(
            "span"
          );
  
  
        distance.className =
          "map-nearby-distance";
  
  
        distance.textContent =
          formatMapDistance(
            result.distance
          );
  
  
        button.append(
          name,
          distance
        );
  
  
        button.addEventListener(
          "click",
          () => {
        
            focusMapMarker(
              result.entry,
              false
            );
        
          }
        );
  
  
        mapNearbyResults.appendChild(
          button
        );
  
      }
    );
  
  
    mapNearbySection.hidden =
      false;
  
  }

  function formatMapDistance(
    distance
  ) {
  
    if (
      distance < 1000
    ) {
  
      return (
        Math.round(
          distance
        ) +
        " m"
      );
  
    }
  
  
    return (
      (
        distance /
        1000
      ).toFixed(1) +
      " km"
    );
  
  }

  function handleMapLocationError(
    error
  ) {
  
    console.error(
      "Erreur de géolocalisation :",
      error
    );
  
  
    alert(
      getText(
        "mapGeolocationError"
      )
    );
  
  }

  /* =========================================================
   30.12 — CARTE — ITINÉRAIRES
========================================================= */


/* =========================================================
   30.12.1 — ACCORDÉON ITINÉRAIRES
========================================================= */

function toggleMapRoutesAccordion() {

  if (
    !routesMapAccordionButton ||
    !routesMapControlPanel
  ) {

    return;

  }


  const isOpen =
    routesMapAccordionButton
      .getAttribute(
        "aria-expanded"
      ) ===
      "true";


  routesMapAccordionButton
    .setAttribute(
      "aria-expanded",
      String(!isOpen)
    );


  routesMapAccordionButton
    .classList.toggle(
      "is-open",
      !isOpen
    );


  routesMapControlPanel.hidden =
    isOpen;

}


/* =========================================================
   30.12.2 — AFFICHER LES ITINÉRAIRES DANS LE MENU
========================================================= */

function renderMapRouteControls() {

  if (
    !mapRoutesPlaceholder ||
    !Array.isArray(itineraires)
  ) {

    return;

  }


  mapRoutesPlaceholder.innerHTML =
    "";


  itineraires.forEach(
    route => {

      const label =
        document.createElement(
          "label"
        );


      label.className =
        "map-control-option";


      const checkbox =
        document.createElement(
          "input"
        );


      checkbox.type =
        "checkbox";


      checkbox.dataset.routeId =
        route.id;


      /*
       * Restaurer l'état de la case
       * après un changement de langue.
       */

      checkbox.checked =
        activeMapRouteIds.has(
          route.id
        );


      checkbox.addEventListener(
        "change",
        () => {

          if (
            checkbox.checked
          ) {

            activeMapRouteIds.add(
              route.id
            );

          }

          else {

            activeMapRouteIds.delete(
              route.id
            );

          }


          filterMapPlacesByRoutes();

          filterMapStationsByRoutes();

          updateMapRouteLayers();

        }
      );


      const title =
        document.createElement(
          "span"
        );


      title.textContent =
        route.name[
          currentLanguage
        ];


      label.appendChild(
        checkbox
      );


      label.appendChild(
        title
      );


      mapRoutesPlaceholder.appendChild(
        label
      );

    }
  );

}

/* =========================================================
   30.12.3 — FILTRER LES LIEUX PAR ITINÉRAIRE
========================================================= */

function filterMapPlacesByRoutes() {

  if (
    !traveloptimMap
  ) {

    return;

  }


  /*
   * Aucun itinéraire sélectionné :
   * restaurer les filtres Lieux normaux.
   */

  if (
    activeMapRouteIds.size === 0
  ) {

    updatePlaceFilters();

    return;

  }


  /*
   * Construire la liste unique
   * de tous les placeId appartenant
   * aux itinéraires sélectionnés.
   */

  const activePlaceIds =
    new Set();


  itineraires.forEach(
    route => {

      if (
        !activeMapRouteIds.has(
          route.id
        )
      ) {

        return;

      }


      route.steps.forEach(
        step => {

          if (
            step.placeId
          ) {

            activePlaceIds.add(
              step.placeId
            );

          }

        }
      );

    }
  );


  /*
   * Afficher uniquement les marqueurs
   * dont l'ID appartient aux itinéraires.
   */

  mapPlaceMarkers.forEach(
    entry => {

      const shouldBeVisible =
        activePlaceIds.has(
          entry.place.id
        );


      if (
        shouldBeVisible
      ) {

        if (
          !traveloptimMap.hasLayer(
            entry.marker
          )
        ) {

          entry.marker.addTo(
            traveloptimMap
          );

        }

      }

      else {

        if (
          traveloptimMap.hasLayer(
            entry.marker
          )
        ) {

          traveloptimMap.removeLayer(
            entry.marker
          );

        }

      }

    }
  );

}

/* =========================================================
   30.12.4 — FILTRER LES STATIONS PAR ITINÉRAIRE
========================================================= */

function filterMapStationsByRoutes() {

  if (
    !traveloptimMap
  ) {

    return;

  }


  /*
   * Aucun itinéraire sélectionné :
   * restaurer le comportement normal
   * du filtre Métro.
   */

  if (
    activeMapRouteIds.size === 0
  ) {

    toggleMetroStations();

    return;

  }


  /*
   * En mode itinéraire,
   * on masque d'abord la couche
   * complète des stations.
   */

  if (
    metroStationsLayer &&
    traveloptimMap.hasLayer(
      metroStationsLayer
    )
  ) {

    traveloptimMap.removeLayer(
      metroStationsLayer
    );

  }


  /*
   * Construire la liste unique
   * des stations nécessaires.
   */

  const activeStationNames =
    new Set();


  itineraires.forEach(
    route => {

      if (
        !activeMapRouteIds.has(
          route.id
        )
      ) {

        return;

      }


      /*
       * Station de départ.
       */

      if (
        route.startMetro?.station
      ) {

        activeStationNames.add(
          route.startMetro.station
        );

      }


      /*
       * Station d'arrivée.
       */

      if (
        route.endMetro?.station
      ) {

        activeStationNames.add(
          route.endMetro.station
        );

      }


      /*
       * Stations des éventuels
       * trajets intermédiaires en métro.
       */

      route.steps.forEach(
        step => {

          const next =
            step.next;


          if (
            next?.mode !== "metro"
          ) {

            return;

          }


          if (
            next.fromStation?.station
          ) {

            activeStationNames.add(
              next.fromStation.station
            );

          }


          if (
            next.toStation?.station
          ) {

            activeStationNames.add(
              next.toStation.station
            );

          }

        }
      );

    }
  );


  /*
   * Afficher uniquement
   * les stations nécessaires.
   */

  mapMetroStations.forEach(
    station => {

      const shouldBeVisible =
        activeStationNames.has(
          station.name
        );


      if (
        shouldBeVisible
      ) {

        if (
          !traveloptimMap.hasLayer(
            station.marker
          )
        ) {

          station.marker.addTo(
            traveloptimMap
          );

        }

      }

      else {

        if (
          traveloptimMap.hasLayer(
            station.marker
          )
        ) {

          traveloptimMap.removeLayer(
            station.marker
          );

        }

      }

    }
  );

}

/* =========================================================
   30.12.5 — CHARGER LE GEOJSON DES ITINÉRAIRES
========================================================= */

async function loadMapRoutesGeoJSON() {

  if (
    mapRoutesGeoJSONData
  ) {

    return;

  }


  try {

    const response =
      await fetch(
        "itineraires.geojson"
      );


    if (
      !response.ok
    ) {

      throw new Error(
        "Impossible de charger itineraires.geojson"
      );

    }


    mapRoutesGeoJSONData =
      await response.json();


    console.log(
      "Itinéraires GeoJSON chargés :",
      mapRoutesGeoJSONData
    );

  }

  catch (
    error
  ) {

    console.error(
      "Erreur itinéraires GeoJSON :",
      error
    );

  }

}

/* =========================================================
   30.12.6 — CRÉER LE TRACÉ D'UN ITINÉRAIRE
========================================================= */

function createMapRouteLayer(
  routeId
) {

  if (
    !traveloptimMap ||
    !mapRoutesGeoJSONData
  ) {

    return null;

  }


  const group =
    mapRoutesGeoJSONData.groups
      ?.find(
        item =>
          item.routeId ===
          routeId
      );


  if (
    !group
  ) {

    console.warn(
      "Groupe GeoJSON introuvable :",
      routeId
    );

    return null;

  }


  /*
   * Ne conserver que les tracés.
   * Les Point du GeoJSON sont ignorés.
   */

  const routeFeatures =
    mapRoutesGeoJSONData.features
      .filter(
        feature =>

          feature.properties?.group ===
            group.id &&

          feature.geometry?.type ===
            "LineString"

      );


  if (
    routeFeatures.length === 0
  ) {

    console.warn(
      "Aucun tracé pour :",
      routeId
    );

    return null;

  }


  const routeGeoJSON = {

    type:
      "FeatureCollection",

    features:
      routeFeatures

  };


  return L.geoJSON(
    routeGeoJSON,
    {

      style:
        feature => {

          const featureTitle =
            feature.properties?.title ||
            "";


          /*
           * Détecter les fragments métro :
           *
           * L1
           * L2
           * L5
           * L10
           * LR
           * etc.
           */

          const metroMatch =
            featureTitle.match(
              /^L(\d+|R)$/
            );


          if (
            metroMatch
          ) {

            let lineNumber =
              metroMatch[1];


            /*
             * Dans le GeoJSON :
             * LR
             *
             * Dans TravelOptim :
             * R
             */

            if (
              lineNumber === "R"
            ) {

              lineNumber =
                "R";

            }


            const metroColor =
              METRO_LINES[
                lineNumber
              ]?.color ||
              "#333333";


            /*
             * Fragment métro :
             * couleur de la ligne
             * + trait continu.
             */

            return {

              color:
                metroColor,

              weight:
                6,

              opacity:
                0.95,

              lineCap:
                "round",

              lineJoin:
                "round"

            };

          }


          /*
           * Tout autre LineString
           * est considéré comme
           * parcours à pied.
           */

          return {

            color:
              "#3AA6B9",

            weight:
              5,

            opacity:
              0.9,

            dashArray:
              "8 8",

            lineCap:
              "round",

            lineJoin:
              "round"

          };

        }

    }
  );

}

/* =========================================================
   30.12.7 — AFFICHER LES TRACÉS SÉLECTIONNÉS
========================================================= */

function updateMapRouteLayers() {

  if (
    !traveloptimMap ||
    !mapRoutesGeoJSONData
  ) {

    return;

  }


  /*
   * Parcourir tous les groupes
   * disponibles dans le GeoJSON.
   */

  mapRoutesGeoJSONData.groups
    ?.forEach(
      group => {

        const routeId =
          group.routeId;


        if (
          !routeId
        ) {

          return;

        }


        /*
         * Créer la couche une seule fois.
         */

        if (
          !mapRouteLayers[
            routeId
          ]
        ) {

          mapRouteLayers[
            routeId
          ] =
            createMapRouteLayer(
              routeId
            );

        }


        const layer =
          mapRouteLayers[
            routeId
          ];


        if (
          !layer
        ) {

          return;

        }


        /*
         * Itinéraire sélectionné :
         * afficher son tracé.
         */

        if (
          activeMapRouteIds.has(
            routeId
          )
        ) {

          if (
            !traveloptimMap.hasLayer(
              layer
            )
          ) {

            layer.addTo(
              traveloptimMap
            );

          }

        }


        /*
         * Itinéraire non sélectionné :
         * masquer son tracé.
         */

        else {

          if (
            traveloptimMap.hasLayer(
              layer
            )
          ) {

            traveloptimMap.removeLayer(
              layer
            );

          }

        }

      }
    );

}

/* =========================================================
   31. À PROPOS
========================================================= */

function showAbout() {

  hideAllViews();


  aboutView.hidden =
    false;


  showUniversalHeader(
    "exploreMadrid",
    showWelcome
  );


  updateAboutTexts();

}


/* =========================================================
   32. TEXTES DES VUES
========================================================= */


/* =========================================================
   32.1 TEXTES — ACCUEIL
========================================================= */

function updateWelcomeTexts() {

  welcomeTitle.textContent =
    getText("welcome");


  welcomeExploreButton.textContent =
    getText("exploreMadrid");


  welcomeAboutButton.textContent =
    getText("about");

}


/* =========================================================
   32.2 TEXTES — MENU PRINCIPAL
========================================================= */

function updateHomeTexts() {

  homeBackButton.textContent =
    `← ${getText("homePage")}`;


  homeTitle.textContent =
    getText("exploreMadrid");


  homeGuideTitle.textContent =
    getText("guide");


  homeRoutesTitle.textContent =
    getText("routes");


  homeMapTitle.textContent =
    getText("interactiveMap");


    homePlanningTitle.textContent =
    getText("planning");

}

/* =========================================================
   32.3 TEXTES — PLANIFICATION
========================================================= */


/*
 * Met à jour un texte de la vue
 * Planifier mon séjour à partir
 * de son ID et de sa clé UI_TEXT.
 */

function setPlanningText(
  elementId,
  textKey
) {

  const element =
    document.getElementById(
      elementId
    );

  if (
    element
  ) {

    element.textContent =
      getText(
        textKey
      );

  }

}


/*
 * Met à jour tous les textes
 * de la vue Planifier mon séjour.
 */


function updatePlanningTexts() {

  if (planningTitle) {
    planningTitle.textContent =
      getText("planningTitle");
  }

  if (planningIntroText) {
    planningIntroText.textContent =
      getText("planningIntroText");
  }

  if (planningExpertiseText) {
    planningExpertiseText.textContent =
      getText("planningExpertiseText");
  }

  if (planningInvitationTitle) {
    planningInvitationTitle.textContent =
      getText("planningInvitationTitle");
  }

  if (planningInvitationText) {
    planningInvitationText.textContent =
      getText("planningInvitationText");
  }

  if (planningExampleLabel) {
    planningExampleLabel.textContent =
      getText("planningExampleLabel");
  }

  if (planningExampleTitle) {
    planningExampleTitle.textContent =
      getText("planningExampleTitle");
  }

  if (planningExamplePlaceholder) {
    planningExamplePlaceholder.textContent =
      getText("planningExamplePlaceholder");
  }

  if (planningExampleText) {
    planningExampleText.textContent =
      getText("planningExampleText");
  }

  if (planningExampleButton) {
    planningExampleButton.textContent =
      getText("planningExampleButton");
  }

  if (planningExampleNote) {
    planningExampleNote.textContent =
      getText("planningExampleNote");
  }

  if (planningProcessTitle) {
    planningProcessTitle.textContent =
      getText("planningProcessTitle");
  }


  for (
    let stepNumber = 1;
    stepNumber <= 5;
    stepNumber += 1
  ) {

    const stepTitle =
      document.getElementById(
        `planning-step-${stepNumber}-title`
      );

    const stepText =
      document.getElementById(
        `planning-step-${stepNumber}-text`
      );


    if (stepTitle) {

      stepTitle.textContent =
        getText(
          `planningStep${stepNumber}Title`
        );

    }


    if (stepText) {

      stepText.textContent =
        getText(
          `planningStep${stepNumber}Text`
        );

    }

  }


  if (planningPriceLabel) {
    planningPriceLabel.textContent =
      getText("planningPriceLabel");
  }

  if (planningPriceValue) {
    planningPriceValue.textContent =
      getText("planningPriceValue");
  }

  if (planningPriceUnit) {
    planningPriceUnit.textContent =
      getText("planningPriceUnit");
  }

  if (planningFreeRequest) {
    planningFreeRequest.textContent =
      getText("planningFreeRequest");
  }

  if (planningCtaTitle) {
    planningCtaTitle.textContent =
      getText("planningCtaTitle");
  }

  if (planningStartButton) {
    planningStartButton.textContent =
      getText("planningStartButton");
  }

  if (planningReturnButton) {
    planningReturnButton.textContent =
      getText("planningReturnButton");
  }

  if (planningFormTitle) {
    planningFormTitle.textContent =
      getText("planningFormTitle");
  }

  if (planningFormPlaceholder) {
    planningFormPlaceholder.textContent =
      getText("planningFormPlaceholder");

      renderPlanningFavorites();
  }

 


/* =========================================================
   FORMULAIRE DE PLANIFICATION
========================================================= */

setPlanningText(
  "planning-stay-title",
  "planningStayTitle"
);

setPlanningText(
  "planning-name-label",
  "planningNameLabel"
);

setPlanningText(
  "planning-email-label",
  "planningEmailLabel"
);

setPlanningText(
  "planning-arrival-date-label",
  "planningArrivalDateLabel"
);

setPlanningText(
  "planning-departure-date-label",
  "planningDepartureDateLabel"
);


/* Arrivée */

setPlanningText(
  "planning-arrival-title",
  "planningArrivalTitle"
);

setPlanningText(
  "planning-arrival-time-label",
  "planningArrivalTimeLabel"
);

setPlanningText(
  "planning-arrival-mode-label",
  "planningArrivalModeLabel"
);

setPlanningText(
  "planning-arrival-place-label",
  "planningArrivalPlaceLabel"
);


/* Départ */

setPlanningText(
  "planning-departure-title",
  "planningDepartureTitle"
);

setPlanningText(
  "planning-departure-time-label",
  "planningDepartureTimeLabel"
);

setPlanningText(
  "planning-departure-mode-label",
  "planningDepartureModeLabel"
);

setPlanningText(
  "planning-departure-place-label",
  "planningDeparturePlaceLabel"
);


/* Transport */

[
  "arrival",
  "departure"
].forEach(
  type => {

    setPlanningText(
      `planning-${type}-mode-empty`,
      "planningModeEmpty"
    );

    setPlanningText(
      `planning-${type}-mode-plane`,
      "planningModePlane"
    );

    setPlanningText(
      `planning-${type}-mode-train`,
      "planningModeTrain"
    );

    setPlanningText(
      `planning-${type}-mode-bus`,
      "planningModeBus"
    );

    setPlanningText(
      `planning-${type}-mode-car`,
      "planningModeCar"
    );

    setPlanningText(
      `planning-${type}-mode-other`,
      "planningModeOther"
    );

  }
);


/* Hébergement */

setPlanningText(
  "planning-accommodation-title",
  "planningAccommodationTitle"
);

setPlanningText(
  "planning-accommodation-label",
  "planningAccommodationLabel"
);

setPlanningText(
  "planning-accommodation-help",
  "planningAccommodationHelp"
);


/* Voyageurs */

setPlanningText(
  "planning-travelers-title",
  "planningTravelersTitle"
);

setPlanningText(
  "planning-adults-label",
  "planningAdultsLabel"
);

setPlanningText(
  "planning-children-label",
  "planningChildrenLabel"
);

setPlanningText(
  "planning-first-visit-title",
  "planningFirstVisitTitle"
);

setPlanningText(
  "planning-first-visit-yes",
  "planningYes"
);

setPlanningText(
  "planning-first-visit-no",
  "planningNo"
);


/* Façon de voyager */

setPlanningText(
  "planning-travel-style-title",
  "planningTravelStyleTitle"
);

setPlanningText(
  "planning-pace-title",
  "planningPaceTitle"
);

setPlanningText(
  "planning-pace-relaxed",
  "planningPaceRelaxed"
);

setPlanningText(
  "planning-pace-balanced",
  "planningPaceBalanced"
);

setPlanningText(
  "planning-pace-intensive",
  "planningPaceIntensive"
);

setPlanningText(
  "planning-budget-label",
  "planningBudgetLabel"
);


/* Favoris */

setPlanningText(
  "planning-favorites-title",
  "planningFavoritesTitle"
);

setPlanningText(
  "planning-favorites-choice-title",
  "planningFavoritesChoiceTitle"
);

setPlanningText(
  "planning-favorites-choice-text",
  "planningFavoritesChoiceText"
);


/* Demandes particulières */

setPlanningText(
  "planning-request-title",
  "planningRequestTitle"
);

setPlanningText(
  "planning-request-label",
  "planningRequestLabel"
);


/* Envoi */

setPlanningText(
  "planning-form-reminder",
  "planningFormReminder"
);

setPlanningText(
  "planning-submit-button",
  "planningSubmitButton"
);

setPlanningText(
  "planning-success-title",
  "planningSuccessTitle"
);

setPlanningText(
  "planning-success-text",
  "planningSuccessText"
);

setPlanningText(
  "planning-success-email",
  "planningSuccessEmail"
);

setPlanningText(
  "planning-success-blog-text",
  "planningSuccessBlogText"
);

setPlanningText(
  "planning-success-blog-button",
  "planningSuccessBlogButton"
);

}


/* =========================================================
   32.3.1 PLANIFICATION — ÂGE DES ENFANTS
========================================================= */

function renderPlanningChildrenAges() {

  if (
    !planningChildren ||
    !planningChildrenAges ||
    !planningChildrenAgesGrid
  ) {
    return;
  }

  const childrenCount =
    Math.max(
      0,
      Number(planningChildren.value) || 0
    );

  if (childrenCount === 0) {

    planningChildrenAges.hidden =
      true;

    planningChildrenAgesGrid.innerHTML =
      "";

    return;
  }

  planningChildrenAges.hidden =
    false;


  const previousValues =
    Array.from(
      planningChildrenAgesGrid.querySelectorAll(
        "select"
      )
    ).map(
      select => select.value
    );


  planningChildrenAgesGrid.innerHTML =
    "";


  for (
    let index = 0;
    index < childrenCount;
    index++
  ) {

    const field =
      document.createElement(
        "div"
      );

      field.className =
      "planning-field planning-child-age-field";


    const label =
      document.createElement(
        "label"
      );

    label.htmlFor =
      `planning-child-age-${index + 1}`;

    label.textContent =
      currentLanguage === "en"
        ? `Child ${index + 1}`
        : `Enfant ${index + 1}`;


    const select =
      document.createElement(
        "select"
      );

    select.id =
      `planning-child-age-${index + 1}`;

    select.name =
      `childAge${index + 1}`;

    select.required =
      true;


    const emptyOption =
      document.createElement(
        "option"
      );

    emptyOption.value =
      "";

    emptyOption.textContent =
      currentLanguage === "en"
        ? "Select age"
        : "Sélectionner l’âge";

    select.appendChild(
      emptyOption
    );


    const babyOption =
      document.createElement(
        "option"
      );

    babyOption.value =
      "0";

    babyOption.textContent =
      currentLanguage === "en"
        ? "Under 1 year"
        : "Moins de 1 an";

    select.appendChild(
      babyOption
    );


    for (
      let age = 1;
      age <= 17;
      age++
    ) {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        String(age);

      option.textContent =
        currentLanguage === "en"
          ? `${age} year${age > 1 ? "s" : ""}`
          : `${age} an${age > 1 ? "s" : ""}`;

      select.appendChild(
        option
      );
    }


    if (
      previousValues[index] !== undefined
    ) {

      select.value =
        previousValues[index];

    }


    field.appendChild(
      label
    );

    field.appendChild(
      select
    );

    planningChildrenAgesGrid.appendChild(
      field
    );
  }
}



/* =========================================================
   32.3.2 PLANIFICATION — FAVORIS TRAVELOPTIM
========================================================= */

function renderPlanningFavorites() {

  if (
    !planningFavoritesPreview
  ) {

    return;

  }


  const favoriteItems =
    getFavoriteItems();

    /*
 * Afficher ou masquer
 * la liste selon le choix
 * de l'utilisateur.
 */

const shouldShowFavorites =
!planningIncludeFavorites ||
planningIncludeFavorites.checked;


planningFavoritesPreview.hidden =
!shouldShowFavorites;

  const planningFavoritesData =
    document.getElementById(
      "planning-favorites-data"
    );


  if (
    planningFavoritesData
  ) {

    const shouldIncludeFavorites =
      planningIncludeFavorites &&
      planningIncludeFavorites.checked;


    const favoriteNames =
      favoriteItems
        .map(
          favoriteEntry =>
            getLocalizedValue(
              favoriteEntry.item.name
            )
        )
        .join(" | ");


    planningFavoritesData.value =
      shouldIncludeFavorites
        ? favoriteNames
        : "";

  }


  /*
   * Aucun favori enregistré.
   */

  if (
    favoriteItems.length === 0
  ) {

    planningFavoritesPreview.innerHTML =
      `
        <div class="planning-favorites-empty">
          ${getText("planningFavoritesEmpty")}
        </div>
      `;

    return;

  }


  /*
   * Compteur.
   */

  const countHTML =
    `
      <div class="planning-favorites-count">
        ${favoriteItems.length}
        ${getText("planningFavoritesCount")}
      </div>
    `;


  /*
   * Liste réelle des favoris TravelOptim.
   */

  const itemsHTML =
    favoriteItems
      .map(
        favoriteEntry => {

          const place =
            favoriteEntry.item;


          const name =
            getLocalizedValue(
              place.name
            );


          const icon =
            getPlanningFavoriteIcon(
              favoriteEntry.categoryKey
            );


          return `
            <div
              class="planning-favorite-row"
              data-favorite-id="${place.id}"
            >

              <span
                class="planning-favorite-icon"
                aria-hidden="true"
              >
                ${icon}
              </span>

              <span
                class="planning-favorite-name"
              >
                ${name}
              </span>

            </div>
          `;

        }
      )
      .join("");


  planningFavoritesPreview.innerHTML =
    countHTML +
    `
      <div class="planning-favorites-list">
        ${itemsHTML}
      </div>
    `;

}

function getPlanningFavoriteIcon(
  categoryKey
) {

  const icons = {

    incontournables:
      "⭐",

    places:
      "🏰",

    monuments:
      "🏛️",

    musees:
      "🎨",

    parcs:
      "🌳",

    operaFlamenco:
      "🎭",

    evenementsSportifs:
      "🏟️",

    gastronomie:
      "🍽️",

    panoramique:
      "📷",

    famille:
      "👨‍👩‍👧",

    shopping:
      "🛍️"

  };


  return (
    icons[categoryKey] ||
    "📍"
  );

}

/* =========================================================
   32.4 TEXTES — GUIDE
========================================================= */

function updateGuideTexts() {

  guideTitle.textContent =
    getText("guide");


  guideButtons.forEach(
    button => {

      const section =
        button.dataset.guideSection;


      const title =
        button.querySelector(
          ".guide-card-title"
        );


      if (!title) {
        return;
      }


      if (section === "voir") {

        title.textContent =
          getText("see");

      }


      else if (
        section === "faire"
      ) {

        title.textContent =
          getText("do");

      }


      else if (
        section === "quartiers"
      ) {

        title.textContent =
          getText("districts");

      }


      else if (
        section === "transport"
      ) {

        title.textContent =
          getText("transport");

      }


      else if (
        section === "favoris"
      ) {

        title.textContent =
          getText("favorites");

      }

    }
  );

}


/* =========================================================
   32.5 TEXTES — ITINÉRAIRES
========================================================= */

function updateRoutesTexts() {

  routesTitle.textContent =
    getText("routes");


  updateRoutesHint();

}


/* =========================================================
   32.6 TEXTES — CARTE
========================================================= */

function updateMapTexts() {

  mapTitle.textContent =
    getText(
      "interactiveMap"
    );

}


/* =========================================================
   32.7 TEXTES — À PROPOS
========================================================= */

function updateAboutTexts() {

  aboutTitle.textContent =
    getText("aboutTitle");

  aboutTagline.textContent =
    getText("aboutTagline");

  aboutText1.textContent =
    getText("aboutText1");

  aboutText2.textContent =
    getText("aboutText2");

  aboutText3.textContent =
    getText("aboutText3");

  aboutDestination.textContent =
    getText("aboutDestination");

  aboutCopyright.textContent =
    getText("aboutCopyright");

}


/* =========================================================
   33. TUILES DE CATÉGORIE
========================================================= */

function renderCategoryTiles(
  categories,
  container,
  parentView
) {

  container.innerHTML =
    "";


  Object.entries(
    categories
  )
    .forEach(
      ([
        key,
        category
      ]) => {

        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "category-card";


        button.innerHTML = `

          <img
            class="category-card-image"
            src="${category.image}"
            alt="${category.name[currentLanguage]}"
          >

          <span class="category-card-title">
            ${category.name[currentLanguage]}
          </span>

        `;


        button.addEventListener(
          "click",
          () => {

            openCategory(
              key,
              parentView
            );

          }
        );


        container.appendChild(
          button
        );

      }
    );

}


/* =========================================================
   34. OUVERTURE D'UNE CATÉGORIE
========================================================= */

function openCategory(
  categoryKey,
  parentView
) {

  const category =
    ALL_CATEGORIES[
      categoryKey
    ];


  if (!category) {
    return;
  }


  currentParentView =
    parentView;


  currentCategoryKey =
    categoryKey;


  currentItems =
    category.data;


  currentCardType =
    category.cardType;


  currentIndex =
    0;


  hideAllViews();


  categoryView.hidden =
    false;


  if (
    parentView === "voir"
  ) {

    showUniversalHeader(
      "see",
      showSeeCategories
    );

  }
  else {

    showUniversalHeader(
      "do",
      showDoCategories
    );

  }


  updateCategoryHeader();


  renderCards(
    true
  );

}


/* =========================================================
   35. EN-TÊTE DE CATÉGORIE
========================================================= */

function updateCategoryHeader() {

  if (
    currentCategoryKey ===
    "quartiers"
  ) {

    categoryTitle.textContent =
      getText("districts");

    return;

  }


  if (
    currentCategoryKey ===
    "transport"
  ) {

    categoryTitle.textContent =
      getText("transport");

    return;

  }


  if (
    currentCategoryKey ===
    "favoris"
  ) {

    categoryTitle.textContent =
      getText("favorites");

    return;

  }


  const category =
    ALL_CATEGORIES[
      currentCategoryKey
    ];


  if (!category) {
    return;
  }


  categoryTitle.textContent =
    category.name[
      currentLanguage
    ];

}


/* =========================================================
   36. FAVORIS — BOUTON VIDER
========================================================= */

function createClearFavoritesButton() {

  const oldButton =
    document.getElementById(
      "clear-favorites-button"
    );


  if (oldButton) {
    oldButton.remove();
  }


  if (
    favorites.size === 0
  ) {
    return;
  }


  const button =
    document.createElement(
      "button"
    );


  button.id =
    "clear-favorites-button";


  button.className =
    "clear-favorites-button";


  button.type =
    "button";


  button.textContent =
    currentLanguage === "fr"
      ? "Vider mes favoris"
      : "Clear my favorites";


  button.addEventListener(
    "click",
    () => {

      favorites.clear();


saveFavorites();


renderPlanningFavorites();


openFavorites();

    }
  );


  categoryTitle
    .insertAdjacentElement(
      "afterend",
      button
    );

}


/* =========================================================
   37. FAVORIS — AFFICHAGE
========================================================= */

function getFavoriteItems() {

  const favoriteItems =
    [];


  Object.entries(
    ALL_CATEGORIES
  )
    .forEach(
      ([
        categoryKey,
        category
      ]) => {

        category.data.forEach(
          item => {

            const favoriteKey =
              `${categoryKey}::${item.id}`;


            if (
              favorites.has(
                favoriteKey
              )
            ) {

              favoriteItems.push({
                item,
                categoryKey,
                cardType:
                  category.cardType
              });

            }

          }
        );

      }
    );


  return favoriteItems;

}


function renderFavoriteCards(
  favoriteItems
) {

  cardsGrid.innerHTML =
    "";


  if (
    favoriteItems.length === 0
  ) {

    const clearButton =
      document.getElementById(
        "clear-favorites-button"
      );


    if (clearButton) {
      clearButton.remove();
    }


    cardsGrid.innerHTML = `

      <div class="favorites-empty">

        ${
          currentLanguage === "fr"
            ? "Vous n’avez encore ajouté aucun favori."
            : "You haven't added any favorites yet."
        }

      </div>

    `;


    carouselCounter.textContent =
      "";


    previewPrev.classList.add(
      "is-hidden"
    );


    previewNext.classList.add(
      "is-hidden"
    );


    previousButton.disabled =
      true;


    nextButton.disabled =
      true;


    flipHint.textContent =
      "";


    return;

  }


  favoriteItems.forEach(
    favoriteEntry => {

      const oldCategoryKey =
        currentCategoryKey;


      const oldCardType =
        currentCardType;


      currentCategoryKey =
        favoriteEntry.categoryKey;


      currentCardType =
        favoriteEntry.cardType;


      const card =
        createCard(
          favoriteEntry.item
        );


      card.dataset.sourceCategory =
        favoriteEntry.categoryKey;


      cardsGrid.appendChild(
        card
      );


      currentCategoryKey =
        oldCategoryKey;


      currentCardType =
        oldCardType;

    }
  );


  currentItems =
    favoriteItems.map(
      entry =>
        entry.item
    );


  currentIndex =
    0;


  updateHint();


  requestAnimationFrame(
    () => {

      requestAnimationFrame(
        () => {

          goToCurrentIndex(
            false
          );


          updateCarouselCounter();


          updateNeighborPreviews();


          updateDesktopArrows();

        }
      );

    }
  );

}


/* =========================================================
   38. HORAIRES
========================================================= */

function buildHoursHTML(
  item
) {

  if (!item.hours) {
    return "";
  }


  const url =
    item.hours.url ||
    item.officialUrl ||
    "";


  if (
    item.hours.type === "link" &&
    url
  ) {

    return `

      <a
        href="${url}"
        target="_blank"
        rel="noopener noreferrer"
        class="card-info-link"
      >
        ${item.hours[currentLanguage]} ↗
      </a>

    `;

  }


  return (
    item.hours[currentLanguage]
  );

}


/* =========================================================
   39. TARIFS
========================================================= */

function buildPriceHTML(
  item
) {

  if (!item.price) {
    return "";
  }


  const url =
    item.price.url ||
    item.officialUrl ||
    "";


  if (
    item.price.type === "link" &&
    url
  ) {

    return `

      <a
        href="${url}"
        target="_blank"
        rel="noopener noreferrer"
        class="card-info-link"
      >
        ${item.price[currentLanguage]} ↗
      </a>

    `;

  }


  return (
    item.price[currentLanguage]
  );

}


/* =========================================================
   40. PROGRAMMATION / RÉSERVATION
========================================================= */

function buildBookingHTML(
  item
) {

  if (
    item.booking &&
    item.booking.url
  ) {

    return `

      <a
        href="${item.booking.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="card-info-link"
      >
        ${item.booking[currentLanguage]} ↗
      </a>

    `;

  }


  const legacyUrl =
    item.hours?.url ||
    item.price?.url ||
    item.officialUrl ||
    "";


  if (legacyUrl) {

    return `

      <a
        href="${legacyUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="card-info-link"
      >
        ${getText("programme")} ↗
      </a>

    `;

  }


  return "";

}


/* =========================================================
   41. CRÉDIT PHOTO
========================================================= */

function buildPhotoCreditHTML(
  item
) {

  const photo =
    item.photo || {};


  const hasCredit =
    photo.author ||
    photo.source ||
    photo.license ||
    photo.url;


  if (!hasCredit) {

    return `

      <strong>
        ${getText("photoCredit")}
      </strong>

    `;

  }


  let html = `

    <strong>
      ${getText("photoCredit")}
    </strong>

  `;


  if (photo.author) {

    html +=
      `<br>${photo.author}`;

  }


  if (photo.source) {

    html +=
      `<br>${photo.source}`;

  }


  if (photo.license) {

    html +=
      `<br>${photo.license}`;

  }


  if (photo.url) {

    html += `

      <br>

      <a
        href="${photo.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${getText("source")}
      </a>

    `;

  }


  return html;

}


/* =========================================================
   42. FAVORI — BOUTON
========================================================= */

function getFavoriteKey(
  itemId
) {

  return (
    `${currentCategoryKey}::${itemId}`
  );

}


function buildFavoriteButtonHTML(
  item
) {

  const favoriteKey =
    getFavoriteKey(
      item.id
    );


  const isFavorite =
    favorites.has(
      favoriteKey
    );


  return `

    <button
      class="
        favorite-button
        ${
          isFavorite
            ? "is-favorite"
            : ""
        }
      "
      type="button"
      aria-label="${getText("favoriteAria")}"
      aria-pressed="${isFavorite}"
    >

      ${
        isFavorite
          ? "♥"
          : "♡"
      }

    </button>

  `;

}

/* =========================================================
   43. ROUTEUR DE CARD
========================================================= */

function createCard(
  item
) {

  switch (
    currentCardType
  ) {

    case "district":

      return createDistrictCard(
        item
      );


    case "transport":

      return createTransportCard(
        item
      );


    case "programme":

      return createProgrammeCard(
        item
      );


    case "editorial":

      return createEditorialCard(
        item
      );


    case "classic":
    default:

      return createClassicCard(
        item
      );

  }

}


/* =========================================================
   44. CARD CLASSIQUE
========================================================= */

function createClassicCard(
  item
) {

  const card =
    createCardElement(
      item
    );


  const hoursHTML =
    buildHoursHTML(
      item
    );


  const priceHTML =
    buildPriceHTML(
      item
    );


  const photoCreditHTML =
    buildPhotoCreditHTML(
      item
    );


  const highlightsHTML =
    item
      .highlights[
        currentLanguage
      ]
      .map(
        highlight =>
          `<li>${highlight}</li>`
      )
      .join("");


  card.innerHTML = `

    <div class="place-card-inner">

      <section class="place-card-front">

        ${buildCardImageHTML(
          item,
          photoCreditHTML
        )}

        <div class="card-title-area">

          <h2 class="card-title">
            ${item.name[currentLanguage]}
          </h2>

        </div>


        <div class="card-bottom">

          <div class="practical-info">

            ${buildInfoRow(
              "📍",
              item.district[currentLanguage]
            )}

            ${buildInfoRow(
              "🚇",
              item.metro
            )}

            ${buildInfoRow(
              "🕐",
              hoursHTML
            )}

            ${buildInfoRow(
              "€",
              priceHTML
            )}

          </div>


          <div class="favorite-area">

            ${buildFavoriteButtonHTML(
              item
            )}

            <span class="favorite-label">
              ${getText("favorite")}
            </span>

          </div>

        </div>

      </section>


      <section class="place-card-back">

        <h2 class="back-title">
          ${item.name[currentLanguage]}
        </h2>


        <p class="back-description">
          ${item.description[currentLanguage]}
        </p>


        <div class="back-section">

          <h3>
            ${getText("highlights")}
          </h3>

          <ul>
            ${highlightsHTML}
          </ul>

        </div>


        <div class="traveloptim-tip">

          <strong>
            ${getText("tip")}
          </strong>

          ${item.tip[currentLanguage]}

        </div>

      </section>

    </div>

  `;


  setupCardInteractions(
    card,
    item
  );


  return card;

}


/* =========================================================
   45. CARD PROGRAMME
========================================================= */

function createProgrammeCard(
  item
) {

  const card =
    createCardElement(
      item
    );


  card.classList.add(
    "programme-card"
  );


  const photoCreditHTML =
    buildPhotoCreditHTML(
      item
    );


  const bookingHTML =
    buildBookingHTML(
      item
    );


  const experienceHTML =
    item
      .experience[
        currentLanguage
      ]
      .map(
        experience =>
          `<li>${experience}</li>`
      )
      .join("");


  card.innerHTML = `

    <div class="place-card-inner">

      <section class="place-card-front">

        ${buildCardImageHTML(
          item,
          photoCreditHTML
        )}

        <div class="card-title-area">

          <h2 class="card-title">
            ${item.name[currentLanguage]}
          </h2>

        </div>


        <div class="card-bottom">

          <div class="practical-info">

            ${buildInfoRow(
              "📍",
              item.district[currentLanguage]
            )}

            ${buildInfoRow(
              "🚇",
              item.metro
            )}

            ${buildInfoRow(
              "🎭",
              item.activityType[currentLanguage]
            )}

            ${buildInfoRow(
              "⏱",
              item.duration[currentLanguage]
            )}

            ${buildInfoRow(
              "🎟",
              bookingHTML
            )}

          </div>


          <div class="favorite-area">

            ${buildFavoriteButtonHTML(
              item
            )}

            <span class="favorite-label">
              ${getText("favorite")}
            </span>

          </div>

        </div>

      </section>


      <section class="place-card-back">

        <h2 class="back-title">
          ${item.name[currentLanguage]}
        </h2>


        <p class="back-description">
          ${item.description[currentLanguage]}
        </p>


        <div class="back-section">

          <h3>
            ${getText("experience")}
          </h3>

          <ul>
            ${experienceHTML}
          </ul>

        </div>


        <div class="traveloptim-tip">

          <strong>
            ${getText("tip")}
          </strong>

          ${item.tip[currentLanguage]}

        </div>

      </section>

    </div>

  `;


  setupCardInteractions(
    card,
    item
  );


  return card;

}


/* =========================================================
   46. CARD ÉDITORIALE
========================================================= */

function createEditorialCard(
  item
) {

  const card =
    createCardElement(
      item
    );


  card.classList.add(
    "editorial-card"
  );


  const photoCreditHTML =
    buildPhotoCreditHTML(
      item
    );


  const itemsHTML =
    buildEditorialItemsHTML(
      item
    );


  card.innerHTML = `

    <div class="place-card-inner">

      <section class="place-card-front">

        <div class="card-image-wrapper">

          <img
            class="card-image"
            src="${item.image}"
            alt="${item.name[currentLanguage]}"
            loading="lazy"
          >


          <button
            class="photo-info-button"
            type="button"
            aria-label="${getText("photoAria")}"
            aria-expanded="false"
          >
            i
          </button>


          <div
            class="photo-credit"
            aria-hidden="true"
          >
            ${photoCreditHTML}
          </div>


          <div class="editorial-favorite">

            ${buildFavoriteButtonHTML(
              item
            )}

          </div>

        </div>


        <div class="card-title-area">

          <h2 class="card-title">
            ${item.name[currentLanguage]}
          </h2>

        </div>


        <div class="editorial-front-description">

          <p>
            ${item.description[currentLanguage]}
          </p>

        </div>

      </section>


      <section
        class="
          place-card-back
          editorial-card-back
        "
      >

        <h2 class="back-title">
          ${item.name[currentLanguage]}
        </h2>


        <div class="editorial-list">
          ${itemsHTML}
        </div>

      </section>

    </div>

  `;


  setupCardInteractions(
    card,
    item
  );


  return card;

}


/* =========================================================
   47. CARD QUARTIER
========================================================= */

function createDistrictCard(
  item
) {

  const card =
    createCardElement(
      item
    );


  card.classList.add(
    "district-card"
  );


  const photoCreditHTML =
    buildPhotoCreditHTML(
      item
    );


  const districtItems =
    getDistrictItems(
      item
    );


  const districtItemsHTML =
    buildDistrictItemsHTML(
      districtItems
    );


  card.innerHTML = `

    <div class="place-card-inner">

      <section class="place-card-front">

        <div class="card-image-wrapper">

          <img
            class="card-image"
            src="${item.image}"
            alt="${item.name[currentLanguage]}"
            loading="lazy"
          >


          <button
            class="photo-info-button"
            type="button"
            aria-label="${getText("photoAria")}"
            aria-expanded="false"
          >
            i
          </button>


          <div
            class="photo-credit"
            aria-hidden="true"
          >
            ${photoCreditHTML}
          </div>


          <div class="editorial-favorite">

            ${buildFavoriteButtonHTML(
              item
            )}

          </div>

        </div>


        <div class="card-title-area">

          <h2 class="card-title">
            ${item.name[currentLanguage]}
          </h2>

        </div>


        <div class="editorial-front-description">

          <p>
            ${item.description[currentLanguage]}
          </p>

        </div>

      </section>


      <section
        class="
          place-card-back
          editorial-card-back
          district-card-back
        "
      >

        <h2 class="back-title">
          ${item.name[currentLanguage]}
        </h2>


        <h3 class="district-see-title">

          ${
            currentLanguage === "fr"
              ? "À voir dans ce quartier"
              : "What to see in this neighbourhood"
          }

        </h3>


        <div class="editorial-list">
          ${districtItemsHTML}
        </div>

      </section>

    </div>

  `;


  setupCardInteractions(
    card,
    item
  );


  return card;

}


/* =========================================================
   48. CARD TRANSPORT
========================================================= */

function createTransportCard(
  item
) {

  if (
    item.type ===
    "metro-network"
  ) {

    return createMetroNetworkCard(
      item
    );

  }


  return createTransportEditorialCard(
    item
  );

}


/* =========================================================
   49. CARD TRANSPORT ÉDITORIALE
========================================================= */

function createTransportEditorialCard(
  item
) {

  const card =
    createCardElement(
      item
    );


  card.classList.add(
    "editorial-card",
    "transport-card"
  );


  const photoCreditHTML =
    buildPhotoCreditHTML(
      item
    );


  const itemsHTML =
    buildTransportItemsHTML(
      item
    );


  card.innerHTML = `

    <div class="place-card-inner">

      <section class="place-card-front">

        <div class="card-image-wrapper">

          <img
            class="card-image"
            src="${item.image}"
            alt="${item.name[currentLanguage]}"
            loading="lazy"
          >


          <button
            class="photo-info-button"
            type="button"
            aria-label="${getText("photoAria")}"
            aria-expanded="false"
          >
            i
          </button>


          <div
            class="photo-credit"
            aria-hidden="true"
          >
            ${photoCreditHTML}
          </div>

        </div>


        <div class="card-title-area">

          <h2 class="card-title">
            ${item.name[currentLanguage]}
          </h2>

        </div>


        <div class="editorial-front-description">

          <p>
            ${item.description[currentLanguage]}
          </p>

        </div>

      </section>


      <section
        class="
          place-card-back
          editorial-card-back
          transport-card-back
        "
      >

        <h2 class="back-title">
          ${item.name[currentLanguage]}
        </h2>


        <div class="editorial-list">
          ${itemsHTML}
        </div>

      </section>

    </div>

  `;


  setupCardInteractions(
    card,
    item
  );


  return card;

}


/* =========================================================
   50. TRANSPORT — LISTES ÉDITORIALES
========================================================= */

function buildTransportItemsHTML(
  card
) {

  if (!card.items) {
    return "";
  }


  return card.items
    .map(
      item => {

        const title =
          item.name
            ? getLocalizedValue(
                item.name
              )
            : item.line
              ? `${
                  currentLanguage === "fr"
                    ? "Ligne"
                    : "Line"
                } ${item.line}`
              : "";


        const connection =
          getLocalizedValue(
            item.connection
          );


        const price =
          getLocalizedValue(
            item.price
          );


        const note =
          getLocalizedValue(
            item.note ||
            item.usefulFor
          );


        const linkHTML =
          item.url
            ? `

              <a
                class="editorial-item-link"
                href="${item.url}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${getText(
                  "officialWebsite"
                )}
              </a>

            `
            : "";


        return `

          <article
            class="
              editorial-item
              transport-editorial-item
            "
          >

            <h3
              class="editorial-item-title"
            >
              ${title}
            </h3>


            ${
              connection
                ? `
                  <p class="transport-item-connection">
                    🚌 ${connection}
                  </p>
                `
                : ""
            }


            ${
              price
                ? `
                  <p class="transport-item-price">
                    🎟 ${price}
                  </p>
                `
                : ""
            }


            ${
              note
                ? `
                  <p class="editorial-item-note">
                    ${note}
                  </p>
                `
                : ""
            }


            ${linkHTML}

          </article>

        `;

      }
    )
    .join("");

}


/* =========================================================
   51. TRANSPORT — RÉSEAU MÉTRO DU GUIDE
========================================================= */

function createMetroNetworkCard(
  item
) {

  const card =
    createCardElement(
      item
    );


  card.classList.add(
    "editorial-card",
    "transport-card",
    "metro-network-card"
  );


  const photoCreditHTML =
    buildPhotoCreditHTML(
      item
    );


  const networkHTML =
    buildMetroNetworkHTML(
      item.network
    );


  card.innerHTML = `

    <div class="place-card-inner">

      <section class="place-card-front">

        <div class="card-image-wrapper">

          <img
            class="card-image"
            src="${item.image}"
            alt="${item.name[currentLanguage]}"
            loading="lazy"
          >


          <button
            class="photo-info-button"
            type="button"
            aria-label="${getText("photoAria")}"
            aria-expanded="false"
          >
            i
          </button>


          <div
            class="photo-credit"
            aria-hidden="true"
          >
            ${photoCreditHTML}
          </div>

        </div>


        <div class="card-title-area">

          <h2 class="card-title">
            ${item.name[currentLanguage]}
          </h2>

        </div>


        <div class="editorial-front-description">

          <p>
            ${item.description[currentLanguage]}
          </p>

        </div>

      </section>


      <section
        class="
          place-card-back
          metro-network-back
        "
      >

        <h2 class="back-title">
          ${item.name[currentLanguage]}
        </h2>


        <div class="metro-network-scroll">
          ${networkHTML}
        </div>

      </section>

    </div>

  `;


  setupCardInteractions(
    card,
    item
  );


  setupMetroNetworkInteractions(
    card
  );


  return card;

}


/* =========================================================
   51.1 STRUCTURE DU RÉSEAU MÉTRO
========================================================= */

function buildMetroNetworkHTML(
  network
) {

  if (
    !network ||
    !network.lines ||
    !network.stations
  ) {

    return "";

  }


  const lineBadgesHTML =
    buildMetroLineBadgesHTML(
      network.lines
    );


  const stationsHTML =
    network.stations
      .map(
        station =>
          buildMetroStationHTML(
            station,
            network.lines
          )
      )
      .join("");


  return `

    <div class="metro-network">

      <div class="metro-network-top">

        <div class="metro-network-label">
          Stations
        </div>

        <div class="metro-line-badges">
          ${lineBadgesHTML}
        </div>

      </div>


      <div class="metro-stations">
        ${stationsHTML}
      </div>


      <div class="metro-network-bottom">

        <div></div>

        <div class="metro-line-badges">
          ${lineBadgesHTML}
        </div>

      </div>

    </div>

  `;

}


/* =========================================================
   51.2 BADGES DES LIGNES
========================================================= */

function buildMetroLineBadgesHTML(
  lines
) {

  return lines
    .map(
      line => `

        <div
          class="metro-line-badge"
          style="
            --metro-line-color:
              ${line.color};
          "
        >
          ${line.id}
        </div>

      `
    )
    .join("");

}


/* =========================================================
   51.3 STATION DU RÉSEAU
========================================================= */

function buildMetroStationHTML(
  station,
  lines
) {

  const placesHTML =
    buildMetroStationPlacesHTML(
      station.places || []
    );


  const lineColumnsHTML =
    lines
      .map(
        line => {

          const servesStation =
            station.lines.includes(
              line.id
            );


          return `

            <div
              class="metro-track"
              style="
                --metro-line-color:
                  ${line.color};
              "
            >

              ${
                servesStation
                  ? `
                    <span
                      class="metro-station-marker"
                      aria-hidden="true"
                    ></span>
                  `
                  : ""
              }

            </div>

          `;

        }
      )
      .join("");


  return `

    <div
      class="metro-station-block"
      data-station-id="${station.id}"
    >

      <div class="metro-station-left">

        <button
          class="metro-station-button"
          type="button"
          aria-expanded="false"
        >

          <span class="metro-station-name">
            ${station.name}
          </span>

          <span
            class="metro-station-chevron"
            aria-hidden="true"
          >
            +
          </span>

        </button>


        <div
          class="metro-station-accordion"
          aria-hidden="true"
        >

          <div class="metro-station-places">
            ${placesHTML}
          </div>

        </div>

      </div>


      <div class="metro-station-lines">
        ${lineColumnsHTML}
      </div>

    </div>

  `;

}


/* =========================================================
   51.4 LIEUX ASSOCIÉS À UNE STATION
========================================================= */

function buildMetroStationPlacesHTML(
  placeIds
) {

  const stationPlaces =
    placeIds
      .map(
        placeId =>
          ALL_GUIDE_ITEMS.find(
            place =>
              place.id === placeId
          )
      )
      .filter(
        Boolean
      );


  if (
    stationPlaces.length === 0
  ) {

    return `

      <p class="metro-station-empty">

        ${
          currentLanguage === "fr"
            ? "Aucun lieu enregistré."
            : "No places registered."
        }

      </p>

    `;

  }


  return stationPlaces
    .map(
      place => `

        <div class="metro-station-place">

          <img
            class="metro-station-place-image"
            src="${place.image}"
            alt=""
            loading="lazy"
          >

          <span
            class="metro-station-place-name"
          >
            ${place.name[currentLanguage]}
          </span>

        </div>

      `
    )
    .join("");

}


/* =========================================================
   51.5 INTERACTIONS DU RÉSEAU MÉTRO
========================================================= */

function setupMetroNetworkInteractions(
  card
) {

  const stationBlocks =
    card.querySelectorAll(
      ".metro-station-block"
    );


  stationBlocks.forEach(
    stationBlock => {

      const button =
        stationBlock.querySelector(
          ".metro-station-button"
        );


      const accordion =
        stationBlock.querySelector(
          ".metro-station-accordion"
        );


      if (
        !button ||
        !accordion
      ) {

        return;

      }


      button.addEventListener(
        "click",
        event => {

          event.stopPropagation();


          const alreadyOpen =
            stationBlock.classList.contains(
              "is-open"
            );


          stationBlocks.forEach(
            otherBlock => {

              closeMetroStationAccordion(
                otherBlock
              );

            }
          );


          if (
            !alreadyOpen
          ) {

            openMetroStationAccordion(
              stationBlock
            );

          }

        }
      );


      accordion.addEventListener(
        "click",
        event => {

          event.stopPropagation();

        }
      );

    }
  );

}


/* =========================================================
   51.6 OUVRIR UNE STATION
========================================================= */

function openMetroStationAccordion(
  stationBlock
) {

  const button =
    stationBlock.querySelector(
      ".metro-station-button"
    );


  const accordion =
    stationBlock.querySelector(
      ".metro-station-accordion"
    );


  const chevron =
    stationBlock.querySelector(
      ".metro-station-chevron"
    );


  if (
    !accordion
  ) {

    return;

  }


  stationBlock.classList.add(
    "is-open"
  );


  accordion.style.maxHeight =
    `${accordion.scrollHeight}px`;


  accordion.setAttribute(
    "aria-hidden",
    "false"
  );


  if (
    button
  ) {

    button.setAttribute(
      "aria-expanded",
      "true"
    );

  }


  if (
    chevron
  ) {

    chevron.textContent =
      "−";

  }

}


/* =========================================================
   51.7 FERMER UNE STATION
========================================================= */

function closeMetroStationAccordion(
  stationBlock
) {

  const button =
    stationBlock.querySelector(
      ".metro-station-button"
    );


  const accordion =
    stationBlock.querySelector(
      ".metro-station-accordion"
    );


  const chevron =
    stationBlock.querySelector(
      ".metro-station-chevron"
    );


  if (
    !accordion
  ) {

    return;

  }


  stationBlock.classList.remove(
    "is-open"
  );


  accordion.style.maxHeight =
    "0px";


  accordion.setAttribute(
    "aria-hidden",
    "true"
  );


  if (
    button
  ) {

    button.setAttribute(
      "aria-expanded",
      "false"
    );

  }


  if (
    chevron
  ) {

    chevron.textContent =
      "+";

  }

}


/* =========================================================
   52. QUARTIERS — LIEUX
========================================================= */

function getDistrictItems(
  district
) {

  return ALL_SEE_ITEMS.filter(
    item =>
      item.district &&
      item.district.fr ===
        district.district
  );

}


function buildDistrictItemsHTML(
  items
) {

  return items
    .map(
      item => `

        <article
          class="
            editorial-item
            district-item
          "
        >

          <h3 class="editorial-item-title">
            ${item.name[currentLanguage]}
          </h3>


          <p class="editorial-item-note">
            ${item.description[currentLanguage]}
          </p>


          <p class="editorial-item-transport">
            🚇 ${item.metro}
          </p>

        </article>

      `
    )
    .join("");

}


/* =========================================================
   53. CARD — ÉLÉMENT DE BASE
========================================================= */

function createCardElement(
  item
) {

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "place-card";


  card.dataset.itemId =
    item.id;


  card.dataset.category =
    currentCategoryKey;


  card.setAttribute(
    "tabindex",
    "0"
  );


  card.setAttribute(
    "aria-label",
    item.name[currentLanguage]
  );


  return card;

}


/* =========================================================
   53.1 IMAGE DE BASE D'UNE CARD
========================================================= */

function buildCardImageHTML(
  item,
  photoCreditHTML
) {

  return `

    <div class="card-image-wrapper">

      <img
        class="card-image"
        src="${item.image}"
        alt="${item.name[currentLanguage]}"
        loading="lazy"
      >


      <button
        class="photo-info-button"
        type="button"
        aria-label="${getText("photoAria")}"
        aria-expanded="false"
      >
        i
      </button>


      <div
        class="photo-credit"
        aria-hidden="true"
      >
        ${photoCreditHTML}
      </div>

    </div>

  `;

}


/* =========================================================
   53.2 LIGNE D'INFORMATION
========================================================= */

function buildInfoRow(
  icon,
  content
) {

  if (
    !content
  ) {

    return "";

  }


  return `

    <div class="info-row">

      <span class="info-icon">
        ${icon}
      </span>

      <span>
        ${content}
      </span>

    </div>

  `;

}


/* =========================================================
   54. CONTENU ÉDITORIAL
========================================================= */

function buildEditorialItemsHTML(
  card
) {

  if (
    !card.items
  ) {

    return "";

  }


  return card.items
    .map(
      item =>
        buildEditorialItemHTML(
          card.type,
          item
        )
    )
    .join("");

}


function buildEditorialItemHTML(
  type,
  item
) {

  if (
    type === "dishes"
  ) {

    return `

      <article class="editorial-item">

        <h3 class="editorial-item-title">

          ${getLocalizedValue(
            item.name
          )}

        </h3>


        <p class="editorial-item-note">

          ${getLocalizedValue(
            item.description
          )}

        </p>

      </article>

    `;

  }


  const address =
    getLocalizedValue(
      item.address
    );


  const note =
    getLocalizedValue(
      item.note
    );


  const transport =
    item.transport ||
    "";


  const linkHTML =
    item.url
      ? `

        <a
          class="editorial-item-link"
          href="${item.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${getText(
            "officialWebsite"
          )}
        </a>

      `
      : "";


  return `

    <article class="editorial-item">

      <h3 class="editorial-item-title">
        ${item.name}
      </h3>


      ${
        address
          ? `
            <p class="editorial-item-address">
              📍 ${address}
            </p>
          `
          : ""
      }


      ${
        transport
          ? `
            <p class="editorial-item-transport">
              🚇 ${transport}
            </p>
          `
          : ""
      }


      ${
        note
          ? `
            <p class="editorial-item-note">
              ${note}
            </p>
          `
          : ""
      }


      ${linkHTML}

    </article>

  `;

}

/* =========================================================
   55. INTERACTIONS DES CARDS
========================================================= */

function setupCardInteractions(
  card,
  item
) {

  let pointerStartX =
    0;


  let pointerStartY =
    0;


  let pointerMoved =
    false;


  card.addEventListener(
    "pointerdown",
    event => {

      pointerStartX =
        event.clientX;


      pointerStartY =
        event.clientY;


      pointerMoved =
        false;

    }
  );


  card.addEventListener(
    "pointermove",
    event => {

      const moveX =
        Math.abs(
          event.clientX -
          pointerStartX
        );


      const moveY =
        Math.abs(
          event.clientY -
          pointerStartY
        );


      if (
        moveX > SWIPE_THRESHOLD ||
        moveY > SWIPE_THRESHOLD
      ) {

        pointerMoved =
          true;

      }

    }
  );


  /*
   * Clic sur la carte.
   */

  card.addEventListener(
    "click",
    event => {

      /*
       * Si le doigt / pointeur
       * s'est déplacé, il s'agit
       * d'un glissement et non
       * d'un clic.
       */

      if (
        pointerMoved
      ) {

        return;

      }


      /*
       * Bouton crédit photo.
       */

      const photoButton =
        event.target.closest(
          ".photo-info-button"
        );


      if (
        photoButton
      ) {

        event.stopPropagation();


        togglePhotoCredit(
          card,
          photoButton
        );


        return;

      }


      /*
       * Bouton favori.
       */

      const favoriteButton =
        event.target.closest(
          ".favorite-button"
        );


      if (
        favoriteButton
      ) {

        event.stopPropagation();


        toggleFavorite(
          item,
          favoriteButton,
          card
        );


        return;

      }


      /*
       * Les liens doivent rester
       * cliquables sans retourner
       * la carte.
       */

      if (
        event.target.closest(
          "a"
        )
      ) {

        return;

      }


      /*
       * Accordéons du réseau métro :
       * ils gèrent eux-mêmes
       * leurs interactions.
       */

      if (
        event.target.closest(
          ".metro-station-button"
        ) ||
        event.target.closest(
          ".metro-station-accordion"
        )
      ) {

        return;

      }


      /*
       * Retourner la carte.
       */

      card.classList.toggle(
        "is-flipped"
      );

    }
  );


  /*
   * Accessibilité clavier.
   */

  card.addEventListener(
    "keydown",
    event => {

      if (
        event.target !== card
      ) {

        return;

      }


      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();


        card.classList.toggle(
          "is-flipped"
        );

      }

    }
  );

}


/* =========================================================
   55.1 CRÉDIT PHOTO — INTERACTION
========================================================= */

function togglePhotoCredit(
  card,
  button
) {

  const credit =
    card.querySelector(
      ".photo-credit"
    );


  if (
    !credit
  ) {

    return;

  }


  const isOpen =
    credit.classList.toggle(
      "is-visible"
    );


  credit.setAttribute(
    "aria-hidden",
    String(
      !isOpen
    )
  );


  button.setAttribute(
    "aria-expanded",
    String(
      isOpen
    )
  );

}


/* =========================================================
   56. GESTION DES FAVORIS
========================================================= */

function toggleFavorite(
  item,
  button,
  card
) {

  /*
   * Une carte affichée depuis
   * "Mes favoris" conserve sa
   * catégorie d'origine.
   */

  const sourceCategory =
    card.dataset.sourceCategory ||
    card.dataset.category ||
    currentCategoryKey;


  const favoriteKey =
    `${sourceCategory}::${item.id}`;


  const isFavorite =
    favorites.has(
      favoriteKey
    );


  if (
    isFavorite
  ) {

    favorites.delete(
      favoriteKey
    );

  }
  else {

    favorites.add(
      favoriteKey
    );

  }


  saveFavorites();

  renderPlanningFavorites();


  const newState =
    !isFavorite;


  button.classList.toggle(
    "is-favorite",
    newState
  );


  button.setAttribute(
    "aria-pressed",
    String(
      newState
    )
  );


  button.textContent =
    newState
      ? "♥"
      : "♡";


  /*
   * Si l'utilisateur retire un lieu
   * directement depuis Mes favoris,
   * reconstruire cette vue.
   */

  if (
    currentCategoryKey ===
    "favoris"
  ) {

    openFavorites();

  }

}


/* =========================================================
   57. CARROUSEL GUIDE
========================================================= */

function renderCards(
  resetIndex = true
) {

  /*
   * Conserver les cartes actuellement
   * retournées avant reconstruction.
   */

  const flippedIds =
    new Set(
      Array.from(
        cardsGrid.querySelectorAll(
          ".place-card.is-flipped"
        )
      )
        .map(
          card =>
            card.dataset.itemId
        )
    );


  cardsGrid.innerHTML =
    "";


  currentItems.forEach(
    item => {

      const card =
        createCard(
          item
        );


      if (
        flippedIds.has(
          item.id
        )
      ) {

        card.classList.add(
          "is-flipped"
        );

      }


      cardsGrid.appendChild(
        card
      );

    }
  );


  if (
    resetIndex
  ) {

    currentIndex =
      0;

  }


  clampCurrentIndex();


  updateHint();


  requestAnimationFrame(
    () => {

      requestAnimationFrame(
        () => {

          goToCurrentIndex(
            false
          );


          updateCarouselCounter();


          updateNeighborPreviews();


          updateDesktopArrows();

        }
      );

    }
  );

}


/* =========================================================
   57.1 LIMITES DE L'INDEX
========================================================= */

function clampCurrentIndex() {

  const visibleCount =
    getVisibleCardsCount();


  const maxIndex =
    Math.max(
      0,
      currentItems.length -
      visibleCount
    );


  currentIndex =
    Math.min(
      Math.max(
        currentIndex,
        0
      ),
      maxIndex
    );

}


/* =========================================================
   57.2 POSITION DU CARROUSEL
========================================================= */

function goToCurrentIndex(
  smooth = true
) {

  const cards =
    cardsGrid.querySelectorAll(
      ".place-card"
    );


  if (
    cards.length === 0
  ) {

    return;

  }


  clampCurrentIndex();


  const targetCard =
    cards[
      currentIndex
    ];


  if (
    !targetCard
  ) {

    return;

  }


  cardsGrid.scrollTo({

    left:
      targetCard.offsetLeft -
      cardsGrid.offsetLeft,

    behavior:
      smooth
        ? "smooth"
        : "auto"

  });


  updateCarouselCounter();


  updateNeighborPreviews();

}


/* =========================================================
   57.3 DÉPLACEMENT DESKTOP
========================================================= */

function moveCarousel(
  direction
) {

  if (
    !isDesktop()
  ) {

    return;

  }


  currentIndex +=
    direction;


  clampCurrentIndex();


  goToCurrentIndex();


  updateDesktopArrows();

}


/* =========================================================
   57.4 FLÈCHES DESKTOP
========================================================= */

function updateDesktopArrows() {

  if (
    !previousButton ||
    !nextButton
  ) {

    return;

  }


  if (
    !isDesktop()
  ) {

    previousButton.disabled =
      true;


    nextButton.disabled =
      true;


    return;

  }


  const maxIndex =
    Math.max(
      0,
      currentItems.length -
      getVisibleCardsCount()
    );


  previousButton.disabled =
    currentIndex === 0;


  nextButton.disabled =
    currentIndex >=
    maxIndex;

}


/* =========================================================
   58. GLISSEMENT TACTILE GUIDE
========================================================= */

let guideSwipeStartX =
  0;


let guideSwipeEndX =
  0;


function handleGuideTouchStart(
  event
) {

  if (
    isDesktop()
  ) {

    return;

  }


  guideSwipeStartX =
    event.changedTouches[0]
      .clientX;

}


function handleGuideTouchEnd(
  event
) {

  if (
    isDesktop()
  ) {

    return;

  }


  guideSwipeEndX =
    event.changedTouches[0]
      .clientX;


  const distance =
    guideSwipeEndX -
    guideSwipeStartX;


  if (
    Math.abs(
      distance
    ) < 40
  ) {

    return;

  }


  if (
    distance < 0
  ) {

    currentIndex +=
      1;

  }
  else {

    currentIndex -=
      1;

  }


  goToCurrentIndex();

}


/* =========================================================
   59. APERÇUS GUIDE
========================================================= */

function updateNeighborPreviews() {

  if (
    !previewPrev ||
    !previewNext ||
    !previewPrevImage ||
    !previewNextImage
  ) {

    return;

  }


  /*
   * Les aperçus ne sont utilisés
   * que sur mobile et tablette.
   */

  if (
    isDesktop()
  ) {

    previewPrev.classList.add(
      "is-hidden"
    );


    previewNext.classList.add(
      "is-hidden"
    );


    return;

  }


  const previousIndex =
    currentIndex - 1;


  const nextIndex =
    currentIndex + 1;


  /*
   * Carte précédente.
   */

  if (
    previousIndex >= 0 &&
    currentItems[
      previousIndex
    ]
  ) {

    const previousItem =
      currentItems[
        previousIndex
      ];


    previewPrevImage.src =
      previousItem.image;


    previewPrevImage.alt =
      previousItem.name[
        currentLanguage
      ];


    previewPrev.classList.remove(
      "is-hidden"
    );

  }
  else {

    previewPrev.classList.add(
      "is-hidden"
    );

  }


  /*
   * Carte suivante.
   */

  if (
    nextIndex <
      currentItems.length &&
    currentItems[
      nextIndex
    ]
  ) {

    const nextItem =
      currentItems[
        nextIndex
      ];


    previewNextImage.src =
      nextItem.image;


    previewNextImage.alt =
      nextItem.name[
        currentLanguage
      ];


    previewNext.classList.remove(
      "is-hidden"
    );

  }
  else {

    previewNext.classList.add(
      "is-hidden"
    );

  }

}


/* =========================================================
   60. COMPTEUR / AIDE
========================================================= */

function updateCarouselCounter() {

  if (
    !carouselCounter
  ) {

    return;

  }


  if (
    currentItems.length === 0
  ) {

    carouselCounter.textContent =
      "";


    return;

  }


  carouselCounter.textContent =
    `${currentIndex + 1} / ${currentItems.length}`;

}


function updateHint() {

  if (
    !flipHint
  ) {

    return;

  }


  flipHint.textContent =
    isMobile()
      ? getText(
          "hintMobile"
        )
      : getText(
          "hintDesktop"
        );

}


/* =========================================================
   61. CHANGEMENT DE LANGUE
========================================================= */

function setLanguage(
  newLanguage
) {

  if (
    newLanguage !== "fr" &&
    newLanguage !== "en"
  ) {

    return;

  }


  if (
    newLanguage ===
    currentLanguage
  ) {

    return;

  }


  currentLanguage =
    newLanguage;


  document
    .documentElement
    .lang =
      currentLanguage;


  /*
   * État visuel des boutons FR / EN.
   */

  languageButtons.forEach(
    button => {

      button.classList.toggle(
        "active",
        button.dataset.language ===
          currentLanguage
      );

    }
  );


 /*
 * Mettre à jour les textes généraux.
 */

 updateWelcomeTexts();

 updateHomeTexts();
 
 updateGuideTexts();

updatePlanningTexts();

renderPlanningChildrenAges();

renderPlanningFavorites();

updateRoutesTexts();
 
 updateMapTexts();
 
 updateMapPlacesFilterLanguage();
 
 updateMapMenuLanguage();

 updateMapSearchLanguage();

 renderMapRouteControls();
 
 updateAboutTexts();
 
 updateUniversalBackButton();


  /*
   * Écran d'accueil.
   */

  if (
    !welcomeView.hidden
  ) {

    return;

  }


  /*
   * Menu principal.
   */

  if (
    !homeView.hidden
  ) {

    return;

  }


  /*
   * Itinéraires.
   */

  if (
    !routesView.hidden
  ) {

    renderRoutes(
      false
    );


    return;

  }


  /*
 * Carte.
 */

if (
  !mapView.hidden
) {

  if (
    isMapFavoritesFilterActive
  ) {

    renderMapFavoritesList();

    filterMapToFavorites();

  }


  if (
    traveloptimMap
  ) {

    traveloptimMap.closePopup();

  }


  return;

}


  /*
   * À propos.
   */

  if (
    !aboutView.hidden
  ) {

    return;

  }


  /*
   * Guide.
   */

  if (
    !guideView.hidden
  ) {

    return;

  }


  /*
   * À voir.
   */

  if (
    !categoriesView.hidden
  ) {

    showSeeCategories();


    return;

  }


  /*
   * À faire.
   */

  if (
    !activitiesView.hidden
  ) {

    showDoCategories();


    return;

  }


  /*
   * Carrousel d'une catégorie.
   */

  if (
    !categoryView.hidden
  ) {

    if (
      currentCategoryKey ===
      "favoris"
    ) {

      openFavorites();


      return;

    }


    if (
      currentCategoryKey ===
      "quartiers"
    ) {

      openDistricts();


      return;

    }


    if (
      currentCategoryKey ===
      "transport"
    ) {

      openTransport();


      return;

    }


    updateCategoryHeader();


    renderCards(
      false
    );

  }

}


/* =========================================================
   62. ÉVÉNEMENTS — ACCUEIL / MENU PRINCIPAL
========================================================= */

welcomeExploreButton.addEventListener(
  "click",
  showHome
);

welcomeAboutButton.addEventListener(
  "click",
  showAbout
);

homeBackButton.addEventListener(
  "click",
  showWelcome
);

homeGuideButton.addEventListener(
  "click",
  showGuide
);

homeRoutesButton.addEventListener(
  "click",
  showRoutes
);

homeMapButton.addEventListener(
  "click",
  showMap
);

homePlanningButton.addEventListener(
  "click",
  showPlanning
);

/*
 * Planification :
 * présentation → formulaire.
 */

if (
  planningStartButton
) {

  planningStartButton.addEventListener(
    "click",
    () => {

      if (
        !planningCard
      ) {
        return;
      }


      planningCard.classList.add(
        "is-flipped"
      );


      if (
        planningCardBack
      ) {

        planningCardBack.scrollTop =
          0;

      }

    }
  );

}


/*
 * Planification :
 * formulaire → présentation.
 */

if (
  planningReturnButton
) {

  planningReturnButton.addEventListener(
    "click",
    () => {

      if (
        !planningCard
      ) {
        return;
      }


      planningCard.classList.remove(
        "is-flipped"
      );


      if (
        planningCardFront
      ) {

        planningCardFront.scrollTop =
          0;

      }

    }
  );

}

/*
 * Planification :
 * nombre d'enfants → âge de chaque enfant.
 */

if (
  planningChildren
) {

  planningChildren.addEventListener(
    "input",
    renderPlanningChildrenAges
  );

}

/*
 * Planification :
 * inclure / exclure les favoris
 * de la demande.
 */

if (
  planningIncludeFavorites
) {

  planningIncludeFavorites.addEventListener(
    "change",
    () => {

      renderPlanningFavorites();

    }
  );

}

/* =========================================================
   62.1 ÉVÉNEMENT — ENVOI FORMULAIRE PLANIFICATION
========================================================= */

if (
  planningForm
) {

  planningForm.addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      /*
       * Synchroniser une dernière fois
       * les favoris avant l'envoi.
       */

      renderPlanningFavorites();


      /*
       * Bloquer temporairement
       * le bouton d'envoi.
       */

      if (
        planningSubmitButton
      ) {

        planningSubmitButton.disabled =
          true;

      }


      /*
       * Préparer toutes les données
       * du formulaire.
       */

      const formData =
        new FormData(
          planningForm
        );


      /*
       * Ajouter la langue utilisée
       * dans l'application.
       */

      formData.append(
        "language",
        currentLanguage === "fr"
          ? "Français"
          : "English"
      );


      try {

        const response =
          await fetch(
            planningForm.action,
            {
              method: "POST",

              body: formData,

              headers: {
                Accept:
                  "application/json"
              }
            }
          );


        if (
          !response.ok
        ) {

          throw new Error(
            "Formspree submission failed"
          );

        }


        console.log(
          "Planning request sent successfully."
        );
        
        
        /*
         * Masquer le formulaire
         * après un envoi réussi.
         */
        
        planningForm.hidden =
          true;
        
        
        /*
         * Afficher la confirmation.
         */
        
        
        
        if (
          planningSuccess
        ) {
        
          planningSuccess.hidden =
            false;
        
        }

        /*
 * Réinitialiser les champs
 * après un envoi réussi.
 */

planningForm.reset();


/*
 * Resynchroniser les favoris
 * après la réinitialisation.
 */

renderPlanningFavorites();
        
        
        /*
         * Revenir en haut de la face
         * arrière pour afficher immédiatement
         * la confirmation.
         */
        
        if (
          planningCardBack
        ) {
        
          planningCardBack.scrollTop =
            0;
        
        }


      } catch (
        error
      ) {

        console.error(
          "Planning form error:",
          error
        );


      } finally {

        if (
          planningSubmitButton
        ) {

          planningSubmitButton.disabled =
            false;

        }

      }

    }
  );

}

/* =========================================================
   63. ÉVÉNEMENT — RETOUR UNIVERSEL
========================================================= */

universalBackButton.addEventListener(
  "click",
  () => {

    if (
      typeof currentBackAction ===
      "function"
    ) {

      currentBackAction();

    }

  }
);


/* =========================================================
   64. ÉVÉNEMENTS — GUIDE
========================================================= */

guideButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        const section =
          button.dataset.guideSection;


        if (
          section === "voir"
        ) {

          showSeeCategories();
          return;

        }


        if (
          section === "faire"
        ) {

          showDoCategories();
          return;

        }


        if (
          section === "quartiers"
        ) {

          openDistricts();
          return;

        }


        if (
          section === "transport"
        ) {

          openTransport();
          return;

        }


        if (
          section === "favoris"
        ) {

          openFavorites();

        }

      }
    );

  }
);


/* =========================================================
   65. ÉVÉNEMENTS — LANGUE
========================================================= */

languageButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        setLanguage(
          button.dataset.language
        );

      }
    );

  }
);


/* =========================================================
   66. ÉVÉNEMENTS — CARROUSELS
========================================================= */

previousButton.addEventListener(
  "click",
  () => moveCarousel(-1)
);

nextButton.addEventListener(
  "click",
  () => moveCarousel(1)
);


previewPrev.addEventListener(
  "click",
  () => {

    if (
      currentIndex <= 0
    ) {
      return;
    }


    currentIndex -= 1;

    goToCurrentIndex();

  }
);


previewNext.addEventListener(
  "click",
  () => {

    if (
      currentIndex >=
      currentItems.length - 1
    ) {
      return;
    }


    currentIndex += 1;

    goToCurrentIndex();

  }
);


cardsGrid.addEventListener(
  "touchstart",
  handleGuideTouchStart,
  {
    passive: true
  }
);


cardsGrid.addEventListener(
  "touchend",
  handleGuideTouchEnd,
  {
    passive: true
  }
);


if (
  routesPrevButton
) {

  routesPrevButton.addEventListener(
    "click",
    () => moveRoutesCarousel(-1)
  );

}


if (
  routesNextButton
) {

  routesNextButton.addEventListener(
    "click",
    () => moveRoutesCarousel(1)
  );

}


/* =========================================================
   67. ÉVÉNEMENTS — CARTE
========================================================= */


/*
 * Menu principal de la carte.
 */

if (
  mapMenuButton
) {

  mapMenuButton.addEventListener(
    "click",
    toggleMapMenu
  );

}

/*
 * Accordéon Métro.
 */

if (
  metroAccordionButton
) {

  metroAccordionButton.addEventListener(
    "click",
    toggleMetroAccordion
  );

}


/*
 * Accordéon Lieux.
 */

if (
  placesAccordionButton
) {

  placesAccordionButton.addEventListener(
    "click",
    togglePlacesAccordion
  );

}


/*
 * Affichage / masquage
 * des stations de métro.
 */

if (
  metroStationsToggle
) {

  metroStationsToggle.addEventListener(
    "change",
    toggleMetroStations
  );

}


/*
 * Affichage / masquage
 * des lignes de métro.
 */

metroLineToggles.forEach(
  checkbox => {

    checkbox.addEventListener(
      "change",
      () => {

        const lineNumber =
          checkbox.dataset.metroLine;


        toggleMetroLine(
          lineNumber,
          checkbox.checked
        );

      }
    );

  }
);


/*
 * Filtre "Tous les lieux".
 */

if (
  placesAllToggle
) {

  placesAllToggle.addEventListener(
    "change",
    toggleAllPlaceCategories
  );

}


/*
 * Filtres par catégorie de lieux.
 */

placeCategoryToggles.forEach(
  checkbox => {

    checkbox.addEventListener(
      "change",
      updatePlaceFilters
    );

  }
);


if (
  mapPlaceSearch
) {

  mapPlaceSearch.addEventListener(
    "input",
    () => {

      searchMapPlaces(
        mapPlaceSearch.value
      );

    }
  );

}


if (
  mapLocationButton
) {

  mapLocationButton.addEventListener(
    "click",
    locateMapUser
  );

}

if (
  mapNearbyClose
) {

  mapNearbyClose.addEventListener(
    "click",
    closeNearbyMapPlaces
  );

}

/*
 * Accordéon Mes favoris.
 */

if (
  favoritesMapAccordionButton
) {

  favoritesMapAccordionButton.addEventListener(
    "click",
    toggleMapFavoritesAccordion
  );

}

if (
  routesMapAccordionButton
) {

  routesMapAccordionButton.addEventListener(
    "click",
    toggleMapRoutesAccordion
  );

}

/* =========================================================
   68. REDIMENSIONNEMENT
========================================================= */

window.addEventListener(
  "resize",
  () => {

    if (
      !categoryView.hidden
    ) {

      updateHint();

      clampCurrentIndex();


      requestAnimationFrame(
        () => {

          goToCurrentIndex(false);

          updateDesktopArrows();

          updateNeighborPreviews();

        }
      );

    }


    if (
      !routesView.hidden
    ) {

      updateRoutesHint();

      clampRouteIndex();


      requestAnimationFrame(
        () => {

          goToCurrentRouteIndex(false);

          updateRoutesDesktopArrows();

          updateRoutesNeighborPreviews();

        }
      );

    }


    if (
      traveloptimMap &&
      !mapView.hidden
    ) {

      requestAnimationFrame(
        () => {

          traveloptimMap.invalidateSize();

        }
      );

    }

  }
);


/* =========================================================
   69. INITIALISATION
========================================================= */

document.documentElement.lang =
  DEFAULT_LANGUAGE;


languageButtons.forEach(
  button => {

    button.classList.toggle(
      "active",
      button.dataset.language ===
        DEFAULT_LANGUAGE
    );

  }
);


updateWelcomeTexts();

updateHomeTexts();

updateGuideTexts();

updateRoutesTexts();

updateMapTexts();

updateAboutTexts();


showWelcome();

renderMapRouteControls();

