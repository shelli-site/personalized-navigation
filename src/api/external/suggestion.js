/**
 * 百度搜索候选词
 * @param searchWord
 * @returns {Promise<Array(10)>}
 */
export function getSuggestion(searchWord) {
    return new Promise((resolve, reject) => {
        let s = document.createElement("script");
        s.src = `http://suggestion.baidu.com/su?cb=queryList&wd=${searchWord}`;
        s.type = "text/javascript";
        window.queryList = (result) => {
            document.body.removeChild(s);
            if (!result.p)
                resolve(result.s)
            else reject(result)
        }
        document.body.appendChild(s);
    })
}
