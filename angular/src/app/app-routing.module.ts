import { EditpostComponent } from './editpost/editpost.component';
import { ShowpostComponent } from './showpost/showpost.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: PostComponent},
  {path: 'post/new', component: CreatepostComponent},
  {path: 'post/:id', component: ShowpostComponent},
  {path: 'post/edit/:id', component: EditpostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
