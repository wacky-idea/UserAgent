
export type EngineList = 'Unknown' | 'WebKit' | 'Trident' | 'Gecko' | 'Presto' | 'KHTML';


const engineRegExp = {

  Unknown: /./,
  KHTML: /KHTML\//,
  Gecko: /Gecko\//,
  WebKit: /AppleWebKit/,
  Presto: /Presto/,
  Trident: /(Trident|NET CLR)/,
}


export function getEengine(ua: string): EngineList {
  return getEengineValues(ua, engineRegExp)
}

export function getEengineValues(ua: string, uaRegExp: Record<EngineList, RegExp>): EngineList {

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
