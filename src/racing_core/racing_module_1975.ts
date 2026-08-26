/** racing_module_1975 — particle_tire high quality 3D, humanized */
export interface In1975{speed:number; steer:number; pos:{x:number;z:number}; lap:number}
export interface Out1975{speed:number; angle:number; drift:boolean}
const CFG1975={maxSpd:256, grip:0.834, mass:1263};
export function handleTrack_1975(inp:In1975, dt:number):Out1975 {
  let sp=Math.max(0, Math.min(CFG1975.maxSpd, inp.speed));
  const angle = inp.steer * CFG1975.grip * (sp/100);
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
export const m1975={d:'particle_tire'};