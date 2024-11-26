import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/DbConfig.js';


//Variável criada para guardar os dados das credenciais do banco de dados pegas pela variavel de ambiente criada.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);



export async function getTodosPosts(){
    //variavel criada para guardar o nome do banco de dados
    const db = conexao.db('imersao-instabytes');

    //variavel criada para guardar o nome da coleção(Tabela) do banco de dados
    const colecao = db.collection('posts');

    //Retorno da função, no qual converte os dados em array
    return colecao.find().toArray();
}

export async function criarPost(novoPost){

    //variavel criada para guardar o nome do banco de dados
    const db = conexao.db('imersao-instabytes');

    //variavel criada para guardar o nome da coleção(Tabela) do banco de dados
    const colecao = db.collection('posts');

    //Retorno da função, no qual converte os dados em array
    return colecao.insertOne(novoPost);

}


export async function atualizarPost(id,novoPost){

    
    const db = conexao.db('imersao-instabytes');

    
    const colecao = db.collection('posts');

    const objID = ObjectId.createFromHexString(id);

    
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});

}