function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
multiplyByTwo = multiplier(2)
answerToMyProblem = multiplyByTwo(4)


/*
-Jess
I've just been playing with that code you posted above in the chrome console. And it works. 
And I partly understand it. I get what it does. Just still don't really follow why its 
written the way it is.. The 2nd line just seems unneccessary to me. And then 
the 'multiplyByTwo = multiplier(2)' line.. is that like assigning the above 'multiplier' function 
to a variable? Or is it creating a new function called multiplyByTwo?

-Pete_eda_coach:
mmm! second one - multiplier is a function that returns a function. 
Your first guess is close, but we assign the RETURN of the multiplier function to a variable!
*/