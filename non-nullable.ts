function countlines(text? : string[]) : number {
    let count : number;
    for (const line of text) {
        if (line.length !== 0) {
            count = count + 1;
        }
    }
    return count;
}

let a = countlines(["uno", "dos", "", "tres"]);
let b = countlines(["hola", null, "chau"]);
let c = countlines();