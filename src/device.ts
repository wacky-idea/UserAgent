export type DeviceList = 'Unknown' | 'Mobile' | 'Tablet' | 'PC'

const deviceRegExp: Record<DeviceList, RegExp> = {
  Tablet: /(Tablet|Pad|Nexus 7)/,
  Mobile: /(Mobi|iPh|480)/,
  PC: /./,
  Unknown: /./,
}

export function getDevice(ua: string): DeviceList {
  return getDeviceValues(ua, deviceRegExp)
}


export function getDeviceValues(ua: string, uaRegExp: Record<DeviceList, RegExp>): DeviceList {
  for (let key in uaRegExp) {
    if (key === 'Unknown') {
      continue
    }

    if (uaRegExp[key as keyof typeof uaRegExp].test(ua)) {
      return key as keyof typeof uaRegExp
    };
  }
  return 'Unknown'
}
