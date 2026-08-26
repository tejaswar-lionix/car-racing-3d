/** racing_module_2036 — track_gen high quality 3D, humanized */
export interface In2036{speed:number; steer:number; pos:{x:number;z:number}; lap:number}
export interface Out2036{speed:number; angle:number; drift:boolean}
const CFG2036={maxSpd:244, grip:0.812, mass:1453};
export function handlePhysics_2036(inp:In2036, dt:number):Out2036 {
  let sp=Math.max(0, Math.min(CFG2036.maxSpd, inp.speed));
  const angle = inp.steer * CFG2036.grip * (sp/100);
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
export const m2036={d:'track_gen'};