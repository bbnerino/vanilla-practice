document.addEventListener("DOMContentLoaded", async function () {
  let page = 0;
  const $chatList = document.getElementById("chat_box");

  const handleScroll = () => {
    if ($chatList.scrollTop === 0) {
      getData(page);
      $chatList.scrollTop = 1;
    }
  };
  $chatList.addEventListener("scroll", handleScroll);

  const fetchData = async (page) => {
    const data = await fetch(
      `http://heyhey.i234.me:3333/api/articles?page=${page}&size=3`
    )
      .then((res) => res.json())
      .then((data) => data);
    return data;
  };

  const postData = (data) => {
    console.log(data);
    if (data)
      data.map((item) => {
        const $li = document.createElement("div");
        $li.className = "chat_element";
        $li.textContent = item.title.content;
        $chatList.prepend($li);
      });
  };

  const getData = async (page) => {
    const data = await fetchData(page);
    if (data.length === 0) {
      const $li = document.createElement("div");
      $li.className = "end_element";
      $li.textContent = "마지막 페이지입니다.";
      $chatList.prepend($li);
      $chatList.removeEventListener("scroll", handleScroll);
      return;
    }
    postData(data);
    postData(data);
    if (page === 0) {
      scrollBottom();
    }

    setPage();
  };

  const scrollBottom = () => {
    $chatList.scrollTop = $chatList.scrollHeight;
  };

  getData(page);
  scrollBottom();

  const setPage = () => {
    const $page = document.getElementById("page");
    $page.textContent = page;
    page++;
  };
});
