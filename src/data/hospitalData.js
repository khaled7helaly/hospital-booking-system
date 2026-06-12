import doctorImg from "../assets/images/doctor.jpg";
import orthopedicsImg from "../assets/images/orthopedics.jpg";
import pediatricsImg from "../assets/images/pediatrics.jpg";
import dermatologyImg from "../assets/images/dermatology.jpg";
import ophthalmologyImg from "../assets/images/ophthalmology.jpg";
import dentistryImg from "../assets/images/dentistry.jpg";
import cardiologyImg from "../assets/images/cardiology.jpg";
import orthopedicsDeptImg from "../assets/images/orthopedics-department2.jpg";

export const departments = [
  {
    id: 1,
    slug: "orthopedics",
    name: "Orthopedics",
    description: "Bone, joint, spine, fractures, and sports injury care.",
    image: orthopedicsImg,
  },
  {
    id: 2,
    slug: "pediatrics",
    name: "Pediatrics",
    description: "Complete medical care for children from newborns to teenagers.",
    image: pediatricsImg,
  },
  {
    id: 3,
    slug: "dermatology",
    name: "Dermatology",
    description: "Skin, hair, allergy, cosmetic, and laser treatment services.",
    image: dermatologyImg,
  },
  {
    id: 4,
    slug: "ophthalmology",
    name: "Ophthalmology",
    description: "Eye checkups, vision correction, retina, and glaucoma care.",
    image: ophthalmologyImg,
  },
  {
    id: 5,
    slug: "dentistry",
    name: "Dentistry",
    description: "Dental, orthodontic, oral surgery, and pediatric dental care.",
    image: dentistryImg,
  },
  {
    id: 6,
    slug: "cardiology",
    name: "Cardiology",
    description: "Heart diagnostics, interventional care, and preventive cardiology.",
    image: cardiologyImg,
  },
];

export const departmentsData = {
  orthopedics: {
    info: {
      title: "Orthopedics Department",
      description:
        "The Orthopedics department specializes in bone, joint, and spine care with advanced diagnostic and surgical techniques.",
      image: orthopedicsDeptImg,
      highlights: [
        "Sports injury treatments",
        "Spine and joint surgery expertise",
        "Trauma and fracture management",
      ],
    },
    doctors: [
      {
        id: 101,
        name: "Dr. Ahmed Hassan",
        specialty: "Orthopedic Surgeon",
        image: doctorImg,
        experience: "12 years",
        location: "Floor 2 - Clinic 204",
        fees: "500 EGP",
        rating: 4.8,
        availableTimes: ["09:00 AM", "10:30 AM", "12:00 PM", "04:30 PM"],
      },
      {
        id: 102,
        name: "Dr. Sara Adel",
        specialty: "Joint Specialist",
        image: doctorImg,
        experience: "9 years",
        location: "Floor 2 - Clinic 206",
        fees: "450 EGP",
        rating: 4.7,
        availableTimes: ["10:00 AM", "01:00 PM", "03:30 PM", "06:00 PM"],
      },
      {
        id: 103,
        name: "Dr. Khaled Nabil",
        specialty: "Spine Consultant",
        image: doctorImg,
        experience: "15 years",
        location: "Floor 3 - Clinic 301",
        fees: "650 EGP",
        rating: 4.9,
        availableTimes: ["09:30 AM", "11:30 AM", "02:30 PM", "05:00 PM"],
      },
      {
        id: 104,
        name: "Dr. Noor Mahmoud",
        specialty: "Sports Injury Specialist",
        image: doctorImg,
        experience: "8 years",
        location: "Floor 2 - Clinic 205",
        fees: "500 EGP",
        rating: 4.6,
        availableTimes: ["09:00 AM", "12:30 PM", "03:00 PM", "05:30 PM"],
      },
    ],
  },
  pediatrics: {
    info: {
      title: "Pediatrics Department",
      description:
        "The Pediatrics department provides child-friendly care for newborns, children, and adolescents.",
      image: pediatricsImg,
      highlights: [
        "Neonatal and infant care",
        "Child nutrition programs",
        "Routine checkups and vaccination follow-up",
      ],
    },
    doctors: [
      {
        id: 201,
        name: "Dr. Mona Samir",
        specialty: "Pediatrician",
        image: doctorImg,
        experience: "11 years",
        location: "Floor 1 - Clinic 105",
        fees: "400 EGP",
        rating: 4.8,
        availableTimes: ["09:00 AM", "10:30 AM", "01:30 PM", "05:00 PM"],
      },
      {
        id: 202,
        name: "Dr. Rania Fawzy",
        specialty: "Neonatology Specialist",
        image: doctorImg,
        experience: "13 years",
        location: "Floor 1 - Clinic 107",
        fees: "550 EGP",
        rating: 4.9,
        availableTimes: ["10:00 AM", "12:00 PM", "03:00 PM", "06:00 PM"],
      },
      {
        id: 203,
        name: "Dr. Omar Yasser",
        specialty: "Child Nutrition Consultant",
        image: doctorImg,
        experience: "7 years",
        location: "Floor 1 - Clinic 109",
        fees: "350 EGP",
        rating: 4.6,
        availableTimes: ["09:30 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
      },
    ],
  },
  dermatology: {
    info: {
      title: "Dermatology Department",
      description:
        "The Dermatology department offers medical and cosmetic skin care with modern laser and allergy treatment options.",
      image: dermatologyImg,
      highlights: [
        "Cosmetic dermatology",
        "Laser treatment technology",
        "Skin allergy management",
      ],
    },
    doctors: [
      {
        id: 301,
        name: "Dr. Karim Mostafa",
        specialty: "Dermatologist",
        image: doctorImg,
        experience: "10 years",
        location: "Floor 4 - Clinic 402",
        fees: "500 EGP",
        rating: 4.7,
        availableTimes: ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"],
      },
      {
        id: 302,
        name: "Dr. Heba Magdy",
        specialty: "Cosmetic Dermatology Specialist",
        image: doctorImg,
        experience: "8 years",
        location: "Floor 4 - Clinic 405",
        fees: "600 EGP",
        rating: 4.8,
        availableTimes: ["10:30 AM", "01:00 PM", "03:30 PM", "06:00 PM"],
      },
      {
        id: 303,
        name: "Dr. Tarek Ali",
        specialty: "Skin Allergy Consultant",
        image: doctorImg,
        experience: "14 years",
        location: "Floor 4 - Clinic 407",
        fees: "550 EGP",
        rating: 4.9,
        availableTimes: ["09:30 AM", "12:30 PM", "02:30 PM", "05:30 PM"],
      },
    ],
  },
  ophthalmology: {
    info: {
      title: "Ophthalmology Department",
      description:
        "The Ophthalmology department provides routine eye care and specialist treatment for retina, glaucoma, and pediatric eye conditions.",
      image: ophthalmologyImg,
      highlights: [
        "Retina and glaucoma clinics",
        "Vision correction and eye surgery",
        "Pediatric ophthalmology care",
      ],
    },
    doctors: [
      {
        id: 401,
        name: "Dr. Youssef Essam",
        specialty: "Ophthalmologist",
        image: doctorImg,
        experience: "9 years",
        location: "Floor 3 - Clinic 310",
        fees: "450 EGP",
        rating: 4.7,
        availableTimes: ["09:00 AM", "11:00 AM", "01:00 PM", "04:00 PM"],
      },
      {
        id: 402,
        name: "Dr. Mariam Hany",
        specialty: "Retina Specialist",
        image: doctorImg,
        experience: "16 years",
        location: "Floor 3 - Clinic 312",
        fees: "700 EGP",
        rating: 4.9,
        availableTimes: ["10:00 AM", "12:00 PM", "03:00 PM", "05:30 PM"],
      },
      {
        id: 403,
        name: "Dr. Samir Farouk",
        specialty: "Glaucoma Consultant",
        image: doctorImg,
        experience: "18 years",
        location: "Floor 3 - Clinic 314",
        fees: "750 EGP",
        rating: 4.9,
        availableTimes: ["09:30 AM", "12:30 PM", "02:30 PM", "06:00 PM"],
      },
    ],
  },
  dentistry: {
    info: {
      title: "Dentistry Department",
      description:
        "The Dentistry department provides complete oral health care, orthodontics, cosmetic dentistry, and oral surgery services.",
      image: dentistryImg,
      highlights: [
        "Orthodontics and cosmetic dentistry",
        "Pediatric dental care",
        "Advanced oral surgery",
      ],
    },
    doctors: [
      {
        id: 501,
        name: "Dr. Laila Ashraf",
        specialty: "Dentist",
        image: doctorImg,
        experience: "10 years",
        location: "Floor 1 - Clinic 115",
        fees: "350 EGP",
        rating: 4.8,
        availableTimes: ["09:00 AM", "10:30 AM", "12:00 PM", "03:30 PM"],
      },
      {
        id: 502,
        name: "Dr. Amr Gamal",
        specialty: "Orthodontist",
        image: doctorImg,
        experience: "12 years",
        location: "Floor 1 - Clinic 116",
        fees: "600 EGP",
        rating: 4.8,
        availableTimes: ["10:00 AM", "01:00 PM", "04:00 PM", "06:00 PM"],
      },
      {
        id: 503,
        name: "Dr. Nada Sherif",
        specialty: "Endodontics Specialist",
        image: doctorImg,
        experience: "7 years",
        location: "Floor 1 - Clinic 118",
        fees: "450 EGP",
        rating: 4.6,
        availableTimes: ["09:30 AM", "11:30 AM", "02:00 PM", "05:00 PM"],
      },
    ],
  },
  cardiology: {
    info: {
      title: "Cardiology Department",
      description:
        "The Cardiology department supports heart health through diagnostics, interventional procedures, and preventive care.",
      image: cardiologyImg,
      highlights: [
        "Cardiac catheterization lab",
        "Interventional cardiology",
        "Preventive heart care programs",
      ],
    },
    doctors: [
      {
        id: 601,
        name: "Dr. Sameh Ibrahim",
        specialty: "Cardiologist",
        image: doctorImg,
        experience: "14 years",
        location: "Floor 5 - Clinic 501",
        fees: "650 EGP",
        rating: 4.8,
        availableTimes: ["09:00 AM", "11:00 AM", "01:30 PM", "05:00 PM"],
      },
      {
        id: 602,
        name: "Dr. Hoda Nader",
        specialty: "Interventional Cardiologist",
        image: doctorImg,
        experience: "17 years",
        location: "Floor 5 - Clinic 503",
        fees: "800 EGP",
        rating: 4.9,
        availableTimes: ["10:00 AM", "12:30 PM", "03:00 PM", "06:00 PM"],
      },
      {
        id: 603,
        name: "Dr. Fady Adel",
        specialty: "Electrophysiology Specialist",
        image: doctorImg,
        experience: "11 years",
        location: "Floor 5 - Clinic 505",
        fees: "750 EGP",
        rating: 4.7,
        availableTimes: ["09:30 AM", "11:30 AM", "02:30 PM", "04:30 PM"],
      },
    ],
  },
};

const normalizeSlug = (value = "") => value.toString().trim().toLowerCase();

export const getDepartmentBySlug = (departmentSlug) => {
  const normalizedSlug = normalizeSlug(departmentSlug);
  const departmentMeta = departments.find((department) => department.slug === normalizedSlug);
  const departmentDetails = departmentsData[normalizedSlug];

  if (!departmentMeta || !departmentDetails) return null;

  return {
    ...departmentMeta,
    ...departmentDetails,
    slug: normalizedSlug,
  };
};

export const getDepartmentByName = getDepartmentBySlug;

export const getDoctorById = (departmentSlug, doctorId) => {
  const department = getDepartmentBySlug(departmentSlug);
  return department?.doctors.find((doctor) => String(doctor.id) === String(doctorId)) || null;
};
