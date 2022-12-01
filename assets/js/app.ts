import '../css/style.scss';
import {CreateProject} from "./Project";
import {ContentProject} from "./ContentProject";

let createProject : any = new CreateProject();
createProject.newProject();

let contentProject : any = new ContentProject();
contentProject.projectContent();