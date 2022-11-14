import './styles/App.scss';
import { UserProvider } from './context/UserProvider';
import Router from './Router/Router';
// import { usePostLogin } from './components/API/POST-Login';

// import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";


function App() {
  // var urlApi ="https://backend-app-v1.herokuapp.com"
  // fetch('https://backend-app-v1.herokuapp.com/publico/noticias')
  // .then((response) => response.json())
  // .then((data) => console.log(data));

  // datos mandados con la solicutud POST


  // const { data, error } = usePostLogin()
  
  // console.log(data || error &&  `${error.status}- ${error.statusText}` )


let registro = {
  dni: "80467508",
  fechaNac: "19/10/1979",
  codAdm: "583704900",
  email: "randy.vdiaz@gmail.com",
  password: "randy",
  nombres: "Joseph Randy",
  apellidos: "Vega Diaz",
  codRole: "2"
}


  var x = window.matchMedia("(max-width: 700px)")
  let navegador = navigator.userAgent;
  let isMobile;
  let isOrientationVertical;
  
  // eslint-disable-next-line no-unused-expressions
  (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))?
    ( isMobile = true,
      window.orientation ===  0 ? isOrientationVertical = true : isOrientationVertical = false
    )
    :
    ( isMobile = false,
      window.orientation ===  0 ? isOrientationVertical = false : isOrientationVertical = true
    );
    // console.log(window.orientation , "si es 0 entonces False, si es 90 entonces True");

  // console.log('isOrientationVertical', isOrientationVertical);

  // alert(`window.innerWidth :: ${window.innerWidth} ; window.innerHeight :: ${window.innerHeight}`);

  //*******************Theme *******************

  // useEffect(() => {
  //   if (!localStorage.getItem('theme')) {
  //     localStorage.setItem('theme', 'light');
  //   }
  // }, []);

  // const theme = localStorage.getItem('theme');
  // const [currentTheme, setCurrentTheme] = useState(theme);

  // const setTheme = () => {
  //   if (currentTheme === 'light') {
  //     setCurrentTheme('dark');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     setCurrentTheme('light');
  //     localStorage.setItem('theme', 'light');
  //   };
  // };

  // const { user } = useUserContext()

  // console.log(useUserContext())
  // console.log(numero)
  

  return (

    <UserProvider>
      <Router x={x} />
    </UserProvider>

  );
}

export default App;
