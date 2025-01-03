import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AgentComponent } from './components/agent/agent.component';
import { ClientComponent } from './components/client/client.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';  // Import the UnauthorizedComponent
import { AuthGuard } from './services/auth.guard';
import { AddAgentComponent } from './components/admin/add-agent/add-agent.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' }, 

    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
    {path: 'add-agent', component: AddAgentComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' }},
    { path: 'agent', component: AgentComponent, canActivate: [AuthGuard], data: { role: 'AGENT' } },
    { path: 'client', component: ClientComponent, canActivate: [AuthGuard], data: { role: 'CLIENT' } },
    { path: 'unauthorized', component: UnauthorizedComponent },
    // { path: '**', redirectTo: '/login' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
