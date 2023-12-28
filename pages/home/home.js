const columnsField = {
    ulBacklog: () => document.getElementById('ulBacklog'),
    ulDoing: () => document.getElementById('ulDoing'),
    ulReview: () => document.getElementById('ulReview'),
    ulDone: () => document.getElementById('ulDone')
}
const elements = {
    backlogBtn: () => document.getElementById('backlogNewCardBtn'),
    doingBtn: () => document.getElementById('doingNewCardBtn'),
    reviewBtn: () => document.getElementById('reviewNewCardBtn'),
    doneBtn: () => document.getElementById('doneNewCardBtn'),
}
    

function logout() {
    showLoading()
    generalService.logout().then(() => {
        hideLoading()
        window.location.href = "../../index.html"
    }).catch(error => {
        hideLoading()
        console.log(error)
        alert("Erro ao deslogar.")
    })
}


function isNewCard(card) {
    if (document.getElementById(card.uid) == null) return true
    
    return false
}


function isColumnChanged(card) {
    if (card.column != document.getElementById(card.uid).dataset.column) return true
    return false
}


function isDropColumnChanged(cardHTML) {
    console.log(cardHTML.parentNode.parentNode.id == cardHTML.dataset.column)
    if (cardHTML.dataset.column != cardHTML.parentNode.parentNode.id) return true
    return false
}


function saveDropChanges(cardHTML) {
    if (isDropColumnChanged(cardHTML)) {
        // Coluna mudou, salvar mudança de coluna
        cardService.updateColumn(cardHTML)
        .catch(error => {
            alert("Erro ao salvar alterações no quadro.")
            console.log(error)
        })
        cardHTML.dataset.column = cardHTML.parentNode.parentNode.id

        // Verificar em qual linha o card foi colocado
    }
    else {
        // Se a coluna nao mudou, verificar se a linha mudou
    }
}