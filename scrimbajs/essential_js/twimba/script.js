import { tweetsData } from "./data.js";
const tweetInput = document.getElementById("tweet-input");
const tweetBtn = document.getElementById("tweet-btn");
const tweetContainer = document.getElementById("feed");

tweetBtn.addEventListener("click", () => {
  console.log(tweetInput.value);
});

//captures the event listener on the like button with data attribute
document.addEventListener("click", (e) => {
  /*
Challenge:
1. When a like icon is clicked, this function 
   should log out the contents of the 'data-like' 
   data-attribute.

⚠️ Clicking on the page but not on the like icon
   will log out 'undefined'. That is absolutely fine.
*/
  //console.log(e.target.dataset.like);

  /*
Challenge:
1. If a like icon has been clicked, call handleLikeClick
   passing in the uuid that is stored in the like icon's 
   data attribute.
*/
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
  }
});

function handleLikeClick(tweetId) {
  /*
    Challenge:
    2. handleLikeClick should take in a parameter. 
       You can call this parameter 'tweetId'. For 
       now just log out tweetId.
    */
  console.log(tweetId);

  /*  Challenge:
1. Iterate over tweetsData and use the uuid 
   saved in tweetId to identify the liked
   tweet's object. Save that object to a 
   new const called 'targetTweetObj'. 

⚠️ targetTweetObj should hold an object, NOT
   an array.
   */
  /*
2. Increment targetTweetObj's 'likes' count 
   by 1. 
/*
3. Log out targetTweetObj
*/
  // tweetsData.forEach((tweet) => {
  //   if (tweetId === tweet.uuid) {
  //     const targetTweetObj = tweet;
  //     targetTweetObj.likes++;
  //     console.log(targetTweetObj);
  //   }
  // });

  const targetTweetObj = tweetsData.filter((tweet) => {
    return tweetId === tweet.uuid;
  })[0];
  targetTweetObj.likes++;

  console.log(targetTweetObj);
  render();
}

function getFeedHtml() {
  let htmlTweet = ``;
  //   for (const tweet of tweetsData) {
  //     // Perform additional operations with the user object here
  //     htmlTweet += `<div class="tweet">
  //     <div class="tweet-inner">
  //         <img src=${tweet.profilePic} class="profile-pic">
  //         <div>
  //             <p class="handle">${tweet.handle}</p>
  //             <p class="tweet-text">${tweet.tweetText}</p>
  //             <div class="tweet-details">
  //                 <span class="tweet-detail">
  //                     ${tweet.replies.length}
  //                 </span>
  //                 <span class="tweet-detail">
  //                     ${tweet.likes}
  //                 </span>
  //                 <span class="tweet-detail">
  //                     ${tweet.retweets}
  //                 </span>
  //             </div>
  //         </div>
  //     </div>
  // </div>`;

  //     console.log(htmlTweet);
  //   }
  //   /*
  // Challenge:
  // 1. Use a "for of" to iterate over the data and
  //    create HTML string for each tweet using the
  //    boilerplate below. Replace UPPERCASE text
  //    with data from the tweets.
  // 2. Store this HTML in a let called "feedHtml".
  // 3. Log out feedHtml.
  // 4. Call getFeedHtml to check it's working.
  // */

  /*
Challenge:
1. Inside each span that has a class of "tweet-detail",
   add an <i> tag.
2. Give each <i> tag the classes it needs to render the
   correct icons next to the numbers.
   The classes you will need are:
    fa-regular, 
    fa-solid, 
    fa-comment-dots, 
    fa-heart, 
    fa-retweet
*/
  tweetsData.forEach((tweet) => {
    htmlTweet += `<div class="tweet">
      <div class="tweet-inner">
          <img src=${tweet.profilePic} class="profile-pic">
          <div>
              <p class="handle">${tweet.handle}</p>
              <p class="tweet-text">${tweet.tweetText}</p>
              <div class="tweet-details">
                  <span class="tweet-detail">
                  <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                      ${tweet.replies.length}
                  </span>
                  <span class="tweet-detail">
                  <i class="fa-solid fa-heart" data-like="${tweet.uuid}"></i>
                      ${tweet.likes}
                  </span>
                  <span class="tweet-detail">
                  <i class="fa-solid fa-retweet" data-retweet="${tweet.uuid}"></i>
                      ${tweet.retweets}
                  </span>
              </div>   
          </div>            
      </div>
  </div>`;
  });
  console.log(htmlTweet);
  return htmlTweet;
}
getFeedHtml();

function render() {
  tweetContainer.innerHTML = getFeedHtml();
  /*
Challenge:
1. Take control of the ‘feed’ div.
2. Render the HTML returned by the getFeedHtml
   function to the 'feed' div.
   See if you can do this with just one line of code!
*/
}

render();
