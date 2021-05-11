
//Add Tasks
class tasks {
    constructor() {
        //Selectors
        this.addBtn = document.querySelector("#add");
        this.todayList = document.querySelector(".todayList");
        this.userInput = document.querySelector("#todayNew");
        this.completedList = document.querySelector(".completedList");
        this.warns = document.querySelector(".warnMsg");
    }

    //Warn Messege
    warnMsg() {
        this.warns.style.display = 'block';
        this.userInput.style.border = '1px solid red'
    }


    doIt() {

        //Creat Structure
        let newList = document.createElement('li');
        let listP = document.createElement('label');
        let deleted = document.createElement('span');
        let check = document.createElement('span');
        let deletedText = document.createElement('i')
        let checkDone = document.createTextNode('Complete')
        deleted.appendChild(deletedText);
        deletedText.classList.add('fas');
        deletedText.classList.add('fa-trash');
        check.appendChild(checkDone);
        check.classList.add('doneBtn');
        deleted.classList.add('deleteBtn');
        
        // Add Tasks
        let listcontent = document.createTextNode(this.userInput.value)
        listP.appendChild(listcontent);
        newList.appendChild(listP);
        newList.appendChild(deleted);
        newList.appendChild(check);
        this.todayList.appendChild(newList);

        // Delete Tasks
        deleted.addEventListener('click', function () {
            deleted.parentElement.remove();
        })

        deleted.addEventListener("mouseover", func, false);
        deleted.addEventListener("mouseout", func1, false);

        function func() {
            newList.setAttribute("style", "border:1px solid red;")
            deletedText.classList.add('iHover')
        }
        function func1() {
            newList.setAttribute("style", "border:1px solid rgba(117, 117, 117,.0);")
            deletedText.classList.remove('iHover')
        }


        //Complete Tasks
        check.addEventListener('click', function () {
            if (newList.classList.contains('done')) {
                // check.parentElement.remove();
                // this.todayList.appendChild(newList);
                check.innerHTML = 'Complete'
            }
            else {
                // check.parentElement.remove();
                // this.completedList.appendChild(newList);
                check.innerHTML = 'Redo';
            }

            newList.classList.toggle('done')
            newList.classList.toggle('finished')
            check.classList.toggle('doneBtn');
            check.classList.toggle('redoBtn')
        })

    }


}
//---------------------------------------------------------------------------------


//Creating Object
mytest = new tasks()

mytest.userInput.addEventListener('keypress', function () {
    mytest.warns.style.display = 'none';
    mytest.userInput.style.border = '0px solid red'
})

mytest.userInput.addEventListener('keypress', function (e) {
    if (mytest.userInput.value == '' && e.key === 'Enter') {
        mytest.warnMsg()
    }
    else if (e.key === 'Enter') {
        mytest.doIt()
        mytest.userInput.value = '';
    } else {
        return
    }

})

mytest.addBtn.addEventListener('click', function () {
    if (mytest.userInput.value == '') {
        mytest.warnMsg()
    }
    else {
        mytest.doIt();
        mytest.userInput.value = '';
    }
})