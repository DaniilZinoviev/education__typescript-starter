export function BasicTypes() {
    let isDone: boolean = true;
    let number: number = 124;
    let string: string = 'true';

    let numList: number[] = [1,2];
    let numList2: Array<number> = [3,4];

    // Tuple
    let tuple: [string, number, boolean];
    tuple = ['user_db', 124, true];

    // Enum - set of datatypes
    enum Color {Red = 21, Green, Blue}
    let c: Color = Color.Green;
    let cNum: string = Color[23];

    // console.log(`c is ${c} and of type ${typeof c}`);
    // console.log(`c is ${cNum} and of type ${typeof cNum}`);

    function warn(): void {

    }

    let someValue: any = '12';
    let strLength = (someValue as string).length;
    strLength = (<string>someValue).length;
    
    
}