<template>
    <div class="weather-block">
        <div class="weather-icon"></div>
        <div class="weather-info">
            <div class="weather-des">
                {{value.wea}}
            </div>
            <div class="weather-temperature">{{`${value.minT} ~ ${value.maxT}℃`}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeatherBlock",
        props: {
            day: {default: "", type: String},
            value: {default: null, type: Object}
        }
    }
</script>

<style lang="scss" scoped>
    .weather-block {
        width: 132px;
        height: 50px;
        cursor: pointer;
        padding: 6px 8px 8px;
        display: flex;

        .weather-icon {
            width: 38px;
            height: 35px;
            background-repeat: no-repeat;
        }

        .weather-info {
            margin-left: 8px;
            width: 70px;
            height: 35px;
            display: flex;
            flex-direction: column;
            & > div {
                flex: 1;
            }

            .weather-des {
                position: relative;
                font-size: 12px;
                line-height: 16px;
            }

            .weather-temperature {
                font-size: 12px;
                line-height: 12px;
                display: flex;
                align-items: flex-end;
            }
        }
    }
</style>
