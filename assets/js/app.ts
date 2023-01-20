import '../css/style.scss';
import {CreateProject} from "./Project";
import {InfoMessage} from "./InfoMessage";
import {StopWatch} from "./StopWatch";

let createProject : any = new CreateProject();
createProject.newProject();

let infoMessage : any = new InfoMessage();
infoMessage.errorMessage();

let startChrono = new StopWatch();
startChrono.countUp;