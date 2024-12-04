import { Component } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './employee.component.html',
})
export class EmployeeComponent {}
