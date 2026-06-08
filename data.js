window.WMRadarData = {
  "metadata": {
    "snapshotDate": "2026-06-07",
    "tournament": "FIFA World Cup 2026",
    "format": "48 Teams, 104 Spiele, 12 Gruppen",
    "status": "MVP mit offiziellen Basisdaten, strukturiertem JSON-Kern und kuratierten Seed-Analysen",
    "baseDate": "2026-06-13",
    "officialLinks": [
      {
        "label": "FIFA Spielplan",
        "url": "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums"
      },
      {
        "label": "FIFA Scores & Fixtures",
        "url": "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures"
      },
      {
        "label": "FIFA Teams",
        "url": "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/"
      }
    ]
  },
  "dataStatus": [
    {
      "label": "Turnierformat",
      "value": "Echt",
      "tone": "real",
      "detail": "48 Teams und 104 Spiele laut FIFA.",
      "confidence": 98
    },
    {
      "label": "JSON-Datenkern",
      "value": "Neu",
      "tone": "model",
      "detail": "Teams, Matches und Gewichtungen liegen jetzt strukturiert in data/.",
      "confidence": 86
    },
    {
      "label": "Spielplan-Basis",
      "value": "Teilweise echt",
      "tone": "mixed",
      "detail": "Einige Partien sind aus FIFA-nahen Quellen gespiegelt, Seed-Duelle bleiben markiert.",
      "confidence": 78
    },
    {
      "label": "Gruppen & Szenarien",
      "value": "Modell",
      "tone": "mixed",
      "detail": "Gruppen A-L, Tabellenprojektion und K.o.-Slots sind strukturiert; echte Resultate werden spaeter eingespielt.",
      "confidence": 74
    },
    {
      "label": "Resultate & Tabellen",
      "value": "Projektion",
      "tone": "model",
      "detail": "Noch keine echten Ergebnisse; Tabellen laufen transparent im Projektionsmodus.",
      "confidence": 68
    },
    {
      "label": "Post-Match Reports",
      "value": "Blueprint",
      "tone": "model",
      "detail": "Report-Schema, Metriken und Validierungsfragen sind vorbereitet.",
      "confidence": 72
    },
    {
      "label": "Match Value Score",
      "value": "Live berechnet",
      "tone": "model",
      "detail": "Score und Empfehlung entstehen aus Signalen plus deinen Gewichtungen.",
      "confidence": 76
    }
  ],
  "teams": [
    {
      "code": "ARG",
      "name": "Argentinien",
      "flag": "🇦🇷",
      "confederation": "CONMEBOL",
      "focus": true,
      "style": "Kontrolle, Zwischenlinien, Turniermanagement",
      "watchPriority": 96
    },
    {
      "code": "BRA",
      "name": "Brasilien",
      "flag": "🇧🇷",
      "confederation": "CONMEBOL",
      "focus": true,
      "style": "Dribbling, Tempo, individuelle Überlegenheit",
      "watchPriority": 94
    },
    {
      "code": "ESP",
      "name": "Spanien",
      "flag": "🇪🇸",
      "confederation": "UEFA",
      "focus": true,
      "style": "Positionsspiel, Gegenpressing, Halbraumkontrolle",
      "watchPriority": 93
    },
    {
      "code": "GER",
      "name": "Deutschland",
      "flag": "🇩🇪",
      "confederation": "UEFA",
      "focus": true,
      "style": "Ballbesitz, flexible Achter, Restverteidigung",
      "watchPriority": 98
    },
    {
      "code": "ENG",
      "name": "England",
      "flag": "🏴",
      "confederation": "UEFA",
      "focus": true,
      "style": "Athletik, Standards, hohe Einzelqualität",
      "watchPriority": 92
    },
    {
      "code": "FRA",
      "name": "Frankreich",
      "flag": "🇫🇷",
      "confederation": "UEFA",
      "focus": true,
      "style": "Transitions, Tiefe, explosive Flügel",
      "watchPriority": 94
    },
    {
      "code": "MAR",
      "name": "Marokko",
      "flag": "🇲🇦",
      "confederation": "CAF",
      "focus": false,
      "surprise": true,
      "style": "Kompaktheit, Pressingfallen, Konter",
      "watchPriority": 86
    },
    {
      "code": "JPN",
      "name": "Japan",
      "flag": "🇯🇵",
      "confederation": "AFC",
      "focus": false,
      "surprise": true,
      "style": "Pressingdisziplin, Dynamik, kollektive Anpassung",
      "watchPriority": 84
    },
    {
      "code": "NOR",
      "name": "Norwegen",
      "flag": "🇳🇴",
      "confederation": "UEFA",
      "focus": false,
      "surprise": true,
      "style": "Vertikalität, Zielspieler, Kreativzentrum",
      "watchPriority": 82
    },
    {
      "code": "TUR",
      "name": "Türkei",
      "flag": "🇹🇷",
      "confederation": "UEFA",
      "focus": false,
      "surprise": true,
      "style": "Tempo, Mut im Zentrum, junge Kreativität",
      "watchPriority": 79
    },
    {
      "code": "CUW",
      "name": "Curaçao",
      "flag": "🇨🇼",
      "confederation": "Concacaf",
      "focus": false
    },
    {
      "code": "CRO",
      "name": "Kroatien",
      "flag": "🇭🇷",
      "confederation": "UEFA",
      "focus": false
    },
    {
      "code": "ALG",
      "name": "Algerien",
      "flag": "🇩🇿",
      "confederation": "CAF",
      "focus": false
    },
    {
      "code": "URU",
      "name": "Uruguay",
      "flag": "🇺🇾",
      "confederation": "CONMEBOL",
      "focus": false
    },
    {
      "code": "QAT",
      "name": "Katar",
      "flag": "🇶🇦",
      "confederation": "AFC",
      "focus": false
    },
    {
      "code": "SUI",
      "name": "Schweiz",
      "flag": "🇨🇭",
      "confederation": "UEFA",
      "focus": false
    },
    {
      "code": "HAI",
      "name": "Haiti",
      "flag": "🇭🇹",
      "confederation": "Concacaf",
      "focus": false
    },
    {
      "code": "SCO",
      "name": "Schottland",
      "flag": "🏴",
      "confederation": "UEFA",
      "focus": false
    },
    {
      "code": "NED",
      "name": "Niederlande",
      "flag": "🇳🇱",
      "confederation": "UEFA",
      "focus": false
    },
    {
      "code": "CIV",
      "name": "Côte d'Ivoire",
      "flag": "🇨🇮",
      "confederation": "CAF",
      "focus": false
    },
    {
      "code": "ECU",
      "name": "Ecuador",
      "flag": "🇪🇨",
      "confederation": "CONMEBOL",
      "focus": false
    },
    {
      "code": "MEX",
      "name": "Mexiko",
      "flag": "🇲🇽",
      "confederation": "Concacaf",
      "focus": false
    },
    {
      "code": "RSA",
      "name": "Südafrika",
      "flag": "🇿🇦",
      "confederation": "CAF",
      "focus": false
    },
    {
      "code": "KOR",
      "name": "Südkorea",
      "flag": "🇰🇷",
      "confederation": "AFC",
      "focus": false
    },
    {
      "code": "CZE",
      "name": "Tschechien",
      "flag": "🇨🇿",
      "confederation": "UEFA",
      "focus": false
    },
    {
      "code": "CAN",
      "name": "Kanada",
      "flag": "🇨🇦",
      "confederation": "Concacaf",
      "focus": false
    },
    {
      "code": "BIH",
      "name": "Bosnien und Herzegowina",
      "flag": "🇧🇦",
      "confederation": "UEFA",
      "focus": false
    },
    {
      "code": "USA",
      "name": "USA",
      "flag": "🇺🇸",
      "confederation": "Concacaf",
      "focus": false
    },
    {
      "code": "PAR",
      "name": "Paraguay",
      "flag": "🇵🇾",
      "confederation": "CONMEBOL",
      "focus": false
    },
    {
      "code": "AUS",
      "name": "Australien",
      "flag": "🇦🇺",
      "confederation": "AFC",
      "focus": false
    },
    {
      "code": "TUN",
      "name": "Tunesien",
      "flag": "🇹🇳",
      "confederation": "CAF",
      "focus": false
    },
    {
      "code": "SWE",
      "name": "Schweden",
      "flag": "🇸🇪",
      "confederation": "UEFA",
      "focus": false
    },
    {
      "code": "BEL",
      "name": "Belgien",
      "flag": "🇧🇪",
      "confederation": "UEFA",
      "focus": false
    },
    {
      "code": "EGY",
      "name": "Ägypten",
      "flag": "🇪🇬",
      "confederation": "CAF",
      "focus": false
    },
    {
      "code": "IRN",
      "name": "Iran",
      "flag": "🇮🇷",
      "confederation": "AFC",
      "focus": false
    },
    {
      "code": "NZL",
      "name": "Neuseeland",
      "flag": "🇳🇿",
      "confederation": "OFC",
      "focus": false
    },
    {
      "code": "CPV",
      "name": "Kap Verde",
      "flag": "🇨🇻",
      "confederation": "CAF",
      "focus": false
    },
    {
      "code": "KSA",
      "name": "Saudi-Arabien",
      "flag": "🇸🇦",
      "confederation": "AFC",
      "focus": false
    },
    {
      "code": "SEN",
      "name": "Senegal",
      "flag": "🇸🇳",
      "confederation": "CAF",
      "focus": false
    },
    {
      "code": "IRQ",
      "name": "Irak",
      "flag": "🇮🇶",
      "confederation": "AFC",
      "focus": false
    },
    {
      "code": "AUT",
      "name": "Österreich",
      "flag": "🇦🇹",
      "confederation": "UEFA",
      "focus": false
    },
    {
      "code": "JOR",
      "name": "Jordanien",
      "flag": "🇯🇴",
      "confederation": "AFC",
      "focus": false
    },
    {
      "code": "POR",
      "name": "Portugal",
      "flag": "🇵🇹",
      "confederation": "UEFA",
      "focus": true,
      "style": "Ballbesitzqualität, Halbraumbesetzung, individuelle Kreativität",
      "watchPriority": 91
    },
    {
      "code": "UZB",
      "name": "Usbekistan",
      "flag": "🇺🇿",
      "confederation": "AFC",
      "focus": false
    },
    {
      "code": "COL",
      "name": "Kolumbien",
      "flag": "🇨🇴",
      "confederation": "CONMEBOL",
      "focus": false
    },
    {
      "code": "COD",
      "name": "DR Kongo",
      "flag": "🇨🇩",
      "confederation": "CAF",
      "focus": false
    },
    {
      "code": "GHA",
      "name": "Ghana",
      "flag": "🇬🇭",
      "confederation": "CAF",
      "focus": false
    },
    {
      "code": "PAN",
      "name": "Panama",
      "flag": "🇵🇦",
      "confederation": "Concacaf",
      "focus": false
    }
  ],
  "groups": [
    {
      "id": "A",
      "teams": [
        "MEX",
        "RSA",
        "KOR",
        "CZE"
      ],
      "pathRelevance": 42,
      "watchStrategy": "Host-Gruppe beobachten, aber ohne Fokus-Team nur selektiv. Relevant, falls ein möglicher Drittplatzierter in den Finalweg eines Favoriten rutscht.",
      "pathNote": "Kann indirekt über Drittplatzierte relevant werden.",
      "modelPath": "1A und 2A gehen sicher weiter; 3A kann in mehrere K.o.-Wege fallen.",
      "sourceLevel": "mixed"
    },
    {
      "id": "B",
      "teams": [
        "CAN",
        "SUI",
        "QAT",
        "BIH"
      ],
      "pathRelevance": 48,
      "watchStrategy": "Schweiz und Kanada können taktisch interessant werden; Qatar-Spiele eher Ergebnischeck, wenn kein Upset-Signal entsteht.",
      "pathNote": "Mögliche Drittplatzierung kann spätere Favoritenpfade beeinflussen.",
      "modelPath": "Gruppe mit mittlerer Relevanz, weil kein Fokus-Team direkt betroffen ist.",
      "sourceLevel": "mixed"
    },
    {
      "id": "C",
      "teams": [
        "BRA",
        "MAR",
        "HAI",
        "SCO"
      ],
      "pathRelevance": 92,
      "watchStrategy": "Hoch priorisieren: Brasilien ist Fokus-Team, Marokko ist Surprise-Team, und die direkten Duelle haben echten Stilwert.",
      "pathNote": "Brasiliens Platzierung steuert seinen frühen K.o.-Gegner; Marokko kann den Gruppenschnitt stark verschieben.",
      "modelPath": "1C/2C sind für Favoriten- und Upset-Szenarien hochrelevant; 3C kann als gefährlicher Außenseiter weiterkommen.",
      "sourceLevel": "mixed"
    },
    {
      "id": "D",
      "teams": [
        "USA",
        "PAR",
        "AUS",
        "TUR"
      ],
      "pathRelevance": 67,
      "watchStrategy": "Türkei als Surprise-Team scannen, USA wegen Heimvorteil beobachten. Nicht jedes Spiel live, aber viele Highlights lohnen.",
      "pathNote": "Türkei kann als attraktiver Außenseiter für spätere K.o.-Duelle interessant werden.",
      "modelPath": "Gruppe mit Upset-Wert, aber ohne direkten Fokus-Team-Anker.",
      "sourceLevel": "mixed"
    },
    {
      "id": "E",
      "teams": [
        "GER",
        "CUW",
        "CIV",
        "ECU"
      ],
      "pathRelevance": 96,
      "watchStrategy": "Deutschland-Gruppe vollständig im Blick behalten. Auch Côte d'Ivoire/Ecuador ist relevant, weil es Deutschlands Gruppendynamik beeinflusst.",
      "pathNote": "Jedes Ergebnis beeinflusst Deutschlands Achtelfinalgegner und mögliche Gegnerqualität.",
      "modelPath": "1E/2E sind Kernszenarien für Deutschland; 3E kann zusätzlich in die Drittplatziertenlogik fallen.",
      "sourceLevel": "mixed"
    },
    {
      "id": "F",
      "teams": [
        "NED",
        "JPN",
        "TUN",
        "SWE"
      ],
      "pathRelevance": 78,
      "watchStrategy": "Japan als Surprise-Team und Niederlande als Qualitätsanker: taktisch viele gute Spiele, besonders gegen strukturierte Gegner.",
      "pathNote": "Kann für spätere Favoriten relevant werden, wenn Japan oder Niederlande als unangenehmer K.o.-Gegner auftauchen.",
      "modelPath": "1F/2F mit hohem taktischem Gegnerwert; 3F kann gefährlicher Third-Place-Kandidat sein.",
      "sourceLevel": "mixed"
    },
    {
      "id": "G",
      "teams": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "pathRelevance": 52,
      "watchStrategy": "Belgien checken, aber ohne Fokus- oder Surprise-Team eher datengetrieben beobachten.",
      "pathNote": "Relevanz steigt, wenn Belgien als möglicher K.o.-Gegner in den Favoritenpfad fällt.",
      "modelPath": "Mittlere Relevanz, abhängig von späterer Bracket-Zuordnung.",
      "sourceLevel": "mixed"
    },
    {
      "id": "H",
      "teams": [
        "ESP",
        "CPV",
        "KSA",
        "URU"
      ],
      "pathRelevance": 94,
      "watchStrategy": "Spanien-Gruppe hoch priorisieren. Uruguay und Saudi-Arabien machen den Stilkontrast und Gruppenschnitt relevant.",
      "pathNote": "Spaniens Platzierung bestimmt frühen K.o.-Gegner; Uruguay ist ein potenziell harter Gegnerstörer.",
      "modelPath": "1H/2H sind Fokusszenarien; 3H kann wegen Uruguay/Saudi-Konstellation unangenehm werden.",
      "sourceLevel": "mixed"
    },
    {
      "id": "I",
      "teams": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "pathRelevance": 93,
      "watchStrategy": "Frankreich plus Norwegen: hohe Live- und Analysepriorität. Senegal kann die Gruppe physisch/taktisch kompliziert machen.",
      "pathNote": "Frankreichs Weg ins Finale und Norwegens Upset-Potenzial machen fast jedes Gruppenspiel relevant.",
      "modelPath": "1I/2I sind starke K.o.-Kandidaten; 3I kann sehr gefährlich werden.",
      "sourceLevel": "mixed"
    },
    {
      "id": "J",
      "teams": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "pathRelevance": 90,
      "watchStrategy": "Argentinien priorisieren, die restlichen Spiele als Weiterkommen-und-Gegnercheck nutzen.",
      "pathNote": "Argentiniens Platzierung ist zentral, aber Low-Value-Spiele können trotzdem reichen, wenn keine Upsets entstehen.",
      "modelPath": "1J/2J bestimmen den Argentinien-Weg; 3J nur relevant bei unerwarteter Tabellenlage.",
      "sourceLevel": "mixed"
    },
    {
      "id": "K",
      "teams": [
        "POR",
        "UZB",
        "COL",
        "COD"
      ],
      "pathRelevance": 58,
      "watchStrategy": "Portugal und Kolumbien datengetrieben beobachten. Live nur bei hohem Score oder Weiterkommen-und-Gegner-Verbindung.",
      "pathNote": "Kann als späterer Gegnerszenario für Fokus-Teams wichtig werden.",
      "modelPath": "Mittlerer bis hoher Gegnerwert, aber aktuell ohne direkten Fokusanker.",
      "sourceLevel": "mixed"
    },
    {
      "id": "L",
      "teams": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "pathRelevance": 91,
      "watchStrategy": "England-Gruppe hoch priorisieren. Kroatien ist als Ballbesitz-/Kontrollgegner besonders analysewürdig.",
      "pathNote": "Englands Platzierung und Kroatiens Rolle können stark verändern, wer weiterkommt und gegen wen es danach geht.",
      "modelPath": "1L/2L sind Fokusszenarien; 3L kann wegen Kroatien/Ghana ebenfalls relevant sein.",
      "sourceLevel": "mixed"
    }
  ],
  "teamProfiles": [
    {
      "code": "ARG",
      "level": "seed",
      "identity": "Turnierkontrolle mit Rhythmuswechseln, enger Zwischenlinienbesetzung und sehr bewusstem Spielmanagement.",
      "buildUp": "Geduldiger Aufbau, viele kleine Verbindungen im Zentrum, danach Beschleunigung über freie Halbräume.",
      "pressing": "Situativ aggressiv, oft mit klaren Triggern nach Rückpässen oder schlechten ersten Kontakten.",
      "transition": "Nach Ballverlusten eher Kontrolle zurückholen als wildes Gegenpressing über 90 Minuten.",
      "setPieces": "Gefährlich über präzise erste Kontakte, zweite Bälle und gute Blockbewegungen.",
      "weakness": "Kann phasenweise zu kontrolliert werden, wenn der Gegner tief bleibt und keine Räume zwischen den Linien anbietet.",
      "watchCues": [
        "Findet Argentinien den freien Mann hinter der ersten Linie?",
        "Wie gut bleibt die Restverteidigung bei langen Ballbesitzphasen?",
        "Wird Tempo bewusst angezogen oder bleibt das Spiel im Verwaltungsmodus?"
      ],
      "bestAgainst": "Gegner, die im Zentrum Passfenster öffnen.",
      "dangerAgainst": "Sehr kompakte Blöcke mit schnellen diagonalen Kontern.",
      "confidence": 62
    },
    {
      "code": "BRA",
      "level": "seed",
      "identity": "Individuelle Überlegenheit, Dribblingdruck, schnelle Verlagerungen und hohe Gefahr aus offenen Räumen.",
      "buildUp": "Aufbau sucht häufig die Isolation am Flügel und den schnellen Anschluss in den Halbraum.",
      "pressing": "Kann hoch zustellen, ist aber besonders gefährlich, wenn Ballgewinne sofort in Tempo umschlagen.",
      "transition": "Sehr hohe Upside nach Ballgewinnen, solange die Absicherung hinter Dribblings sauber steht.",
      "setPieces": "Gute Wucht und Timing im Strafraum, aber nicht der zentrale Identitätsanker.",
      "weakness": "Nach riskanten Dribblings können offene Räume hinter dem Ball entstehen.",
      "watchCues": [
        "Gewinnt Brasilien die ersten 1-gegen-1s am Flügel?",
        "Wie schnell kommt die Rückverlagerung nach geblocktem Dribbling?",
        "Bleibt der ballferne Raum abgesichert?"
      ],
      "bestAgainst": "Mannorientierte Gegner, die isolierte Duelle zulassen.",
      "dangerAgainst": "Kompakte Pressingfallen mit sauberem Konterausgang.",
      "confidence": 64
    },
    {
      "code": "ESP",
      "level": "seed",
      "identity": "Positionsspiel, Ballzirkulation, Gegenpressing und permanentes Bespielen der Halbräume.",
      "buildUp": "Strukturierter Aufbau mit klaren Höhenstaffelungen und vielen kleinen Abständen.",
      "pressing": "Direktes Gegenpressing nach Ballverlusten, um den Gegner in dessen erster Aktion zu ersticken.",
      "transition": "Offensiv stark nach sofortigen Rückeroberungen, defensiv anfällig bei überspieltem Gegenpressing.",
      "setPieces": "Mehr Präzision und zweite Bälle als reine Kopfballwucht.",
      "weakness": "Wenn der Gegner die erste Gegenpressingwelle überspielt, muss die Restverteidigung große Räume kontrollieren.",
      "watchCues": [
        "Wie oft kommt Spanien hinter den gegnerischen Sechser?",
        "Wird der ballferne Flügel geduldig vorbereitet?",
        "Wie stabil ist die Absicherung nach Seitenwechseln?"
      ],
      "bestAgainst": "Teams, die zu breit oder zu passiv verteidigen.",
      "dangerAgainst": "Direkte Gegner mit Tempo in den Rücken der Achter.",
      "confidence": 66
    },
    {
      "code": "GER",
      "level": "seed",
      "identity": "Ballbesitz, flexible Achterrollen, starke Kombinationsräume und ein permanentes Restverteidigungs-Thema.",
      "buildUp": "Viele Dreiecke im Zentrum, Außenverteidigerhöhen variabel, Spielverlagerungen als Öffner.",
      "pressing": "Gegenpressing ist zentral: Deutschland will Ballverluste sofort in neue Angriffe verwandeln.",
      "transition": "Offensiv gefährlich nach Rückeroberungen, defensiv abhängig von der Balance hinter dem Ball.",
      "setPieces": "Gute Varianten möglich, besonders bei zweiten Bällen am Strafraumrand.",
      "weakness": "Bei zu vielen Spielern vor dem Ball entstehen Konterräume neben und hinter der Sechserzone.",
      "watchCues": [
        "Ist der Sechserraum nach Ballverlusten besetzt?",
        "Schaffen die Achter Tiefe ohne die Mitte zu leeren?",
        "Wird gegen tiefe Gegner genug Tempo erzeugt?"
      ],
      "bestAgainst": "Teams, die tief stehen und lange verteidigen müssen.",
      "dangerAgainst": "Gegner mit schnellen Ausbrüchen in den Rücken der Außenverteidiger.",
      "confidence": 67
    },
    {
      "code": "ENG",
      "level": "seed",
      "identity": "Hohe Einzelqualität, physische Kontrolle, Standards und die Frage nach Tempo im Ballbesitz.",
      "buildUp": "Kann kontrolliert aufbauen, braucht aber klare Verbindungen zwischen Mittelfeld und letzter Linie.",
      "pressing": "Hohe Pressingphasen sind möglich, aber Timing und Abstände entscheiden über Stabilität.",
      "transition": "Stark, wenn Ballgewinne sofort auf Tempo und Tiefenläufe treffen.",
      "setPieces": "Ein großer Pluspunkt: Wucht, Timing und viele Zielzonen im Strafraum.",
      "weakness": "Kann zu vorsichtig werden, wenn der Gegner das Zentrum schließt und Tempo aus dem Spiel nimmt.",
      "watchCues": [
        "Wird das Zentrum mutig bespielt oder nur außen zirkuliert?",
        "Springen die Achter im Pressing zu früh heraus?",
        "Wie viele Standards entstehen aus Druckphasen?"
      ],
      "bestAgainst": "Gegner, die Flügelräume und Standards zulassen.",
      "dangerAgainst": "Teams mit hoher Pressingresistenz und guter Ballzirkulation.",
      "confidence": 63
    },
    {
      "code": "FRA",
      "level": "seed",
      "identity": "Explosive Tiefe, Übergänge, Flügeltempo und enorme individuelle Durchschlagskraft.",
      "buildUp": "Nicht immer maximal dominant, aber sehr gefährlich, sobald offene Räume entstehen.",
      "pressing": "Phasenweise kontrolliert statt dauerhaft wild, mit Fokus auf günstige Umschaltmomente.",
      "transition": "Eine der gefährlichsten Spielphasen: schnelle Läufe, offene Räume, wenige Kontakte.",
      "setPieces": "Stark durch Athletik, Strafraumpräsenz und zweite Bälle.",
      "weakness": "Wenn das Spiel langsam und eng wird, kann die Chance Creation stärker von Einzelaktionen abhängen.",
      "watchCues": [
        "Wie früh findet Frankreich Tiefe hinter der letzten Linie?",
        "Werden Ballgewinne sofort vertikal gemacht?",
        "Bleibt die Struktur stabil, wenn der Gegner lange Ballbesitzphasen hat?"
      ],
      "bestAgainst": "Hoch stehende Gegner mit Raum hinter der Kette.",
      "dangerAgainst": "Teams, die Tempo rausnehmen und Frankreich lange verteidigen lassen.",
      "confidence": 65
    },
    {
      "code": "POR",
      "level": "seed",
      "identity": "Technische Ballbesitzqualität, viele Kreativspieler zwischen den Linien und die Balancefrage zwischen Kontrolle und Direktheit.",
      "buildUp": "Portugal kann geduldig aufbauen, sucht aber häufig den Moment, in dem ein Achter, Zehner oder Flügelspieler zwischen den Linien frei wird.",
      "pressing": "Phasenweise hoch und mannorientiert, aber die Abstände hinter der ersten Pressinglinie entscheiden über Stabilität.",
      "transition": "Sehr gefährlich, wenn Ballgewinne sofort auf kreative Läufe und diagonale Anschlussaktionen treffen.",
      "setPieces": "Hohe individuelle Qualität bei ruhenden Bällen, gute Zielspieler und starke zweite-Ball-Zonen.",
      "weakness": "Kann bei zu vielen Kreativspielern vor dem Ball Restverteidigungsräume öffnen und gegen direkte Gegner verwundbar werden.",
      "watchCues": [
        "Findet Portugal den freien Spieler zwischen gegnerischer Sechs und Innenverteidigung?",
        "Bleibt die Restverteidigung stabil, wenn beide Außenverteidiger hoch stehen?",
        "Wer übernimmt im Druckmoment Führung: Trainerstruktur, Kapitän, Kreativspieler oder Einzelaktion?"
      ],
      "bestAgainst": "Gegner, die zwischen den Linien zu große Abstände lassen.",
      "dangerAgainst": "Direkte Gegner mit Tempo hinter Portugals Außenverteidigern.",
      "confidence": 62
    },
    {
      "code": "MAR",
      "level": "seed",
      "identity": "Kompakte Abstände, Pressingfallen, emotionale Intensität und sehr gute Konterfenster.",
      "buildUp": "Pragmatisch, aber mit klaren Ausgängen über Flügel und diagonale Anschlussaktionen.",
      "pressing": "Lenkt Gegner gerne in seitliche Fallen und attackiert dann aggressiv.",
      "transition": "Sehr gefährlich, wenn nach Ballgewinn sofort Raum vor der gegnerischen Restverteidigung da ist.",
      "setPieces": "Solide Wucht, gefährlich vor allem bei zweiten Bällen und Unordnung.",
      "weakness": "Bei langer eigener Ballbesitzphase kann die kreative Durchdringung schwerer fallen.",
      "watchCues": [
        "Lockt Marokko Brasilien oder andere Favoriten konsequent an die Linie?",
        "Wie sauber ist der erste Pass nach Ballgewinn?",
        "Kann Marokko auch selbst geduldig Chancen bauen?"
      ],
      "bestAgainst": "Favoriten, die viele Spieler vor dem Ball haben.",
      "dangerAgainst": "Geduldige Gegner mit schnellen Seitenwechseln.",
      "confidence": 64
    },
    {
      "code": "JPN",
      "level": "seed",
      "identity": "Kollektive Disziplin, Pressingqualität, gute Laufwege und hohe Anpassungsfähigkeit.",
      "buildUp": "Saubere technische Verbindungen, oft mit schnellem Wechsel zwischen kurz und vertikal.",
      "pressing": "Sehr koordiniert, mit hoher Bereitschaft, schlechte Körperstellungen sofort zu attackieren.",
      "transition": "Schnell und kollektiv, aber nicht chaotisch. Viele Anschlussläufe nach Ballgewinn.",
      "setPieces": "Eher präzise Varianten als pure Physis.",
      "weakness": "Gegen sehr robuste Strafraumteams kann die letzte Linie unter Druck geraten.",
      "watchCues": [
        "Wie oft zwingt Japan den Gegner zu Rückpässen?",
        "Wie viele Anschlussläufe gibt es nach dem ersten Ballgewinn?",
        "Kann Japan Standards gegen größere Gegner sauber verteidigen?"
      ],
      "bestAgainst": "Aufbauteams mit riskanten Pässen durch das Zentrum.",
      "dangerAgainst": "Teams mit Wucht, zweiten Bällen und vielen Strafraumduellen.",
      "confidence": 65
    },
    {
      "code": "NOR",
      "level": "seed",
      "identity": "Vertikalität, Zielspielerlogik, klare Rollen und gefährliche Läufe hinter die Linie.",
      "buildUp": "Sucht schnell den progressiven Anschluss, oft mit klarem Fokus auf zentrale Kreativräume.",
      "pressing": "Nicht immer extrem hoch, aber gefährlich, wenn der Gegner in vorhersehbare Zonen spielt.",
      "transition": "Sehr hohes Potenzial, weil wenige Kontakte reichen, um Tiefe zu erzeugen.",
      "setPieces": "Große Gefahr durch Größe, Timing und Zielzonen.",
      "weakness": "Wenn der Gegner Tiefe kontrolliert und Zentrum schließt, kann Norwegen eindimensionaler wirken.",
      "watchCues": [
        "Wie oft wird die letzte Linie früh attackiert?",
        "Findet Norwegen zentrale Kreativität vor dem vertikalen Ball?",
        "Wie viele Standards werden erzwungen?"
      ],
      "bestAgainst": "Teams mit hoher Linie und langsamer Rückwärtsbewegung.",
      "dangerAgainst": "Tiefe Blöcke mit guter Kontrolle über zweite Bälle.",
      "confidence": 61
    },
    {
      "code": "TUR",
      "level": "seed",
      "identity": "Mutiges Zentrum, junge Kreativität, Tempo und eine gewisse kontrollierte Wildheit.",
      "buildUp": "Kann schnelle Kombinationen durchs Zentrum suchen, nimmt dabei aber auch Risiko.",
      "pressing": "Aggressiv in Phasen, besonders wenn Momentum und Publikumsdruck entstehen.",
      "transition": "Gefährlich bei offenen Spielen, aber mit Balance-Risiko hinter dem Ball.",
      "setPieces": "Gute Schuss- und zweite-Ball-Potenziale rund um den Strafraum.",
      "weakness": "Kann Spiele zu offen werden lassen, wenn Struktur und Emotion nicht sauber zusammenfinden.",
      "watchCues": [
        "Bleibt die Mitte nach Ballverlusten stabil?",
        "Wie mutig sind die ersten Pässe nach Ballgewinn?",
        "Kippt das Spiel in kreative Kontrolle oder in offenes Hin und Her?"
      ],
      "bestAgainst": "Gegner, die Tempo und Zentrum nicht gut kontrollieren.",
      "dangerAgainst": "Teams mit ruhiger Ballzirkulation und starker Restverteidigung.",
      "confidence": 59
    }
  ],
  "keyFigures": [
    {
      "team": "GER",
      "figures": [
        {
          "name": "Julian Nagelsmann",
          "role": "Trainer",
          "lens": "Strukturgeber",
          "expectation": "Deutschland braucht klare Rollen, stabile Restverteidigung und mutige Ballbesitzphasen.",
          "watch": "Wie schnell passt er Rollen, Pressinghöhe und Absicherung an, wenn ein Spiel kippt?",
          "development": "Seed: Trainerwirkung wird im Turnier über Anpassungen, Wechsel und Spielkontrolle bewertet."
        },
        {
          "name": "Joshua Kimmich",
          "role": "Taktikspieler",
          "lens": "Rhythmus und Erwartungsdruck",
          "expectation": "Er soll Struktur, Tempo, Standards und mentale Stabilität verbinden.",
          "watch": "Trägt er das Spiel unter Druck oder wird er zum Ziel gegnerischer Pressingfallen?",
          "development": "Seed: Performance wird über Ballverluste, progressive Pässe, Gegenpressing und Führungswirkung verfolgt."
        },
        {
          "name": "Florian Wirtz",
          "role": "Kreativspieler",
          "lens": "Zwischenlinienqualität",
          "expectation": "Deutschland braucht von ihm Lösungen gegen tiefe und enge Gegner.",
          "watch": "Kommt er zwischen die Linien oder wird er von der gegnerischen Sechs isoliert?",
          "development": "Seed: Entwicklung wird über Chancenvorbereitung, Raumfindung und Einfluss in engen Spielen beobachtet."
        }
      ]
    },
    {
      "team": "POR",
      "figures": [
        {
          "name": "Roberto Martínez",
          "role": "Trainer",
          "lens": "Balance",
          "expectation": "Portugal muss Kreativität, Erfahrung und Restverteidigung in ein klares Turniermodell bringen.",
          "watch": "Wie balanciert er Ronaldo-Rolle, kreative Achter und defensive Stabilität?",
          "development": "Seed: Trainerwirkung wird über Startelflogik, Wechsel und Spielkontrolle gegen Umschaltteams bewertet."
        },
        {
          "name": "Cristiano Ronaldo",
          "role": "Leader",
          "lens": "Erwartung und Strafraumwirkung",
          "expectation": "Seine Rolle ist weniger Dauerpräsenz allein, sondern Effizienz, Führung und Strafraumgravitation.",
          "watch": "Hilft seine Präsenz Portugals Struktur oder zieht sie zu viel Angriffsspiel auf den Abschlussmoment?",
          "development": "Seed: Entwicklung wird über Abschlüsse, Verbindungsspiel, Pressinglast und Einfluss in engen Phasen bewertet."
        },
        {
          "name": "Vitinha",
          "role": "Taktikspieler",
          "lens": "Spielkontrolle",
          "expectation": "Er kann Portugals Ballbesitz zwischen Sicherheit und Durchbruch verbinden.",
          "watch": "Findet er den Moment für vertikale Pässe oder bleibt Portugal zu zirkulär?",
          "development": "Seed: Entwicklung wird über progressive Pässe, Druckresistenz und Verbindung zu den Kreativzonen bewertet."
        }
      ]
    },
    {
      "team": "BRA",
      "figures": [
        {
          "name": "Carlo Ancelotti",
          "role": "Trainer",
          "lens": "Turniermanagement",
          "expectation": "Brasilien braucht Struktur, ohne die individuelle Improvisation zu bremsen.",
          "watch": "Wie verbindet er Flügelisolierung, zentrale Absicherung und Kontrolle nach Ballverlusten?",
          "development": "Seed: Trainerwirkung wird über Balance, Reaktion auf tiefe Blöcke und Wechselmomente bewertet."
        },
        {
          "name": "Vinícius Júnior",
          "role": "Druckspieler",
          "lens": "1-gegen-1 und Erwartung",
          "expectation": "Er soll Spiele öffnen, ohne Brasilien nach Ballverlusten zu entblößen.",
          "watch": "Gewinnt er die wichtigen Duelle oder zwingt ihn der Gegner in schlechte Winkel?",
          "development": "Seed: Entwicklung wird über Dribblingausgang, Shot Quality und Anschlussaktionen verfolgt."
        },
        {
          "name": "Bruno Guimarães",
          "role": "Taktikspieler",
          "lens": "Absicherung",
          "expectation": "Er kann Rhythmus, Aggressivität und Gegenpressing miteinander verbinden.",
          "watch": "Stabilisiert er Brasilien hinter den kreativen Spielern oder entstehen offene Umschalträume?",
          "development": "Seed: Entwicklung wird über Ballgewinne, progressive Verbindungen und Restverteidigung bewertet."
        }
      ]
    },
    {
      "team": "ARG",
      "figures": [
        {
          "name": "Lionel Scaloni",
          "role": "Trainer",
          "lens": "Rollenmanagement",
          "expectation": "Argentinien muss Erfahrung, Kontrolle und frische Beine sauber staffeln.",
          "watch": "Wie dosiert er Tempo, Intensität und Rollenwechsel über das Turnier?",
          "development": "Seed: Trainerwirkung wird über Spielmanagement, Wechsel und Kontrolle enger Spielstände verfolgt."
        },
        {
          "name": "Lionel Messi",
          "role": "Leader",
          "lens": "Entscheidungsmomente",
          "expectation": "Nicht jede Minute muss dominant sein; entscheidend ist, wann er das Spiel öffnet.",
          "watch": "Bekommt er Zonen mit Blick zum Tor oder muss er zu tief abholen?",
          "development": "Seed: Entwicklung wird über Chance Creation, Freistoß-/Standardgefahr und letzte Pässe bewertet."
        },
        {
          "name": "Enzo Fernández",
          "role": "Taktikspieler",
          "lens": "Verbindung",
          "expectation": "Er soll Kontrolle und vertikale Progression miteinander verbinden.",
          "watch": "Findet er den Pass durch die erste Drucklinie oder wird Argentinien zu horizontal?",
          "development": "Seed: Entwicklung wird über progressive Pässe, Ballgewinne und Pressingresistenz verfolgt."
        }
      ]
    },
    {
      "team": "ESP",
      "figures": [
        {
          "name": "Luis de la Fuente",
          "role": "Trainer",
          "lens": "Kontinuität",
          "expectation": "Spanien soll Positionsspiel, Flügeltempo und Gegenpressing zu einem reifen Turnierteam verbinden.",
          "watch": "Wie hält er die Balance, wenn Gegner das Zentrum schließen und Umschaltmomente suchen?",
          "development": "Seed: Trainerwirkung wird über Rollenstabilität, Pressingabstände und Anpassungen bewertet."
        },
        {
          "name": "Lamine Yamal",
          "role": "Druckspieler",
          "lens": "Kreativität unter Erwartung",
          "expectation": "Er kann Spanien öffnen, soll aber nicht alleiniger Problemlöser werden.",
          "watch": "Bekommt er gute Isolationsräume oder wird er früh gedoppelt?",
          "development": "Seed: Entwicklung wird über Dribblings, letzte Pässe und Entscheidungsqualität verfolgt."
        },
        {
          "name": "Pedri",
          "role": "Taktikspieler",
          "lens": "Halbraumkontrolle",
          "expectation": "Er soll Tempo dosieren und die Verbindungen im letzten Drittel herstellen.",
          "watch": "Findet er die Räume hinter der gegnerischen Mittelfeldlinie?",
          "development": "Seed: Entwicklung wird über Ballkontakte zwischen den Linien und Chance Creation beobachtet."
        }
      ]
    },
    {
      "team": "ENG",
      "figures": [
        {
          "name": "Thomas Tuchel",
          "role": "Trainer",
          "lens": "Chemie und Kontrolle",
          "expectation": "England braucht klare Rollen und mehr Tempo im Ballbesitz.",
          "watch": "Wie gut findet er die Balance zwischen individueller Qualität, Pressing und Spielkontrolle?",
          "development": "Seed: Trainerwirkung wird über Chemie, Wechsel und Reaktion auf Rückschläge bewertet."
        },
        {
          "name": "Harry Kane",
          "role": "Leader",
          "lens": "Verbindung und Abschluss",
          "expectation": "Er soll nicht nur abschließen, sondern Englands Angriffe verbinden.",
          "watch": "Kommt England durch seine Ablagen in gefährliche Räume oder wird es zu langsam?",
          "development": "Seed: Entwicklung wird über Shot Quality, Ablagen, Tiefenläufe um ihn herum und Druckspiele bewertet."
        },
        {
          "name": "Jude Bellingham",
          "role": "Druckspieler",
          "lens": "Spielkippende Präsenz",
          "expectation": "Er kann enge Spiele über Läufe, Zweikämpfe und Strafraumpräsenz drehen.",
          "watch": "Bleibt er in der Struktur oder wird England zu abhängig von Einzelmomenten?",
          "development": "Seed: Entwicklung wird über Box-Präsenz, Ballgewinne und Einfluss in kritischen Phasen verfolgt."
        }
      ]
    },
    {
      "team": "FRA",
      "figures": [
        {
          "name": "Didier Deschamps",
          "role": "Trainer",
          "lens": "Turnierpragmatismus",
          "expectation": "Frankreich muss Kontrolle und Explosivität im richtigen Moment verbinden.",
          "watch": "Wie viel Risiko lässt er zu, wenn Gegner Tempo aus dem Spiel nehmen?",
          "development": "Seed: Trainerwirkung wird über Spielstandmanagement, Umschaltfenster und defensive Ordnung verfolgt."
        },
        {
          "name": "Kylian Mbappé",
          "role": "Leader",
          "lens": "Tiefe und Verantwortung",
          "expectation": "Er soll Frankreichs gefährlichste Räume öffnen und als Kapitän Spiele prägen.",
          "watch": "Findet Frankreich früh Tiefe für ihn oder wird er in statische Eins-gegen-eins gezwungen?",
          "development": "Seed: Entwicklung wird über Tiefenläufe, Shot Quality und entscheidende Aktionen verfolgt."
        },
        {
          "name": "Aurélien Tchouaméni",
          "role": "Taktikspieler",
          "lens": "Balance",
          "expectation": "Er muss Absicherung, Ballgewinn und erste Progression verbinden.",
          "watch": "Schließt er Umschalträume, ohne Frankreichs Aufbau zu bremsen?",
          "development": "Seed: Entwicklung wird über Ballgewinne, Zweikämpfe und erste progressive Pässe bewertet."
        }
      ]
    },
    {
      "team": "MAR",
      "figures": [
        {
          "name": "Mohamed Ouahbi",
          "role": "Trainer",
          "lens": "Neustart nach Erfolg",
          "expectation": "Marokko muss Kompaktheit und Umschaltkraft bewahren, obwohl die Erwartungen gestiegen sind.",
          "watch": "Bleibt der Block stabil und findet Marokko genug eigene Ballbesitzlösungen?",
          "development": "Seed: Trainerwirkung wird über Defensivabstände, Umschaltfenster und Anpassungen bewertet."
        },
        {
          "name": "Achraf Hakimi",
          "role": "Leader",
          "lens": "Flügelhebel",
          "expectation": "Er verbindet Tempo, Erfahrung und die wichtigste Ausgangsroute nach Ballgewinn.",
          "watch": "Kommt er in offene Räume oder wird seine Seite konsequent zugestellt?",
          "development": "Seed: Entwicklung wird über Ballgewinne, Läufe, Flanken-/Passqualität und defensive Balance verfolgt."
        }
      ]
    }
  ],
  "analystSources": {
    "pillars": [
      {
        "id": "sportmonks-primary",
        "name": "SportMonks",
        "layer": "Primaere WM-Datenquelle",
        "quality": 93,
        "integration": "Aktive API",
        "bestFor": "Fixtures, Teilnehmer, Status, Scores, Predictions, Lineups, Formationen und spaeter Live-/Post-Match-Daten.",
        "watchFor": "Automatischer Ergebnisabgleich, Pre-Match-Scout, Was-passiert-wenn-Logik und belastbare Provider-Abdeckung.",
        "blindSpot": "Advanced-Felder wie Pressure, xG und Expected Lineups werden erst kurz vor Anpfiff, live oder nach Abpfiff wirklich validiert.",
        "signals": [
          "Fixtures",
          "Scores",
          "Status",
          "Predictions"
        ],
        "url": "https://www.sportmonks.com/football-api/"
      },
      {
        "id": "sportmonks-live",
        "name": "SportMonks Live Layer",
        "layer": "Live-Sync und Spielstatus",
        "quality": 90,
        "integration": "Poller aktivierbar",
        "bestFor": "Live-Status, Ergebnis-Sync, Tabellenwirkung, K.o.-Pfad und schnelle Tagesaktualisierung.",
        "watchFor": "Ob ein Tor, eine rote Karte oder ein Live-Status sofort die Gruppen- und Finalweglogik veraendert.",
        "blindSpot": "Vor Turnierstart bleibt dieser Layer im Projektionsmodus; echte Belastbarkeit entsteht erst im Live-Betrieb.",
        "signals": [
          "Live",
          "Scores",
          "Standings",
          "Path Impact"
        ],
        "url": "https://www.sportmonks.com/football-api/"
      },
      {
        "id": "sportmonks-advanced",
        "name": "SportMonks Advanced Check",
        "layer": "Advanced Coverage",
        "quality": 84,
        "integration": "Validierung je Spielphase",
        "bestFor": "Lineups, Formationen, Expected Lineups, Pressure, xG und weitere Felder, sofern im WM-Modul verfuegbar.",
        "watchFor": "Welche Advanced-Felder zu welchem Zeitpunkt wirklich gefuellt sind und in Analyse-Module einfliessen duerfen.",
        "blindSpot": "Nicht jedes Feld ist schon vor Turnierstart gefuellt; die App muss Coverage sichtbar machen statt Werte zu erfinden.",
        "signals": [
          "Lineups",
          "Formationen",
          "xG",
          "Pressure"
        ],
        "url": "https://www.sportmonks.com/football-api/"
      }
    ],
    "voices": [
      {
        "id": "athletic-tactics",
        "name": "The Athletic FC Tactics",
        "type": "Taktik- und Datenredaktion",
        "trust": 93,
        "bestFor": "Systeme, Trends, Rollen, In-Game-Anpassungen und datenstuetzte Detailanalysen.",
        "useWhen": "Wenn ein Topspiel taktisch wirklich verstanden werden soll.",
        "downgradeWhen": "Wenn der Text nur als Narrative ohne konkrete Spielszenen oder Datenpunkte funktioniert.",
        "url": "https://shows.acast.com/the-athletic-fc-tactics-podcast"
      },
      {
        "id": "coaches-voice",
        "name": "Coaches' Voice",
        "type": "Coach-Perspektive",
        "trust": 91,
        "bestFor": "Prinzipien, Trainingslogik, Rollenverhalten, Trainerentscheidungen und Taktiktafeln.",
        "useWhen": "Wenn die App erklaeren soll, warum ein Trainer eine Rolle oder Struktur waehlt.",
        "downgradeWhen": "Wenn es um harte Live-Daten oder Modellwahrscheinlichkeiten geht.",
        "url": "https://learning.coachesvoice.com/"
      },
      {
        "id": "spielverlagerung",
        "name": "Spielverlagerung",
        "type": "Taktische Tiefenanalyse",
        "trust": 90,
        "bestFor": "Positionsspiel, Pressing, Kompaktheit, gruppentaktische Mechanismen und deutsche Taktiksprache.",
        "useWhen": "Wenn ein Spiel ueber Strukturen statt ueber Einzelspieler erklaert werden soll.",
        "downgradeWhen": "Wenn keine aktuelle WM-spezifische Analyse vorliegt.",
        "url": "https://spielverlagerung.de/"
      },
      {
        "id": "total-football-analysis",
        "name": "Total Football Analysis",
        "type": "Taktik, Scouting und Theorie",
        "trust": 84,
        "bestFor": "Breite internationale Scouting-, Team- und Taktikanalysen.",
        "useWhen": "Wenn fuer kleinere Teams oder Surprise-Kandidaten schnell ein strukturiertes Profil gebraucht wird.",
        "downgradeWhen": "Wenn Autor, Datenbasis oder Videoevidenz nicht klar genug sind.",
        "url": "https://totalfootballanalysis.com/about-total-football-analysis-magazine"
      },
      {
        "id": "rest-is-football",
        "name": "The Rest Is Football",
        "type": "Ex-Profi-Kontext",
        "trust": 74,
        "bestFor": "Kabinenlogik, Stuermerperspektive, Turniergefuehl, England-Kontext und menschliche Zwischentoene.",
        "useWhen": "Als Kontextstimme, nicht als primaere Daten- oder Taktikquelle.",
        "downgradeWhen": "Wenn die These nicht durch Daten, Szenen oder Coach-Logik gestuetzt wird.",
        "url": "https://therestisfootball.com/about"
      }
    ],
    "aiModels": [
      {
        "id": "tacticai",
        "name": "TacticAI / Google DeepMind + Liverpool FC",
        "trust": 89,
        "role": "Research-Referenz fuer KI-gestuetzte Standardsituationen",
        "bestFor": "Corner-Kick-Muster, aehnliche Setups, Vorschlaege fuer Positionsanpassungen und Modellpruefung mit Experten.",
        "limitation": "Forschungsreferenz, kein frei integrierter WM-Live-Dienst. Fokus auf Ecken statt gesamtem offenen Spiel.",
        "url": "https://www.nature.com/articles/s41467-024-45965-x"
      }
    ],
    "automationPlan": [
      {
        "id": "hard-data",
        "label": "Harte Daten",
        "mode": "Automatisch",
        "cadence": "Poller vor, waehrend und nach Spielen",
        "whatHappens": "Ergebnisse, Tabellen, Spielstatus und spaeter Eventdaten werden per Provider-API synchronisiert.",
        "userAction": "Keine Aktion noetig, ausser ein Provider-Token muss erneuert werden."
      },
      {
        "id": "focus-analysis",
        "label": "Fokusspiele",
        "mode": "Automatisch plus Review",
        "cadence": "Vorbericht vor Anpfiff, Analyse-Lauf nach Abpfiff",
        "whatHappens": "Die App sucht passende Datenanker, Taktikquellen und serioese Stimmen und erstellt eine gewichtete Analyse-Synthese.",
        "userAction": "Optional: Analyse aktualisieren, wenn du ein Spiel besonders tief verfolgen willst."
      },
      {
        "id": "low-value",
        "label": "Low-Value-Spiele",
        "mode": "Kurz automatisch",
        "cadence": "Nach Ergebnis und Basisdaten",
        "whatHappens": "Nur kompakte Einordnung: Ergebnis, Tabellenwirkung, Auffaelligkeiten und ob ein Upset-Signal entstanden ist.",
        "userAction": "Tiefe Analyse nur per Klick, wenn das Spiel ueberraschend relevant wird."
      },
      {
        "id": "opinion-layer",
        "label": "Taktik & Meinung",
        "mode": "Halbautomatisch",
        "cadence": "Quellen-Inbox nach Spielende",
        "whatHappens": "Artikel, Podcast-Folgen und Coach-Analysen werden als Links und Kurzbefunde vorgeschlagen, nicht blind als Wahrheit uebernommen.",
        "userAction": "Die App zeigt Belegstatus und Trust; du kannst Quellen oeffnen oder spaeter ignorieren."
      }
    ],
    "accessModel": [
      {
        "label": "Frei / offen",
        "examples": "FIFA-Basisdaten, oeffentliche Artikel, Podcasts, Spielverlagerung je nach Beitrag",
        "use": "Orientierung, Links, Kontext, Taktik-Hypothesen und Presseschau-Signale.",
        "risk": "Nicht immer strukturiert, keine Garantie fuer vollstaendige WM-Abdeckung oder API-Zugriff."
      },
      {
        "label": "Gueltiges Abo",
        "examples": "The Athletic, Coaches' Voice Academy, einzelne Analyse- oder Videoangebote",
        "use": "Hochwertige Deutung und Coach-Perspektive, sofern rechtlich nur verlinkt und zusammengefasst wird.",
        "risk": "Keine Paywall-Umgehung; die App speichert nur eigene Notizen, Links und kurze Befunde."
      },
      {
        "label": "SportMonks API",
        "examples": "Aktives WM-Modul mit Fixtures, Teilnehmern, Status, Scores, Predictions und weiteren verfuegbaren Includes",
        "use": "Primaere automatische Rohdaten fuer Ergebnis-Sync, Pre-Match-Scout, Szenarien und Post-Match-Drafts.",
        "risk": "Einzelne Advanced-Felder muessen im Live-Betrieb validiert werden; Coverage wird sichtbar statt angenommen."
      },
      {
        "label": "Manuell kuratiert",
        "examples": "Einzelne starke Artikel, Podcast-Episoden, Trainerstimmen, eigene Beobachtungen",
        "use": "Qualitativer Mehrwert fuer Spiele, die wirklich interessieren.",
        "risk": "Mehr Arbeit, dafuer maximale Kontrolle und kein rechtliches Graufeld."
      }
    ],
    "synthesisModel": [
      {
        "label": "Datenanker",
        "weight": 38,
        "rule": "Ergebnis, xG, Schuesse, Feldposition, Pressing- und Eventsignale bilden die erste Beweisschicht."
      },
      {
        "label": "Video- oder Tracking-Beleg",
        "weight": 28,
        "rule": "Eine These steigt, wenn Bewegung, Raum oder konkrete Szenen die Datenursache sichtbar machen."
      },
      {
        "label": "Taktische Deutung",
        "weight": 24,
        "rule": "Serioese Analysten erklaeren Rollen, Pressingtrigger, Staffelung und Traineranpassungen."
      },
      {
        "label": "Kontextstimme",
        "weight": 10,
        "rule": "Ex-Profis, Podcasts und Pundits liefern Druck, Kabine und Turniergefuehl, aber nur mit Fachanker."
      }
    ],
    "rules": [
      {
        "label": "Belegte Szene vor Bauchgefuehl",
        "rule": "Eine Meinung steigt erst, wenn sie konkrete Spielszenen, Rollen, Daten oder wiederholbare Muster nennt.",
        "weight": 100
      },
      {
        "label": "Daten plus Video",
        "rule": "Ein Datenmuster zaehlt mehr, wenn Video oder Tracking bestaetigt, dass die Ursache sichtbar ist.",
        "weight": 94
      },
      {
        "label": "Ex-Profi nur mit Fachanker",
        "rule": "Erfahrung hilft bei Rollen, Druck und Kabine. Ohne taktische oder datenbasierte Evidenz bleibt sie Kontext.",
        "weight": 72
      },
      {
        "label": "TV-Laerm runterstufen",
        "rule": "Thesen mit Drama, Namen oder Stimmung, aber ohne Beleg, bekommen keinen Einfluss auf Match Value.",
        "weight": 22
      }
    ]
  },
  "scheduleValidation": {
    "generatedAt": "2026-06-07T07:49:11.054Z",
    "expected": {
      "totalMatches": 104,
      "groupMatches": 72,
      "knockoutMatches": 32,
      "groups": 12,
      "matchesPerGroup": 6
    },
    "imported": {
      "totalMatches": 104,
      "groupMatches": 72,
      "knockoutMatches": 32,
      "verifiedGroupMatches": 72,
      "verifiedKnockoutMatches": 32,
      "completeGroups": 12
    },
    "coverage": {
      "tournament": 100,
      "groupStage": 100,
      "knockout": 100,
      "verifiedGroupStage": 100,
      "verifiedKnockout": 100
    },
    "status": "structure-ready",
    "summary": "Turnierstruktur vollstaendig importiert; Teams und Ergebnisse bleiben bis zur Gruppenphase offen.",
    "issues": {
      "duplicateFixtures": [],
      "unknownTeams": [],
      "invalidGroups": [],
      "invalidKnockout": [],
      "warnings": []
    },
    "groups": [
      {
        "id": "A",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      },
      {
        "id": "B",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      },
      {
        "id": "C",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      },
      {
        "id": "D",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      },
      {
        "id": "E",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      },
      {
        "id": "F",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      },
      {
        "id": "G",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      },
      {
        "id": "H",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      },
      {
        "id": "I",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      },
      {
        "id": "J",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      },
      {
        "id": "K",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      },
      {
        "id": "L",
        "expected": 6,
        "imported": 6,
        "missing": 0,
        "coverage": 100,
        "complete": true,
        "missingPairs": [],
        "duplicatePairs": [],
        "verified": 6,
        "mixed": 6,
        "real": 0,
        "model": 0
      }
    ],
    "knockout": {
      "expected": 32,
      "imported": 32,
      "verified": 32,
      "coverage": 100,
      "rounds": [
        {
          "id": "round-of-32",
          "label": "Round of 32",
          "expected": 16,
          "imported": 16,
          "complete": true
        },
        {
          "id": "round-of-16",
          "label": "Achtelfinale",
          "expected": 8,
          "imported": 8,
          "complete": true
        },
        {
          "id": "quarter-final",
          "label": "Viertelfinale",
          "expected": 4,
          "imported": 4,
          "complete": true
        },
        {
          "id": "semi-final",
          "label": "Halbfinale",
          "expected": 2,
          "imported": 2,
          "complete": true
        },
        {
          "id": "third-place",
          "label": "Spiel um Platz 3",
          "expected": 1,
          "imported": 1,
          "complete": true
        },
        {
          "id": "final",
          "label": "Finale",
          "expected": 1,
          "imported": 1,
          "complete": true
        }
      ]
    }
  },
  "resultValidation": {
    "generatedAt": "2026-06-08T14:40:34.788Z",
    "status": "waiting",
    "summary": "Noch keine echten Resultate synchronisiert; Projektionsmodus bleibt aktiv.",
    "source": {
      "activeSource": "sportmonks",
      "sourceLabel": "Sportmonks",
      "generatedAt": "2026-06-08T14:40:12.545Z",
      "pollMinutes": 5
    },
    "issues": {
      "unknownMatches": [],
      "invalidScores": [],
      "duplicateResults": [],
      "teamMismatches": [],
      "warnings": []
    },
    "coverage": {
      "groupResults": 0,
      "knockoutResults": 0,
      "liveResults": 0,
      "totalResults": 0,
      "groupCoverage": 0,
      "knockoutCoverage": 0
    }
  },
  "postMatchReports": {
    "schemaVersion": 1,
    "status": "preTournament",
    "generatedAt": "2026-06-07T10:50:38.137Z",
    "sourceNote": "Post-Match-Reports sind als Datenmodell vorbereitet. Echte Werte werden nach Spielende aus Ergebnis-, Event-, Tracking- und Analystenquellen ergänzt.",
    "metricDefinitions": [
      {
        "id": "xg",
        "label": "xG / Chance Quality",
        "providerTarget": "SportMonks xGFixture / Statistics",
        "meaning": "Vergleicht Ergebnis und Chancenqualität, um Scoreboard-Rauschen von echter Dominanz zu trennen."
      },
      {
        "id": "ppda",
        "label": "PPDA / Pressingdruck",
        "providerTarget": "SportMonks Events / Statistics + Review",
        "meaning": "Misst, wie hoch und wie konsequent ein Team ohne Ball Zugriff erzeugt."
      },
      {
        "id": "fieldTilt",
        "label": "Field Tilt / Territory",
        "providerTarget": "SportMonks Statistics / Pressure",
        "meaning": "Zeigt, wer das Spiel in gefährlichen Zonen kontrolliert statt nur Ballbesitz zu sammeln."
      },
      {
        "id": "lineBreaking",
        "label": "Line-Breaking / 360",
        "providerTarget": "SportMonks Events + manuelle Taktikpruefung",
        "meaning": "Erklärt Pässe, Annahmen und Läufe, die Linien brechen oder Druck überspielen."
      },
      {
        "id": "setPieceThreat",
        "label": "Set-Piece Threat",
        "providerTarget": "SportMonks Events / Statistics + Review",
        "meaning": "Bewertet Standards über Zielzonen, zweite Bälle, Blockbewegungen und Abschlussqualität."
      }
    ],
    "reportTemplate": {
      "requiredFields": [
        "matchId",
        "status",
        "result",
        "metrics",
        "patterns",
        "recommendationAudit",
        "analystNotes"
      ],
      "statusValues": [
        "draft",
        "provider-synced",
        "reviewed"
      ],
      "recommendationAuditFields": [
        "preMatchScore",
        "postMatchScore",
        "verdict",
        "learning"
      ]
    },
    "reports": []
  },
  "postMatchValidation": {
    "generatedAt": "2026-06-07T10:50:39.033Z",
    "status": "waiting",
    "summary": "Post-Match-Report-Modell ist vorbereitet; echte Reports entstehen nach finalen Ergebnissen.",
    "coverage": {
      "reports": 0,
      "finalResults": 0,
      "matchCoverage": 0
    },
    "issues": {
      "unknownMatches": [],
      "missingFields": [],
      "invalidMetrics": [],
      "duplicateReports": [],
      "missingFinalResults": [],
      "warnings": [
        "Noch keine Post-Match-Reports vorhanden; Dossier nutzt Pre-Match-Blueprints."
      ]
    }
  },
  "providerTests": {
    "generatedAt": "2026-06-08T14:39:23.202Z",
    "status": "primary-ready",
    "summary": "Sportmonks ist als primaere WM-Datenquelle gesetzt und hat 104 WM-Fixtures gefunden. Pre-Match-Struktur ist belastbar; Live-, Event- und Advanced-Felder werden ab dem ersten Spiel erneut validiert.",
    "providers": [
      {
        "id": "sportmonks",
        "label": "Sportmonks",
        "status": "Primaerquelle bereit",
        "testedAt": "2026-06-08T09:14:16.239Z",
        "fixtures": 104,
        "coverage": [
          {
            "field": "participants",
            "label": "Teams",
            "count": 104,
            "total": 104,
            "tone": "real",
            "detail": "Teams sind fuer Mapping und Spielplan-Abgleich vorhanden."
          },
          {
            "field": "scores",
            "label": "Scores",
            "count": 0,
            "total": 104,
            "tone": "seed",
            "detail": "Ergebnisse bleiben bis zu echten Spielen erwartbar leer."
          },
          {
            "field": "state",
            "label": "Status",
            "count": 104,
            "total": 104,
            "tone": "real",
            "detail": "Spielstatus ist fuer Live-/Pre-Match-Logik vorhanden."
          },
          {
            "field": "lineups",
            "label": "Lineups",
            "count": 2,
            "total": 104,
            "tone": "mixed",
            "detail": "Aufstellungen werden meist erst kurz vor Anpfiff belastbar."
          },
          {
            "field": "events",
            "label": "Events",
            "count": 0,
            "total": 104,
            "tone": "seed",
            "detail": "Events werden erst live oder nach Spielbeginn relevant."
          },
          {
            "field": "statistics",
            "label": "Statistiken",
            "count": 0,
            "total": 104,
            "tone": "seed",
            "detail": "Statistiken werden live/nach Spielende erneut geprueft."
          },
          {
            "field": "formations",
            "label": "Formationen",
            "count": 3,
            "total": 104,
            "tone": "mixed",
            "detail": "Formationen sind teilweise schon vorab sichtbar."
          },
          {
            "field": "predictions",
            "label": "Predictions",
            "count": 72,
            "total": 104,
            "tone": "mixed",
            "detail": "Predictions koennen sofort in den Pre-Match-Score einfliessen."
          },
          {
            "field": "xGFixture",
            "label": "xG",
            "count": 0,
            "total": 104,
            "tone": "seed",
            "detail": "xG muss live oder post-match gegen den konkreten Plan geprueft werden."
          },
          {
            "field": "pressure",
            "label": "Pressure",
            "count": 0,
            "total": 104,
            "tone": "seed",
            "detail": "Pressure Index ist ein Kernkandidat fuer Momentum, aktuell noch leer."
          },
          {
            "field": "expectedLineups",
            "label": "Expected Lineups",
            "count": 0,
            "total": 104,
            "tone": "seed",
            "detail": "Expected Lineups sind paketabhaengig und muessen separat validiert werden."
          }
        ],
        "nextChecks": [
          "Kurz vor dem ersten Anpfiff: Lineups, Formationen und Expected Lineups pruefen.",
          "Waehrend des ersten Spiels: Scores, State, Events, Timeline und Live Standings pruefen.",
          "Direkt nach Abpfiff: Statistics, xGFixture, Pressure und Post-Match-Daten pruefen.",
          "1-2 Stunden nach Abpfiff: nachlaufende Datenvollstaendigkeit und Korrekturen pruefen."
        ],
        "productUse": [
          "Spielplan- und Team-Mapping",
          "Pre-Match-Score mit Predictions",
          "Live-Ergebnis-Sync",
          "Gruppenszenarien und Was-bedeutet-dieses-Tor-Logik",
          "Post-Match-Analyse, falls xG/Pressure/Statistics geliefert werden"
        ]
      }
    ]
  },
  "providerMapping": {
    "generatedAt": "2026-06-08T09:16:19.272Z",
    "provider": "sportmonks",
    "status": "ready",
    "summary": "72/72 Gruppenspiele auf Sportmonks gemappt, 72 mit Prediction-Signal.",
    "coverage": {
      "localMatches": 72,
      "providerFixtures": 104,
      "mapped": 72,
      "unmatchedLocal": 0,
      "unmatchedProvider": 32,
      "predictions": 72
    },
    "mappings": [
      {
        "matchId": "mex-rsa-2026-06-11",
        "provider": "sportmonks",
        "providerId": 19609127,
        "providerName": "Mexico vs South Africa",
        "startingAt": "2026-06-11 19:00:00",
        "teams": [
          "MEX",
          "RSA"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27413319,
          27413329,
          27413325,
          27413327,
          27413314,
          27413317,
          27413323,
          27413324
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "kor-cze-2026-06-12",
        "provider": "sportmonks",
        "providerId": 19609153,
        "providerName": "Korea Republic vs Czech Republic",
        "startingAt": "2026-06-12 02:00:00",
        "teams": [
          "KOR",
          "CZE"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27421148,
          27421146,
          27421156,
          27421147,
          27421141,
          27421149,
          27421150,
          27421151
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "can-bih-2026-06-12",
        "provider": "sportmonks",
        "providerId": 19609154,
        "providerName": "Canada vs Bosnia and Herzegovina",
        "startingAt": "2026-06-12 19:00:00",
        "teams": [
          "CAN",
          "BIH"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27421165,
          27421166,
          27421167,
          27421157,
          27421158,
          27421159,
          27421160,
          27421161
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "usa-par-2026-06-14",
        "provider": "sportmonks",
        "providerId": 19609133,
        "providerName": "United States vs Paraguay",
        "startingAt": "2026-06-13 01:00:00",
        "teams": [
          "USA",
          "PAR"
        ],
        "confidence": 82,
        "dateDeltaHours": 24,
        "predictionAvailable": true,
        "predictionKeys": [
          27432788,
          27432786,
          27432791,
          27432765,
          27432767,
          27432769,
          27432759,
          27432771
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "qat-sui-2026-06-13",
        "provider": "sportmonks",
        "providerId": 19609130,
        "providerName": "Qatar vs Switzerland",
        "startingAt": "2026-06-13 19:00:00",
        "teams": [
          "QAT",
          "SUI"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27432733,
          27432719,
          27432704,
          27432721,
          27432722,
          27432709,
          27432712,
          27432731
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "bra-mar-2026-06-14",
        "provider": "sportmonks",
        "providerId": 19609131,
        "providerName": "Brazil vs Morocco",
        "startingAt": "2026-06-13 22:00:00",
        "teams": [
          "BRA",
          "MAR"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27432743,
          27432752,
          27432754,
          27432750,
          27432758,
          27432761,
          27432740,
          27432742
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "hai-sco-2026-06-14",
        "provider": "sportmonks",
        "providerId": 19609155,
        "providerName": "Haiti vs Scotland",
        "startingAt": "2026-06-14 01:00:00",
        "teams": [
          "HAI",
          "SCO"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27455886,
          27455887,
          27455874,
          27455878,
          27455889,
          27455879,
          27455888,
          27455885
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "aus-tur-2026-06-14",
        "provider": "sportmonks",
        "providerId": 19609156,
        "providerName": "Australia vs Türkiye",
        "startingAt": "2026-06-14 04:00:00",
        "teams": [
          "AUS",
          "TUR"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27455896,
          27455904,
          27455890,
          27455891,
          27455893,
          27455897,
          27455898,
          27455900
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "ger-cuw-2026-06-14",
        "provider": "sportmonks",
        "providerId": 19609158,
        "providerName": "Germany vs Curacao",
        "startingAt": "2026-06-14 17:00:00",
        "teams": [
          "GER",
          "CUW"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27455922,
          27455923,
          27455924,
          27455925,
          27455926,
          27455927,
          27455928,
          27455929
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "ned-jpn-2026-06-14",
        "provider": "sportmonks",
        "providerId": 19609138,
        "providerName": "Netherlands vs Japan",
        "startingAt": "2026-06-14 20:00:00",
        "teams": [
          "NED",
          "JPN"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27455857,
          27455859,
          27455860,
          27455861,
          27455862,
          27455863,
          27455864,
          27455865
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "civ-ecu-2026-06-15",
        "provider": "sportmonks",
        "providerId": 19609157,
        "providerName": "Côte d'Ivoire vs Ecuador",
        "startingAt": "2026-06-14 23:00:00",
        "teams": [
          "CIV",
          "ECU"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27455899,
          27455901,
          27455903,
          27455905,
          27455907,
          27455909,
          27455911,
          27455913
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "swe-tun-2026-06-15",
        "provider": "sportmonks",
        "providerId": 19609159,
        "providerName": "Sweden vs Tunisia",
        "startingAt": "2026-06-15 02:00:00",
        "teams": [
          "SWE",
          "TUN"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27468536,
          27468546,
          27468537,
          27468540,
          27468547,
          27468550,
          27468551,
          27468543
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "esp-cpv-2026-06-15",
        "provider": "sportmonks",
        "providerId": 19609162,
        "providerName": "Spain vs Cape Verde Islands",
        "startingAt": "2026-06-15 16:00:00",
        "teams": [
          "ESP",
          "CPV"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27468573,
          27468583,
          27468575,
          27468574,
          27468568,
          27468569,
          27468570,
          27468571
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "bel-egy-2026-06-15",
        "provider": "sportmonks",
        "providerId": 19609139,
        "providerName": "Belgium vs Egypt",
        "startingAt": "2026-06-15 19:00:00",
        "teams": [
          "BEL",
          "EGY"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27468535,
          27468528,
          27468529,
          27468530,
          27468531,
          27468532,
          27468533,
          27468520
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "ksa-uru-2026-06-16",
        "provider": "sportmonks",
        "providerId": 19609161,
        "providerName": "Saudi Arabia vs Uruguay",
        "startingAt": "2026-06-15 22:00:00",
        "teams": [
          "KSA",
          "URU"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27468564,
          27468552,
          27468553,
          27468554,
          27468555,
          27468556,
          27468560,
          27468561
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "irn-nzl-2026-06-16",
        "provider": "sportmonks",
        "providerId": 19609160,
        "providerName": "Iran vs New Zealand",
        "startingAt": "2026-06-16 01:00:00",
        "teams": [
          "IRN",
          "NZL"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27472176,
          27472178,
          27472180,
          27472185,
          27472174,
          27472175,
          27472179,
          27472187
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "fra-sen-2026-06-16",
        "provider": "sportmonks",
        "providerId": 19609143,
        "providerName": "France vs Senegal",
        "startingAt": "2026-06-16 19:00:00",
        "teams": [
          "FRA",
          "SEN"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27472162,
          27472163,
          27472170,
          27472172,
          27472173,
          27472158,
          27472171,
          27472159
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "irq-nor-2026-06-17",
        "provider": "sportmonks",
        "providerId": 19609163,
        "providerName": "Iraq vs Norway",
        "startingAt": "2026-06-16 22:00:00",
        "teams": [
          "IRQ",
          "NOR"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27472190,
          27472191,
          27472202,
          27472200,
          27472195,
          27472196,
          27472197,
          27472205
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "arg-alg-2026-06-17",
        "provider": "sportmonks",
        "providerId": 19609145,
        "providerName": "Argentina vs Algeria",
        "startingAt": "2026-06-17 01:00:00",
        "teams": [
          "ARG",
          "ALG"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27477671,
          27477666,
          27477667,
          27477668,
          27477670,
          27477672,
          27477669,
          27477673
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "aut-jor-2026-06-17",
        "provider": "sportmonks",
        "providerId": 19609164,
        "providerName": "Austria vs Jordan",
        "startingAt": "2026-06-17 04:00:00",
        "teams": [
          "AUT",
          "JOR"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27477698,
          27477699,
          27477700,
          27477711,
          27477712,
          27477701,
          27477703,
          27477708
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "por-cod-2026-06-17",
        "provider": "sportmonks",
        "providerId": 19609166,
        "providerName": "Portugal vs Congo DR",
        "startingAt": "2026-06-17 17:00:00",
        "teams": [
          "POR",
          "COD"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27477718,
          27477714,
          27477715,
          27477716,
          27477717,
          27477720,
          27477722,
          27477724
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "eng-cro-2026-06-17",
        "provider": "sportmonks",
        "providerId": 19609149,
        "providerName": "England vs Croatia",
        "startingAt": "2026-06-17 20:00:00",
        "teams": [
          "ENG",
          "CRO"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27477682,
          27477688,
          27477689,
          27477690,
          27477697,
          27477691,
          27477692,
          27477683
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "gha-pan-2026-06-18",
        "provider": "sportmonks",
        "providerId": 19609167,
        "providerName": "Ghana vs Panama",
        "startingAt": "2026-06-17 23:00:00",
        "teams": [
          "GHA",
          "PAN"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27477745,
          27477719,
          27477721,
          27477723,
          27477727,
          27477744,
          27477731,
          27477739
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "uzb-col-2026-06-18",
        "provider": "sportmonks",
        "providerId": 19609165,
        "providerName": "Uzbekistan vs Colombia",
        "startingAt": "2026-06-18 02:00:00",
        "teams": [
          "UZB",
          "COL"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27484545,
          27484530,
          27484531,
          27484532,
          27484533,
          27484534,
          27484535,
          27484536
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "cze-rsa-2026-06-18",
        "provider": "sportmonks",
        "providerId": 19609168,
        "providerName": "Czech Republic vs South Africa",
        "startingAt": "2026-06-18 16:00:00",
        "teams": [
          "CZE",
          "RSA"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27484556,
          27484550,
          27484561,
          27484553,
          27484554,
          27484558,
          27484559,
          27484560
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "sui-bih-2026-06-18",
        "provider": "sportmonks",
        "providerId": 19609169,
        "providerName": "Switzerland vs Bosnia and Herzegovina",
        "startingAt": "2026-06-18 19:00:00",
        "teams": [
          "SUI",
          "BIH"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27484582,
          27484580,
          27484562,
          27484563,
          27484564,
          27484565,
          27484569,
          27484588
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "can-qat-2026-06-19",
        "provider": "sportmonks",
        "providerId": 19609170,
        "providerName": "Canada vs Qatar",
        "startingAt": "2026-06-18 22:00:00",
        "teams": [
          "CAN",
          "QAT"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27484572,
          27484575,
          27484577,
          27484581,
          27484583,
          27484589,
          27484568,
          27484587
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "mex-kor-2026-06-19",
        "provider": "sportmonks",
        "providerId": 19609128,
        "providerName": "Mexico vs Korea Republic",
        "startingAt": "2026-06-19 01:00:00",
        "teams": [
          "MEX",
          "KOR"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27492316,
          27492318,
          27492317,
          27492319,
          27492327,
          27492330,
          27492331,
          27492321
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "usa-aus-2026-06-19",
        "provider": "sportmonks",
        "providerId": 19609134,
        "providerName": "United States vs Australia",
        "startingAt": "2026-06-19 19:00:00",
        "teams": [
          "USA",
          "AUS"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27492332,
          27492333,
          27492334,
          27492336,
          27492337,
          27492343,
          27492339,
          27492342
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "sco-mar-2026-06-20",
        "provider": "sportmonks",
        "providerId": 19609171,
        "providerName": "Scotland vs Morocco",
        "startingAt": "2026-06-19 22:00:00",
        "teams": [
          "SCO",
          "MAR"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27492352,
          27492350,
          27492355,
          27492362,
          27492348,
          27492356,
          27492358,
          27492349
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "bra-hai-2026-06-20",
        "provider": "sportmonks",
        "providerId": 19609172,
        "providerName": "Brazil vs Haiti",
        "startingAt": "2026-06-20 00:30:00",
        "teams": [
          "BRA",
          "HAI"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27497402,
          27497382,
          27497383,
          27497385,
          27497387,
          27497389,
          27497391,
          27497393
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "tur-par-2026-06-21",
        "provider": "sportmonks",
        "providerId": 19609173,
        "providerName": "Türkiye vs Paraguay",
        "startingAt": "2026-06-20 03:00:00",
        "teams": [
          "TUR",
          "PAR"
        ],
        "confidence": 82,
        "dateDeltaHours": 24,
        "predictionAvailable": true,
        "predictionKeys": [
          27497417,
          27497396,
          27497408,
          27497411,
          27497386,
          27497388,
          27497384,
          27497394
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "ned-swe-2026-06-20",
        "provider": "sportmonks",
        "providerId": 19609176,
        "providerName": "Netherlands vs Sweden",
        "startingAt": "2026-06-20 17:00:00",
        "teams": [
          "NED",
          "SWE"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27497420,
          27497423,
          27497422,
          27497409,
          27497415,
          27497429,
          27497425,
          27497426
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "ger-civ-2026-06-20",
        "provider": "sportmonks",
        "providerId": 19609135,
        "providerName": "Germany vs Côte d'Ivoire",
        "startingAt": "2026-06-20 20:00:00",
        "teams": [
          "GER",
          "CIV"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27497366,
          27497381,
          27497367,
          27497372,
          27497373,
          27497376,
          27497378,
          27497379
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "ecu-cuw-2026-06-21",
        "provider": "sportmonks",
        "providerId": 19609174,
        "providerName": "Ecuador vs Curacao",
        "startingAt": "2026-06-21 00:00:00",
        "teams": [
          "ECU",
          "CUW"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27513449,
          27513457,
          27513461,
          27513463,
          27513472,
          27513474,
          27513450,
          27513459
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "tun-jpn-2026-06-21",
        "provider": "sportmonks",
        "providerId": 19609175,
        "providerName": "Tunisia vs Japan",
        "startingAt": "2026-06-21 04:00:00",
        "teams": [
          "TUN",
          "JPN"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27513460,
          27513451,
          27513452,
          27513454,
          27513456,
          27513458,
          27513462,
          27513464
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "esp-ksa-2026-06-21",
        "provider": "sportmonks",
        "providerId": 19609142,
        "providerName": "Spain vs Saudi Arabia",
        "startingAt": "2026-06-21 16:00:00",
        "teams": [
          "ESP",
          "KSA"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27513417,
          27513420,
          27513421,
          27513432,
          27513422,
          27513423,
          27513425,
          27513418
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "bel-irn-2026-06-21",
        "provider": "sportmonks",
        "providerId": 19609152,
        "providerName": "Belgium vs Iran",
        "startingAt": "2026-06-21 19:00:00",
        "teams": [
          "BEL",
          "IRN"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27513436,
          27513443,
          27513435,
          27513437,
          27513438,
          27513446,
          27513441,
          27513442
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "uru-cpv-2026-06-22",
        "provider": "sportmonks",
        "providerId": 19609178,
        "providerName": "Uruguay vs Cape Verde Islands",
        "startingAt": "2026-06-21 22:00:00",
        "teams": [
          "URU",
          "CPV"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27513482,
          27513486,
          27513483,
          27513485,
          27513487,
          27513488,
          27513489,
          27513494
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "nzl-egy-2026-06-22",
        "provider": "sportmonks",
        "providerId": 19609177,
        "providerName": "New Zealand vs Egypt",
        "startingAt": "2026-06-22 01:00:00",
        "teams": [
          "NZL",
          "EGY"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27528956,
          27528958,
          27528959,
          27528960,
          27528964,
          27528951,
          27528952,
          27528955
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "arg-aut-2026-06-22",
        "provider": "sportmonks",
        "providerId": 19609146,
        "providerName": "Argentina vs Austria",
        "startingAt": "2026-06-22 17:00:00",
        "teams": [
          "ARG",
          "AUT"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27528945,
          27528934,
          27528935,
          27528936,
          27528937,
          27528938,
          27528939,
          27528940
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "fra-irq-2026-06-22",
        "provider": "sportmonks",
        "providerId": 19609179,
        "providerName": "France vs Iraq",
        "startingAt": "2026-06-22 21:00:00",
        "teams": [
          "FRA",
          "IRQ"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27528966,
          27528967,
          27528968,
          27528969,
          27528970,
          27528971,
          27528972,
          27528973
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "nor-sen-2026-06-23",
        "provider": "sportmonks",
        "providerId": 19609180,
        "providerName": "Norway vs Senegal",
        "startingAt": "2026-06-23 00:00:00",
        "teams": [
          "NOR",
          "SEN"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27532581,
          27532582,
          27532592,
          27532583,
          27532588,
          27532589,
          27532590,
          27532594
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "jor-alg-2026-06-23",
        "provider": "sportmonks",
        "providerId": 19609181,
        "providerName": "Jordan vs Algeria",
        "startingAt": "2026-06-23 03:00:00",
        "teams": [
          "JOR",
          "ALG"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27532571,
          27532572,
          27532573,
          27532575,
          27532576,
          27532577,
          27532566,
          27532565
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "por-uzb-2026-06-23",
        "provider": "sportmonks",
        "providerId": 19609148,
        "providerName": "Portugal vs Uzbekistan",
        "startingAt": "2026-06-23 17:00:00",
        "teams": [
          "POR",
          "UZB"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27532533,
          27532534,
          27532540,
          27532536,
          27532537,
          27532538,
          27532539,
          27532547
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "eng-gha-2026-06-23",
        "provider": "sportmonks",
        "providerId": 19609183,
        "providerName": "England vs Ghana",
        "startingAt": "2026-06-23 20:00:00",
        "teams": [
          "ENG",
          "GHA"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27532606,
          27532607,
          27532609,
          27532599,
          27532604,
          27532608,
          27532610,
          27532611
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "pan-cro-2026-06-24",
        "provider": "sportmonks",
        "providerId": 19609151,
        "providerName": "Panama vs Croatia",
        "startingAt": "2026-06-23 23:00:00",
        "teams": [
          "PAN",
          "CRO"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27532555,
          27532553,
          27532550,
          27532554,
          27532557,
          27532561,
          27532564,
          27532551
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "col-cod-2026-06-24",
        "provider": "sportmonks",
        "providerId": 19609182,
        "providerName": "Colombia vs Congo DR",
        "startingAt": "2026-06-24 02:00:00",
        "teams": [
          "COL",
          "COD"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27536372,
          27536376,
          27536378,
          27536379,
          27536380,
          27536385,
          27536386,
          27536371
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "sui-can-2026-06-24",
        "provider": "sportmonks",
        "providerId": 19609129,
        "providerName": "Switzerland vs Canada",
        "startingAt": "2026-06-24 19:00:00",
        "teams": [
          "SUI",
          "CAN"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27536611,
          27536613,
          27536614,
          27536616,
          27536619,
          27536617,
          27536625,
          27536618
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "bih-qat-2026-06-24",
        "provider": "sportmonks",
        "providerId": 19609186,
        "providerName": "Bosnia and Herzegovina vs Qatar",
        "startingAt": "2026-06-24 19:00:00",
        "teams": [
          "BIH",
          "QAT"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27536643,
          27536644,
          27536645,
          27536649,
          27536650,
          27536654,
          27536655,
          27536656
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "sco-bra-2026-06-25",
        "provider": "sportmonks",
        "providerId": 19609132,
        "providerName": "Scotland vs Brazil",
        "startingAt": "2026-06-24 22:00:00",
        "teams": [
          "SCO",
          "BRA"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27536638,
          27536641,
          27536642,
          27536631,
          27536627,
          27536628,
          27536629,
          27536630
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "mar-hai-2026-06-25",
        "provider": "sportmonks",
        "providerId": 19609187,
        "providerName": "Morocco vs Haiti",
        "startingAt": "2026-06-24 22:00:00",
        "teams": [
          "MAR",
          "HAI"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27536299,
          27536301,
          27536302,
          27536305,
          27536306,
          27536309,
          27536310,
          27536311
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "rsa-kor-2026-06-25",
        "provider": "sportmonks",
        "providerId": 19609184,
        "providerName": "South Africa vs Korea Republic",
        "startingAt": "2026-06-25 01:00:00",
        "teams": [
          "RSA",
          "KOR"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27542490,
          27542491,
          27542492,
          27542501,
          27542503,
          27542504,
          27542505,
          27542495
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "cze-mex-2026-06-25",
        "provider": "sportmonks",
        "providerId": 19609185,
        "providerName": "Czech Republic vs Mexico",
        "startingAt": "2026-06-25 01:00:00",
        "teams": [
          "CZE",
          "MEX"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27542595,
          27542598,
          27542596,
          27542590,
          27542600,
          27542602,
          27542603,
          27542592
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "ecu-ger-2026-06-25",
        "provider": "sportmonks",
        "providerId": 19609136,
        "providerName": "Ecuador vs Germany",
        "startingAt": "2026-06-25 20:00:00",
        "teams": [
          "ECU",
          "GER"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27542642,
          27542643,
          27542644,
          27542645,
          27542646,
          27542647,
          27542648,
          27542649
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "cuw-civ-2026-06-25",
        "provider": "sportmonks",
        "providerId": 19609191,
        "providerName": "Curacao vs Côte d'Ivoire",
        "startingAt": "2026-06-25 20:00:00",
        "teams": [
          "CUW",
          "CIV"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27542738,
          27542734,
          27542743,
          27542745,
          27542746,
          27542737,
          27542739,
          27542740
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "tun-ned-2026-06-26",
        "provider": "sportmonks",
        "providerId": 19609137,
        "providerName": "Tunisia vs Netherlands",
        "startingAt": "2026-06-25 23:00:00",
        "teams": [
          "TUN",
          "NED"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27542251,
          27542250,
          27542256,
          27542259,
          27542261,
          27542262,
          27542263,
          27542265
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "jpn-swe-2026-06-26",
        "provider": "sportmonks",
        "providerId": 19609190,
        "providerName": "Japan vs Sweden",
        "startingAt": "2026-06-25 23:00:00",
        "teams": [
          "JPN",
          "SWE"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27542945,
          27542930,
          27542936,
          27542938,
          27542939,
          27542931,
          27542932,
          27542933
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "par-aus-2026-06-26",
        "provider": "sportmonks",
        "providerId": 19609188,
        "providerName": "Paraguay vs Australia",
        "startingAt": "2026-06-26 02:00:00",
        "teams": [
          "PAR",
          "AUS"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27548339,
          27548340,
          27548341,
          27548347,
          27548353,
          27548354,
          27548342,
          27548343
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "tur-usa-2026-06-26",
        "provider": "sportmonks",
        "providerId": 19609189,
        "providerName": "Türkiye vs United States",
        "startingAt": "2026-06-26 02:00:00",
        "teams": [
          "TUR",
          "USA"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27548587,
          27548588,
          27548583,
          27548584,
          27548585,
          27548589,
          27548592,
          27548595
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "nor-fra-2026-06-26",
        "provider": "sportmonks",
        "providerId": 19609144,
        "providerName": "Norway vs France",
        "startingAt": "2026-06-26 19:00:00",
        "teams": [
          "NOR",
          "FRA"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27548577,
          27548567,
          27548568,
          27548569,
          27548570,
          27548573,
          27548574,
          27548575
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "sen-irq-2026-06-26",
        "provider": "sportmonks",
        "providerId": 19609195,
        "providerName": "Senegal vs Iraq",
        "startingAt": "2026-06-26 19:00:00",
        "teams": [
          "SEN",
          "IRQ"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27548525,
          27548526,
          27548533,
          27548534,
          27548535,
          27548536,
          27548538,
          27548523
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "uru-esp-2026-06-27",
        "provider": "sportmonks",
        "providerId": 19609141,
        "providerName": "Uruguay vs Spain",
        "startingAt": "2026-06-27 00:00:00",
        "teams": [
          "URU",
          "ESP"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27557086,
          27557088,
          27557090,
          27557089,
          27557091,
          27557092,
          27557096,
          27557099
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "cpv-ksa-2026-06-27",
        "provider": "sportmonks",
        "providerId": 19609194,
        "providerName": "Cape Verde Islands vs Saudi Arabia",
        "startingAt": "2026-06-27 00:00:00",
        "teams": [
          "CPV",
          "KSA"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27557291,
          27557287,
          27557302,
          27557289,
          27557293,
          27557312,
          27557306,
          27557308
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "nzl-bel-2026-06-27",
        "provider": "sportmonks",
        "providerId": 19609192,
        "providerName": "New Zealand vs Belgium",
        "startingAt": "2026-06-27 03:00:00",
        "teams": [
          "NZL",
          "BEL"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27558124,
          27558126,
          27558127,
          27558128,
          27558129,
          27558130,
          27558131,
          27558132
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "egy-irn-2026-06-27",
        "provider": "sportmonks",
        "providerId": 19609193,
        "providerName": "Egypt vs Iran",
        "startingAt": "2026-06-27 03:00:00",
        "teams": [
          "EGY",
          "IRN"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27557461,
          27557455,
          27557459,
          27557462,
          27557467,
          27557453,
          27557456,
          27557457
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "cro-gha-2026-06-27",
        "provider": "sportmonks",
        "providerId": 19609150,
        "providerName": "Croatia vs Ghana",
        "startingAt": "2026-06-27 21:00:00",
        "teams": [
          "CRO",
          "GHA"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27557552,
          27557556,
          27557579,
          27557576,
          27557545,
          27557550,
          27557554,
          27557557
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "pan-eng-2026-06-27",
        "provider": "sportmonks",
        "providerId": 19609199,
        "providerName": "Panama vs England",
        "startingAt": "2026-06-27 21:00:00",
        "teams": [
          "PAN",
          "ENG"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27557469,
          27557482,
          27557484,
          27557489,
          27557492,
          27557494,
          27557491,
          27557496
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "col-por-2026-06-28",
        "provider": "sportmonks",
        "providerId": 19609147,
        "providerName": "Colombia vs Portugal",
        "startingAt": "2026-06-27 23:30:00",
        "teams": [
          "COL",
          "POR"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27574836,
          27574837,
          27574831,
          27574828,
          27574823,
          27574824,
          27574825,
          27574826
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "cod-uzb-2026-06-28",
        "provider": "sportmonks",
        "providerId": 19609196,
        "providerName": "Congo DR vs Uzbekistan",
        "startingAt": "2026-06-27 23:30:00",
        "teams": [
          "COD",
          "UZB"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27574895,
          27574897,
          27574898,
          27574900,
          27574906,
          27574908,
          27574909,
          27574896
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "alg-aut-2026-06-28",
        "provider": "sportmonks",
        "providerId": 19609197,
        "providerName": "Algeria vs Austria",
        "startingAt": "2026-06-28 02:00:00",
        "teams": [
          "ALG",
          "AUT"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27575114,
          27575122,
          27575109,
          27575118,
          27575120,
          27575108,
          27575111,
          27575115
        ],
        "predictionImpact": 6
      },
      {
        "matchId": "jor-arg-2026-06-28",
        "provider": "sportmonks",
        "providerId": 19609198,
        "providerName": "Jordan vs Argentina",
        "startingAt": "2026-06-28 02:00:00",
        "teams": [
          "JOR",
          "ARG"
        ],
        "confidence": 100,
        "dateDeltaHours": null,
        "predictionAvailable": true,
        "predictionKeys": [
          27575123,
          27575124,
          27575125,
          27575131,
          27575133,
          27575128,
          27575129,
          27575130
        ],
        "predictionImpact": 6
      }
    ],
    "unmatchedLocalMatches": [],
    "unmatchedProviderFixtures": [
      {
        "providerId": 19606960,
        "name": "2nd Group A vs 2nd Group B",
        "startingAt": "2026-06-28 19:00:00",
        "teams": []
      },
      {
        "providerId": 19606959,
        "name": "1st Group C vs 2nd Group F",
        "startingAt": "2026-06-29 17:00:00",
        "teams": []
      },
      {
        "providerId": 19606957,
        "name": "1st Group E vs 3rd Group A/B/C/D/F",
        "startingAt": "2026-06-29 20:30:00",
        "teams": []
      },
      {
        "providerId": 19606958,
        "name": "1st Group F vs 2nd Group C",
        "startingAt": "2026-06-30 01:00:00",
        "teams": []
      },
      {
        "providerId": 19606955,
        "name": "2nd Group E vs 2nd Group I",
        "startingAt": "2026-06-30 17:00:00",
        "teams": []
      },
      {
        "providerId": 19606956,
        "name": "1st Group I vs 3rd Group C/D/F/G/H",
        "startingAt": "2026-06-30 21:00:00",
        "teams": []
      },
      {
        "providerId": 19606954,
        "name": "1st Group A vs 3rd Group C/E/F/H/I",
        "startingAt": "2026-07-01 01:00:00",
        "teams": []
      },
      {
        "providerId": 19606952,
        "name": "1st Group L vs 3rd Group E/H/I/J/K",
        "startingAt": "2026-07-01 16:00:00",
        "teams": []
      },
      {
        "providerId": 19606953,
        "name": "1st Group G vs 3rd Group A/E/H/I/J",
        "startingAt": "2026-07-01 20:00:00",
        "teams": []
      },
      {
        "providerId": 19606951,
        "name": "1st Group D vs 3rd Group B/E/F/I/J",
        "startingAt": "2026-07-02 00:00:00",
        "teams": []
      },
      {
        "providerId": 19606948,
        "name": "1st Group H vs 2nd Group J",
        "startingAt": "2026-07-02 19:00:00",
        "teams": []
      },
      {
        "providerId": 19606949,
        "name": "2nd Group K vs 2nd Group L",
        "startingAt": "2026-07-02 23:00:00",
        "teams": []
      },
      {
        "providerId": 19606950,
        "name": "1st Group B vs 3rd Group E/F/G/I/J",
        "startingAt": "2026-07-03 03:00:00",
        "teams": []
      },
      {
        "providerId": 19606945,
        "name": "2nd Group D vs 2nd Group G",
        "startingAt": "2026-07-03 18:00:00",
        "teams": []
      },
      {
        "providerId": 19606946,
        "name": "1st Group J vs 2nd Group H",
        "startingAt": "2026-07-03 22:00:00",
        "teams": []
      },
      {
        "providerId": 19606947,
        "name": "1st Group K vs 3rd Group D/E/I/J/L",
        "startingAt": "2026-07-04 01:30:00",
        "teams": []
      },
      {
        "providerId": 19606968,
        "name": "Winner Match 73 vs Winner Match 75",
        "startingAt": "2026-07-04 17:00:00",
        "teams": []
      },
      {
        "providerId": 19606967,
        "name": "Winner Match 74 vs Winner Match 77",
        "startingAt": "2026-07-04 21:00:00",
        "teams": []
      },
      {
        "providerId": 19606966,
        "name": "Winner Match 76 vs Winner Match 78",
        "startingAt": "2026-07-05 20:00:00",
        "teams": []
      },
      {
        "providerId": 19606965,
        "name": "Winner Match 79 vs Winner Match 80",
        "startingAt": "2026-07-06 00:00:00",
        "teams": []
      },
      {
        "providerId": 19606964,
        "name": "Winner Match 83 vs Winner Match 84",
        "startingAt": "2026-07-06 19:00:00",
        "teams": []
      },
      {
        "providerId": 19606963,
        "name": "Winner Match 81 vs Winner Match 82",
        "startingAt": "2026-07-07 00:00:00",
        "teams": []
      },
      {
        "providerId": 19606962,
        "name": "Winner Match 86 vs Winner Match 88",
        "startingAt": "2026-07-07 16:00:00",
        "teams": []
      },
      {
        "providerId": 19606961,
        "name": "Winner Match 85 vs Winner Match 87",
        "startingAt": "2026-07-07 20:00:00",
        "teams": []
      },
      {
        "providerId": 19606972,
        "name": "Winner Match 89 vs Winner Match 90",
        "startingAt": "2026-07-09 20:00:00",
        "teams": []
      },
      {
        "providerId": 19606971,
        "name": "Winner Match 93 vs Winner Match 94",
        "startingAt": "2026-07-10 19:00:00",
        "teams": []
      },
      {
        "providerId": 19606970,
        "name": "Winner Match 91 vs Winner Match 92",
        "startingAt": "2026-07-11 21:00:00",
        "teams": []
      },
      {
        "providerId": 19606969,
        "name": "Winner Match 95 vs Winner Match 96",
        "startingAt": "2026-07-12 01:00:00",
        "teams": []
      },
      {
        "providerId": 19606974,
        "name": "Winner Quarter-final 1 vs Winner Quarter-final 2",
        "startingAt": "2026-07-14 19:00:00",
        "teams": []
      },
      {
        "providerId": 19606973,
        "name": "Winner Quarter-final 3 vs Winner Quarter-final 4",
        "startingAt": "2026-07-15 19:00:00",
        "teams": []
      },
      {
        "providerId": 19606976,
        "name": "Loser Semi-final 1 vs Loser Semi-final 2",
        "startingAt": "2026-07-18 21:00:00",
        "teams": []
      },
      {
        "providerId": 19606975,
        "name": "Winner Semi-final 1 vs Winner Semi-final 2",
        "startingAt": "2026-07-19 19:00:00",
        "teams": []
      }
    ]
  },
  "featureBlueprints": [
    {
      "id": "what-if",
      "label": "Was-passiert-wenn-Modus",
      "status": "modellbereit",
      "stage": "Live",
      "impact": 96,
      "promise": "Live-Hinweise, wie ein aktueller Spielstand die Gruppentabelle und den naechsten Gegner veraendert.",
      "dataNeeds": [
        "Scores",
        "Live State",
        "Group Standings",
        "Fixture Mapping",
        "Bracket Slots"
      ],
      "sportmonksFields": [
        "scores",
        "state",
        "standings",
        "participants",
        "stage",
        "group"
      ],
      "userValue": "Der Nutzer versteht sofort, warum ein Tor in einem scheinbar kleinen Spiel ploetzlich riesig ist.",
      "firstVersion": "Bei jedem Live-Resultat: neue Tabelle simulieren, direkte Qualifikation, Drittplatzierte und moeglichen K.o.-Gegner anzeigen.",
      "openRisk": "Live-Standings muessen gegen eigene Tabellenlogik validiert werden."
    },
    {
      "id": "momentum",
      "label": "Momentum-Ansicht",
      "status": "wartet auf Live-Daten",
      "stage": "Live/Post",
      "impact": 88,
      "promise": "Druckphasen visuell erklaeren: Wann kippte Kontrolle, wer erzeugte echten Druck und wer nur Ballbesitz?",
      "dataNeeds": [
        "Pressure Index",
        "Events Timeline",
        "Statistics",
        "Possession",
        "Shots"
      ],
      "sportmonksFields": [
        "pressure",
        "events",
        "statistics",
        "scores",
        "state"
      ],
      "userValue": "Aus 'Team war besser' wird eine nachvollziehbare Spielkurve mit konkreten Phasen.",
      "firstVersion": "Timeline mit 5-Minuten-Phasen, Event-Clustern und Pressure-Status: ruhig, Druck, Kipppunkt.",
      "openRisk": "Pressure ist im aktuellen Probe-Lauf noch 0/104 und muss im Live-Spiel bestaetigt werden."
    },
    {
      "id": "finisher-efficiency",
      "label": "Effizienz-Karten fuer Stuermer",
      "status": "wartet auf xG",
      "stage": "Post",
      "impact": 82,
      "promise": "xG vs. Tore, Chancenqualitaet und Abschlusswirkung fuer Schluesselspieler greifbar machen.",
      "dataNeeds": [
        "xG",
        "Goals",
        "Player Stats",
        "Lineups",
        "Minutes"
      ],
      "sportmonksFields": [
        "xGFixture",
        "statistics",
        "lineups",
        "events",
        "scores"
      ],
      "userValue": "Der Nutzer sieht, wer ueber Erwartung performt, wer viel Gefahr erzeugt und wer nur vom Ergebnis lebt.",
      "firstVersion": "Nach jedem Fokusspiel: Abschluesse, Tore, xG-Abweichung und kurze Einordnung fuer zentrale Angreifer.",
      "openRisk": "xGFixture ist im aktuellen Probe-Lauf noch 0/104; Paket- und Live-Verfuegbarkeit pruefen."
    },
    {
      "id": "prematch-scout",
      "label": "Pre-Match-Scout",
      "status": "teilweise bereit",
      "stage": "Pre",
      "impact": 91,
      "promise": "Vor dem Spiel: erwartete Lineups, Ausfaelle, Form, Head-to-Head und Prognosemodell als gefuehrte Vorschau.",
      "dataNeeds": [
        "Predictions",
        "Lineups",
        "Expected Lineups",
        "Injuries",
        "Form",
        "Head2Head"
      ],
      "sportmonksFields": [
        "predictions",
        "lineups",
        "expectedLineups",
        "formations",
        "participants",
        "statistics"
      ],
      "userValue": "Der Nutzer weiss vor Anpfiff, worauf er achten soll und ob sich Live-Schauen lohnt.",
      "firstVersion": "Predictions + vorhandene Lineups/Formationen als Scout-Karte im Match-Dossier; Expected Lineups und Ausfaelle spaeter nachziehen.",
      "openRisk": "Predictions sind 72/72 fuer Gruppenspiele gemappt; Expected Lineups sind noch 0/104."
    }
  ],
  "focusTeams": [
    {
      "code": "ARG",
      "name": "Argentinien",
      "flag": "🇦🇷",
      "confederation": "CONMEBOL",
      "focus": true,
      "style": "Kontrolle, Zwischenlinien, Turniermanagement",
      "watchPriority": 96
    },
    {
      "code": "BRA",
      "name": "Brasilien",
      "flag": "🇧🇷",
      "confederation": "CONMEBOL",
      "focus": true,
      "style": "Dribbling, Tempo, individuelle Überlegenheit",
      "watchPriority": 94
    },
    {
      "code": "ESP",
      "name": "Spanien",
      "flag": "🇪🇸",
      "confederation": "UEFA",
      "focus": true,
      "style": "Positionsspiel, Gegenpressing, Halbraumkontrolle",
      "watchPriority": 93
    },
    {
      "code": "GER",
      "name": "Deutschland",
      "flag": "🇩🇪",
      "confederation": "UEFA",
      "focus": true,
      "style": "Ballbesitz, flexible Achter, Restverteidigung",
      "watchPriority": 98
    },
    {
      "code": "ENG",
      "name": "England",
      "flag": "🏴",
      "confederation": "UEFA",
      "focus": true,
      "style": "Athletik, Standards, hohe Einzelqualität",
      "watchPriority": 92
    },
    {
      "code": "FRA",
      "name": "Frankreich",
      "flag": "🇫🇷",
      "confederation": "UEFA",
      "focus": true,
      "style": "Transitions, Tiefe, explosive Flügel",
      "watchPriority": 94
    },
    {
      "code": "POR",
      "name": "Portugal",
      "flag": "🇵🇹",
      "confederation": "UEFA",
      "focus": true,
      "style": "Ballbesitzqualität, Halbraumbesetzung, individuelle Kreativität",
      "watchPriority": 91
    }
  ],
  "filters": [
    {
      "id": "all",
      "label": "Alle"
    },
    {
      "id": "today",
      "label": "Heute"
    },
    {
      "id": "tomorrow",
      "label": "Morgen"
    },
    {
      "id": "focus",
      "label": "Fokus-Teams"
    },
    {
      "id": "path",
      "label": "Weiterkommen & Gegner"
    },
    {
      "id": "night",
      "label": "Nachtspiele"
    },
    {
      "id": "low-value",
      "label": "Low Value"
    }
  ],
  "categoryFilters": [
    {
      "id": "all",
      "label": "Alle Empfehlungen"
    },
    {
      "id": "live",
      "label": "Live"
    },
    {
      "id": "analysis",
      "label": "Analyse"
    },
    {
      "id": "highlights",
      "label": "Highlights"
    },
    {
      "id": "skip",
      "label": "Skip"
    }
  ],
  "preferences": {
    "baseDate": "2026-06-13",
    "weights": {
      "importance": 1.1,
      "tactical": 1.25,
      "entertainment": 0.95,
      "focus": 1.35,
      "surprise": 0.95,
      "time": 0.85,
      "path": 1.05
    },
    "controls": [
      {
        "id": "tactical",
        "label": "Taktik",
        "description": "Pressing, Aufbau, Halbraumduelle und Stilkontrast stärker gewichten.",
        "min": 0.6,
        "max": 1.8,
        "step": 0.05
      },
      {
        "id": "focus",
        "label": "Favoriten",
        "description": "ARG, BRA, ESP, GER, ENG und FRA härter priorisieren.",
        "min": 0.8,
        "max": 2,
        "step": 0.05
      },
      {
        "id": "time",
        "label": "Uhrzeit",
        "description": "Nachtspiele strenger oder lockerer behandeln.",
        "min": 0.3,
        "max": 1.5,
        "step": 0.05
      },
      {
        "id": "surprise",
        "label": "Upset",
        "description": "Überraschungsteams und attraktive Außenseiter höher ziehen.",
        "min": 0.4,
        "max": 1.7,
        "step": 0.05
      },
      {
        "id": "path",
        "label": "Weiterkommen & Gegner",
        "description": "Spiele höher bewerten, die Weiterkommen und nächste Gegner deiner Fokus-Teams beeinflussen.",
        "min": 0.4,
        "max": 1.8,
        "step": 0.05
      }
    ]
  },
  "matches": [
    {
      "id": "mex-rsa-2026-06-11",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Mexico v South Africa ist als Eröffnungsspiel in FIFA- und aktuellen Fixture-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe A",
      "kickoffGermany": "2026-06-11T21:00:00+02:00",
      "venue": "Mexico City Stadium",
      "teams": [
        "MEX",
        "RSA"
      ],
      "signals": {
        "importance": 52,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 33
      },
      "tags": [],
      "analysis": {
        "key": "Mexiko vs Südafrika: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe A, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "kor-cze-2026-06-12",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Korea Republic v Czechia ist in aktuellen Group-A-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe A",
      "kickoffGermany": "2026-06-12T04:00:00+02:00",
      "venue": "Guadalajara Stadium",
      "teams": [
        "KOR",
        "CZE"
      ],
      "signals": {
        "importance": 52,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 14,
        "lowValueRisk": 43
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Südkorea vs Tschechien: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe A, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "can-bih-2026-06-12",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Canada v Bosnia and Herzegovina ist in aktuellen Group-B-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe B",
      "kickoffGermany": "2026-06-12T21:00:00+02:00",
      "venue": "Toronto Stadium",
      "teams": [
        "CAN",
        "BIH"
      ],
      "signals": {
        "importance": 54,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 32
      },
      "tags": [],
      "analysis": {
        "key": "Kanada vs Bosnien und Herzegowina: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe B, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "qat-sui-2026-06-13",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Fixture aus FIFA-naher Spielplanliste; Kickoff in deutscher Zeit aus UK/US-Zeitlisten gespiegelt.",
      "stage": "group",
      "group": "Gruppe B",
      "kickoffGermany": "2026-06-13T21:00:00+02:00",
      "venue": "San Francisco Bay Area Stadium",
      "teams": [
        "QAT",
        "SUI"
      ],
      "signals": {
        "importance": 54,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 32
      },
      "tags": [
        "Nur Ergebnis",
        "Low Value",
        "Gruppenauftakt"
      ],
      "analysis": {
        "key": "Interessant wird nur, ob die Schweiz ungewöhnlich aggressiv presst oder im Aufbau neue Rollen zeigt.",
        "risk": "Niedriger persönlicher Wert und wenig Bezug zu deinen Fokus-Teams.",
        "player": "Nur ein Schweizer Schlüsselspieler mit neuer Ballbesitzrolle würde das Spiel hochziehen.",
        "source": "Mixed: Spielplanbasis gespiegelt, Low-Value-Einstufung ist Modell."
      }
    },
    {
      "id": "bra-mar-2026-06-14",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Brazil v Morocco ist in aktuellen Group-C- und Broadcast-Listen bestätigt; Kickoff auf CEST normalisiert.",
      "stage": "group",
      "group": "Gruppe C",
      "kickoffGermany": "2026-06-14T00:00:00+02:00",
      "venue": "New York New Jersey Stadium",
      "teams": [
        "BRA",
        "MAR"
      ],
      "signals": {
        "importance": 85,
        "tactical": 82,
        "entertainment": 96,
        "focus": 94,
        "surprise": 86,
        "time": 48,
        "lowValueRisk": 0
      },
      "tags": [
        "Live schauen",
        "Pressingfalle",
        "Upset-Radar"
      ],
      "analysis": {
        "key": "Marokko kann Brasilien auf die Außenlinie lenken. Brasilien braucht schnelle Rückverlagerungen.",
        "risk": "Brasilien darf die Konterabsicherung nach Dribblings nicht verlieren.",
        "player": "Der linke Flügel ist der Hebel: gewinnt Brasilien dort 1-gegen-1s, kippt das Pressingbild.",
        "source": "Mixed: Paarung/Zeit verifiziert, taktische Tiefe im MVP modelliert."
      }
    },
    {
      "id": "hai-sco-2026-06-14",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Haiti v Scotland ist in Group-C-Listen bestätigt; Kickoff auf CEST normalisiert.",
      "stage": "group",
      "group": "Gruppe C",
      "kickoffGermany": "2026-06-14T03:00:00+02:00",
      "venue": "Boston Stadium",
      "teams": [
        "HAI",
        "SCO"
      ],
      "signals": {
        "importance": 69,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 62,
        "time": 28,
        "lowValueRisk": 26
      },
      "tags": [
        "Weiterkommen & Gegner",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Haiti vs Schottland: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe C, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "usa-par-2026-06-14",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Fixture aus FIFA-naher Spielplanliste; Kickoff in deutscher Zeit aus UK/US-Zeitlisten gespiegelt.",
      "stage": "group",
      "group": "Gruppe D",
      "kickoffGermany": "2026-06-14T03:00:00+02:00",
      "venue": "Los Angeles Stadium",
      "teams": [
        "USA",
        "PAR"
      ],
      "signals": {
        "importance": 61,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 62,
        "time": 28,
        "lowValueRisk": 40
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "USA vs Paraguay: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe D, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "aus-tur-2026-06-14",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Fixture aus frühen Spielplanlisten; Türkei als Surprise-Team relevant.",
      "stage": "group",
      "group": "Gruppe D",
      "kickoffGermany": "2026-06-14T06:00:00+02:00",
      "venue": "BC Place Vancouver",
      "teams": [
        "AUS",
        "TUR"
      ],
      "signals": {
        "importance": 61,
        "tactical": 65,
        "entertainment": 79,
        "focus": 24,
        "surprise": 79,
        "time": 14,
        "lowValueRisk": 17
      },
      "tags": [
        "Surprise-Radar",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Australien vs Türkei: Bleibt die Mitte nach Ballverlusten stabil?",
        "risk": "Teams mit ruhiger Ballzirkulation und starker Restverteidigung.",
        "player": "Wie mutig sind die ersten Pässe nach Ballgewinn?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe D, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "ger-cuw-2026-06-14",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Germany v Curaçao ist auf FIFA/Team- und Broadcast-Seiten bestätigt; Kickoff in deutscher Zeit gespiegelt.",
      "stage": "group",
      "group": "Gruppe E",
      "kickoffGermany": "2026-06-14T19:00:00+02:00",
      "venue": "Houston Stadium",
      "teams": [
        "GER",
        "CUW"
      ],
      "signals": {
        "importance": 87,
        "tactical": 67,
        "entertainment": 86,
        "focus": 98,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 0
      },
      "tags": [
        "Später analysieren",
        "Restverteidigung",
        "Set Pieces"
      ],
      "analysis": {
        "key": "Deutschland wird viel Ballbesitz haben. Entscheidend ist die Absicherung nach Ballverlusten.",
        "risk": "Breite Außenverteidiger plus eingerückte Achter können Konterräume öffnen.",
        "player": "Der deutsche Sechser ist der Taktgeber für Rhythmus, Absicherung und Gegenpressing.",
        "source": "Mixed: Paarung/Zeit aus aktuellen FIFA-nahen Quellen, Taktikprofil noch Seed."
      }
    },
    {
      "id": "ned-jpn-2026-06-14",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Netherlands v Japan ist in Group-F-Listen bestätigt; Japan ist Surprise-Team.",
      "stage": "group",
      "group": "Gruppe F",
      "kickoffGermany": "2026-06-14T22:00:00+02:00",
      "venue": "Dallas Stadium",
      "teams": [
        "NED",
        "JPN"
      ],
      "signals": {
        "importance": 65,
        "tactical": 65,
        "entertainment": 81,
        "focus": 24,
        "surprise": 84,
        "time": 94,
        "lowValueRisk": 5
      },
      "tags": [
        "Surprise-Radar"
      ],
      "analysis": {
        "key": "Niederlande vs Japan: Wie oft zwingt Japan den Gegner zu Rückpässen?",
        "risk": "Teams mit Wucht, zweiten Bällen und vielen Strafraumduellen.",
        "player": "Wie viele Anschlussläufe gibt es nach dem ersten Ballgewinn?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe F, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "civ-ecu-2026-06-15",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Fixture aus FIFA-naher Group-E-Liste; Kickoff in deutscher Zeit gespiegelt.",
      "stage": "group",
      "group": "Gruppe E",
      "kickoffGermany": "2026-06-15T01:00:00+02:00",
      "venue": "Philadelphia Stadium",
      "teams": [
        "CIV",
        "ECU"
      ],
      "signals": {
        "importance": 71,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 48,
        "lowValueRisk": 16
      },
      "tags": [
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Côte d'Ivoire vs Ecuador: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe E, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "swe-tun-2026-06-15",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Fixture aus Group-F- und Broadcast-Listen; Kickoff in deutscher Zeit gespiegelt.",
      "stage": "group",
      "group": "Gruppe F",
      "kickoffGermany": "2026-06-15T04:00:00+02:00",
      "venue": "Monterrey Stadium",
      "teams": [
        "SWE",
        "TUN"
      ],
      "signals": {
        "importance": 65,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 62,
        "time": 14,
        "lowValueRisk": 39
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Schweden vs Tunesien: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe F, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "esp-cpv-2026-06-15",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Spain v Cabo Verde ist in Group-H-Listen bestätigt; Kickoff aus ET nach CEST normalisiert.",
      "stage": "group",
      "group": "Gruppe H",
      "kickoffGermany": "2026-06-15T18:00:00+02:00",
      "venue": "Atlanta Stadium",
      "teams": [
        "ESP",
        "CPV"
      ],
      "signals": {
        "importance": 86,
        "tactical": 67,
        "entertainment": 84,
        "focus": 93,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Spanien vs Kap Verde: Wie oft kommt Spanien hinter den gegnerischen Sechser?",
        "risk": "Wenn der Gegner die erste Gegenpressingwelle überspielt, muss die Restverteidigung große Räume kontrollieren.",
        "player": "Wird der ballferne Flügel geduldig vorbereitet?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe H, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "bel-egy-2026-06-15",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Belgium v Egypt ist in aktuellen Group-G-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe G",
      "kickoffGermany": "2026-06-15T21:00:00+02:00",
      "venue": "Seattle Stadium",
      "teams": [
        "BEL",
        "EGY"
      ],
      "signals": {
        "importance": 56,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 32
      },
      "tags": [],
      "analysis": {
        "key": "Belgien vs Ägypten: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe G, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "ksa-uru-2026-06-16",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Saudi Arabia v Uruguay ist in Group-H-Listen bestätigt; Kickoff aus ET nach CEST normalisiert.",
      "stage": "group",
      "group": "Gruppe H",
      "kickoffGermany": "2026-06-16T00:00:00+02:00",
      "venue": "Miami Stadium",
      "teams": [
        "KSA",
        "URU"
      ],
      "signals": {
        "importance": 70,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 48,
        "lowValueRisk": 16
      },
      "tags": [
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Saudi-Arabien vs Uruguay: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe H, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "irn-nzl-2026-06-16",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "IR Iran v New Zealand ist in aktuellen Group-G-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe G",
      "kickoffGermany": "2026-06-16T03:00:00+02:00",
      "venue": "Los Angeles Stadium",
      "teams": [
        "IRN",
        "NZL"
      ],
      "signals": {
        "importance": 56,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 28,
        "lowValueRisk": 42
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Iran vs Neuseeland: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe G, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "fra-sen-2026-06-16",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "France v Senegal ist in Group-I-Listen bestätigt; Kickoff aus ET nach CEST normalisiert.",
      "stage": "group",
      "group": "Gruppe I",
      "kickoffGermany": "2026-06-16T21:00:00+02:00",
      "venue": "New York New Jersey Stadium",
      "teams": [
        "FRA",
        "SEN"
      ],
      "signals": {
        "importance": 86,
        "tactical": 67,
        "entertainment": 85,
        "focus": 94,
        "surprise": 62,
        "time": 94,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Frankreich vs Senegal: Wie früh findet Frankreich Tiefe hinter der letzten Linie?",
        "risk": "Wenn das Spiel langsam und eng wird, kann die Chance Creation stärker von Einzelaktionen abhängen.",
        "player": "Werden Ballgewinne sofort vertikal gemacht?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe I, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "irq-nor-2026-06-17",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Iraq v Norway ist in Group-I-Listen bestätigt; Norwegen ist Surprise-Team.",
      "stage": "group",
      "group": "Gruppe I",
      "kickoffGermany": "2026-06-17T00:00:00+02:00",
      "venue": "Boston Stadium",
      "teams": [
        "IRQ",
        "NOR"
      ],
      "signals": {
        "importance": 70,
        "tactical": 65,
        "entertainment": 80,
        "focus": 72,
        "surprise": 82,
        "time": 48,
        "lowValueRisk": 0
      },
      "tags": [
        "Surprise-Radar",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Irak vs Norwegen: Wie oft wird die letzte Linie früh attackiert?",
        "risk": "Tiefe Blöcke mit guter Kontrolle über zweite Bälle.",
        "player": "Findet Norwegen zentrale Kreativität vor dem vertikalen Ball?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe I, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "arg-alg-2026-06-17",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Argentina v Algeria ist in Group-J-Listen bestätigt; Kickoff auf CEST normalisiert.",
      "stage": "group",
      "group": "Gruppe J",
      "kickoffGermany": "2026-06-17T03:00:00+02:00",
      "venue": "Kansas City Stadium",
      "teams": [
        "ARG",
        "ALG"
      ],
      "signals": {
        "importance": 85,
        "tactical": 67,
        "entertainment": 85,
        "focus": 96,
        "surprise": 38,
        "time": 28,
        "lowValueRisk": 0
      },
      "tags": [
        "Spoilerfrei",
        "Morgens lesen",
        "Fokus-Team"
      ],
      "analysis": {
        "key": "Argentinien wird über Rhythmus und Zwischenlinienbesetzung kommen.",
        "risk": "Wenn Argentinien zu bequem in Ballbesitz kommt, wird es kontrolliert, aber nicht zwingend spektakulär.",
        "player": "Der freie Mann zwischen Algeriens Mittelfeld- und Abwehrlinie ist der wichtigste Datenpunkt.",
        "source": "Mixed: Spielplan gespiegelt, Live-Eventdaten fehlen im MVP."
      }
    },
    {
      "id": "aut-jor-2026-06-17",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Austria v Jordan ist in Group-J-Listen bestätigt; Kickoff auf CEST normalisiert.",
      "stage": "group",
      "group": "Gruppe J",
      "kickoffGermany": "2026-06-17T06:00:00+02:00",
      "venue": "San Francisco Bay Area Stadium",
      "teams": [
        "AUT",
        "JOR"
      ],
      "signals": {
        "importance": 69,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 14,
        "lowValueRisk": 26
      },
      "tags": [
        "Weiterkommen & Gegner",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Österreich vs Jordanien: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe J, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "por-cod-2026-06-17",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Portugal v DR Congo ist in aktuellen Group-K-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe K",
      "kickoffGermany": "2026-06-17T19:00:00+02:00",
      "venue": "Houston Stadium",
      "teams": [
        "POR",
        "COD"
      ],
      "signals": {
        "importance": 58,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 31
      },
      "tags": [],
      "analysis": {
        "key": "Portugal vs DR Kongo: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe K, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "eng-cro-2026-06-17",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "England v Croatia ist in Group-L-Listen bestätigt; Kickoff auf CEST normalisiert.",
      "stage": "group",
      "group": "Gruppe L",
      "kickoffGermany": "2026-06-17T22:00:00+02:00",
      "venue": "Dallas Stadium",
      "teams": [
        "ENG",
        "CRO"
      ],
      "signals": {
        "importance": 85,
        "tactical": 67,
        "entertainment": 84,
        "focus": 92,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 0
      },
      "tags": [
        "Live schauen",
        "Halbraumduell",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Kroatien will Tempo aus dem Spiel nehmen. England muss entscheiden, ob es hoch presst oder lockt.",
        "risk": "Wenn Englands Achter zu früh springen, öffnen sich diagonale Passwege hinter der ersten Pressinglinie.",
        "player": "Der spielkippende Akteur ist Englands rechter Achter.",
        "source": "Mixed: Gruppenduell gespiegelt, taktische Tiefe im MVP modelliert."
      }
    },
    {
      "id": "gha-pan-2026-06-18",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Ghana v Panama ist in Group-L-Listen bestätigt; Kickoff auf CEST normalisiert.",
      "stage": "group",
      "group": "Gruppe L",
      "kickoffGermany": "2026-06-18T01:00:00+02:00",
      "venue": "Toronto Stadium",
      "teams": [
        "GHA",
        "PAN"
      ],
      "signals": {
        "importance": 69,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 48,
        "lowValueRisk": 16
      },
      "tags": [
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Ghana vs Panama: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe L, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "uzb-col-2026-06-18",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Uzbekistan v Colombia ist in aktuellen Group-K-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe K",
      "kickoffGermany": "2026-06-18T04:00:00+02:00",
      "venue": "Mexico City Stadium",
      "teams": [
        "UZB",
        "COL"
      ],
      "signals": {
        "importance": 58,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 14,
        "lowValueRisk": 41
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Usbekistan vs Kolumbien: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe K, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "cze-rsa-2026-06-18",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Czechia v South Africa ist in aktuellen Group-A-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe A",
      "kickoffGermany": "2026-06-18T18:00:00+02:00",
      "venue": "Atlanta Stadium",
      "teams": [
        "CZE",
        "RSA"
      ],
      "signals": {
        "importance": 52,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 33
      },
      "tags": [],
      "analysis": {
        "key": "Tschechien vs Südafrika: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe A, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "sui-bih-2026-06-18",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Switzerland v Bosnia and Herzegovina ist in aktuellen Group-B-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe B",
      "kickoffGermany": "2026-06-18T21:00:00+02:00",
      "venue": "Los Angeles Stadium",
      "teams": [
        "SUI",
        "BIH"
      ],
      "signals": {
        "importance": 54,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 32
      },
      "tags": [],
      "analysis": {
        "key": "Schweiz vs Bosnien und Herzegowina: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe B, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "can-qat-2026-06-19",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Canada v Qatar ist in aktuellen Group-B-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe B",
      "kickoffGermany": "2026-06-19T00:00:00+02:00",
      "venue": "BC Place Vancouver",
      "teams": [
        "CAN",
        "QAT"
      ],
      "signals": {
        "importance": 54,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 48,
        "lowValueRisk": 32
      },
      "tags": [],
      "analysis": {
        "key": "Kanada vs Katar: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe B, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "mex-kor-2026-06-19",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Mexico v Korea Republic ist in aktuellen Group-A-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe A",
      "kickoffGermany": "2026-06-19T03:00:00+02:00",
      "venue": "Guadalajara Stadium",
      "teams": [
        "MEX",
        "KOR"
      ],
      "signals": {
        "importance": 52,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 28,
        "lowValueRisk": 43
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Mexiko vs Südkorea: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe A, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "usa-aus-2026-06-19",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "United States v Australia ist in aktuellen Group-D-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe D",
      "kickoffGermany": "2026-06-19T21:00:00+02:00",
      "venue": "Seattle Stadium",
      "teams": [
        "USA",
        "AUS"
      ],
      "signals": {
        "importance": 61,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 62,
        "time": 94,
        "lowValueRisk": 30
      },
      "tags": [],
      "analysis": {
        "key": "USA vs Australien: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe D, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "sco-mar-2026-06-20",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Scotland v Morocco ist in Group-C-Listen bestätigt; Kickoff auf CEST normalisiert.",
      "stage": "group",
      "group": "Gruppe C",
      "kickoffGermany": "2026-06-20T00:00:00+02:00",
      "venue": "Boston Stadium",
      "teams": [
        "SCO",
        "MAR"
      ],
      "signals": {
        "importance": 69,
        "tactical": 65,
        "entertainment": 82,
        "focus": 72,
        "surprise": 86,
        "time": 48,
        "lowValueRisk": 0
      },
      "tags": [
        "Surprise-Radar",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Schottland vs Marokko: Lockt Marokko Brasilien oder andere Favoriten konsequent an die Linie?",
        "risk": "Geduldige Gegner mit schnellen Seitenwechseln.",
        "player": "Wie sauber ist der erste Pass nach Ballgewinn?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe C, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "bra-hai-2026-06-20",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Brazil v Haiti ist in aktuellen Spielplanlisten gespiegelt; Kickoff in deutscher Zeit markiert als Mixed.",
      "stage": "group",
      "group": "Gruppe C",
      "kickoffGermany": "2026-06-20T02:30:00+02:00",
      "venue": "Philadelphia Stadium",
      "teams": [
        "BRA",
        "HAI"
      ],
      "signals": {
        "importance": 85,
        "tactical": 67,
        "entertainment": 85,
        "focus": 94,
        "surprise": 62,
        "time": 28,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Brasilien vs Haiti: Gewinnt Brasilien die ersten 1-gegen-1s am Flügel?",
        "risk": "Nach riskanten Dribblings können offene Räume hinter dem Ball entstehen.",
        "player": "Wie schnell kommt die Rückverlagerung nach geblocktem Dribbling?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe C, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "ned-swe-2026-06-20",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Netherlands v Sweden ist in Group-F-Kickofflisten bestätigt.",
      "stage": "group",
      "group": "Gruppe F",
      "kickoffGermany": "2026-06-20T19:00:00+02:00",
      "venue": "Houston Stadium",
      "teams": [
        "NED",
        "SWE"
      ],
      "signals": {
        "importance": 65,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 62,
        "time": 94,
        "lowValueRisk": 29
      },
      "tags": [],
      "analysis": {
        "key": "Niederlande vs Schweden: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe F, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "ger-civ-2026-06-20",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Germany v Côte d'Ivoire ist in deutschen Kickofflisten und Group-E-Listen gespiegelt.",
      "stage": "group",
      "group": "Gruppe E",
      "kickoffGermany": "2026-06-20T22:00:00+02:00",
      "venue": "Toronto Stadium",
      "teams": [
        "GER",
        "CIV"
      ],
      "signals": {
        "importance": 87,
        "tactical": 67,
        "entertainment": 86,
        "focus": 98,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Deutschland vs Côte d'Ivoire: Ist der Sechserraum nach Ballverlusten besetzt?",
        "risk": "Bei zu vielen Spielern vor dem Ball entstehen Konterräume neben und hinter der Sechserzone.",
        "player": "Schaffen die Achter Tiefe ohne die Mitte zu leeren?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe E, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "ecu-cuw-2026-06-21",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Ecuador v Curaçao ist in Group-E-Listen gespiegelt; Kickoff in deutscher Zeit markiert als Mixed.",
      "stage": "group",
      "group": "Gruppe E",
      "kickoffGermany": "2026-06-21T02:00:00+02:00",
      "venue": "Kansas City Stadium",
      "teams": [
        "ECU",
        "CUW"
      ],
      "signals": {
        "importance": 71,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 28,
        "lowValueRisk": 26
      },
      "tags": [
        "Weiterkommen & Gegner",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Ecuador vs Curaçao: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe E, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "tur-par-2026-06-21",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Türkiye v Paraguay ist aus aktuellen Spielplanlisten gespiegelt; Türkei ist Surprise-Team.",
      "stage": "group",
      "group": "Gruppe D",
      "kickoffGermany": "2026-06-21T05:00:00+02:00",
      "venue": "San Francisco Bay Area Stadium",
      "teams": [
        "TUR",
        "PAR"
      ],
      "signals": {
        "importance": 61,
        "tactical": 65,
        "entertainment": 79,
        "focus": 24,
        "surprise": 79,
        "time": 14,
        "lowValueRisk": 17
      },
      "tags": [
        "Surprise-Radar",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Türkei vs Paraguay: Bleibt die Mitte nach Ballverlusten stabil?",
        "risk": "Kann Spiele zu offen werden lassen, wenn Struktur und Emotion nicht sauber zusammenfinden.",
        "player": "Wie mutig sind die ersten Pässe nach Ballgewinn?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe D, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "tun-jpn-2026-06-21",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Tunisia v Japan ist in Group-F-Listen bestätigt; Japan ist Surprise-Team.",
      "stage": "group",
      "group": "Gruppe F",
      "kickoffGermany": "2026-06-21T06:00:00+02:00",
      "venue": "Monterrey Stadium",
      "teams": [
        "TUN",
        "JPN"
      ],
      "signals": {
        "importance": 65,
        "tactical": 65,
        "entertainment": 81,
        "focus": 24,
        "surprise": 84,
        "time": 14,
        "lowValueRisk": 15
      },
      "tags": [
        "Surprise-Radar",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Tunesien vs Japan: Wie oft zwingt Japan den Gegner zu Rückpässen?",
        "risk": "Teams mit Wucht, zweiten Bällen und vielen Strafraumduellen.",
        "player": "Wie viele Anschlussläufe gibt es nach dem ersten Ballgewinn?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe F, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "esp-ksa-2026-06-21",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Spain v Saudi Arabia ist in Group-H-Listen bestätigt.",
      "stage": "group",
      "group": "Gruppe H",
      "kickoffGermany": "2026-06-21T18:00:00+02:00",
      "venue": "Atlanta Stadium",
      "teams": [
        "ESP",
        "KSA"
      ],
      "signals": {
        "importance": 86,
        "tactical": 67,
        "entertainment": 84,
        "focus": 93,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Spanien vs Saudi-Arabien: Wie oft kommt Spanien hinter den gegnerischen Sechser?",
        "risk": "Wenn der Gegner die erste Gegenpressingwelle überspielt, muss die Restverteidigung große Räume kontrollieren.",
        "player": "Wird der ballferne Flügel geduldig vorbereitet?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe H, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "bel-irn-2026-06-21",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Belgium v IR Iran ist in aktuellen Group-G-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe G",
      "kickoffGermany": "2026-06-21T21:00:00+02:00",
      "venue": "Los Angeles Stadium",
      "teams": [
        "BEL",
        "IRN"
      ],
      "signals": {
        "importance": 56,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 32
      },
      "tags": [],
      "analysis": {
        "key": "Belgien vs Iran: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe G, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "uru-cpv-2026-06-22",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Uruguay v Cabo Verde ist in Group-H-Listen bestätigt.",
      "stage": "group",
      "group": "Gruppe H",
      "kickoffGermany": "2026-06-22T00:00:00+02:00",
      "venue": "Miami Stadium",
      "teams": [
        "URU",
        "CPV"
      ],
      "signals": {
        "importance": 70,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 48,
        "lowValueRisk": 16
      },
      "tags": [
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Uruguay vs Kap Verde: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe H, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "nzl-egy-2026-06-22",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "New Zealand v Egypt ist in aktuellen Group-G-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe G",
      "kickoffGermany": "2026-06-22T03:00:00+02:00",
      "venue": "BC Place Vancouver",
      "teams": [
        "NZL",
        "EGY"
      ],
      "signals": {
        "importance": 56,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 28,
        "lowValueRisk": 42
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Neuseeland vs Ägypten: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe G, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "arg-aut-2026-06-22",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Argentina v Austria ist in Group-J-Listen bestätigt.",
      "stage": "group",
      "group": "Gruppe J",
      "kickoffGermany": "2026-06-22T19:00:00+02:00",
      "venue": "Dallas Stadium",
      "teams": [
        "ARG",
        "AUT"
      ],
      "signals": {
        "importance": 85,
        "tactical": 67,
        "entertainment": 85,
        "focus": 96,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Argentinien vs Österreich: Findet Argentinien den freien Mann hinter der ersten Linie?",
        "risk": "Kann phasenweise zu kontrolliert werden, wenn der Gegner tief bleibt und keine Räume zwischen den Linien anbietet.",
        "player": "Wie gut bleibt die Restverteidigung bei langen Ballbesitzphasen?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe J, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "fra-irq-2026-06-22",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "France v Iraq ist in Group-I-Listen bestätigt.",
      "stage": "group",
      "group": "Gruppe I",
      "kickoffGermany": "2026-06-22T23:00:00+02:00",
      "venue": "Philadelphia Stadium",
      "teams": [
        "FRA",
        "IRQ"
      ],
      "signals": {
        "importance": 86,
        "tactical": 67,
        "entertainment": 85,
        "focus": 94,
        "surprise": 62,
        "time": 78,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Frankreich vs Irak: Wie früh findet Frankreich Tiefe hinter der letzten Linie?",
        "risk": "Wenn das Spiel langsam und eng wird, kann die Chance Creation stärker von Einzelaktionen abhängen.",
        "player": "Werden Ballgewinne sofort vertikal gemacht?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe I, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "nor-sen-2026-06-23",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Norway v Senegal ist in Group-I-Listen bestätigt; Norwegen ist Surprise-Team.",
      "stage": "group",
      "group": "Gruppe I",
      "kickoffGermany": "2026-06-23T02:00:00+02:00",
      "venue": "New York New Jersey Stadium",
      "teams": [
        "NOR",
        "SEN"
      ],
      "signals": {
        "importance": 70,
        "tactical": 65,
        "entertainment": 80,
        "focus": 72,
        "surprise": 82,
        "time": 28,
        "lowValueRisk": 2
      },
      "tags": [
        "Surprise-Radar",
        "Weiterkommen & Gegner",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Norwegen vs Senegal: Wie oft wird die letzte Linie früh attackiert?",
        "risk": "Wenn der Gegner Tiefe kontrolliert und Zentrum schließt, kann Norwegen eindimensionaler wirken.",
        "player": "Findet Norwegen zentrale Kreativität vor dem vertikalen Ball?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe I, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "jor-alg-2026-06-23",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Jordan v Algeria ist in Group-J-Listen bestätigt.",
      "stage": "group",
      "group": "Gruppe J",
      "kickoffGermany": "2026-06-23T05:00:00+02:00",
      "venue": "San Francisco Bay Area Stadium",
      "teams": [
        "JOR",
        "ALG"
      ],
      "signals": {
        "importance": 69,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 14,
        "lowValueRisk": 26
      },
      "tags": [
        "Weiterkommen & Gegner",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Jordanien vs Algerien: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe J, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "por-uzb-2026-06-23",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Portugal v Uzbekistan ist in aktuellen Group-K-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe K",
      "kickoffGermany": "2026-06-23T19:00:00+02:00",
      "venue": "Houston Stadium",
      "teams": [
        "POR",
        "UZB"
      ],
      "signals": {
        "importance": 58,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 31
      },
      "tags": [],
      "analysis": {
        "key": "Portugal vs Usbekistan: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe K, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "eng-gha-2026-06-23",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "England v Ghana ist in England/Group-L-Listen bestätigt.",
      "stage": "group",
      "group": "Gruppe L",
      "kickoffGermany": "2026-06-23T22:00:00+02:00",
      "venue": "Boston Stadium",
      "teams": [
        "ENG",
        "GHA"
      ],
      "signals": {
        "importance": 85,
        "tactical": 67,
        "entertainment": 84,
        "focus": 92,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "England vs Ghana: Wird das Zentrum mutig bespielt oder nur außen zirkuliert?",
        "risk": "Kann zu vorsichtig werden, wenn der Gegner das Zentrum schließt und Tempo aus dem Spiel nimmt.",
        "player": "Springen die Achter im Pressing zu früh heraus?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe L, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "pan-cro-2026-06-24",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Panama v Croatia ist in Group-L-Listen gespiegelt.",
      "stage": "group",
      "group": "Gruppe L",
      "kickoffGermany": "2026-06-24T01:00:00+02:00",
      "venue": "Toronto Stadium",
      "teams": [
        "PAN",
        "CRO"
      ],
      "signals": {
        "importance": 69,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 48,
        "lowValueRisk": 16
      },
      "tags": [
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Panama vs Kroatien: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe L, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "col-cod-2026-06-24",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Colombia v DR Congo ist in aktuellen Group-K-Listen geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe K",
      "kickoffGermany": "2026-06-24T04:00:00+02:00",
      "venue": "Guadalajara Stadium",
      "teams": [
        "COL",
        "COD"
      ],
      "signals": {
        "importance": 58,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 14,
        "lowValueRisk": 41
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Kolumbien vs DR Kongo: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe K, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "bih-qat-2026-06-24",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Bosnia and Herzegovina v Qatar ist als paralleles Group-B-Finale geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe B",
      "kickoffGermany": "2026-06-24T21:00:00+02:00",
      "venue": "Seattle Stadium",
      "teams": [
        "BIH",
        "QAT"
      ],
      "signals": {
        "importance": 54,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 32
      },
      "tags": [],
      "analysis": {
        "key": "Bosnien und Herzegowina vs Katar: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe B, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "sui-can-2026-06-24",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Switzerland v Canada ist als paralleles Group-B-Finale geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe B",
      "kickoffGermany": "2026-06-24T21:00:00+02:00",
      "venue": "BC Place Vancouver",
      "teams": [
        "SUI",
        "CAN"
      ],
      "signals": {
        "importance": 54,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 32
      },
      "tags": [],
      "analysis": {
        "key": "Schweiz vs Kanada: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe B, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "mar-hai-2026-06-25",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Morocco v Haiti ist in Group-C-Listen bestätigt; finaler Gruppenspieltag.",
      "stage": "group",
      "group": "Gruppe C",
      "kickoffGermany": "2026-06-25T00:00:00+02:00",
      "venue": "Atlanta Stadium",
      "teams": [
        "MAR",
        "HAI"
      ],
      "signals": {
        "importance": 78,
        "tactical": 65,
        "entertainment": 82,
        "focus": 72,
        "surprise": 86,
        "time": 48,
        "lowValueRisk": 0
      },
      "tags": [
        "Surprise-Radar",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Marokko vs Haiti: Lockt Marokko Brasilien oder andere Favoriten konsequent an die Linie?",
        "risk": "Bei langer eigener Ballbesitzphase kann die kreative Durchdringung schwerer fallen.",
        "player": "Wie sauber ist der erste Pass nach Ballgewinn?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe C, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "sco-bra-2026-06-25",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Scotland v Brazil ist in Group-C-Listen bestätigt; finaler Gruppenspieltag.",
      "stage": "group",
      "group": "Gruppe C",
      "kickoffGermany": "2026-06-25T00:00:00+02:00",
      "venue": "Miami Stadium",
      "teams": [
        "SCO",
        "BRA"
      ],
      "signals": {
        "importance": 94,
        "tactical": 67,
        "entertainment": 85,
        "focus": 94,
        "surprise": 62,
        "time": 48,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Schottland vs Brasilien: Gewinnt Brasilien die ersten 1-gegen-1s am Flügel?",
        "risk": "Kompakte Pressingfallen mit sauberem Konterausgang.",
        "player": "Wie schnell kommt die Rückverlagerung nach geblocktem Dribbling?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe C, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "cze-mex-2026-06-25",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Czechia v Mexico ist als paralleles Group-A-Finale geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe A",
      "kickoffGermany": "2026-06-25T03:00:00+02:00",
      "venue": "Mexico City Stadium",
      "teams": [
        "CZE",
        "MEX"
      ],
      "signals": {
        "importance": 61,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 28,
        "lowValueRisk": 40
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Tschechien vs Mexiko: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe A, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "rsa-kor-2026-06-25",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "South Africa v Korea Republic ist als paralleles Group-A-Finale geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe A",
      "kickoffGermany": "2026-06-25T03:00:00+02:00",
      "venue": "Monterrey Stadium",
      "teams": [
        "RSA",
        "KOR"
      ],
      "signals": {
        "importance": 61,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 28,
        "lowValueRisk": 40
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Südafrika vs Südkorea: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe A, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "cuw-civ-2026-06-25",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Curaçao v Côte d'Ivoire ist als paralleles Group-E-Finale gespiegelt.",
      "stage": "group",
      "group": "Gruppe E",
      "kickoffGermany": "2026-06-25T22:00:00+02:00",
      "venue": "Philadelphia Stadium",
      "teams": [
        "CUW",
        "CIV"
      ],
      "signals": {
        "importance": 80,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 14
      },
      "tags": [
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Curaçao vs Côte d'Ivoire: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe E, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "ecu-ger-2026-06-25",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Ecuador v Germany ist in deutschen Kickofflisten bestätigt; finaler Gruppenspieltag.",
      "stage": "group",
      "group": "Gruppe E",
      "kickoffGermany": "2026-06-25T22:00:00+02:00",
      "venue": "New York New Jersey Stadium",
      "teams": [
        "ECU",
        "GER"
      ],
      "signals": {
        "importance": 96,
        "tactical": 67,
        "entertainment": 86,
        "focus": 98,
        "surprise": 38,
        "time": 94,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Ecuador vs Deutschland: Ist der Sechserraum nach Ballverlusten besetzt?",
        "risk": "Gegner mit schnellen Ausbrüchen in den Rücken der Außenverteidiger.",
        "player": "Schaffen die Achter Tiefe ohne die Mitte zu leeren?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe E, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "jpn-swe-2026-06-26",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Japan v Sweden ist in Group-F-Kickofflisten bestätigt.",
      "stage": "group",
      "group": "Gruppe F",
      "kickoffGermany": "2026-06-26T01:00:00+02:00",
      "venue": "Dallas Stadium",
      "teams": [
        "JPN",
        "SWE"
      ],
      "signals": {
        "importance": 74,
        "tactical": 65,
        "entertainment": 81,
        "focus": 24,
        "surprise": 84,
        "time": 48,
        "lowValueRisk": 3
      },
      "tags": [
        "Surprise-Radar"
      ],
      "analysis": {
        "key": "Japan vs Schweden: Wie oft zwingt Japan den Gegner zu Rückpässen?",
        "risk": "Gegen sehr robuste Strafraumteams kann die letzte Linie unter Druck geraten.",
        "player": "Wie viele Anschlussläufe gibt es nach dem ersten Ballgewinn?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe F, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "tun-ned-2026-06-26",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Tunisia v Netherlands ist in Group-F-Kickofflisten bestätigt.",
      "stage": "group",
      "group": "Gruppe F",
      "kickoffGermany": "2026-06-26T01:00:00+02:00",
      "venue": "Kansas City Stadium",
      "teams": [
        "TUN",
        "NED"
      ],
      "signals": {
        "importance": 74,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 62,
        "time": 48,
        "lowValueRisk": 27
      },
      "tags": [],
      "analysis": {
        "key": "Tunesien vs Niederlande: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe F, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "par-aus-2026-06-26",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Paraguay v Australia ist als paralleles Group-D-Finale geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe D",
      "kickoffGermany": "2026-06-26T04:00:00+02:00",
      "venue": "San Francisco Bay Area Stadium",
      "teams": [
        "PAR",
        "AUS"
      ],
      "signals": {
        "importance": 70,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 62,
        "time": 14,
        "lowValueRisk": 38
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Paraguay vs Australien: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe D, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "tur-usa-2026-06-26",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Türkiye v United States ist als paralleles Group-D-Finale geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe D",
      "kickoffGermany": "2026-06-26T04:00:00+02:00",
      "venue": "Los Angeles Stadium",
      "teams": [
        "TUR",
        "USA"
      ],
      "signals": {
        "importance": 70,
        "tactical": 65,
        "entertainment": 79,
        "focus": 24,
        "surprise": 79,
        "time": 14,
        "lowValueRisk": 15
      },
      "tags": [
        "Surprise-Radar",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Türkei vs USA: Bleibt die Mitte nach Ballverlusten stabil?",
        "risk": "Kann Spiele zu offen werden lassen, wenn Struktur und Emotion nicht sauber zusammenfinden.",
        "player": "Wie mutig sind die ersten Pässe nach Ballgewinn?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe D, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "nor-fra-2026-06-26",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Norway v France ist in Group-I-Listen bestätigt; finaler Gruppenspieltag.",
      "stage": "group",
      "group": "Gruppe I",
      "kickoffGermany": "2026-06-26T21:00:00+02:00",
      "venue": "Boston Stadium",
      "teams": [
        "NOR",
        "FRA"
      ],
      "signals": {
        "importance": 95,
        "tactical": 82,
        "entertainment": 94,
        "focus": 94,
        "surprise": 82,
        "time": 94,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Surprise-Radar",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Norwegen vs Frankreich: Wie oft wird die letzte Linie früh attackiert?",
        "risk": "Teams, die Tempo rausnehmen und Frankreich lange verteidigen lassen.",
        "player": "Findet Norwegen zentrale Kreativität vor dem vertikalen Ball?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe I, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "sen-irq-2026-06-26",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Senegal v Iraq ist als paralleles Group-I-Finale bestätigt.",
      "stage": "group",
      "group": "Gruppe I",
      "kickoffGermany": "2026-06-26T21:00:00+02:00",
      "venue": "Toronto Stadium",
      "teams": [
        "SEN",
        "IRQ"
      ],
      "signals": {
        "importance": 79,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 62,
        "time": 94,
        "lowValueRisk": 14
      },
      "tags": [
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Senegal vs Irak: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe I, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "cpv-ksa-2026-06-27",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Cabo Verde v Saudi Arabia ist in Group-H-Listen bestätigt; finaler Gruppenspieltag.",
      "stage": "group",
      "group": "Gruppe H",
      "kickoffGermany": "2026-06-27T02:00:00+02:00",
      "venue": "Houston Stadium",
      "teams": [
        "CPV",
        "KSA"
      ],
      "signals": {
        "importance": 79,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 28,
        "lowValueRisk": 24
      },
      "tags": [
        "Weiterkommen & Gegner",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Kap Verde vs Saudi-Arabien: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe H, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "uru-esp-2026-06-27",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Uruguay v Spain ist in Group-H-Listen bestätigt; finaler Gruppenspieltag.",
      "stage": "group",
      "group": "Gruppe H",
      "kickoffGermany": "2026-06-27T02:00:00+02:00",
      "venue": "Guadalajara Stadium",
      "teams": [
        "URU",
        "ESP"
      ],
      "signals": {
        "importance": 95,
        "tactical": 67,
        "entertainment": 84,
        "focus": 93,
        "surprise": 38,
        "time": 28,
        "lowValueRisk": 0
      },
      "tags": [
        "Live schauen",
        "Stilkontrast",
        "Top-Dossier"
      ],
      "analysis": {
        "key": "Spanien will den Gegner verschieben, Uruguay will das Spiel in Zweikämpfe und zweite Bälle ziehen.",
        "risk": "Spaniens Restverteidigung wird nach Seitenwechseln getestet.",
        "player": "Der spanische linke Achter ist der Taktikdetektor.",
        "source": "Mixed: Gruppenduell gespiegelt, taktische Tiefe im MVP modelliert."
      }
    },
    {
      "id": "egy-irn-2026-06-27",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Egypt v IR Iran ist als paralleles Group-G-Finale geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe G",
      "kickoffGermany": "2026-06-27T05:00:00+02:00",
      "venue": "Seattle Stadium",
      "teams": [
        "EGY",
        "IRN"
      ],
      "signals": {
        "importance": 65,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 14,
        "lowValueRisk": 39
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Ägypten vs Iran: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe G, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "nzl-bel-2026-06-27",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "New Zealand v Belgium ist als paralleles Group-G-Finale geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe G",
      "kickoffGermany": "2026-06-27T05:00:00+02:00",
      "venue": "BC Place Vancouver",
      "teams": [
        "NZL",
        "BEL"
      ],
      "signals": {
        "importance": 65,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 14,
        "lowValueRisk": 39
      },
      "tags": [
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Neuseeland vs Belgien: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe G, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "cro-gha-2026-06-27",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Croatia v Ghana ist als paralleles Group-L-Finale gespiegelt.",
      "stage": "group",
      "group": "Gruppe L",
      "kickoffGermany": "2026-06-27T23:00:00+02:00",
      "venue": "Philadelphia Stadium",
      "teams": [
        "CRO",
        "GHA"
      ],
      "signals": {
        "importance": 78,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 78,
        "lowValueRisk": 14
      },
      "tags": [
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Kroatien vs Ghana: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe L, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "pan-eng-2026-06-27",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Panama v England ist in England/Group-L-Listen bestätigt; finaler Gruppenspieltag.",
      "stage": "group",
      "group": "Gruppe L",
      "kickoffGermany": "2026-06-27T23:00:00+02:00",
      "venue": "New York New Jersey Stadium",
      "teams": [
        "PAN",
        "ENG"
      ],
      "signals": {
        "importance": 94,
        "tactical": 67,
        "entertainment": 84,
        "focus": 92,
        "surprise": 38,
        "time": 78,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner"
      ],
      "analysis": {
        "key": "Panama vs England: Wird das Zentrum mutig bespielt oder nur außen zirkuliert?",
        "risk": "Teams mit hoher Pressingresistenz und guter Ballzirkulation.",
        "player": "Springen die Achter im Pressing zu früh heraus?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe L, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "cod-uzb-2026-06-28",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "DR Congo v Uzbekistan ist als paralleles Group-K-Finale geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe K",
      "kickoffGermany": "2026-06-28T01:30:00+02:00",
      "venue": "Atlanta Stadium",
      "teams": [
        "COD",
        "UZB"
      ],
      "signals": {
        "importance": 67,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 48,
        "lowValueRisk": 29
      },
      "tags": [],
      "analysis": {
        "key": "DR Kongo vs Usbekistan: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe K, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "col-por-2026-06-28",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Colombia v Portugal ist als paralleles Group-K-Finale geführt; CEST aus UK-Zeit normalisiert.",
      "stage": "group",
      "group": "Gruppe K",
      "kickoffGermany": "2026-06-28T01:30:00+02:00",
      "venue": "Miami Stadium",
      "teams": [
        "COL",
        "POR"
      ],
      "signals": {
        "importance": 67,
        "tactical": 50,
        "entertainment": 64,
        "focus": 24,
        "surprise": 38,
        "time": 48,
        "lowValueRisk": 29
      },
      "tags": [],
      "analysis": {
        "key": "Kolumbien vs Portugal: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe K, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "alg-aut-2026-06-28",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Algeria v Austria ist als paralleles Group-J-Finale bestätigt.",
      "stage": "group",
      "group": "Gruppe J",
      "kickoffGermany": "2026-06-28T04:00:00+02:00",
      "venue": "Kansas City Stadium",
      "teams": [
        "ALG",
        "AUT"
      ],
      "signals": {
        "importance": 78,
        "tactical": 50,
        "entertainment": 64,
        "focus": 72,
        "surprise": 38,
        "time": 14,
        "lowValueRisk": 24
      },
      "tags": [
        "Weiterkommen & Gegner",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Algerien vs Österreich: Score-Signale nach Fokus, Weiterkommen, Gegner und Uhrzeit beobachten.",
        "risk": "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.",
        "player": "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe J, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    },
    {
      "id": "jor-arg-2026-06-28",
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "analysisLevel": "model",
      "scoreSignalsSource": "auto-normalized",
      "sourceNote": "Jordan v Argentina ist in Group-J-Listen bestätigt; finaler Gruppenspieltag.",
      "stage": "group",
      "group": "Gruppe J",
      "kickoffGermany": "2026-06-28T04:00:00+02:00",
      "venue": "Dallas Stadium",
      "teams": [
        "JOR",
        "ARG"
      ],
      "signals": {
        "importance": 94,
        "tactical": 67,
        "entertainment": 85,
        "focus": 96,
        "surprise": 38,
        "time": 14,
        "lowValueRisk": 0
      },
      "tags": [
        "Fokus-Team",
        "Weiterkommen & Gegner",
        "Spoilerfrei"
      ],
      "analysis": {
        "key": "Jordanien vs Argentinien: Findet Argentinien den freien Mann hinter der ersten Linie?",
        "risk": "Sehr kompakte Blöcke mit schnellen diagonalen Kontern.",
        "player": "Wie gut bleibt die Restverteidigung bei langen Ballbesitzphasen?",
        "source": "Auto-Modell: aus Teamprofilen, Gruppe J, Weiterkommen-und-Gegner-Relevanz und Uhrzeit abgeleitet."
      }
    }
  ],
  "knockout": [
    {
      "id": "m73",
      "matchNumber": 73,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-06-28T21:00:00+02:00",
      "venue": "Los Angeles Stadium",
      "slots": [
        "2A",
        "2B"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Slot-Teams entstehen erst nach der Gruppenphase."
    },
    {
      "id": "m74",
      "matchNumber": 74,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-06-29T19:00:00+02:00",
      "venue": "Houston Stadium",
      "slots": [
        "1C",
        "2F"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Slot-Teams entstehen erst nach der Gruppenphase."
    },
    {
      "id": "m75",
      "matchNumber": 75,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-06-29T22:30:00+02:00",
      "venue": "Boston Stadium",
      "slots": [
        "1E",
        "3ABCDF"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Third-place-Slot bleibt bis zur Gruppentabelle variabel."
    },
    {
      "id": "m76",
      "matchNumber": 76,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-01T03:00:00+02:00",
      "venue": "Monterrey Stadium",
      "slots": [
        "1F",
        "2C"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Slot-Teams entstehen erst nach der Gruppenphase."
    },
    {
      "id": "m77",
      "matchNumber": 77,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-06-30T21:00:00+02:00",
      "venue": "Dallas Stadium",
      "slots": [
        "2E",
        "2I"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Slot-Teams entstehen erst nach der Gruppenphase."
    },
    {
      "id": "m78",
      "matchNumber": 78,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-01T23:00:00+02:00",
      "venue": "New York New Jersey Stadium",
      "slots": [
        "1I",
        "3CDFGH"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Third-place-Slot bleibt bis zur Gruppentabelle variabel."
    },
    {
      "id": "m79",
      "matchNumber": 79,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-02T03:00:00+02:00",
      "venue": "Mexico City Stadium",
      "slots": [
        "1A",
        "3CEFHI"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Third-place-Slot bleibt bis zur Gruppentabelle variabel."
    },
    {
      "id": "m80",
      "matchNumber": 80,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-01T18:00:00+02:00",
      "venue": "Atlanta Stadium",
      "slots": [
        "1L",
        "3EHIJK"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Third-place-Slot bleibt bis zur Gruppentabelle variabel."
    },
    {
      "id": "m81",
      "matchNumber": 81,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-01T22:00:00+02:00",
      "venue": "Seattle Stadium",
      "slots": [
        "1G",
        "3AEHIJ"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Third-place-Slot bleibt bis zur Gruppentabelle variabel."
    },
    {
      "id": "m82",
      "matchNumber": 82,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-03T02:00:00+02:00",
      "venue": "San Francisco Bay Area Stadium",
      "slots": [
        "1D",
        "3BEFIJ"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Third-place-Slot bleibt bis zur Gruppentabelle variabel."
    },
    {
      "id": "m83",
      "matchNumber": 83,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-02T21:00:00+02:00",
      "venue": "Los Angeles Stadium",
      "slots": [
        "1H",
        "2J"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Slot-Teams entstehen erst nach der Gruppenphase."
    },
    {
      "id": "m84",
      "matchNumber": 84,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-04T01:00:00+02:00",
      "venue": "Toronto Stadium",
      "slots": [
        "2K",
        "2L"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Slot-Teams entstehen erst nach der Gruppenphase."
    },
    {
      "id": "m85",
      "matchNumber": 85,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-04T05:00:00+02:00",
      "venue": "BC Place Vancouver",
      "slots": [
        "1B",
        "3EFGIJ"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Third-place-Slot bleibt bis zur Gruppentabelle variabel."
    },
    {
      "id": "m86",
      "matchNumber": 86,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-03T20:00:00+02:00",
      "venue": "Dallas Stadium",
      "slots": [
        "2D",
        "2G"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Slot-Teams entstehen erst nach der Gruppenphase."
    },
    {
      "id": "m87",
      "matchNumber": 87,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-05T00:00:00+02:00",
      "venue": "Miami Stadium",
      "slots": [
        "1J",
        "2H"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Slot-Teams entstehen erst nach der Gruppenphase."
    },
    {
      "id": "m88",
      "matchNumber": 88,
      "round": "round-of-32",
      "roundLabel": "Round of 32",
      "kickoffGermany": "2026-07-05T03:30:00+02:00",
      "venue": "Kansas City Stadium",
      "slots": [
        "1K",
        "3DEIJL"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "K.o.-Platzhalter aus aktuellen Fixture-Listen; Third-place-Slot bleibt bis zur Gruppentabelle variabel."
    },
    {
      "id": "m89",
      "matchNumber": 89,
      "round": "round-of-16",
      "roundLabel": "Achtelfinale",
      "kickoffGermany": "2026-07-04T19:00:00+02:00",
      "venue": "Houston Stadium",
      "slots": [
        "W73",
        "W75"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Round-of-32-Siegern gefuellt."
    },
    {
      "id": "m90",
      "matchNumber": 90,
      "round": "round-of-16",
      "roundLabel": "Achtelfinale",
      "kickoffGermany": "2026-07-05T23:00:00+02:00",
      "venue": "Philadelphia Stadium",
      "slots": [
        "W74",
        "W77"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Round-of-32-Siegern gefuellt."
    },
    {
      "id": "m91",
      "matchNumber": 91,
      "round": "round-of-16",
      "roundLabel": "Achtelfinale",
      "kickoffGermany": "2026-07-05T22:00:00+02:00",
      "venue": "New York New Jersey Stadium",
      "slots": [
        "W76",
        "W78"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Round-of-32-Siegern gefuellt."
    },
    {
      "id": "m92",
      "matchNumber": 92,
      "round": "round-of-16",
      "roundLabel": "Achtelfinale",
      "kickoffGermany": "2026-07-07T02:00:00+02:00",
      "venue": "Mexico City Stadium",
      "slots": [
        "W79",
        "W80"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Round-of-32-Siegern gefuellt."
    },
    {
      "id": "m93",
      "matchNumber": 93,
      "round": "round-of-16",
      "roundLabel": "Achtelfinale",
      "kickoffGermany": "2026-07-06T21:00:00+02:00",
      "venue": "Dallas Stadium",
      "slots": [
        "W83",
        "W84"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Round-of-32-Siegern gefuellt."
    },
    {
      "id": "m94",
      "matchNumber": 94,
      "round": "round-of-16",
      "roundLabel": "Achtelfinale",
      "kickoffGermany": "2026-07-08T02:00:00+02:00",
      "venue": "Seattle Stadium",
      "slots": [
        "W81",
        "W82"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Round-of-32-Siegern gefuellt."
    },
    {
      "id": "m95",
      "matchNumber": 95,
      "round": "round-of-16",
      "roundLabel": "Achtelfinale",
      "kickoffGermany": "2026-07-07T18:00:00+02:00",
      "venue": "Atlanta Stadium",
      "slots": [
        "W86",
        "W88"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Round-of-32-Siegern gefuellt."
    },
    {
      "id": "m96",
      "matchNumber": 96,
      "round": "round-of-16",
      "roundLabel": "Achtelfinale",
      "kickoffGermany": "2026-07-07T22:00:00+02:00",
      "venue": "BC Place Vancouver",
      "slots": [
        "W85",
        "W87"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Round-of-32-Siegern gefuellt."
    },
    {
      "id": "m97",
      "matchNumber": 97,
      "round": "quarter-final",
      "roundLabel": "Viertelfinale",
      "kickoffGermany": "2026-07-09T22:00:00+02:00",
      "venue": "Boston Stadium",
      "slots": [
        "W89",
        "W90"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Achtelfinal-Siegern gefuellt."
    },
    {
      "id": "m98",
      "matchNumber": 98,
      "round": "quarter-final",
      "roundLabel": "Viertelfinale",
      "kickoffGermany": "2026-07-10T21:00:00+02:00",
      "venue": "Los Angeles Stadium",
      "slots": [
        "W93",
        "W94"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Achtelfinal-Siegern gefuellt."
    },
    {
      "id": "m99",
      "matchNumber": 99,
      "round": "quarter-final",
      "roundLabel": "Viertelfinale",
      "kickoffGermany": "2026-07-11T23:00:00+02:00",
      "venue": "Miami Stadium",
      "slots": [
        "W91",
        "W92"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Achtelfinal-Siegern gefuellt."
    },
    {
      "id": "m100",
      "matchNumber": 100,
      "round": "quarter-final",
      "roundLabel": "Viertelfinale",
      "kickoffGermany": "2026-07-12T03:00:00+02:00",
      "venue": "Kansas City Stadium",
      "slots": [
        "W95",
        "W96"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Achtelfinal-Siegern gefuellt."
    },
    {
      "id": "m101",
      "matchNumber": 101,
      "round": "semi-final",
      "roundLabel": "Halbfinale",
      "kickoffGermany": "2026-07-14T21:00:00+02:00",
      "venue": "Dallas Stadium",
      "slots": [
        "W97",
        "W98"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Viertelfinal-Siegern gefuellt."
    },
    {
      "id": "m102",
      "matchNumber": 102,
      "round": "semi-final",
      "roundLabel": "Halbfinale",
      "kickoffGermany": "2026-07-15T21:00:00+02:00",
      "venue": "Atlanta Stadium",
      "slots": [
        "W99",
        "W100"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Viertelfinal-Siegern gefuellt."
    },
    {
      "id": "m103",
      "matchNumber": 103,
      "round": "third-place",
      "roundLabel": "Spiel um Platz 3",
      "kickoffGermany": "2026-07-18T23:00:00+02:00",
      "venue": "Miami Stadium",
      "slots": [
        "L101",
        "L102"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Bracket-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Halbfinal-Verlierern gefuellt."
    },
    {
      "id": "m104",
      "matchNumber": 104,
      "round": "final",
      "roundLabel": "Finale",
      "kickoffGermany": "2026-07-19T21:00:00+02:00",
      "venue": "New York New Jersey Stadium",
      "slots": [
        "W101",
        "W102"
      ],
      "sourceLevel": "mixed",
      "fixtureVerified": true,
      "sourceNote": "Final-Platzhalter aus aktuellen Fixture-Listen; Slots werden aus Halbfinal-Siegern gefuellt."
    }
  ],
  "results": {
    "mode": "preTournament",
    "sourceLevel": "model",
    "activeSource": "sportmonks",
    "sourceLabel": "Sportmonks",
    "sourceNote": "Keine echten Ergebnisse von Sportmonks; Tabellenansicht nutzt weiter Modellprojektion.",
    "generatedAt": "2026-06-08T14:40:12.545Z",
    "pollMinutes": 5,
    "syncError": null,
    "summary": {
      "providerMatches": 104,
      "synced": 0,
      "final": 0,
      "live": 0,
      "overrides": 0
    },
    "matches": []
  },
  "surpriseTeams": [
    {
      "code": "MAR",
      "team": "Marokko",
      "flag": "🇲🇦",
      "score": 86,
      "reason": "Kompaktheit, Pressingfallen, Konter",
      "spark": [
        42,
        58,
        66,
        73,
        78,
        82,
        86
      ]
    },
    {
      "code": "JPN",
      "team": "Japan",
      "flag": "🇯🇵",
      "score": 84,
      "reason": "Pressingdisziplin, Dynamik, kollektive Anpassung",
      "spark": [
        42,
        58,
        66,
        73,
        78,
        80,
        84
      ]
    },
    {
      "code": "NOR",
      "team": "Norwegen",
      "flag": "🇳🇴",
      "score": 82,
      "reason": "Vertikalität, Zielspieler, Kreativzentrum",
      "spark": [
        42,
        58,
        66,
        73,
        78,
        78,
        82
      ]
    },
    {
      "code": "TUR",
      "team": "Türkei",
      "flag": "🇹🇷",
      "score": 79,
      "reason": "Tempo, Mut im Zentrum, junge Kreativität",
      "spark": [
        42,
        58,
        66,
        73,
        78,
        75,
        79
      ]
    }
  ],
  "sources": [
    {
      "grade": "A",
      "title": "FIFA Official",
      "text": "Turnierformat, Spielplan, Teams, Stadien, Ergebnisstatus.",
      "quality": 98
    },
    {
      "grade": "A",
      "title": "SportMonks",
      "text": "Primaere WM-Datenquelle fuer Fixtures, Teams, Status, Scores, Predictions, Lineups und verfuegbare Advanced-Felder.",
      "quality": 93
    },
    {
      "grade": "A",
      "title": "Taktikautoren und Coaches",
      "text": "Spielverlagerung, Coaches' Voice, gute Beat-Reporter mit belegten Beobachtungen.",
      "quality": 90
    },
    {
      "grade": "B",
      "title": "Seriöse Ex-Profis",
      "text": "Nützlich, wenn Rollen, Drucksituationen oder Kabinenlogik erklärt werden.",
      "quality": 72
    },
    {
      "grade": "C",
      "title": "TV-Talk und Narrative",
      "text": "Nur als Stimmungsbild. Keine Match-Empfehlung ohne Daten- oder Taktikbezug.",
      "quality": 34
    }
  ]
};
