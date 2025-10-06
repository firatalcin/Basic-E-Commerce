import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class Alertify {
  
  message(message: string, option: AlertifyOptions){
    alertify.set('notifier', 'delay', option.delay);
    alertify.set('notifier', 'position', option.position);
    const msj =  alertify[option.messageType](message);
    if(option.dissmissOthers){
      msj.dismissOthers();
    }
  }

  dismiss(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomCenter;
  delay: number = 5;
  dissmissOthers: boolean = false;
}

export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum Position{
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomCenter = "bottom-center",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
}
