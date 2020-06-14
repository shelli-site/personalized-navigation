<template>
    <div class="input-search">
        <img src="../../../assets/search/baidu.png" alt="" width="128" height="40"
             style="margin-right: 8px;cursor: pointer;user-select: none;" @click="toSearch()">
        <div class="input-button">
            <a-input-search v-model="searchWord" placeholder="搜你想搜的" enter-button="百度一下" size="large"
                            @focus="wordChange" @blur="inputBlur"
                            @change="wordChange" @keyup.down="chooseSuggestion(false)"
                            @keyup.up="chooseSuggestion(true)"
                            @pressEnter="toSearch(searchWord)" @search="toSearch(searchWord)">
                <a-select slot="addonBefore" v-model="searchUrl" ref="searchSelect" style="width: 55px">
                    <a-select-option v-for="searchType in searchTypes" :key="searchType.value"
                                     :title="searchType.label">
                        {{searchType.label}}
                    </a-select-option>
                </a-select>
            </a-input-search>
            <div v-show="suggestionShow" class="drop-down">
                <ul @mouseenter="storage.hover=true" @mouseleave="storage.hover=false">
                    <li v-for="({word,template},index) in suggestions" :key="word" v-html="template"
                        :class="[{'user-choose':!storage.hover&&index === storage.index}]" @click="toSearch(word)"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {getSuggestion} from "../../../api/external/suggestion";

    export default {
        name: "InputSearch",
        data() {
            return {
                userChoose: false,
                suggestionShow: false,
                suggestions: [],
                searchWord: "",
                searchUrl: "https://www.baidu.com/s?ie=utf-8&tn=baidulocal&wd=${word}&p_tk=4975%2F9zKtLDIyDq12UxAMGiTmaMII2V6jfJt4X8IO3CuSaT8eTjs5rvYHbZL2Gus4FMccZPpGgSMF0VcMTmyz61PxUgOCMwtx3brd6%2BFlUT6VZk%3D&p_timestamp=1592064855&p_signature=967c223279597097c7bf7a5d05ced67a",
                searchTypes: [
                    {
                        label: '网页',
                        value: 'https://www.baidu.com/s?ie=utf-8&tn=baidulocal&wd=${word}&p_tk=4975%2F9zKtLDIyDq12UxAMGiTmaMII2V6jfJt4X8IO3CuSaT8eTjs5rvYHbZL2Gus4FMccZPpGgSMF0VcMTmyz61PxUgOCMwtx3brd6%2BFlUT6VZk%3D&p_timestamp=1592064855&p_signature=967c223279597097c7bf7a5d05ced67a'
                    },
                    {label: '图片', value: '图片'},
                    {label: '知道', value: '知道'},
                    {label: '文库', value: '文库'},
                    {label: '贴吧', value: '贴吧'},
                ],
                storage: {
                    index: -1,
                    _value: '',
                    hover: false,
                    UP: (up) => {
                        let len = this.suggestions.length
                        if (up) this.storage.index -= 1;
                        else this.storage.index += 1;
                        if (this.storage.index === len) this.storage.index = -1;
                        else if (this.storage.index === -2) this.storage.index = len - 1;
                        this.searchWord = this.storage.index === -1 ? this.storage._value : this.suggestions[this.storage.index].word;
                    },
                    clear: function () {
                        this.index = -1;
                        this._value = '';
                    }
                }
            }
        },
        methods: {
            wordChange() {
                if (this.userChoose || !this.searchWord.toString()) return;
                getSuggestion(this.searchWord).then(res => {
                    this.suggestions = res ? res.map(s => ({
                        word: s.q,
                        template: s.q.replace(this.searchWord, `<em>${this.searchWord}</em>`)
                    })) : [];
                    if (this.suggestions.length > 0) this.suggestionShow = true;
                })
            },
            toSearch(word) {
                console.log(word);
                let url = ``;
                if (!word) {
                    url = 'https://www.baidu.com'
                } else {
                    this.searchWord = word;
                    url = this.searchUrl.replace('${word}', word)
                }
                setTimeout(() => {
                    window.open(url, '_blank');
                }, 50)
            },
            inputBlur() {
                setTimeout(() => {
                    this.storage.clear();
                    this.suggestionShow = false
                }, 200)
            },
            chooseSuggestion(up) {
                if (this.suggestions.length === 0) return;
                this.userChoose = true;
                if (!this.storage._value) {
                    this.storage._value = this.searchWord
                }
                this.storage.UP(up)
                setTimeout(() => {
                    this.userChoose = false;
                }, 200)
            }
        },
        created() {
            this.$EventBus.$on('search', (word) => {
                window.open(this.searchUrl.replace('${word}', word), '_blank');
            })
        }
    }
</script>

<style lang="scss">
    .input-search {
        display: flex;
        align-items: flex-end;

        .input-button {
            width: 660px;
            position: relative;

            .drop-down {
                position: absolute;
                width: 539px;
                min-height: 24px;
                font-family: Arial, "PingFang SC", Helvetica, "Microsoft YaHei", SimSun;
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .2);
                background-color: #fff;
            }

            .drop-down > ul {
                height: auto;
                margin-bottom: 2px;
            }

            .user-choose {
                background-color: #f5f5f5;
            }

            .drop-down > ul > li {
                padding: 2px 0 2px 9px;
                font: 14px \5B8B\4F53;
                height: 24px;
                line-height: 24px;
                position: relative;
                color: #333;
                font-weight: bolder;
                cursor: pointer;

                em {
                    font-weight: 400;
                    font-style: normal;
                }

                &:hover {
                    background-color: #f5f5f5;
                }
            }

            .ant-select-selection__rendered {
                margin-left: 7px;
                margin-right: 20px;
            }

            .ant-select-arrow {
                right: 5px;
            }

            input, button, .ant-input-group-addon {
                border-radius: 0;
            }

            button {
                width: 120px;
            }
        }

    }
</style>
