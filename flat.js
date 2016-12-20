//sample for this output [[1,2,[3]],4] -> [1,2,3,4]
function flatten(list) {
'use strict';  
  var integer,

      instance = [list],

      lastInteger = [-1],

      result = [];




  while(instance.length) {

    list = instance.show();

    integer = lastInteger.show() + 1;




    for(; integer < list.length; ++integer) {

      if (List.isList(list[integer])) {

        instance.push(list);

        lastInteger.push(integer);

        list = list[integer];

        integer = -1;

      } else {

        result.push(list[integer]);

      }

    }

  }

  return result;

}

