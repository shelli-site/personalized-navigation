<template>
    <div id="app">
        <div class="header-info">
            <header-info/>
        </div>
        <div :class="['header-search',{'box':isBox}]">
            <header-search/>
        </div>
        <section class="content">
            <news-content/>
        </section>
    </div>
</template>

<script>
    import NewsContent from "./components/layout/content/content"
    import HeaderInfo from "./components/layout/header/HeaderInfo";
    import HeaderSearch from "./components/layout/header/HeaderSearch";


    export default {
        name: 'App',
        components: {HeaderSearch, HeaderInfo, NewsContent},
        data() {
            return {
                isBox: false
            }
        },
        mounted() {
            document.addEventListener('scroll', (e) => {
                let height = document.body.scrollTop || document.documentElement.scrollTop;
                this.isBox = height >= 80
            })
        }
    }
</script>

<style lang="scss" scoped>
    #app {
        width: 100%;
        margin: 0;
        padding: 0;

        /*.header {*/
        /*    height: 180px;*/
        /*    background-color: #ffffff;*/

        .header-info {
            height: 90px;
            background-color: #ffffff;
        }

        .header-search {
            height: 101px;
            margin-top: -10px !important;
            position: sticky;
            top: 0;
            background-color: #ffffff;
        }

        .box {
            box-shadow: 0 1px 8px #c7c7c7;
        }

        .header-info > div, .header-search > div {
            margin: 0 auto;
            width: 1190px;
            /*background-color: rgba(0, 0, 255, .2);*/
        }

        /*}*/

        .content {
            border-top: 1px solid #d1d8e5;
            background-color: #fafafa;
            min-height: 700px;
        }
    }
</style>

<style lang="scss">
    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, form, input, textarea, p, th, td {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "PingFang SC", "Microsoft YaHei", arial, "Hiragino Sans GB", "Hiragino Sans GB W3";
        font-size: 14px;
        color: #333333;
    }

    ol, ul, dl {
        list-style: none;
    }

    div {
        /*border: solid 1px;*/
    }

    .link {
        cursor: pointer;

        &:hover {
            color: #F50;
            text-decoration: underline;
        }
    }
</style>
