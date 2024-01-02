import {
  getBrowser,
  getBrowserVersion,
  getDevice,
  getEngine,
  getOS,
  getOSVersion
} from '../src/index';

describe('android', () => {

  it('test Pixel work by Chrome', () => {
    const ua = 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36'
    expect(getBrowser(ua)).toEqual('Chrome')
    expect(getBrowserVersion(ua)).toEqual('90.0.4430.91')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Android')
    expect(getOSVersion(ua)).toEqual('11')
  })

  it('test Samsung Galaxy S8+ work by Chrome', () => {
    const ua = 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36'
    expect(getBrowser(ua)).toEqual('Chrome')
    expect(getBrowserVersion(ua)).toEqual('87.0.4280.141')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Android')
    expect(getOSVersion(ua)).toEqual('8.0.0')
  })

  it('test xiaomi note7 work by Chrome', () => {
    const ua = 'Mozilla/5.0 (Linux; Android 10; Redmi Note 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36'
    expect(getBrowser(ua)).toEqual('Chrome')
    expect(getBrowserVersion(ua)).toEqual('90.0.4430.210')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Android')
    expect(getOSVersion(ua)).toEqual('10')
  })

  it('test xiaomi note7 work by XiaoMi', () => {
    const ua = 'Mozilla/5.0 (Linux; U; Android 10; zh-cn; Redmi Note 7 Build/QKQ1.190910.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/109.0.5414.118 Mobile Safari/537.36 XiaoMi/MiuiBrowser/17.8.70926 swan-mibrowser'
    expect(getBrowser(ua)).toEqual('XiaoMi')
    expect(getBrowserVersion(ua)).toEqual('17.8.70926')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Android')
    expect(getOSVersion(ua)).toEqual('10')
  })

  it('test xiaomi note7 work by QQ', () => {
    const ua = 'Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.101 Mobile Safari/537.36 V1_AND_SQ_8.0.8_9_RDM_B QQ/8.0.8.1135 NetType/WIFI WebP/0.4.1 Pixel/1080 StatusBarHeight/80 QQSpeed/4.0.4'
    expect(getBrowser(ua)).toEqual('QQ')
    expect(getBrowserVersion(ua)).toEqual('8.0.8.1135')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Android')
    expect(getOSVersion(ua)).toEqual('10')
  })
})
