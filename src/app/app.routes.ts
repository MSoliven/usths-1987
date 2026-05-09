import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SectionDetailComponent } from './section-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'section/:id', component: SectionDetailComponent }
];
