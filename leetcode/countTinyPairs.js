function countTinyPairs(a, b, k) {
    const tinyPair = (a, b) => parseInt(`${a}${b}`);
    let topIndex = a.length;
    let pairCount = 0;

    for (let i = 0; i < a.length; i++) {
        topIndex--;

        const pair = tinyPair(a[i], b[topIndex]);

        if (pair < k) pairCount++;
    }

    return pairCount;
}
