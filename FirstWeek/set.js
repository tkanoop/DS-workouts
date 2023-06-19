const set = new Set([1,2,3])

set.add(4)
set.add(4)      //   it will ignore duplicate values

for(const item of set){
    console.log(item);
}
