import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LandingComponent } from "./landing/landing.component";
import { PlantFormComponent } from "./registration/plant-form/plant-form.component";
import { ConsumerFormComponent } from "./registration/consumer-form/consumer-form.component";
import { ProductionPredictionComponent } from "./registration/production-prediction/production-prediction.component";
import { ConsumptionPredictionComponent } from "./registration/consumption-prediction/consumption-prediction.component";
import {ConsumerDashboardComponent} from "./dashboard/consumer-dashboard/consumer-dashboard.component";
import {PlantDashboardComponent} from "./dashboard/plant-dashboard/plant-dashboard.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent, pathMatch: 'full' },
  { path: 'register/plant', component: PlantFormComponent, pathMatch: 'full' },
  { path: 'register/plant/review', component: ProductionPredictionComponent, pathMatch: 'full' },
  { path: 'register/consumer', component: ConsumerFormComponent, pathMatch: 'full' },
  { path: 'register/consumer/review', component: ConsumptionPredictionComponent, pathMatch: 'full' },
  { path: 'dashboard/plant', component: PlantDashboardComponent, pathMatch: 'full' },
  { path: 'dashboard/consumer', component: ConsumerDashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }