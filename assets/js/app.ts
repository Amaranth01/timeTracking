import '../css/style.scss';
import {CreateProject} from "./Project";
import {ContentProject} from "./ContentProject";
import {InfoMessage} from "./InfoMessage";
import {StorageProject} from "./StorageProject";

let createProject : any = new CreateProject();
createProject.newProject();

let contentProject : any = new ContentProject();
contentProject.projectContent();

let infoMessage : any = new InfoMessage();
infoMessage.errorMessage();

StorageProject;