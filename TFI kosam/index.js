const movieform = document.getElementById('movieform');
const resultDiv = document.getElementById('result');
const imageElement = document.getElementById('moviepic'); // Corrected reference to the image
const cardElement = document.querySelector('.card'); // Correct reference to the card
const inputName = document.getElementById('nameInput');

// Fetch the JSON file
let TFI = [
    {"name": "Simhadri", "Rating": 8, "director": "Rajmouli", "image": "simhadri.jpeg", "year": 2003},
    {"name": "Sye", "Rating": 7.5, "director": "Rajmouli", "image": "sye.jpeg", "year": 2004},
    {"name": "Chatrapathi", "Rating": 8.5, "director": "Rajmouli", "image": "chtrapathi.jpeg", "year": 2005},
    {"name": "Vikramarkudu", "Rating": 8, "director": "Rajmouli", "image": "vikramakudu.jpeg", "year": 2006},
    {"name": "Yamadonga", "Rating": 7.8, "director": "Rajmouli", "image": "yamadonga.jpeg", "year": 2007},
    {"name": "Magadheera", "Rating": 8.7, "director": "Rajmouli", "image": "magadheera.jpeg", "year": 2009},
    {"name": "Maryada Ramanna", "Rating": 8.6, "director": "Rajmouli", "image": "maryadharamanan.jpeg", "year": 2010},
    {"name": "Eega", "Rating": 8.7, "director": "Rajmouli", "image": "eaga.jpg", "year": 2012},
    {"name": "Bahubali", "Rating": 9, "director": "Rajmouli", "image": "bahubali2.webp", "year": 2015},
    {"name": "RRR", "Rating": 9.2, "director": "Rajmouli", "image": "RRR.jpg", "year": 2022},
    {"name": "Sakthi", "Rating": 5.2, "director": "Meher Ramesh", "image": "sakthi.jpg", "year": 2011},
    {"name": "Kantri", "Rating": 5.5, "director": "Meher Ramesh", "image": "kantri.jpg", "year": 2008},
    {"name": "Shadow", "Rating": 5.8, "director": "Meher Ramesh", "image": "shadow.jpg", "year": 2013},
    {"name": "Billa", "Rating": 7.4, "director": "Meher Ramesh", "image": "billa.jpg", "year": 2009},
    {"name": "Pushpa", "Rating": 8.5, "director": "Sukumar", "image": "puspa.webp", "year": 2021},
    {"name": "Sarileru Neekevvaru", "Rating": 7.9, "director": "Anil Ravipudi", "image": "sarileru.jpg", "year": 2020},
    {"name": "Dasara", "Rating": 8.3, "director": "Srikanth Odela", "image": "dasara.jpg", "year": 2023},
    {"name": "Bholaa Shankar", "Rating": 6.7, "director": "Meher Ramesh", "image": "bhola.webp", "year": 2023},
    {"name": "Bro", "Rating": 7.5, "director": "Samuthirakani", "image": "bro.webp", "year": 2023},
    {"name": "Kushi", "Rating": 8.1, "director": "S. J. Surya", "image": "kushi.cms", "year": 2001},
    {"name": "Ala Vaikunthapurramuloo", "Rating": 8.4, "director": "Trivikram Srinivas", "image": "Ala Vaikunthapurramuloo.jpg", "year": 2020},
    {"name": "F2", "Rating": 7.8, "director": "Anil Ravipudi", "image": "f2.jpg", "year": 2019},
    {"name": "Attarintiki Daredi", "Rating": 8.1, "director": "Trivikram Srinivas", "image": "athaa.jpg", "year": 2013},
    {"name": "Bommarillu", "Rating": 8.6, "director": "Bhaskar", "image": "bomma.jpg", "year": 2006},
    {"name": "Arjun Reddy", "Rating": 8.7, "director": "Sandeep Reddy Vanga", "image": "arjun reddy.jpg", "year": 2017},
    {"name": "Geetha Govindam", "Rating": 7.8, "director": "Parasuram", "image": "geetha.jpg", "year": 2018},
    {"name": "Manam", "Rating": 8.4, "director": "Vikram Kumar", "image": "manam.jpeg", "year": 2014},
    {"name": "Tholi Prema", "Rating": 8.3, "director": "Venky Atluri", "image": "tholiprema.jpg", "year": 2018},
    {"name": "Mirchi", "Rating": 7.9, "director": "Koratala Siva", "image": "mirchi.jpg", "year": 2013},
    {"name": "Premam", "Rating": 8.2, "director": "Chandoo Mondeti", "image": "premam.jpg", "year": 2016},
    {"name": "Gabbar Singh", "Rating": 7.4, "director": "Harish Shankar", "image": "gabbar.jpg", "year": 2012},
    {"name": "Akhanda", "Rating": 7.5, "director": "Boyapati Srinu", "image": "akanda.jpg", "year": 2021},
    {"name": "DJ", "Rating": 7.2, "director": "Harish Shankar", "image": "dj.jpg", "year": 2017},
    {"name": "Ee Nagaraniki Emaindi", "Rating": 8.8, "director": "Tharun Bhascker", "image": "Ee Nagaraniki Emaindi.jpg", "year": 2018},
    {"name": "Jathi Ratnalu", "Rating": 8.1, "director": "Anudeep K.V.", "image": "jathi.jpg", "year": 2021},
    {"name": "Salaar", "Rating": 8.2, "director": "Prashanth Neel", "image": "salaar.png", "year": 2024},
    {"name": "Kalki", "Rating": 9.2, "director": "Prasanth Varma", "image": "kalki.jpg", "year": 2019},

    {"name": "Khaleja", "Rating": 7.6, "director": "Trivikram Srinivas", "image": "kahleja.avif", "year": 2010},
    {"name": "Ninnu Kori", "Rating": 7.8, "director": "Shiva Nirvana", "image": "ninnu.jpg", "year": 2017},

    
   
    {"name": "Racha", "Rating": 7.1, "director": "Sampath Nandi", "image": "rachha.jpg", "year": 2012},
   

    
    { "name": "MCA", "Rating": 8, "director": "Venu Sriram", "image": "mca.jpg", "year": 2017 },
    { "name": "Jersey", "Rating": 8.9, "director": "Gowtam Tinnanuri", "image": "jersy.jpg", "year": 2019 },
    { "name": "Kick", "Rating": 8.8, "director": "Sreenu Vaitla", "image": "kick.jpg", "year": 2009 },
    
    { "name": "KGF", "Rating": 8.9, "director": "Prashanth Neel", "image": "kgf.webp", "year": 2018 },
  
    
    { "name": "Legend", "Rating": 8.2, "director": "Boyapati Srinu", "image": "legend.jpg", "year": 2014 },
  
    { "name": "Sita Ramam", "Rating": 9.2, "director": "Hanu Raghavapudi", "image": "sita ram.jpg", "year": 2022 },
    { "name": "Animal", "Rating": 8.8, "director": "Sandeep Reddy Vanga", "image": "animal.jpg", "year": 2023 },
    { "name": "365 days", "Rating": "Nak telidhu amma", "director": "Tomasz", "image": "365days.jpg", "year": 2020 },
    { "name": "50 Shades of Grey", "Rating": "Nak telidhu amma", "director": "El James", "image": "50shades.jpg", "year": 2015 },
    { "name": "Kadhaippoma", "Rating": "Mouni Chepali", "director": "Hariharran", "image": "pomma.jpg", "year": 2020 }
];



  movieform.addEventListener("submit", async event => {
    event.preventDefault();
    const movie = inputName.value;

    if (movie) {
        try {
            const movieData = getdisplayImage(movie);
            displayImage(movie);
        } catch (error) {
            console.error(error);
            displayError(error.message);
        }
    } else {
        displayError("Please enter the right movie.");
    }
});
function getdisplayImage(movieName) {
    return TFI.find(obj => obj.name.toLowerCase() === movieName); // Return the matched movie object
}

  function displayImage(movie) {
      
  
      const match = TFI.find(obj => obj.name.toLowerCase() === movie);
  
      if (match) {
         
          imageElement.src = match.image;
          
          document.getElementById('movie-name').textContent = match.name; 
          document.getElementById('rate').textContent = match.Rating; 
          document.getElementById('director-name').textContent = match.director;  
          document.getElementById('year').textContent = match.year;  
          
  
          cardElement.style.display = 'block'; 
      } else {
          
          cardElement.style.display = 'none';
          
      }
  }



// fetch('TFI.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json(); 
//     })
//     .then(data => {
//         console.log(data); 
//         displayImage(data.movie); 
//     })
//     .catch(error => {
//         console.error('Error fetching the JSON file:', error);
//     });

// function getdisplayImage(movie) {
//     movie.forEach(movie => {
//         console.log(`Movie: ${movie.name}, Rating: ${movie.rating}, Director: ${movie.director}`);
        
//     });
// }
function displayError(message) {
    console.log("hello error");
}


  