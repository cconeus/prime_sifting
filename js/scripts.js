var primeSifter = function(integer) {
    var arrayOfIntegers = _.range(2, integer+1);
    var i=0;
    var changeInLength = 1;
    for (i;i<integer;i++) {
        var j=1;
        var prime = arrayOfIntegers[i];
        var startLength = arrayOfIntegers.length;
        for (j;j+changeInLength<integer;j++) {
            var check = arrayOfIntegers[j];
            if (check!==prime&&check % prime === 0) {
                arrayOfIntegers.splice((j), 1);
                j--;
                changeInLength++;
            }
        }
    }
    return arrayOfIntegers;
};

$(document).ready(function() {
    debugger;
    $("form#primesift").submit(function(event){
        var number = parseInt($("input#number").val());
        var result = primeSifter(number);
        var arraylength = result.length;

        $(".output").text(result.join(", "));
        $(".length").text(arraylength);

        $("#result").show();
        event.preventDefault();
    });
});
