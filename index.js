let homeCount = 0
let visitorCount = 0


let homeEl = document.getElementById("home-el")
let visitorEl = document.getElementById("visitor-el")

function addOne() {
    console.log("button clicked")
   homeCount += 1
   homeEl.textContent = homeCount
}

function addTwo() {
    console.log("button clicked")
      homeCount += 2
   homeEl.textContent = homeCount
}

function addThree() {
    console.log("button clicked")
      homeCount += 3
   homeEl.textContent = homeCount
}

// Guest Function

function plusOne() {
    console.log("button clicked")
     visitorCount += 1
   visitorEl.textContent = visitorCount
}

function plusTwo() {
    console.log("button clicked")
     visitorCount += 2
   visitorEl.textContent = visitorCount
}

function plusThree() {
    console.log("button clicked")
     visitorCount += 3
   visitorEl.textContent = visitorCount
}