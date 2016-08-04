var friends = {
    bill: {
       firstName: "Bill",
       lastName: "Gates",
       number: "(137) 444-5678",
       address: ['14 Charmaine Crescent', 'Newtown', 'Wellington'],
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(241) 909-6822",
        address: ["1 Here I am", "Suburb", "The Big City of Death"],
    }
};

var list = function (obj) {
    for (var key in obj) {
        console.log(key);
    }
}

var search = function(name) {
    for (var key in friends) {
        if (friends[key].firstName === name ) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};

list(friends);
search("Steve");