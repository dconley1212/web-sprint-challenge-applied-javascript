import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const divTopics = document.createElement("div");
  divTopics.classList.add("topics");
  topics.forEach((topic) => {
    const divSection = document.createElement("div");
    divTopics.appendChild(divSection);
    divSection.classList.add("tab");
    divSection.textContent = topic;
  });

  return divTopics;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
    .get("http://localhost:5000/api/topics")
    .then((resp) => {
      console.log(resp);
      const appendingElement = document.querySelector(selector);

      const sections = Tabs(resp.data.topics);
      appendingElement.appendChild(sections);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(console.log("Woo"));
};

export { Tabs, tabsAppender };
