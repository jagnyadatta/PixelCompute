const sectionDetails = [
    {
      id: 1,
      className: "section-one",
      backgroundColor: "#ffcccc"
    },
    {
      id: 2,
      className: "section-two",
      backgroundColor: "#ccffcc"
    },
    {
      id: 3,
      className: "section-three",
      backgroundColor: "#ccccff"
    }
  ];
  // Write code below
  const container = document.querySelector('.container');
  sectionDetails.forEach((card)=>{
    const newDiv = document.createElement('div');
    newDiv.id = card.id;
    newDiv.classList.add("section");
    newDiv.classList.add(card.className);
    newDiv.style.backgroundColor = card.backgroundColor;
    newDiv.innerText = `Section ${card.id}`;
    container.appendChild(newDiv);
    newDiv.addEventListener("mouseover",()=>{
      newDiv.style.backgroundColor = "red";
    });
    newDiv.addEventListener("mouseout",()=>{
      newDiv.style.backgroundColor = card.backgroundColor;
    });
  });
  const allSection = document.querySelectorAll('.section');
  const logContainer = document.querySelector('.log-section');
  const clickLogDiv = document.createElement('div');
  clickLogDiv.classList.add('click-log');
  logContainer.appendChild(clickLogDiv);
  
  const heading = document.createElement('h2');
  heading.innerText = "Click Log"
  clickLogDiv.appendChild(heading);
  const button = document.createElement('button');
  button.innerText = "Clear log";
  clickLogDiv.appendChild(button);
  
  allSection.forEach((section)=>{
    section.addEventListener("click",()=>{
      const para = document.createElement('p');
      para.innerText = `Clicked on div ${section.id}`;
      clickLogDiv.insertBefore(para,button);
    });
  });
  
  button.addEventListener("click",()=>{
    const allParagraphs = clickLogDiv.querySelectorAll('p');
    allParagraphs.forEach((para)=>{
      para.remove();
    })
  });
  