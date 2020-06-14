/**
 * 百度搜索候选词
 * @param searchWord
 * @returns {Promise<Array(10)>}
 */
export function getSuggestion(searchWord) {
    return new Promise((resolve, reject) => {
        let s = document.createElement("script");
        //http://suggestion.baidu.com/su?cb=queryList&wd=${searchWord}
        //https://www.baidu.com/sugrec?callback=jQuery1101012792436961704912_1592061244514&prod=pc_hao123&wd=%E8%B5%B7%E7%82%B9&pre=1&p=3&ie=utf-8&json=1&from=pc_hao123&_=1592061244536
        s.src = `https://www.baidu.com/sugrec?callback=queryList&prod=pc_hao123&wd=${searchWord}&pre=1&p=3&ie=utf-8&json=1&from=pc_hao123&_=1592061244536`;
        s.type = "text/javascript";
        window.queryList = (result) => {
            setTimeout(() => {
                document.body.removeChild(s);
            }, 300)
            if (result.g)
                resolve(result.g)
            else reject(result)
        }
        document.body.appendChild(s);
    })
}
