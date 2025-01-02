import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AgentComponent } from './components/agent/agent.component';
import { ClientComponent } from './components/client/client.component';


export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'login', component: LoginComponent},
    { path: 'agent', component: AgentComponent },
    { path: 'client', component: ClientComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
