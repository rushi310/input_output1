import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'student',
        loadComponent:()=> import('./shared/component/student/std-dashboard').then(c => c.StdDashboard)
    },
    {
        path:'todo',
        loadComponent:() => import('./shared/component/todo/todo-dashboard').then(c => c.TodoDashboard)
    },
    {
        path:'post',
        loadComponent:() => import('./shared/component/post/post-dashboard').then(c => c.PostDashboard)
    },
    {
        path:'product',
        loadComponent:() => import('./shared/component/product/product-dashboard').then(c => c.ProductDashboard)
    },
    {
        path: '',
        redirectTo:'student',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'student'
    }

];
