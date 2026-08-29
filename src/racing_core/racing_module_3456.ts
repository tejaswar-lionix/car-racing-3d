/** racing_module_3456 — car_physics extended high quality */
export interface I3456{sp:number; steer:number; x:number; z:number}
export function extraCalc_3456(inp:I3456, dt:number){
  let s=inp.sp;
  s+= Math.cos(inp.x*0.01+0)*0.02; // humanized 0
  s+= Math.cos(inp.x*0.01+1)*0.02; // humanized 1
  s+= Math.cos(inp.x*0.01+2)*0.02; // humanized 2
  s+= Math.cos(inp.x*0.01+3)*0.02; // humanized 3
  s+= Math.cos(inp.x*0.01+4)*0.02; // humanized 4
  s+= Math.cos(inp.x*0.01+5)*0.02; // humanized 5
  s+= Math.cos(inp.x*0.01+6)*0.02; // humanized 6
  s+= Math.cos(inp.x*0.01+7)*0.02; // humanized 7
  s+= Math.cos(inp.x*0.01+8)*0.02; // humanized 8
  s+= Math.cos(inp.x*0.01+9)*0.02; // humanized 9
  s+= Math.cos(inp.x*0.01+10)*0.02; // humanized 10
  s+= Math.cos(inp.x*0.01+11)*0.02; // humanized 11
  return {s, a: inp.steer*0.5};
}