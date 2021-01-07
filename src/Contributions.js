import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';

const api = {
  baseUrl:'https://api.github.com/',
   client_id: 'Iv1.7aeb7a93537e01d2',
  client_secrets:'afc0a54a97ade3c558da8266a591bcbd788ca932'
}

class contributions extends Component {
    constructor(){
      super();
      this.state={
        githubData : []
       
      }
    }

    componentDidMount(){
        axios
          .get(api.baseUrl+'repos/CyC2018/CS-Notes/contributors')
          .then((res)=>{
            console.log(res);
            this.setState({githubData: res.data})
          })
    }

  render(){
    const {githubData} = this.state;
    return (
      <div className="App">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <svg class="octicon octicon-mark-github v-align-middle" height="34" viewBox="0 0 16 16" version="1.1" width="130" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>      
                        <a className="navbar-brand" href="/">Api github</a>
                        </nav>
                   <h1 className="title-contrListagem text-center">Listagem de Contributions</h1>
           {githubData.map(name=>{
              if(name.contributions > 100 ){
                return(
                  <div className="dados-contribuicoes">
                     <h3 className="text-center acima-100">Acima de 100 contribuições:</h3>
                        <div className="listagem-cards-contri">
                            <div className="card">
                                <img  className="img-user-git img-responsive" src={name.avatar_url}/>
                                <div className="card-body">
                                    <p>Total de : {name.contributions} contribuições</p>
                                    <p>Login: {name.login}</p>
                                    <p>Id do usuário: {name.id}</p>
                                    <p>Url: {name.url}</p>
                                    
                                </div>
                            </div>
                        </div>
                        
                       
                  
                  </div>
                )
              } else if(name.contributions > 200 ){
                  return(
                    <div className="dados-contribuicoes">
                    <h3 className="text-center acima-100">Acima de 200 contribuições:</h3>
                       <div className="listagem-cards-contri">
                           <div className="card">
                               <img  className="img-user-git img-responsive" src={name.avatar_url}/>
                               <div className="card-body">
                                   <p>Total de : {name.contributions} contribuições</p>
                                   <p>Login: {name.login}</p>
                                   <p>Id do usuário: {name.id}</p>
                                   <p>Url: {name.url}</p>
                                   
                               </div>
                           </div>
                       </div>
                       
                      
                 
                 </div>
                  )
              }else if(name.contributions > 500 ){
                return(
                  <div className="dados-contribuicoes">
                  <h3 className="text-center acima-100">Acima de 500 contribuições:</h3>
                     <div className="listagem-cards-contri">
                         <div className="card">
                             <img  className="img-user-git img-responsive" src={name.avatar_url}/>
                             <div className="card-body">
                                 <p>Total de : {name.contributions} contribuições</p>
                                 <p>Login: {name.login}</p>
                                 <p>Id do usuário: {name.id}</p>
                                 <p>Url: {name.url}</p>
                                 
                             </div>
                         </div>
                     </div>
                     
                    
               
               </div>
                )
            }

           })
  }
      
        
        
        
      </div>
   
    )}}
 


export default contributions;


