'use client'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from '../../../app/utils/Heading';
import OrdersAnalytics from "../../components/Admin/Analytics/OrdersAnalytics";
import DashboardHeader from '../../../app/components/Admin/DashboardHeader';

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="cursos.isptec.ao -Admin"
        description="A plataforma CURSOS.ISPTEC.AO oferece aos alunos uma oportunidade de aprender e receber suporte dos professores."
        keywords="Cálculo, Álgebra Linear, English, Quimica, Fisica etc. ..."
      />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
               <OrdersAnalytics />
            </div>
        </div>
    </div>
  )
}

export default page