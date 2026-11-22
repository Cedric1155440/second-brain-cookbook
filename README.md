# 🧠 Second Brain Cookbook

Gib ein, was du zuhause hast, und das Kochbuch schlägt dir passende Rezepte vor.

## Funktionen

- **306 Rezepte aus 46 Küchen** (davon 50 traditionelle Gerichte wie Blintschiki, Pelmeni oder Chatschapuri), jeweils mit Schwierigkeit (leicht / mittel / schwer), Zeit und Zubereitung
- **🔎 Rezeptsuche:** nach Name, Land, Kategorie oder Zutat suchen (auch ohne Umlaute), dazu passende Treffer aus dem Internet
- **Vorrat eintragen** per Text oder durch Antippen; die App zeigt, was du sofort kochen kannst und wo nur 1–2 Zutaten fehlen
- **✨ KI-Suche:** Findet das Kochbuch nichts Passendes, sucht eine KI Rezepte mit genau deinen Zutaten – wahlweise Claude, ChatGPT, DeepSeek, Gemini oder OpenRouter
- **📷 Foto-Suche:** Foto vom Kühlschrank oder Einkauf machen, die KI erkennt die Zutaten
- **📸 Beispielbilder:** zu fast jedem Rezept (298 von 306) ein Foto von Wikipedia, wie das Gericht ungefähr aussieht (frei lizenziert, mit Link zur Quelle)
- **🌐 Internet-Suche:** sucht zusätzlich live in der offenen Rezept-Datenbank [TheMealDB](https://www.themealdb.com/) (ohne Schlüssel, Rezepte auf Englisch)
- **Eigene Rezepte** anlegen und KI-Rezepte speichern
- **8 Sprachen:** Deutsch, English, Русский, Français, Español, Italiano, Português, Türkçe
- **Darstellung:** System, Hell oder Dunkel
- **Web-App fürs iPhone:** funktioniert offline und lässt sich zum Home-Bildschirm hinzufügen

## Benutzen

Die App ist eine einzelne statische Seite ohne Build-Schritt. Zum lokalen Testen:

```bash
npx http-server . -p 8080
```

Dann `http://localhost:8080` öffnen. Für die Installation auf dem iPhone muss die Seite über HTTPS erreichbar sein (z. B. GitHub Pages oder Netlify): in Safari öffnen → Teilen → „Zum Home-Bildschirm“.

## KI-Funktionen

KI-Suche und Foto-Suche funktionieren mit einem eigenen API-Schlüssel eines dieser Anbieter, einzutragen unter ⚙️ Einstellungen → KI-Suche:

| Anbieter | Schlüssel | Foto-Suche | Hinweis |
|---|---|---|---|
| Claude | [console.anthropic.com](https://console.anthropic.com/settings/keys) | ✓ | Modell: Claude Opus 5.5 |
| ChatGPT (OpenAI) | [platform.openai.com](https://platform.openai.com/api-keys) | ✓ | OpenAI blockiert Anfragen direkt aus dem Browser teilweise – im Zweifel OpenRouter nehmen |
| DeepSeek | [platform.deepseek.com](https://platform.deepseek.com/api_keys) | – | kann keine Fotos lesen |
| Gemini | [aistudio.google.com](https://aistudio.google.com/apikey) | ✓ | |
| OpenRouter | [openrouter.ai](https://openrouter.ai/settings/keys) | ✓ | ein Schlüssel für viele Modelle (auch GPT), teils kostenlose Modelle |

Bei allen außer Claude lässt sich das Modell auswählen. Die Schlüssel werden nur im Browser des jeweiligen Geräts gespeichert und nie in diesem Repository. Jede Anfrage kostet meist nur ein paar Cent beim jeweiligen Anbieter.

## Internet-Suche (TheMealDB)

Rezeptdaten und Fotos der Internet-Suche stammen von [TheMealDB](https://www.themealdb.com/). Die App nutzt den kostenlosen Testschlüssel `1`, der laut den [Nutzungsbedingungen](https://www.themealdb.com/terms_of_use.php) nur für Entwicklung und Lernzwecke gedacht ist. Für eine öffentlich angebotene App verlangt TheMealDB einen Supporter-Schlüssel; dieser wird in `index.html` bei `MEALDB` eingetragen.

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | App, Rezepte, Zutaten und deutsche Texte |
| `lang/*.js` | Übersetzungen (Oberfläche, Zutaten, Rezepte) |
| `sw.js` | Offline-Modus (bei Änderungen die Cache-Version erhöhen) |
| `manifest.webmanifest`, `icon-*.png` | Web-App-Einstellungen und Symbole |
