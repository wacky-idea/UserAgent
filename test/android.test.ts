import {
  getBrowser,
  getBrowserVersion,
  getDevice,
  getEngine,
  getOS,
  getOSVersion
} from '../src/index';

describe('android', () => {

  it('test Pixel work', () => {
    const ua = 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36'
    expect(getBrowser(ua)).toEqual('Chrome')
    expect(getBrowserVersion(ua)).toEqual('90.0.4430.91')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Android')
    expect(getOSVersion(ua)).toEqual('11')
  })

  it('test Samsung Galaxy S8+ work', () => {
    const ua = 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36'
    expect(getBrowser(ua)).toEqual('Chrome')
    expect(getBrowserVersion(ua)).toEqual('87.0.4280.141')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Android')
    expect(getOSVersion(ua)).toEqual('8.0.0')
  })
})