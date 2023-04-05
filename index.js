//Answer 1

// let user = {
//     name:"Johe",
//     age:30,
//     sayHello:function(){
//         console.log("Hello" + this.name)
//     }
// }

// user.sayHello();

/*==================================================== */

//Answe 2

// const pedometer = {
//     steps: 0,
//     increase: function() {
//       this.steps++;
//     },
//     decrease: function() {
//       this.steps--;
//     },
//     reset: function() {
//       this.steps = 0;
//     },
//     read: function() {
//       console.log("Number of steps: " + this.steps);
//     }
//   };

//   pedometer.increase()
//   pedometer.increase()
//   pedometer.read()
/*================================================================= */

//Answer 3

// const tset=[
//     {name:"ali",age:30},
//     {name:"hossein",age:27}
// ]
// function sortPeople(people) {
//     people.sort(function(a, b) {
//       return a.age - b.age;
//     });
//     return people;
//   }

// console.log(sortPeople(tset))

/*==================================================================== */

//Answer 4

// function showNotification(position) {
//     const notification = document.createElement('div');
//     notification.innerText = position.html;
//     notification.style.position = 'absolute';
//     notification.style.top = position.top;
//     notification.style.right = position.right;
//     document.body.appendChild(notification);
//   }
//   showNotification({top: prompt("top:")+"px", right: prompt("right:")+"px",html:prompt("message:")});
/*=============================================== */

//Answer 5

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
//   }
  
// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
//   );