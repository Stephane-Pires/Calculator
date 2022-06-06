## Calculator Project

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### Stack :

-   NextJS, ChakraUI, React, Prettier, TrivagoSortImport
-   NextJS : Used "only" to start an "Typescript-App" with "Fast-Reloading" & "Routing"
-   React : Use as a Frontend Tool
-   ChakraUI : Used as a Component Library Toolbox (also handle the Theme)
-   Prettier : Because you can't work without it
-   TrivagoSortImport : Because i have been traumatised with "Import sort order" at AnalogWay

### Features :

-   Calculate an operation or a list of operations.
-   Handle click inside the client UI or on the Keyboard
-   History of operation
-   "Handle" Errors
-   "Light" & "Dark Mode" 🌓

### Improvement Zone :

-   Puppet Typescript, the typing is clearly anemic
-   History UI
-   Use LocalStorage for History UI

### Known bugs :

-   A reset of history could break the history
-   First pressed on EGAL/ENTER give "undefined"
-   FOCUS get the foregoing on ERROR in the SCREEN (unable to see the field in ERROR, while focusing IT)

### Future Features :

-   Languages (Japaneses, Chineses, Arabic, "Russian")
-   Handle the ability to copy-past ?
-   Add more buttons for complexe operation ?
-   Test the code (Component, Logic)
