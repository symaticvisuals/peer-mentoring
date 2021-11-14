# Get Started Angular

### Installing Angular CLI

```nginx
npm install -g @angular/cli
```

### Creating a New Project

```nginx
ng new project-name
```

### Running the Server

```nginx
cd project-name
npm run start
```

### Creating new Component

```nginx
ng generate component component-name
```

### Installing Bootstrap in Angular

```nginx
npm i bootstrap jquery
```

#### Configuring Bootstrap in angular.json

###### Replace the architect-build object in angular.json

```json
"options": {
            "outputPath": "dist/to-dolist",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.js",
              "./node_modules/bootstrap/dist/js/bootstrap.js"
            ]
          },
```

