import dayjs from 'dayjs';

// 繁體中文的相對時間格式
const zhTwRelativeTime = {
  future: '%s 之後',
  past: '%s 前',
  s: '幾秒',
  m: '一分鐘',
  mm: '%d 分鐘',
  h: '一小時',
  hh: '%d 小時',
  d: '一天',
  dd: '%d 天',
  M: '一個月',
  MM: '%d 個月',
  y: '一年',
  yy: '%d 年'
};

// Day.js 語言包的基本結構
const zhTwLocale = {
  name: 'zh-tw', // ❗ 這是您在 dayjs.locale() 中要使用的代碼
  // Day.js 內建 zh-cn 的設定（需要從 node_modules 複製或查閱）
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  relativeTime: zhTwRelativeTime,
  // ... 其他所有 zh-cn 的設定，並進行繁體化
};

// 將自定義的語言包註冊到 Day.js
dayjs.locale(zhTwLocale, null, true);
