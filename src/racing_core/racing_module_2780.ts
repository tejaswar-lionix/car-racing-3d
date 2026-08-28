/** racing_module_2780 — engine_audio high quality 3D, humanized */
export interface In2780{speed:number; steer:number; pos:{x:number;z:number}; lap:number}
export interface Out2780{speed:number; angle:number; drift:boolean}
const CFG2780={maxSpd:240, grip:0.844, mass:1357};
export function handleDrift_2780(inp:In2780, dt:number):Out2780 {
  let sp=Math.max(0, Math.min(CFG2780.maxSpd, inp.speed));
  const angle = inp.steer * CFG2780.grip * (sp/100);
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
export const m2780={d:'engine_audio'};