import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const EditorialBoard = () => (
  <div className="p-6 bg-emerald-50 rounded-lg shadow-md max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold text-emerald-900 mb-6 text-center">Editorial Board</h1>

    {/* Senior Editors */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-emerald-800 mb-4 border-b-2 border-emerald-300 pb-2">Senior Editors</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium text-emerald-700">Prof. Dr. Fouzia Perveen Malik</h3>
        <p className="text-gray-700">National University of Sciences and Technology, Islamabad, Pakistan</p>
        <p className="text-gray-700 flex items-center"><FaEnvelope className="mr-2" /> fouzia@sines.nust.edu.pk</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium text-emerald-700">Kennedy Chibuzor Onyelowe</h3>
        <p className="text-gray-700">Department of Civil Engineering, Michael Okpara University of Agriculture, Nigeria</p>
        <p className="text-gray-700 flex items-center"><FaEnvelope className="mr-2" /> konyelowe@mouau.edu.ng</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium text-emerald-700">Dr. Muhammad Mohsin Waqas</h3>
        <p className="text-gray-700">Khwaja Fareed University of Engineering and Information Technology, Pakistan</p>
        <p className="text-gray-700 flex items-center"><FaEnvelope className="mr-2" /> mohsin.waqas@kfueit.edu.pk</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium text-emerald-700">Dr. Megersa Kebede Leta</h3>
        <p className="text-gray-700">University of Rostock, Germany</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium text-emerald-700">Dr. Danyal Aziz</h3>
        <p className="text-gray-700">Engineer II, Division of Water Resources, Department of Natural Resources, Utah, USA</p>
        <p className="text-gray-700 flex items-center"><FaEnvelope className="mr-2" /> daziz@utah.gov</p>
        <p className="text-gray-700 flex items-center"><FaPhone className="mr-2" /> +1 303 332 3771</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium text-emerald-700">Dr. Umm-e-Laila</h3>
        <p className="text-gray-700">National University of Sciences and Technology, Islamabad, Pakistan</p>
        <p className="text-gray-700 flex items-center"><FaEnvelope className="mr-2" /> dr.umelaila@s3h.nust.edu.pk</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-medium text-emerald-700">Dr. Rai Khalid Farooq</h3>
        <p className="text-gray-700">Assistant Professor - Physiology, College of Medicine and Health Sciences, Arabian Gulf University, Bahrain</p>
        <p className="text-gray-700 flex items-center"><FaEnvelope className="mr-2" /> raikf@agu.edu.bh</p>
        <p className="text-gray-700 flex items-center"><FaPhone className="mr-2" /> +973 17 239 767</p>
        <p className="text-gray-700 flex items-center"><FaPhone className="mr-2" /> +973 3456 2041</p>
      </div>
      
   
    </section>
  </div>
);

export default EditorialBoard;
