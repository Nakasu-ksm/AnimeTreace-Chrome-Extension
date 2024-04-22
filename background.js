chrome.contextMenus.create({
    id: "animetrace.search",
    title: "在AnimeTrace上搜索图片来源动画",
    contexts: ["image"],
});

function contextClick(info, tab){
    if (info.srcUrl!==undefined){
        chrome.tabs.create(
            {
                "url" : "https://ai.animedb.cn?url="+encodeURI(info.srcUrl)
            });
    }

}
chrome.contextMenus.onClicked.addListener(contextClick)

