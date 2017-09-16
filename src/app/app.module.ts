import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmitNumberComponent } from './emit-number/emit-number.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { TriangleComponent } from './triangle/triangle.component';

const routes: Routes = [
  {path: 'emitNumber', component: EmitNumberComponent},
  {path: 'fibonacci', component: FibonacciComponent},
  {path: 'triangle', component: TriangleComponent},
  { path: '', redirectTo: 'emitNumber', pathMatch: 'full' },
  { path: '**', redirectTo: 'emitNumber' }
]

@NgModule({
  declarations: [
    AppComponent,
    EmitNumberComponent,
    FibonacciComponent,
    TriangleComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
