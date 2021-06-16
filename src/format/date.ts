/**
 * 日期时间的格式化方法
 */
const DateFormat = (timeStamp: number = new Date().getTime(), format = 'YY:MM:DD H:M:S'):string => { // 日期格式化

    const date = new Date(timeStamp)
    let time = JSON.parse(JSON.stringify(format))
    const MM = date.getMonth() + 1
    const DD = date.getDate()
    const H = date.getHours()
    const M = date.getMinutes()
    const S = date.getSeconds()
    const list = [
      {
        YY: date.getFullYear() // 年
      },
      {
        MM: MM < 10 ? `0${MM}` : MM // 月
      },
      {
        DD: DD < 10 ? `0${DD}` : DD // 日
      },
      {
        H: H < 10 ? `0${H}` : H // 时
      },
      {
        M: M < 10 ? `0${M}` : M // 分
      },
      {
        S: S < 10 ? `0${S}` : S // 秒
      }
    ]
    
    list.forEach(item => {
      const data = Object.keys(item)[0]
      const value = Object.values(item)[0]
      time = time.replace(data, value)
    })
  
    return time
  }

  export default DateFormat
