export function wallFix(pos:{x:number,z:number}, vel:{x:number,z:number}){ const dist=Math.hypot(pos.x,pos.z); if(dist>125) return {x:pos.x*0.92,z:pos.z*0.92}; return pos; }
