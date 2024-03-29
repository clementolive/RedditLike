# RedditLike

This project features : 
## Architecture:
- Top-down architecture (Home -> Categories -> Threads -> Comments)
- Bubble Up Events (child comment sends vote event to Thread, so Thread counts vote activity)
- Recursive component (Comment can get comments)
- Custom pipe with parameters, chaining (multiple pipes), and optimization (pure pipe)
- Custom directive with parameters and reacting to events (@HostListener) to highlight a color 
  
## Technologies:
- Bootstrap, Angular Material, ESLint, Picsum API (images) 



  



## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
