/**
 * Utility methods for barba.js
 */

/**
 * @description Updates the meta tags inside the head tag
 */

export function replaceHead(data) {
    const head = document.head;
    const newPageRawHead = data.next.html.match(/]*>([\s\S.]*)<\/head>/i)[0];
    const newPageHead = document.createElement('head');
    newPageHead.innerHTML = newPageRawHead;
    const removeHeadTags = [
        "meta[name='keywords']",
        "meta[name='description']",
        "meta[property^='og']",
        "meta[name^='twitter']",
        "meta[itemprop]",
    ].join(',');

    const headTags = head.querySelectorAll(removeHeadTags)
    for (let i = 0; i < headTags.length; i++) {
        head.removeChild(headTags[i]);
    }
    const newHeadTags = newPageHead.querySelectorAll(removeHeadTags)
    for (let i = 0; i < newHeadTags.length; i++) {
        head.appendChild(newHeadTags[i]);
    }
}

/**
 * @description Updates the body tag
 */
export function replaceBody(data) {
    const newPageRawHTML = data.next.html;
    document.body.setAttribute('class', newPageRawHTML.match(/<body .*class="(.*)">/i,)[1]);
}
