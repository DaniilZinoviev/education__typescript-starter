export function TypeInference() {

    let arr = [0,2,3,5,6,true];

    // arr.push('sda');

    window.onmousedown = function(mouseEvent: MouseEvent) {
        console.log(mouseEvent.button);   //<- OK
        // console.log(mouseEvent.kangaroo); //<- Error!
    };

}