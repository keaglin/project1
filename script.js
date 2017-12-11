// console.log('hello world')

var disks = document.getElementsByTagName('div')
// var self
for (var i = 0; i < disks.length; i++) {
  // self = this.self
  disks[i].addEventListener('click', moveDisk)
}

function moveDisk(e) {
  // we want to get the parent of the disk being moved to present relevant options on where it can be moved next
  // we want to allow the user to move this disk to another post but only if
    // 1) it's the top disk on its own post
    // 2) the disk isn't bigger than the one on the target post
    // 3) the post the user wants to move it to isn't the one it's currently on
  if (e.target.parentNode.firstElementChild.dataset.id === e.srcElement.dataset.id) {
      // for now, let's "move" a disk when clicked
    var parent = e.target.parentNode
    document.body.childNodes[5].childNodes[3].insertBefore(e.target, document.body.childNodes[5].childNodes[3].firstElementChild);
    console.log('disk moved')
    console.log(e)
  }
}

// e.toElement.dataset.id contains the data-id we assigned so that's one way to keep track of what's clicked
// .srcElement.dataset.id contains the same
// .srcElement.parentElement and .srcElement.parentNode contain the parent element/node info
// .target.parentElement and .target.parentNode also contain the parent element/node info
