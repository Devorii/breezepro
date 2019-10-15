import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {LoginComponent } from '../login/login.component';
import{PagenotfoundComponent} from  "../../Modules/innerModule/inner/innerComponents/pagenotfound/pagenotfound.component"

const routes: Routes = [

    
        { path: 'login', component: LoginComponent },
        { path: '', component: LoginComponent },
        {path : 'dashboard', loadChildren : '../innerModule/inner/inner.module#InnerModule'},
        { path: '', redirectTo: "login", pathMatch: 'full' },
        // { path: 'pagenotfound', component: PagenotfoundComponent },
        // { path: '**', redirectTo: "pagenotfound", pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})

export class AppRouting { }