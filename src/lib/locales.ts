export const locales = ["en", "fr", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const content = {
  en: {
    nav: {
      solutions: "Solutions",
      products: "Products",
      services: "Services",
      roi: "ROI",
      contact: "Contact",
      contactCta: "Contact Us",
      language: "Language"
    },
    hero: {
      kicker: "Floating Covers",
      title: "Maximize industrial efficiency with water-saving floating cover solutions.",
      body:
        "We are H INNOV LLC, an industrial solutions provider based in Delaware, USA. We specialize in floating covers and environmental protection systems engineered for mining, agriculture, wastewater treatment, and infrastructure.",
      primaryCta: "Contact",
      secondaryCta: "View products",
      note: "Made in the USA for North America. EU-ready production on request."
    },
    images: {
      heroAlt: "Industrial basin protected by floating covers",
      productHexAlt: "HexProtect floating cover modules",
      productArmorAlt: "Armor Ball floating cover spheres",
      productRhomboAlt: "Rhombo Hexoshield floating cover modules",
      galleryAlt: [
        "Floating covers installed on industrial reservoir",
        "Clarifier protected by floating cover systems",
        "Large basin with floating cover deployment",
        "Close-up of floating cover modules",
        "Floating cover installation on water treatment facility",
        "Field team deploying floating cover balls"
      ],
      moldingAlt: "Floating cover components ready for injection molding"
    },
    invest: {
      kicker: "Why invest right now?",
      title: "Water scarcity, rising operational costs, and tighter regulations demand action.",
      subtitle:
        "Investing in floating covers protects assets, reduces evaporation, and delivers measurable savings across industrial operations.",
      cards: [
        {
          title: "Reduce water loss",
          body: "Cut evaporation by up to 98% and stabilize reservoir levels during peak demand."
        },
        {
          title: "Improve compliance",
          body: "Meet stricter environmental requirements and protect water quality."
        },
        {
          title: "Lower costs",
          body: "Decrease chemical usage, maintenance, and odor management expenses."
        }
      ]
    },
    solutions: {
      kicker: "Our solutions",
      title: "Advanced water management systems built for heavy-duty use.",
      subtitle:
        "Our floating covers and environmental protection systems are engineered to meet the unique demands of industrial operators.",
      industriesTitle: "Primary industries served",
      industries: [
        {
          label: "Mining",
          body: "Prevent evaporation, reduce contamination, and support compliance with regulations."
        },
        {
          label: "Agriculture",
          body: "Optimize irrigation efficiency and conserve scarce resources."
        },
        {
          label: "Wastewater treatment",
          body: "Maintain water quality, reduce odors, and lower operating costs."
        },
        {
          label: "Infrastructure",
          body: "Protect critical water assets in airports and industrial facilities."
        }
      ],
      performanceTitle: "Performance focus",
      performanceBody:
        "Products like HexProtect® and Armor Ball® are designed for long-term durability, low maintenance, and superior performance in harsh conditions.",
      performancePoints: [
        "Wind resistance and insulation",
        "UV-resistant engineered materials",
        "Low maintenance coverage",
        "Engineered for harsh environments"
      ]
    },
    products: {
      kicker: "Products",
      title: "A portfolio of floating cover systems for every reservoir size.",
      subtitle: "Modular solutions designed to scale from small basins to large industrial reservoirs.",
      items: [
        {
          tag: "Modular coverage",
          title: "HexProtect®",
          body:
            "Interlocking hexagonal tiles engineered to reduce evaporation, prevent contamination, and maximize surface coverage."
        },
        {
          tag: "Cost-effective",
          title: "Armor Ball®",
          body:
            "Lightweight spherical design that is easy to deploy, ideal for small reservoirs and wastewater treatment."
        },
        {
          tag: "Extreme durability",
          title: "Rhombo Hexoshield®",
          body:
            "Built for high-risk environments such as mining and industrial power plants with superior wind resistance."
        }
      ]
    },
    services: {
      kicker: "Key services",
      title: "Tailored industrial solutions with measurable outcomes.",
      subtitle:
        "From design to deployment, our engineering team delivers systems matched to your operational constraints.",
      cards: [
        {
          title: "Innovative water management",
          body:
            "Advanced solutions like HexProtect® and Armor Ball® designed to reduce evaporation and contamination."
        },
        {
          title: "Environmental sustainability",
          body: "Support regulatory compliance while reducing chemical use and water loss."
        },
        {
          title: "Custom engineering",
          body: "Solutions tailored to specific reservoir shapes, climates, and risk profiles."
        },
        {
          title: "Long-term durability",
          body: "10-year warranty options and materials built for harsh conditions and UV exposure."
        }
      ]
    },
    roi: {
      kicker: "Operational impact",
      title: "Reduce costs, protect assets, and unlock fast ROI.",
      subtitle:
        "Floating covers lower operating expenses while safeguarding environmental compliance.",
      cards: [
        {
          title: "Protect operations from rising chemical costs",
          body:
            "Blocking sunlight reduces algae growth by up to 80%, cutting chemical treatment needs."
        },
        {
          title: "Reduce unpleasant odors",
          body:
            "Minimize odor emissions in wastewater treatment plants for a safer working environment."
        },
        {
          title: "Combat water scarcity",
          body:
            "Reduce evaporation by up to 98% and preserve valuable water resources."
        },
        {
          title: "Regulatory compliance",
          body:
            "Meet tightening sustainability regulations while contributing to long-term goals."
        },
        {
          title: "Immediate ROI potential",
          body:
            "Projected ROI in 3-5 years through water savings and lower maintenance costs."
        }
      ]
    },
    numbers: {
      kicker: "Our key numbers",
      title: "Performance metrics that matter.",
      subtitle: "Quantified impact across evaporation, ROI, and algae mitigation.",
      stats: [
        {
          title: "Stop evaporation",
          highlight: "Up to 98%",
          body: "Reduction in evaporation for industrial reservoirs and treatment ponds."
        },
        {
          title: "ROI",
          highlight: "3-5 years",
          body: "Return on investment driven by water savings and lower chemical costs."
        },
        {
          title: "Sunlight blockage",
          highlight: "95-98%",
          body: "Less sunlight means up to 80% less algae and lower maintenance."
        }
      ]
    },
    trusted: {
      kicker: "Trusted by leading industries",
      title: "Industrial operators rely on proven performance.",
      subtitle:
        "We support large-scale operators across mining, agriculture, wastewater, and infrastructure.",
      industries: ["Mining", "Water treatment", "Agriculture", "Infrastructure"],
      cardTitle: "Trusted by leading industries",
      cardBody:
        "We provide water management and environmental protection solutions to major players in mining, agriculture, wastewater treatment, and infrastructure.",
      link: "Request references"
    },
    gallery: {
      kicker: "Field deployments",
      title: "Installations across industrial basins and reservoirs.",
      subtitle: "Replace the placeholders below with your project photography."
    },
    molding: {
      kicker: "Manufacturing",
      title: "Injection molding capabilities for full-scale production.",
      subtitle:
        "Beyond floating covers, we can manufacture any plastic parts with new tooling through injection molding for consistent quality and scalable production.",
      body:
        "Our production partners support large-volume injection molding to deliver precise, repeatable components. With new molds, we can produce custom parts beyond floating cover systems.",
      points: [
        "Custom tooling for new parts and applications",
        "Material selection tailored to the intended use",
        "Scalable production with repeatable quality control"
      ]
    },
    contact: {
      kicker: "Contact",
      title: "Let’s evaluate your site and build a tailored solution.",
      subtitle:
        "Share reservoir size, location, and operational constraints, and we will prepare a tailored proposal.",
      emailCta: "Send an email",
      callCta: "Call +1 302 412 0346"
    },
    footer: {
      floating: "Floating Covers",
      legal: "Legal information",
      sitemap: "Sitemap"
    },
    legal: {
      title: "Legal information",
      intro:
        "Welcome to the H INNOV LLC website. By accessing this site, you agree to comply with these Terms of Use.",
      sections: [
        {
          title: "1. IDENTIFICATION AND APPLICABLE LAW",
          body: [
            "The Company is a Limited Liability Company (LLC) registered in the State of Delaware, United States.",
            "Status: The Company acts as an independent distributor of products manufactured by AWTT Inc.",
            "Applicable law: These Terms are governed by and interpreted in accordance with the laws of the State of Delaware, without regard to conflict of law principles.",
            "Jurisdiction: Any dispute arising from the use of this website shall be subject to the exclusive jurisdiction of the courts located in the State of Delaware."
          ]
        },
        {
          title: "2. INTELLECTUAL PROPERTY AND THIRD-PARTY RIGHTS",
          body: [
            "The content of this site, including text, graphics, logos, and images, is the property of the Company, except for elements belonging to its partners.",
            "AWTT trademarks: The names, logos, and technical sheets relating to AWTT products are the exclusive property of AWTT Inc. The Company uses them as an authorized distributor.",
            "Restrictions: Any reproduction, distribution, or commercial use of the content of this site without the prior written authorization of the Company is strictly prohibited."
          ]
        },
        {
          title: "3. DISCLAIMERS",
          emphasize: true,
          body: [
            "PRODUCT INFORMATION: DESCRIPTIONS, TECHNICAL PERFORMANCE (CHEMICAL OR THERMAL RESISTANCE, ETC.) AND VISUALS OF FLOATING COVERS ARE PROVIDED FOR INFORMATIONAL PURPOSES AND COME DIRECTLY FROM THE MANUFACTURER (AWTT). THE COMPANY DOES NOT GUARANTEE THAT THIS INFORMATION IS ERROR-FREE OR UP TO DATE.",
            "USE OF THE SITE: THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” THE COMPANY PROVIDES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE OPERATION OF THIS SITE.",
            "LIMITATION OF LIABILITY: IN NO EVENT SHALL THE COMPANY, ITS OFFICERS OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL (LOSS OF PROFIT, BUSINESS INTERRUPTION) OR PUNITIVE DAMAGES RESULTING FROM ACCESS TO OR INABILITY TO ACCESS THIS SITE."
          ]
        },
        {
          title: "4. THIRD-PARTY LINKS",
          body: [
            "This site may contain links to third-party websites, including the official website of AWTT. The Company has no control over the content, privacy policies, or practices of these third-party sites and disclaims all liability in this regard."
          ]
        },
        {
          title: "5. CHANGES TO THESE TERMS",
          body: [
            "The Company reserves the right to modify these Terms at any time and without prior notice.",
            "It is your responsibility to review this page regularly.",
            "Continued use of the site after changes are published constitutes full acceptance of the updated Terms."
          ]
        }
      ],
      contactLabel: "6. CONTACT",
      contactText: "For any questions regarding these Terms, you can contact us at:",
      contactEmail: "hinnovcompamy@gmail.com"
    },
    sitemap: {
      title: "Sitemap",
      sectionsTitle: "Sections",
      sections: [
        "Solutions",
        "Products",
        "Services",
        "ROI",
        "Key numbers",
        "Trusted industries",
        "Gallery",
        "Manufacturing",
        "Contact"
      ],
      languageTitle: "Languages"
    }
  },
  fr: {
    nav: {
      solutions: "Solutions",
      products: "Produits",
      services: "Services",
      roi: "ROI",
      contact: "Contact",
      contactCta: "Nous contacter",
      language: "Langue"
    },
    hero: {
      kicker: "Couvertures flottantes",
      title:
        "Maximisez l’efficacité industrielle avec des solutions de couvertures flottantes économes en eau.",
      body:
        "H INNOV LLC est un acteur industriel basé dans le Delaware (USA). Nous concevons des couvertures flottantes et des systèmes de protection environnementale pour les secteurs minier, agricole, du traitement des eaux et des infrastructures.",
      primaryCta: "Contact",
      secondaryCta: "Voir les produits",
      note: "Fabriqué aux USA pour l’Amérique du Nord. Production UE possible sur demande."
    },
    images: {
      heroAlt: "Bassin industriel protégé par des couvertures flottantes",
      productHexAlt: "Modules de couverture flottante HexProtect",
      productArmorAlt: "Sphères de couverture flottante Armor Ball",
      productRhomboAlt: "Modules de couverture flottante Rhombo Hexoshield",
      galleryAlt: [
        "Couvertures flottantes sur réservoir industriel",
        "Clarificateur protégé par des couvertures flottantes",
        "Grand bassin avec déploiement de couvertures flottantes",
        "Gros plan sur des modules de couverture flottante",
        "Installation sur site de traitement des eaux",
        "Équipe terrain déployant des boules flottantes"
      ],
      moldingAlt: "Composants de couverture prêts pour l’injection plastique"
    },
    invest: {
      kicker: "Pourquoi investir maintenant ?",
      title:
        "La rareté de l’eau, la hausse des coûts et les réglementations plus strictes imposent d’agir.",
      subtitle:
        "Investir dans des couvertures flottantes protège les actifs, réduit l’évaporation et génère des économies mesurables.",
      cards: [
        {
          title: "Réduire les pertes d’eau",
          body:
            "Diminuer l’évaporation jusqu’à 98 % et stabiliser les niveaux des bassins."
        },
        {
          title: "Améliorer la conformité",
          body:
            "Répondre aux exigences environnementales et protéger la qualité de l’eau."
        },
        {
          title: "Baisser les coûts",
          body:
            "Réduire les dépenses en produits chimiques, maintenance et gestion des odeurs."
        }
      ]
    },
    solutions: {
      kicker: "Nos solutions",
      title: "Des systèmes de gestion de l’eau conçus pour l’industrie lourde.",
      subtitle:
        "Nos couvertures flottantes et systèmes de protection environnementale répondent aux exigences des opérateurs industriels.",
      industriesTitle: "Secteurs principaux",
      industries: [
        {
          label: "Mines",
          body: "Limiter l’évaporation, réduire la contamination et assurer la conformité."
        },
        {
          label: "Agriculture",
          body: "Optimiser l’irrigation et préserver les ressources."
        },
        {
          label: "Traitement des eaux",
          body: "Maintenir la qualité de l’eau, réduire les odeurs et les coûts."
        },
        {
          label: "Infrastructures",
          body: "Protéger les actifs hydriques des sites industriels et aéroports."
        }
      ],
      performanceTitle: "Performance",
      performanceBody:
        "Des produits comme HexProtect® et Armor Ball® offrent durabilité, faible maintenance et performance en conditions difficiles.",
      performancePoints: [
        "Résistance au vent et isolation",
        "Matériaux techniques résistants aux UV",
        "Faible maintenance",
        "Conçus pour environnements sévères"
      ]
    },
    products: {
      kicker: "Produits",
      title: "Une gamme de couvertures pour tous types de bassins.",
      subtitle: "Des solutions modulaires pour petites et grandes réserves industrielles.",
      items: [
        {
          tag: "Couverture modulaire",
          title: "HexProtect®",
          body:
            "Dalles hexagonales emboîtables pour réduire l’évaporation, prévenir la contamination et maximiser la couverture."
        },
        {
          tag: "Économique",
          title: "Armor Ball®",
          body:
            "Design sphérique léger, facile à déployer, idéal pour petits bassins et stations d’épuration."
        },
        {
          tag: "Durabilité extrême",
          title: "Rhombo Hexoshield®",
          body:
            "Conçu pour des environnements à risque (mines, centrales) avec forte résistance au vent."
        }
      ]
    },
    services: {
      kicker: "Services clés",
      title: "Des solutions industrielles sur mesure avec résultats mesurables.",
      subtitle:
        "De la conception au déploiement, nos ingénieurs adaptent les systèmes à vos contraintes.",
      cards: [
        {
          title: "Gestion innovante de l’eau",
          body:
            "Solutions avancées comme HexProtect® et Armor Ball® pour limiter évaporation et contamination."
        },
        {
          title: "Durabilité environnementale",
          body: "Conformité réglementaire et réduction de l’usage chimique."
        },
        {
          title: "Ingénierie sur mesure",
          body: "Adaptation aux formes de bassins, climats et contraintes terrain."
        },
        {
          title: "Durabilité long terme",
          body: "Options de garantie 10 ans et matériaux pour conditions difficiles."
        }
      ]
    },
    roi: {
      kicker: "Impact opérationnel",
      title: "Réduisez les coûts et accélérez le ROI.",
      subtitle:
        "Les couvertures flottantes diminuent les dépenses tout en renforçant la conformité.",
      cards: [
        {
          title: "Limiter les coûts chimiques",
          body:
            "La réduction de la lumière diminue les algues jusqu’à 80 %."
        },
        {
          title: "Réduire les odeurs",
          body:
            "Moins d’émissions odorantes dans les stations d’épuration."
        },
        {
          title: "Lutter contre la pénurie d’eau",
          body:
            "Réduction de l’évaporation jusqu’à 98 % pour préserver la ressource."
        },
        {
          title: "Conformité réglementaire",
          body:
            "Répondre aux exigences de durabilité et aux normes locales."
        },
        {
          title: "ROI rapide",
          body:
            "ROI estimé entre 3 et 5 ans grâce aux économies d’eau et de maintenance."
        }
      ]
    },
    numbers: {
      kicker: "Chiffres clés",
      title: "Des indicateurs de performance concrets.",
      subtitle: "Impact mesuré sur l’évaporation, le ROI et la réduction des algues.",
      stats: [
        {
          title: "Stop évaporation",
          highlight: "Jusqu’à 98 %",
          body: "Réduction de l’évaporation sur bassins industriels."
        },
        {
          title: "ROI",
          highlight: "3-5 ans",
          body: "Retour sur investissement via économies d’eau et de maintenance."
        },
        {
          title: "Blocage lumière",
          highlight: "95-98 %",
          body: "Jusqu’à 80 % d’algues en moins et maintenance réduite."
        }
      ]
    },
    trusted: {
      kicker: "Approuvé par l’industrie",
      title: "Des opérateurs industriels qui exigent des résultats.",
      subtitle:
        "Nous accompagnons mines, agriculture, traitement des eaux et infrastructures.",
      industries: ["Mines", "Traitement des eaux", "Agriculture", "Infrastructures"],
      cardTitle: "Approuvé par l’industrie",
      cardBody:
        "Solutions de gestion de l’eau pour des acteurs majeurs du minier, de l’agri et des infrastructures.",
      link: "Demander des références"
    },
    gallery: {
      kicker: "Déploiements terrain",
      title: "Installations sur bassins industriels et réservoirs.",
      subtitle: "Remplacez les blocs ci-dessous par vos photos de projets."
    },
    molding: {
      kicker: "Fabrication",
      title: "Capacités d’injection plastique pour une production à grande échelle.",
      subtitle:
        "Au‑delà des couvertures flottantes, nous pouvons fabriquer toute pièce plastique avec de nouveaux moules par injection plastique.",
      body:
        "Nos partenaires industriels assurent des volumes importants avec des tolérances précises. Avec de nouveaux moules, nous réalisons des pièces sur mesure au‑delà des couvertures flottantes.",
      points: [
        "Outillage sur mesure pour de nouvelles pièces",
        "Matériaux adaptés à l’usage final",
        "Production scalable et qualité répétable"
      ]
    },
    contact: {
      kicker: "Contact",
      title: "Évaluons votre site et construisons une solution adaptée.",
      subtitle:
        "Partagez la taille du bassin, la localisation et les contraintes opérationnelles.",
      emailCta: "Envoyer un email",
      callCta: "Appeler +1 302 412 0346"
    },
    footer: {
      floating: "Couvertures flottantes",
      legal: "Mentions légales",
      sitemap: "Plan du site"
    },
    legal: {
      title: "Conditions Générales d’Utilisation",
      intro:
        "Bienvenue sur le site de H INNOV LLC. En accédant à ce site, vous acceptez de vous conformer aux présentes Conditions Générales d'Utilisation.",
      sections: [
        {
          title: "1. IDENTIFICATION ET LOI APPLICABLE",
          body: [
            "La Société est une Limited Liability Company (LLC) enregistrée dans l'État du Delaware, États-Unis.",
            "Statut : La Société agit en qualité de distributeur indépendant des produits fabriqués par la société AWTT Inc.",
            "Droit applicable : Les présentes CGU sont régies et interprétées conformément aux lois de l'État du Delaware, sans égard aux principes de conflits de lois.",
            "Juridiction : Tout litige découlant de l'utilisation de ce site web sera soumis à la compétence exclusive des tribunaux situés dans l'État du Delaware."
          ]
        },
        {
          title: "2. PROPRIÉTÉ INTELLECTUELLE ET DROITS DES TIERS",
          body: [
            "Le contenu de ce site, incluant les textes, graphismes, logos et images, est la propriété de la Société, à l'exception des éléments appartenant à ses partenaires.",
            "Marques AWTT : Les noms, logos et fiches techniques relatifs aux produits AWTT sont la propriété exclusive de AWTT Inc. La Société les utilise en sa qualité de distributeur autorisé.",
            "Restrictions : Toute reproduction, distribution ou utilisation commerciale du contenu de ce site sans l'autorisation écrite préalable de la Société est strictement interdite."
          ]
        },
        {
          title: "3. EXCLUSIONS DE RESPONSABILITÉ (DISCLAIMERS)",
          emphasize: true,
          body: [
            "INFORMATIONS PRODUITS : LES DESCRIPTIONS, PERFORMANCES TECHNIQUES (RÉSISTANCE CHIMIQUE, THERMIQUE, ETC.) ET VISUELS DES COUVERTURES FLOTTANTES SONT FOURNIS À TITRE INDICATIF ET PROVIENNENT DIRECTEMENT DES DONNÉES DU FABRICANT (AWTT). LA SOCIÉTÉ NE GARANTIT PAS QUE CES INFORMATIONS SOIENT EXEMPTES D’ERREURS OU PARFAITEMENT À JOUR.",
            "USAGE DU SITE : LE SERVICE EST FOURNI « EN L’ÉTAT » (« AS IS ») ET « SELON DISPONIBILITÉ ». LA SOCIÉTÉ NE DONNE AUCUNE GARANTIE, EXPRESSE OU IMPLICITE, CONCERNANT LE FONCTIONNEMENT DU SITE.",
            "LIMITATION DE RESPONSABILITÉ : EN AUCUN CAS LA SOCIÉTÉ, SES DIRIGEANTS OU SES AGENTS NE POURRONT ÊTRE TENUS RESPONSABLES DES DOMMAGES DIRECTS, INDIRECTS, CONSÉCUTIFS (PERTE DE PROFIT, INTERRUPTION D’ACTIVITÉ) OU PUNITIFS RÉSULTANT DE L’ACCÈS OU DE L’IMPOSSIBILITÉ D’ACCÉDER À CE SITE."
          ]
        },
        {
          title: "4. LIENS VERS DES TIERS",
          body: [
            "Ce site peut contenir des liens vers des sites web tiers, y compris le site officiel de la société AWTT. La Société n’exerce aucun contrôle sur le contenu, les politiques de confidentialité ou les pratiques de ces sites tiers et décline toute responsabilité à cet égard."
          ]
        },
        {
          title: "5. MODIFICATIONS DES CONDITIONS",
          body: [
            "La Société se réserve le droit de modifier les présentes CGU à tout moment et sans préavis.",
            "Il est de votre responsabilité de consulter régulièrement cette page.",
            "L’utilisation continue du site après la publication de modifications constitue votre acceptation pleine et entière des nouvelles conditions."
          ]
        }
      ],
      contactLabel: "6. CONTACT",
      contactText: "Pour toute question relative à ces CGU, vous pouvez nous contacter à l’adresse suivante :",
      contactEmail: "hinnovcompamy@gmail.com"
    },
    sitemap: {
      title: "Plan du site",
      sectionsTitle: "Sections",
      sections: [
        "Solutions",
        "Produits",
        "Services",
        "ROI",
        "Chiffres clés",
        "Industries",
        "Galerie",
        "Fabrication",
        "Contact"
      ],
      languageTitle: "Langues"
    }
  },
  pl: {
    nav: {
      solutions: "Rozwiązania",
      products: "Produkty",
      services: "Usługi",
      roi: "ROI",
      contact: "Kontakt",
      contactCta: "Kontakt",
      language: "Język"
    },
    hero: {
      kicker: "Pokrywy pływające",
      title:
        "Zwiększ efektywność przemysłową dzięki oszczędzającym wodę pokrywom pływającym.",
      body:
        "H INNOV LLC to przemysłowy dostawca rozwiązań z siedzibą w Delaware (USA). Projektujemy pokrywy pływające i systemy ochrony środowiska dla górnictwa, rolnictwa, oczyszczalni ścieków i infrastruktury.",
      primaryCta: "Kontakt",
      secondaryCta: "Zobacz produkty",
      note: "Wyprodukowane w USA dla Ameryki Północnej. Produkcja dla UE na życzenie."
    },
    images: {
      heroAlt: "Przemysłowy zbiornik zabezpieczony pokrywami pływającymi",
      productHexAlt: "Moduły pokryw pływających HexProtect",
      productArmorAlt: "Kule pokryw pływających Armor Ball",
      productRhomboAlt: "Moduły pokryw pływających Rhombo Hexoshield",
      galleryAlt: [
        "Pokrywy pływające na zbiorniku przemysłowym",
        "Osadnik zabezpieczony systemem pokryw pływających",
        "Duży basen z pokrywami pływającymi",
        "Zbliżenie modułów pokryw pływających",
        "Instalacja w oczyszczalni wody",
        "Zespół terenowy rozkładający kule pływające"
      ],
      moldingAlt: "Elementy pokryw przygotowane do formowania wtryskowego"
    },
    invest: {
      kicker: "Dlaczego inwestować teraz?",
      title:
        "Niedobór wody, rosnące koszty operacyjne i ostrzejsze regulacje wymagają działania.",
      subtitle:
        "Inwestycja w pokrywy pływające chroni zasoby, ogranicza parowanie i daje mierzalne oszczędności.",
      cards: [
        {
          title: "Mniejsze straty wody",
          body: "Redukcja parowania nawet o 98% i stabilny poziom zbiorników."
        },
        {
          title: "Lepsza zgodność",
          body: "Spełnienie wymogów środowiskowych i ochrona jakości wody."
        },
        {
          title: "Niższe koszty",
          body: "Mniej chemii, konserwacji i kosztów związanych z odorami."
        }
      ]
    },
    solutions: {
      kicker: "Nasze rozwiązania",
      title: "Systemy zarządzania wodą dla ciężkich zastosowań przemysłowych.",
      subtitle:
        "Nasze pokrywy pływające i systemy ochrony środowiska spełniają wymagania operatorów przemysłowych.",
      industriesTitle: "Główne branże",
      industries: [
        {
          label: "Górnictwo",
          body: "Ograniczenie parowania, zanieczyszczeń i wsparcie zgodności regulacyjnej."
        },
        {
          label: "Rolnictwo",
          body: "Optymalizacja nawadniania i ochrona zasobów."
        },
        {
          label: "Oczyszczanie ścieków",
          body: "Lepsza jakość wody, mniej odorów i niższe koszty."
        },
        {
          label: "Infrastruktura",
          body: "Ochrona zasobów wodnych na lotniskach i w obiektach przemysłowych."
        }
      ],
      performanceTitle: "Skupienie na wydajności",
      performanceBody:
        "Produkty takie jak HexProtect® i Armor Ball® zapewniają trwałość, niską konserwację i wysoką wydajność w trudnych warunkach.",
      performancePoints: [
        "Odporność na wiatr i izolacja",
        "Materiały odporne na UV",
        "Niskie koszty utrzymania",
        "Przystosowane do trudnych środowisk"
      ]
    },
    products: {
      kicker: "Produkty",
      title: "Portfolio pokryw pływających dla każdego rozmiaru zbiornika.",
      subtitle: "Modułowe rozwiązania od małych basenów po duże rezerwuary.",
      items: [
        {
          tag: "Modułowe pokrycie",
          title: "HexProtect®",
          body:
            "Sześciokątne moduły zmniejszające parowanie, zapobiegające zanieczyszczeniom i maksymalizujące pokrycie."
        },
        {
          tag: "Ekonomiczne",
          title: "Armor Ball®",
          body:
            "Lekka konstrukcja kulista, łatwa do wdrożenia, idealna dla mniejszych zbiorników."
        },
        {
          tag: "Ekstremalna trwałość",
          title: "Rhombo Hexoshield®",
          body:
            "Dla środowisk wysokiego ryzyka, np. górnictwa i elektrowni."
        }
      ]
    },
    services: {
      kicker: "Kluczowe usługi",
      title: "Rozwiązania przemysłowe z mierzalnymi rezultatami.",
      subtitle:
        "Od projektu po wdrożenie — dostosowujemy systemy do Twoich warunków.",
      cards: [
        {
          title: "Innowacyjne zarządzanie wodą",
          body:
            "Rozwiązania HexProtect® i Armor Ball® ograniczające parowanie i zanieczyszczenia."
        },
        {
          title: "Zrównoważony rozwój",
          body: "Zgodność z regulacjami i mniejsze zużycie chemii."
        },
        {
          title: "Inżynieria na miarę",
          body: "Dopasowanie do kształtu zbiornika, klimatu i ryzyk."
        },
        {
          title: "Długoterminowa trwałość",
          body: "Opcje 10-letniej gwarancji i materiały do trudnych warunków."
        }
      ]
    },
    roi: {
      kicker: "Wpływ operacyjny",
      title: "Obniż koszty i przyspiesz zwrot z inwestycji.",
      subtitle:
        "Pokrywy pływające redukują wydatki i wzmacniają zgodność środowiskową.",
      cards: [
        {
          title: "Ogranicz koszty chemii",
          body: "Mniej światła to nawet 80% mniej glonów."
        },
        {
          title: "Zredukuj nieprzyjemne zapachy",
          body: "Mniej emisji odorów w oczyszczalniach."
        },
        {
          title: "Walka z niedoborem wody",
          body: "Redukcja parowania nawet o 98%."
        },
        {
          title: "Zgodność regulacyjna",
          body: "Spełnij rosnące wymagania zrównoważonego rozwoju."
        },
        {
          title: "Szybki ROI",
          body: "Zwrot w 3-5 lat dzięki oszczędnościom wody i konserwacji."
        }
      ]
    },
    numbers: {
      kicker: "Kluczowe liczby",
      title: "Wskaźniki efektywności, które mają znaczenie.",
      subtitle: "Wymierny wpływ na parowanie, ROI i ograniczenie glonów.",
      stats: [
        {
          title: "Zatrzymanie parowania",
          highlight: "Do 98%",
          body: "Redukcja parowania w zbiornikach przemysłowych."
        },
        {
          title: "ROI",
          highlight: "3-5 lat",
          body: "Zwrot dzięki oszczędnościom wody i mniejszej konserwacji."
        },
        {
          title: "Blokada światła",
          highlight: "95-98%",
          body: "Do 80% mniej glonów i niższe koszty utrzymania."
        }
      ]
    },
    trusted: {
      kicker: "Zaufanie branży",
      title: "Operatorzy przemysłowi stawiają na sprawdzoną skuteczność.",
      subtitle:
        "Wspieramy górnictwo, rolnictwo, oczyszczalnie i infrastrukturę.",
      industries: ["Górnictwo", "Uzdatnianie wody", "Rolnictwo", "Infrastruktura"],
      cardTitle: "Zaufanie branży",
      cardBody:
        "Dostarczamy rozwiązania ochrony środowiska dla kluczowych sektorów przemysłowych.",
      link: "Poproś o referencje"
    },
    gallery: {
      kicker: "Realizacje terenowe",
      title: "Instalacje na zbiornikach przemysłowych i rezerwuarach.",
      subtitle: "Zastąp poniższe pola zdjęciami projektów."
    },
    molding: {
      kicker: "Produkcja",
      title: "Możliwości wtrysku dla produkcji na dużą skalę.",
      subtitle:
        "Poza pokrywami pływającymi możemy wytwarzać dowolne elementy z tworzyw sztucznych, korzystając z nowych form wtryskowych.",
      body:
        "Partnerzy produkcyjni zapewniają duże wolumeny i precyzyjne tolerancje. Dzięki nowym formom możemy produkować części niestandardowe poza systemami pokryw.",
      points: [
        "Niestandardowe formy dla nowych zastosowań",
        "Dobór materiałów do docelowego użycia",
        "Skalowalna produkcja i powtarzalna jakość"
      ]
    },
    contact: {
      kicker: "Kontakt",
      title: "Oceńmy lokalizację i zbudujmy rozwiązanie dopasowane do potrzeb.",
      subtitle:
        "Podaj wielkość zbiornika, lokalizację i ograniczenia operacyjne.",
      emailCta: "Wyślij email",
      callCta: "Zadzwoń +1 302 412 0346"
    },
    footer: {
      floating: "Pokrywy pływające",
      legal: "Informacje prawne",
      sitemap: "Mapa strony"
    },
    legal: {
      title: "Warunki korzystania z serwisu",
      intro:
        "Witamy na stronie H INNOV LLC. Korzystając z tej strony, zgadzasz się przestrzegać niniejszych warunków.",
      sections: [
        {
          title: "1. IDENTYFIKACJA I PRAWO WŁAŚCIWE",
          body: [
            "Spółka jest Limited Liability Company (LLC) zarejestrowaną w stanie Delaware, USA.",
            "Status: Spółka działa jako niezależny dystrybutor produktów wytwarzanych przez AWTT Inc.",
            "Prawo właściwe: Niniejsze warunki podlegają prawu stanu Delaware, bez względu na zasady kolizji prawa.",
            "Jurysdykcja: Wszelkie spory wynikające z korzystania z tej strony podlegają wyłącznej jurysdykcji sądów stanu Delaware."
          ]
        },
        {
          title: "2. WŁASNOŚĆ INTELEKTUALNA I PRAWA OSÓB TRZECICH",
          body: [
            "Treści serwisu, w tym teksty, grafiki, logo i obrazy, należą do Spółki, z wyjątkiem elementów należących do partnerów.",
            "Znaki AWTT: Nazwy, logotypy i karty techniczne produktów AWTT są wyłączną własnością AWTT Inc. Spółka używa ich jako autoryzowany dystrybutor.",
            "Ograniczenia: Jakiekolwiek kopiowanie, dystrybucja lub wykorzystanie komercyjne treści bez pisemnej zgody Spółki jest zabronione."
          ]
        },
        {
          title: "3. WYŁĄCZENIA ODPOWIEDZIALNOŚCI (DISCLAIMERS)",
          emphasize: true,
          body: [
            "INFORMACJE O PRODUKTACH: OPISY, PARAMETRY TECHNICZNE (ODPORNOŚĆ CHEMICZNA, TERMICZNA ITP.) ORAZ WIZUALIZACJE POKRYW PŁYWAJĄCYCH MAJĄ CHARAKTER INFORMACYJNY I POCHODZĄ BEZPOŚREDNIO OD PRODUCENTA (AWTT). SPÓŁKA NIE GWARANTUJE ICH BEZBŁĘDNOŚCI ANI AKTUALNOŚCI.",
            "KORZYSTANIE Z SERWISU: USŁUGA JEST DOSTARCZANA „TAK JAK JEST” („AS IS”) ORAZ „W MIARĘ DOSTĘPNOŚCI”. SPÓŁKA NIE UDZIELA ŻADNYCH GWARANCJI, WYRAŹNYCH ANI DOROZUMIANYCH, DOTYCZĄCYCH DZIAŁANIA SERWISU.",
            "OGRANICZENIE ODPOWIEDZIALNOŚCI: W ŻADNYM WYPADKU SPÓŁKA, JEJ CZŁONKOWIE LUB PRACOWNICY NIE PONOSZĄ ODPOWIEDZIALNOŚCI ZA SZKODY BEZPOŚREDNIE, POŚREDNIE, NASTĘPCZE (UTRATA ZYSKU, PRZESTÓJ W DZIAŁALNOŚCI) LUB KARNE WYNIKAJĄCE Z KORZYSTANIA LUB BRAKU DOSTĘPU DO SERWISU."
          ]
        },
        {
          title: "4. LINKI DO STRON TRZECICH",
          body: [
            "Serwis może zawierać linki do stron osób trzecich, w tym do strony AWTT. Spółka nie kontroluje treści, polityk prywatności ani praktyk tych stron i nie ponosi za nie odpowiedzialności."
          ]
        },
        {
          title: "5. ZMIANY WARUNKÓW",
          body: [
            "Spółka zastrzega sobie prawo do zmiany niniejszych warunków w dowolnym czasie bez wcześniejszego powiadomienia.",
            "Użytkownik jest zobowiązany do regularnego sprawdzania tej strony.",
            "Dalsze korzystanie z serwisu po publikacji zmian oznacza ich akceptację."
          ]
        }
      ],
      contactLabel: "6. KONTAKT",
      contactText: "W sprawach dotyczących niniejszych warunków prosimy o kontakt:",
      contactEmail: "hinnovcompamy@gmail.com"
    },
    sitemap: {
      title: "Mapa strony",
      sectionsTitle: "Sekcje",
      sections: [
        "Rozwiązania",
        "Produkty",
        "Usługi",
        "ROI",
        "Kluczowe liczby",
        "Zaufanie branży",
        "Galeria",
        "Produkcja",
        "Kontakt"
      ],
      languageTitle: "Języki"
    }
  }
};
