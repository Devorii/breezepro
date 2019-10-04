import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< .merge_file_a13332
import { AppModule } from './app/app.module';
=======
import { AppModule } from './components/app/app.module';
>>>>>>> .merge_file_a14164
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
