"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Coursess from "./courses";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Todos os Cursos - cursos.isptec.ao"
        description="CURSOS.ISPTEC.AO é um sistema de gerenciamento de aprendizagem para ajudar os estudantes."
        keywords="Cálculo, Álgebra Linear, English, Quimica, Fisica etc. ..."
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <br />
      <Coursess />
      <Footer />
    </div>
  );
};

export default Page;
