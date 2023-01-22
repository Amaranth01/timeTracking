export const InfoMessage : any = function (this:any) {
    //Manages the display time of error messages
    this.errorMessage = () => {
        setTimeout(() => {
            document.querySelectorAll('.message').forEach(error => error.remove());
        }, 4000);
    }
}