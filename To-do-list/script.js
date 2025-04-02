document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task");
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskLists = document.getElementById("task-lists");
  const searchInput = document.getElementById("search-task");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const formatTime = (time) => {
    let [hour, minute] = time.split(":").map(Number);
    const period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12; 
    return `${hour}:${minute.toString().padStart(2, "0")} ${period}`;
  };

  const displayTasks = (filter = "") => {
    taskLists.innerHTML = `<h2>Due Tasks</h2>`;

    let groupedTasks = tasks.reduce((acc, task) => {
      if (filter && !task.name.toLowerCase().includes(filter.toLowerCase())) {
        return acc;
      }
      if (!acc[task.date]) {
        acc[task.date] = [];
      }
      acc[task.date].push(task);
      return acc;
    }, {});

    for (let date in groupedTasks) {
      let dateSection = document.createElement("div");
      dateSection.classList.add("list");
      dateSection.innerHTML = `<b>${date}</b>`;

      groupedTasks[date].forEach((task, index) => {
        let taskElement = document.createElement("div");
        taskElement.classList.add("taskDesc");
        taskElement.innerHTML = `
            <span>${task.name} at <b>${task.time}</b></span>
            <div class="btns">
              <button class="edit-btn" data-date="${task.date}" data-index="${index}">Edit</button>
              <button class="delete-btn" data-date="${task.date}" data-index="${index}">Delete</button>
            </div>
          `;
        dateSection.appendChild(taskElement);
      });

      taskLists.appendChild(dateSection);
    }

    document.querySelectorAll(".edit-btn").forEach((btn) => btn.addEventListener("click", editTask));
    document.querySelectorAll(".delete-btn").forEach((btn) => btn.addEventListener("click", deleteTask));
  };

  addTaskBtn.addEventListener("click", () => {
    const name = taskInput.value.trim();
    const date = dateInput.value;
    const time = timeInput.value;

    if (!name || !date || !time) {
      const alertBox = document.querySelector('.alertBox');
      const alertBtn = document.querySelector('.alertBtn');
      const overlay = document.querySelector('.overlay');
      alertBox.style.display = "flex";
      overlay.style.display = "block";
      alertBtn.addEventListener("click",()=>{
        alertBox.style.display = "none";
        overlay.style.display = "none";
      });
      return;
    }

    const formattedDate = formatDate(date);
    const formattedTime = formatTime(time);

    tasks.push({ name, date: formattedDate, time: formattedTime });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    dateInput.value = "";
    timeInput.value = "";

    displayTasks();
  });
  const editTask = (event) => {
    const date = event.target.dataset.date;
    const index = event.target.dataset.index;

    let taskToEdit = tasks.find(
      (task, idx) => task.date === date && idx == index
    );

    taskInput.value = taskToEdit.name;

    const [day, month, year] = taskToEdit.date.split("/");
    dateInput.value = `${year}-${month}-${day}`;

    let [timePart, period] = taskToEdit.time.split(" ");
    let [hour, minute] = timePart.split(":").map(Number);
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
    timeInput.value = `${hour.toString().padStart(2, "0")}:${minute}`;

    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
  };

  const deleteTask = (event) => {
    const date = event.target.dataset.date;
    const index = event.target.dataset.index;

    tasks = tasks.filter((task, idx) => !(task.date === date && idx == index));

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  };

  searchInput.addEventListener("input", (e) => {
    displayTasks(e.target.value);
  });

  displayTasks();
});
