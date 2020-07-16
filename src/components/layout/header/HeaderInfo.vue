<template>
    <div class="info">
        <div class="logo">
            <div class="title">
                <div class="name"><div>SHELLI</div><div>SITE</div></div>
            </div>
        </div>
        <div class="location-weather">
            <div class="location">
                <div class="location-info discoloration">
                    {{weather.city}}
                    <br><span class="seven-day-weather" title="七日天气" @click="toSearch">七日天气</span>
                </div>
            </div>
            <div class=" weather discoloration">
                <weather-block day="今" :value="weather.today" title="点击查看天气详情"/>
                <weather-block day="明" :value="weather.tomorrow" title="点击查看明日天气"/>
                <!--<div class="today-weather">
                    {{weather.today.wea}}<br>{{`${weather.today.minT} ~ ${weather.today.maxT}℃`}}
                </div>
                <div class="tomorrow-weather">
                    {{weather.tomorrow.wea}}<br>{{`${weather.tomorrow.minT} ~ ${weather.tomorrow.maxT}℃`}}
                </div>-->
            </div>
        </div>
        <div class="perpetualCalendar discoloration"></div>
        <div class="mail"></div>
        <div class="network-disk"></div>
    </div>
</template>

<script>
    import {getWeather} from '../../../api/external/weather'
    import WeatherBlock from "../WeatherBlock/WeatherBlock";

    export default {
        name: "HeaderInfo",
        components: {WeatherBlock},
        data() {
            return {
                weather: {
                    "city": "杭州",
                    "today": {"air_level": "优", "minT": "26", "maxT": "36", "wea": "晴"},
                    "tomorrow": {"minT": "26", "maxT": "33", "wea": "小雨转阴"},
                    "proposal": [{"title": "紫外线指数", "level": "很强", "desc": "涂擦SPF20以上，PA++护肤品，避强光。"}, {
                        "title": "减肥指数",
                        "level": "一颗星",
                        "desc": "天热风大，可选择低强度运动。"
                    }, {"title": "血糖指数", "level": "易波动", "desc": "气温高，血糖易波动，注意防暑降温。"}, {
                        "title": "穿衣指数",
                        "level": "炎热",
                        "desc": "建议穿短衫、短裤等清凉夏季服装。"
                    }, {"title": "洗车指数", "level": "较不宜", "desc": "风力较大，洗车后会蒙上灰尘。"}, {
                        "title": "空气污染扩散指数",
                        "level": "良",
                        "desc": "气象条件有利于空气污染物扩散。"
                    }]
                }/*{
                    city: '',
                    today: {
                        air_level: '',
                        minT: 0,
                        maxT: 0,
                        wea: ''
                    },
                    tomorrow: {
                        minT: 0,
                        maxT: 0,
                        wea: ''
                    },
                    proposal: []
                }*/
            }
        },
        created() {
            /*getWeather().then(res => {
                this.weather = res;
                console.log(JSON.stringify(res));
            })*/
        },
        methods: {
            toSearch(word) {
                this.$EventBus.$emit('search', `${this.weather.city}天气预报`)
            }
        }
    }
</script>

