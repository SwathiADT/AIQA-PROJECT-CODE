import { Routes } from "@angular/router";

import { ProjectComponent } from "../project/project.component";
import { TestplanComponent } from "../testplan/testplan.component";

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProjectComponent },
  {
      path: ':id',
      component: TestplanComponent
  }
];