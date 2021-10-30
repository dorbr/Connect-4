class Model{
    #board;
    constructor(){
        this.#board = [];
        this.lastTurnPlayed = undefined;
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                this.#board.push({
                    row:i,
                    colomn:j,
                    color: undefined
                });
            }
        }
    console.log(this.#board);
    }
    playMove(color, id){
        let idArray =id.split(" ");
        this.#board.forEach(block => {
            if(block.row === Number(idArray[0]) && block.colomn === Number(idArray[1]) && block.color === undefined){
                block.color = color;
                this.checkWin(block);
            }
        });
    }
    checkWin(lastMove){
        if( 
        this.checkHorizontalRight(lastMove) ||
        this.checkHorizontalLeft(lastMove) ||
        this.checkVerticalUp(lastMove) ||
        this.checkVerticalDown(lastMove) ||
        this.checkFirstDiagonal(lastMove) ||
        this.checkSecondDiagonal(lastMove) ||
        this.checkThirdDiagonal(lastMove) ||
        this.checkFourthDiagonal(lastMove)
        ){
            setTimeout( function(){
                alert(lastMove.color + "Wins");
                window.location.reload();
            }, 100);

            
        }
    }
    checkHorizontalRight(lastMove){
        let firstRight = this.#board.find(element => {
            if(element.row === lastMove.row){
                if(element.colomn === lastMove.colomn + 1){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        let secondRight = this.#board.find(element => {
            if(element.row === lastMove.row){
                if(element.colomn === lastMove.colomn + 2){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        let thirdRight = this.#board.find(element => {
            if(element.row === lastMove.row){
                if(element.colomn === lastMove.colomn + 3){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        if(firstRight !== undefined && secondRight !== undefined && thirdRight !== undefined){
            return true
        }
        else return false;
    }
    checkHorizontalLeft(lastMove){
        let firstRight = this.#board.find(element => {
            if(element.row === lastMove.row){
                if(element.colomn === lastMove.colomn - 1){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        
        let secondRight = this.#board.find(element => {
            if(element.row === lastMove.row){
                if(element.colomn === lastMove.colomn - 2){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        let thirdRight = this.#board.find(element => {
            if(element.row === lastMove.row){
                if(element.colomn === lastMove.colomn - 3){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        if(firstRight !== undefined && secondRight !== undefined && thirdRight !== undefined){
            return true
        }
        else return false;
    }
    checkVerticalUp(lastMove){
        let firstRight = this.#board.find(element => {
            if(element.row === lastMove.row + 1){
                if(element.colomn === lastMove.colomn){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        
        let secondRight = this.#board.find(element => {
            if(element.row === lastMove.row + 2){
                if(element.colomn === lastMove.colomn){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        let thirdRight = this.#board.find(element => {
            if(element.row === lastMove.row + 3){
                if(element.colomn === lastMove.colomn){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        if(firstRight !== undefined && secondRight !== undefined && thirdRight !== undefined){
            return true
        }
        else return false;
    }
    checkVerticalDown(lastMove){
        let firstRight = this.#board.find(element => {
            if(element.row === lastMove.row - 1){
                if(element.colomn === lastMove.colomn){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        
        let secondRight = this.#board.find(element => {
            if(element.row === lastMove.row - 2){
                if(element.colomn === lastMove.colomn){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        let thirdRight = this.#board.find(element => {
            if(element.row === lastMove.row - 3){
                if(element.colomn === lastMove.colomn){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        if(firstRight !== undefined && secondRight !== undefined && thirdRight !== undefined){
            return true
        }
        else return false;
    }
    checkFirstDiagonal(lastMove){
        let firstRight = this.#board.find(element => {
            if(element.row === lastMove.row - 1){
                if(element.colomn === lastMove.colomn - 1){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        console.log(firstRight);
        let secondRight = this.#board.find(element => {
            if(element.row === lastMove.row - 2){
                if(element.colomn === lastMove.colomn - 2){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        let thirdRight = this.#board.find(element => {
            if(element.row === lastMove.row - 3){
                if(element.colomn === lastMove.colomn - 3){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        if(firstRight !== undefined && secondRight !== undefined && thirdRight !== undefined){
            return true
        }
        else return false;
    }
    checkSecondDiagonal(lastMove){
        let firstRight = this.#board.find(element => {
            if(element.row === lastMove.row + 1){
                if(element.colomn === lastMove.colomn - 1){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        console.log(firstRight);
        let secondRight = this.#board.find(element => {
            if(element.row === lastMove.row + 2){
                if(element.colomn === lastMove.colomn - 2){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        let thirdRight = this.#board.find(element => {
            if(element.row === lastMove.row + 3){
                if(element.colomn === lastMove.colomn - 3){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        if(firstRight !== undefined && secondRight !== undefined && thirdRight !== undefined){
            return true
        }
        else return false;
    }
    checkThirdDiagonal(lastMove){
        let firstRight = this.#board.find(element => {
            if(element.row === lastMove.row + 1){
                if(element.colomn === lastMove.colomn + 1){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        console.log(firstRight);
        let secondRight = this.#board.find(element => {
            if(element.row === lastMove.row + 2){
                if(element.colomn === lastMove.colomn + 2){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        let thirdRight = this.#board.find(element => {
            if(element.row === lastMove.row + 3){
                if(element.colomn === lastMove.colomn + 3){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        if(firstRight !== undefined && secondRight !== undefined && thirdRight !== undefined){
            return true
        }
        else return false;
    }
    checkFourthDiagonal(lastMove){
        let firstRight = this.#board.find(element => {
            if(element.row === lastMove.row + 1){
                if(element.colomn === lastMove.colomn - 1){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        console.log(firstRight);
        let secondRight = this.#board.find(element => {
            if(element.row === lastMove.row + 2){
                if(element.colomn === lastMove.colomn - 2){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        let thirdRight = this.#board.find(element => {
            if(element.row === lastMove.row + 3){
                if(element.colomn === lastMove.colomn - 3){
                    if(element.color === lastMove.color){
                        return element;
                    }
                }
            }
        });
        if(firstRight !== undefined && secondRight !== undefined && thirdRight !== undefined){
            return true
        }
        else return false;
    }
}
class View{
    constructor(){
        this.app = this.getElement("#root");
        for (let i = 0; i < 7; i++) {
            this.row = this.createElement("div", "row");
            this.app.append(this.row);
            for (let j = 0; j < 7; j++) {
                let block = this.createElement("div", "block");
                block.id = i + " " + j;
                this.row.append(block);
            }
        }
    }

    hundleClicked(hundleClicked, playerTurn, playMove){
        this.app.addEventListener("click", (e) => {
            let colmnIDsArray = hundleClicked(e);
            console.log(colmnIDsArray);
            let found = undefined;
            colmnIDsArray.forEach(id => {
                if((document.getElementById(id).classList.contains("Red") === false && document.getElementById(id).classList.contains("Yellow") === false) && found === undefined){
                    console.log(id);
                    found = id;
                }
            });
            if(found !== undefined){
                let player = playerTurn();
                document.getElementById(found).classList.add(player);
                playMove(player, found)
            }
        });
        
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
    
        if (className) element.classList.add(className);
    
        return element;
    }
    
    getElement(selector) {
        const element = document.querySelector(selector);
    
        return element;
    }
}
class Controller{
    #model;
    #view;
    constructor(model, view){
        this.#model = model;
        this.#view = view;
        this.#view.hundleClicked(this.#hundleClicked, this.#playerTurn, this.#playMove);
    }
    #hundleClicked = (e) => {
        let colmnIDs = [];
        let colmnID;
        let colmn = e.target.id.split(" ")[1];
        for (let i = 6; i >= 0; i--) {
            colmnID = i + " " + colmn;
            colmnIDs.push(colmnID);
        }   
        return colmnIDs;        
    };
    #playerTurn = () => {
        if(this.#model.lastTurnPlayed === undefined){
            this.#model.lastTurnPlayed = "Red";
            return this.#model.lastTurnPlayed;
        }
        else if(this.#model.lastTurnPlayed === "Red"){
            this.#model.lastTurnPlayed = "Yellow";
            return this.#model.lastTurnPlayed;
        }
        else if(this.#model.lastTurnPlayed === "Yellow"){
            this.#model.lastTurnPlayed = "Red";
            return this.#model.lastTurnPlayed;
        }
    };
    #playMove = (color, id) => {
        this.#model.playMove(color, id);
    }
}
const app = new Controller(new Model(), new View());
