import '../css/style.scss';
import {CreateProject} from "./Project";
import {InfoMessage} from "./InfoMessage";
import {ListProject} from "./ListProject";
import {StopWatch} from "./StopWatch";

let createProject : any = new CreateProject();
createProject.newProject();

let infoMessage : any = new InfoMessage();
infoMessage.errorMessage();

let listProject :any = new ListProject();
listProject.allProject();

let startChrono = new StopWatch();
startChrono.countUp;