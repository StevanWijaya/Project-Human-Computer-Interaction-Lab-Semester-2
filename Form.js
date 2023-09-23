function validate (event) {
    
    let username = document.getElementById('username')
        let username_err_msg = document.getElementById('form-err-msg-username')
        username_err_msg.classList.remove('form-warning-msg-active');
        username.classList.remove('form-input-highlighted')
        
    let full_name = document.getElementById('full-name')
        let full_name_err_msg = document.getElementById('form-err-msg-full-name')
        full_name_err_msg.classList.remove('form-warning-msg-active');
        full_name.classList.remove('form-input-highlighted')
        
    let account = document.getElementById('account')
        let account_err_msg = document.getElementById('form-err-msg-account')
        account_err_msg.classList.remove('form-warning-msg-active');
        account.classList.remove('form-input-highlighted')
        
    let password = document.getElementById('password')
        let password_err_msg = document.getElementById('form-err-msg-password')
        password_err_msg.classList.remove('form-warning-msg-active');
        password.classList.remove('form-input-highlighted')
        
    let countries = document.getElementById('countries');
        let countries_err_msg = document.getElementById('form-err-msg-country');
        countries_err_msg.classList.remove('form-warning-msg-active');
        countries.classList.remove('form-input-highlighted');
    
    /* ============================================================================= */
    
    let flag = false;
    
    if ( username.value.length < 8 ) {
        event.preventDefault(); flag = true;
        username_err_msg.classList.add('form-warning-msg-active');
        username.classList.add('form-input-highlighted')
    }
    
    if ( full_name.value.length < 8 ) {
        event.preventDefault(); flag = true;
        full_name_err_msg.classList.add('form-warning-msg-active');
        full_name.classList.add('form-input-highlighted')
    }
    
    if ( !account.value.endsWith('@adex.com') ) {
        event.preventDefault(); flag = true;
        account_err_msg.classList.add('form-warning-msg-active');
        account.classList.add('form-input-highlighted')
    }
    
    /* No regex? I'll do it my way. */
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
                     
    const uppercases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                        'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    const lowercases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                        'u', 'v', 'w', 'x', 'y', 'z'];
    
    let i = 0;
    let number_pass = false;
    let uppercase_pass = false;
    let lowercase_pass = false;
    
    for (i; i < numbers.length; i++) {
        if ( password.value.indexOf(numbers[i]) != -1 ) {
            number_pass = true;
        }
    }
    
    for (i = 0; i < uppercases.length; i++) {
        if ( password.value.indexOf(uppercases[i]) != -1 ) {
            uppercase_pass = true;
        }
        
        if ( password.value.indexOf(lowercases[i]) != -1 ) {
            lowercase_pass = true;
        }
    }
    
    if ( !(number_pass && uppercase_pass && lowercase_pass) || password.value.length < 6 ) {
        event.preventDefault(); flag = true;
        password_err_msg.classList.add('form-warning-msg-active');
        password.classList.add('form-input-highlighted')
    }
    
    if ( countries.value <= 0 || countries.value > 6 ) {
        event.preventDefault(); flag = true;
        countries_err_msg.classList.add('form-warning-msg-active');
        countries.classList.add('form-input-highlighted');
    }
    
    if (flag == false) {
        event.preventDefault();
        
        if ( confirm("ok") == true ) {
            document.getElementById('modal-wrapper').classList.remove('modal-inactive');
            
            setTimeout(close_modal, 5000);
        }
    }
}