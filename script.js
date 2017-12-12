// console.log('hello world')

var disks = document.getElementsByTagName('div')
// var posts = document.getElementsByClassName('post')
var posts = [
  document.body.childNodes[5].childNodes[1],
  document.body.childNodes[5].childNodes[3],
  document.body.childNodes[5].childNodes[5]]
// var play = []

// for (var i = 0; i < disks.length; i++) {
//   disks[i].addEventListener('click', moveDisk)
// }

for (var i = 0; i < posts.length; i++) {
  posts[i].addEventListener('click', moveDisk)
}

// document.getElementById("test").addEventListener('click', first)
// function first(e){
//   e.stopImmediatePropagation()
//   // e.preventDefault()
//   this.removeEventListener("click", first)
//   document.onclick = second
// }
// function second(){
//   alert("I'm not supposed to appear after the first click, only the second.")
// }

for (var i = 0; i < disks.length; i++) {
  disks[i].addEventListener('click', function(e) {
    moveDisk(e)
  })
}

function getTarget(e) {
  if (!e) {
    e = window.event
  }
  return e.target || e.srcElement
}

function moveDisk(e) {
  var target, elParent, elGrandparent
  target = getTarget(e)
  elParent = target.parentNode
  console.log(`Target is ${target}`)
  console.log(`el Parent is ${elParent}`)
  console.log(`target.parentNode is ${target.parentNode}`)
  console.log('elParent.childNodes is ' + !!(elParent.childNodes))
  console.log(target)
  // elGrandparent = target.parentNode.parentNode
  if (target.parentNode.childNodes) {
    if (elParent.firstElementChild.dataset.id === e.srcElement.dataset.id) {
      target.parentNode.removeChild(target)
      posts[2].insertBefore(e.target, posts[2].firstElementChild)
    }
  }
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

// check to see if there are any disks, and if not then throw error and make it an invalid selection
// whenever you click on a post, if it is the first phase, you say  you want to move the top most disk
// in the second phase, you move the selected disk to the post selected by the second click/phase

// function anyDisks(e) {
//   if (e.target.dataset.id) moveDisk()
// }

// function moveDisk(e) {
//   var parent = e.target.parentNode
  // play.push(parent.dataset.id)
  // we want to get the parent of the disk being moved to present relevant options on where it can be moved next
  // we want to allow the user to move this disk to another post but only if
    // 1) it's the top disk on its own post
    // 2) the disk isn't bigger than the one on the target post
      // how to target a post?
      // once we figure that out, we can see what the id of the top one is and if it's bigger than the one we wanna move, no bones
    // 3) the post the user wants to move it to isn't the one it's currently on
  // canMove(play)
  // if this is the disk on top, move it
  // if (parent.firstElementChild.dataset.id === e.srcElement.dataset.id) {
      // for now, let's "move" a disk when clicked
      // moves only if it's the top disk
//     posts[2].insertBefore(e.target, posts[2].firstElementChild)
//     console.log('disk moved')
//     console.log(parent.dataset.id)
//   }
// }

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
