export class Quotes {
  // defines properties of a class
  public showDescription:boolean;
  constructor( public id:number, public description:string, public author:string, public name:string, public likes:number, public dislikes:number){
    this.showDescription=false
  }
}
