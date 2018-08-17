/* 
  In this file you have a nice data set that is designed to help you get used to using 
  common JS array methods. We're going to re-use this data across multiple problems.
  Before looking into the problems go ahead and familiarize yourself with the data provided.
  This exercise will prepare you for important web development tactics in the future. 
  Before beginning a problem I always look at the data I'm dealing with first. 

  Lets consider this scenario. You have a boss that is trying to articulate some data that has been given to him.
  The following data set is just too much for your bosses eye's to comprehend. So we need to change the model.
  Your needy boss is looking for few very specific data sets that only you can provide.
  You tell him you're the right person for the job and get to work!
*/
const animals = [{
        type: 'mouse',
        size: 'small',
        weight: 1
    },
    {
        type: 'dog',
        size: 'small',
        weight: 10
    },
    {
        type: 'lion',
        size: 'medium',
        weight: 150
    },
    {
        type: 'elephant',
        size: 'big',
        weight: 5000
    },
    {
        type: 'tiger',
        size: 'medium',
        weight: 400
    },
    {
        type: 'bat',
        size: 'small',
        weight: 8
    },
    {
        type: 'pig',
        size: 'small',
        weight: 40
    }
];

/*
  Problem 1: Map the data.
  Give me an array that only has the animal 'type's in it.
  Give me an array full of 'obects' of all the animal's weights and sizes. 
  We're looking for two new arrays here.
*/

// Code for problem 1 goes here

/*
  Problem 2: Filter the data.
  Lets say you wanted to provide yourself with a few 'sample' sets of data that you can use for some research.
  Well lets get rid of the items in this array that you don't need so you can focus on what's important.
  Give me an array of the data where the animals are 'size' small
  Give me an array of the data where the animals are of weight 'less than' 100.
  Give me an array of the data where the animals are of weight 'greater than' 100.
*/

// Code for problem 2 goes here

/*
  Problem 3: Reduce the data.
  Reduce is awesome. 
  It's commonly used in functional JavaScript to take a data set and reduce that set down to a singlular representation of that data set.
  can you say `averages` anyone?
  Give me an array of all the 'weights of the animals' added up.
  Give me an array of all the 'mean average weights` of the animals. (this may have 2 steps)
  
*/

// Code for problem 3 goes here