// Write a constructor for the class Movie, which takes a String representing the title of the movie,
//  a String representing the studio, and a String representing the rating as its arguments, and sets the respective 
//  class properties to these values.

class movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

        getDetails(){
              return(`The name of the movie is ${this.title} this prodution company by  ${this.studio} this movie rating for ${this.rating}`)
        }
    
}
       let movie1 = new movie ("love today","jmm studio","PG13")
        console.log(movie1.getDetails())


       // The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

        class movie6 {
            constructor(title,studio,rating){
                this.title = title;
                this.studio = studio;
                this.rating = rating;
            
          if(rating==null){
            return this.rating = "PG"
         }
         else{
             return this.rating = rating
         }
     }

       getDetails(){
         return(`The name of the movie is ${this.title} the studio is ${this.studio} this movie rating for ${this.rating}`)
     }
  }

  let movie2 = new movie6 ("VTK","jmm studio")
  console.log(movie2.getDetails())

  // Write a method getPG, which takes an array of base type Movie as its 
//   argument, and returns a new array of only those movies in the input array with a rating of "PG".
//    You may assume the input array is full of Movie instances. The returned array need not be full.

class movie7{
     constructor(title,studio,rating){
         this.title = title;
         this.studio = studio;
         this.rating = rating;
     }

         getpg(array){
             var result = array.filter((element)=> element.rating == "PG")
             return result
         }
    
 }
        let movie3= new movie7 ("ps1","avm studio","PG")
         console.log(movie3.getpg(array))


       // Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
       class movie8 {
        constructor(title,studio,rating){
            this.title = title;
            this.studio = studio;
            this.rating = rating;
        }
    
            getDetails(){
                  return(`The name of the movie is ${this.title} this prodution company by  ${this.studio} this movie rating for ${this.rating}`)
            }
        
    }
           let movie4 = new movie8 ("casino Royale","eon productions","PG13")
            console.log(movie4.getDetails())


