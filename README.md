# brokenWheel
A JS method library

In continuous update...

Questions and suggestions are welcome  in ‘issues’



## method

### DateFormat

```tsx
/** 		format     string 需要的格式化形式  ==默认为：'YY:MM:DD H:M:S'==
     *  timeStamp  number 时间戳            ==默认为当前时间==
     * 'YY:MM:DD H:M:S'
     *  全部为大写：YY(年)、MM(月)、DD(日)、H(时)、M(分)、S(秒)
     *  时间中间的间隔符可随意添加
     *  tip: 多个空格，只输出一个：如Y:M:D     H/M/S 输出为:2020:07:01 00/00/00
     * 
     *  例： YY:MM:DD  输出为：2020:07:01
     *  
     */
例:
import { DateFormat } from '@wooc/brokenwheel';

<div>{DateFormat(time, 'YY-MM-DD H:M')}</div>  // 输出：2021-06-12 12:00
<div>{DateFormat(time, 'YY:MM:DD H-M-S')}</div>  // 输出：2021:06:12 12-00-12
```



### OmitFormat

```js
/**
 * OmitFormat // 省略显示字符串
 * 
 *   data: String || Number // arg
 * 
 *   argvs: Array // 
 *       argv[0]: 前面保留几位,
 *       argv[1]: 后面保留几位,
 *       argv[2]: 显示为几个省略符号, // 默认为省略部分的字符长度
 * 
 *   omitString：String // omit style，default '*'
 * 
 * 例: OmitFormat(13113133333, [1,4,2])       result   1**3333
 *     OmitFormat(13113133333, [0,4,2])       result   **3333
 *     OmitFormat(13113133333, [3,0,2])       result   131**
 *     OmitFormat(13113133333, [3,0,2], '#')  result   131##
 */

例:
import { OmitFormat } from '@wooc/brokenwheel';

<div>{OmitFormat(13100001111, [3,4,4])}</div>  // 输出：131****1111
<div>{OmitFormat(13100001111,  [3,1,1], "-")}</div>  // 输出：131-1

```

