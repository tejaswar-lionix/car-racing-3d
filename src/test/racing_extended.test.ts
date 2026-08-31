import {describe,it,expect} from 'vitest'; import {Drift} from '../core/Drift'; describe('drift',()=>{it('active',()=>{ const d=new Drift(); expect(d.update(0.8,100)).not.toBe(0);});});
