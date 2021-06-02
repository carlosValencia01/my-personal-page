import { Routes } from '@angular/router';

import { TestTutorialComponent } from './test-tutorial/test-tutorial.component'
import { RenderTutorialComponent } from './render-tutorial/render-tutorial.component';


export const TUTORIALS_ROUTES: Routes = [
      {path:'test', component: TestTutorialComponent},
      {path:'home', component: RenderTutorialComponent}
];
