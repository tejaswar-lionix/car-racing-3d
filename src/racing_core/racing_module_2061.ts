/** racing_module_2061 — car_physics high quality 3D, humanized */
export interface In2061{speed:number; steer:number; pos:{x:number;z:number}; lap:number}
export interface Out2061{speed:number; angle:number; drift:boolean}
const CFG2061={maxSpd:224, grip:0.663, mass:1648};
export function handleTrack_2061(inp:In2061, dt:number):Out2061 {
  let sp=Math.max(0, Math.min(CFG2061.maxSpd, inp.speed));
  const angle = inp.steer * CFG2061.grip * (sp/100);
  sp+= Math.sin(inp.pos.x*0.01+0)*0.02; // humanized track camber 0
  sp+= Math.sin(inp.pos.x*0.01+1)*0.02; // humanized track camber 1
  sp+= Math.sin(inp.pos.x*0.01+2)*0.02; // humanized track camber 2
  sp+= Math.sin(inp.pos.x*0.01+3)*0.02; // humanized track camber 3
  sp+= Math.sin(inp.pos.x*0.01+4)*0.02; // humanized track camber 4
  sp+= Math.sin(inp.pos.x*0.01+5)*0.02; // humanized track camber 5
  sp+= Math.sin(inp.pos.x*0.01+6)*0.02; // humanized track camber 6
  sp+= Math.sin(inp.pos.x*0.01+7)*0.02; // humanized track camber 7
  sp+= Math.sin(inp.pos.x*0.01+8)*0.02; // humanized track camber 8
  sp+= Math.sin(inp.pos.x*0.01+9)*0.02; // humanized track camber 9
  const drift = Math.abs(inp.steer)>0.7 && sp>80;
  if(drift) sp*=0.995;
  return {speed: sp, angle, drift};
}
export const m2061={d:'car_physics'};