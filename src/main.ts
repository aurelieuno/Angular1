import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app2/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


/* Bootstraps the app, using the root component from the specified NgModule.
 The default platform that is used in Angular’s examples is the dynamic browser platform.
 Platform browser means that this application is going to be bootstrapped in a browser and
 will therefore have direct access to the DOM and other browser APIs.
 Dynamic means that your Angular templates are going to be compiled dynamically as part of the bootstrap process.

JIT - Compile TypeScript just in time for executing it.

Compiled in the browser.
Each file compiled separately.
No need to build after changing your code and before reloading the browser page.
Suitable for local development.
AOT - Compile TypeScript during build phase.

Compiled by the machine itself, via the command line (Faster).
All code compiled together, inlining HTML/CSS in the scripts.
No need to deploy the compiler (Half of Angular size).
More secure, original source not disclosed.
Suitable for production builds.*/