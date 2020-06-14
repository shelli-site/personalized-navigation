<template>
    <div class="news-content">
        <div class="common border-block">
            <span v-for="common in commonList" class="link" :key="common">{{common}}</span>
        </div>
<!--        <div class="custom border-block"></div>-->
        <div class="news-content-main">
            <div class="left-bar">
                <div class="border-block news">
                </div>
                <div class="border-block news"></div>
            </div>
            <div class="border-block dynamic"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsContent",
        data() {
            return {
                commonList: [
                    "hao123新闻", "人民网", "新华网", "央视网", "国际在线", "中国日报", "中国网", "中经网", "光明网", "央广网", "求是网", "中青网", "网信网", "杭州市政府",
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .news-content {
        margin: 0 auto;
        width: 1190px;
        min-height: 700px;
        padding-top: 10px;

        .common {
            width: 100%;
            height: 28px;
            padding: 0 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .custom {
            width: 100%;
            height: 130px;
        }
    }

    .border-block {
        border: 1px solid #dee3eb;
        margin-bottom: 10px;
        background-color: #ffffff;
    }

    .news-content-main {
        display: flex;

        .left-bar {
            margin-right: 10px;
            display: flex;
            width: 280px;
            flex-direction: column;
        }

        .left-bar > .news {
            height: 590px;
        }

        .dynamic {
            flex: 1;
            min-height: 300px;
        }
    }
</style>
