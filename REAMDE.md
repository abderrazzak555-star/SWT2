# SWT2 Projekt

Diese Webseite kann folgendes:
- Einen Crawler steuern, der im Hintergrund GitHub-Projekte analysiert und das Ergebnis in die Datenbank speichert
- Die Ergebnisse aus der Datenbank ansprechend darstellen

# Projekt starten
## Datenbank
Die Datenbank ist so konfiguriert, eine mySQL Datenbank zu verwenden. Diese ist folgendermaßen zu konfigurieren:
- DBMS läuft auf `localhost:3306`
- Es existiert eine Datenbank namens `swt2`
- Es existiert ein Nutzer `django@localhost` mit dem Passwort `WwidPGitHuba.`

Um eine andere Datenbank zu verwenden, ändere den Wert von DATABASES in SWT2/settings.py 

## Server Starten
Rufe von der CMD aus auf:
`Scripts\activate.bat`
`python manage.py runserver`


# Änderungen an den Models
Um Änderungen an den Models in die Datenbankstruktur zu übernehmen, müssen zwei Befehle ausgeführt werden
1. `python manage.py makemigrations app-name` Erzeugt die benötigten SQL-Scripte für die Angegebene App
2. `python manage.py migrate` wendet diese dann auf die Datenbank an.