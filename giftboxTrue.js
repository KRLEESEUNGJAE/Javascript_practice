function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    for (let el of giftBox) {
        if (el === wish) {
            return true;
        }
        else if (Array.isArray(el)) {
            const temp = unpackGiftbox(el, wish);
            if (temp) return true;
        }
    }
    return false;
}

console.log(unpackGiftbox(['macbook', ['eyephone', [], ['postcard']], 'iphone'], 'iphone'))