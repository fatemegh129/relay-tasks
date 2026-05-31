# Sicherheitsrichtlinie

## Zweck
Relay ist eine Plattform für Teamzusammenarbeit und Aufgabenverwaltung.
Diese Richtlinie definiert, wie wir Benutzerdaten, Projektinformationen
und Systemressourcen schützen.

## Geschützte Daten
Die folgenden Daten müssen jederzeit geschützt werden:
- Benutzerkontoinformationen (Benutzername, E-Mail, Passwort-Hash)
- Authentifizierungsdaten und Session-Tokens
- Projektdaten, Aufgaben und Zuweisungen
- API-Schlüssel und Umgebungsvariablen
- Teambezogene Daten und interne Konfigurationen

## Gespeicherte Daten
Die folgenden Daten werden in unserer Datenbank gespeichert:
- Benutzernamen und gehashte Passwörter (niemals im Klartext)
- Session-Tokens (kurzlebig, serverseitig validiert)
- Projekt- und Aufgabeninhalte der Benutzer
- Teammitgliedschaft und Rolleninformationen

## Sicherheitsregeln
- Niemals Passwörter, API-Schlüssel oder Secrets in Git committen
- Alle sensiblen Werte nur in Umgebungsvariablen (.env) speichern
- Immer Pull Requests verwenden — niemals direkt auf main pushen
- Externe Bibliotheken vor der Nutzung prüfen
- Abhängigkeiten aktuell halten (pip audit / npm audit)

## Authentifizierung
- Passwörter müssen vor der Speicherung mit bcrypt gehasht werden
- JWT-Tokens müssen eine Ablaufzeit haben
- Authentifizierungstoken dürfen niemals öffentlich zugänglich sein
- Der Zugriff auf Ressourcen muss auf autorisierte Benutzer beschränkt sein

## Eingabevalidierung
Alle Benutzereingaben müssen im Backend validiert werden, um folgendes zu verhindern:
- SQL-Injection
- Cross-Site Scripting (XSS)
- Schädliche oder fehlerhafte Eingabedaten

## Sicherheitslücken melden
Wenn eine Sicherheitslücke entdeckt wird:
1. Keinen öffentlichen GitHub-Issue erstellen
2. Direkt an @NimaB6 melden
3. Auf Bestätigung warten, bevor etwas veröffentlicht wird

## Verantwortlichkeit
Bei sicherheitsbezogenen Fragen oder Bedenken bitte
@NimaB6 kontaktieren.
