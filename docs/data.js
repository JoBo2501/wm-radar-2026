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
        "id": "opta",
        "name": "Opta / Stats Perform",
        "layer": "Live- und Kontextdaten",
        "quality": 96,
        "integration": "Premium API spaeter",
        "bestFor": "xG, Predictions, Live-Events, historische Trends, Broadcast-taugliche Datenstories.",
        "watchFor": "Schnelle Einordnung: Ist ein Ergebnis verdient, kippt ein Momentum, ist ein Team wirklich dominant?",
        "blindSpot": "Sehr stark fuer Ereignisse und Modelle, aber ohne eigenes Video nicht automatisch eine komplette Taktikerzaehlung.",
        "signals": [
          "xG",
          "Eventdaten",
          "Predictions",
          "Live-Kontext"
        ],
        "url": "https://www.statsperform.com/opta/"
      },
      {
        "id": "statsbomb",
        "name": "Hudl StatsBomb 360",
        "layer": "Taktische Eventdaten",
        "quality": 97,
        "integration": "Premium Datenvertrag spaeter",
        "bestFor": "360-Kontext, Line-breaking passes, Ballannahmen im Raum, Drucknaehe und datenbasierte Teamtaktik.",
        "watchFor": "Warum ein Pass, ein Empfang oder ein Pressingausloeser wertvoll war, obwohl er in normalen Statistiken unsichtbar bleibt.",
        "blindSpot": "Extrem wertvoll, aber fuer Live-Nutzung abhaengig von Coverage, Lizenz und Verfuegbarkeit.",
        "signals": [
          "360",
          "Raum",
          "Druck",
          "OBV"
        ],
        "url": "https://statsbomb.com/what-we-do/soccer-data/360-2/"
      },
      {
        "id": "skillcorner",
        "name": "SkillCorner",
        "layer": "Tracking und Off-Ball",
        "quality": 95,
        "integration": "Tracking-Schicht spaeter",
        "bestFor": "Broadcast-basiertes Tracking, Off-Ball-Runs, defensive Strukturen, physische Profile und Game Intelligence.",
        "watchFor": "Welche Laeufe oeffnen Raeume, welche Kette kippt, wer presst nur optisch und wer nimmt wirklich Optionen weg?",
        "blindSpot": "Tracking erklaert Bewegung, braucht aber Event- und Videoabgleich fuer die komplette Spielstory.",
        "signals": [
          "Tracking",
          "Off-Ball",
          "Physical",
          "Game Intelligence"
        ],
        "url": "https://skillcorner.com/sports/football"
      },
      {
        "id": "wyscout",
        "name": "Hudl Wyscout",
        "layer": "Video, Scouting und Clips",
        "quality": 92,
        "integration": "Video- und Clip-Workflow spaeter",
        "bestFor": "Spieler-, Team- und Gegneranalyse mit Video, getaggten Aktionen, Scouting-Reports und Vergleichsmaterial.",
        "watchFor": "Schnell pruefen, ob ein Datenmuster im Video wirklich sichtbar ist.",
        "blindSpot": "Video ist stark, aber ohne Modellierung kann es selektiv und zeitintensiv werden.",
        "signals": [
          "Video",
          "Scouting",
          "Clips",
          "Reports"
        ],
        "url": "https://wyscout.it/"
      },
      {
        "id": "scisports",
        "name": "SciSports",
        "layer": "AI Scouting und Match Analysis",
        "quality": 86,
        "integration": "AI-Provider optional",
        "bestFor": "KI-gestuetzte Spieler-, Team- und Matchanalyse, besonders wenn Datenquellen kombiniert werden muessen.",
        "watchFor": "Zweiter Blick auf Rollenprofile, Talentwert und Muster, die ueber ein einzelnes Spiel hinausgehen.",
        "blindSpot": "Provider-Modelle muessen gegen Rohdaten und Video kalibriert werden.",
        "signals": [
          "AI",
          "Scouting",
          "Match Analysis",
          "Tracking"
        ],
        "url": "https://www.scisports.com/"
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
        "id": "opta-analyst",
        "name": "Opta Analyst",
        "type": "Datenstory und Predictions",
        "trust": 88,
        "bestFor": "Zahlenbasierte Vorschauen, Trends, historische Vergleiche und Wahrscheinlichkeiten.",
        "useWhen": "Wenn die App schnell eine datenbasierte Storyline braucht.",
        "downgradeWhen": "Wenn eine taktische Tiefenerklaerung ohne Video/Struktur gebraucht wird.",
        "url": "https://theanalyst.com/"
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
    "generatedAt": "2026-06-07T10:33:33.534Z",
    "status": "waiting",
    "summary": "Noch keine echten Resultate synchronisiert; Projektionsmodus bleibt aktiv.",
    "source": {
      "activeSource": "football-data",
      "sourceLabel": "football-data.org",
      "generatedAt": "2026-06-07T10:33:33.398Z",
      "pollMinutes": 10
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
        "providerTarget": "Opta / StatsBomb",
        "meaning": "Vergleicht Ergebnis und Chancenqualität, um Scoreboard-Rauschen von echter Dominanz zu trennen."
      },
      {
        "id": "ppda",
        "label": "PPDA / Pressingdruck",
        "providerTarget": "Opta / Wyscout",
        "meaning": "Misst, wie hoch und wie konsequent ein Team ohne Ball Zugriff erzeugt."
      },
      {
        "id": "fieldTilt",
        "label": "Field Tilt / Territory",
        "providerTarget": "Opta / StatsBomb",
        "meaning": "Zeigt, wer das Spiel in gefährlichen Zonen kontrolliert statt nur Ballbesitz zu sammeln."
      },
      {
        "id": "lineBreaking",
        "label": "Line-Breaking / 360",
        "providerTarget": "StatsBomb 360 / SkillCorner",
        "meaning": "Erklärt Pässe, Annahmen und Läufe, die Linien brechen oder Druck überspielen."
      },
      {
        "id": "setPieceThreat",
        "label": "Set-Piece Threat",
        "providerTarget": "Opta / Wyscout / TacticAI-Referenz",
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
    "activeSource": "football-data",
    "sourceLabel": "football-data.org",
    "sourceNote": "Keine echten Ergebnisse von football-data.org; Tabellenansicht nutzt weiter Modellprojektion.",
    "generatedAt": "2026-06-07T10:33:33.398Z",
    "pollMinutes": 10,
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
      "title": "StatsBomb, Opta, SkillCorner",
      "text": "Eventdaten, 360-Kontext, Tracking, xG, OBV, Pressing- und Off-Ball-Signale.",
      "quality": 96
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
