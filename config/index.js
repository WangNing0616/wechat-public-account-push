export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx73ed2065f327f9fb",
    // 公众号appSecret
    appSecret: "5fc35dcb365a8e58203fb7c9ddae4850",
    // 模板消息id
    templateId: "XA8KwugVZ8DB6fGvPktUH-XpO0s3Cl8f5eTeA2QdPYA",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["o6Kdj6FbIe3OrOZPTtgYb2F_KLpc"],
     
    // 信息配置
    // 所在省份
    province: "天津",
    // 所在城市
    city: "天津",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "蓉蓉", "year": "2000", "date": "05-09", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2018-06-13",
    // 结婚纪念日
    marryDate: "2020-01-04"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
