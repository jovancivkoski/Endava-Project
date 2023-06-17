
var jsonDataElement = document.getElementById("jsonData");
var feedData = JSON.parse(jsonDataElement.innerHTML);

var postIndex = 0;
var postsPerPage = 4;

function renderFeed(startIndex, endIndex) {
  var feedContainer = document.getElementById("feed");

  for (var i = startIndex; i < endIndex; i++) {
    if (i >= feedData.length) {
      document.getElementById("loadMore").style.display = "none";
      break;
    }

    var post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `
      <h3>${feedData[i].title}</h3>
      <img class="post-image" src="${feedData[i].image}" alt="${feedData[i].title}">
    `;
    
    
    post.addEventListener("click", function() {
      var imageSrc = this.querySelector(".post-image").src;
      openLightbox(imageSrc);
    });

    feedContainer.appendChild(post);
  }
}

function loadMorePosts() {
  var startIndex = postIndex;
  var endIndex = startIndex + postsPerPage;

  renderFeed(startIndex, endIndex);
  postIndex += postsPerPage;


  if (postIndex >= feedData.length) {
    document.getElementById("loadMore").style.display = "none";
  }
}


function openLightbox(imageSrc) {
  var lightbox = document.getElementById("lightbox");
  var lightboxImage = document.getElementById("lightboxImage");

  lightbox.style.display = "block";
  lightboxImage.src = imageSrc;
}

function closeLightbox() {
  var lightbox = document.getElementById("lightbox");

  lightbox.style.display = "none";
}


document.getElementById("loadMore").addEventListener("click", loadMorePosts);


document.querySelector(".close").addEventListener("click", closeLightbox);


var themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("change", function() {
  var body = document.body;

  if (this.checked) {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
});