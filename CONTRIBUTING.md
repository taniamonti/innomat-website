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

Der `commit-msg`-Hook prüft automatisch, dass die erste Zeile kurz und aussagekräftig ist. Sie darf höchstens 72 Zeichen lang sein und keine Leerzeichen am Anfang oder Ende enthalten.

```text
Add contact form
Correct logo path
Update setup instructions
```
