import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareTestComponent } from './share-test/share-test.component';
import { BabyHeaderPageModule } from './baby-header/baby-header.module';

@NgModule({
  declarations: [
    ShareTestComponent
  ],
  imports: [
    CommonModule,
    BabyHeaderPageModule
  ],
  providers: [
    BabyHeaderPageModule
  ],
  exports: [
    ShareTestComponent,
    BabyHeaderPageModule
  ]
})
export class SharedModule { }

/*
declarations: []

Do declare de following:
Declare these classes in exactly one module of the application.
Declare them in a module if they belong to that particular module.

Do not declare the following:
A class that's already declared in another module, whether an app module, @NgModule, or third-party module.
An array of directives imported from another module. For example, don't declare FORMS_DIRECTIVES from @angular/forms because the FormsModule already declares it.
Module classes.
Service classes.
Non-Angular classes and objects, such as strings, numbers, functions, entity models, configurations, business logic, and helper classes.
*/