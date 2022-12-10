export const InfoMessage : any = function (this:any) {
    this.errorMessage = () => {
        setTimeout(() => {
            document.querySelectorAll('.message').forEach(error => error.remove());
        }, 6000);
    }
}