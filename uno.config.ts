import { defineConfig, presetIcons } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'
export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'middle',
      },
    }),
  ],
})
