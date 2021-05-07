export function imgFirst(str) {
    var data = "";
    str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/, (match, capture) => {
        data = capture;
    });
    return data;
}