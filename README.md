# chrome-plugin-template
my plugin template for chrome powered by tsdown

## features
- [x] typescript support
- [x] public directory
- [x] auto generate manifest
- [x] github actions for testing and releasing

## usage
1. clone this repository
   ```bash
   git clone --depth 1 https://github.com/LateDreamXD/chrome-plugin-template.git
   ```
2. install dependencies
   ```bash
   pnpm install
   ```
3. make your own plugin
   - modify `package.json`
   - add your own source code in `src` directory
4. build the plugin
   ```bash
   pnpm build
   ```
   the built plugin will be in `dist` directory
