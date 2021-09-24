import React, { Component } from 'react';


class GameNarration extends Component{
render() {

 let player; 
 if (this.props.game.currentPlayer === 0){
     player = "Vegeta";
 }   else if (this.props.game.currentPlayer === 1){
     player = "AllMight";
 }   else if (this.props.game.currentPlayer === 2){
     player = "Alex Armstrong";
 }   else {
     player = "Piccolo";
 }
     
 let winner;
 if (this.props.game.winner === true){
     winner = "Player Won";
 }else {
     winner = "";
 }

 let drawCard = [];
 if (this.props.game.cardPlayed === null){
     drawCard = "Card Was Drawn";
 } else {
     drawCard = "";
 }

    let pages = []
 if (this.props.initial){
     pages.push(<p>
         Game is Starting
     </p>)
 }



 console.log(this.props.game)
 return (<div>
     <p>
         {this.props.game.currentPlayer}
     </p>
     {pages}
 </div>)



}   



}

export default GameNarration;