import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentDataPassingService {

  constructor() { }
  testing = []
  newObj = {
    id: "",
    name: ""
  }
  
  setMultiSelectOptions(obj_id:any, obj){
     this.newObj = { 
      id: obj_id,
      name: obj
    }
    this.testing.push(this.newObj)
  }

  deleteMultiSelectOptions(obj_id:any, obj){
    var collectingObjPosition = this.testing.findIndex(x => x.id == obj_id)
    this.testing.slice(collectingObjPosition)
    return this.testing
    // console.log()
  }

  getMultiSelectOptions(){ 
    return console.log(this.testing)
  }

}
