export function Generics() {
    
    function identity<T>(arg: T): T {
        return arg;
    }
    let output = identity<string>('123');

    function loggingIdentity<T>(arg: T[]): T[] {
        let length = arg.length;
        return arg;
    }

    let myLoggingIdentity: <T>(arg: Array<T>) => Array<T> = loggingIdentity;
    let myLoggingIdentity2: {<T>(arg: Array<T>): Array<T>} = loggingIdentity;

    interface GenericIdentityFn {
        <T>(arg: T[]): T[]
    }
    let myLoggingIdentity3: GenericIdentityFn = loggingIdentity;


    /**
     * Generic classes
     */
    class GenericType<T> {
        default: T;
        add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericType<number>();
    myGenericNumber.default = 9;
    myGenericNumber.add(1,2);

    interface LengthWise {
        length: number;
    }
    function loggingIdentity1<T extends LengthWise>(arg: T): number {
        let length = arg.length;
        return length;
    }

    loggingIdentity1('2');


    /**
     * Type parameters in Generic constraints
     */
    function getProperty<T, K extends keyof T>(obj: T, key: K): any {
        return obj[key];
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, "a"); // okay
    // getProperty(x, "m") // Error

    /**
     * Class Types in Generics
     */
    function create<T>(c: {new(): T}): T {
        return new c();
    }

    class Animal {
        numLegs: number;
    }
    class BeeKeeper {
        hasMask: boolean;
    }
    class ZooKeeper {
        nametag: string;
    }
    class Bee extends Animal {
        keeper: BeeKeeper;
    }
    class Lion extends Animal {
        keeper: ZooKeeper;
    }
    function createInstance<A extends Animal>(c: new() => A): A {
        return new c();
    }
    createInstance(Lion).keeper.nametag;
    createInstance(Bee).keeper.hasMask;



}