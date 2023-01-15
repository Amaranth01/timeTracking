import '../css/style.scss';
import {CreateProject} from "./Project";
import {ContentProject} from "./ContentProject";
import {InfoMessage} from "./InfoMessage";
// import {MoreTask} from "./MoreTask";
import {ListProject} from "./ListProject";

let createProject : any = new CreateProject();
createProject.newProject();

let contentProject : any = new ContentProject();
contentProject.projectContent();

let infoMessage : any = new InfoMessage();
infoMessage.errorMessage();

let listProject :any = new ListProject();
listProject.allProject();

