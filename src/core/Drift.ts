export class Drift{ active=false; angle=0; update(steer:number,speed:number){ this.active=Math.abs(steer)>0.7&&speed>80; this.angle=steer*0.04*(speed/100); return this.angle; } }
