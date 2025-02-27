const registerButton = document.getElementById(`register-button`);
const textArea = document.getElementById("input-text");
const commentList = document.querySelector(".comment-list");
registerButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (textArea.value) {
    const newComment = document.createElement("li");
    newComment.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img
            src="./images/comment-author-icon.png"
            alt="사용자 프로필 이미지"
          />
          <span>방문자</span>
        </div>
        <div class="comment-content">${textArea.value}</div>
      </div>`;

    commentList.prepend(newComment);

    textArea.value = "";
  }
});
