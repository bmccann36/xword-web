import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceLinkerComponent } from './device-linker/device-linker.component';
import { ScratchpadComponent } from './scratchpad/scratchpad.component';

const routes: Routes = [
  { path: '', redirectTo: '/scratchpad', pathMatch: 'full' },
  { path: 'scratchpad', component: ScratchpadComponent },
  { path: 'linkDevice', component: DeviceLinkerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
