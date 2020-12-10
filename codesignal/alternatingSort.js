function alternatingSort(a) {
    const result = [];
    let pointer = a.length - 1;
    let leftPointer = 0;
    let i = 0;

    while (a.length > result.length) {
        result[i] = i % 2 === 0 ? a[leftPointer++] : a[pointer--];

        if (result[i] <= result[i - 1]) return false;
        i++;
    }

    return true;
}
