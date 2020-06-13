<template>
    <div class="news-content">
        <div class="common border-block"></div>
        <div class="custom border-block"></div>
        <div class="news-content-main">
            <div class="left-bar">
                <div class="border-block news"></div>
            </div>
            <div class="border-block dynamic"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsContent"
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
