# WSA RP Bot – Legal Website

Statische GitHub-Pages-Website ohne externe Fonts, Analyse- oder Marketingdienste.

## Vor Veröffentlichung zwingend
1. Alle `[PLATZHALTER]` in HTML-Dateien ersetzen.
2. Verantwortlichen, ladungsfähige Anschrift und Kontaktadresse prüfen.
3. Supabase-Projektregion, Nitrado-, Discord-, GitHub- und Supabase-Verträge/Datenschutzhinweise prüfen.
4. Tatsächliche Tabellen und Fristen an `supabase/schema.sql` anpassen.
5. Link zu Datenschutz und Nutzungsbedingungen im Bot-Verknüpfungsdialog anzeigen.
6. Version der Bedingungen serverseitig speichern.

## GitHub Pages
Repository erstellen, Inhalt in den Standard-Branch hochladen und unter Settings → Pages den Branch als Quelle aktivieren. Optional eine eigene Domain über `CNAME` konfigurieren.

## Bot-Verknüpfung
Empfohlener Text:

> Mit „Verknüpfen“ bestätigst du die Nutzungsbedingungen (Version 1.0 vom 30.07.2026). Die Datenschutzerklärung informiert dich darüber, wie deine Daten verarbeitet werden.

Buttons/Links:
- Nutzungsbedingungen öffnen
- Datenschutzerklärung öffnen
- Verknüpfen & zustimmen
- Abbrechen

## Keine Rechtsberatung
Die Inhalte sind eine sorgfältig ausgearbeitete Vorlage, ersetzen aber keine individuelle Rechtsberatung. Betreiberangaben, tatsächliche Datenflüsse und Verträge müssen vor Veröffentlichung geprüft werden.

## Design-Update: PKG Terminal
Die sichtbare Website wurde auf eine responsive CRT-/Terminal-Oberfläche im WSA-Stil umgebaut. Alle Effekte bestehen aus lokalem HTML/CSS/JavaScript; es werden keine externen Fonts, Tracker oder Bild-CDNs geladen.
