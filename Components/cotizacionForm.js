import styles from '../Components/cotizacionForm.module.css'
import cn from 'classnames'
import $ from 'jquery'
import {Component} from 'react'

export default class CotizacionForm extends Component{

    state = {
        current_fs: null,
        next_fs: null,
        previous_fs: null,
        left: null,
        opacity: null,
        scale: null,
        animating : false
    }

    

    nextSection = (parent, next) => {
    
        console.log("entro a la funcion");
        console.log(parent, next);
        //if(this.state.animating) return false;
        this.setState({animating : true});
        this.setState({current_fs: parent});
        this.setState({next_fs: "prueba"});

        console.log(this.state.animating); 

        //activate next step on progressbar using the index of next_fs
        
        //$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        //show the next fieldset

    }

        
        //hide the current fieldset with style
        /*current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50)+"%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
            'transform': 'scale('+scale+')',
            'position': 'absolute'
        });
                next_fs.css({'left': left, 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });*/
    

    previousSection = (e) => {
        if(animating) return false;
        animating = true;
        current_fs = e.parent();
        previous_fs = e.parent().prev();
        
        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
        //show the previous fieldset
        previous_fs.show(); 
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_fs to the right(50%) - from 0%
                left = ((1-now) * 50)+"%";
                //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({'left': left});
                previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    };

    submit = () => {
        return false;
    };

    render(){
        return(
            <form id="msform" className={styles.msform}>

                <ul id="progressbar" className={styles.progressbar}>
                    <li className="active">Account Setup</li>
                    <li>Social Profiles</li>
                    <li>Personal Details</li>
                </ul>

                <fieldset>
                    <h2 className={styles["fs-title"]}>Create your account</h2>
                    <h3 className={styles["fs-subtitle"]}>This is step 1</h3>
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="pass" placeholder="Password" />
                    <input type="password" name="cpass" placeholder="Confirm Password" />
                    <input type="button" name="next" className={cn("next", styles["action-button"])} value="Next" onClick={(event)=> this.nextSection(event.currentTarget.parentNode, event.currentTarget.parentNode.nextSibling)}/>
                </fieldset>
                <fieldset>
                    <h2 className={styles["fs-title"]}>Social Profiles</h2>
                    <h3 className={styles["fs-subtitle"]}>Your presence on the social network</h3>
                    <input type="text" name="twitter" placeholder="Twitter" />
                    <input type="text" name="facebook" placeholder="Facebook" />
                    <input type="text" name="gplus" placeholder="Google Plus" />
                    <input type="button" name="previous" className={cn("previous", styles["action-button"])} value="Previous" onClick={(event)=> this.previousSection(event.currentTarget.parentNode, event.currentTarget.parentNode.previousSibling)}/>
                    <input type="button" name="next" className={cn("next", styles["action-button"])} value="Next" onClick={(event)=> this.nextSection(event.currentTarget.parentNode, event.currentTarget.parentNode.nextSibling)} />
                </fieldset>
                <fieldset>
                    <h2 className={styles["fs-title"]}>Personal Details</h2>
                    <h3 className={styles["fs-subtitle"]}>We will never sell it</h3>
                    <input type="text" name="fname" placeholder="First Name" />
                    <input type="text" name="lname" placeholder="Last Name" />
                    <input type="text" name="phone" placeholder="Phone"/>
                    <textarea name="address" placeholder="Address"></textarea>
                    <input type="button" name="previous" className={cn("previous", styles["action-button"])} value="Previous" onClick={(event)=> this.previousSection(event.currentTarget.parentNode, event.currentTarget.parentNode.previousSibling)}/>
                    <input type="submit" name="submit" className={cn("submit", styles["action-button"])} value="Submit" onClick={(event)=> submit(event)}/>
                </fieldset>
            </form>
        )
    }
}