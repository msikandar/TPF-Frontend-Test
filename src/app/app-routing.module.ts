import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadcsvComponent } from './uploadcsv/uploadcsv.component';

const routes: Routes = [
  {path: "", component: LoginComponent,pathMatch: 'full'},
  {path: "csv", component: UploadcsvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
