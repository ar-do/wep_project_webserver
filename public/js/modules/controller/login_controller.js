import * as Config from '../config.js';
import * as Helper from '../helper.js';

if(window.location.href.includes('/login') == true)
{
    const login_btn = document.getElementById("btn_submitCred");

    login_btn.addEventListener('click', () => {
        submitInput();
    });

    // Validate the Login
    function validateUserLogin(inputData){

        let returnMsg = ""
        let errorHandlingobj = document.getElementById("errorHandling");

        const newUrl = Config.baseurl_user + "/un?user=" + inputData[0];
        const hashedPW = hashPassword(inputData[1]);
        Helper.httpGet(newUrl).then((response) => {      
            if(response.length != 0 && inputData[0] == response[0].user_username && hashedPW == response[0].user_pwhash){
                document.cookie = "session=" + "username:" + response[0].user_username + "," + "password:" + response[0].user_pwhash + "," + "userid:" + response[0].user_id;  
                location.href = window.location.origin;
                return false;

            }else{
                returnMsg = "Anmeldung fehlgeschlagen";
                errorHandlingobj.innerText = returnMsg;
            
            }
        });
    }

    function hashPassword(password){
        let hash_pw_array = [];
        for (let i = 0; i < password.length; i++){
            hash_pw_array[i] = password.charCodeAt(i) * Config.key;
        }
        const hash_pw = hash_pw_array.join('');
        return hash_pw;
    }

    // Checks if the Input has the right format and forwards it to the Validation Funciton
    function submitInput(){
        let input_userdata = [];
        input_userdata[0] = document.getElementById("ipt_UsernameLogin").value;
        input_userdata[1] = document.getElementById("ipt_PasswordLogin").value;
        validateUserLogin(input_userdata);
    }

}