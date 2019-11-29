import React from 'react';
import './/style.css'

class Semaforo extends React.Component {

    constructor(porps) {
        super(porps);
        this.state = {
            semaforo:null
        };
    }

ficaAmarelo = () => {
    this.setState({
        semaforo: 'amarelo'
    })
}
ficarVerde = () => {
    this.setState({
        semaforo: 'verde'
    })
}
ficarVermelho = () => {
    this.setState({
        semaforo: 'vermelho'
    })
}
render() {
    return(
        <div className="App">
            <p>{this.state.semaforo}</p>
            <button onClick={this.ficarAmarelo}>Amarelo</button>
            <button onClick={this.ficarVerde}>Verde</button>
            <button onClick={this.ficarVermelho}>Vermelho</button>
        </div>
    )
}
}
export default Semaforo;