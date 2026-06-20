const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

    const result = document.querySelector(".result");

    result.innerHTML = `
        <h3>테스트</h3>
        <p>현재 웹사이트가 정상적으로 동작하고 있습니다.</p>
    `;

});