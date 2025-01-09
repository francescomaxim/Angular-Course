import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskService } from './app/tasks/tasks.service';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
// bootstrapApplication(AppComponent, {
//   providers: [TaskService],
// }).catch((err) => console.error(err));