const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const headerDiv = document.createElement("div");
  const dateOnHeader = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const degreesOnHeader = document.createElement("span");

  headerDiv.appendChild(dateOnHeader);
  headerDiv.appendChild(headerTitle);
  headerDiv.appendChild(degreesOnHeader);

  headerDiv.classList.add("header");
  dateOnHeader.classList.add("date");
  degreesOnHeader.classList.add("temp");

  dateOnHeader.textContent = date;
  headerTitle.textContent = title;
  degreesOnHeader.textContent = temp;

  return headerDiv;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const mainElement = document.querySelector(selector);
  mainElement.appendChild(Header("Lambda Times", "December 2, 2021", "45°"));

  return mainElement;
};

export { Header, headerAppender };
