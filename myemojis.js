// My emojis App 



let myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unShiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

// Render Function 


function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i] + " "
        emojiContainer.append(emoji)
        
   }
        
}

renderEmojis()


// Add to End  BTN 


pushBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }    
           
})

// Add to Beginning BTN 


unShiftBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }    
           
})

// Remove from End BTN 


popBtn.addEventListener("click", function () {
        myEmojis.pop(emojiInput.value)
        renderEmojis()

           
})


// Remove from beginning BTN 


shiftBtn.addEventListener("click", function () {
        myEmojis.shift(emojiInput.value)
        renderEmojis()
 
})




