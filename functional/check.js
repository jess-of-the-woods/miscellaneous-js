function checkUsersValid (goodUsers) {
    return function (submittedUsers) {
        submittedUsers.every(function (element) {
            return goodUsers.some( function (argument) {
                return argument.id == element.id;
            });
        })
    };
}

// https://github.com/nodeschool/discussions/issues/329