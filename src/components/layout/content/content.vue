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
