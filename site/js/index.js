/* index.js */

/* Remove 'release' from release titles on homepage feed */
let feedLinks = document.getElementById("intro").getElementsByTagName("a");
for (let i = 0, max = feedLinks.length; i < max; i++) 
{
  feedLinks[i].innerHTML = feedLinks[i].innerHTML.replace('release','');
}
