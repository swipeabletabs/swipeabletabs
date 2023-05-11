var delay = 250;
var throttled = false;

document.addEventListener("DOMContentLoaded", ready);
window.addEventListener("resize", windowResized);

function windowResized() {
    if (!throttled) {
        throttled = true;
        let url = window.location.href;
        let targetPageId = url.split("#")[1];
        console.log(targetPageId);

        if (targetPageId != undefined) {
            let targetPage = document.getElementById(targetPageId);
        
            if (targetPage.scrollHeight > targetPage.clientHeight) {
                targetPage.style.overflowY = "scroll";
            } else {
                targetPage.style.overflowY = "hidden";
            }
        }
    }
    setTimeout(function() {
        throttled = false
    }, delay);

}

function ready() {
    let url = window.location.href;

    let targetPageId = url.split("#")[1];
    console.log(targetPageId);
    if (targetPageId != undefined) {
        let tabNumber = targetPageId.split("_")[1];
        let targetTabId = "tab_"+tabNumber;
        let targetTab = document.getElementById(targetTabId);
    
        let allTabs = targetTab.parentElement.children;
    
        console.log(allTabs);
        
        Array.from(allTabs).forEach(function (currentItem, currentIndex) {
            console.log(currentItem);
            currentItem.style.background = "#aaa"
            currentItem.style.borderBottom = "none";
        });
        
        targetTab.style.background = "#eee";
        targetTab.style.borderBottom = "solid black 2px";
        
        
        
        let targetPage = document.getElementById(targetPageId);
        console.log(targetPage);
        
        if (targetPage.scrollHeight > targetPage.clientHeight) {
            console.log("overflow");
            targetPage.style.overflowY = "scroll";
        } else {
            console.log("no overflow");
            targetPage.style.overflowY = "hidden";
        }
        
        targetPage.scrollIntoView();
    }
}



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
        targetPage.style.overflowY = "scroll";
    } else {
        console.log("no overflow");
        targetPage.style.overflowY = "hidden";
    }
    
}