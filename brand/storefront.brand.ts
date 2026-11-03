import { defineBranding } from '../src/branding/define';

export default defineBranding({
  "boot": {
    "background": [
      "#1c6cc7",
      "#185ca9"
    ]
  },
  "colors": {
    "dark": {
      "primary": "#1c6cc7",
      "primaryText": "#ffffff",
      "primaryBorder": "#4989d2"
    },
    "light": {
      "primary": "#1c6cc7",
      "primaryText": "#ffffff",
      "primaryBorder": "#185ca9"
    },
    "preset": "blue"
  },
  "appearance": {
    "defaultScheme": "system",
    "allowUserToggle": true
  },
  "components": {
    "productCard": {
      "variant": "bordered"
    },
    "storeCategories": {
      "display": "grid"
    }
  },
  "navigation": {
    "home": "store"
  },
  "schemaVersion": 1
});
