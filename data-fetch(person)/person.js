document.addEventListener("DOMContentLoaded", async function () {
  const getList = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    if (data.length > 0) {
      const 머리 = document.getElementById("머리");
      const 리스트 = document.createElement("ul");
      data.map((user) => {
        const 새거 = document.createElement("li");
        새거.textContent = user.name;
        const 제거 = document.createElement("button");
        제거.textContent = "제거";
        제거.addEventListener("click", () => {
          리스트.removeChild(새거);
        });
        새거.appendChild(제거);
        리스트.appendChild(새거);
      });
      리스트.appendChild(document.createElement("hr"));
      머리.appendChild(리스트);
    }
  };

  getList();
  const search_btn = document.getElementById("search-btn");
  search_btn.addEventListener("click", async function () {
    getList();
  });
});