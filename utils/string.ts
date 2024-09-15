/*
    This function convert a string into array number.
    @param originString: string input to split into array

    Example: "1,2,3" => [1, 2, 3]
*/
export const convertToArrayNumber = (originString: string) => {
    const items = originString.split(",");
    const arr: number[] = [];

    items.forEach(item => arr.push(parseInt(item)))

    return arr;
}