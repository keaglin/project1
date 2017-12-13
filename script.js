// console.log('hello world')

var disks = document.getElementsByTagName('div')
// var posts = document.getElementsByClassName('post')
var posts = [
  document.body.childNodes[5].childNodes[1],
  document.body.childNodes[5].childNodes[3],
  document.body.childNodes[5].childNodes[5]]
// var play = []

var currentDisk = null

for (var i = 0; i < disks.length; i++) {
  disks[i].addEventListener('click', selected)
}

function clearDisk () {
  currentDisk = null
  // alert('Pick a disk')
}

function selected (e) {
  console.log('selected was called')
  // e.className += ' selected'
  currentDisk = e.target.parentNode.firstElementChild
  console.log(`current disk selected and it is disk${currentDisk.dataset.id}`)
  if (!currentDisk) console.log('no disk selected')
  else moveDisk()
  // while (currentDisk) {
  //   moveDisk()
  //   clearDisk()
  // }
  // clearDisk()
}

// desired behavior
// as long as currentDisk is defined, we want to attempt to move that disk
// after a disk is moved
  // clearDisk
// if a move is deemed illegal
  // alert user
  // clearDisk

function moveDisk () {
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].dataset.id !== currentDisk.parentNode.dataset.id) {
    // if (posts[i].classList[1] === 'tower') { <- the first version of this conditional and use of `this` was Mike's idea and led to me figuring out my issue at the time
      posts[i].addEventListener('click', function (e) {
        // we only want to move it if the post it's going to either 1) has no children or
        // 2) the disk we're moving is smaller than the first child of the destination post
        // if (e.target.hasChildNodes() === false) { // if dest post has no children, move selected disk
        //   console.log(`currentDisk is disk${currentDisk.dataset.id}`)
        //   console.log(`destination post is ${e.target.dataset.id}`)
        //   currentDisk.parentNode.removeChild(currentDisk)
        //   this.insertBefore(currentDisk, this.firstElementChild)
        // } else if (e.target.hasChildNodes() === true) { // if it has children, is the current disk smaller than the first child?
        //   if (currentDisk.dataset.id < e.target.firstElementChild.dataset.id) {
        //     currentDisk.parentNode.removeChild(currentDisk)
        //     this.insertBefore(currentDisk, this.firstElementChild)
        //   } else window.alert(`You can't put that piece here`)
        // console.log(`inside post EL, current disk is disk${currentDisk.dataset.id}`)
        if (e.target.hasChildNodes()) { // if it has children, is the current disk smaller than the first child?
          // console.log(`post.hasChildNodes? cool current disk selected and it is disk${currentDisk.dataset.id}`)
          if (currentDisk.dataset.id < e.target.firstElementChild.dataset.id) {
            // console.log(`is current disk smaller than the first child of the target? Idk but current disk selected and it is disk${currentDisk.dataset.id}`)
            currentDisk.parentNode.removeChild(currentDisk)
            this.insertBefore(currentDisk, this.firstElementChild)
            // currentDisk = null
            clearDisk()
            console.log(`current disk is ${currentDisk}`)
          } else if (currentDisk.dataset.id > e.target.firstElementChild.dataset.id) {
            // console.log(`current disk bigger than first child of target post and it is disk${currentDisk.dataset.id}`)
            console.log(`You can't put that piece here. Try again.`)

            // clearDisk()
            // currentDisk = null
          }
        } else {
          // console.log(`currentDisk is disk${currentDisk.dataset.id}`)
          // console.log(`destination post is ${e.target.dataset.id}`)
          currentDisk.parentNode.removeChild(currentDisk)
          this.insertBefore(currentDisk, this.firstElementChild)
          // clearDisk()
          // currentDisk = null
        }
        // noChild(e)
      }) // end of addEventListener
    }
  }
  // console.log(`current disk right before being cleared is disk${currentDisk.dataset.id}`)
  // currentDisk = null
} // end of moveDisk

// function noChild(e) {
//   if (!(e.target.hasChildNodes())) { // if dest post has no children, move selected disk
//     currentDisk.parentNode.removeChild(currentDisk)
//     this.insertBefore(currentDisk, this.firstElementChild)
//   } else hasChild(e)
// }

// function hasChild(e) {
//   if (e.target.firstElementChild) { // if it has children, is the current disk smaller than the first child?
//     if (currentDisk.dataset.id < e.target.firstElementChild.dataset.id) {
//       currentDisk.parentNode.removeChild(currentDisk)
//       this.insertBefore(currentDisk, this.firstElementChild)
//     } else window.alert(`You can't put that piece here`)
//   }
// }

// determine if they won
// so maybe are all the disks moved from the starting post?
// are they in order top to bottom
function winner () {}

// for (var i = 0; i < posts.length; i++) {
//   posts[i].addEventListener('click', moveDisk)
// }

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

// for (var i = 0; i < disks.length; i++) {
//   disks[i].addEventListener('click', first)
// }

// for (var i = 0; i < posts.length; i++) {
//   posts[i].addEventListener('click', first)
// }

// gotten from https://stackoverflow.com/questions/33262256/javascript-add-click-event-after-another-click-event
// and some info from Jon Duckett's JS and JQ as well
// I'm pretty sure it's not firing at the moment bc nothing is being logged to the console
// function first(e) {
  // e.stopImmediatePropogation()
  // e.preventDefault()
//   e.stopImmediatePropagation()
//   this.removeEventListener('click', first)
//   // want to get the posts that weren't clicked and addEvtLstnr
//   for (var i = 0; i < posts.length; i++) {
//     if (e.target.dataset.id !== posts[i].dataset.id) {
//       console.log(`posts[${i}]'s ID is ${posts[i].dataset.id}`)
//       posts[i].addEventListener('click', moveDisk)
//     }
//   }
// }

// if currentDisk < dest.lastChild
  // movedisk
  // else
    // alert(try again)

function getTarget (e) {
  if (!e) {
    e = window.event
  }
  return e.target || e.srcElement
}

// moveDisk revision 2
// function moveDiskr2(e) {
//   var target, child
//   target = getTarget(e)
//   console.log(e.target.dataset)
//   console.log(target)
// }

// moveDisk revision 1
// function moveDiskr1(e) {
  // because of the way I handled event delegation, I think I now need to retool this
  // with the POV that e is the post, not the disk
  // console.log('moved')
  // var target, elParent, elGrandparent
  // target = getTarget(e)
  // elParent = target.parentNode
  // console.log(`Target is ${target}`)
  // console.log(`el Parent is ${elParent}`)
  // console.log(`target.parentNode is ${target.parentNode}`)
  // console.log('elParent.childNodes is ' + !!(elParent.childNodes))
  // console.log(target)
  // elGrandparent = target.parentNode.parentNode
//   if (target.parentNode.childNodes) {
//     if (elParent.firstElementChild.dataset.id === e.srcElement.dataset.id) {
//       target.parentNode.removeChild(target)
//       posts[2].insertBefore(e.target, posts[2].firstElementChild)
//     }
//   }
// }

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

// moveDisk first incarnation
// function moveDisk0(e) {
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
