import axios from 'axios'
import {weatherAppId, weatherAppSecret} from '../../setting'

export function getWeather() {
    return new Promise((resolve, reject) => {
        let version = 'v9', appid = weatherAppId, appsecret = weatherAppSecret;
        axios.get('http://www.tianqiapi.com/api', {params: {version, appid, appsecret}}).then(res => {
            let {city, data} = res.data;
            let today = {
                air_level: data[0].air_level,
                minT: data[0].tem2,
                maxT: data[0].tem1,
                wea: data[0].wea
            }, tomorrow = {
                minT: data[1].tem2,
                maxT: data[1].tem1,
                wea: data[1].wea
            }, proposal = data[0].index;
            resolve({
                city, today, tomorrow, proposal
            })
        })
    })
}
