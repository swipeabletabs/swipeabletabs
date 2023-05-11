let tab1 = document.getElementById("tab_1");
tab1.addEventListener("click", selectTab);

let tab2 = document.getElementById("tab_2");
tab2.addEventListener("click", selectTab);

let tab3 = document.getElementById("tab_3");
tab3.addEventListener("click", selectTab);

function selectTab() {
    let targetTab = event.target;
    let allTabs = targetTab.parentElement.children;

    console.log(allTabs);
    
    Array.from(allTabs).forEach(function (currentItem, currentIndex) {
        console.log(currentItem);
        currentItem.style.background = "#aaa"
        currentItem.style.borderBottom = "none";
    });
    
    targetTab.style.background = "#eee";
    targetTab.style.borderBottom = "solid black 2px";
    
    let targetPageId = targetTab.href.split("#")[1];
    console.log(targetPageId);
    
    let targetPage = document.getElementById(targetPageId);
    console.log(targetPage);
    
    if (targetPage.scrollHeight > targetPage.clientHeight) {
        console.log("overflow");
        targetPage.style.overflowX = "scroll";
    } else {
        console.log("no overflow");
        targetPage.style.overflowX = "hidden";
    }
    
}