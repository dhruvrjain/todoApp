var input = document.querySelector('input')
var add = document.getElementById('add')
var tasks = document.querySelector('.tasks-container')
var tasksList = document.querySelectorAll('.task')
tasks.innerHTML = window.localStorage.getItem('tasks');

tasks.addEventListener('click', function (e) {
    if (e.target.classList.contains('check')) {
        e.target.parentElement.parentElement.firstChild.classList.toggle('strike');
    }
    else if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove()
    }
    window.localStorage.setItem('tasks', tasks.innerHTML)
})

add.addEventListener('click', function () {
    if (input.value === "") {
        window.alert("Please enter the task before adding");
    }
    else {
        var task = document.createElement('div');
        var span = document.createElement('span');
        var btn = document.createElement('div');

        span.innerText = input.value;
        input.value = ""

        var check = document.createElement('button')
        check.innerHTML = `&#10003;`;

        var remove = document.createElement('button')
        remove.innerHTML = "X";

        btn.appendChild(check);
        btn.appendChild(remove);

        task.appendChild(span);
        task.appendChild(btn);

        check.classList.add('btn')
        check.classList.add('check')
        remove.classList.add('btn')
        remove.classList.add('remove')
        btn.classList.add('btn-wrap')
        task.classList.add('task')

        tasks.appendChild(task)

        window.localStorage.setItem('tasks', tasks.innerHTML)
    }
})
