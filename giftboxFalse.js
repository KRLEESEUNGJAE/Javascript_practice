function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    for (let el of giftBox) {
        if (el === wish) {
            return true;
        }
        else if (Array.isArray(el)) {
            return unpackGiftbox(el, wish);
        }
    }
    return false;
}

console.log(unpackGiftbox(['macbook', ['eyephone', [], ['postcard']], 'iphone'], 'iphone'))