const Header = (title, date, temp) => 
{
  // Instantiate HTML DOM elements
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const header = document.createElement("h1");
  const tempSpan = document.createElement("span");

  // Updating classList for DOM elements
  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  // Instituting DOM hierarchy
  headerDiv.appendChild( dateSpan );
  headerDiv.appendChild( header );
  headerDiv.appendChild( tempSpan );

  // Adding component parameter values to elements
  dateSpan.textContent = date;
  header.textContent = title;
  tempSpan.textContent = temp;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return headerDiv;
}



const headerAppender = (selector) => 
{
  const testObj = document.querySelector( selector );
  testObj.appendChild( Header("Lambda Times", Date(), "100\u00B0")); 

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
