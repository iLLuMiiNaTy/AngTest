import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component/app.component';
import { config } from './app/app.component/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
