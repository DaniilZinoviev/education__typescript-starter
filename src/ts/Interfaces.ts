export function Interfaces() {
    interface LabeledValue {
        readonly label: string;
        [propName: string]: any;
    }

    function printLabel(labeledObj: LabeledValue) {
        console.log(labeledObj.label);
    }

    // let myObj: LabeledValue = {label: '123'};
    // printLabel(myObj);

    // interface ISearchFunction {
    //     (source: string, subString: string): boolean;
    // }
    // let mySearch: ISearchFunction;
    // mySearch = function(a,b) {
    //     return true;
    // }

    interface StringArray {
        [index: number]: string;
    }
    let a: StringArray = ['Rob', 'Ben', 'Mark'];
    a[1] = 'da';

    interface ReadonlyStringArray {
        readonly [index: number]: string;
    }
    let b: ReadonlyStringArray = ['Bob', 'Obb'];
    // b[0] = 'net'


    /**
     * Class interface
     */
    interface IClock {
        currentTime: Date;
        setTime(d: Date): void;
    }

    class Clock implements IClock {
        currentTime: Date = new Date();
        setTime(date: Date) {
            this.currentTime = date;
        }
        constructor(h: string, m: string) {
            // Some code here
        }
    }
    
    // Inheritance
    class Control {
        private state: any;
    }
    
    interface SelectableControl extends Control {
        select(): void;
    }
    
    class Button extends Control implements SelectableControl {
        select() { }
    }
    
    class TextBox extends Control {
        select() { }
    }
    
    // Error: Property 'state' is missing in type 'Image'.
    // class Ismage implements SelectableControl {
    //     private state: any;
    //     select() { }
    // }
    
    class Location {
    
    }
    

}