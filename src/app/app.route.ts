import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {LoginComponent } from './login/login.component'


const routes: Routes = [

    
        { path: 'login', component: LoginComponent },
        { path: '', redirectTo: "login", pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})

export class AppRouting { }