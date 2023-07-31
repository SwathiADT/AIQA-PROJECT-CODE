import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { TestplanComponent } from './testplan/testplan.component';
import { LoginComponent } from './login/login.component';
import { TestcaseComponent } from './testcase/testcase.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateWorkspaceComponent } from './create-workspace/create-workspace.component';
import { ShowTestPlanComponent } from './show-test-plan/show-test-plan.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        WorkspaceComponent,
        AboutComponent,
        ProjectComponent,
        TestplanComponent,
        LoginComponent,
        TestcaseComponent,
        RegistrationComponent,
        CreateProjectComponent,
        CreateWorkspaceComponent,
        ShowTestPlanComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot([{ path: 'login', component: LoginComponent },
            { path: 'home', component: HomeComponent },
            { path: 'work_space', component: WorkspaceComponent },
            { path: 'project', component: ProjectComponent },
            { path: 'about', component: AboutComponent },
            { path: 'registration', component: RegistrationComponent },
            { path: 'testCase', component: TestcaseComponent },
            { path: 'createTestPlan/:id', component: TestplanComponent },
            { path: 'createWorkspace', component: CreateWorkspaceComponent },
            { path: 'createProject/:id', component: CreateProjectComponent },
            { path: 'project/:id', component: ProjectComponent },
            { path: 'testplan/:id', component: ShowTestPlanComponent }
        ])
    ]
})
export class AppModule { }
