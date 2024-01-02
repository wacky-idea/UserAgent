import {
  getBrowser,
  getBrowserVersion,
  getDevice,
  getEngine,
  getOS,
  getOSVersion
} from '../src/index';

describe('windows', () => {

  it('test windows work by Chrome', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
    expect(getBrowser(ua)).toEqual('Chrome')
    expect(getBrowserVersion(ua)).toEqual('118.0.0.0')
    expect(getDevice(ua)).toEqual('PC')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Windows')
    expect(getOSVersion(ua)).toEqual('10.0')
  });

  it('test windows work by Firefox', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/118.0'
    expect(getBrowser(ua)).toEqual('Firefox')
    expect(getBrowserVersion(ua)).toEqual('118.0')
    expect(getDevice(ua)).toEqual('PC')
    expect(getEngine(ua)).toEqual('Gecko')
    expect(getOS(ua)).toEqual('Windows')
    expect(getOSVersion(ua)).toEqual('10.0')
  });

  it('test windows work by Edge', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76'
    expect(getBrowser(ua)).toEqual('Edge')
    expect(getBrowserVersion(ua)).toEqual('118.0.2088.76')
    expect(getDevice(ua)).toEqual('PC')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Windows')
    expect(getOSVersion(ua)).toEqual('10.0')
  });

  it('test windows work by Wechat', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090819) XWEB/8529 Flue'
    expect(getBrowser(ua)).toEqual('Wechat')
    expect(getBrowserVersion(ua)).toEqual('7.0.20.1781')
    expect(getDevice(ua)).toEqual('PC')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('Windows')
    expect(getOSVersion(ua)).toEqual('10.0')
  });


})
