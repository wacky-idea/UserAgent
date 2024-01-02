import {
  getBrowser,
  getBrowserVersion,
  getDevice,
  getEngine,
  getOS,
  getOSVersion
} from '../src/index';

describe('iphone', () => {

  it('test iPone SE work by Safari', () => {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    expect(getBrowser(ua)).toEqual('Safari')
    expect(getBrowserVersion(ua)).toEqual('13.0.3')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('iOS')
    expect(getOSVersion(ua)).toEqual('13_2_3')
  });

  it('test iPad Air work by Chrome', () => {
    const ua = 'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
    expect(getBrowser(ua)).toEqual('Chrome')
    expect(getBrowserVersion(ua)).toEqual('87.0.4280.77')
    expect(getDevice(ua)).toEqual('Tablet')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('iOS')
    expect(getOSVersion(ua)).toEqual('13_3')
  });

  it('test iphone 13 by Wechat', () => {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2f) NetType/4G Language/zh_CN'
    expect(getBrowser(ua)).toEqual('Wechat')
    expect(getBrowserVersion(ua)).toEqual('8.0.43')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('iOS')
    expect(getOSVersion(ua)).toEqual('15_4_1')
  });

  it('test iphone 13 by DingTalk', () => {

    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/19E258 AliApp(DingTalk/6.5.25) com.laiwang.DingTalk/24848649 Channel/201200 language/zh-Hans-CN UT4Aplus/0.0.6 WK'

    expect(getBrowser(ua)).toEqual('DingTalk')
    expect(getBrowserVersion(ua)).toEqual('24848649')
    expect(getDevice(ua)).toEqual('Mobile')
    expect(getEngine(ua)).toEqual('WebKit')
    expect(getOS(ua)).toEqual('iOS')
    expect(getOSVersion(ua)).toEqual('15_4_1')
  });
})
