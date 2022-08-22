import MessageReducer from "./MessageReducer";
import ProfileReducer from "./ProfileReducer";

debugger

const store={
    
    _render(){
    },
    _state:{
        Profile:{
            PostData:[
                {
                    id:"1",
                    message:"value",
                },
                {
                    id:"2",
                    message:"The Bolshoi Theatre is a historic theatre in Moscow, Russia, originally designed by architect Joseph Bové, which holds ballet and opera performances.Before the October Revolution it was a part of the Imperial Theatres of the Russian Empire along with Maly Theatre in Moscow and a few theatres in Saint Petersburg."
                },
                {
                    id:"3",
                    message:"Yeee"
                },
                {
                    id:"4",
                    message:"Урааааааааааааааа"
                }
            ],
            value:"Profile"
        },
        Message:{
            UsersData:[
                {
                    id:"1",
                    name:"Иван"
                },
                {
                    id:"2",
                    name:"Петя"
                },
                {
                    id:"3",
                    name:"Максим"
                },
                {
                    id:"4",
                    name:"Кирилл"
                }
                  
                ],
            DialogsData:[
                {
                    message:"Привет, я Иван"
                },
                {
                    message:"Привет, я Петя"
                },
                {
                    message:"Привет, я Максиим"
                },
                {
                    message:"Привет, я Кирилл"
                }
            ],
            value:"Message"
        },
    },
    GetState(){
        return this._state
    },

    despatch(action){//action - object {type:}
        debugger
        this._state.Profile=ProfileReducer(this._state.Profile,action);
        this._state.Message=MessageReducer(this._state.Message,action);
        this._render();
    },

    subscribe(observer){
        this._render=observer;
    }
}




export default store;