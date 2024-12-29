import { Component, inject, OnInit, signal } from '@angular/core';
import { Project } from '../model/project.type';
import { ProjectsService } from '../services/projects.service';
import { catchError } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projectService = inject(ProjectsService);
  projectItems = signal<Array<Project>>([]);

  ngOnInit() {
    this.projectService
      .getProjects()
      .pipe(
        catchError((error) => {
          console.error(error);
          return [];
        })
      )
      .subscribe((projects) => {
        this.projectItems.set(projects.map((project) => new Project(project)));
      });
  }
}
