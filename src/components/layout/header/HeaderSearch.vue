<template>
    <div class="search">
        <div class="search-main">
            <input-search/>
        </div>
        <div class="peripheral-information">
            <span v-for="information in peripheralInformationList" class="link" :key="information">{{information}}</span>
        </div>
    </div>
</template>

<script>
    import InputSearch from "../InputSearch/InputSearch";
    //黄奕聂远同框 美国骚乱蔓延20城 库里夫妇参加游行 苹果官方打折 演员仇晓光去世
    export default {
        name: "HeaderSearch",
        components: {InputSearch},
        data() {
            return {
                peripheralInformationList: [
                    "黄奕聂远同框",
                    "美国骚乱蔓延20城",
                    "库里夫妇参加游行",
                    "苹果官方打折",
                    "演员仇晓光去世",
                ]
            }
        }
    }
</script>

