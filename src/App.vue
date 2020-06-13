<template>
    <div id="app">
        <section class="header">
            <div class="header-info"></div>
            <div class="header-search"></div>
        </section>
        <section class="content">
            <news-content/>
        </section>
    </div>
</template>

<script>
    import NewsContent from "./components/content/content"
    import {getSuggestion} from "./api/external/suggestion";


    export default {
        name: 'App',
        components: {NewsContent},
        mounted() {
            // getSuggestion("get").then(res => {
            //     console.log(res);
            // })
        }
    }
</script>

<style lang="scss" scoped>
    #app {
        width: 100%;
        margin: 0;
        padding: 0;

        .header {
            height: 180px;
            background-color: #ffffff;

            .header-info {
                height: 90px;
            }

            .header-search {
                height: 101px;
                margin-top: -10px !important;
                border-bottom: 1px solid #d1d8e5;
                position: sticky;
            }

            .header-info > div, .header-search > div {
                margin: 0 auto;
                width: 1190px;
                /*background-color: rgba(0, 0, 255, .2);*/
            }
        }

        .content {
            background-color: #fafafa;
            min-height: 700px;
        }
    }
</style>

<style>
    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, form, input, textarea, p, th, td {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "PingFang SC", "Microsoft YaHei", arial, "Hiragino Sans GB", "Hiragino Sans GB W3";
        font-size: 14px;
    }
</style>
