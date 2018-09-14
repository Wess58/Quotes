export class Quotes {
  // defines properties of a class
  public showDescription:boolean;
  constructor( public id:number, public description:string, public author:string, public name:string){
    this.showDescription=false
  }
}
