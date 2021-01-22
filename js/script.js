/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

let random = [1,2,3,4,5,6];

const studentsPerPage = 9;

function showPage(list, page){
   const startIndex = (page*studentsPerPage) - studentsPerPage;
   const endIndex = (page * studentsPerPage);
   let studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';

   console.log(startIndex);
   console.log(endIndex);

   for(let i = 0; i < list.length; i++){
       console.log(list[i]);
    }

};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(){

};


// Call functions
