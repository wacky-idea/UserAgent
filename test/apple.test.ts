import {
  getBrowser,
  getBrowserVersion,
  getDevice,
  getEngine,
  getOS,
  getOSVersion
} from '../src/index';

describe('iphone', () => {

  it('test iPone SE work', () => {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    expect(getBrowser(ua)).toEqual('Safari')
    expect(getBrowserVersion(ua)).toEqual('13.0.3')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('iOS')
    expect(getOSVersion(ua)).toEqual('13_2_3')
  });

  it('test iPone XR work', () => {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    expect(getBrowser(ua)).toEqual('Safari')
    expect(getBrowserVersion(ua)).toEqual('13.0.3')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('iOS')
    expect(getOSVersion(ua)).toEqual('13_2_3')
  });

  it('test iPad Air work', () => {
    const ua = 'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
    expect(getBrowser(ua)).toEqual('Chrome')
    expect(getBrowserVersion(ua)).toEqual('87.0.4280.77')
    expect(getDevice(ua)).toEqual('Tablet')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('iOS')
    expect(getOSVersion(ua)).toEqual('13_3')
  });

})
