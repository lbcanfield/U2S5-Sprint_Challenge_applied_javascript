import axios from "axios";

const Card = (article) => 
{
  console.log( article );
  const cardDiv = document.createElement("div");
  const headLineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const image = document.createElement("img");
  const creditSpan = document.createElement("span");

  cardDiv.classList.add("card");
  headLineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");

  cardDiv.appendChild( headLineDiv );
  cardDiv.appendChild( authorDiv );
  authorDiv.appendChild( imgDiv );
  imgDiv.appendChild( image );
  authorDiv.appendChild( creditSpan );

  headLineDiv.textContent = article.headline;
  image.setAttribute( 'src', article.authorPhoto );
  creditSpan.textContent = `By ${article.authorName}`;

  return cardDiv;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => 
{
  axios.get( 'http://localhost:5001/api/topics' )
  .then( topic_result =>
    {
      topic_result.data.topics.forEach( topic =>
        {
          axios.get('http://localhost:5001/api/articles')
          .then( article_result =>
            {
              if ( topic === 'node.js')
              {
                topic = 'node';
              }
              article_result["data"]["articles"][topic].forEach( article =>
                {
                document.querySelector( selector ).appendChild( Card( article ));
                })
            })
          .catch( error =>
            {
              console.error( error );
            })
        })
    })
  .catch( error =>
    {
      console.error( error );
    })

  /*
  axios.get('http://localhost:5001/api/articles')
  .then( result =>
    {
      const articleData = result.data.articles;
      console.log( articleData );

      //document.querySelector( selector ).
    })
  .catch( error =>
    {
      console.error( error );
    })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //*/
}

export { Card, cardAppender }
