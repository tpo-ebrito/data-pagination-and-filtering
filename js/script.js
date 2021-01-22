/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

//Search form 

function inputFilter() {
const header = document.querySelector('header.header');
const h2 = header.firstElementChild;

let studentDisplay = `<label for="search" class="student-search">
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
 </label>`;

 h2.insertAdjacentHTML("afterend", studentDisplay);
const input = document.getElementById('search');



for(i = 0; i < data.length; i++){
  
   const student = data[i];
   
   
}

}




/*
<li class="student-item cf">
      <label for="search" class="student-search">
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
          </label>
        
        </li>
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const itemsPerPage = 9;

function showPage(list, page){   
   const startIndex = (page*itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage);
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';

   // console.log(startIndex);
   // console.log(endIndex);

   for(let i = 0; i < list.length; i++){
      if(i >= startIndex && i < endIndex){
         const student = list[i];
         let studentItem = 
         `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
           <h3>${student.name.title}. ${student.name.first} ${student.name.last}</h3>
           <span class="email">${student.email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined: ${student.registered.date}</span>
         </div>
       </li>`;
       studentList.insertAdjacentHTML("beforeend", studentItem);
    } 
   }
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   const numOfPages = Math.ceil(list.length/itemsPerPage);

//   console.log(numOfPages);

   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML='';

   for(let i = 1; i < numOfPages+1; i++){
      let button = 
      `<li>
      <button type="button">${i}</button>
      </li>`;

   linkList.insertAdjacentHTML("beforeend",button);

 //     console.log(i);
   }
      
   let button = document.querySelector('button');
      button.className = 'active';

   linkList.addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON'){
         const activeClass = document.querySelector('.active');
         activeClass.className = '';
         
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
      
   });

};

// Call functions
showPage(data, 1);
addPagination(data);
