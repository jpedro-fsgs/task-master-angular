import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'tictactoe', component: TicTacToeComponent },
    { path: 'todolist', component: TodoListComponent },
    { path: 'projects', component: ProjectsComponent },
];
