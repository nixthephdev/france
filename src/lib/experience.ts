type ExperienceRole = {
  title: string;
  startDate: string;
  endDate: string | null;
  employmentType?: string;
  description: string[];
};

type ExperienceOrganisation = {
  id: string;
  name: string;
  roles: ExperienceRole[];
};

// Roles and month/year dates come from the user's LinkedIn Experience screenshots.
// Descriptions are concise summaries of that supplied text, not added credentials.
// null endDate records "Present" in the supplied profile; no stale tenure totals.
export const experience: ExperienceOrganisation[] = [
  {
    id: "sustainability-ph",
    name: "Sustainability PH",
    roles: [{
      title: "Member",
      startDate: "2026-09",
      endDate: null,
      description: [
        "Selected for Learn2Lead Sustainability (L2LS), Cohort 5, a 10-week leadership programme focused on practical sustainability and ESG within the Philippine context.",
        "Developing a sustainability-focused capstone project while deepening practice in ESG, regenerative approaches and sustainable business. Member of the Society of Sustainable Practitioners (SSP).",
      ],
    }],
  },
  {
    id: "depd",
    name: "Department of Economy, Planning, and Development",
    roles: [{
      title: "Member",
      startDate: "2026-07",
      endDate: null,
      employmentType: "Full-time",
      description: [
        "Supports cross-sector collaboration on initiatives aligned with the Sustainable Development Goals (SDGs), sustainable business practices and inclusive growth in the Philippines.",
        "Engages with government, business, civil society and other stakeholders to support implementation of the SDGs and sustainable development.",
      ],
    }],
  },
  {
    id: "united-nations",
    name: "United Nations",
    roles: [{
      title: "Sustainability Honorary Advisor",
      startDate: "2025-11",
      endDate: null,
      employmentType: "Part-time",
      description: [
        "Connects international sustainability frameworks with practical, local action for businesses and institutions.",
        "Focuses on SDGs 3, 12 and 13: health and well-being, responsible consumption and production, and climate action, including the connections between nutrition, health and sustainability.",
      ],
    }],
  },
  {
    id: "teamviser",
    name: "TeamViser Co.",
    roles: [{
      title: "Founder",
      startDate: "2024-02",
      endDate: null,
      employmentType: "Full-time",
      description: [
        "Guides individuals and entrepreneurs through business health assessments, customer experience strategies, retention, marketing and sales planning, and action-oriented mentorship.",
        "Supports business owners and founders with practical roadmaps, advice and hands-on consulting for sustainable growth.",
      ],
    }],
  },
  {
    id: "green-earth-group",
    name: "The Green Earth Group",
    roles: [
      {
        title: "Chief Growth Partner",
        startDate: "2024-01",
        endDate: null,
        employmentType: "Part-time",
        description: [
          "Leads business growth and operational work across plant-based food service, farm-to-table systems, production and revenue streams.",
          "Develops ESG-driven sustainability initiatives and partnerships, supports launches and community engagement, and mentors cross-functional teams.",
        ],
      },
      {
        title: "Head of Marketing",
        startDate: "2023-10",
        endDate: "2023-12",
        employmentType: "Full-time",
        description: [
          "Oversaw creative direction, branding and long-term marketing strategy, including brand strategy and creative content.",
        ],
      },
    ],
  },
  {
    id: "ted-conferences",
    name: "TED Conferences",
    roles: [{
      title: "Speaker",
      startDate: "2025-10",
      endDate: null,
      employmentType: "Freelance",
      description: [
        "TEDxRizalStreetYouth speaker for Unwritten Pages, with the talk “Writing a Healthier Tomorrow: The Next Pages of Food and Sustainability.”",
        "Explores the connections between food, health, fitness and sustainability, including the impact of everyday food choices on people and the planet.",
      ],
    }],
  },
  {
    id: "go-negosyo",
    name: "Go Negosyo",
    roles: [{
      title: "Strategic Mentor",
      startDate: "2024-01",
      endDate: null,
      employmentType: "Freelance",
      description: [
        "Mentors aspiring and established entrepreneurs on business development, marketing and growth through Go Negosyo's mentorship programmes.",
        "Guides MSMEs on sustainable business models, branding and financial literacy, supporting inclusive opportunities for Filipino entrepreneurs.",
      ],
    }],
  },
  {
    id: "glg",
    name: "GLG",
    roles: [{
      title: "Industry Expert",
      startDate: "2024-02",
      endDate: "2024-03",
      employmentType: "Freelance",
      description: [
        "Industry expert in GLG's insight network, which connects business decision-makers with people who have first-hand industry experience.",
      ],
    }],
  },
  {
    id: "pfizer",
    name: "Pfizer",
    roles: [
      {
        title: "National Account Specialist",
        startDate: "2016-08",
        endDate: "2017-12",
        description: [
          "Supported product demand and key account relationships in rheumatology and immunology, working with healthcare professionals and business partners.",
        ],
      },
      {
        title: "Sales, Hospital Accounts Team",
        startDate: "2015-04",
        endDate: "2016-07",
        description: [
          "Worked with the national hospital accounts team, handling key hospital accounts and pharmaceutical product promotion.",
        ],
      },
      {
        title: "Sales, Primary Care Team",
        startDate: "2013-09",
        endDate: "2015-03",
        description: [
          "Worked as a Professional Healthcare Representative in the national primary care team, handling hospital and medical-centre accounts in Metro Manila.",
        ],
      },
    ],
  },
  {
    id: "astrazeneca",
    name: "AstraZeneca",
    roles: [{
      title: "Sales, Customer Service Associate",
      startDate: "2012-09",
      endDate: "2013-08",
      description: [
        "Handled legacy-product brand promotion and managed relationships with trade partners, including pharmacies and supermarkets.",
      ],
    }],
  },
  {
    id: "rise-lending",
    name: "RISE Lending Corporation",
    roles: [{
      title: "Operations Researcher",
      startDate: "2012-01",
      endDate: "2012-09",
      description: [
        "Documented borrower eligibility and loan-processing policies, conducted surveys and analysed financial ratios, and helped develop an employment and education initiative.",
      ],
    }],
  },
];
