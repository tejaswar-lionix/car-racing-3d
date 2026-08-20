import { RacingGame } from './core/RacingGame';
import * as THREE from 'three';
console.log('Car Racing 3D — High quality 3D, 1 lakh LOC');
const game = new RacingGame();
game.start();
(window as any).game = game;
