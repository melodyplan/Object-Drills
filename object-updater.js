/*I was confused by this a bit? We update it to the argument?
Not the function?

Also, does return only work if there's a function inside?
I don't get why this doesn't pass other than confusing the
function name/function and the argument. */

function updateObject(obj) {
  return {
    updateObject.foo = 'foo';
    updateObject.bar = 'bar';
    updateObject.bizz = 'bizz';
    updateObject.bang = 'bang';
  };
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

(function testUpdateObject() {
  var oldObj = {
    cats: 'cats',
    dogs: 'dogs',
  };
  var newObj = updateObject(oldObj);
  if (typeof newObj !== 'object') { 
    console.error('ERROR: `createMyObject` must return an object');
    return false
  }
  ['foo', 'bar', 'bizz', 'bang'].forEach(function(key) {
    if (!(key in newObj)) {
      console.error('ERROR: `' + key + '` not in object returned by `updateObject`');
      return false;
    }
  });
  ['foo', 'bar', 'bizz', 'bang'].forEach(function(key) {
    if (newObj[key] !== key) {
      console.error('ERROR: `' + key + '` should be "' + key + '" but was ' + newObj[key]);
      return false;
    }
  });
  if (!(newObj.cats === 'cats' && newObj.dogs === 'dogs')) {
    console.error('ERROR: your function doesn\'t preserve existing key/value pairs');
    return false;
  }
  console.log('SUCCESS: `updateObject` works correctly!');
  
})();