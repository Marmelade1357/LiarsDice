# Liar's Dice – Online

Das Würfel-Bluffspiel aus **Fluch der Karibik – Die Truhe des Todes** zum Spielen mit Freunden im Browser – jede:r auf dem eigenen Handy/Tablet/PC. Gleiche Bauweise wie Poker, Uno, Monopoly & Co.: Räume mit 4-stelligem Code, Host, Bots, Wiederverbindung, alles im Speicher.

## Funktionen

- **Ich-Perspektive in 3D** (Three.js): Du sitzt selbst am Tisch auf einer einsamen Pirateninsel – Palmen (eine mit Hängematte), Fackeln, Lagerfeuer, Piratenflagge, Kanone, Schatztruhen mit Goldhaufen, Anker, Ruderboot, Papagei, Krabbe, Möwen, Meer mit Wellen, Sonnenuntergang und Schiffe am Horizont (eins segelt langsam vorbei).
- **Der Tisch wächst mit der Crew**: 2–8 Spieler, Tischgröße und Anzahl der Plätze passen sich automatisch an.
- **Enten in Piratenkostümen** (Mantel, Gürtel, Dreispitz mit Totenkopf oder Kopftuch, manchmal Augenklappe) sitzen am Tisch, halten ihren Becher mit dem Flügel, drehen den Kopf zur Person, die gerade dran ist, blinzeln, quaken beim Bieten (jede Ente in eigener Tonlage), schlagen bei „Lügner!“ mit den Flügeln und hauen auf den Tisch. Wer ausscheidet, lässt Kopf und Flügel hängen; der Sieger hüpft jubelnd im Goldregen. Über den Köpfen steht nur der Name.
- **Becher schütteln & umdrehen**: Zu Beginn jeder Runde nehmen alle ihren Becher, schütteln ihn und knallen ihn umgedreht auf den Tisch.
- **Aufdecken zum Mitzählen**: Alle kippen ihre Becher um, dann springen die passenden Würfel reihum hoch und über dem Tisch wird mitgezählt („1 … 2 … 3 …“). Danach groß „Gelogen!“ oder „Stimmt!“, und der verlorene Würfel fliegt in hohem Bogen aufs Meer. Die Würfelzahlen in der Crew-Liste ändern sich erst danach, damit nichts vorher verraten wird.
- **Schnell bieten**: Für jede Augenzahl steht unten das kleinste erlaubte Gebot – ein Tipp bietet es sofort („+1“ und „gleich viele“ sind markiert). Bei der Eröffnung werden passende Mengen aus den eigenen Würfeln vorgeschlagen. Für höhere Gebote gibt es „✎ Anderes Gebot“.
- **Zug-Timer** (15/30/60 s oder aus, in der Lobby einstellbar): Der Rahmen um den Namen und der Ring um den Becher leeren sich, dazu eine Leiste an der Steuerung. Wenn du dran bist, leuchtet der Bildschirmrand auf, in den letzten 8 Sekunden pulsiert er rot. Läuft die Zeit ab, entscheidet ein Bot.
- **Kamera**: etwas höher und weiter hinten, breiteres Sichtfeld (die Nachbarn sind mit im Bild) und sie dreht sich sanft zur Ente, die gerade bietet – außer man schaut sich selbst um. Auf dem Handy im Hochformat steiler von oben.
- **Tageszeit**: Mit jedem verlorenen Würfel geht die Sonne weiter unter; in der Schlussrunde ist Nacht mit Sternen, Mond und hell leuchtenden Fackeln.
- **Unter den Becher schauen**: Knopf, Leertaste oder Klick auf den eigenen Becher – du hebst den Becher nur leicht an, so dass *du* die Würfel siehst. Alle anderen sehen live, dass du nachschaust (der Becher kippt an deinem Platz an, die Figur senkt den Kopf).
- **Umsehen**: mit Maus/Finger ziehen; die Blickrichtung wird an die anderen übertragen (deine Figur dreht den Kopf mit).
- **Regeln einstellbar**: 3–6 Würfel pro Person, Einsen als Joker (Standard), „Genau!“ (optional).
- **Bots** bieten und bluffen auf Basis von Wahrscheinlichkeiten; getrennte Spieler werden vertreten, Host-Übergabe, „Überspringen“ (nur ohne Zeitlimit).
- Synthetisierte Sounds (Würfelklappern, Becher-Knall, Meeresrauschen), abschaltbar.
- Ohne WebGL gibt es eine einfache 2D-Übersicht als Ausweichlösung.

## Regeln (Kurzfassung)

Reihum wird geboten, wie viele Würfel einer Augenzahl insgesamt unter allen Bechern liegen. Wer dran ist, bietet höher (mehr Würfel oder gleiche Anzahl mit höherer Augenzahl) oder ruft „Lügner!“. Dann wird aufgedeckt: Stimmt das Gebot, verliert die rufende Person einen Würfel, sonst die bietende. Wer keine Würfel mehr hat, scheidet aus – die letzte Person mit Würfeln gewinnt.

## Dateien

| Datei | Inhalt |
|-------|--------|
| `src/engine.js` | Regeln (reine Spiellogik, vom Server und den Tests genutzt) |
| `src/bots.js` | Bot-KI (Binomial-Wahrscheinlichkeiten + etwas Bluff) |
| `server.js` | Express + Socket.IO, Räume, Lobby, Wiederverbindung, Gucken/Blickrichtung |
| `public/` | Oberfläche (Lobby, Steuerleiste, Crew-Übersicht), PWA-Icons |
| `src3d/table3d.src.js` | 3D-Szene (Quelltext) → gebündelt nach `public/table3d.js` |

## Entwicklung

```bash
npm install
npm start          # http://localhost:3000
npm test           # Regeln, 126 Bot-Partien mit Invarianten-Check, Socket-Ablauf, Überspringen/Host, Zug-Timer
npm run build3d    # 3D-Bundle neu bauen (nur nötig, wenn src3d/ geändert wurde)
```

`public/table3d.js` ist bewusst eingecheckt (wie bei Uno und Monopoly), damit der Docker-Build auf dem Pi kein Three.js/esbuild braucht.

## Deployment (Raspberry Pi, analog zu den anderen Spielen)

```bash
./deploy.sh
```

Der Container lauscht intern auf Port 3000 und wird laut `docker-compose.yml` nur auf `127.0.0.1:8102` veröffentlicht. Über den **Spielehub** ist das Spiel unter `games.oualid.de/liarsdice/` erreichbar – `public/client.js` erkennt das `/liarsdice`-Präfix selbstständig.
