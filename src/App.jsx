import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import SecondPage from 'pages/SecondPage/SecondPage';
// import HalfPage from 'pages/HalfPage/HalfPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';


function App() {
  return (
    // <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/catalog" element={<FirstPage />} />
          <Route path="/favorites" element={<SecondPage />}>
            {/* <Route path=":half" element={<HalfPage />} /> */}
          </Route>
          {/* <Route path="*" redirect to element={<ErrorPage />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    // </AppWrapper>
  );
}


export default App;

// У застосунку повинні бути такі маршрути:

// “/” - домашня сторінка з загальним описом послуг, що надає компанія

// “/catalog” - сторінка, що містить каталог камперів різної комплектації

// “/favorites” - сторінка з оголошеннями(оформлення на ваш розсуд), які були додані користувачем в улюблені

// Якщо користувач зайшов за маршрутом, якого не існує, його необхідно перенаправляти на  домашню сторінку.
