import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { IfElseComponent } from './components/control-flow/if-else/if-else.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/directive/attribute-dir/attribute-dir.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PipeComponent } from './components/pipe/pipe.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'con-flow',
        component: IfElseComponent
    },
    {
        path: 'str-dir',
        component: StructuralDirComponent
    },
    {
        path: 'att-dir',
        component: AttributeDirComponent
    },
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    },
];
