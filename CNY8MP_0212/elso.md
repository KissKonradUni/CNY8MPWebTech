# Git parancsok

## Git clone
```
git clone <url>
```

> Lokális másolatot készít az url-en megadott repositoryból.

## Git státusz
```
git status
```

> Kiírja a git repository lokális másolatába történt, még nem rögzített fájlváltoztatásokat.

## Git add
```
git add .
git add "<útvonal>"
```

> Hozzáadja a repository követett fájlaihoz a megadott útvonalon található könyvtárat/fájlt. Amennyiben "." paraméterrel kerül meghívásra, minden a repository mappájába található fájlt hozzáad.

## Git commit
```
git commit -m "<üzenet>"
```

> Egy mentést készít a repository akkori állapotáról, és ellátja a megadott üzenettel.

## Git push
```
git push
```

> A remote állomáson frissíti a történt fájlváltoztatásokat.

## Git pull
```
git pull
```

> A remote állomáson történt változtatásokat elvégzi a lokális másolaton.