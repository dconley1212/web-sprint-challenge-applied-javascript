import axios from "axios";

const Card = (article) => {
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

  const cardElement = document.createElement("div");
  const headlineOfCard = document.createElement("div");
  const authorOfCard = document.createElement("div");
  const containerOfImage = document.createElement("div");
  const theImage = document.createElement("img");
  const spanElement = document.createElement("span");

  cardElement.appendChild(headlineOfCard);
  cardElement.appendChild(authorOfCard);
  authorOfCard.appendChild(containerOfImage);
  containerOfImage.appendChild(theImage);
  authorOfCard.appendChild(spanElement);

  cardElement.classList.add("card", "open");
  headlineOfCard.classList.add("headline");
  authorOfCard.classList.add("author");
  containerOfImage.classList.add("img-container");

  headlineOfCard.textContent = article.headline;
  theImage.src = article.authorPhoto;
  spanElement.textContent = `By ${article.authorName}`;

  cardElement.addEventListener("click", () => {
    spanElement.classList.toggle("open");
  });

  return cardElement;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios
    .get("http://localhost:5000/api/articles")
    .then((resp) => {
      console.log(resp);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally("Woo");
};

export { Card, cardAppender };
