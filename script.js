// {
// id: number,
// title: string,
// amount: number,
// category: string
// }
let expenseTracker = {
expenses: [],
selectAction(){
    do{
    act = prompt("Введите функцию, которую хотите выполнить: 1-Добавить расход, 2-Вывести все расходы, 3-Получить сумму всех расходов, 4-Получить расходы под категорией, 5-Найти расход под именем, 6-Удалить расход под ID, 7-Показать статистику категории. 0 - Выйти")
    switch(act){
        case "1":
            title = prompt("Название расхода: ")
            amount = prompt("Количество: ")
            category = prompt("Категория: ")
            amount = Number.parseFloat(amount)
            if (!Number.isNaN(amount)){
                this.addexpense(title, amount, category)
            }else{
                console.log("Неверное число!")
            }
            break
        case "2":
            this.printallexpenses()
            break
        case "3":
            this.GetTotalAmount()
            break
        case "4":
            cat = prompt("Введите категорию: ")
            this.GetExpenseCategory(cat)
            break
        case "5":
            titl = prompt("Введите название расхода: ")
            this.FindExpenseByTitle(titl)
            break
        case "6":
            id = prompt("Введите ID расхода: ")
            id = Number.parseInt(id)
            if (Number.isNaN(id)){
                console.log("Неверный ввод!")
            }else{
                this.deleteExpenseByID(id)
            }
            this.deleteExpenseByID(id)
            break
        case "7":
            this.showCategoryStats()
            break
        case "0":
            console.log()
            break
        default:
            console.log("Неверный ввод!")
    }
    } while(act != "0")
},
addexpense(title, amount, category){
    this.expenses.push({id: this.expenses.length, title: title, amount: amount, category: category})
    console.log("Добавлен расход ", title)
},
printallexpenses(){
    console.log("Все расходы:")
    for (i=0; i<this.expenses.length; i++){
        console.log(this.expenses[i])
    }
},
GetTotalAmount(){
    let total = 0;
    for (i=0; i<this.expenses.length; i++){
        total += this.expenses[i].amount
    }
    console.log("Всего: ", total)
},
GetExpenseCategory(category){
    console.log("Расходы под категорией ", category, ":", this.expenses.filter(exp => exp.category == category))
},
FindExpenseByTitle(title){
    console.log("Расход под названием ", title, ": ", this.expenses.filter(exp => exp.title == title))
},
deleteExpenseByID(ID){
    this.expenses.splice(this.expenses.indexOf(this.expenses.find(exp => exp.ID=ID)), 1)
    console.log("Удален элемент под индексом ", ID)
},
showCategoryStats(){
    categories = []
    for (i=0; i<this.expenses.length; i++){
        if (categories.indexOf(this.expenses[i].category) == -1){
            categories.push(this.expenses[i].category)
        }
    }
    for (i=0; i<categories.length; i++){
        let catArray = this.expenses.filter(exp => exp.category == categories[i])
        total = 0
            for (i2=0; i2<catArray.length; i2++){
                total += catArray[i2].amount
            }
        console.log(`${catArray[0].category}: ${total}`)
    }
}
}

let tracker = expenseTracker

expenseTracker.selectAction()


