
export type EngineList = 'Unknown' | 'WebKit' | 'Trident' | 'Gecko' | 'Presto' | 'KHTML';


const engineRegExp: Record<EngineList, RegExp> = {
  KHTML: /KHTML\//,
  Gecko: /Gecko\//,
  WebKit: /AppleWebKit/,
  Presto: /Presto/,
  Trident: /(Trident|NET CLR)/,
  Unknown: /./,
}


export function getEngine(ua: string): EngineList {
  return getEngineValues(ua, engineRegExp)
}

export function getEngineValues(ua: string, uaRegExp: Record<EngineList, RegExp>): EngineList {

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
