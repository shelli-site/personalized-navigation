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
