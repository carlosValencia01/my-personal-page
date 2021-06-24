import { Routes } from '@angular/router';

import { RenderTutorialComponent } from './render-tutorial/render-tutorial.component';
import { TestTutorialComponent } from './test-tutorial/test-tutorial.component'
import { HowToApiComponent } from './how-to-api/how-to-api.component';


export const TUTORIALS_ROUTES: Routes = [
      {path:'test', component: TestTutorialComponent},
      {path:'home', component: RenderTutorialComponent},
      {path:'como-hacer-una-api', component: HowToApiComponent}
];
