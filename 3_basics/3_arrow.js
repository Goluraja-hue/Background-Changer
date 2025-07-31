const user = {
    username : "golu kumar",
    price : 999,

    welcomeMessage : function(){
        console.log(`hello ${this.username} welcome to the website`);
        console.log(this);
        
    }
}


// user.welcomeMessage;
// user.welcomeMessage();
// user.username = "anshu kumar";
// user.welcomeMessage();

// console.log(this);// to print empty value {}


// function chai (){
//     let user = "golu";
//     console.log(this.user);
    
// }
// chai();// this kabhi function ke under kaam nhi karta hai wo sirf function ke bahar kaam karta hai.



// const code = () => {
//     let user = "golu";
//     console.log(this.user);
//     console.log(this);
// }

// code();


// const  add = (x,y) => {
//     return x + y;
// }

// console.log(add (8,10));// explicitly return

// const add = (x,y) => (x + y);// implicit return

// console.log(add(10,12));


