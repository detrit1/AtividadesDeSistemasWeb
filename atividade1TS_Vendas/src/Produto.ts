export default class Produto{
    private _codigo : number;
    private _descicao : string;
    private _valor : number;
    constructor(codigo : number, descricao : string, valor : number){
        this._codigo = codigo;
        this._descicao = descricao;
        this._valor = valor;
    }

    public get codigo() : number{
        return this._codigo;
    }

    public get descricao() : string{
        return this._descicao;
    }
    
    public get valor() : number{
        return this._valor;
    }

    public set codigo(codigo : number){
        this._codigo = codigo;
    }

    public set descricao(descricao : string){
        this._descicao = descricao;
    }
    
    public set valor(valor : number){
        this._valor = valor;
    }
}

