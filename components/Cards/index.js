// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//      <div class="img-container">
//        <img src={url of authors image} />
//      </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    let myObj = response.data.articles;


    Object.keys(myObj).forEach(function(key){
      let dataArray = myObj[key];
      dataArray.forEach((article)=> createCard(article))
    })


  });


function createCard (article) {


  const card = document.createElement('div');
        headline = document.createElement('div');
        author = document.createElement('div');
        imgCon = document.createElement('div');
        img =document.createElement('img');
        span = document.createElement('span');
        cardsContainer = document.querySelector('.cards-container');



        cardsContainer.append(card);
        card.append(headline);
        card.append(author);
        author.append(imgCon);
        author.append(span);
        imgCon.append(img);

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgCon.classList.add('img-container');

        headline.textContent = article.headline;
        img.src = article.authorPhoto;
        span.textContent = article.authorName;




  return card
}
