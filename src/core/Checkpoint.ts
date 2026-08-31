export class Checkpoint{ pos:{x:number,z:number}[]=[{x:0,z:100},{x:100,z:0},{x:0,z:-100}]; check(p:{x:number,z:number}){ return this.pos.some(c=>Math.hypot(p.x-c.x,p.z-c.z)<15); } }
