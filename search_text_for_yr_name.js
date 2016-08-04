/*jshint multistr:true */
var text = "random jess bits pieces like stuff \
jess the room kookie pull bits yes we are jess";
var myName = "jess";
var hits = [];

for (i = 0; i < text.length; i++) {
    if (text[i] === 'j') {
        for (var j = i; j < myName.length + i;j++  ) {hits.push(text[j])
            }
    }
}
if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}