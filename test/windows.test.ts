import {
  getBrowser,
  getBrowserVersion,
  getDevice,
  getEngine,
  getOS,
  getOSVersion
} from '../src/index';

describe('windows', () => {

  it('test google work', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
    expect(getBrowser(ua)).toEqual('Chrome')
    expect(getBrowserVersion(ua)).toEqual('118.0.0.0')
    expect(getDevice(ua)).toEqual('PC')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Windows')
    expect(getOSVersion(ua)).toEqual('10.0')
  });

  it('test firefox work', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/118.0'
    expect(getBrowser(ua)).toEqual('Firefox')
    expect(getBrowserVersion(ua)).toEqual('118.0')
    expect(getDevice(ua)).toEqual('PC')
    expect(getEngine(ua)).toEqual('Gecko')
    expect(getOS(ua)).toEqual('Windows')
    expect(getOSVersion(ua)).toEqual('10.0')
  });

  it('test edge work', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76'
    expect(getBrowser(ua)).toEqual('Edge')
    expect(getBrowserVersion(ua)).toEqual('118.0.2088.76')
    expect(getDevice(ua)).toEqual('PC')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Windows')
    expect(getOSVersion(ua)).toEqual('10.0')
  });

})
