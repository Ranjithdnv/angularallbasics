import { Routes } from '@angular/router';
import { AccordianComponent } from './accordian/accordian.component';
import { AccordianParentComponent } from './accordian-parent/accordian-parent.component';
import { StarComponent } from './components/star/star.component';
import { StarparentComponent } from './components/starparent/starparent.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { BottomparentComponent } from './components/bottomparent/bottomparent.component';
import { LoaderComponent } from './components2/loader/loader.component';
import { LoaderparentComponent } from './components2/loaderparent/loaderparent.component';
import { RenderComponent } from './components2/render/render.component';
import { AuthoneGuardtest } from './gaurdalso/gaurd.service';
import { BehaviourComponent } from './components3/behaviour/behaviour.component';
import { BehaviourSubscribeComponent } from './components3/behaviour-subscribe/behaviour-subscribe.component';
import { DynamicFComponent } from './forms/dynamic-f/dynamic-f.component';
import { DFComponent } from './forms/df/df.component';

export const routes: Routes = [
  { path: 'accordian', component: AccordianComponent },
  { path: 'accordianparent', component: AccordianParentComponent },
  // {
  //   path: 'star',
  //   component: StarComponent,
  //   children: [{ path: 'star', component: StarComponent }],
  //   canDeactivate: [AuthoneGuardtest],
  // },
  { path: 'starparent', component: StarparentComponent },
  { path: 'bottomparent', component: BottomparentComponent },
  { path: 'bottom', component: BottomComponent },

  { path: 'loader', component: LoaderComponent },
  { path: 'behaviour', component: BehaviourComponent },
  { path: 'behaviourparent', component: BehaviourSubscribeComponent },
  { path: 'render', component: RenderComponent },
  { path: 'loaderparent', component: LoaderparentComponent },
  { path: 'dynamic', component: DynamicFComponent },
  { path: 'df', component: DFComponent },
];
