export type OSList = 'Unknown' | 'Windows' | 'Linux' | 'MacOS' | 'Android' | 'HarmonyOS' | 'Ubuntu' | 'FreeBSD' | 'Debian' | 'iOS' | 'WindowsPhone' | 'BlackBerry' | 'MeeGo' | 'Symbian' | 'ChromeOS' | 'WebOS'

let os: OSList = 'Unknown'
let osVersion: string = 'Unknown'

const osRegExp = {
  Unknown: /./,

  WebOS: /hpwOS/,
  ChromeOS: /CrOS/,
  iOS: /like Mac OS X/,
  Symbian: /Symbian/,
  MeeGo: /MeeGo/,
  BlackBerry: /(BlackBerry|RIM)/,
  WindowsPhone: /(IEMobile|Windows Phone)/,
  Debian: /Debian/,
  FreeBSD: /FreeBSD/,
  Ubuntu: /Ubuntu/,
  HarmonyOS: /HarmonyOS/,
  Android: /(Android|Adr)/,
  MacOS: /Macintosh/,
  Linux: /(Linux|X11)/,
  Windows: /Windows/,
}

const osVersionRegExp: Record<OSList, RegExp> = {

  Unknown: /./,
  WebOS: /^.*hpwOS\/([\d.]+);.*$/,
  ChromeOS: /CrOS/,
  iOS: /^.*OS ([\d_]+) like.*$/,
  Symbian: /Symbian/,
  MeeGo: /MeeGo/,
  BlackBerry: /(BlackBerry|RIM)/,
  WindowsPhone: /^.*Windows Phone( OS)? ([\d.]+);.*$/,
  Debian: /^.*Debian\/([\d.]+).*$/,
  FreeBSD: /FreeBSD/,
  Ubuntu: /Ubuntu/,
  HarmonyOS: /^Mozilla.*Android ([\d.]+)[;)].*$/,
  Android: /^.*Android ([\d.]+);.*$/,
  MacOS: /^.*Mac OS X ([\d_]+).*$/,
  Linux: /(Linux|X11)/,
  Windows: /^Mozilla\/\d.0 \(Windows NT ([\d.]+);.*$/,
}

export function getOS(ua: string): OSList {
  return getOSValues(ua, osRegExp)
}

export function getOSVersion(ua: string): string {
  ua.match(osVersionRegExp[getOS(ua) as keyof typeof osVersionRegExp])
  if (RegExp.$1) {
    return RegExp.$1
  } else {
    return 'Unknown'
  }
}

export function getOSValues(ua: string, uaRegExp: Record<OSList, RegExp>): OSList {

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
