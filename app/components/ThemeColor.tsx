import React from 'react'

const themeColors = {
  // Blues
  aquablue: '#00A8B9',
  saltwater: '#3A9D99',
  vibrantteal: '#1ABC9C',
  deepteal: '#16A085',
  darkeraquablue: '#0074A6',

  // Purples
  lavenderdream: '#af8ed0',
  softlavender: '#d3a3f7',
  mistylavender: '#6f6c79',
  violetember: '#693a99',
  oceanicnocturne: '#853bce',
  twilightplum: '#281939',
  midnightorchid: '#181621',
  velveteclipse: '#211e2d',
  onyxshadow: '#1c1928',
  darkgrape: '#362a59',
  deepindigo: '#1c1426',
  duskypalm: '#12111c',
  abyssaldepth: '#191622',

  // Greys and Neutrals
  almostblack: '#181818',
  graphite: '#232323',
  deepcharcoal: '#282828',
  charcoal: '#343434',
  deepseashadow: '#34323c',
  obsidianfog: '#504e58',
  ashenViolet: '#5d5a68',
  smokysage: '#878490',
  dimgray: '#696969',
  duskyCoral: '#565360',

  moonlightdepths: '#a1a0ab',
  charcoalblack: '#1d1d1f',
  mediumgray: '#6e6e73'
}

const ThemeColor = () => {
  return (
    <div className="flex flex-col gap-3 fixed top-0 right-0 overflow-y-auto h-5/6">
      {Object.entries(themeColors).map(([name, color]) => (
        <div key={name} className="flex items-center space-x-2">
          <div style={{ backgroundColor: color }} className="w-8 h-8 rounded-full" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  )
}

export default ThemeColor
