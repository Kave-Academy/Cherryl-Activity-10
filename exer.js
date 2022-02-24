function run() {


    var student = { name : "David Rayy", 
            sclass : "VI",
          rollno : 12 }
          document.getElementById("output").innerHTML = Object.getOwnPropertyNames(student);
          console.log(Object.getOwnPropertyNames(student));
}
