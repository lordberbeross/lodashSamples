const _ = {
	  clamp (number,lower,higher){
    let lowerClampedValue = Math.max(number,lower);
    let clampedValue = Math.min(lowerClampedValue,higher);
    return clampedValue;
  },
   inRange(number,start,end){
    if(end === undefined){
      end= start;
      start= 0;
    }
    if(start>end){
      let asd;
      asd = start;
      start = end;
      end= asd;
    }
    if(number>=start && number<end){
      return true;
    }else{
      return false;
    }
    
  },
   words(str){
    return str.split(' ');
  },
    pad(str,len) {
    let strlen= len-str.length;
    let space = '';
        let a= str.split(' ');
    for(let i =1; i<=Math.round(strlen/2);i++){
      a.push(space);
    }
        for(let i =1; i<=strlen/2;i++){
            a.unshift(space)
}
return a.join(' ');
  },
  has(obj,key){
    let hasValue = obj[key] !== undefined;
  return hasValue;
  },
  invert (obj){
    let keys= Object.keys(obj);
    let vals= Object.values(obj);
let ax= {}
   for(let x in obj){
      delete obj[x];
      
    }
    for(let i=0; i<keys.length;i++){
  obj[vals[i]]=keys[i];
    }
return obj;
  },
  findKey (obj,func){
  for(let x in obj){
      if(func(obj[x])){
         return x;
         }
  }
},
drop(arr,num=1){
   arr.splice(0,num);
   return arr;
 },
  dropWhile(array, predicate) {

const cb = (element, index) => {
return !(predicate(element, index, array));

};

let dropNumber = array.findIndex(cb);

let droppedArray = this.drop(array, dropNumber);

return droppedArray;
},
 chunk(arr,size){
    if(size===undefined){
      size=1;
    }
    let arrayChunks= [];
    for(let i=0;i<arr.length;i+=size){
      let arrayChunk= arr.slice(i,i+size);
      arrayChunks.push(arrayChunk)
    }
    return arrayChunks;
  }
}




// Do not write or modify code below this line.
module.exports = _;