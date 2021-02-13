import React, {Component} from 'react';
import './ApiProgamador.css';


//https://sujeitoprogramador.com/rn-api/?api=posts



class index extends Component{ 
      constructor(props){
        super(props);
        this.state={
             array:[],
        }
      }
      
 componentDidMount(){
   let url="https:sujeitoprogramador.com/rn-api/?api=posts"
   fetch(url)
   .then((r)=>r.json())
   .then((json)=>{
       let estado = this.state;
       estado.array = json;
       this.setState(estado);
       console.log(json);
   })

 }     
      
      render(){
        return(
          <div className="container">
            <header className="nutri">
               Nutri
            </header>
            {this.state.array.map((item)=>{ // a div eta antes da funçaõ.
               return(
                   <article key="id" className="artigo">
                   <strong className="titulo">{item.titulo}</strong>
                   <img src={item.capa} className="imagem"/>
                    <p className="subtitulo">{item.subtitulo}</p>
                   <a href={""} className="categoria">{item.categoria}</a>
                   </article>
               );
            })}
          </div>
        );

      }
}      
export default index;