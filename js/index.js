const registerButton = document.getElementById("register-button");
const cancelButton = document.getElementById("cancel-button");
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
    alert("댓글이 등록되었습니다!");

    textArea.value = "";
  }
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  textArea.value = "";
});
