import SingnupPage from '../pages/signup/index';
import signupFactory  from '../../factories/signupFactory';

export default function createNewBarber() {

    let barber = signupFactory.barber();

    let signupPage = new SingnupPage();

    signupPage.go();
    signupPage.fillForm(barber);
    signupPage.submit();

    signupPage.checkToastMessage('Agora você pode fazer seu login no Samurai Barbershop!');
    return barber;
}