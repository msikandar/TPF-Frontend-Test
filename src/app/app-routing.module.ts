import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadcsvComponent } from './uploadcsv/uploadcsv.component';
import { UploadtomongoComponent } from './uploadtomongo/uploadtomongo.component';

const routes: Routes = [
  {path: "", component: LoginComponent,pathMatch: 'full'},
  {path: "csv", component: UploadcsvComponent},
  {path: "upload", component: UploadtomongoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
