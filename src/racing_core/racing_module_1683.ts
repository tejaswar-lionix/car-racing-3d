/** racing_module_1683 — particle_tire high quality 3D, humanized */
export interface In1683{speed:number; steer:number; pos:{x:number;z:number}; lap:number}
export interface Out1683{speed:number; angle:number; drift:boolean}
const CFG1683={maxSpd:202, grip:0.862, mass:1403};
export function handleAI_1683(inp:In1683, dt:number):Out1683 {
  let sp=Math.max(0, Math.min(CFG1683.maxSpd, inp.speed));
  const angle = inp.steer * CFG1683.grip * (sp/100);
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
export const m1683={d:'particle_tire'};