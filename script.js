// console.log('hello world')

var disks = document.getElementsByTagName('div')
// var posts = document.getElementsByClassName('post')
var play = []

for (var i = 0; i < disks.length; i++) {
  disks[i].addEventListener('click', moveDisk)
}

// for (var i = 0; i < posts.length; i++) {
//   posts[i].addEventListener('click', function(e) {
//     play.push(e.srcElement.dataset.id)
//   })
// }
// .forEach is not a method on a node list
// posts.forEach(function(post) {
//   post.addEventListener('click', function(e) {
//     play.push(e.srcElement.dataset.id)
//   })
// })

function moveDisk(e) {
  var parent = e.target.parentNode
  play.push(parent.dataset.id)
  // we want to get the parent of the disk being moved to present relevant options on where it can be moved next
  // we want to allow the user to move this disk to another post but only if
    // 1) it's the top disk on its own post
    // 2) the disk isn't bigger than the one on the target post
      // how to target a post?
      // once we figure that out, we can see what the id of the top one is and if it's bigger than the one we wanna move, no bones
    // 3) the post the user wants to move it to isn't the one it's currently on
  // canMove(play)
  if (parent.firstElementChild.dataset.id === e.srcElement.dataset.id) {
      // for now, let's "move" a disk when clicked
      // moves only if it's the top disk
    document.body.childNodes[5].childNodes[3].insertBefore(e.target, document.body.childNodes[5].childNodes[3].firstElementChild);
    console.log('disk moved')
    console.log(e)
  }
}

// function canMove(play) {
//   if (play[0] === play[1]) {
//     console.log('try again')
//     play.pop()
//   }
//   else moveDisk()
// }

// so basically the idea is that we'll push some kind of reference to each thing to this play array and then compare like
// is this post the post this disk is already on?
// is this posts firstChildElement smaller than the one in play?

// e.toElement.dataset.id contains the data-id we assigned so that's one way to keep track of what's clicked
// .srcElement.dataset.id contains the same
// .srcElement.parentElement and .srcElement.parentNode contain the parent element/node info
// .target.parentElement and .target.parentNode also contain the parent element/node info
