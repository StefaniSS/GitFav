import { GithubUser } from "./GithubUser.js"

// Classe que vai conter a lógica dos dados
// Como os dados serão estruturados 
export class Favorites{ 
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {
            const userExists = this.entries.find(entry => entry.login === username)

            if(userExists) {
                throw new Error('Usuário já cadastrado')
            }

            const user = await GithubUser.search(username)
            
            if(user.login === undefined) { 
                throw new Error('Usuário não encontrado!')
            } 
            this.entries = [user, ...this.entries]
            this.update()
            this.save()

        } catch(error) {
            alert(error.message)
        }
    }
    
    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        this.save()
    }
}

// Classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const {value} = this.root.querySelector('.search input')
            this.add(value)
        }
    }

    update() {
        this.removeAllTr()

        if (this.entries.length === 0) {
            const emptyRow = this.createEmptyRow()
            this.tbody.append(emptyRow)
        } else {
            this.entries.forEach(user => {
                const row = this.createRow()
                
                row.querySelector('.user img').src = `https://github.com/${user.login}.png`
                row.querySelector('.user img').alt = `imagem de ${user.name}`
                row.querySelector('.user a').href = `https://github.com/${user.login}`
                row.querySelector('.user p').textContent = user.name
                row.querySelector('.user span').textContent = user.login
                row.querySelector('.repositories').textContent = user.public_repos
                row.querySelector('.followers').textContent = user.followers

                row.querySelector('.remove').onclick = () => {
                    const isOk = confirm('Tem certeza que deseja deletar essa linha?')
                    if(isOk) {
                        this.delete(user)
                    }
                }

                this.tbody.append(row)
            })
        }
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = 
        `
            <td class="user">
                <img src="https://github.com/StefaniSS.png" alt="Imagem de Stefani">
                <a href="https://github.com/StefaniSS" target="_blank">
                    <p>Stefani Silva</p>
                    <span>StefaniSS</span>
                </a>
            </td>
            <td class="repositories">
                15
            </td>
            <td class="followers">
                0
            </td>
            <td>
                <button class="remove">Remover</button>
            </td> 
        `
        return tr
    }

    createEmptyRow() {
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        td.setAttribute('colspan', 4)
        td.classList.add('empty-message')

        const img = document.createElement('img')
        img.src = './assets/Estrela.svg' // Substitua pela URL da sua imagem
        img.alt = 'Imagem de uma estrela'

        const message = document.createElement('span')
        message.textContent = "Nenhum favorito ainda"

        td.appendChild(img)
        td.appendChild(message)
        tr.appendChild(td)

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })
    }
}


