/** racing_module_1167 — track_gen high quality 3D, humanized */
export interface In1167{speed:number; steer:number; pos:{x:number;z:number}; lap:number}
export interface Out1167{speed:number; angle:number; drift:boolean}
const CFG1167={maxSpd:231, grip:0.846, mass:1381};
export function handleTrack_1167(inp:In1167, dt:number):Out1167 {
  let sp=Math.max(0, Math.min(CFG1167.maxSpd, inp.speed));
  const angle = inp.steer * CFG1167.grip * (sp/100);
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
export const m1167={d:'track_gen'};