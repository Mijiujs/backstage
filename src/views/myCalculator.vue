<template>
    <div class="myCalculator">
        <div class="body">
            <input class="numInput" type="text" maxlength="16" placeholder="0" v-model="input">

            <div class="func">
                <div class="lineOne">
                    <span class="clear" @click="clearAll">c</span>
                    <span class="plus&minus" @click="changeSgn">+/-</span> 
                    <span class="persentage" @click="getPersentage">%</span>
                    <span class="divide" @click="inputAct('/')">/</span>
                </div>
                <div class="lineTwo">
                    <span class="seven" @click="inputAct(7)">7</span>
                    <span class="eight" @click="inputAct(8)">8</span>
                    <span class="nine" @click="inputAct(9)">9</span>
                    <span class="multiply" @click="inputAct('*')">x</span>
                </div>
                <div class="lineThree">
                    <span class="four" @click="inputAct(4)">4</span>
                    <span class="five" @click="inputAct(5)">5</span>
                    <span class="six" @click="inputAct(6)">6</span>
                    <span class="minus" @click="inputAct('-')">-</span>
                </div>
                <div class="lineFour">
                    <span class="one" @click="inputAct(1)">1</span>
                    <span class="two" @click="inputAct(2)">2</span> 
                    <span class="three" @click="inputAct(3)">3</span>
                    <span class="plus" @click="inputAct('+')">+</span>
                </div>
                <div class="lineFive">
                    <span class="backspace" @click="backSpace">BK</span>
                    <span class="zero" @click="inputAct(0)">0</span> 
                    <span class="dot" @click="inputAct('.')">.</span>
                    <span class="equal" @click="calculate">=</span>
                </div>
            </div>
       

            <!-- <div class="func">
                <div class="lineOne">
                    <span class="clear" @click="clearAll">c</span>
                    <span class="plus&minus" @click="changeSgn">+/-</span>
                    <span class="persentage" @click="getPersentage">%</span>
                    <span class="divide" @click="setDivide">/</span>
                </div>
                <div class="lineTwo">
                    <span class="seven" @click="inputSeven">7</span>
                    <span class="eight" @click="inputEight">8</span>
                    <span class="nine" @click="inputNine">9</span>
                    <span class="multiply" @click="setMultiply">x</span>
                </div>
                <div class="lineThree">
                    <span class="four" @click="inputFour">4</span>
                    <span class="five" @click="inputFive">5</span>
                    <span class="six" @click="inputSix">6</span>
                    <span class="minus" @click="setMinus">-</span>
                </div>
                <div class="lineFour">
                    <span class="one" @click="inputOne">1</span>
                    <span class="two" @click="inputTwo">2</span> 
                    <span class="three" @click="inputThree">3</span>
                    <span class="plus" @click="setPlus">+</span>
                </div>
                <div class="lineFive">
                    <span class="backspace" @click="backSpace">BK</span>
                    <span class="zero" @click="inputZero">0</span> 
                    <span class="dot">.</span>
                    <span class="equal" @click="getEqual">=</span>
                </div>
            </div> -->

        </div>

        <!-- <p>{{ numBox }}</p> -->
    </div>
</template>

<script>

// function inputNum(number){
//     this.number = 
// }
export default{
    data(){
        return{
            input:'',
            isDecimalAdded:false, // 防止连续输入超过一个小数点
            isOperatorAdded:false, // 防止连续输入超过一个运算符号
            isStarted:false, // 判断是否开始输入数字
        }
    },

    methods:{
        clearAll(){
            this.input = '';
            this.isDecimalAdded=false; // 防止连续输入超过一个小数点
            this.isOperatorAdded=false; // 防止连续输入超过一个运算符号
            this.isStarted=false; // 判断是否开始输入数字
        },

        changeSgn(){
            this.input = -(this.input);
        },

        getPersentage(){
            this.input = this.input / 100;
        },

        backSpace(){
            let string = this.input.toString();
            // console.log(string);
            this.input = string.substring(0,string.length - 1);
        },

        isOperator(character){
            // const regex = /[* \- + /]/;
            // return regex.test(character);
            return ['+','-','*','/'].indexOf(character) > -1;

        },

        inputAct(character){
            if(this.input === '' && !this.isOperator(character)){
                if(character === '.'){
                    this.input += '0' + character;
                    this.isDecimalAdded = true;
            } else {
                this.input = '' + character;
            }
            this.isStarted = true;
            return;
        }
        
            //判断输入的是否为数字
            if(!this.isOperator(character)){
                if(character === '.' && this.isDecimalAdded){
                    return;
                }

                if(character === '.' && this.isOperatorAdded){
                    this.input += '0';
                }

                if(character === '.'){
                    this.isDecimalAdded = true;
                    this.isOperatorAdded = true;
                }else{
                    this.isOperatorAdded = false;
                }

                this.input += '' + character;
                // this.isOperatorAdded = false;
            }

            if(this.isOperator(character) && !this.isOperatorAdded){
                // if((character === '+' || character ===  '-' || character ===  '/' || character ===  '*') && this.isOperatorAdded){
                    
                //     return;
                // }  

                // if(character === '+' || character ===  '-' || character ===  '/' || character ===  '*'){
                //  this.isOperatorAdded = true; 
                // }

                this.input += '' + character;
                this.isDecimalAdded = false;
                this.isOperatorAdded = true;
                
            }
        
    },

    calculate(){
    //     const regexNum = /\d+(\.\d+)?/g;
    //     const stack = this.input.match(regexNum);
    //     for(let i = 0; i < stack.length; i++){
    //         stack[i] = parseFloat(stack[i]);
    //     }
    //     console.log(stack);

    //     const regex = /[+\-*/]|\d+(\.\d+)?/g;
    //     const Number = this.input.match(regex);
    //     console.log(Number);
    //     for(let i = 0; i < Number.length; i++){
    //         const char = Number[i];
    //         // console.log(char);
            
    //         if(isNaN(char)){
    //             // console.log(typeof(char));
    //             // stack.push(parseFloat(char));
    //             // // console.log(stack);
    //             const b = stack.pop();
    //             console.log('b是:' + b);
    //             const a = stack.pop();
    //             console.log('a是:' + a);
    //             switch(char){
    //                 case '+':
    //                     stack.push(a + b);
    //                     break;

    //                 case '-':
    //                     stack.push(a - b);
    //                     break;
                    
    //                 case '*':
    //                     stack.push(a * b);
    //                     break;

    //                 case '/':
    //                     stack.push(a / b);
    //                     break;
    //         }
    //         }
    //     }
    //     console.log(stack);
    //     this.input = stack.pop();
    // }


        const regexNum = /\d+(\.\d+)?/g;
        const stack = this.input.match(regexNum);

        for(let i = 0; i < stack.length; i++){

            stack[i] = parseFloat(stack[i]);

        }
        
        const regex = /[+\-*/]/g;
        const Operator = this.input.match(regex);

        for(let i = 0; i < Operator.length; i++){

            if(Operator[i+1] !== undefined && (Operator[i] === '+' || Operator[i] === '-') && (Operator[i+1] === '*' || Operator[i+1] === '/')){

                if(Operator[i] === '+' && Operator[i+1] === '*'){
                    const a = stack.shift();
                    const b = stack.shift();
                    const c = stack.shift();
                    stack.unshift(a + (b * c));
                    i++;
                }else if(Operator[i] === '-' && Operator[i+1] === '*'){
                    const a = stack.shift();
                    const b = stack.shift();
                    const c = stack.shift();
                    stack.unshift(a - (b * c));
                    i++;
                }else if(Operator[i] === '+' && Operator[i+1] === '/'){
                    const a = stack.shift();
                    const b = stack.shift();
                    const c = stack.shift();      
                    stack.unshift(a + (b / c));
                    i++;
                }else{
                    const a = stack.shift();
                    const b = stack.shift();
                    const c = stack.shift();
                    stack.unshift(a - (b / c));
                    console.log(stack);
                    i++;
                }
            }else{
                if(Operator[i] === '*'){
                    const a = stack.shift();
                    const b = stack.shift();

                    stack.unshift(a * b);
                }else if(Operator[i] === '/'){
                    const a = stack.shift();
                    const b = stack.shift();

                    stack.unshift(a / b);
                }else if(Operator[i] === '+'){
                    const a = stack.shift();
                    const b = stack.shift();

                    stack.unshift(a + b);
                    console.log(Operator[i]);
                }else{
                    const a = stack.shift();
                    const b = stack.shift();

                    stack.unshift(a - b);
                }
            }
        }
        console.log(stack);
        this.input = stack.pop();
    }
  }
}
</script>

<style>
.body{
    width: 400px;
    height: 600px;
    margin: auto;
    background-color: #eee;
    border-radius: 5%;
    box-shadow: 10px 10px 5px #888888;
}

/* .el-input{
    width: 200px;
    margin-left: 100px;
    margin-top: 20px;
    box-shadow: 0px 0px 25px #888888;
    text-align: right;
} */

.numInput{
    border-radius: 25px;
    width: 300px;
    height: 50px;
    margin-left: 50px;
    margin-top: 30px;
    box-shadow: 0px 0px 25px #888888;
    text-align: right;
    font-size: 30px;
    border: 1px solid rgb(255, 140, 0);
}

.func{
    width: 350px;
    height: 450px;
    /* background-color: #fff; */
    margin: 35px 25px 0px 25px;

}

.func div{
    margin-top: 32px;
}

.lineOne .persentage{
        margin-left: 18px;
}

.func span{
    display: inline-block;
    width: 60px;
    height: 60px;
    margin: 0px 0px 0px 22px;
    background-color: rgb(192, 189, 189,0.8);
    text-align: center;
    border-radius: 30px;
    line-height: 60px;
    font-size: 20px;
    color: rgb(255, 140, 0);
    box-shadow: 3px 3px 10px #888888;
    text-shadow: 3px 3px 5px #f6976b;
}

.func span:hover{
    background-color: #fff;
    cursor:pointer;
}

</style>