import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';

const routes: Routes = [
  {
    path: "counter",
    component: CounterComponent
  },
  {
    path: "",
    // 重定向
    redirectTo: "counter",
    // 完全匹配
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
