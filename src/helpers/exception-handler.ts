import {IonicErrorHandler} from "ionic-angular";

export class AppExceptionHandler
  // implements ErrorHandler {
  extends IonicErrorHandler  {

  handleError(error){
    console.log('handling error: ' + error);

    switch(error.message) {
      case "Network Error" : {
        this.handleNetworkError();
        break;
      }

      default :
        super.handleError(error);
    }
  }

  handleNetworkError(){
    console.log('handling "network down" situation');
  }
}
