fetch("/data/posters.json")
  .then(function (poster) {
    return poster.json();
  })
  .then(function (json) {
    setPosterData(json);
  });


  fetch("/data/video.json")
    .then(function (video) {
      return video.json();
    })
    .then(function (json) {
      setVideoData(json);
    });
  function setVideoData(json) {
    let pictureContainer = document.getElementsByClassName("video")[0];
    let videoConatiner = document.createElement("div");
    videoConatiner.classList.add("video");
    let video = document.createElement("video");
    video.classList.add("video-style");
    video.setAttribute("src", json["videoUrl"]);
    video.controls = "true";
    video.poster="/assets/images/poster.png"
    videoConatiner.appendChild(video);
    let titletext = document.createElement("h2");
    titletext.innerText = json["title"];
    videoConatiner.appendChild(titletext);
    let paragraph = document.createElement("p");
    paragraph.innerText = json["description"];
    videoConatiner.appendChild(paragraph);

    pictureContainer.appendChild(videoConatiner);
    let commentContainer = document.querySelector(".comments");
    for (let i of json.comments) {
      let reviewCard = document.createElement("div");
      reviewCard.classList.add("comment-card");
      let reviewCardImg = document.createElement("div");
      reviewCardImg.classList.add("reviewer-img");
      let reviewCardText = document.createElement("div");
      reviewCardText.classList.add("reviewer-text");
      let reviewerImg = document.createElement("img");
      reviewerImg.src = "/assets/" + i.image;
      let reviewerName = document.createElement("h2");
      reviewerName.classList.add("reviewer-name");
      reviewerName.innerText = i.name;
      let reviewComment = document.createElement("p");
      reviewComment.innerText = i.comment;
      reviewComment.id="review-comment";
      reviewCardImg.appendChild(reviewerImg);
      reviewCardText.appendChild(reviewerName);
      reviewCardText.appendChild(reviewComment);

      reviewCard.appendChild(reviewCardImg);
      reviewCard.appendChild(reviewCardText);

      commentContainer.appendChild(reviewCard);
    }
  }

// adding upcomming projects
function  setPosterData(json){
let upcomingProjects=document.querySelector(".upcoming-projects");
for(let i of json)
{
let posterContainer=document.createElement("div");
posterContainer.classList.add("poster-container");
let poster=document.createElement("img");
poster.src=i.imageUrl;
poster.alt=i.title
posterContainer.appendChild(poster);
upcomingProjects.appendChild(posterContainer);
}
}