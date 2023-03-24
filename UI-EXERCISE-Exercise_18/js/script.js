$.ajax('/data/posters.json', {
    success: function (data) {
        setPosterData(data);
    }
});
$.ajax('/data/video.json', {
    success: function (data) {
        setVideoData(data);
        setCommentData(data.comments);
    }
});
function setPosterData(poster)
{
    let upcomingContainer = $(".upcoming-projects");
    for (let i of poster) {
        let img = $("<img />");
        img.attr("src", i.imageUrl);
        img.attr("alt", i.title);
        let posterContainer = $("<div></div>");
        posterContainer.addClass("poster-container");
        posterContainer.append(img);
        console.log(posterContainer);
        posterContainer.appendTo(upcomingContainer);
    }
}
function setVideoData(video)
{
    let pictureContainer = $(".video");
    let videoConatiner = $("<div>");
    videoConatiner.addClass("video");
    let videoPlayer = $("<video>");
    videoPlayer.addClass("video-style");
    videoPlayer.attr("src", video.videoUrl);
    videoPlayer.attr("poster", "/assets/images/poster.png");
    let title = $("<h2>").append(video.title);
    let description = $("<p>").append(video.description);
    videoConatiner.append(title, description, videoPlayer);
    pictureContainer.append(videoConatiner);
}
function setCommentData(comments)
{
    let commentContainer = $(".comments");
    for (let i of comments)
    {
        let reviewCard = $("<div></div>");  
        reviewCard.addClass("comment-card");
        let reviewCardImg = $("<div></div>");  
        reviewCardImg.addClass("reviewer-img");
        let img = $("<img/>");
        img.attr("src", "/assets/" + i.image);
        reviewCardImg.append(img);
        let reviewerName = $("<h2></h2>");
        reviewerName.addClass("reviewer-name");
        reviewerName.append(i.name);
        let reviewComment = $("<p>");
        reviewComment.append(i.comment);
        reviewComment.addClass("review-comment");
        let reviewCardText = $("<div>");
        reviewCardText.addClass("reviewer-text");
        reviewCardText.append(reviewerName, reviewComment);
        reviewCard.append(reviewCardImg);
        reviewCard.append(reviewCardText);
        commentContainer.append(reviewCard);
    }
}