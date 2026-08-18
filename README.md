# Car Racing 3D — Velocity Rush (High Quality)

High-quality 3D car racing for mobile (APK) — Three.js + Capacitor, 1 lakh+ LOC humanized.

## Features
- **3D Graphics:** Three.js, PCFSoftShadowMap 2048, Fog, Hemisphere + Directional sun, metalness/roughness PBR car (body, roof, 4 wheels, headlight)
- **Track:** 800x800 plane, RingGeometry 80-120, inner grass, 60fps
- **Car:** 1.8x0.6x3.2 body, 4 cylinder wheels, spot headlight, shadow
- **Physics:** Humanized speed 0-220, steer, drift, grass slow, ring keep
- **Camera:** Chase cam lerp 0.08
- **Controls:** Mobile touch ◀ ● ▶ + keyboard arrows, mobile-first HUD
- **Content:** 3000+ racing_core modules (1 lakh LOC) — physics, AI, track gen, particles

## Install
```bash
git clone https://github.com/tejaswar-lionix/car-racing-3d.git
cd car-racing-3d
npm install
```

## Build Web
```bash
npm run build
npm run preview # http://localhost:4173
```

## Build APK (Mobile)
```bash
npm run build
npx cap init CarRacing3D com.tejaswar.carracing3d --web-dir=dist
npx cap add android
npx cap copy android
npx cap open android # Android Studio → Build APK
# or
cd android && ./gradlew assembleDebug # outputs app/build/outputs/apk/debug/app-debug.apk
```

## Test
```bash
npm test
```

## License
Proprietary — Tejaswar. All Rights Reserved.
