
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { FormValidatorProvider } from "./contexts/FormValidatorContext";

// import { AuthenticatedRouting } from "./components/authRoutes/AuthenticatedRouting";

// import { Team } from "./components/teamInfo/Team";
// import { AddNewCar } from "./components/carsCatalogue/newCar/AddNewCar";
// import { Catalogue } from "./components/carsCatalogue/Catalogue";
// import { EditCar } from "./components/carsCatalogue/editCar/Editcar";
// import { CarDetails } from "./components/carsCatalogue/carsDetails/CarDetails";
// import { AboutUs } from "./components/homePage/AboutUs";
import { Footer } from "./components/globalComponents/Footer";
// import { ImageInfo } from "./components/homePage/ImageInfo";
import { Navigation } from "./components/globalComponents/Navigation";
import { DownBar } from "./components/homePage/DownBar";
// import { Login } from "./components/user/Login";
// import { Register } from "./components/user/Register";
// import { NotFound } from "./components/pageNotFound/NotFound";
// import { AddComment } from "./components/carsCatalogue/comments/AddComment";
// import { Logout } from "./components/user/Logout";
// import { Mycars } from "./components/carsCatalogue/mycars/Mycars";
// import { Likedcars } from "./components/carsCatalogue/mycars/Likedcars";
 import { ScrollArrow } from "./components/globalComponents/ScrollArrow";

function App() {


  return (

    <AuthProvider>
      <FormValidatorProvider>
        <Navigation />
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, similique sed sunt ullam sit, minus dolorem unde dolores reiciendis cum corporis tenetur! Odit vitae ducimus itaque voluptate perspiciatis corrupti eos odio nemo nobis soluta corporis, at dolorem consectetur fuga numquam, minima velit temporibus doloribus. Illum minima saepe ipsum fugiat, repudiandae provident minus nihil asperiores quas facilis, unde deserunt vero explicabo sit quibusdam quaerat delectus, inventore hic autem? Inventore repellat, sint dolorem aspernatur in delectus. Ut consequuntur iste dolor quaerat rem molestias vitae explicabo voluptates veniam accusamus culpa quod a, corrupti quos expedita possimus fuga est cum. Molestiae sunt iure ipsum?</h1>

        <ScrollArrow />
        <DownBar />
        <Footer />
      </FormValidatorProvider>
    </AuthProvider>






    //     <Routes>

    //       <Route
    //         path="/"
    //         element={
    //           <>
    //             <ImageInfo />
    //             <AboutUs />
    //             <Catalogue />
    //             <Team />
    //           </>
    //         }
    //       />

    //       <Route path="/cars/" element={<Catalogue />} />
    //       <Route path="/team" element={<Team />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/logout" element={<Logout />} />

    //       <Route element={<AuthenticatedRouting />}>
    //         <Route path="/new-car" element={<AddNewCar />} />
    //         <Route path="/my-cars" element={<Mycars />} />
    //         <Route path="/liked-cars" element={<Likedcars />} />
    //         <Route path="/comments/:carId" element={<AddComment />} />
    //         <Route path="/cars/:carId" element={<CarDetails />} />
    //         <Route path="/cars/:carId/edit" element={<EditCar />} />
    //       </Route>

    //       <Route path="*" element={<NotFound />} />
    //     </Routes>










  );
}

export default App;
