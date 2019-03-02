import { AuthService } from './../services/auth.service';

export class SingUpComponent {
    constructor() {
        this._authService = new AuthService(); 
    }
    async beforeRender() {
        
    }
    //method creates markup
    render() {
        return `
        <div class="auth-wrap d-flex">
            <div class="auth-form col col-6 mx-auto my-auto">
                <h3>Sign Up to Social.</h3>
                <p class="text-secondary">It's awesome here... Enter.</p>

                <form name="signUpForm" novalidate>
                    <div class="form-group">
                        <div class="row">
                            <div class="col col-6">
                                <input type="text" class="form-control form-control-sm" id="first_name" placeholder="First Name">
                            </div>
                            <div class="col col-6">
                                <input type="text" class="form-control form-control-sm" id="last_name" placeholder="Last Name">
                            </div>
                        </div>

                        <input type="text" class="form-control form-control-sm mt-3" id="nickname" placeholder="Nick Name">

                        <div class="row mt-3">
                            <div class="col col-4">
                                <input type="text" class="form-control form-control-sm" id="date_of_birth_day" placeholder="Day">
                            </div>
                            <div class="col col-4">
                                <input type="text" class="form-control form-control-sm" id="date_of_birth_month" placeholder="Month">
                            </div>
                            <div class="col col-4">
                                <input type="text" class="form-control form-control-sm" id="date_of_birth_year" placeholder="Year">
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col col-6">
                                <input type="text" class="form-control form-control-sm" id="country" placeholder="Country">
                            </div>
                            <div class="col col-6">
                                <input type="text" class="form-control form-control-sm" id="city" placeholder="City">
                            </div>
                        </div>

                        <select name="gender" id="gender_orientation" class="form-control form-control-sm mt-3">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <input type="email" class="form-control form-control-sm mt-3" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="text" class="form-control form-control-sm mt-3" id="phone" placeholder="Phone number">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                        
                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">Sign Up</button>
                            <a href="http://localhost:9000/#/login" class="btn btn-link btn-sm ml-auto">Already have an account? Sign in</a>
                        </div>
                    </div>
                </form>
            </div><!-- /.auth-form -->
            
            <div class="auth-bg col col-6">
            </div><!-- /.auth-bg -->   
        </div><!-- /.auth-wrap -->
        `;
    }

    //event method for sending registration request
    afterRender() {
        document.forms['signUpForm'].addEventListener('submit', (e) => {
            e.preventDefault();

            const elem = e.target.elements; //variable for shorter recording

            //create an object with form data
            const data = {
                email:               elem["email"].value,
                password:            elem['password'].value,
                nickname:            elem['nickname'].value,
                first_name:          elem['first_name'].value,
                last_name:           elem['last_name'].value,
                phone:               elem['phone'].value,
                gender_orientation:  elem['gender_orientation'].value,
                city:                elem['city'].value,
                country:             elem['country'].value,
                date_of_birth_day:   elem['date_of_birth_day'].value,
                date_of_birth_month: elem['date_of_birth_month'].value,
                date_of_birth_year:  elem['date_of_birth_year'].value
            }

            let flag = true; //flag to detect errors in the cycle

            for (let key in data) {
                if (elem[key].classList.contains('border-danger')) elem[key].classList.remove('border-danger');
                if (!data[key]) {
                    elem[key].classList.add('border-danger');
                    flag = false; //check failed, change flag
                }
            }
            
            //Before sending a request, we check for errors or not
            if (!flag) return console.log('no data');

            //send request
            this._authService.singUp(data)
                .then((response) => {
                    console.log("response: ", response);
                    document.forms['signUpForm'].reset();
                })
                .catch((err) => {
                    console.log("err: ", err);
                });              
        });
    }
}