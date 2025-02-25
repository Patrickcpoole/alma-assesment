import { Lead, SortableField } from "@/types";
import { store } from "@/common/store/store";

export const mockLeads: Lead[] = [
  {
    id: "1",
    firstName: "Jorge",
    lastName: "Ruiz",
    email: "jorge.ruiz@example.com",
    linkedin: "https://linkedin.com/in/jorge-ruiz",
    visaCategories: ["EB-1A"],
    resumeUrl: "/uploads/jorge-resume.pdf",
    message: "Experienced software engineer with multiple patents.",
    status: "PENDING",
    createdAt: "2024-03-01T14:45:00",
    country: "Mexico",
  },
  {
    id: "2",
    firstName: "Yuki",
    lastName: "Tanaka",
    email: "yuki.t@example.com",
    linkedin: "https://linkedin.com/in/yuki-tanaka",
    visaCategories: ["O-1"],
    resumeUrl: "/uploads/yuki-resume.pdf",
    message: "AI researcher with publications in top journals.",
    status: "REACHED_OUT",
    createdAt: "2024-03-02T10:30:00",
    country: "Japan",
  },
  {
    id: "3",
    firstName: "Priya",
    lastName: "Patel",
    email: "priya.p@example.com",
    linkedin: "https://linkedin.com/in/priya-patel",
    visaCategories: ["EB-2 NIW"],
    resumeUrl: "/uploads/priya-resume.pdf",
    message: "Biotech researcher specializing in cancer therapeutics.",
    status: "PENDING",
    createdAt: "2024-03-03T09:15:00",
    country: "India",
  },
  {
    id: "4",
    firstName: "Chen",
    lastName: "Wei",
    email: "chen.wei@example.com",
    linkedin: "https://linkedin.com/in/chen-wei",
    visaCategories: ["O-1", "EB-1A"],
    resumeUrl: "/uploads/chen-resume.pdf",
    message: "Quantum computing researcher with breakthrough discoveries.",
    status: "REACHED_OUT",
    createdAt: "2024-03-03T11:20:00",
    country: "China",
  },
  {
    id: "5",
    firstName: "Sofia",
    lastName: "Garcia",
    email: "sofia.g@example.com",
    linkedin: "https://linkedin.com/in/sofia-garcia",
    visaCategories: ["EB-1A"],
    resumeUrl: "/uploads/sofia-resume.pdf",
    message: "Award-winning filmmaker with international recognition.",
    status: "PENDING",
    createdAt: "2024-03-04T13:45:00",
    country: "Spain",
  },
  {
    id: "6",
    firstName: "Amir",
    lastName: "Hosseini",
    email: "amir.h@example.com",
    linkedin: "https://linkedin.com/in/amir-hosseini",
    visaCategories: ["EB-2 NIW"],
    resumeUrl: "/uploads/amir-resume.pdf",
    message: "Renewable energy researcher with multiple publications.",
    status: "REACHED_OUT",
    createdAt: "2024-03-04T15:30:00",
    country: "Iran",
  },
  {
    id: "7",
    firstName: "Anna",
    lastName: "Kowalski",
    email: "anna.k@example.com",
    linkedin: "https://linkedin.com/in/anna-kowalski",
    visaCategories: ["O-1"],
    resumeUrl: "/uploads/anna-resume.pdf",
    message: "Machine learning expert with industry-leading innovations.",
    status: "PENDING",
    createdAt: "2024-03-05T08:20:00",
    country: "Poland",
  },
  {
    id: "8",
    firstName: "Mohammed",
    lastName: "Al-Sayed",
    email: "mohammed.a@example.com",
    linkedin: "https://linkedin.com/in/mohammed-alsayed",
    visaCategories: ["EB-1A"],
    resumeUrl: "/uploads/mohammed-resume.pdf",
    message: "Pioneering research in artificial intelligence ethics.",
    status: "REACHED_OUT",
    createdAt: "2024-03-05T10:45:00",
    country: "Egypt",
  },
  {
    id: "9",
    firstName: "Lucas",
    lastName: "Silva",
    email: "lucas.s@example.com",
    linkedin: "https://linkedin.com/in/lucas-silva",
    visaCategories: ["O-1"],
    resumeUrl: "/uploads/lucas-resume.pdf",
    message: "Accomplished soccer player with international experience.",
    status: "PENDING",
    createdAt: "2024-03-06T09:30:00",
    country: "Brazil",
  },
  {
    id: "10",
    firstName: "Elena",
    lastName: "Popov",
    email: "elena.p@example.com",
    linkedin: "https://linkedin.com/in/elena-popov",
    visaCategories: ["EB-2 NIW"],
    resumeUrl: "/uploads/elena-resume.pdf",
    message: "Quantum physicist with groundbreaking research.",
    status: "REACHED_OUT",
    createdAt: "2024-03-06T14:15:00",
    country: "Russia",
  },
  {
    id: "11",
    firstName: "David",
    lastName: "Kim",
    email: "david.k@example.com",
    linkedin: "https://linkedin.com/in/david-kim",
    visaCategories: ["O-1"],
    resumeUrl: "/uploads/david-resume.pdf",
    message: "Blockchain technology innovator and entrepreneur.",
    status: "PENDING",
    createdAt: "2024-03-07T11:30:00",
    country: "South Korea",
  },
  {
    id: "12",
    firstName: "Maria",
    lastName: "Rodriguez",
    email: "maria.r@example.com",
    linkedin: "https://linkedin.com/in/maria-rodriguez",
    visaCategories: ["EB-1A"],
    resumeUrl: "/uploads/maria-resume.pdf",
    message: "Distinguished professor in neuroscience.",
    status: "REACHED_OUT",
    createdAt: "2024-03-07T16:45:00",
    country: "Argentina",
  },
  {
    id: "13",
    firstName: "Ahmed",
    lastName: "Hassan",
    email: "ahmed.h@example.com",
    linkedin: "https://linkedin.com/in/ahmed-hassan",
    visaCategories: ["EB-2 NIW"],
    resumeUrl: "/uploads/ahmed-resume.pdf",
    message: "Pioneering research in sustainable architecture.",
    status: "PENDING",
    createdAt: "2024-03-08T09:20:00",
    country: "Saudi Arabia",
  },
  {
    id: "14",
    firstName: "Emma",
    lastName: "Anderson",
    email: "emma.a@example.com",
    linkedin: "https://linkedin.com/in/emma-anderson",
    visaCategories: ["O-1"],
    resumeUrl: "/uploads/emma-resume.pdf",
    message: "Award-winning digital artist and animator.",
    status: "REACHED_OUT",
    createdAt: "2024-03-08T13:40:00",
    country: "Australia",
  },
  {
    id: "15",
    firstName: "Viktor",
    lastName: "Kovac",
    email: "viktor.k@example.com",
    linkedin: "https://linkedin.com/in/viktor-kovac",
    visaCategories: ["EB-1A"],
    resumeUrl: "/uploads/viktor-resume.pdf",
    message: "Innovative robotics engineer with multiple patents.",
    status: "PENDING",
    createdAt: "2024-03-09T10:15:00",
    country: "Croatia",
  },
  {
    id: "16",
    firstName: "Nina",
    lastName: "Ivanova",
    email: "nina.i@example.com",
    linkedin: "https://linkedin.com/in/nina-ivanova",
    visaCategories: ["EB-2 NIW"],
    resumeUrl: "/uploads/nina-resume.pdf",
    message: "Leading researcher in climate change studies.",
    status: "REACHED_OUT",
    createdAt: "2024-03-09T14:30:00",
    country: "Ukraine",
  },
  {
    id: "17",
    firstName: "Raj",
    lastName: "Sharma",
    email: "raj.s@example.com",
    linkedin: "https://linkedin.com/in/raj-sharma",
    visaCategories: ["O-1"],
    resumeUrl: "/uploads/raj-resume.pdf",
    message: "Tech entrepreneur with successful AI startups.",
    status: "PENDING",
    createdAt: "2024-03-10T09:15:00",
    country: "India",
  },
  {
    id: "18",
    firstName: "Isabella",
    lastName: "Santos",
    email: "isabella.s@example.com",
    linkedin: "https://linkedin.com/in/isabella-santos",
    visaCategories: ["EB-1A"],
    resumeUrl: "/uploads/isabella-resume.pdf",
    message: "Renowned marine biologist specializing in coral restoration.",
    status: "REACHED_OUT",
    createdAt: "2024-03-10T13:20:00",
    country: "Brazil",
  },
  {
    id: "19",
    firstName: "Liam",
    lastName: "O'Connor",
    email: "liam.o@example.com",
    linkedin: "https://linkedin.com/in/liam-oconnor",
    visaCategories: ["EB-2 NIW"],
    resumeUrl: "/uploads/liam-resume.pdf",
    message: "Leading researcher in renewable energy storage solutions.",
    status: "PENDING",
    createdAt: "2024-03-11T10:30:00",
    country: "Ireland",
  },
  {
    id: "20",
    firstName: "Fatima",
    lastName: "El-Khoury",
    email: "fatima.e@example.com",
    linkedin: "https://linkedin.com/in/fatima-elkhoury",
    visaCategories: ["O-1"],
    resumeUrl: "/uploads/fatima-resume.pdf",
    message: "Award-winning architect specializing in sustainable design.",
    status: "REACHED_OUT",
    createdAt: "2024-03-11T15:45:00",
    country: "Lebanon",
  },
  {
    id: "21",
    firstName: "Hans",
    lastName: "Schmidt",
    email: "hans.s@example.com",
    linkedin: "https://linkedin.com/in/hans-schmidt",
    visaCategories: ["EB-1A"],
    resumeUrl: "/uploads/hans-resume.pdf",
    message: "Pioneering research in quantum cryptography.",
    status: "PENDING",
    createdAt: "2024-03-12T08:20:00",
    country: "Germany",
  },
  {
    id: "22",
    firstName: "Mei",
    lastName: "Zhang",
    email: "mei.z@example.com",
    linkedin: "https://linkedin.com/in/mei-zhang",
    visaCategories: ["EB-2 NIW"],
    resumeUrl: "/uploads/mei-resume.pdf",
    message: "Leading expert in CRISPR gene editing technology.",
    status: "REACHED_OUT",
    createdAt: "2024-03-12T11:30:00",
    country: "China",
  },
  {
    id: "23",
    firstName: "Carlos",
    lastName: "Mendoza",
    email: "carlos.m@example.com",
    linkedin: "https://linkedin.com/in/carlos-mendoza",
    visaCategories: ["O-1"],
    resumeUrl: "/uploads/carlos-resume.pdf",
    message: "Renowned chef with multiple Michelin stars.",
    status: "PENDING",
    createdAt: "2024-03-13T09:45:00",
    country: "Peru",
  },
  {
    id: "24",
    firstName: "Sarah",
    lastName: "Cohen",
    email: "sarah.c@example.com",
    linkedin: "https://linkedin.com/in/sarah-cohen",
    visaCategories: ["EB-1A"],
    resumeUrl: "/uploads/sarah-resume.pdf",
    message: "Cybersecurity expert with breakthrough encryption methods.",
    status: "REACHED_OUT",
    createdAt: "2024-03-13T14:20:00",
    country: "Israel",
  },
  {
    id: "25",
    firstName: "Nguyen",
    lastName: "Van Minh",
    email: "nguyen.m@example.com",
    linkedin: "https://linkedin.com/in/nguyen-vanminh",
    visaCategories: ["EB-2 NIW"],
    resumeUrl: "/uploads/nguyen-resume.pdf",
    message: "Leading researcher in tropical disease prevention.",
    status: "PENDING",
    createdAt: "2024-03-14T10:15:00",
    country: "Vietnam",
  },
  {
    id: "26",
    firstName: "Olga",
    lastName: "Petrov",
    email: "olga.p@example.com",
    linkedin: "https://linkedin.com/in/olga-petrov",
    visaCategories: ["O-1"],
    resumeUrl: "/uploads/olga-resume.pdf",
    message: "Prima ballerina with international recognition.",
    status: "REACHED_OUT",
    createdAt: "2024-03-14T15:30:00",
    country: "Russia",
  },
  {
    id: "27",
    firstName: "Kwame",
    lastName: "Mensah",
    email: "kwame.m@example.com",
    linkedin: "https://linkedin.com/in/kwame-mensah",
    visaCategories: ["EB-1A"],
    resumeUrl: "/uploads/kwame-resume.pdf",
    message: "Pioneering research in sustainable agriculture.",
    status: "PENDING",
    createdAt: "2024-03-15T09:20:00",
    country: "Ghana",
  },
  {
    id: "28",
    firstName: "Sophia",
    lastName: "Papadopoulos",
    email: "sophia.p@example.com",
    linkedin: "https://linkedin.com/in/sophia-papadopoulos",
    visaCategories: ["EB-2 NIW"],
    resumeUrl: "/uploads/sophia-resume.pdf",
    message: "Leading mathematician in cryptography research.",
    status: "REACHED_OUT",
    createdAt: "2024-03-15T13:45:00",
    country: "Greece",
  },
  {
    id: "29",
    firstName: "Alejandro",
    lastName: "Torres",
    email: "alejandro.t@example.com",
    linkedin: "https://linkedin.com/in/alejandro-torres",
    visaCategories: ["O-1"],
    resumeUrl: "/uploads/alejandro-resume.pdf",
    message: "Grammy-winning music producer and composer.",
    status: "PENDING",
    createdAt: "2024-03-16T11:30:00",
    country: "Colombia",
  },
  {
    id: "30",
    firstName: "Zara",
    lastName: "Ahmed",
    email: "zara.a@example.com",
    linkedin: "https://linkedin.com/in/zara-ahmed",
    visaCategories: ["EB-1A"],
    resumeUrl: "/uploads/zara-resume.pdf",
    message: "Revolutionary work in artificial neural networks.",
    status: "REACHED_OUT",
    createdAt: "2024-03-16T16:45:00",
    country: "Pakistan",
  },
];

export const fetchLeads = async (
  page: number,
  pageSize: number,
  sortField?: SortableField,
  sortDesc?: boolean,
  searchQuery?: string,
  statusFilter?: string
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const storeLeads = store.getState().leads.leads;
  let filteredLeads = [...storeLeads];

  if (searchQuery) {
    filteredLeads = filteredLeads.filter((lead) =>
      `${lead.firstName} ${lead.lastName}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }

  if (statusFilter && statusFilter !== "all") {
    filteredLeads = filteredLeads.filter(
      (lead) => lead.status === statusFilter.toUpperCase()
    );
  }

  if (sortField) {
    filteredLeads.sort((a: Lead, b: Lead) => {
      let aValue: string;
      let bValue: string;

      if (sortField === "fullName") {
        aValue = `${a.firstName} ${a.lastName}`;
        bValue = `${b.firstName} ${b.lastName}`;
      } else if (sortField === "createdAt") {
        aValue = a.createdAt;
        bValue = b.createdAt;
      } else {
        aValue = a[sortField];
        bValue = b[sortField];
      }

      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();

      if (aValue < bValue) return sortDesc ? 1 : -1;
      if (aValue > bValue) return sortDesc ? -1 : 1;
      return 0;
    });
  }

  const start = page * pageSize;
  const end = start + pageSize;
  const paginatedLeads = filteredLeads.slice(start, end);

  return {
    leads: paginatedLeads,
    totalPages: Math.ceil(filteredLeads.length / pageSize),
    totalLeads: filteredLeads.length,
  };
};
