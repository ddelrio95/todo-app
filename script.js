function addItem(event) {
    event.preventDefault()
    console.log(event)
    let text = document.getElementById('todo-input')
    console.log(text.value)
}