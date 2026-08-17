# Mitwirken

## Einmalige Einrichtung

1. Installiere die in VS Code empfohlenen Erweiterungen.
2. Installiere [`prek`](https://prek.j178.dev/installation/). Unter Windows geht das beispielsweise mit:

   ```powershell
   winget install --id j178.Prek
   ```

3. Aktiviere den Git-Hook in diesem Klon:

   ```powershell
   prek install
   ```

## Formatierung vor Commits

Vor jedem Commit formatiert Prettier die vorgemerkten HTML-, CSS-, JavaScript-, JSON-, Markdown- und YAML-Dateien. Die verwendete Prettier-Version ist in [`prek.toml`](prek.toml) festgelegt; eine separate Node.js-Installation ist nicht nötig.

Ändert Prettier eine Datei, wird der Commit abgebrochen. Prüfe die Formatierung, merke die Datei erneut vor und wiederhole den Commit:

```powershell
git add <datei>
git commit
```

Die Hooks lassen sich auch manuell ausführen:

```powershell
prek run             # vorgemerkte Dateien
prek run --all-files # gesamtes Projekt
```

## Commit-Nachrichten

Der `commit-msg`-Hook prüft Commit-Nachrichten mit gitlint. Der Titel beginnt mit einem Grossbuchstaben, ist 5 bis 72 Zeichen lang und endet nicht mit Satzzeichen. Ein Body ist optional; seine Zeilen dürfen höchstens 72 Zeichen lang sein.

```text
Add contact form
Correct logo path
Update setup instructions
```

## Pull Requests

Der PR-Body beschreibt den Beitrag und dessen Nutzen, nicht die internen Arbeitsschritte oder lokale Überprüfungen. Er soll wie ein menschlich verfasster Beitrag wirken und folgende Regeln erfüllen:

- Beginne unmittelbar mit einer erklärenden Einleitung ohne `Summary`-Überschrift.
- Formuliere die Einleitung in der dritten Person, beispielsweise `Fixes` statt `Fix`.
- Erläutere die Bestandteile des Beitrags anschliessend als Aufzählung in einem eigenen Abschnitt mit Überschrift.
- Verwende bei relevanten Verweisen einen optionalen Abschnitt `Siehe auch` für verwandte Beiträge, Commits, Pull Requests oder externe Quellen.
- Schreibe jeden Fliesstextabsatz in eine physische Zeile und verwende keine Formatierungsumbrüche. Leerzeilen zwischen Absätzen sowie eigene Zeilen für Überschriften, Listen, Zitate und Codeblöcke bleiben erlaubt.
- Verzichte auf Berichte über interne Arbeitsschritte, lokale Codeprüfungen oder die verwendeten Werkzeuge.
- Weise den Ersteller des Pull Requests mit `gh` als Assignee zu.
- Setze mit `gh` die passenden Labels `bug`, `enhancement`, `documentation` oder `refactoring`, sofern sie auf den Beitrag zutreffen.
- Führe Pull Requests bevorzugt mit `Rebase and merge` zusammen, damit die Commit-Historie linear bleibt.
