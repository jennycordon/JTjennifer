import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './private/clientes/clientes.component';
import { EmpleadosComponent } from './private/empleados/empleados.component';
import { FacturasComponent } from './private/facturas/facturas.component';
import { ProductosComponent } from './private/productos/productos.component';
import { ProductosFacturasComponent } from './private/productos-facturas/productos-facturas.component';
import { LoginComponent } from './public/login/login.component';
import { AuthGuard } from './auth.guard';
import { ClienteFormComponent } from './private/cliente-form/cliente-form.component'; // para el formulario del cliente
import { FacturaFormComponent } from './private/factura-form/factura-form.component'; // para el formulario de factura
import { EmpleadoFormComponent } from './private/empleado-form/empleado-form.component'; // para el formulario de empleado
import { ProductoFormComponent } from './private/producto-form/producto-form.component'; // para el formulario del producto
import { ProductoFacturaFormComponent } from './private/producto-factura-form/producto-factura-form.component'; // para el formulario de empleado

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard]},
  {path: 'clientes/add', component: ClienteFormComponent, canActivate: [AuthGuard]}, // para el boton agregar
  {path: 'clientes/:id', component: ClienteFormComponent, canActivate: [AuthGuard]}, // para la busqueda dando clic en la tabla cliente
  {path: 'facturas/add', component: FacturaFormComponent, canActivate: [AuthGuard]}, // para el boton agregar
  {path: 'facturas/:id', component: FacturaFormComponent, canActivate: [AuthGuard]}, // para la busqueda dando clic en la tabla factura
  {path: 'empleados/add', component: EmpleadoFormComponent, canActivate: [AuthGuard]}, // para el boton agregar
  {path: 'empleados/:id', component: EmpleadoFormComponent, canActivate: [AuthGuard]}, // para la busqueda dando clic en la tabla empleado
  {path: 'productos/add', component: ProductoFormComponent, canActivate: [AuthGuard]}, // para el boton agregar
  {path: 'productos/:id', component: ProductoFormComponent, canActivate: [AuthGuard]}, // para la busqueda dando clic en la tabla producto
  {path: 'productos-facturas/add', component: ProductoFacturaFormComponent, canActivate: [AuthGuard]}, // para el boton agregar
  {path: 'productos-facturas/:id', component: ProductoFacturaFormComponent, canActivate: [AuthGuard]}, // para la busqueda dando clic en la tabla producto factura
  {path: 'empleados', component: EmpleadosComponent, canActivate: [AuthGuard]},
  {path: 'facturas', component: FacturasComponent, canActivate: [AuthGuard]},
  {path: 'productos', component: ProductosComponent, canActivate: [AuthGuard]},
  {path: 'productos-facturas', component: ProductosFacturasComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
