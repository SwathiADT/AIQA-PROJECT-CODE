import { Routes } from "@angular/router";

import { WorkspaceComponent } from "./workspace.component";
import { ProjectComponent } from "../project/project.component";


export const PRODUCT_ROUTES: Routes = [
  { path: '', component: WorkspaceComponent },
  {
      path: ':id',
      component: ProjectComponent
  }
];