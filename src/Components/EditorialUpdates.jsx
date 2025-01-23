import React from "react";

const EditorialBoard = () => (
  <div className="p-6 bg-emerald-50 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-emerald-900 mb-6">Editorial Board</h1>

    {/* Senior Editors */}
    <section>
      <h2 className="text-xl font-semibold text-emerald-800 mb-3">Senior Editors</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Thomas von Larcher PhD, Springer Nature (Germany), Berlin, Germany</li>
      </ul>
    </section>

    {/* Assistant Editors */}
    <section className="mt-6">
      <h2 className="text-xl font-semibold text-emerald-800 mb-3">Assistant Editors</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Aditi Awate MSc, Springer Nature (India), Pune, India</li>
        <li>Shubham Gurav MSc, Springer Nature (India), Pune, India</li>
        <li>Aditi Lale MSc, Springer Nature (India), Pune, India</li>
        <li>Prajakta Lavhale MSc, Springer Nature (India), Pune, India</li>
      </ul>
    </section>

    {/* Senior Editorial Board Members - Applied Life Science */}
    <section className="mt-6">
      <h2 className="text-xl font-semibold text-emerald-800 mb-3">Senior Editorial Board Members - Applied Life Science</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Jialin Chen PhD, Southeast University, Nanjing, China</li>
        <li>Ahmed El-Shamy PhD, California Northstate University, Elk Grove, USA</li>
        <li>May Win Naing PhD, Singapore Institute of Manufacturing Technology, Singapore</li>
        <li>Anket Sharma PhD, Texas Tech University, Lubbock, USA</li>
        <li>Sri Suhartini PhD, PGCert, University of Brawijaya, Malang, Indonesia</li>
      </ul>
    </section>

    {/* Editorial Board Members - Applied Life Science */}
    <section className="mt-6">
      <h2 className="text-xl font-semibold text-emerald-800 mb-3">Editorial Board Members - Applied Life Science</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Abhilash PhD, National Metallurgical Laboratory, Jamshedpur, India</li>
        <li>Waleed Adel PhD, Mansoura University, Al Mansurah, Egypt</li>
        <li>Mark Ahearne BEng, MSc, PhD, Trinity College Dublin, Dublin, Ireland</li>
        <li>Zia Ahmed PhD, Shahjalal University of Science and Technology, Sylhet, Bangladesh</li>
        <li>Fidelis Odedishemi Ajibade PhD, Federal University of Technology, Akure, Nigeria</li>
        <li>Md Sabir Alam BPharm, PGDRA, MPharm, PhD, Shree Guru Gobind Singh Tricentenary University, Gurgaon, India</li>
        <li>Ammar AL-Farga MBBS, MD, PhD, University of Jeddah, Jeddah, Saudi Arabia</li>
        <li>Wajid Ali BSc, MPhil, PhD, University of Peshawar, Peshawar, Pakistan</li>
        <li>Natarajan Amaresan PhD, Uka Tarsadia University, Surat, India</li>
        <li>Andrew Amenaghawon BEng, MSc, PhD, University of Benin, Benin City, Nigeria</li>
        {/* Add more names as necessary */}
      </ul>
    </section>
  </div>
);

export default EditorialBoard;
