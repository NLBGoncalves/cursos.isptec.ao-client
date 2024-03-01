"use client";
import { useEffect, useState } from "react";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { useSearchParams } from "next/navigation";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import { styles } from "../styles/style";
import CourseCard from "../components/Course/CourseCard";
import Footer from "../components/Footer";

// Define o tipo dos dados dos cursos
interface Course {
  id: number;
  name: string;
  categories: string;
  // Adicione outros campos conforme necessário
}

const Page = () => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("title");
  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
  const { data: categoriesData } = useGetHeroDataQuery("Categories", {});
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]); // Defina o tipo do estado dos cursos
  const [category, setCategory] = useState<string>("All");

  useEffect(() => {
    // Função para filtrar os cursos com base na categoria e na pesquisa
    const filterCourses = () => {
      if (category === "All") {
        setCourses(data?.courses || []);
      } else {
        setCourses(
          data?.courses.filter((item: Course) => item.categories === category) || []
        );
      }
    };

    // Atualize os cursos quando os dados, a categoria ou a pesquisa mudarem
    filterCourses();
  }, [data, category, search]);

  const categories = categoriesData?.layout.categories;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
          <div className="w-[95%] 800px:w-[85%] m-auto min-h-[70vh]">
            <Heading
              title={"Todos os cursos - cursos.isptec.ao"}
              description={"A plataforma CURSOS.ISPTEC.AO oferece aos alunos uma oportunidade de aprender e receber suporte dos professores."}
              keywords={"Cálculo, Álgebra Linear, Inglês, Química, Física, etc."}
            />
            <br />
            <div className="w-full flex items-center flex-wrap">
              <div
                className={`h-[35px] ${
                  category === "All" ? "bg-[#ffc107]" : "bg-[#5050cb]"
                } m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
                onClick={() => setCategory("All")}
              >
                Todos
              </div>
              {categories &&
                categories.map((item: any, index: number) => (
                  <div key={index}>
                    <div
                      className={`h-[35px] ${
                        category === item.title
                          ? "bg-[#ffc107]"
                          : "bg-[#5050cb]"
                      } m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
                      onClick={() => setCategory(item.title)}
                    >
                      {item.title}
                    </div>
                  </div>
                ))}
            </div>
            {
                courses.length === 0 && (
                    <p className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
                    {search ? "Nenhum curso encontrado!" : "Nenhum curso encontrado nesta categoria. Por favor, tente outro!"}
                  </p>
                )
            }
            <br />
            <br />
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
              {courses.map((item: Course, index: number) => (
                <CourseCard item={item} key={index} />
              ))}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Page;
