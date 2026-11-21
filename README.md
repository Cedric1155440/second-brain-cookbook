# 🧠 Second Brain Cookbook

Gib ein, was du zuhause hast, und das Kochbuch schlägt dir passende Rezepte vor.

## Funktionen

- **156 Rezepte aus 33 Küchen**, jeweils mit Schwierigkeit (leicht / mittel / schwer), Zeit und Zubereitung
- **Vorrat eintragen** per Text oder durch Antippen; die App zeigt, was du sofort kochen kannst und wo nur 1–2 Zutaten fehlen
- **✨ KI-Suche:** Findet das Kochbuch nichts Passendes, sucht Claude Rezepte mit genau deinen Zutaten
- **📷 Foto-Suche:** Foto vom Kühlschrank oder Einkauf machen, die KI erkennt die Zutaten
- **📸 Beispielbilder:** zu fast jedem Rezept ein Foto von Wikipedia, wie das Gericht ungefähr aussieht (frei lizenziert, mit Link zur Quelle)
- **🌐 Internet-Suche:** sucht zusätzlich live in der offenen Rezept-Datenbank [TheMealDB](https://www.themealdb.com/) (ohne Schlüssel, Rezepte auf Englisch)
- **Eigene Rezepte** anlegen und KI-Rezepte speichern
- **7 Sprachen:** Deutsch, English, Français, Español, Italiano, Português, Türkçe
- **Darstellung:** System, Hell oder Dunkel
- **Web-App fürs iPhone:** funktioniert offline und lässt sich zum Home-Bildschirm hinzufügen

## Benutzen

Die App ist eine einzelne statische Seite ohne Build-Schritt. Zum lokalen Testen:

```bash
npx http-server . -p 8080
```

Dann `http://localhost:8080` öffnen. Für die Installation auf dem iPhone muss die Seite über HTTPS erreichbar sein (z. B. GitHub Pages oder Netlify): in Safari öffnen → Teilen → „Zum Home-Bildschirm“.

## KI-Funktionen

KI-Suche und Foto-Suche nutzen die Claude API. Dafür trägst du in den Einstellungen einen eigenen API-Schlüssel ein (erhältlich auf [console.anthropic.com](https://console.anthropic.com)). Der Schlüssel wird nur im Browser des jeweiligen Geräts gespeichert und nie in diesem Repository. Jede Anfrage kostet ein paar Cent.

## Internet-Suche (TheMealDB)

Rezeptdaten und Fotos der Internet-Suche stammen von [TheMealDB](https://www.themealdb.com/). Die App nutzt den kostenlosen Testschlüssel `1`, der laut den [Nutzungsbedingungen](https://www.themealdb.com/terms_of_use.php) nur für Entwicklung und Lernzwecke gedacht ist. Dieses Projekt ist privat und nicht für eine öffentliche Veröffentlichung gedacht. Wer die App öffentlich anbieten will, braucht einen Supporter-Schlüssel von TheMealDB und trägt ihn in `index.html` bei `MEALDB` ein.

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | App, Rezepte, Zutaten und deutsche Texte |
| `lang/*.js` | Übersetzungen (Oberfläche, Zutaten, Rezepte) |
| `sw.js` | Offline-Modus (bei Änderungen die Cache-Version erhöhen) |
| `manifest.webmanifest`, `icon-*.png` | Web-App-Einstellungen und Symbole |
