export type BrowserList = 'Unknown' | 'Safari' | 'Chrome' | 'Edge' | 'IE' | 'Firefox' | 'FirefoxFocus' | 'Chromium' | 'Opera' | 'Vivaldi' | 'Yandex' | 'Arora' | 'Lunascape' | 'QupZilla' | 'CocCoc' | 'Kindle' | 'Iceweasel' | 'Konqueror' | 'Iceape' | 'SeaMonkey' | 'Epiphany' | 'XiaoMi' | 'Vivo' | '360' | '360SE' | '360EE' | 'UC' | 'QQBrowser' | 'QQ' | 'Huawei' | 'Baidu' | 'Maxthon' | 'Sogou' | 'Liebao' | '2345Explorer' | '115Browser' | 'TheWorld' | 'Quark' | 'Qiyu' | 'Wechat' | 'WechatWork' | 'Taobao' | 'Alipay' | 'Weibo' | 'Douban' | 'Suning' | 'iQiYi' | 'DingTalk'

/** 浏览器 */
const browserRegExp: Record<BrowserList, RegExp> = {
  Vivo: /VivoBrowser/,
  Huawei: /(HuaweiBrowser|HUAWEI\/|HONOR)/,
  DingTalk: /DingTalk/,
  iQiYi: /IqiyiAp/,
  Suning: /SNEBUY-APP/,
  Douban: /com\.douban\.frodo/,
  Weibo: /Weibo/,
  Alipay: /AliApp\(AP/,
  Taobao: /AliApp\(TB/,
  WechatWork: /wxwork\//,
  Wechat: /MicroMessenger/,
  Qiyu: /Qiyu/,
  Quark: /Quark/,
  XiaoMi: /MiuiBrowser/,
  TheWorld: /TheWorld/,
  '115Browser': /115Browser/,
  '2345Explorer': /2345Explorer/,
  Liebao: /(LBBROWSER|LieBaoFast)/,
  Sogou: /(MetaSr|Sogou)/,
  Maxthon: /Maxthon/,
  Baidu: /(Baidu|BIDUBrowser|baidubrowser|baiduboxapp|BaiduHD)/,
  QQ: /QQ\//,
  QQBrowser: /QQBrowser/,
  UC: /(UCBrowser|UBrowser|UCWEB)/,
  '360SE': /360SE/,
  '360EE': /360EE/,
  360: /(QihooBrowser|QHBrowser)/,
  Epiphany: /Epiphany/,
  SeaMonkey: /SeaMonkey/,
  Iceape: /Iceape/,
  Konqueror: /Konqueror/,
  Iceweasel: /Iceweasel/,
  Kindle: /(Kindle|Silk\/)/,
  CocCoc: /coc_coc_browser/,
  QupZilla: /QupZilla/,
  Lunascape: /Lunascape/,
  Arora: /Arora/,
  Yandex: /YaBrowser/,
  Vivaldi: /Vivaldi/,
  Opera: /(Opera|OPR|OPT)/,
  Chromium: /Chromium/,
  FirefoxFocus: /Focus/,
  Firefox: /(Firefox|FxiOS)/,
  Edge: /(Edge|Edg\/|EdgA|EdgiOS)/,
  IE: /(MSIE|Trident)/,
  Chrome: /(Chrome|CriOS)/,
  Safari: /Safari/,
  Unknown: /./,
}

const browserVersionRegExp: Record<BrowserList, RegExp> = {
  Safari: /^.*Version\/([\d.]+).*$/,
  Chrome: /[Chrome|CriOS]\/([\d.]+)/,
  IE: /^.*[MSIE |rv:]([\d.]+).*$/,
  Edge: /^.*[Edg|Edge|EdgA|EdgiOS|]\/([\d.]+).*$/,
  Firefox: /^.*[Firefox|FxiOS]\/([\d.]+).*$/,
  FirefoxFocus: /^.*Focus\/([\d.]+).*$/,
  Chromium: /^.*Chromium\/([\d.]+).*$/,
  Opera: /^.*[Opera|OPR|OPT]\/([\d.]+).*$/,
  Vivaldi: /^.*Vivaldi\/([\d.]+).*$/,
  Yandex: /^.*YaBrowser\/([\d.]+).*$/,
  Arora: /^.*Arora\/([\d.]+).*$/,
  Lunascape: /^.*Lunascape[\s]([\d.]+).*$/,
  QupZilla: /^.*QupZilla[\s]([\d.]+).*$/,
  CocCoc: /^.*coc_coc_browser\/([\d.]+).*$/,
  Kindle: /^.*Version\/([\d.]+).*$/,
  Iceweasel: /^.*Iceweasel\/([\d.]+).*$/,
  Konqueror: /^.*Konqueror\/([\d.]+).*$/,
  Iceape: /^.*Iceape\/([\d.]+).*$/,
  SeaMonkey: /^.*SeaMonkey\/([\d.]+).*$/,
  Epiphany: /^.*Epiphany\/([\d.]+).*$/,
  Maxthon: /^.*Maxthon\/([\d.]+).*$/,
  QQBrowser: /^.*QQBrowser\/([\d.]+).*$/,
  QQ: /^.*QQ\/([\d.]+).*$/,
  Baidu: /^.*[BIDUBrowser|baiduboxapp][\s/]([\d.]+).*$/,
  UC: /^.*UC?Browser\/([\d.]+).*$/,
  Sogou: /^.*[SE |SogouMobileBrowser]([\d.X]+).*$/,
  TheWorld: /^.*TheWorld ([\d.]+).*$/,
  XiaoMi: /^.*MiuiBrowser\/([\d.]+).*$/,
  Vivo: /^.*VivoBrowser\/([\d.]+).*$/,
  Quark: /^.*Quark\/([\d.]+).*$/,
  Qiyu: /^.*Qiyu\/([\d.]+).*$/,
  Wechat: /^.*MicroMessenger\/([\d.]+).*$/,
  WechatWork: /^.*wxwork\/([\d.]+).*$/,
  Taobao: /^.*AliApp\(TB\/([\d.]+).*$/,
  Alipay: /^.*AliApp\(AP\/([\d.]+).*$/,
  Weibo: /^.*weibo__([\d.]+).*$/,
  Douban: /^.*com.douban.frodo\/([\d.]+).*$/,
  Suning: /^.*SNEBUY-APP([\d.]+).*$/,
  iQiYi: /^.*IqiyiVersion\/([\d.]+).*$/,
  DingTalk: /^.*DingTalk\/([\d.]+).*$/,
  Huawei: /^.*[Version|HuaweiBrowser]\/([\d.]+).*$/,
  '115Browser': /^.*115Browser\/([\d.]+).*$/,
  '360': /^.*QihooBrowser\/([\d.]+).*$/,
  '360SE': /^.*Chrome\/([\d]+).*$/,
  '360EE': /^.*Chrome\/([\d]+).*$/,
  '2345Explorer': /^.*[Chrome|2345Explorer|Mb2345Browser]\/([\d]+).*$/,
  Liebao: /^.*[LieBaoFast|Chrome]\/([\d.]+).*$/,
  Unknown: /./,
}

export function getBrowser(ua: string): BrowserList {
  return getBrowserValues(ua, browserRegExp)
}

export function getBrowserVersion(ua: string): string {
  ua.match(browserVersionRegExp[getBrowser(ua) as keyof typeof browserVersionRegExp])
  if (RegExp.$1) {
    return RegExp.$1
  } else {
    return 'Unknown'
  }
}


export function getBrowserValues(ua: string, uaRegExp: Record<BrowserList, RegExp>): BrowserList {

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
