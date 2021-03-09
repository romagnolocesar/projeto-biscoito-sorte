import React, {Component} from 'react';
import './estilo.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        }
        this.frases = [
            'A vida trará coisas boas se tiver paciência.',
            'Não compense na ira o que lhe falta na razão.',
            'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
            'Uma bela flor é incompleta sem as suas folhas.',
            'Quem olha para fora sonha; quem olha para dentro acorda.',
            'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',
            'Você é do tamanho do seu sonho.',
            'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
            'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.',
            'A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!',
            'Você sempre será a sua melhor companhia!',
            'Realize o óbvio, pense no improvável e conquiste o impossível.'
        ];

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
        this.setState(state);
        
    }

    render(){
        return(
            <div className="container">
                <img className="img" src={ require('./assets/biscoito.png').default} alt="Biscoito da Sorte"/>
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}

export default App