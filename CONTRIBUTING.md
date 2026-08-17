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

Commit-Nachrichten folgen dem [Conventional-Commits-Schema](https://www.conventionalcommits.org/). Der `commit-msg`-Hook prüft sie automatisch.

```text
feat: add contact form
fix: correct logo path
docs: update setup instructions
```

Das Format lautet `<typ>: <kurze beschreibung>`. Übliche Typen sind `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore` und `revert`.
