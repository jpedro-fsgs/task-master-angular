import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProjectJson } from '../model/project.type';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  http = inject(HttpClient);
  
  // URL = process.env["API_URL"];
  // URL = 'https://api.gerenciadordeprojetos.myouijava.tech';

  getProjects() {
    console.log("API fetched");
    return this.http.get<Array<ProjectJson>>('https://api.gerenciadordeprojetos.myouijava.tech/api/projetos/');
  }
}
